import type { Post } from './posts';
import { topicOf } from './posts';

// The blog's contributor desk. These are AI author personas (not real people) and are
// labelled as such on every author page. Rudra Kasturi reviews and publishes the content.
export interface Author {
  slug: string;
  name: string;
  role: string;
  topics: string[]; // section slugs they cover
  bio: string;
  knows: string[];
  skin: string; hair: string; shirt: string; bg: string;
  style: 'short' | 'long' | 'bun' | 'curly' | 'bald';
  glasses?: boolean; beard?: boolean;
}

export const AUTHORS: Author[] = [
  { slug: 'aarav-menon', name: 'Aarav Menon', role: 'Technical SEO Analyst', topics: ['seo'],
    bio: 'Covers crawling, indexing, site architecture, structured data and Core Web Vitals, with a focus on what Google documents and what testing shows.',
    knows: ['Technical SEO', 'Crawling and indexing', 'Core Web Vitals', 'Structured data'],
    skin: '#c68a5f', hair: '#1c1c28', shirt: '#2540f5', bg: '#dfe6ff', style: 'short', glasses: true },
  { slug: 'priya-raman', name: 'Priya Raman', role: 'Search Strategy Editor', topics: ['seo'],
    bio: 'Writes on content strategy, search intent, link building and how SEO teams plan and report their work.',
    knows: ['Content strategy', 'Search intent', 'Link building', 'SEO reporting'],
    skin: '#b57850', hair: '#20151a', shirt: '#0f9d6b', bg: '#d8f7ea', style: 'long' },
  { slug: 'maya-fernandes', name: 'Maya Fernandes', role: 'AEO Analyst', topics: ['aeo'],
    bio: 'Tracks answer engine optimization: how AI Overviews, AI Mode and answer engines pick and cite sources, and what site owners can do about it.',
    knows: ['Answer engine optimization', 'AI Overviews', 'AI citations', 'Generative engine optimization'],
    skin: '#e3b48f', hair: '#6b3a22', shirt: '#7b3df0', bg: '#ece1ff', style: 'bun' },
  { slug: 'daniel-okafor', name: 'Daniel Okafor', role: 'Entities and Structured Data Writer', topics: ['aeo'],
    bio: 'Explains entities, schema markup and knowledge graphs, and how machine-readable pages are understood by search and AI systems.',
    knows: ['Schema markup', 'Entities', 'Knowledge graph', 'llms.txt'],
    skin: '#7a4a2e', hair: '#0d0d12', shirt: '#ff5a1f', bg: '#ffe4d6', style: 'short', beard: true },
  { slug: 'kenji-watanabe', name: 'Kenji Watanabe', role: 'LLM and AI Products Reporter', topics: ['llms'],
    bio: 'Follows ChatGPT, Gemini, Claude, Perplexity and Copilot: product changes, model releases and what they mean for publishers and marketers.',
    knows: ['ChatGPT', 'Gemini', 'Claude', 'Perplexity'],
    skin: '#e8c29c', hair: '#15151c', shirt: '#14213d', bg: '#d9ecff', style: 'short', glasses: true },
  { slug: 'sofia-alvarez', name: 'Sofia Alvarez', role: 'AI Search Research Writer', topics: ['llms', 'aeo'],
    bio: 'Reads the studies on AI search behavior, citation patterns and referral traffic, and summarizes the findings with the numbers.',
    knows: ['AI search studies', 'Referral traffic', 'Citation analysis', 'Measurement'],
    skin: '#d2a07a', hair: '#3a2418', shirt: '#0f9d6b', bg: '#d8f7ea', style: 'curly' },
  { slug: 'rohan-iyer', name: 'Rohan Iyer', role: 'Google Updates Reporter', topics: ['google'],
    bio: 'Covers Google core updates, spam policies, Search Console changes and the statements from Google Search Central.',
    knows: ['Core updates', 'Spam policies', 'Search Console', 'Google Search Central'],
    skin: '#b9825a', hair: '#1a1410', shirt: '#2540f5', bg: '#dfe6ff', style: 'short' },
  { slug: 'elena-petrova', name: 'Elena Petrova', role: 'Google Ads and Discover Editor', topics: ['google'],
    bio: 'Writes about Google Ads, Discover, Business Profiles and Merchant Center, including policy and product changes.',
    knows: ['Google Ads', 'Google Discover', 'Business Profile', 'Merchant Center'],
    skin: '#f0cdb0', hair: '#8a5a2b', shirt: '#ff5a1f', bg: '#ffe4d6', style: 'long' },
  { slug: 'tara-nguyen', name: 'Tara Nguyen', role: 'YouTube and Video Search Writer', topics: ['youtube'],
    bio: 'Covers YouTube search, Shorts, recommendations and creator policy, and how video shows up in Google and AI answers.',
    knows: ['YouTube SEO', 'Shorts', 'Video search', 'Creator policy'],
    skin: '#e0b48a', hair: '#141018', shirt: '#7b3df0', bg: '#ece1ff', style: 'bun', glasses: true },
  { slug: 'marcus-bell', name: 'Marcus Bell', role: 'Community and Social Search Reporter', topics: ['forums'],
    bio: 'Follows Reddit, forums, Instagram and social platforms, and how community conversations influence search and AI answers.',
    knows: ['Reddit', 'Forums', 'Instagram', 'Social search'],
    skin: '#a56a45', hair: '#2b1a10', shirt: '#14213d', bg: '#d9ecff', style: 'bald', beard: true },
];

export const authorBySlug = (slug: string) => AUTHORS.find((a) => a.slug === slug)!;

export function authorsForTopic(topicSlug: string): Author[] {
  return AUTHORS.filter((a) => a.topics.includes(topicSlug));
}

function hash(s: string): number {
  let h = 2166136261;
  for (const ch of s) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
  return h;
}

// Each article gets one author from the desk that covers its main topic (stable between builds).
export function authorOf(post: Post): Author {
  const pool = authorsForTopic(topicOf(post).slug);
  const list = pool.length ? pool : AUTHORS;
  return list[hash(post.slug) % list.length];
}

export function postsByAuthor(posts: Post[], slug: string): Post[] {
  return posts.filter((p) => authorOf(p).slug === slug);
}

export function avatarSvg(a: Author): string {
  const hairBack = a.style === 'long' ? `<path d="M62 120c-4-62 20-84 58-84s62 22 58 84l-8 62H70z" fill="${a.hair}"/>`
    : a.style === 'curly' ? `<g fill="${a.hair}"><circle cx="78" cy="78" r="30"/><circle cx="120" cy="62" r="34"/><circle cx="162" cy="78" r="30"/><circle cx="70" cy="112" r="22"/><circle cx="170" cy="112" r="22"/></g>` : '';
  const hairFront = {
    short: `<path d="M76 92c-2-34 18-50 44-50s46 16 44 50c-8-16-22-24-44-24s-36 8-44 24z" fill="${a.hair}"/>`,
    long: `<path d="M76 96c0-30 18-46 44-46s44 16 44 46c-10-12-24-18-44-18s-34 6-44 18z" fill="${a.hair}"/>`,
    bun: `<circle cx="120" cy="40" r="20" fill="${a.hair}"/><path d="M76 96c0-32 18-46 44-46s44 14 44 46c-10-14-24-20-44-20s-34 6-44 20z" fill="${a.hair}"/>`,
    curly: `<path d="M80 94c4-22 20-32 40-32s36 10 40 32c-10-10-24-14-40-14s-30 4-40 14z" fill="${a.hair}"/>`,
    bald: `<path d="M80 92c4-8 20-12 40-12s36 4 40 12c-6-4-20-8-40-8s-34 4-40 8z" fill="${a.hair}" opacity=".35"/>`,
  }[a.style];
  const beard = a.beard ? `<path d="M82 122c2 34 18 48 38 48s36-14 38-48c-8 14-20 20-38 20s-30-6-38-20z" fill="${a.hair}"/>` : '';
  const glasses = a.glasses ? `<g fill="none" stroke="#14213d" stroke-width="4"><rect x="86" y="108" width="30" height="22" rx="8"/><rect x="124" y="108" width="30" height="22" rx="8"/><path d="M116 118h8"/></g>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="240" height="240" role="img" aria-label="Illustrated avatar of ${a.name}">
<rect width="240" height="240" fill="${a.bg}"/>
${hairBack}
<path d="M30 240c4-46 34-66 90-66s86 20 90 66z" fill="${a.shirt}"/>
<rect x="104" y="150" width="32" height="34" rx="12" fill="${a.skin}"/>
<ellipse cx="120" cy="116" rx="44" ry="52" fill="${a.skin}"/>
<ellipse cx="76" cy="120" rx="7" ry="12" fill="${a.skin}"/><ellipse cx="164" cy="120" rx="7" ry="12" fill="${a.skin}"/>
${hairFront}
${beard}
<circle cx="101" cy="119" r="4.5" fill="#1a1a24"/><circle cx="139" cy="119" r="4.5" fill="#1a1a24"/>
${glasses}
<path d="M104 142c8 8 24 8 32 0" fill="none" stroke="${a.beard ? '#fff' : '#7a3b2e'}" stroke-width="3.5" stroke-linecap="round"/>
</svg>`;
}
