---
title: "Canonical URLs for a blog: three signals and the mistakes to avoid"
date: 2026-10-29T08:15:00+05:30
description: "Google lists redirects, rel=canonical and sitemap inclusion as canonicalization signals, from strongest to weakest. How to use them on a blog, and the mistakes its documentation warns about."
tag: "SEO"
tldr: "Google says redirects and rel=canonical are strong canonical signals and sitemap inclusion is a weak one, and that they stack. None is required, because Google picks a canonical itself if you do not. Avoid robots.txt, noindex and conflicting signals, and link internally to the canonical URL."
sources:
  - title: "How to specify a canonical URL with rel=\"canonical\" and other methods"
    url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls"
    publisher: "Google Search Central"
categories: ["SEO", "Google Search"]
tags: ["Canonical URL", "rel canonical", "Duplicate content", "Redirects", "Technical SEO"]
---

A blog post can be reachable at several addresses: with and without `www`, with tracking parameters, or with a trailing slash. Google calls the version it chooses to show the canonical URL. Its documentation, last updated in July 2026, explains how to state a preference. For how Google weighs many signals behind the scenes, see our explainer on [how Google decides the best URL](/how-google-decides-the-best-url-clustering-and-canonicalization-explained/).

## Three signals, strongest first

Google lists these methods in order of how strongly they can influence canonicalization:

1. **Redirects** are a strong signal that the redirect target should become canonical.
2. **`rel="canonical"` link annotations** are a strong signal that the specified URL should become canonical.
3. **Sitemap inclusion** is a weak signal that helps included URLs become canonical.

Google adds that these methods can stack, so using two or more increases the chance that your preferred URL appears in results. It also says none of them is required, and that your site will likely do fine without a preference, since Google identifies the objectively best version if you do not specify one.

![Canonical signals from strongest to weakest: redirects, rel canonical and sitemap inclusion, plus mistakes to avoid such as robots.txt, mixed signals and noindex](/images/canonical-urls-for-a-blog/three-signals.svg)

## Why bother

Google gives four reasons to specify one: to choose which URL people see in results, to consolidate signals such as links from other sites into one URL, to simplify tracking metrics for a piece of content, and to avoid spending crawl time on duplicate pages. Its example is a tracking-parameter address versus the clean product page.

## The mistakes to avoid

From Google's best practices:

- **Do not use robots.txt for canonicalization.** Google may still index disallowed URLs without their content.
- **Do not use the URL removal tool** for this purpose, because it hides all versions of a URL.
- **Do not send mixed signals,** such as one URL in the sitemap and a different one in `rel="canonical"` for the same page.
- **Do not specify a URL fragment** as canonical.
- **Do not use noindex to choose between duplicates** on your own site, because it blocks the page from Search entirely. Google prefers `rel="canonical"` here. See [noindex vs robots.txt](/noindex-vs-robots-txt-which-one-to-use-and-the-common-mistake/).
- **Do not let JavaScript rewrite the canonical.** Put it in the HTML source, or if you cannot, set it only with JavaScript.

## Good habits

Google recommends a self-referential canonical on the canonical page itself, and linking internally to the canonical URL rather than a duplicate. If you use hreflang, the canonical should be in the same language, or the best available substitute.

## A ten-minute blog audit

Open a recent post and try four variations: with and without `www`, with `http`, and with a made-up parameter such as `?ref=test`. Each should redirect to, or declare, the same canonical address. Then view the page source and confirm there is one `rel="canonical"` link pointing at the clean URL, and that your [sitemap](/xml-sitemaps-for-a-blog-what-to-include-and-how-to-submit/) lists the same address.

## What to do

1. **Choose one preferred form** of your address (for example, https with www).
2. **Redirect the other forms** to it.
3. **Add a self-referential `rel="canonical"`** to every post.
4. **List only canonical URLs** in your sitemap.
5. **Link internally to the canonical URL** every time.

*Source: Google Search Central documentation, as linked above.*
