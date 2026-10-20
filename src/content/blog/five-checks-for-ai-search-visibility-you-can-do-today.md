---
title: "Five checks for AI search visibility you can do today"
date: 2026-10-21T21:00:00+05:30
description: "Five quick checks on indexing, robots.txt, OpenAI's crawlers, Search Console controls and page content, based on what Google and OpenAI document."
tag: "AEO"
tldr: "Google says there are no extra technical requirements for AI Overviews and AI Mode beyond being indexed and eligible for a snippet. Five checks cover the basics: indexing, crawl access, OpenAI's separate crawlers, Search Console controls, and a clear answer on the page."
sources:
  - title: "AI features and your website"
    url: "https://developers.google.com/search/docs/appearance/ai-features"
    publisher: "Google Search Central"
  - title: "OpenAI crawlers and robots.txt"
    url: "https://developers.openai.com/docs/bots"
    publisher: "OpenAI"
  - title: "Generative AI performance report (Search), Search Console Help"
    url: "https://support.google.com/webmasters/answer/16984139?hl=en"
    publisher: "Google"
categories: ["AEO", "Google AI"]
tags: ["AI Overview", "robots.txt", "OAI-SearchBot"]
---

Google's guidance says a page can appear as a supporting link in AI Overviews and AI Mode when it is **indexed and eligible to be shown in Search with a snippet**. Google says there are no additional technical requirements, and it also says that meeting the requirements does not guarantee inclusion. These five checks take under an hour.

## 1. Is the page indexed?

In Search Console, open the URL Inspection tool and enter an important page. It should say the page is on Google. If it is not, fix that first, because nothing else matters until it is.

## 2. Is crawling allowed everywhere?

Google lists crawl access as a basic requirement. Open `yoursite.com/robots.txt` and check that you are not blocking Googlebot. Then ask your host or CDN provider whether any firewall rule blocks crawlers, since a block there does not show in robots.txt.

## 3. Have you chosen what to allow for OpenAI?

OpenAI says it uses separate robots.txt rules for its crawlers, and each works independently:

- **OAI-SearchBot** relates to whether your site can appear in ChatGPT search.
- **GPTBot** relates to use of content in training.
- **ChatGPT-User** is not used to crawl automatically, and OpenAI says it is not used to decide whether content appears in search.

You can allow one and block another. OpenAI notes that changes to robots.txt can take about 24 hours to take effect. Confirm the current rules on OpenAI's own page before you change anything.

## 4. Are you opted out in Search Console?

Search Console has a control to opt out of generative AI features. If you are opted out, you will not appear in them. Also look at the generative AI report, which shows impressions. See [what the report shows and what it leaves out](/search-console-generative-ai-report-what-it-shows-and-what-it-leaves-out/).

## 5. Does the page answer the question in plain text?

This one is our own recommendation, not a Google requirement. State the main answer near the top in normal text, add the author and date, and show your sources. A page that is clear to a reader is also easier for any system to quote.

For a longer list, read [our practical checklist](/a-practical-checklist-for-ai-search-visibility/).
