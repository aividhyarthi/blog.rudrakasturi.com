---
title: "Faceted navigation and filters: how to avoid crawl traps"
date: 2026-11-05T19:00:00+05:30
description: "Filters can create endless URLs that waste crawling. Google's faceted navigation guidance, turned into a per-filter decision, a robots.txt example and a 404 rule."
tag: "SEO"
tldr: "Google says URL-parameter filters can create infinite URL spaces that cause overcrawling and slower discovery of new pages. It recommends blocking crawling of facet URLs you do not need indexed, and for the ones you do need, using standard '&' separators, a consistent filter order and 404s for empty results. The decision flow is our own."
sources:
  - title: "Managing crawling of faceted navigation URLs"
    url: "https://developers.google.com/crawling/docs/faceted-navigation"
    publisher: "Google Search Central"
categories: ["SEO", "Crawling"]
tags: ["Faceted navigation", "Crawl budget", "robots.txt", "Ecommerce SEO", "URL parameters"]
---

A shop with colour, size, brand and price filters can produce millions of URLs from a few hundred products. Google's guide, updated 18 December 2025 as we read it, says this can harm a site in two ways: overcrawling, because crawlers cannot tell the URLs are useless until they fetch them, and slower discovery of new, useful URLs. We covered the topic in [an older post](/faceted-navigation-how-to-optimize-crawling-and-save-seo-resources/); this version follows the current page and adds a decision method.

## The decision, per filter (our own)

![Faceted navigation decision flow: if people search for the filter make it a real page, if not stop crawling, then check](/images/faceted-navigation-crawl-traps/facet-decision.svg)

Google gives two paths: prevent crawling of facet URLs you do not need indexed, or make the ones you need follow its best practices. For each filter, ask whether people search for that combination by name.

| Filter or combination | Example | Path |
|---|---|---|
| Searched for by name | "red running shoes" | Make it a real page (path B) |
| Used by shoppers but not searched | price sort, size 9 | Stop crawling (path A) |
| Nonsense or duplicate combination | colour=red&colour=blue | Stop crawling and return 404 |

## Path A: stop crawling

Google's first recommendation is to disallow the parameters in robots.txt and allow only item pages plus a dedicated listing page. Its example:

```text
user-agent: Googlebot
disallow: /*?*products=
disallow: /*?*color=
disallow: /*?*size=
allow: /*?products=all$
```

Test your own patterns carefully before you ship; a wrong rule can block real pages. Google also notes that filters kept in URL fragments (after the #) have no effect on crawling, since it generally does not support fragments for crawling and indexing. It says rel="canonical" and rel="nofollow" can help but are generally less effective in the long term, and that nofollow only works if every anchor to the URL carries it.

## Path B: keep facet URLs you want indexed

Google warns that crawling these URLs costs servers resources and may slow discovery of new URLs. Its practices:

1. Use the standard '&' as the parameter separator. Commas, semicolons and brackets are hard for crawlers to detect as separators.
2. If filters are in the path, such as /products/fish/green/tiny, keep the filter order fixed and allow no duplicate filters.
3. Return a 404 status for combinations with no results, for duplicate filters, for nonsensical combinations and for nonexistent pagination. Do not redirect to a generic error page.

Google adds that on a single-page app the 404 may not be possible, and refers to its guidance for such apps.

## A ten-minute check

1. Search your server logs for Googlebot requests that contain "?" and count them against requests to plain product URLs. Our [log method](/how-to-read-server-logs-for-search-and-ai-crawlers-a-ten-minute-method/) explains how.
2. Open the Crawl stats report in Search Console and note which URL types dominate.
3. Try a filter combination with no results. Is the status 404?
4. Look at your robots.txt for filter parameters.

## What we could not confirm

We have not measured how much crawling any particular site wastes; that depends on the site. See our [crawl budget decision table](/does-crawl-budget-matter-for-your-site-a-decision-table-and-a-waste-checklist/) to judge whether it matters for you.

## What to do

1. List every filter and sort parameter on your site.
2. Mark each one searched-for or not.
3. Block the rest in robots.txt after testing, and fix the 404 behaviour.
4. Give searched-for combinations a clean, canonical URL and a unique title.
5. Recheck logs and Crawl stats after two to four weeks. See also [robots.txt for a blog](/robots-txt-for-a-blog-a-starter-file-explained-line-by-line/) and [canonical URLs](/canonical-urls-for-a-blog-three-signals-and-six-mistakes-to-avoid/).
