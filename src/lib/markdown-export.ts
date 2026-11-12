import type { Post } from './posts';

const yaml = (value: unknown): string => {
  if (value === undefined || value === null) return 'null';
  return JSON.stringify(value);
};

export function postMarkdown(post: Post): string {
  const { title, date, updated, description, categories, tags, type, tldr, sources, image } = post.data;
  const canonical = `https://blog.rudrakasturi.com/${post.slug}/`;
  const lines = [
    '---',
    `title: ${yaml(title)}`,
    `canonical_url: ${yaml(canonical)}`,
    `markdown_url: ${yaml(`https://blog.rudrakasturi.com/${post.slug}.md`)}`,
    `date_published: ${yaml(date.toISOString())}`,
    `date_modified: ${yaml((updated ?? date).toISOString())}`,
    `description: ${yaml(description)}`,
    `content_type: ${yaml(type)}`,
    `categories: ${yaml(categories)}`,
    `tags: ${yaml(tags)}`,
    `author: ${yaml('Rudra Kasturi')}`,
    `image: ${yaml(image ?? null)}`,
    `summary: ${yaml(tldr ?? null)}`,
    `sources: ${yaml(sources)}`,
    '---',
    '',
    post.body.trim(),
    '',
    `Canonical article: ${canonical}`,
  ];
  return lines.join('\\n');
}
