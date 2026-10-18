# Running the blog without WordPress

Your blog is now a set of plain files. No database, no WordPress, no plan to renew.

## Add a new post
Create a file in `src/content/blog/`, e.g. `my-new-post.md`:

    ---
    title: "My new post"
    date: 2026-10-20
    description: "One sentence shown on cards and in Google."
    tag: "AI"
    ---

    Write your post here. **Bold**, ## headings, [links](https://example.com) all work.

Upload images to `public/images/` and use `![alt text](/images/photo.jpg)`.
The file name (without `.md`) becomes the web address, at the root like on WordPress: `/my-new-post/`.

## Bring over your old WordPress posts
1. In WordPress go to Tools > Export > All content > Download Export File.
2. Put the downloaded `.xml` file in this folder.
3. Run `npm install` then `npm run import-wp -- your-file.xml`, then `npm run download-media` to save the images.
4. Delete `src/content/blog/welcome.md`, then commit.

This also creates `public/_redirects`, which sends your old WordPress links to the
new ones so you keep your Google rankings.

## Google ads (AdSense)
Already set up: the ads script is on every page and `public/ads.txt` holds your AdSense line.
Your publisher ID lives in `src/config.ts`. Turn on Auto ads inside your AdSense account.

## Research and case studies
Add `type: research` or `type: case-study` to a post's header. It then appears on the
Research page and on the homepage, with a label.

## Hosting
The site builds to plain files in `dist/` (`npm run build`). Any static host works:
Cloudflare Pages, Netlify, Vercel or Railway (a Dockerfile is included).
Build command: `npm run build`. Output folder: `dist`.

## Menu and sections
The menu sections (SEO, AEO, LLMs, Google, YouTube, Forums) are defined in `SECTIONS` in `src/lib/posts.ts`.
Each lists which of your WordPress categories and which title keywords belong to it; a post can appear in several.
Your original WordPress category and tag addresses (`/category/seo/`, `/tag/google/` and so on) still work.
The Tools dropdown is `toolLinks` in `src/layouts/BaseLayout.astro`.

## Standalone pages
Pages live in `src/content/pages/` and appear at the root (`/privacy-policy/`). Set `wide: true` for embedded tools.
Old WordPress addresses that now point somewhere else are listed in `redirects-manual.txt`.
The Research page stays hidden from the menu and search engines until it has posts.

## Newsletter
The sign-up boxes and the slide-in popup are switched off. To show them, set `enabled: true` in `NEWSLETTER` in `src/config.ts`.
Before you do, finish the setup. The default sends each sign-up to rudra@rudrakasturi.com through formsubmit.co, which needs
a one-time activation: look for an email from FormSubmit in that inbox and click its link (check spam). To send a weekly email you
also need a newsletter service: set `provider` to `'substack'` or `'buttondown'` and `id` to your publication name.

## Cross-promotion
- `APPRANKR_POSTS` in `src/config.ts` lists the AppRankr blog posts shown on the homepage and sidebar. Add a line per post (id, title, url, blurb).
- The orange audit banner (AIPageAudit) appears on the homepage and under every article.
