---
title: "Structured data policies: what gets your markup ignored"
date: 2026-11-05T18:00:00+05:30
description: "Valid markup is not enough. Google's general structured data guidelines list the reasons rich results do not appear, from hidden content to fake reviews. A checklist to find yours."
tag: "SEO"
tldr: "Google says structured data does not guarantee a rich result, even when the Rich Results Test passes. Markup can be ignored if it is not visible on the page, is misleading, is incomplete, is out of date or sits on a blocked page. A violation can also cause a structured data manual action, which removes rich result eligibility but does not affect web ranking."
sources:
  - title: "General structured data guidelines"
    url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies"
    publisher: "Google Search Central"
categories: ["Structured Data", "SEO"]
tags: ["Structured data", "Rich results", "Manual actions", "Guidelines", "JSON-LD"]
---

Many teams add markup, pass the Rich Results Test and see nothing change. Google's "General structured data guidelines" (updated 10 July 2026 as we read it) explain why. This post turns that page into a diagnosis list. The grouping and the checks are our own.

## What Google says

To be eligible for a rich result, structured data must not violate Google's content policies, including its spam policies, and must follow the general guidelines. Google also states plainly that it does not guarantee your structured data will show, even if the Rich Results Test passes. Structured data enables a feature to be present; it does not guarantee it will be. A structured data issue can cause a manual action, which means the page loses eligibility for a rich result. Google says this does not affect how the page ranks in web search.

![Four reasons structured data gets ignored: not visible on the page, misleading, incomplete or stale, and blocked](/images/structured-data-policies-ignored/ignored-markup.svg)

## Four causes, with Google's wording in mind

**1. The markup is not on the page.** Google says not to mark up content readers cannot see. If JSON-LD names a performer, the page body must describe that performer.

**2. The markup is wrong or misleading.** Google's examples include fake reviews, content unrelated to the page, and the wrong kind of item, such as a woodworking site labelling instructions as recipes. It also says not to impersonate any person or organization or misrepresent ownership or purpose.

**3. The markup is incomplete or stale.** Required properties must be present; items missing them are not eligible. Google adds that it will not show a rich result for time-sensitive content that is no longer relevant.

**4. Google cannot reach the page.** Do not block pages with markup using robots.txt, noindex or other access controls. Image URLs in markup must also be crawlable and indexable.

## A ten-point audit (our own)

| # | Check |
|---|---|
| 1 | Every marked-up fact is visible on the page |
| 2 | The type matches what the page is |
| 3 | Required properties are all present |
| 4 | Reviews and ratings come from real users, not from you |
| 5 | Prices, dates and events are current |
| 6 | The page is indexable and not blocked |
| 7 | Image URLs in markup return the image and are crawlable |
| 8 | Markup is on the page it describes |
| 9 | Duplicate pages carry the same markup as the canonical, as Google recommends |
| 10 | Search Console shows no manual action for structured data |

## Why valid does not mean shown

Google says its algorithm tailors results by many variables, including search history, location and device, and may decide another feature, or plain text, serves the user better. So a missing rich result is not always a policy problem. Rule out the four causes first, then accept that Google may simply choose not to show it.

## What to do

1. Pick one template, such as articles, and run the ten-point audit on three pages.
2. Remove any markup for content that is not visible.
3. Fix required properties flagged in the Rich Results Test.
4. Check Manual actions in Search Console.
5. For article pages, use our [Article schema checklist](/article-schema-that-matches-the-page-author-dates-and-headline-with-a-checklist/). For which types matter, see the [schema decision table](/schema-for-aeo-and-geo-a-decision-table-by-page-type-and-a-ten-point-audit/), and for spam rules the [spam policies self-audit](/google-spam-policies-in-plain-english-a-self-audit-for-your-site-in-four-groups/).
