import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const rawDir = path.join(rootDir, 'raw_transcripts');
const publicTranscriptsDir = path.join(rootDir, 'public', 'data', 'transcripts');
const transcriptsPageDir = path.join(rootDir, 'transcripts');

// Ensure output directories exist
if (!fs.existsSync(publicTranscriptsDir)) {
  fs.mkdirSync(publicTranscriptsDir, { recursive: true });
}
if (!fs.existsSync(transcriptsPageDir)) {
  fs.mkdirSync(transcriptsPageDir, { recursive: true });
}

console.log('🎙️ Starting SOIC Transcript Ingestion & Normalization...\n');

const timestampRegex = /^\[(\d{1,2}):(\d{2})(?::(\d{2}))?\]$/;

const subcourses = ['chk', 'cc', 'fa', 'l3'];
const manifest = {};
let totalTranscriptsParsed = 0;
let totalCuesParsed = 0;

function parseTimestampToSeconds(ts) {
  const parts = ts.replace(/[\[\]]/g, '').split(':').map(Number);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  return 0;
}

function normalizeLectureId(sub, filename) {
  // e.g. Lec01_class-1-theme... in chk -> CHK_Lec01
  // FA_Lec01_... in fa -> FA_Lec01
  // L3_Lec02_... in l3 -> L3_Lec02
  // Lec01_... in cc -> CC_Lec01
  const match = filename.match(/(?:(?:FA|L3|CHK|CC)_)?Lec(\d+)/i);
  if (match) {
    const num = match[1].padStart(2, '0');
    return `${sub.toUpperCase()}_Lec${num}`;
  }
  return filename.replace('.txt', '');
}

subcourses.forEach(sub => {
  const subRawPath = path.join(rawDir, sub);
  if (!fs.existsSync(subRawPath)) return;

  const subOutDir = path.join(publicTranscriptsDir, sub);
  const subPageDir = path.join(transcriptsPageDir, sub);
  if (!fs.existsSync(subOutDir)) fs.mkdirSync(subOutDir, { recursive: true });
  if (!fs.existsSync(subPageDir)) fs.mkdirSync(subPageDir, { recursive: true });

  const files = fs.readdirSync(subRawPath).filter(f => f.endsWith('.txt'));
  manifest[sub] = [];

  files.forEach(file => {
    const filePath = path.join(subRawPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split(/\r?\n/);

    const lectureTitle = lines[0]?.trim() || file.replace('.txt', '');
    const courseTitle = lines[1]?.trim() || sub.toUpperCase();
    const lectureId = normalizeLectureId(sub, file);

    const cues = [];
    let currentTs = null;
    let currentSeconds = null;
    let textBuffer = [];

    for (let i = 2; i < lines.length; i++) {
      const line = lines[i].trim();
      const match = line.match(timestampRegex);

      if (match) {
        if (currentTs && textBuffer.length > 0) {
          cues.push({
            id: `cue-${currentSeconds}`,
            timestamp: currentTs,
            seconds: currentSeconds,
            text: textBuffer.join(' ').trim()
          });
        }
        currentTs = match[0].replace(/[\[\]]/g, '');
        currentSeconds = parseTimestampToSeconds(match[0]);
        textBuffer = [];
      } else if (line.length > 0 && currentTs) {
        // Skip separator line if encountered
        if (!/^={3,}$/.test(line)) {
          textBuffer.push(line);
        }
      }
    }

    if (currentTs && textBuffer.length > 0) {
      cues.push({
        id: `cue-${currentSeconds}`,
        timestamp: currentTs,
        seconds: currentSeconds,
        text: textBuffer.join(' ').trim()
      });
    }

    const totalSeconds = cues.length > 0 ? cues[cues.length - 1].seconds : 0;
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    const durationFormatted = `${hours > 0 ? hours + ':' : ''}${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    const transcriptData = {
      lectureId,
      subcourse: sub,
      rawFilename: file,
      lectureTitle,
      courseTitle,
      totalDurationSeconds: totalSeconds,
      totalDurationFormatted: durationFormatted,
      totalCues: cues.length,
      cues
    };

    // 1. Write JSON data for high-speed client fetching
    const jsonOutPath = path.join(subOutDir, `${lectureId}.json`);
    fs.writeFileSync(jsonOutPath, JSON.stringify(transcriptData, null, 2), 'utf-8');

    // 2. Write VitePress Markdown Viewer Page
    const pageOutPath = path.join(subPageDir, `${lectureId}.md`);
    const escapedTitle = JSON.stringify(`${lectureTitle} - Interactive Transcript`);
    const pageContent = `---
title: ${escapedTitle}
layout: doc
aside: false
---

<TranscriptViewer 
  course="${sub}" 
  lectureId="${lectureId}"
/>
`;
    fs.writeFileSync(pageOutPath, pageContent, 'utf-8');

    manifest[sub].push({
      lectureId,
      lectureTitle,
      duration: durationFormatted,
      totalCues: cues.length,
      jsonUrl: `/data/transcripts/${sub}/${lectureId}.json`,
      pageUrl: `/transcripts/${sub}/${lectureId}`
    });

    totalTranscriptsParsed++;
    totalCuesParsed += cues.length;
    console.log(`  ✓ [${sub.toUpperCase()}] ${lectureId}: ${cues.length} cues, ${durationFormatted}`);
  });
});

// Write master manifest
fs.writeFileSync(path.join(publicTranscriptsDir, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf-8');

console.log(`\n🎉 Success! Parsed ${totalTranscriptsParsed} transcripts with ${totalCuesParsed} total paragraph cues.`);
console.log(`📂 Output saved to: public/data/transcripts/ and transcripts/\n`);
