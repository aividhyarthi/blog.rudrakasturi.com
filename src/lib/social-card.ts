// A 1080x1350 image of each article, sized for an Instagram post. Text is drawn with the bundled Inter font
// so the result looks the same on every machine, including the build server.
import { Resvg } from '@resvg/resvg-js';
import path from 'node:path';
import type { Post } from './posts';
import { topicOf } from './posts';
import { coverSvg } from './cover';
import { SITE } from '../config';

// Resolved from the project folder: after bundling, import.meta.url no longer points at src/.
const fonts = ['Inter-ExtraBold.otf', 'Inter-Bold.otf'].map((f) => path.join(process.cwd(), 'src/assets/fonts', f));
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function wrap(text: string, size: number, maxWidth: number): string[] {
  const perLine = Math.floor(maxWidth / (size * 0.58));
  const lines: string[] = []; let cur = '';
  for (const word of text.split(/\s+/)) {
    if ((cur + ' ' + word).trim().length > perLine && cur) { lines.push(cur); cur = word; } else cur = (cur + ' ' + word).trim();
  }
  if (cur) lines.push(cur);
  return lines;
}

export function socialCardPng(post: Post): Buffer {
  const title = post.data.title;
  const size = title.length <= 55 ? 76 : title.length <= 95 ? 66 : 56;
  let lines = wrap(title, size, 940);
  const maxLines = 6;
  if (lines.length > maxLines) { lines = lines.slice(0, maxLines); lines[maxLines - 1] = lines[maxLines - 1].replace(/\s*\S*$/, '') + '…'; }
  const art = Buffer.from(coverSvg(post)).toString('base64');
  const topic = topicOf(post).name.toUpperCase();
  const titleY = 800;
  const text = lines.map((l, i) => `<text x="70" y="${titleY + i * size * 1.16}" font-family="Inter" font-weight="800" font-size="${size}" fill="#ffffff">${esc(l)}</text>`).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1080" height="1350" viewBox="0 0 1080 1350">
<rect width="1080" height="1350" fill="#0b1030"/>
<image x="0" y="0" width="1080" height="567" preserveAspectRatio="xMidYMid slice" xlink:href="data:image/svg+xml;base64,${art}"/>
<rect x="70" y="650" width="${topic.length * 17 + 44}" height="48" rx="24" fill="#6ee7c8"/>
<text x="92" y="683" font-family="Inter" font-weight="800" font-size="24" letter-spacing="2" fill="#0b1030">${esc(topic)}</text>
${text}
<rect x="70" y="1210" width="940" height="3" fill="#2340f5"/>
<text x="70" y="1272" font-family="Inter" font-weight="800" font-size="36" fill="#ffffff">${esc(SITE.name)}</text>
<rect x="318" y="1241" width="76" height="40" rx="7" fill="#6ee7c8"/>
<text x="334" y="1272" font-family="Inter" font-weight="800" font-size="30" fill="#0b1030" font-style="italic">Inc.</text>
<text x="70" y="1316" font-family="Inter" font-weight="700" font-size="24" fill="#9aa6ff">blog.rudrakasturi.com</text>
</svg>`;
  return new Resvg(svg, { font: { fontFiles: fonts, loadSystemFonts: false, defaultFontFamily: 'Inter' } }).render().asPng();
}
