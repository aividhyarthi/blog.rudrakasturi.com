import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    description: z.string().default(''),
    tag: z.string().optional(), // legacy single tag
    categories: z.array(z.string()).default([]), // WordPress categories
    tags: z.array(z.string()).default([]), // WordPress tags
    // article = normal post; research = original research; case-study = client/project story
    type: z.enum(['article', 'research', 'case-study']).default('article'),
    image: z.string().optional(),
    // Old WordPress address of this post, e.g. /2023/05/12/my-post/
    legacyPath: z.string().optional(),
    // One-paragraph summary shown at the top of the article.
    tldr: z.string().optional(),
    // Where the story comes from. Every researched article must list its sources.
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url(), publisher: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    wide: z.boolean().default(false), // wider layout, e.g. for embedded tools
    noindex: z.boolean().default(false),
  }),
});

export const collections = { blog, pages };
