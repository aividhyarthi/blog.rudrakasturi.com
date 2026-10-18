// Generates a unique, text-free cover illustration for every post.
// The picture depends on the post's topic (what it shows) and its slug (how it looks),
// so no two covers are the same and none repeats the title.
import type { Post } from './posts';
import { topicOf } from './posts';

const PALETTES = [
  { bg: '#2340f5', fg: '#ffffff', accent: '#ff5a1f', soft: '#5d73ff' },
  { bg: '#0b1030', fg: '#ffffff', accent: '#6ee7c8', soft: '#2340f5' },
  { bg: '#ff5a1f', fg: '#0b1030', accent: '#ffffff', soft: '#ff8a5c' },
  { bg: '#6ee7c8', fg: '#0b1030', accent: '#2340f5', soft: '#a6f3e0' },
  { bg: '#7a3cff', fg: '#ffffff', accent: '#6ee7c8', soft: '#a06dff' },
  { bg: '#eaefff', fg: '#0b1030', accent: '#ff5a1f', soft: '#2340f5' },
  { bg: '#0b8f6a', fg: '#ffffff', accent: '#ffffff', soft: '#3fb995' },
];

function hash(str: string): number {
  let h = 2166136261;
  for (const ch of str) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
  return h;
}
function rng(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type P = (typeof PALETTES)[number];
const star = (cx: number, cy: number, r: number, fill: string) =>
  `<path d="M${cx} ${cy - r}C${cx + r * 0.12} ${cy - r * 0.3} ${cx + r * 0.3} ${cy - r * 0.12} ${cx + r} ${cy}C${cx + r * 0.3} ${cy + r * 0.12} ${cx + r * 0.12} ${cy + r * 0.3} ${cx} ${cy + r}C${cx - r * 0.12} ${cy + r * 0.3} ${cx - r * 0.3} ${cy + r * 0.12} ${cx - r} ${cy}C${cx - r * 0.3} ${cy - r * 0.12} ${cx - r * 0.12} ${cy - r * 0.3} ${cx} ${cy - r}Z" fill="${fill}"/>`;

const MOTIFS: Record<string, (p: P, r: () => number) => string> = {
  search: (p) => `
    <circle cx="-30" cy="-30" r="150" fill="${p.soft}" opacity=".35"/>
    <circle cx="-30" cy="-30" r="130" fill="none" stroke="${p.fg}" stroke-width="42"/>
    <line x1="68" y1="68" x2="190" y2="190" stroke="${p.accent}" stroke-width="52" stroke-linecap="round"/>
    <rect x="-300" y="150" width="200" height="22" rx="11" fill="${p.fg}"/>
    <rect x="-300" y="195" width="140" height="22" rx="11" fill="${p.soft}"/>
    <rect x="-300" y="240" width="170" height="22" rx="11" fill="${p.accent}"/>`,
  answer: (p) => `
    <rect x="-230" y="-150" width="460" height="300" rx="34" fill="${p.fg}"/>
    <circle cx="-170" cy="-92" r="30" fill="${p.accent}"/>
    <rect x="-120" y="-108" width="260" height="22" rx="11" fill="${p.soft}"/>
    <rect x="-120" y="-72" width="180" height="22" rx="11" fill="${p.soft}" opacity=".6"/>
    <rect x="-190" y="-10" width="370" height="22" rx="11" fill="${p.bg}" opacity=".18"/>
    <rect x="-190" y="30" width="300" height="22" rx="11" fill="${p.bg}" opacity=".18"/>
    <rect x="-190" y="70" width="340" height="22" rx="11" fill="${p.bg}" opacity=".18"/>
    ${star(210, -150, 70, p.accent)}`,
  llm: (p, r) => {
    const nodes: [number, number][] = [];
    const cols = [-210, -70, 70, 210];
    cols.forEach((x, ci) => { for (let k = 0; k < (ci % 2 ? 3 : 4); k++) nodes.push([x, -150 + k * 100 + (ci % 2 ? 50 : 0) + (r() - 0.5) * 20]); });
    let lines = '';
    nodes.forEach(([x1, y1], i) => nodes.forEach(([x2, y2], j) => { if (j > i && Math.abs(x2 - x1) === 140 && r() > 0.45) lines += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${p.fg}" stroke-width="3" opacity=".55"/>`; }));
    const dots = nodes.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i % 4 === 0 ? 26 : 18}" fill="${i % 5 === 0 ? p.accent : p.fg}"/>`).join('');
    return `${lines}${dots}${star(250, -170, 56, p.accent)}`;
  },
  youtube: (p) => `
    <rect x="-250" y="-160" width="500" height="320" rx="56" fill="${p.accent}"/>
    <path d="M-50 -75L90 0L-50 75Z" fill="${p.bg}"/>
    <rect x="-250" y="195" width="500" height="18" rx="9" fill="${p.fg}" opacity=".35"/>
    <rect x="-250" y="195" width="290" height="18" rx="9" fill="${p.fg}"/>
    <circle cx="40" cy="204" r="18" fill="${p.accent}" stroke="${p.fg}" stroke-width="6"/>`,
  social: (p) => `
    <rect x="-190" y="-190" width="380" height="380" rx="96" fill="none" stroke="${p.fg}" stroke-width="40"/>
    <circle cx="0" cy="0" r="88" fill="none" stroke="${p.fg}" stroke-width="40"/>
    <circle cx="124" cy="-124" r="26" fill="${p.accent}"/>
    <path d="M230 -70c0-38 56-38 56 0 0 34-56 66-56 66s-56-32-56-66c0-38 56-38 56 0z" fill="${p.accent}" transform="translate(40 130) scale(.9)"/>`,
  chart: (p, r) => {
    const heights = [70, 120, 95, 170, 140, 230, 280];
    const bars = heights.map((h, i) => `<rect x="${-240 + i * 70}" y="${150 - h}" width="48" height="${h}" rx="10" fill="${i === 6 ? p.accent : p.fg}" opacity="${i === 6 ? 1 : 0.85}"/>`).join('');
    const pts = heights.map((h, i) => `${-216 + i * 70},${130 - h - 30 - r() * 12}`).join(' ');
    return `${bars}<polyline points="${pts}" fill="none" stroke="${p.accent}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`;
  },
  target: (p) => `
    <circle r="190" fill="${p.fg}"/><circle r="140" fill="${p.bg}"/><circle r="92" fill="${p.accent}"/><circle r="44" fill="${p.fg}"/>
    <line x1="0" y1="0" x2="190" y2="-190" stroke="${p.fg}" stroke-width="14" stroke-linecap="round"/>
    <path d="M190 -190l-6-60 36 24 44-36-30 66z" fill="${p.accent}"/>`,
  bubbles: (p) => `
    <rect x="-250" y="-170" width="320" height="200" rx="40" fill="${p.fg}"/>
    <path d="M-190 30l-10 70 70-44z" fill="${p.fg}"/>
    <rect x="-210" y="-120" width="220" height="20" rx="10" fill="${p.soft}"/>
    <rect x="-210" y="-80" width="160" height="20" rx="10" fill="${p.soft}" opacity=".6"/>
    <rect x="-40" y="-20" width="300" height="190" rx="40" fill="${p.accent}"/>
    <path d="M200 170l30 66-70-40z" fill="${p.accent}"/>
    <circle cx="20" cy="75" r="14" fill="${p.bg}"/><circle cx="70" cy="75" r="14" fill="${p.bg}"/><circle cx="120" cy="75" r="14" fill="${p.bg}"/>`,
  phone: (p) => `
    <rect x="-120" y="-215" width="240" height="430" rx="44" fill="${p.fg}"/>
    <rect x="-100" y="-190" width="200" height="380" rx="28" fill="${p.bg}" opacity=".16"/>
    <rect x="-34" y="-205" width="68" height="14" rx="7" fill="${p.bg}" opacity=".5"/>
    <rect x="-80" y="-150" width="50" height="50" rx="14" fill="${p.accent}"/><rect x="-18" y="-150" width="50" height="50" rx="14" fill="${p.soft}"/><rect x="44" y="-150" width="40" height="50" rx="14" fill="${p.bg}" opacity=".4"/>
    <rect x="-80" y="-84" width="50" height="50" rx="14" fill="${p.soft}"/><rect x="-18" y="-84" width="50" height="50" rx="14" fill="${p.bg}" opacity=".4"/><rect x="44" y="-84" width="40" height="50" rx="14" fill="${p.accent}"/>
    <rect x="-80" y="0" width="164" height="22" rx="11" fill="${p.bg}" opacity=".35"/><rect x="-80" y="38" width="120" height="22" rx="11" fill="${p.bg}" opacity=".35"/>
    <rect x="-80" y="100" width="40" height="80" rx="8" fill="${p.accent}"/><rect x="-26" y="76" width="40" height="104" rx="8" fill="${p.soft}"/><rect x="28" y="50" width="40" height="130" rx="8" fill="${p.accent}"/>
    ${star(150, -190, 46, p.accent)}`,
  blocks: (p) => `
    <rect x="-240" y="-170" width="260" height="200" rx="34" fill="${p.fg}"/>
    <rect x="40" y="-170" width="200" height="130" rx="34" fill="${p.accent}"/>
    <rect x="40" y="-20" width="200" height="190" rx="34" fill="${p.soft}"/>
    <rect x="-240" y="50" width="260" height="120" rx="34" fill="${p.accent}" opacity=".9"/>`,
};

function motifFor(post: Post, rand: () => number, forced?: string): string {
  if (forced) return forced;
  const topic = topicOf(post).name;
  const hay = `${post.data.title} ${post.data.tag ?? ''}`.toLowerCase();
  if (/reddit|forum|community|comment|thread|conversation/.test(hay)) return 'bubbles';
  if (/click|traffic|\bctr\b|study|drop|decline|statistic/.test(hay)) return 'chart';
  if (topic === 'YouTube') return 'youtube';
  if (topic === 'Instagram & Social') return 'social';
  if (topic === 'Google Ads') return 'target';
  if (topic === 'AEO & GEO') return rand() > 0.5 ? 'answer' : 'search';
  if (topic === 'LLMs & AI') return rand() > 0.35 ? 'llm' : 'answer';
  if (topic === 'SEO') return rand() > 0.4 ? 'search' : 'chart';
  if (topic === 'Google Updates') return rand() > 0.5 ? 'chart' : 'search';
  return rand() > 0.5 ? 'blocks' : 'bubbles';
}

export function coverSvg(post: Post, forceMotif?: string): string {
  const seed = hash(post.slug);
  const rand = rng(seed);
  const pal = PALETTES[seed % PALETTES.length];
  const motif = motifFor(post, rand, forceMotif);
  const flipRoll = rand() > 0.5 ? -1 : 1;
  const flip = motif === 'youtube' || motif === 'social' || motif === 'bubbles' ? 1 : flipRoll;
  const rot = Math.round((rand() - 0.5) * 24);
  const scale = (0.92 + rand() * 0.28).toFixed(2);
  const dx = Math.round(560 + rand() * 90);
  const dy = Math.round(300 + (rand() - 0.5) * 50);

  let deco = '';
  const n = 10 + Math.floor(rand() * 8);
  for (let i = 0; i < n; i++) {
    const x = Math.round(rand() * 420);
    const y = Math.round(rand() * 630);
    const kind = rand();
    const col = [pal.soft, pal.accent, pal.fg][Math.floor(rand() * 3)];
    if (kind < 0.45) deco += `<circle cx="${x}" cy="${y}" r="${6 + Math.round(rand() * 14)}" fill="${col}" opacity=".55"/>`;
    else if (kind < 0.75) deco += `<rect x="${x}" y="${y}" width="${24 + Math.round(rand() * 40)}" height="10" rx="5" fill="${col}" opacity=".5" transform="rotate(${Math.round(rand() * 90 - 45)} ${x} ${y})"/>`;
    else deco += star(x, y, 14 + Math.round(rand() * 14), col);
  }
  const corner = rand();
  const bigShape =
    corner < 0.33 ? `<circle cx="${rand() > 0.5 ? 1200 : 0}" cy="${rand() > 0.5 ? 0 : 630}" r="${240 + Math.round(rand() * 120)}" fill="${pal.soft}" opacity=".35"/>`
    : corner < 0.66 ? `<rect x="-60" y="${300 + Math.round(rand() * 200)}" width="1320" height="${180 + Math.round(rand() * 120)}" fill="${pal.soft}" opacity=".22" transform="rotate(${-6 - Math.round(rand() * 6)} 600 500)"/>`
    : `<path d="M0 630L${300 + Math.round(rand() * 300)} 630L0 ${200 + Math.round(rand() * 200)}Z" fill="${pal.soft}" opacity=".3"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" role="img" aria-hidden="true">
<rect width="1200" height="630" fill="${pal.bg}"/>${bigShape}${deco}
<g transform="translate(${dx} ${dy}) rotate(${rot}) scale(${flip * Number(scale)} ${scale})">${MOTIFS[motif](pal, rand)}</g>
</svg>`;
}

export const coverUrl = (post: Post): string => `/covers/${encodeURIComponent(post.slug)}.svg`;
export const coverPngUrl = (post: Post): string => `/covers/${encodeURIComponent(post.slug)}.png`;
