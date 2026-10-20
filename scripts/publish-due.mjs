// Scheduled publishing. Posts dated in the future are hidden by the build. This script runs every few minutes
// (see .github/workflows/publish-scheduled.yml): when a post's date has just passed, it moves the stamp file forward,
// which creates a commit and makes Railway rebuild the site, so the post appears.
import fs from 'node:fs';
import path from 'node:path';

const dir = 'src/content/blog';
const stampFile = '.publish-stamp';
const now = process.env.PUBLISH_NOW ? new Date(process.env.PUBLISH_NOW) : new Date(); // PUBLISH_NOW is only for testing
const last = fs.existsSync(stampFile) ? new Date(fs.readFileSync(stampFile, 'utf8').trim()) : new Date(0);

const due = [];
for (const f of fs.readdirSync(dir)) {
  if (!f.endsWith('.md')) continue;
  const head = fs.readFileSync(path.join(dir, f), 'utf8').split('\n---')[0];
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
