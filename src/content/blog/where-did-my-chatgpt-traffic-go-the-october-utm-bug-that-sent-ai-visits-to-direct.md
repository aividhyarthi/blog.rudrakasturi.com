---
title: "Where did my ChatGPT traffic go? The October UTM bug that sent AI visits to Direct, and how to check your data"
date: 2026-11-04T10:00:00+05:30
updated: 2026-11-05T12:30:00+05:30
description: "In October, ChatGPT links reportedly lost their utm_source=chatgpt.com tag and their referrer, so visits showed up as Direct. What Adobe's data shows, what changed between versions, how to check your own numbers, and what not to conclude."
tag: "AEO"
tldr: "Reports based on Adobe data say that around 8 to 10 October, with the GPT-6 rollout, ChatGPT links stopped carrying utm_source=chatgpt.com and opened without a referrer, so analytics filed the visits as Direct. On about 500 pages, ChatGPT visits fell by roughly 31,000 a day while Direct rose by about 26,000. The tag reportedly returned around 15 to 16 October. Your history is not corrected, so mark the dates and compare Direct and ChatGPT together."
playbook: true
sources:
  - title: "ChatGPT drop in UTM tracking was a bug"
    url: "https://searchengineland.com/chatgpt-appears-to-drop-utm-tracking-making-ai-referral-traffic-harder-to-measure-496552"
    publisher: "Search Engine Land"
  - title: "ChatGPT drops UTM tags? Clicks now show as Direct"
    url: "https://www.relevantaudience.com/analytics/chatgpt-gpt-6-utm-referrer-dropped-direct-traffic/"
    publisher: "Relevant Audience"
  - title: "ChatGPT Referral Traffic Fell by Almost Half on October 9, 2026. Here's What We Know"
    url: "https://llmpulse.ai/blog/chatgpt-referral-traffic-fell/"
    publisher: "LLM Pulse"
  - title: "ChatGPT Bug Sent AI Referral Traffic to Direct After GPT-6"
    url: "https://almcorp.com/news/chatgpt-bug-sent-ai-referral-traffic-to-direct-after-gpt-6/"
    publisher: "ALM Corp"
  - title: "ChatGPT Now Puts a 'Shop at' Button in Its Shopping Answers, and Most of Them Point to Big-Box Stores"
    url: "https://www.wislr.com/articles/chatgpt-shop-at-buttons-big-box/"
    publisher: "WISLR"
categories: ["AEO", "Analytics", "AI Search"]
tags: ["ChatGPT", "UTM", "GA4", "Direct traffic", "AI referrals", "Adobe", "Measurement"]
---

If your ChatGPT visits fell sharply in October and your Direct traffic rose, your site may not have lost anything. Several reports say that ChatGPT changed how its links are opened, and that analytics tools started counting those visits as Direct. This post explains what is reported, what the numbers look like, how to check your own data in minutes, and what not to conclude. We could not open the original analysis or the articles, so this is based on search summaries and a chart from Adobe's analysis that a reader shared with us. Treat figures as reported and sampled.

## What changed

For months, links in ChatGPT carried a tracking tag, utm_source=chatgpt.com. Search Engine Land reports that OpenAI added it in June. Analytics tools read that tag and credited ChatGPT as the source. Only a small share of clicks, about 12 percent in Adobe's chart, also carried a normal referrer.

Around 8 to 10 October, with the rollout of GPT-6, reports say links stopped carrying the tag. Adobe's analysis, as reported, says the links were opened with a script call that includes the "noopener" and "noreferrer" settings, which remove the referrer. With no tag and no referrer, the visit looks like someone typed the address, so analytics files it as Direct.

![How ChatGPT visits moved into Direct in October: tagged links before 8 October, no tag and no referrer from 8 to 15 October, Direct rising as a result, and the tag returning around 15 to 16 October without correcting history](/images/chatgpt-traffic-went-direct/where-visits-went.svg)

## What the numbers say (reported)

| Measure | Reported result | Source |
|---|---|---|
| About 500 pages where ChatGPT drove at least 5 percent of visits | ChatGPT down about 31,000 visits a day, Direct up about 26,000 a day, search down about 7 percent, comparing 9 to 13 October with the week before | Adobe data, via Search Engine Land |
| Pages that lost ChatGPT visits | 261 of 387 (two in three) gained Direct visits, against 49 percent the week before | Adobe chart |
| Mobile Direct visitors on ChatGPT-heavy pages | New-to-site share rose from 36 to 44 percent | Adobe chart |
| GA4 ChatGPT referral sessions, 9 to 11 October | Down about 46 percent while total traffic moved about 2 percent | LLM Pulse |

Adobe describes its data as sampled and directional, and it excludes bots. Two figures here come from a social post carrying Adobe's chart, so check them against Adobe's own release.

## Was it a bug, and is it fixed?

Search Engine Land's headline calls the drop a bug. Reports say OpenAI confirmed that, and that the tag returned around 15 October, with one report saying 16 October. We found no public OpenAI statement, so the confirmation rests on the analyst's account. Other write-ups tie the change to GPT-6 and note that OpenAI has not explained the cause itself.

Important: reports say your history is not corrected. Visits recorded in that window stay filed as Direct.

## What WISLR's own test found

WISLR, a company that tracks AI search, tested ChatGPT's links itself instead of relying on analytics numbers. We read its article, published 14 October and updated 16 October 2026. This adds details the other reports do not have.

**What the links did, day by day**

| Dates | Did the link carry the tag (utm_source=chatgpt.com)? | Did the link carry a referrer? |
|---|---|---|
| Before 8 October (from WISLR's data on one store: 94% of identified ChatGPT visits had the tag and no referrer; not from tested links) | Yes | No, for most visits |
| 8 to 15 October | No. None of the 47 links WISLR tested had it | No |
| 16 October | Yes. Every link WISLR tested had it | Still No |

This means the tag is the only signal analytics tools have. The referrer is still missing, even after the fix.

**Who confirmed the bug**

WISLR says Cedric Huesler of Adobe reported that OpenAI confirmed the bug to him on 14 October as a known bug in the GPT-6 rollout. He said a fix started reaching users around 2am Pacific on 15 October, and that tagged ChatGPT clicks were back to 95% to 100% of the previous week's level by that morning. WISLR notes that OpenAI has not commented publicly.

**What was lost, and where it went**

On one store WISLR measures, ChatGPT visits from 9 to 13 October were 66% lower than from 1 to 7 October. On a second store they were 57% lower. Gemini visits rose.

WISLR also found that the lost clicks did not all land in the same place:

- Lost clicks to support and how-to pages came back as Direct visits.
- Lost clicks to product pages did not come back as Direct for US visitors, and only about half did elsewhere.

So if you only check Direct on one type of page, you may think you lost traffic that was really counted as Direct, or the other way around. Check both product pages and support pages.

**Your baseline was already low**

WISLR says that an earlier, smaller loss on 25 September removed the referrer from untagged ChatGPT clicks. So even the 1 to 7 October numbers undercount how many people ChatGPT sends.

**Something else changed at the same time**

On 10 October, ChatGPT began adding "Shop at" buttons to shopping answers, and most go to big retailers. Some of the clicks that used to reach your product pages may now go to a store. Read [our post on those buttons](/chatgpt-shop-at-buttons-most-go-to-big-box-stores/) and our post on [telling lost clicks from lost visibility](/chatgpt-visits-fell-did-chatgpt-stop-recommending-you/).

Source: WISLR, "ChatGPT Now Puts a 'Shop at' Button in Its Shopping Answers, and Most of Them Point to Big-Box Stores", https://www.wislr.com/articles/chatgpt-shop-at-buttons-big-box/

## Our view

This is our opinion, not OpenAI's or Adobe's. Two lessons. First, a drop in AI referrals is not always a drop in AI visibility. Second, a measurement that depends on one tag is fragile, so keep more than one signal.

## A five-minute check

1. **Mark the dates.** Add an annotation in your analytics for 8 to 15 October.
2. **Put Direct and ChatGPT side by side.** Pick landing pages that normally get ChatGPT visits. If ChatGPT fell and Direct rose by a similar amount on the same pages, the pattern fits this issue.
3. **Check search.** If search traffic to those pages held, a content problem is less likely.
4. **Check the tag now.** Look for utm_source=chatgpt.com in recent sessions to confirm it is back.
5. **Do not rewrite pages** because of a drop in that window.

## What not to conclude

Do not assume all the missing visits were ChatGPT. Direct includes many sources, and a sample of pages is not your whole site. Also, most ChatGPT clicks still lack a referrer, so the tag remains the main signal and will remain fragile.

## What to do

- Filter AI traffic by the UTM tag as well as by referrer. Our [analytics setup guide](/how-to-track-ai-referral-traffic-in-analytics-a-four-step-setup-and-its-limits/) shows how.
- Track Direct on ChatGPT-heavy pages as a second line on your report.
- Watch branded search and run our [20-prompt AI visibility test](/a-20-prompt-ai-visibility-test-template-scoring-rubric-and-monthly-routine/), which does not depend on tags.
- Read [what Adobe's earlier data said about AI-referred shoppers](/ai-referred-shoppers-delivered-83-percent-more-revenue-per-visit-in-september-adobe-data-shows/) and keep this episode in mind when you compare periods.
- Use our [traffic drop routine](/search-traffic-drop-a-four-step-debugging-routine-from-googles-guide/) before changing any page.
