# Moving blog.rudrakasturi.com off WordPress

Your domains are registered with WordPress.com. You do NOT need to transfer them.
You only change where `blog.rudrakasturi.com` points. Email on rudra@rudrakasturi.com must keep working.

## Step 0: protect the domains (2 minutes)
In WordPress.com go to **Domains** and click **Turn on auto-renew** for `rudrakasturi.com`
and `blog.rudrakasturi.com`. Losing the domain is the one mistake that is hard to undo.
Also decide what to do with `ai.rudrakasturi.com` (it showed as paid until Oct 2, 2026) and `southwala.in` (expired).

## Step 1: put the site on a free host (Cloudflare Pages)
1. Create a free account at cloudflare.com, then **Workers & Pages > Create > Pages > Connect to Git**.
2. Pick the GitHub repo `aividhyarthi/blog.rudrakasturi.com` and the branch `main`.
3. Build command: `npm run build`. Build output directory: `dist`. Save and deploy.
4. You get a test address like `something.pages.dev`. Open it and check the site.

## Step 2: save your images BEFORE switching the domain
Run `npm run download-media` (see BLOG-GUIDE.md). Your old images live at
`blog.rudrakasturi.com/wp-content/...`, the address you are about to repoint.

## Step 3: check your email records
WordPress.com > Domains > `rudrakasturi.com` > **DNS records**. Note every `MX` and `TXT` record.
Do not delete or change them. They run your email.

## Step 4: point the blog at the new host
1. In Cloudflare Pages open your project > **Custom domains > Set up a custom domain** > `blog.rudrakasturi.com`.
2. In WordPress.com DNS records, delete the record(s) for `blog` that point to WordPress,
   then add a **CNAME** record: name `blog`, value `<your-project>.pages.dev`.
3. Wait a few minutes to a few hours. Cloudflare turns on https automatically.
4. In WordPress.com, disconnect `blog.rudrakasturi.com` from the old site (Site > Domains), so it stops claiming the address.

## Step 5: AdSense
`ads.txt` and the ads script are already in the site. In AdSense, add `blog.rudrakasturi.com`
under **Sites** and request review (if it isn't already listed). Old WordPress ad units don't carry over,
so turn on **Auto ads** for the site.

## Step 6: Google Search Console
Add the sitemap `https://blog.rudrakasturi.com/sitemap-index.xml`. Old post links redirect to the new ones
automatically (the file `public/_redirects` is read by Cloudflare Pages).
