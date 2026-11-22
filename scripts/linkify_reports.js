import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const coursesDir = path.join(rootDir, 'courses');
const manifestPath = path.join(rootDir, 'public', 'data', 'transcripts', 'manifest.json');

console.log('🔗 Starting SOIC Report Timestamp Linkifier & Audio Banner Pipeline...\n');

let manifest = {};
if (fs.existsSync(manifestPath)) {
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  } catch (e) {
    console.error('Failed to read transcripts manifest.json:', e);
  }
}

function parseTimeToSeconds(ts) {
  const parts = ts.split(':').map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return 0;
}

function linkifyTimestamps(text, sub, lectureId) {
  // Regex matches brackets containing timestamps, not followed by (
  const pattern = /\[\s*(\d{1,2}:\d{2}(?::\d{2})?[^\]]*?)\s*\](?!\()/g;
  return text.replace(pattern, (match, inner) => {
    // If inner already contains markdown links, skip (idempotent)
    if (inner.includes('](') || inner.includes('/transcripts/')) return match;

    const parts = inner.split(',').map(part => part.trim());
    const linkedParts = parts.map(part => {
      // Find the first timestamp in this part
      const tsMatch = part.match(/(\d{1,2}):(\d{2}):(\d{2})/);
      if (!tsMatch) return part;
      const seconds = parseTimeToSeconds(tsMatch[0]);
      return `[${part}](/transcripts/${sub}/${lectureId}?t=${seconds})`;
    });
    return `[${linkedParts.join(', ')}]`;
  });
}

function injectOrUpdateBanner(content, sub, lectureId, duration) {
  const bannerStartTag = '<!-- SOIC_AUDIO_BANNER_START -->';
  const bannerEndTag = '<!-- SOIC_AUDIO_BANNER_END -->';

  let bannerContent = '';
  if (lectureId) {
    bannerContent = `${bannerStartTag}
::: tip 🎧 Interactive Audio Transcript & Reader
Listen to this lecture in audio mode with synchronized text highlighting, keyword search & citations:  
👉 **[Open Interactive Transcript & Audio Player (${duration || 'Full Lecture'}) →](/transcripts/${sub}/${lectureId})**
:::
${bannerEndTag}`;
  } else {
    bannerContent = `${bannerStartTag}
::: info 📝 Lecture Audio Transcript
*Interactive audio transcript will be linked when transcript file is added.*
:::
${bannerEndTag}`;
  }

  // If banner already exists, replace it
  const existingRegex = new RegExp(`${bannerStartTag}[\\s\\S]*?${bannerEndTag}`, 'g');
  if (existingRegex.test(content)) {
    return content.replace(existingRegex, bannerContent);
  }

  // Insert after the first horizontal rule or after header
  const hrIndex = content.indexOf('\n---\n');
  if (hrIndex !== -1) {
    return content.slice(0, hrIndex) + '\n\n' + bannerContent + content.slice(hrIndex);
  }

  // Fallback: prepend under line 1
  const firstNewline = content.indexOf('\n');
  if (firstNewline !== -1) {
    return content.slice(0, firstNewline + 1) + '\n' + bannerContent + '\n' + content.slice(firstNewline + 1);
  }

  return bannerContent + '\n\n' + content;
}

let totalReportsProcessed = 0;
let totalTimestampsLinked = 0;
let reportsWithTranscripts = 0;
let reportsWithoutTranscripts = 0;

const subcourses = ['chk', 'cc', 'fa', 'vp', 'bf'];

subcourses.forEach(sub => {
  const subDir = path.join(coursesDir, sub);
  if (!fs.existsSync(subDir)) return;

  const files = fs.readdirSync(subDir).filter(f => f.endsWith('.md') && !f.startsWith('.'));

  files.forEach(file => {
    // Check if report file
    if (!(/_report\.md$/i.test(file) || /^cc_lec\d+\.md$/i.test(file))) return;

    const filePath = path.join(subDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Extract lecture number
    const match = file.match(/lec(\d+)/i);
    const lecNumStr = match ? match[1].padStart(2, '0') : null;
    const candidateId = lecNumStr ? `${sub.toUpperCase()}_Lec${lecNumStr}` : null;

    // Find transcript in manifest
    const subManifest = manifest[sub] || [];
    const matchedTranscript = subManifest.find(t => t.lectureId.toLowerCase() === (candidateId ? candidateId.toLowerCase() : ''));

    if (matchedTranscript) {
      // 1. Injected banner
      content = injectOrUpdateBanner(content, sub, matchedTranscript.lectureId, matchedTranscript.duration);

      // 2. Linkify timestamps
      const beforeCount = (content.match(/\[\d{1,2}:\d{2}(?::\d{2})?[^\]]*?\](?!\()/g) || []).length;
      content = linkifyTimestamps(content, sub, matchedTranscript.lectureId);
      const afterCount = (content.match(new RegExp(`/transcripts/${sub}/${matchedTranscript.lectureId}`, 'g')) || []).length;

      fs.writeFileSync(filePath, content, 'utf-8');
      reportsWithTranscripts++;
      totalTimestampsLinked += afterCount;
      console.log(`  ✓ [${sub.toUpperCase()}] ${file} ➔ Linked ${afterCount} timestamps to ${matchedTranscript.lectureId}`);
    } else {
      // Gracefully update banner to pending status without breaking timestamps
      content = injectOrUpdateBanner(content, sub, null, null);
      fs.writeFileSync(filePath, content, 'utf-8');
      reportsWithoutTranscripts++;
      console.log(`  ℹ️ [${sub.toUpperCase()}] ${file} ➔ No transcript yet (plain text preserved)`);
    }

    totalReportsProcessed++;
  });
});

console.log(`\n🎉 Linkification complete!`);
console.log(`📊 Processed: ${totalReportsProcessed} lecture reports`);
console.log(`🎧 Connected with audio transcripts: ${reportsWithTranscripts}`);
console.log(`⏳ Awaiting transcript upload: ${reportsWithoutTranscripts}`);
console.log(`🔗 Total timestamp deep-links active: ${totalTimestampsLinked}\n`);
