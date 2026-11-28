import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const coursesDir = path.join(rootDir, 'courses');
const queueFile = path.join(rootDir, 'verification-queue', 'index.md');
const rulesJsonFile = path.join(rootDir, 'public', 'soic_rules.json');
const rootRulesJsonFile = path.join(rootDir, 'soic_rules.json');
const sidebarJsonFile = path.join(rootDir, '.vitepress', 'sidebar.json');

// Ensure directories exist
if (!fs.existsSync(path.join(rootDir, 'public'))) {
  fs.mkdirSync(path.join(rootDir, 'public'), { recursive: true });
}
if (!fs.existsSync(path.join(rootDir, 'verification-queue'))) {
  fs.mkdirSync(path.join(rootDir, 'verification-queue'), { recursive: true });
}

console.log('🔄 Starting SOIC Ingestion & Synchronization Pipeline...\n');

const verificationItems = [];
const harvestedRules = [];
const courseStructure = {};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_-]+/g, '-');
}

// 1. Scan sub-course folders
const subcourses = fs.readdirSync(coursesDir, { withFileTypes: true })
  .filter(d => d.isDirectory() && !d.name.startsWith('.'))
  .map(d => d.name);

subcourses.forEach(sub => {
  const subPath = path.join(coursesDir, sub);
  const files = fs.readdirSync(subPath).filter(f => f.endsWith('.md'));
  
  courseStructure[sub] = {
    subcourse: sub.toUpperCase(),
    folder: sub,
    subCourseSummaryFile: null,
    summaryReferencesFile: null,
    reports: []
  };

  files.forEach(f => {
    if (/subcourse_summary/i.test(f)) {
      courseStructure[sub].subCourseSummaryFile = f;
    } else if (/summary_reference/i.test(f)) {
      courseStructure[sub].summaryReferencesFile = f;
    } else if (/_report\.md$/i.test(f)) {
      // Extract Lecture ID from file name e.g. FA_Lec01_Report.md -> Lec 01
      const lecMatch = f.match(/lec(\d+)/i);
      const lecNum = lecMatch ? parseInt(lecMatch[1], 10) : 999;
      
      // Extract title from file content
      const filePath = path.join(subPath, f);
      const content = fs.readFileSync(filePath, 'utf-8');
      const titleMatch = content.match(/[-*]\s*\*\*Title:?\*\*:?\s*(.+)/i);
      const title = titleMatch ? titleMatch[1].trim() : f.replace('.md', '');

      courseStructure[sub].reports.push({
        file: f,
        lecNum,
        title,
        link: `/courses/${sub}/${f.replace('.md', '')}`
      });
    }
  });

  // Sort reports by lecture number
  courseStructure[sub].reports.sort((a, b) => a.lecNum - b.lecNum);

  // 2. Auto-generate or update index.md for each sub-course if SubCourse_Summary exists
  if (courseStructure[sub].subCourseSummaryFile) {
    const summaryPath = path.join(subPath, courseStructure[sub].subCourseSummaryFile);
    const rawSummary = fs.readFileSync(summaryPath, 'utf-8');
    const indexPath = path.join(subPath, 'index.md');

    let quickNav = `<div class="subcourse-nav-box">\n`;
    quickNav += `  <div class="subcourse-nav-title">Sub-Course Quick Navigation</div>\n`;
    quickNav += `<div class="flex flex-wrap gap-2 mt-2">\n`;
    
    if (courseStructure[sub].summaryReferencesFile) {
      quickNav += `  <a class="sanchay-pill" href="./${courseStructure[sub].summaryReferencesFile.replace('.md', '')}">⚡ 3-Min Summary Cards (D2)</a>\n`;
    }
    
    courseStructure[sub].reports.forEach(r => {
      quickNav += `  <a class="ts-chip" href="${r.link}">Lec ${r.lecNum < 10 ? '0' + r.lecNum : r.lecNum}</a>\n`;
    });
    quickNav += `</div>\n</div>\n\n`;

    const indexContent = quickNav + rawSummary;
    fs.writeFileSync(indexPath, indexContent);
    console.log(`📑 Auto-generated index.md for [${sub.toUpperCase()}] from ${courseStructure[sub].subCourseSummaryFile}`);
  }
});

// 3. Auto-generate .vitepress/sidebar.json
const sidebarConfig = {};
const courseNames = {
  chk: 'CHK: TVGP Framework Checklist',
  cc: 'CC: TVGP Crash Course',
  fa: 'FA: Mastering Fundamental Analysis',
  vp: 'V&P: Corporate Valuation & Strategy',
  bf: 'BF: Behavioural Finance',
  bs: 'BS: Buy Sell (When to Buy & Sell)',
  fas: 'FAS: Filter A Stock'
};

subcourses.forEach(sub => {
  const c = courseStructure[sub];
  const items = [
    { text: '🗺️ Sub-Course Overview (D3)', link: `/courses/${sub}/` }
  ];

  if (c.summaryReferencesFile) {
    items.push({
      text: '⚡ Summary Reference Cards (D2)',
      link: `/courses/${sub}/${c.summaryReferencesFile.replace('.md', '')}`
    });
  }

  if (c.reports.length > 0) {
    const reportItems = c.reports.map(r => ({
      text: `Lec ${r.lecNum < 10 ? '0' + r.lecNum : r.lecNum}: ${r.title}`,
      link: r.link
    }));
    items.push({
      text: '📑 Detailed Lecture Reports (D1)',
      collapsed: false,
      items: reportItems
    });
  }

  sidebarConfig[`/courses/${sub}/`] = [
    {
      text: courseNames[sub] || `${sub.toUpperCase()} Sub-Course`,
      items
    }
  ];
});

// Add Verification Queue sidebar
sidebarConfig['/verification-queue/'] = [
  {
    text: 'Quality Assurance',
    items: [
      { text: '🛡️ Pending Verification Queue', link: '/verification-queue/' }
    ]
  }
];

// Add Transcripts sidebar
const manifestFile = path.join(rootDir, 'public', 'data', 'transcripts', 'manifest.json');
if (fs.existsSync(manifestFile)) {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf-8'));
    const transcriptItems = [
      { text: '🎙️ Transcripts Library', link: '/transcripts/' }
    ];

    ['chk', 'cc', 'fa', 'vp', 'bf', 'bs', 'fas'].forEach(sub => {
      if (manifest[sub] && manifest[sub].length > 0) {
        transcriptItems.push({
          text: courseNames[sub] || sub.toUpperCase(),
          collapsed: false,
          items: manifest[sub].map(t => ({
            text: `${t.lectureId}: ${t.lectureTitle}`,
            link: t.pageUrl
          }))
        });
      }
    });

    sidebarConfig['/transcripts/'] = transcriptItems;
  } catch (err) {
    console.warn('Could not parse transcripts manifest for sidebar:', err);
  }
}

fs.writeFileSync(sidebarJsonFile, JSON.stringify(sidebarConfig, null, 2));
console.log(`🧭 Auto-generated dynamic sidebar configuration: ${path.relative(rootDir, sidebarJsonFile)}`);

// 4. Scan all markdown files for Rules, Verification Tags, and sanitize unclosed angle brackets
function walkAllMd(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walkAllMd(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md') && !entry.name.startsWith('.')) {
      files.push(fullPath);
    }
  }
  return files;
}

const allMdFiles = walkAllMd(coursesDir);
console.log(`\n📁 Processing ${allMdFiles.length} course documents for rules & QA...`);

allMdFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  const relPath = path.relative(rootDir, file).replace(/\\/g, '/');
  
  // Sanitize rogue angle bracket placeholders like <N>, <Stage Title>, <pillar>, <name>
  // Avoid replacing valid HTML like <span, <a, <div, </ or anything already inside code blocks / backticks
  let sanitized = false;
  const htmlTags = ['div', 'span', 'b', 'i', 'a', 'p', 'details', 'summary', 'br', 'hr', 'code', 'pre'];
  const sanitizedContent = content
    .split(/(```[\s\S]*?```|`[^`\n]+`)/g)
    .map((segment, idx) => {
      // Odd indices are fenced code blocks or inline code spans; leave untouched
      if (idx % 2 === 1) return segment;
      return segment.replace(/<([a-zA-Z0-9_\s]{1,30})>/g, (match, tag) => {
        if (!htmlTags.includes(tag.toLowerCase().trim())) {
          sanitized = true;
          return `\`<${tag}>\``;
        }
        return match;
      });
    })
    .join('');

  if (sanitized) {
    fs.writeFileSync(file, sanitizedContent);
    content = sanitizedContent;
  }

  const lines = content.split('\n');
  let currentCourse = 'GEN';
  if (relPath.includes('/chk/')) currentCourse = 'CHK';
  else if (relPath.includes('/cc/')) currentCourse = 'CC';
  else if (relPath.includes('/fa/')) currentCourse = 'FA';
  else if (relPath.includes('/vp/')) currentCourse = 'V&P';
  else if (relPath.includes('/bf/')) currentCourse = 'BF';
  else if (relPath.includes('/bs/')) currentCourse = 'BS';
  else if (relPath.includes('/fas/')) currentCourse = 'FAS';

  let currentLecture = path.basename(file, '.md').toUpperCase();
  let currentStage = 'General';
  let currentStageSlug = '';
  let lastTimestamp = '[00:00]';

  let inTable = false;
  let tableHeaders = [];
  let tableRows = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Track stages / headings
    if (line.startsWith('#')) {
      const headingMatch = line.match(/^#+\s*(.+)$/);
      if (headingMatch) {
        currentStage = headingMatch[1].trim();
        currentStageSlug = slugify(currentStage);
      }
    }

    // Track audio timestamps like [14:22] or [01:14:22]
    const tsMatch = line.match(/\[(\d{1,2}:\d{2}(?::\d{2})?)\]/);
    if (tsMatch) {
      lastTimestamp = tsMatch[1];
    }

    // Scan for [? verify ...] tags
    if (line.includes('[?') || line.includes('[? verify') || line.includes('[? Hindi')) {
      const verifyMatches = line.match(/\[\?\s*([^\]]+)\]/g);
      if (verifyMatches) {
        verifyMatches.forEach(m => {
          verificationItems.push({
            course: currentCourse,
            lecture: currentLecture,
            stage: currentStage,
            anchor: `/${relPath.replace('.md', '')}#${currentStageSlug}`,
            timestamp: lastTimestamp,
            flaggedText: m,
            file: relPath,
            line: i + 1
          });
        });
      }
    }

    // Parse Markdown tables for Rules & Thresholds
    if (line.startsWith('|') && line.endsWith('|')) {
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      if (!inTable) {
        if (cells.some(c => /metric|threshold|rule|parameter|indicator|benchmark/i.test(c))) {
          inTable = true;
          tableHeaders = cells.map(c => c.toLowerCase());
          tableRows = [];
        }
      } else {
        if (!line.includes('---')) {
          tableRows.push(cells);
        }
      }
    } else {
      if (inTable && tableRows.length > 0) {
        tableRows.forEach(row => {
          const ruleObj = {
            course: currentCourse,
            lecture: currentLecture,
            stage: currentStage,
            anchor: `/${relPath.replace('.md', '')}#${currentStageSlug}`,
            metric: '',
            threshold: '',
            rationale: ''
          };
          tableHeaders.forEach((h, idx) => {
            if (/metric|parameter|indicator|rule/i.test(h)) ruleObj.metric = row[idx] || '';
            else if (/threshold|benchmark|value|condition/i.test(h)) ruleObj.threshold = row[idx] || '';
            else if (/why|rationale|caution|interpretation|stage/i.test(h)) ruleObj.rationale = row[idx] || '';
          });
          if (ruleObj.metric && ruleObj.threshold) {
            harvestedRules.push(ruleObj);
          }
        });
        inTable = false;
        tableHeaders = [];
        tableRows = [];
      }
    }
  }
});

// 5. Save Sanchay Rules JSON
console.log(`📊 Harvested ${harvestedRules.length} decision rules from course tables.`);
fs.writeFileSync(rulesJsonFile, JSON.stringify(harvestedRules, null, 2));
fs.writeFileSync(rootRulesJsonFile, JSON.stringify(harvestedRules, null, 2));
console.log(`✅ Saved Sanchay rules to: ${path.relative(rootDir, rulesJsonFile)}`);

// 6. Write Centralized Verification Queue Page
console.log(`🔍 Detected ${verificationItems.length} items flagged for audio verification.`);
let queueMd = `# 🛡️ Quality Assurance: Pending Verification Queue\n\n`;
queueMd += `> [!NOTE]\n`;
queueMd += `> Grounded in source lecture recordings. This page automatically collects all segments marked with \`[? verify]\`, \`[?]\`, or \`[? Hindi unclear]\` from NotebookLM outputs.\n`;
queueMd += `> Listen to the specified audio timestamp to verify, then edit the Markdown file to clear the tag.\n\n`;
queueMd += `**Total Pending Items:** ${verificationItems.length}\n\n`;

if (verificationItems.length === 0) {
  queueMd += `🎉 **All course lectures are 100% verified against original recordings!**\n`;
} else {
  queueMd += `| # | Course | Lecture | Stage & Link | Timestamp | Flagged Note | Action |\n`;
  queueMd += `|---|---|---|---|---|---|---|\n`;
  verificationItems.forEach((item, index) => {
    queueMd += `| ${index + 1} | \`${item.course}\` | **${item.lecture}** | [${item.stage}](${item.anchor}) | \`[${item.timestamp}]\` | <span class="unverified-tag">${item.flaggedText.replace(/\|/g, '\\|')}</span> | [Verify on GitHub](${item.anchor}) |\n`;
  });
}

queueMd += `\n\n---\n*Auto-generated by \`scripts/sync.js\` at ${new Date().toISOString()}*\n`;
fs.writeFileSync(queueFile, queueMd);
console.log(`✅ Updated Verification Queue at: ${path.relative(rootDir, queueFile)}`);

console.log('\n✨ Pipeline synchronization completed successfully!\n');
