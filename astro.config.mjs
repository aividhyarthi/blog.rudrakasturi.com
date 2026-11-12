import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.rudrakasturi.com',
  output: 'static',
  // The Research page stays out of the sitemap until it has posts.
  integrations: [sitemap({ filter: (page) => !page.endsWith('/research/') && !page.endsWith('.md') && !page.endsWith('/llms.txt') && !page.endsWith('/llms-full.txt') })],
});
