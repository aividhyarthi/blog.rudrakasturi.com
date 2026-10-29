---
title: "Breadcrumb markup for a blog: a JSON-LD example and the rules"
date: 2026-10-29T14:15:00+05:30
description: "How to add BreadcrumbList structured data to blog posts, with a JSON-LD example and the rules from Google's documentation: a real user path, at least two items, required properties and testing."
tag: "SEO"
tldr: "Google says breadcrumb markup uses a BreadcrumbList with at least two ListItems, each with a name and position, and a URL except for the last item. Breadcrumbs should show a typical user path rather than mirror the URL structure. Google lists the feature as available on desktop."
sources:
  - title: "Breadcrumb (BreadcrumbList) structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/breadcrumb"
    publisher: "Google Search Central"
categories: ["SEO", "Structured Data", "Google Search"]
tags: ["Breadcrumbs", "BreadcrumbList", "Structured data", "JSON-LD", "Technical SEO"]
---

A breadcrumb trail shows where a page sits in a site, for example Books, then Science Fiction, then Award Winners. Google's documentation, last updated in September 2026, explains how to mark it up so Search can use it. This guide applies that page to a blog.

## What Google says breadcrumbs do

Google says a breadcrumb trail indicates the page's position in the site hierarchy and may help users understand and explore a site. Google Search uses breadcrumb markup in the body of a page to categorise the information in search results. The documentation lists the feature as available on desktop in all regions and languages where Google Search is available. We covered the earlier change in [breadcrumb feature availability](/updated-feature-availability-for-breadcrumb-markup-what-seos-should-know/).

## The rules

Google states that these guidelines must be followed to be eligible to appear with breadcrumbs:

- **Show a typical user path.** Google recommends breadcrumbs that represent a typical path to the page, instead of mirroring the URL structure.
- **At least two items.** A `BreadcrumbList` must contain at least two `ListItem` entries.
- **Top level and page itself are optional.** You do not need an item for the domain, or for the page itself.
- **Do not use old markup.** Data-vocabulary.org markup is no longer eligible for Google rich result features.
- **Follow the general guidelines.** If markup breaks Google's structured data guidelines, the site may receive a manual action.

## Properties

`BreadcrumbList` requires `itemListElement`, an ordered array of `ListItem` entries. Each `ListItem` needs `name` (the title shown to the user) and `position` (1 for the start of the trail). It also needs `item`, the URL of the page, with one exception: for the last item in the trail, `item` is not required, and Google uses the URL of the containing page.

## A JSON-LD example for a blog post

This example is adapted from the pattern in Google's documentation, using a blog structure of Home, Category and the post. Replace the names and URLs with your own.

```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1,
      "name": "Blog", "item": "https://example.com/blog/" },
    { "@type": "ListItem", "position": 2,
      "name": "SEO", "item": "https://example.com/blog/seo/" },
    { "@type": "ListItem", "position": 3,
      "name": "Breadcrumb markup" }
  ]
}
</script>
```

Google supports JSON-LD, RDFa and Microdata, and the visible page should also show the trail to readers. If a post can be reached through several categories, Google allows multiple breadcrumb trails on one page.

![Four breadcrumb markup rules: show a real user path, use at least two items, fill the required properties, and test then monitor in Search Console](/images/breadcrumb-markup-for-a-blog/four-rules.svg)

## Test and monitor

Google's process is to validate with the Rich Results Test, deploy a few pages, and check them with the URL Inspection tool. After indexing, use the rich result status report in Search Console to watch for valid and invalid items, especially after a template change. Allow several days for recrawling.

## What to do

1. **Decide the trail** a reader would actually follow to reach each post.
2. **Add JSON-LD** with at least two items, using the example above.
3. **Match the visible breadcrumb** on the page to the markup.
4. **Run the Rich Results Test** on one post, then URL Inspection.
5. **Watch the Search Console report** after the next template change.

For related structured data guidance, see [how Google chooses your title link](/how-google-chooses-your-title-link-and-how-to-write-one/).

*Source: Google Search Central documentation, as linked above.*
