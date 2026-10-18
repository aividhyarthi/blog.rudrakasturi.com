import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    description: z.string().default(''),
    tag: z.string().optional(),
    // article = normal post; research = original research; case-study = client/project story
    type: z.enum(['article', 'research', 'case-study']).default('article'),
    image: z.string().optional(),
    // Old WordPress address of this post, e.g. /2023/05/12/my-post/
    legacyPath: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
