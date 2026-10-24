---
title: "Google Search documentation updates, October 2026: URL structure, content controls and the UGC Fresh Data Program"
date: 2026-10-24T09:00:00+05:30
description: "A summary of what changed in Google Search Central's documentation in October 2026, with what each update means for site owners."
tag: "Search Central"
tldr: "Google updated five Search Central pages in October 2026: the generative AI content guide, a new UGC Fresh Data Program, the Indexing API quota page, the 'control what you share' page, and URL structure best practices. The most useful for most sites are the URL and content-control pages."
sources:
  - title: "Latest Google Search documentation updates"
    url: "https://developers.google.com/search/updates"
    publisher: "Google Search Central"
  - title: "URL structure best practices for Google Search"
    url: "https://developers.google.com/search/docs/crawling-indexing/url-structure"
    publisher: "Google Search Central"
  - title: "Control what you share with Google Search"
    url: "https://developers.google.com/search/docs/crawling-indexing/control-what-you-share"
    publisher: "Google Search Central"
  - title: "UGC Fresh Data Program"
    url: "https://developers.google.com/search/docs/appearance/ugc-fresh-data-program"
    publisher: "Google Search Central"
categories: ["Google Search", "SEO", "Crawling"]
tags: ["Search Central", "Documentation", "URLs", "robots meta tag"]
---

Google lists changes to its Search Central documentation on a public updates page. This article summarizes the five October 2026 entries, using Google's own descriptions and the pages they point to.

![A timeline of five Google Search documentation updates in October 2026](/images/google-search-docs-updates-october-2026/timeline.svg)

## 23 October: URL structure best practices

Google clarified its word-separation guidance: it recommends **hyphens (-) instead of underscores (_)** to separate words in URLs. Its stated reason is that underscores are often used to join concepts together, as in programming function names, while hyphens clearly mark a word boundary. Joining words with no separator, such as `greendress`, is also listed as not recommended.

The same page gives other requirements for a crawlable URL structure. Among them:

- Follow the URL standard (IETF STD 66) and percent-encode reserved characters.
- Do not use URL fragments (such as `#/potatoes`) to change page content.
- Use an equals sign between keys and values and an ampersand between parameters. Google lists brackets and colons as not recommended.
- URLs are case sensitive: `/APPLE` and `/apple` are different URLs.
- Use as few parameters as you can.

If you recently read our note on [square brackets in URLs](/google-says-raw-and-encoded-square-brackets-in-urls-are-different-urls-what-to-check/), this page is the underlying documentation.

## 21 October: Control what you share with Google Search

Google updated this page to list existing options, including the robots meta tag, `data-nosnippet`, `X-Robots-Tag` and the Search generative AI control. It adds minor clarifications that the page applies to Google Search.

![Five ways to control what Google Search shows, from removing content to the Search generative AI control](/images/google-search-docs-updates-october-2026/controls.svg)

The methods named on the page are: removing the content, password protection, the `noindex` rule, blocking with robots.txt (for images and video), the page-level and text-level settings above, and the site-wide **Search generative AI control** in Search Console, which manages inclusion in AI Overviews and AI Mode. Our guide to [the AI controls in Search Console](/how-to-see-and-control-ai-overviews-and-ai-mode-in-search-console/) covers that last one.

## 16 October: Indexing API quota page

Google updated the quota page to reflect the current limits and process, and removed an outdated form. If you use the Indexing API, check the page for the current limits instead of relying on older figures.

## 8 October: UGC Fresh Data Program

This is a new page. Google describes a program that lets approved platforms send fresh user-generated content, such as social posts and forum discussions, through a dedicated data pipeline. The page says:

- It is separate from the Indexing API and from normal crawling.
- It does not guarantee that content appears in Search.
- Eligibility includes a platform that mainly hosts user-generated content on dedicated pages with stable URLs, a high volume of content and a significant user base, public pages with creators who have public profiles, and active moderation with a reporting mechanism.
- Technical requirements include OAuth 2.0 API authentication, JSON-LD payloads, and valid markup such as `SocialMediaPosting` or `DiscussionForumPosting`.

It matters mainly to platforms, not to ordinary sites.

## 1 October: Using generative AI content

Google updated its guide on generative AI content with information from the Search Quality Raters Guidelines, to keep the documentation in step with its developer-event presentations.

## What to do

1. **Check your URLs.** If you use underscores, bracket parameters or fragments to change content, plan changes carefully and keep redirects in place.
2. **Review your controls.** Confirm that your `noindex`, robots.txt and generative AI settings match what you intend.
3. **Read the pages that apply to you.** Most of these updates affect specific kinds of sites.
4. **Follow the source.** The updates page also offers an RSS feed.
