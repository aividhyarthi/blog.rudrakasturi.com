---
title: "Multiple structured data items on one page: when to nest, when to list, and how to link with @id"
date: 2026-11-14T15:00:00+05:30
description: "Google says it understands multiple items on a page, nested or individual, and that linked items help. How to choose, how to use @id, and a made-up recipe page example with owners and checks."
tag: "AEO"
tldr: "Google's general structured data guidelines (last updated 10 July 2026) say Google Search understands multiple items on a page whether nested or listed individually, recommend @id to link items that belong together, say to include the main type for the page's focus, and say to mark up all visible reviews if you mark up reviews. The steps are ours."
sources:
  - title: "General structured data guidelines: multiple items on a page"
    url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies"
    publisher: "Google Search Central"
categories: ["AEO", "Structured data", "Technical SEO"]
tags: ["Structured data", "JSON-LD", "@id", "Nested markup", "Recipe"]
---

A single page often holds several things: a recipe, a video of that recipe, reviews and a breadcrumb trail. Google's general guidelines (last updated 10 July 2026 as we read them) cover how to mark up more than one item. This post turns that short section into a decision rule and a checklist.

**Best for:** developers who write JSON-LD and SEO leads who review it.

![Multiple items on a page: pick the main type, nest related items or list separate ones, link with @id, mark up everything visible](/images/multiple-structured-data-items/multiple-items.svg)

## What Google says

- Multiple items on a page means more than one kind of thing is on the page. Marking up all the user-visible items helps search engines understand the page and may let it appear in different search features.
- Google Search understands multiple items whether you **nest** them (one main item with others grouped under it) or specify them **individually** (separate blocks on the same page).
- Nesting is described as particularly helpful for related items, such as a recipe with a video and reviews. Individual items suit things like a recipe plus a breadcrumb list.
- If items are more helpful when linked, for example a recipe and a video, use `@id` in both so Google knows the video is about that recipe. If they are not linked, Google may not know it can show the video as a Recipe rich result.
- Include the main type that reflects the page's focus. A page mainly about a recipe should have Recipe markup in addition to Video and Review markup. With only Video markup, Google would not know enough to show a recipe rich result.
- If you mark up multiple reviews, include all reviews that are visible to people on the page. Marking up only some would be misleading.

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Inventory the page | SEO | 20 min | List every visible item: main item, video, reviews, breadcrumb | One list per page template |
| 2. Choose the main type | SEO | 15 min | The type that matches the page's focus | Main type named |
| 3. Nest or list | Developer | 1 hour | Related items nested, unrelated ones separate | Rule written for each template |
| 4. Link with @id | Developer | 30 min | Same @id referenced in both items | Linked items share an @id |
| 5. Match all visible reviews | Editor | 30 min | Marked-up reviews equal reviews on the page | Counts match |
| 6. Validate and monitor | SEO | 30 min | Rich Results Test, then Search Console | A passed test and a review date |

## Example (made up)

A recipe page shows the recipe, a how-to video, 12 reader reviews and a breadcrumb trail. The team nests the video and review ratings under Recipe, lists the breadcrumb as a separate item, and checks that the markup covers all 12 visible reviews. It does not promise a rich result.

## Common mistakes

- Marking up only the video and skipping the main type.
- Marking up only the best reviews.
- Describing items in markup that are not on the page.
- Forgetting to link related items with an @id.

Related: [general structured data guidelines as a QA checklist](/general-structured-data-guidelines-as-a-pre-release-qa-checklist-for-seo-and-aeo-teams/), [breadcrumb markup](/breadcrumb-markup-for-a-blog-a-json-ld-example-and-the-rules/) and [structured data before and after](/structured-data-before-and-after-a-test-plan-and-rollout-for-seo-and-aeo-teams/). Results are not guaranteed.
