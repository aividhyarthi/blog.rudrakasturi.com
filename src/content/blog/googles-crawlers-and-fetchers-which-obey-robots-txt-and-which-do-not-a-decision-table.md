---
title: "Google's crawlers and fetchers: which obey robots.txt and which do not, with a decision table"
date: 2026-11-12T11:00:00+05:30
description: "Google lists common crawlers, special-case crawlers and user-triggered fetchers, and they treat robots.txt differently. A decision table and a log-review routine for SEO and AEO teams."
tag: "AEO"
tldr: "Google's crawler pages (updated between August and October 2026) separate common crawlers, which always obey robots.txt, from special-case crawlers and user-triggered fetchers, which may or generally do ignore it. Google-Extended is a control token that does not affect Search inclusion. The decision table and routine are ours."
sources:
  - title: "List of Google's common crawlers"
    url: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers"
    publisher: "Google Search Central"
  - title: "List of Google's special-case crawlers"
    url: "https://developers.google.com/search/docs/crawling-indexing/google-special-case-crawlers"
    publisher: "Google Search Central"
  - title: "List of Google user-triggered fetchers"
    url: "https://developers.google.com/search/docs/crawling-indexing/google-user-triggered-fetchers"
    publisher: "Google Search Central"
categories: ["AEO", "SEO", "Technical SEO"]
tags: ["Googlebot", "Google-Extended", "robots.txt", "Crawlers", "User-triggered fetchers"]
---

A robots.txt line only controls the visitors that obey it. Google's three crawler pages (last updated 30 October, 17 September and 19 August 2026 as we read them) show that Google's own visitors fall into groups with different rules.

**Best for:** SEO leads, developers and anyone editing robots.txt or reading server logs.

![Four kinds of Google visitors: common crawlers, special-case crawlers, user-triggered fetchers and control tokens such as Google-Extended](/images/google-crawlers-and-fetchers/crawler-types.svg)

## What Google says

- **Common crawlers** build Google's indexes and always obey robots.txt when crawling automatically. They include Googlebot (smartphone and desktop), Googlebot-Image, Googlebot-Video, Googlebot-News, Storebot-Google, Google-InspectionTool, the generic GoogleOther family and Google-CloudVertexBot.
- Crawl preferences for the Googlebot token affect Google Search, including Discover and all Search features, plus other products such as Images, Video mode and News. Storebot-Google affects Google Shopping surfaces. Google-InspectionTool affects testing tools such as the Rich Results Test and URL inspection, and has no effect on Search itself.
- **Special-case crawlers** are used by specific products where the crawled site and the product have an agreement. They may ignore robots.txt and use different IP ranges. AdsBot, for example, ignores the global `*` user agent with the ad publisher's permission.
- **User-triggered fetchers** run because a person asked for a fetch, so they generally ignore robots.txt. Examples on the page include Google Site Verifier, Feedfetcher, Google Read Aloud, Google Publisher Center, Google Messages link previews, Gemini Notebook and Google-Agent, which Google describes as used by agents hosted on Google infrastructure to navigate the web and act on a user's request.
- **Google-Extended** is a robots.txt token only, with no separate user agent string. Google says it manages whether crawled content may be used for training future Gemini models and for grounding in Gemini Apps and Vertex AI. It does not impact Search inclusion and is not a ranking signal. Google also says it intends to support the AIPREF training preference signal in early 2027.
- User agent strings can be spoofed, so verify a requester using Google's published IP ranges or reverse DNS.

## Decision table

| You want to | Use | Remember |
|---|---|---|
| Keep a folder out of Google Search crawling | A `Googlebot` robots.txt rule | It does not remove already-indexed pages. See [noindex vs robots.txt](/noindex-vs-robots-txt-which-one-to-use-and-the-common-mistake/) |
| Keep images out of Google Images | A `Googlebot-Image` rule | Images appear in several features |
| Opt out of Gemini training and grounding | `Google-Extended` | It does not affect Search inclusion |
| Stop an ad quality check | An `AdsBot-Google` rule | The global `*` rule is ignored |
| Stop a user's own fetch | Authentication or removal | robots.txt generally does not apply |

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Read your robots.txt aloud | SEO | 15 min | List every `User-agent` token | Each token matches a row on Google's pages |
| 2. Mark each rule's intent | SEO, legal | 30 min | Write why it exists beside it | No rule without a reason |
| 3. Pull 24 hours of logs | Developer | 30 min | Filter on Google tokens | A count per crawler exists |
| 4. Verify the top five visitors | Developer | 30 min | Reverse DNS and published IP lists | Spoofed requests are separated |
| 5. Check Google-Extended | Leadership | 20 min | Decide on training and grounding | A recorded choice and owner |
| 6. Re-review quarterly | SEO | 30 min | Compare to Google's current pages | A dated note is saved |

## Common mistakes

- Blocking `Googlebot` to stop AI training. That token affects Search.
- Assuming robots.txt stops every Google fetch. User-triggered fetchers generally ignore it.
- Trusting a user agent string without verifying it. See our [server log method](/how-to-read-server-logs-for-search-and-ai-crawlers-a-ten-minute-method/).

Related: [blocking AI bots in robots.txt](/blocking-ai-bots-in-robots-txt-a-comprehensive-guide/) and [can ChatGPT reach your site](/can-chatgpt-reach-your-site-a-10-minute-test-for-gptbot-oai-searchbot-and-chatgpt-user/). Crawler lists change, so re-read Google's pages before editing.
