// Builds schema.org JSON-LD for article pages. Each entity is output as its own <script> block
// (Article, Person, BreadcrumbList, Organization, ImageObject, Table, FAQPage), so validators list
// every one of them. Everything is taken from what is visible on the page.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import type { Post } from './posts';
import type { Author } from './authors';
import { SITE } from '../config';

const PUBLIC = path.resolve(process.cwd(), 'public');
const MIME: Record<string, string> = { svg: 'image/svg+xml', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', gif: 'image/gif' };

export interface ImgInfo { url: string; alt: string; width?: number; height?: number; format?: string }

/** Size of an image that lives in /public (SVG viewBox, or raster metadata). Remote images keep only their URL. */
export async function imageInfo(src: string, alt: string, origin: string): Promise<ImgInfo> {
  const isRemote = /^https?:\/\//.test(src) && !src.startsWith(origin);
  const url = /^https?:\/\//.test(src) ? src : new URL(src, origin).href;
  const info: ImgInfo = { url, alt };
  if (isRemote) return info;
  const rel = decodeURIComponent((/^https?:\/\//.test(src) ? new URL(src).pathname : src).split('?')[0]);
  const file = path.join(PUBLIC, rel);
  const ext = path.extname(file).slice(1).toLowerCase();
  info.format = MIME[ext];
  if (!fs.existsSync(file)) return info;
  try {
    if (ext === 'svg') {
      const t = fs.readFileSync(file, 'utf8');
      const vb = t.match(/viewBox="[\d.\-]+[ ,]+[\d.\-]+[ ,]+([\d.]+)[ ,]+([\d.]+)"/);
      if (vb) { info.width = Math.round(Number(vb[1])); info.height = Math.round(Number(vb[2])); }
    } else {
      const m = await sharp(file).metadata();
      info.width = m.width; info.height = m.height;
    }
  } catch { /* leave the size out rather than guess */ }
  return info;
}

/** Markdown to plain text, as a reader sees it. */
export function plainText(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/<img[^>]*>/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s*\|?[\s:\-|]+\|[\s:\-|]*$/gm, ' ')
    .replace(/\|/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/\*\*|__|\*/g, '')
    .replace(/`/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Images written in the article body, as Markdown or HTML. */
export function bodyImages(md: string): { src: string; alt: string }[] {
  const out: { src: string; alt: string }[] = [];
  for (const m of md.matchAll(/!\[([^\]]*)\]\(\s*([^)\s]+)[^)]*\)/g)) out.push({ alt: m[1], src: m[2] });
  for (const m of md.matchAll(/<img\b[^>]*>/g)) {
    const src = m[0].match(/src="([^"]+)"/)?.[1];
    const alt = m[0].match(/alt="([^"]*)"/)?.[1] ?? '';
    if (src) out.push({ src, alt });
  }
  const seen = new Set<string>();
  return out.filter((i) => (seen.has(i.src) ? false : (seen.add(i.src), true))).slice(0, 8);
}

export interface TableInfo { name: string; columns: string[]; rows: number }

/** Markdown tables, named after the heading above them. */
export function bodyTables(md: string): TableInfo[] {
  const lines = md.split('\n');
  const tables: TableInfo[] = [];
  let heading = '';
  for (let i = 0; i < lines.length; i++) {
    const h = lines[i].match(/^#{1,6}\s+(.*)$/);
    if (h) { heading = plainText(h[1]); continue; }
    if (/^\s*\|.*\|\s*$/.test(lines[i]) && /^\s*\|[\s:\-|]+\|\s*$/.test(lines[i + 1] ?? '')) {
      const columns = lines[i].split('|').slice(1, -1).map((c) => plainText(c));
      let rows = 0; let j = i + 2;
      while (j < lines.length && /^\s*\|.*\|\s*$/.test(lines[j])) { rows++; j++; }
      tables.push({ name: heading || 'Table', columns, rows });
      i = j - 1;
    }
  }
  return tables.slice(0, 6);
}

export interface Faq { q: string; a: string }

/** Questions the reader can see: headings that end with "?", and bold questions under a Frequently asked questions heading. */
export function bodyFaq(md: string): Faq[] {
  const out: Faq[] = [];
  const parts = md.split(/^(?=#{1,6}\s)/m);
  for (const part of parts) {
    const head = part.match(/^(#{1,6})\s+(.*)\n?/);
    if (!head) continue;
    const title = head[2].trim();
    const body = part.slice(head[0].length);
    if (/frequently asked questions|^faq\b/i.test(title)) {
      for (const block of body.split(/\n\s*\n/)) {
        const m = block.trim().match(/^\*\*(.+?\?)\*\*\s*\n?([\s\S]+)$/);
        if (m) { const a = plainText(m[2]); if (a.length >= 20) out.push({ q: plainText(m[1]), a: a.slice(0, 1500) }); }
      }
    } else if (head[1].length >= 2 && head[1].length <= 3 && title.endsWith('?')) {
      const a = plainText(body);
      if (a.length >= 20) out.push({ q: plainText(title), a: a.slice(0, 1500) });
    }
  }
  return out;
}

interface Crumb { name: string; url: string }
interface Topic { name: string; slug: string }

export async function buildArticleBlocks(o: {
  post: Post; origin: string; pageUrl: string; author: Author; topic: Topic; tags: string[];
  crumbs: Crumb[]; coverPng: string; minutes: number;
}): Promise<Record<string, unknown>[]> {
  const { post, origin, pageUrl, author, topic, tags, crumbs, coverPng, minutes } = o;
  const { title, description, date, updated, tldr, sources } = post.data;
  const abs = (u: string) => new URL(u, origin).href;
  const orgId = `${origin}/#organization`;
  const personId = `${origin}/authors/${author.slug}/#person`;

  const logo = { '@type': 'ImageObject', '@id': `${origin}/#logo`, url: abs('/logo.png'), contentUrl: abs('/logo.png'), width: 512, height: 512, encodingFormat: 'image/png', caption: 'Rudra Kasturi Inc. logo' };
  const organization = {
    '@type': 'Organization', '@id': orgId, name: 'Rudra Kasturi Inc.', url: `${origin}/`, logo, image: logo.url,
    sameAs: [SITE.linkedin], email: SITE.email, slogan: SITE.tagline,
  };
  const avatar = { '@type': 'ImageObject', url: abs(`/images/authors/${author.slug}.jpg`), contentUrl: abs(`/images/authors/${author.slug}.jpg`), width: 480, height: 480, encodingFormat: 'image/jpeg', caption: `Portrait of ${author.name}` };
  const person = {
    '@type': 'Person', '@id': personId, name: author.name, jobTitle: author.role, url: abs(`/authors/${author.slug}/`),
    image: avatar, knowsAbout: author.knows,
    description: `${author.name} is an AI author persona in the Rudra Kasturi Inc. contributor desk. ${author.bio} Editorial accountability sits with Rudra Kasturi Inc.`,
  };

  // Images: the cover first, then every image in the article body, each with its size.
  const cover: Record<string, unknown> = {
    '@type': 'ImageObject', '@id': `${pageUrl}#primaryimage`, url: abs(coverPng), contentUrl: abs(coverPng),
    width: 1200, height: 630, encodingFormat: 'image/png', caption: title, name: title, representativeOfPage: true,
    creditText: 'Rudra Kasturi Inc.',
  };
  const inBody = await Promise.all(bodyImages(post.body).map((i) => imageInfo(i.src, i.alt, origin)));
  const images: Record<string, unknown>[] = [cover, ...inBody.map((i, n) => ({
    '@type': 'ImageObject', '@id': `${pageUrl}#image-${n + 1}`, url: i.url, contentUrl: i.url,
    ...(i.width ? { width: i.width } : {}), ...(i.height ? { height: i.height } : {}),
    ...(i.format ? { encodingFormat: i.format } : {}),
    ...(i.alt ? { caption: i.alt, name: i.alt, description: i.alt } : {}),
    creditText: 'Rudra Kasturi Inc.',
  }))];

  // Tables and the FAQ stand on their own: no link back to the Article, so validators do not nest the Article under them.
  const tables = bodyTables(post.body).map((t, n) => ({
    '@type': 'Table', '@id': `${pageUrl}#table-${n + 1}`, name: t.name, about: t.name,
    description: `Table with ${t.rows} rows and the columns: ${t.columns.join(', ')}.`,
  }));
  const faq = bodyFaq(post.body);
  const modified = updated ?? date;
  const text = plainText(post.body);

  const article = {
    '@type': 'Article', '@id': `${pageUrl}#article`, url: pageUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    headline: title.slice(0, 110), name: title,
    description: description || tldr || title,
    ...(tldr ? { abstract: tldr } : {}),
    articleBody: text,
    wordCount: text.split(/\s+/).filter(Boolean).length,
    timeRequired: `PT${minutes}M`,
    articleSection: topic.name,
    keywords: [...new Set([topic.name, ...tags])].slice(0, 8).join(', '),
    inLanguage: 'en', isAccessibleForFree: true,
    datePublished: date.toISOString(), dateModified: modified.toISOString(),
    image: images, thumbnailUrl: abs(coverPng),
    author: person,
    publisher: { '@type': 'Organization', name: 'Rudra Kasturi Inc.', url: `${origin}/`, logo },
    ...(sources.length ? { citation: sources.map((s) => ({ '@type': 'CreativeWork', name: s.title, url: s.url, publisher: { '@type': 'Organization', name: s.publisher } })) } : {}),
  };

  const breadcrumb = {
    '@type': 'BreadcrumbList', '@id': `${pageUrl}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.url) })),
  };

  const blocks: Record<string, unknown>[] = [article, person, breadcrumb, organization, ...images, ...tables];
  if (faq.length >= 2) {
    blocks.push({
      '@type': 'FAQPage', '@id': `${pageUrl}#faq`, url: pageUrl, name: title, inLanguage: 'en',
      mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }
  return blocks;
}
