---
title: "Pagination, load more and infinite scroll: which pattern lets Google find all your content"
date: 2026-11-12T14:00:00+05:30
description: "Google's pagination guidance compares three patterns and explains why links matter more than buttons. A decision table, rules for URLs and an audit routine."
tag: "SEO"
tldr: "Google's pagination page (last updated 10 December 2025) says its crawlers generally follow href links in a elements and do not click buttons or trigger user-action scripts. Give each paginated page its own URL, link pages sequentially, avoid fragment identifiers and avoid indexing filter and sort URLs. The decision table and audit are ours."
sources:
  - title: "Pagination, incremental page loading, and their impact on Google Search"
    url: "https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading"
    publisher: "Google Search Central"
categories: ["SEO", "Ecommerce", "Technical SEO"]
tags: ["Pagination", "Infinite scroll", "Load more", "Crawlability", "Category pages"]
---

A category with 500 products cannot load on one screen. How you split it decides whether Google can reach product 400. Google's pagination guidance (last updated 10 December 2025 as we read it) compares three patterns and states what Googlebot actually does.

**Best for:** ecommerce teams, publishers with archives, and developers building listing pages.

![Pagination patterns: choose a pattern, make items reachable by links, give each page a URL, keep filters out of the index](/images/pagination-load-more-infinite-scroll/pagination-patterns.svg)

## What Google says

- Showing a subset of results can improve speed, reduce network traffic and backend load, and improve reliability, but you may need to act so the crawler can find all content.
- The patterns: **pagination** (next, previous and page numbers), **load more** (a button that extends the list) and **infinite scroll**.
- Pagination shows result size and position but needs new page loads. Load more and infinite scroll keep one page, but cannot handle very large result sets, and infinite scroll can cause scrolling fatigue.
- Google generally crawls URLs found in the `href` attribute of `a` elements. Its crawlers do not "click" buttons and generally do not trigger JavaScript that needs a user action.
- Link each page to the next with `a href`. Consider linking every page back to the first page of the collection.
- Pages in a paginated sequence can share titles and descriptions. Google tries to recognise sequences.
- Give each page a unique URL, such as a `?page=n` parameter. Do not make the first page the canonical for the others. Do not use `#` fragments for page numbers, because Google ignores fragment identifiers.
- Avoid indexing URLs with filters or alternative sort orders. A sitemap or a Merchant Center feed can also help Google find all products.

## Decision table

| Your list | Better fit | Check |
|---|---|---|
| Hundreds of items, SEO matters | Pagination with crawlable links | Every page reachable through `a href` |
| A short list with a "show more" | Load more | The extra items also exist as linked URLs |
| A feed of recent posts | Infinite scroll, with a paginated backup | Backup pages are linked and crawlable |
| Filters and sorting | Keep for users | Filter and sort URLs are not indexed |

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. List listing pages | SEO | 30 min | Categories, tag pages and archives | A list of templates exists |
| 2. Test crawlability | Developer | 30 min | View source and find `a href` to page 2 | Links exist without scripts |
| 3. Check URLs | Developer | 20 min | `?page=2`, not `#page=2` | No fragment page numbers |
| 4. Check canonicals | SEO | 20 min | Page 2 canonical points to page 2 | No sequence canonicals page 1 |
| 5. Keep filters out | SEO | 45 min | Filter URLs have a noindex or are blocked | They do not appear in results |
| 6. Compare with the sitemap | SEO | 30 min | Do deep products appear in the sitemap or feed? | Deep items are discoverable |

## Common mistakes

- A "load more" button that fetches items without any linked URL.
- Using `#` fragments for page numbers.
- Pointing every page at page one as the canonical.
- Letting every filter combination get indexed. See [faceted navigation](/faceted-navigation-and-filters-how-to-avoid-crawl-traps/) and [canonical URLs](/canonical-urls-for-a-blog-three-signals-and-six-mistakes-to-avoid/).

Test your scripts with our [JavaScript SEO check](/javascript-seo-a-ten-minute-check-for-script-heavy-sites/). Results are not guaranteed.
