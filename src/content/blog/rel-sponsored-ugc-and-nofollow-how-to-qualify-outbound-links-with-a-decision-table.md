---
title: "rel sponsored, ugc and nofollow: how to qualify outbound links, with a decision table"
date: 2026-11-12T12:00:00+05:30
description: "Google's guidance on qualifying outbound links: no rel for normal links, sponsored for paid links, ugc for user content and nofollow for the rest. A decision table and audit steps."
tag: "SEO"
tldr: "Google's outbound links page (last updated 10 December 2025) says normal links need no rel attribute, paid links should use rel=sponsored (nofollow is still acceptable), user-generated links should use rel=ugc, and nofollow is for other links you would rather Google not associate with your site. The decision table and audit are ours."
sources:
  - title: "Qualify your outbound links to Google"
    url: "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links"
    publisher: "Google Search Central"
categories: ["SEO", "Links"]
tags: ["rel=sponsored", "rel=ugc", "nofollow", "Outbound links", "Affiliate links"]
---

Every outbound link tells a story about your relationship with the page you link to. Google's guidance (last updated 10 December 2025 as we read it) gives three optional labels for the links where that story is not "editorial recommendation".

**Best for:** editors, affiliate teams, community managers and SEO leads.

![Link qualifiers: no rel for normal links, sponsored for paid, ugc for user-generated, nofollow for the rest](/images/qualify-outbound-links/rel-values.svg)

## What Google says

- For regular links you expect Google to fetch and parse without qualification, you do not need a `rel` attribute.
- `rel="sponsored"` marks advertisements and paid placements. `nofollow` was previously recommended for these and is still acceptable, but `sponsored` is preferred.
- `rel="ugc"` is recommended for user-generated content links such as comments and forum posts. To reward trusted contributors, you might remove it from links by members who have consistently made high-quality contributions.
- `rel="nofollow"` is for cases where the other values do not apply and you would rather Google not associate your site with, or crawl, the linked page. For links inside your own site, use a robots.txt disallow rule.
- You can combine values, separated by spaces or commas, such as `ugc nofollow`.
- Marked links will generally not be followed, but the linked pages may still be found through sitemaps or other sites' links.
- To stop indexing, allow crawling and use `noindex`.

## Decision table

| The link is | Use | Notes |
|---|---|---|
| Your own editorial recommendation | No `rel` | Nothing to add |
| Paid, sponsored or an advertisement | `sponsored` | `nofollow` is still acceptable |
| An affiliate link where you earn a commission | `sponsored` (our reading) | Google points to its affiliate programs guidance |
| In a comment, forum post or profile | `ugc` | Consider removing it for proven contributors |
| A link you do not want to vouch for | `nofollow` | Use it when other values do not apply |
| A link to a page on your own site you want uncrawled | robots.txt | `rel` is the wrong tool |

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Export outbound links | SEO | 30 min | A crawl export of external `a href` values | A sorted list exists |
| 2. Group by relationship | Editor | 45 min | Editorial, paid, affiliate, user-generated | Each group has a label |
| 3. Check the paid group | Partnerships | 30 min | Does each sponsored link carry `rel="sponsored"`? | No unlabelled paid links |
| 4. Check user content | Community manager | 30 min | Do comment and forum links carry `ugc`? | Template sets it by default |
| 5. Set a trusted-member rule | Community manager | 30 min | Decide who earns links without `ugc` | A written rule exists |
| 6. Spot-check live pages | SEO | 20 min | View source on five pages | Output matches the plan |

## Common mistakes

- Marking every outbound link `nofollow` out of habit. Editorial links need nothing.
- Leaving affiliate or paid placements unlabelled.
- Expecting `nofollow` to keep a page out of Google. Use `noindex` with crawling allowed.
- Using `rel` for internal pages. Use robots.txt instead.

Related: [links Google can crawl](/links-google-can-crawl-a-ten-minute-link-and-anchor-text-audit/), [spam policies in plain English](/google-spam-policies-in-plain-english-a-self-audit-for-your-site-in-four-groups/) and [noindex vs robots.txt](/noindex-vs-robots-txt-which-one-to-use-and-the-common-mistake/). Labelling does not guarantee any ranking outcome.
