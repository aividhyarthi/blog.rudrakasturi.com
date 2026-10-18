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
The file name (without `.md`) becomes the web address: `/blog/my-new-post/`.

## Bring over your old WordPress posts
1. In WordPress go to Tools > Export > All content > Download Export File.
2. Put the downloaded `.xml` file in this folder.
3. Run `npm install` then `npm run import-wp -- your-file.xml --download-images`.
4. Delete `src/content/blog/welcome.md`, then commit.

This also creates `public/_redirects`, which sends your old WordPress links to the
new ones so you keep your Google rankings.

## Google ads (AdSense)
Set an environment variable on your host: `PUBLIC_ADSENSE_CLIENT` = `ca-pub-XXXXXXXXXXXXXXXX`
(from your AdSense account). The ads script is then added to every page.
Also create `public/ads.txt` with the line AdSense gives you
(`google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`).

## Hosting
The site builds to plain files in `dist/` (`npm run build`). Any static host works:
Cloudflare Pages, Netlify, Vercel or Railway (a Dockerfile is included).
Build command: `npm run build`. Output folder: `dist`.
