---
title: "Google says raw and encoded square brackets in URLs are different URLs: what to check"
date: 2026-10-24T10:00:00+05:30
description: "John Mueller said a URL with [ ] and the same URL with %5B %5D are treated as separate URLs. A short audit to avoid duplicates."
tag: "SEO"
tldr: "Google's John Mueller said a URL containing square brackets and the same URL with the encoded form (%5B and %5D) are different URLs. Use one form everywhere, in links, canonical tags and sitemaps, so Google does not have to choose."
sources:
  - title: "Google Search Internal Issues With Square Brackets [] Punctuations In URLs"
    url: "https://seroundtable.com/google-square-brackets-urls-42332.html"
    publisher: "Search Engine Roundtable"
  - title: "Google crawls raw and encoded bracket URLs separately"
    url: "https://searchenginejournal.com/google-crawls-raw-and-encoded-bracket-urls-separately/593765"
    publisher: "Search Engine Journal"
categories: ["SEO", "Crawling", "Google Search"]
tags: ["URLs", "Canonical", "John Mueller"]
---

Google Search Advocate John Mueller said on Bluesky that a URL with raw square brackets and the same URL with the encoded forms (%5B for [ and %5D for ]) are different URLs. Search Engine Roundtable and Search Engine Journal reported it around October 20, 2026.

## What was said

- A raw bracket URL and its encoded version are separate URLs for Google.
- Mueller said he had probably given people the wrong answer on this before.
- He recommended using one form consistently across links, canonical tags and sitemaps. If both forms are linked, Google may choose which version to keep.
- He pointed to the URL standard, RFC 3986, in which square brackets are reserved characters, so encoding them is not treated as the same thing.
- He said he sees some related issues internally, and that they go back more than ten years.
- Other crawlers, indexers and fetchers may not handle this as exactly as Google, so it may be worth checking the URLs you care about.

We did not find an official Google documentation update on this in the reports we reviewed.

## Why it matters

Brackets appear in URLs more often than many site owners expect: filter and search parameters (for example `filter[color]=red`), array-style query strings, and some single-page application routes. If your site links to both forms, you may create duplicates without noticing.

## A quick check

1. **Search your pages for brackets.** Crawl your site, or search your sitemap, for URLs containing `[`, `]`, `%5B` or `%5D`.
2. **Pick one form.** Keep the form your site already serves most often.
3. **Make everything match.** Internal links, canonical tags and sitemap entries should all use that form.
4. **Inspect a few URLs in Search Console.** The URL Inspection tool shows which version Google selected as the canonical.
5. **Do not rush a mass change.** If Google already indexes one form properly, keep it and fix only the mismatches.

Where a URL pattern exists mainly to filter or sort, consider whether Google needs to crawl it at all. Related guidance is in [our practical checklist](/a-practical-checklist-for-ai-search-visibility/).
