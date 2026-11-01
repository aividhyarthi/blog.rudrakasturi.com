---
title: "Links Google can crawl: a ten-minute link and anchor text audit"
date: 2026-11-01T06:30:00+05:30
description: "Google can only reliably follow a elements with an href. A ten-minute audit of crawlable links, anchor text before and after examples, link spacing, and when to use sponsored, ugc or nofollow."
tag: "SEO"
tldr: "Google says it generally follows links only when they are anchor elements with an href that resolves to a web address, and that anchor text should be descriptive, concise and relevant. Every page you care about should be linked from at least one other page. Use sponsored, ugc or nofollow for paid, user-added or untrusted links."
sources:
  - title: "Link best practices for Google"
    url: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
    publisher: "Google Search Central"
categories: ["SEO", "Google"]
tags: ["Internal links", "Anchor text", "Crawlable links", "rel attributes", "Technical SEO"]
---

Links help Google find pages and understand what they are about. Google's page on link best practices (last updated 10 December 2025, as we read it) makes two practical demands: links must be crawlable, and anchor text must say something useful. This audit turns those rules into checks you can run in ten minutes. The table of before and after examples is our own, written in the spirit of Google's examples.

![Four checks for links based on Google guidance: use a real a href link, use descriptive anchor text, give links context, and qualify paid, user-added or untrusted links](/images/crawlable-links-anchor-text-audit/four-checks.svg)

## Check 1: is it a real link?

Google says it can generally crawl a link only if it is an `a` element with an `href` attribute, and that most other formats are not parsed. It also says it cannot reliably extract URLs from tags that act like links through script events. Links inserted by JavaScript are fine if they use the same markup. The `href` should resolve to an actual web address, so values that only call a script function are not recommended.

| Likely fine | Risky |
|---|---|
| `<a href="/shoes/">Shoes</a>` | `<span onclick="go('/shoes/')">Shoes</span>` |
| `<a href="/shoes/" class="btn">Shoes</a>` | `<a href="javascript:go('shoes')">Shoes</a>` |

How to test: view the page source or use the URL Inspection tool's rendered HTML, and look for the link as an `a` with an `href`. Our [JavaScript SEO check](/javascript-seo-a-ten-minute-check-for-script-heavy-sites/) covers script-built pages.

## Check 2: does the anchor text say what is there?

Google calls good anchor text descriptive, reasonably concise and relevant to both pages. Its test: read only the anchor text, out of context, and see whether it makes sense. For an image link, Google uses the image's alt text. If a link is empty, it can fall back to the title attribute.

| Weak | Better |
|---|---|
| Click here | our [list of delivery options] |
| Read more | see [how returns work] |
| a link wrapping a whole sentence | a link on the three key words |

Our view: if you are forcing keywords into anchor text, stop. Google says keyword stuffing breaks its spam policies.

## Check 3: is there context around the link?

Google advises against chaining links together, because readers cannot tell them apart and each link loses its surrounding text. Put each link inside a sentence that explains why to click.

## Check 4: are your pages linked at all?

Google says every page you care about should be linked from at least one other page on your site, and that there is no magic number of links per page. Our method: export your sitemap URLs, crawl your site, and list sitemap pages that no crawl link points to.

## Check 5: should the link be qualified?

Google says linking out helps establish trust, for example when you cite sources. It says to use `nofollow` only when you do not trust a source, to qualify paid links with `sponsored` or `nofollow`, and to add `ugc` or `nofollow` to links that users can insert. Our [spam policies summary](/google-spam-policies-in-plain-english-a-self-audit-for-your-site-in-four-groups/) explains why paid links need this.

## What to do

1. Pick your ten most important pages and run Check 1 on their navigation and body links.
2. Search for "click here", "read more" and "learn more" in your content and rewrite them.
3. Find any orphan pages with the sitemap comparison and link to them in context.
4. Check forum, comment and ad links for `ugc`, `sponsored` or `nofollow`.
5. Use the same habits for AI answers, as in our guide to [internal linking for AEO and GEO](/how-to-optimise-internal-linking-for-aeo-and-geo/).
