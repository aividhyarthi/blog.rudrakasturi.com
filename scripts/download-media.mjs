// Saves every image used by your posts into this project, then points the posts at the saved copies.
//
//   npm run download-media
//
// Reads media-urls.txt (made by the importer). Images are saved under public/wp-content/...
// Run this BEFORE you move blog.rudrakasturi.com away from WordPress, while the old images still load.
import fs from 'node:fs';
import path from 'node:path';

const urls = fs.readFileSync('media-urls.txt', 'utf8').split('\n').filter((u) => u.startsWith('http'));
const done = new Map();
let failed = 0;

async function grab(url) {
  const { pathname } = new URL(url);
  const local = path.join('public', decodeURIComponent(pathname));
  if (!fs.existsSync(local)) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    fs.mkdirSync(path.dirname(local), { recursive: true });
    fs.writeFileSync(local, Buffer.from(await res.arrayBuffer()));
  }
  done.set(url, pathname);
}

const queue = [...urls];
await Promise.all(
  Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const url = queue.shift();
      if (!new URL(url).pathname.startsWith('/wp-content/')) continue;
      try {
        await grab(url);
      } catch (e) {
        failed++;
        console.warn(`failed: ${url} (${e.message})`);
      }
    }
  }),
);

const dir = 'src/content/blog';
let edited = 0;
for (const f of fs.readdirSync(dir)) {
  let md = fs.readFileSync(path.join(dir, f), 'utf8');
  const before = md;
  for (const [url, local] of done) md = md.split(url).join(local);
  if (md !== before) {
    fs.writeFileSync(path.join(dir, f), md);
    edited++;
  }
}
console.log(`Saved ${done.size} images, ${failed} failed. Updated ${edited} posts.`);
