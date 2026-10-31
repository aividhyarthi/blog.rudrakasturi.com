---
title: "Can ChatGPT reach your site? A 10-minute test for GPTBot, OAI-SearchBot and ChatGPT-User"
date: 2026-10-31T20:30:00+05:30
description: "OpenAI describes three user agents with different jobs. A decision table for training, search and user fetches, a ten-minute access test, and a sample robots.txt, with the limits of what we could verify."
tag: "AEO"
tldr: "OpenAI's crawler documentation, as summarised in search results, describes GPTBot for training, OAI-SearchBot for ChatGPT search and ChatGPT-User for fetches a person asks for. Blocking GPTBot is separate from search visibility, while blocking OAI-SearchBot means a site will not appear in ChatGPT search answers. We could not open OpenAI's page, so check it before changing files."
sources:
  - title: "Overview of OpenAI Crawlers"
    url: "https://developers.openai.com/api/docs/bots"
    publisher: "OpenAI"
  - title: "OpenAI revises ChatGPT crawler documentation with significant policy changes"
    url: "https://ppc.land/openai-revises-chatgpt-crawler-documentation-with-significant-policy-changes/"
    publisher: "PPC Land"
  - title: "GPTBot & OAI-SearchBot: robots.txt Guide"
    url: "https://icoda.io/blog/gptbot-guide/"
    publisher: "iCoda"
categories: ["AEO", "GEO", "SEO"]
tags: ["OAI-SearchBot", "GPTBot", "ChatGPT-User", "robots.txt", "ChatGPT search", "AI crawlers"]
---

If ChatGPT cannot reach your pages, it cannot use them in search answers. The first step is knowing which of OpenAI's user agents does what. We could not open OpenAI's documentation from our systems, so this guide uses search summaries of the page and of two third-party write-ups. Treat the details as reported and check the OpenAI page before you edit anything.

![Three OpenAI user agents as described in reports of its documentation: GPTBot for training, OAI-SearchBot for the ChatGPT search index, ChatGPT-User for user-initiated fetches, followed by a ten minute access test](/images/chatgpt-crawler-access-test/three-bots.svg)

## What each agent is described as doing

- **GPTBot** crawls content that may be used in training. Reports say blocking it is independent of search visibility.
- **OAI-SearchBot** is used for ChatGPT search. Reports say sites that opt out will not appear in ChatGPT search answers, though they may still appear as navigational links.
- **ChatGPT-User** fetches pages when a person asks ChatGPT to. It is described as not crawling automatically. The documentation reportedly says robots.txt rules may not apply to it.

One third party reads an older revision as saying ChatGPT-User ignores robots.txt. The current wording, as summarised, is softer. We rely on the official wording.

## Decision table

This table is our own reading, not OpenAI's.

| Your goal | GPTBot | OAI-SearchBot |
|---|---|---|
| Appear in ChatGPT search and allow training | Allow | Allow |
| Appear in ChatGPT search, no training | Disallow | Allow |
| Stay out of both | Disallow | Disallow |

Reports of the upcoming shared opt-out are covered in [our news post](/openai-google-microsoft-and-anthropic-back-one-shared-ai-training-opt-out-what-is-reported/). It is not live yet.

## A sample robots.txt

```
User-agent: GPTBot
Disallow: /

User-agent: OAI-SearchBot
Allow: /
```

This blocks training and allows search. Adjust it to your table row.

## The 10-minute test

1. **Read robots.txt.** Open yourdomain.com/robots.txt. Look for the two agent names and for a wildcard `User-agent: *` rule that blocks everything.
2. **Request a page as each agent.** Use a command-line tool to fetch an important page with each name as the user agent string. You want a normal 200 response, not a block page or a challenge. This tests your server's response to the name only, not the real crawler.
3. **Check your firewall.** Look at your CDN or firewall bot rules. If you filter by IP address, use the provider's published ranges.
4. **Check the page itself.** It should be indexable, load without a login and show its main text without scripts, as in our [JavaScript SEO check](/javascript-seo-a-ten-minute-check-for-script-heavy-sites/).
5. **Wait and re-test.** One source suggests about 24 hours for OpenAI to reflect a robots.txt change. We have not verified this.

## What to do

1. Pick your row in the decision table and write it down.
2. Run the ten-minute test on your five most important pages.
3. Compare with our guide to [blocking AI bots in robots.txt](/blocking-ai-bots-in-robots-txt-a-comprehensive-guide/).
4. Repeat the check after any site, CDN or firewall change.
5. Add the result to your monthly [20-prompt AI visibility test](/a-20-prompt-ai-visibility-test-template-scoring-rubric-and-monthly-routine/).
