---
title: "How to get your blog found in ChatGPT and Google AI Mode: a practical guide"
date: 2026-10-28T09:10:00+05:30
description: "Three checks for bloggers using Google's and OpenAI's own documentation: let the right crawlers in, publish something only you can say, and measure results in Search Console and analytics."
tag: "AEO"
tldr: "Google says generative AI features rest on core Search systems and need no special files or markup. OpenAI says to allow OAI-SearchBot for ChatGPT search. For a blog, the work is crawler access, original content that is not a summary of others, and measurement."
sources:
  - title: "Optimizing your website for generative AI features on Google Search"
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
    publisher: "Google Search Central"
  - title: "AI features and your website"
    url: "https://developers.google.com/search/docs/appearance/ai-features"
    publisher: "Google Search Central"
  - title: "Overview of OpenAI Crawlers"
    url: "https://developers.openai.com/api/docs/bots"
    publisher: "OpenAI"
categories: ["AEO", "Blogging", "Google Search"]
tags: ["AEO", "Blog SEO", "ChatGPT", "AI Mode", "GEO"]
---

Bloggers keep asking how to appear in AI answers. Google and OpenAI each publish guidance, and it is plainer than most advice online.

## What Google's guide says

Google's guide to generative AI features says SEO best practices remain relevant because these features are rooted in its core ranking and quality systems. It names two techniques: retrieval-augmented generation, which retrieves relevant pages from the Search index, and query fan-out, which runs related searches to gather more. (We explain the second in [our query fan-out guide](/query-fan-out-in-ai-search-what-it-is-how-it-works/).) On "AEO" and "GEO", Google says that from its perspective optimising for generative AI search is still SEO.

![Three checks for a blog: let crawlers in, say what only you can say, and measure results](/images/blog-chatgpt-ai-mode/three-checks.svg)

## Check 1: let the right crawlers in

For Google, a page must be indexed and eligible to appear in Search with a snippet. For ChatGPT, OpenAI's crawler documentation says OAI-SearchBot is used to surface websites in ChatGPT's search features, that blocking it keeps a site out of ChatGPT search answers, and that OpenAI recommends allowing it in robots.txt. Its settings are independent of GPTBot, which relates to training. See our guide to [OpenAI's bots](/openai-bots-the-full-list-what-they-do-and-how-to-block-them/). We could not open OpenAI's page directly, so confirm current details there.

## Check 2: say what only you can say

Google says unique, valuable content will likely influence presence in generative AI search more than any other tip in its guide. It contrasts commodity content, such as "7 Tips for First-Time Homebuyers", with non-commodity content that offers first-hand expertise. Do not just recycle what others have said or what an AI model could easily produce.

## What Google says to skip

Google's guide lists several things you do not need: llms.txt files and other special markup, breaking content into tiny "chunks", rewriting content only for AI systems, seeking inauthentic mentions, and overfocusing on structured data. It adds that creating llms.txt files for other services is fine, but Google ignores them. See our note on [llms.txt](/do-you-need-an-llms-txt-file-what-google-has-said/).

## Check 3: measure

Google points to the generative AI performance report in Search Console. It also warns that no third-party tool has access to its internal ranking or AI systems. For ChatGPT, watch referral traffic in your analytics.

## What to do

1. **Test your crawl access:** confirm key posts are indexed, and review robots.txt for Googlebot and OAI-SearchBot.
2. **Pick one angle per post** that draws on your experience, data or testing.
3. **Add a real byline** and an About page.
4. **Organise posts** with clear headings and internal links.
5. **Skip the shortcuts** Google lists above.
6. **Review monthly** in Search Console and analytics.

*Sources: Google Search Central and OpenAI documentation, as linked above.*
