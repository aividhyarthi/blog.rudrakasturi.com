---
title: "How to see (and control) AI Overviews and AI Mode in Search Console"
date: 2026-10-13
description: "Search Console now has AI reports and a setting to opt out of AI features. What each does, and how it differs from robots.txt."
tag: "AI Mode"
tldr: "Search Console now reports how often your pages show in AI Overviews and AI Mode, but only impressions, not clicks. There is also a separate switch to opt out. Blocking Google-Extended in robots.txt does not remove you from AI Overviews."
sources:
  - title: "Google Search Console AI Reports Rolled Out Worldwide"
    url: "https://www.searchenginejournal.com/google-search-console-ai-reports-rolled-out-worldwide/587836/"
    publisher: "Search Engine Journal"
  - title: "Google Search Console AI performance reports and Search generative AI control rolling out globally"
    url: "https://searchengineland.com/google-search-console-ai-performance-reports-and-search-generative-ai-control-rolling-out-globally-486269"
    publisher: "Search Engine Land"
  - title: "What Opting Out Of Google's AI Search Features Means Now"
    url: "https://www.searchenginejournal.com/what-opting-out-of-googles-ai-search-features-means-now/584321/"
    publisher: "Search Engine Journal"
  - title: "How To Track Google AI Mode Traffic In Search Console"
    url: "https://www.searchenginejournal.com/how-to-track-google-ai-mode-traffic-in-search-console/586194/"
    publisher: "Search Engine Journal"
  - title: "AI crawlers: What are LLM & AI search crawlers and bots?"
    url: "https://searchengineland.com/guide/ai-crawlers"
    publisher: "Search Engine Land"
categories: ["AI Mode", "Google Search", "SEO"]
tags: ["AI Mode", "Search Console"]
---

Many site owners ask: "Is Google's AI using my pages, and can I stop it?" Search Console now gives you two separate tools. They are easy to mix up, so here is a clear guide.

## 1. The AI performance reports

Search Console's generative AI reports show how your pages appear in **AI Overviews** and **AI Mode**. According to Search Engine Journal and Search Engine Land they have rolled out worldwide. You can see impressions, pages, countries, devices and dates.

What they do **not** show:

- **Clicks.** There is no click data for these surfaces.
- The data is not available in the Search Analytics API or in BigQuery bulk export, so there is no official query-level tracking.

Some help pages say the rollout is still in progress, so you may not see the report yet.

## 2. The "Search generative AI" control

This is a separate setting that lets you exclude your site's links and content from AI Overviews, AI Mode and Discover's AI features. Google says it reached all websites worldwide as of August 31, 2026.

Think carefully before using it. Opting out can also affect features like **Preferred Sources** (see [what changed on October 15](/google-ai-mode-and-ai-overviews-now-show-more-links-what-changed-on-october-15/)).

## 3. robots.txt and Google-Extended: a different thing

This is where people get confused.

- **Google-Extended** is about AI *training and grounding* (the Gemini side). Google's documentation says it does not affect whether you appear in Search and is not a ranking signal.
- So **blocking Google-Extended does not remove you from AI Overviews, AI Mode or Top Stories.**
- **robots.txt only controls crawling**, not whether content is removed from Search.
- **noindex** and **nosnippet** control what appears in search results. But nosnippet also removes normal snippets, so it is a blunt tool.

## Quick guide

| You want to... | Use |
|---|---|
| Stop AI model training on your content | Google-Extended in robots.txt |
| Leave Google's AI Overviews / AI Mode | The Search generative AI setting in Search Console |
| Keep a page out of Search | noindex |
| See how often you appear in AI answers | The AI performance report |

## What to do

1. Look for the AI report in your Search Console and note your starting numbers.
2. Decide on purpose, not fear, whether you want to be in AI features. For most publishers, being cited is worth more than hiding.
3. Do not rely on robots.txt for anything it was not built to do.
