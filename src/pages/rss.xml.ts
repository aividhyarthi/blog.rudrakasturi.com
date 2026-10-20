import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getAllPosts, topicOf } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getAllPosts();
  return rss({
    title: 'Rudra Kasturi',
    description: 'Thoughts on AI, search, growth and building things.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.tldr ?? post.data.description,
      link: `/${post.slug}/`,
      categories: [topicOf(post).name],
    })),
  });
}
