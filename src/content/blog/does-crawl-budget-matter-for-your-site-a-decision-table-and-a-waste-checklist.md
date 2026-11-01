---
title: "Does crawl budget matter for your site? A decision table and a waste checklist"
date: 2026-11-01T10:30:00+05:30
description: "Google says crawl budget guidance is mainly for very large or fast-changing sites. What crawl capacity and crawl demand mean, who should act, and a checklist for cutting wasted crawling."
tag: "SEO"
tldr: "Google says its crawl budget guide is for very large sites, sites with 10,000 or more rapidly changing pages, or sites with many Discovered, currently not indexed URLs, and that the numbers are rough. Crawl budget is crawl capacity plus crawl demand. The part owners control most is the URL inventory: duplicates, junk URLs, soft 404s and slow pages."
sources:
  - title: "Optimize your crawl budget"
    url: "https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget"
    publisher: "Google Search Central"
categories: ["SEO", "Google"]
tags: ["Crawl budget", "Crawling", "Technical SEO", "robots.txt", "Large sites"]
---

"Crawl budget" is one of the most overused terms in SEO. Google's own guide opens by saying that if your site does not have a large number of rapidly changing pages, or if pages are crawled the same day they are published, you do not need to read it. For those sites, it says, an up-to-date sitemap and a regular look at the Page Indexing report are adequate. This post summarises the guide (read in full) and adds a decision table and checklist of our own.

![Crawl budget as described by Google: crawl capacity limit, crawl demand, the URL inventory you control, and who needs to act](/images/crawl-budget-does-it-matter/two-parts.svg)

## Who the guide is for

Google names three groups: sites with 1 million or more unique pages that change about weekly; sites with 10,000 or more unique pages that change daily; and sites where a large share of URLs are marked Discovered, currently not indexed in Search Console. It adds that the numbers are rough and not exact thresholds.

| Your situation | Our reading |
|---|---|
| A blog or small business site with a few hundred pages | Not a priority; fix quality, links and indexing first |
| A shop with 10,000 or more products that change daily | Read the guide and act |
| Search Console shows many Discovered, currently not indexed URLs | Investigate, but also check content quality |
| New pages are crawled the same day | Not a problem |

## What crawl budget is

Google says a site's crawl budget is the set of URLs it can and wants to crawl, shaped by two things. **Crawl capacity limit** is how much crawling your server can take without strain. It rises when the site responds consistently, and falls when the site slows or returns 5xx errors or 429 rate-limiting responses. **Crawl demand** is how much Google wants to crawl, based on site size, update frequency, page quality and relevance. Google adds that a crawled page is not always indexed.

The factor owners can influence most is what Google calls perceived inventory: if many known URLs are duplicates or unimportant, crawling time is wasted.

## A waste checklist

This is our checklist, built from Google's best practices.

1. **Duplicates.** Consolidate them, using our [canonical URL guide](/canonical-urls-for-a-blog-three-signals-and-six-mistakes-to-avoid/).
2. **Unimportant URL variants.** Google says to block pages you never want crawled, such as differently sorted versions, with robots.txt. It says not to use noindex for this, because Google still requests the page before dropping it. See [noindex versus robots.txt](/noindex-vs-robots-txt-which-one-to-use-and-the-common-mistake/).
3. **Removed pages.** Return 404 or 410. Google says blocked URLs stay in the crawl queue longer.
4. **Soft 404s.** Find them in the Page Indexing report and fix them.
5. **Sitemap.** Keep it current and include lastmod for updated content.
6. **Redirect chains.** Avoid long chains.
7. **Speed.** Faster responses can let Google read more. Google also suggests supporting 304 Not Modified responses.

Google says robots.txt should not be used to temporarily shift crawl budget, because freed capacity moves to other pages only if Google is already at your capacity limit.

## How to get more

Google gives two routes: add server resources if you see Hostload exceeded in the URL Inspection tool, and improve content quality for the product you target.

## What to do

1. Place your site in the decision table.
2. If it is small, spend the time elsewhere, starting with our [ten-minute server log method](/how-to-read-server-logs-for-search-and-ai-crawlers-a-ten-minute-method/) to confirm crawling is healthy.
3. If it is large, run the waste checklist and review Search Console's crawl reports.
4. Read our explainer on whether [removing old articles helps crawl budget](/explainer-does-removing-old-articles-help-your-crawl-budget-rankings/).
