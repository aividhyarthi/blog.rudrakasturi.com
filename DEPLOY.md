# Taking blog.rudrakasturi.com live on Railway

Your domain stays registered at WordPress.com. You do not transfer it. You only change two
DNS records so that `blog.rudrakasturi.com` points at Railway instead of WordPress.

## Step 0: protect the domains (2 minutes)
WordPress.com > **Domains**: click **Turn on auto-renew** for `rudrakasturi.com` and `blog.rudrakasturi.com`.
Also decide what to do with `ai.rudrakasturi.com` (showed as paid until Oct 2, 2026) and `southwala.in` (expired).

## Step 1: deploy the site on Railway
1. railway.com > **New Project > Deploy from GitHub repo** > `aividhyarthi/blog.rudrakasturi.com`, branch `main`.
2. Railway finds the `Dockerfile` by itself. No settings or variables are needed.
3. When the deploy turns green, open the service > **Settings > Networking > Generate Domain**.
   You get a test address like `something.up.railway.app`. Check the site there.

## Step 2: save your images BEFORE switching the domain
Run `npm run download-media` (see BLOG-GUIDE.md). Your old images live at
`blog.rudrakasturi.com/wp-content/...`, the address you are about to repoint.

## Step 3: check your email records
WordPress.com > Domains > `rudrakasturi.com` > **DNS records**. Write down every `MX` and `TXT` record
and leave them alone. They run `rudra@rudrakasturi.com`.

## Step 4: connect the domain
1. Railway service > **Settings > Networking > + Custom Domain** > type `blog.rudrakasturi.com`.
   If asked for a port, choose `8080`.
2. Railway shows two records: a **CNAME** and a **TXT** (`_railway-verify...`).
3. In WordPress.com DNS records:
   - Delete the existing records for `blog` that point to WordPress (A, AAAA or CNAME).
   - Add the **CNAME**: host `blog`, value = what Railway shows.
   - Add the **TXT**: host `_railway-verify.blog`, value = what Railway shows.
   - Type only the short host (`blog`), not the full domain, or WordPress.com may append it twice.
   - Never leave an A record and a CNAME on the same host.
4. Back in Railway wait for the domain to show as verified and the certificate (https) to issue.
   Usually minutes; can take up to 72 hours.
5. In WordPress.com, disconnect `blog.rudrakasturi.com` from the old site so it stops claiming the address.

Plan limits: a trial account allows 1 custom domain, Hobby allows 2 per service. One is all you need.

## Step 5: AdSense
`ads.txt` and the ads script are in the site. In AdSense add `blog.rudrakasturi.com` under **Sites** and
turn on **Auto ads**. Old WordPress ad units do not carry over.

## Step 6: Google Search Console
Submit `https://blog.rudrakasturi.com/sitemap-index.xml`. Old WordPress links are redirected (301) to the
new addresses by the server automatically.

## The main domain, rudrakasturi.com
It currently points to the same expired WordPress site. Railway cannot use a bare domain with WordPress.com's DNS
(it needs ALIAS or CNAME flattening). Easiest options: forward `rudrakasturi.com` to `blog.rudrakasturi.com`
using WordPress.com's domain forwarding, or later move the DNS to Cloudflare (free).
