// Scheduled publishing. Future-dated posts remain hidden until their date.
// This script runs every 30 minutes. Drafts are deliberately skipped until approved.
import fs from 'node:fs';
import path from 'node:path';

const dir = 'src/content/blog';
const stampFile = '.publish-stamp';
const now = process.env.PUBLISH_NOW ? new Date(process.env.PUBLISH_NOW) : new Date();
const last = fs.existsSync(stampFile) ? new Date(fs.readFileSync(stampFile, 'utf8').trim()) : new Date(0);

const due = [];
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.md')) continue;
  const head = fs.readFileSync(path.join(dir, f), 'utf8').split('\n---')[0];
  if (/^draft:\s*true\s*$/m.test(head)) continue;
  const m = head.match(/^date:\s*"?([^"\n]+)"?\s*$/m);
  if (!m) continue;
  const d = new Date(m[1].trim());
  if (!Number.isNaN(d.valueOf()) && d > last && d <= now) due.push(f);
}
if (due.length) {
  fs.writeFileSync(stampFile, now.toISOString() + '\n');
  console.log(`Due: ${due.join(', ')}`);
  fs.appendFileSync(process.env.GITHUB_OUTPUT || '/dev/null', 'changed=true\n');
} else {
  console.log('Nothing due.');
}
