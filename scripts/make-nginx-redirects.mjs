// Turns public/_redirects ("/old/ /new/ 301" lines) into an nginx map file.
// Run during the Docker build. Output: nginx-redirects.conf
import fs from 'node:fs';

const read = (f) => (fs.existsSync(f) ? fs.readFileSync(f, 'utf8').split('\n') : []);
// Redirects generated from posts, plus the hand-written ones in redirects-manual.txt
const lines = [...read('public/_redirects'), ...read('redirects-manual.txt')].filter((l) => !l.trim().startsWith('#'));
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\$/g, '\\$');
const entries = new Map();

for (const line of lines) {
  const [from, to] = line.trim().split(/\s+/);
  if (!from || !to) continue;
  let path = from;
  try { path = decodeURIComponent(from); } catch {}
  // nginx compares the decoded path; accept it with and without the trailing slash.
  entries.set(path, to);
  entries.set(path.replace(/\/$/, ''), to);
}

let out = 'map_hash_bucket_size 256;\nmap_hash_max_size 4096;\nmap $uri $redirect_to {\n  default "";\n';
for (const [from, to] of entries) if (from) out += `  "${esc(from)}" "${esc(to)}";\n`;
out += '}\n';
fs.writeFileSync('nginx-redirects.conf', out);
console.log(`Wrote ${entries.size} redirect rules to nginx-redirects.conf`);
