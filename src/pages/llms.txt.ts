import { getAllPosts, getTopics } from '../lib/posts';

export async function GET() {
  const posts = await getAllPosts();
  const topics = getTopics(posts);
  const lines = [
    '# Rudra Kasturi',
    '',
    '> Practical analysis and explainers on SEO, answer engine optimization, AI search, large language models, Google, YouTube and digital growth.',
    '',
    'Website: https://blog.rudrakasturi.com/',
    'Author and publisher: Rudra Kasturi',
    'Language: English, with occasional multilingual content',
    '',
    '## Important pages',
    '',
    '- [About Rudra Kasturi](https://blog.rudrakasturi.com/about/)',
    '- [All articles](https://blog.rudrakasturi.com/blog/)',
    '- [Research](https://blog.rudrakasturi.com/research/)',
    '- [Work with me](https://blog.rudrakasturi.com/work-with-me/)',
    '- [RSS feed](https://blog.rudrakasturi.com/rss.xml)',
    '- [Full article corpus](https://blog.rudrakasturi.com/llms-full.txt)',
    '',
    '## Topic collections',
    '',
    ...topics.map((topic) => `- [${topic.name}](https://blog.rudrakasturi.com/category/${topic.slug}/): ${topic.count} published articles`),
    '',
    '## Published articles',
    '',
    ...posts.map((post) => `- [${post.data.title}](https://blog.rudrakasturi.com/${post.slug}/) | [Markdown](https://blog.rudrakasturi.com/${post.slug}.md) | ${post.data.date.toISOString().slice(0, 10)}`),
    '',
    '## Machine-readable content',
    '',
    'Every published article has a plain Markdown endpoint at its .md URL. These files are generated from the same source as the HTML pages and include canonical URL, publication dates, description, categories, tags and source references.',
    '',
  ];
  return new Response(lines.join('\\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' },
  });
}
