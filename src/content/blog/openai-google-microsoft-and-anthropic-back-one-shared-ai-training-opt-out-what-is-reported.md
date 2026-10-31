---
title: "OpenAI, Google, Microsoft and Anthropic back one shared AI training opt-out: what is reported so far"
date: 2026-10-31T14:30:00+05:30
description: "Four AI companies have reportedly backed one shared way for sites to refuse AI training. What the reports say, the rollout dates, what it does not cover, and what publishers can do now."
tag: "AI Search"
tldr: "Reports say OpenAI, Google, Microsoft and Anthropic announced on 30 October 2026 that they back one shared, robots.txt-style opt-out from AI training. It is not live yet, rollout dates differ, and reports say it is a request rather than a technical block and does not replace existing crawler controls. We could not open the primary announcement."
sources:
  - title: "AI giants promise publishers new way to block some scraping"
    url: "https://www.24newshd.tv/31-Oct-2026/ai-giants-promise-publishers-new-way-block-scraping"
    publisher: "24NewsHD"
  - title: "OpenAI, Google, Microsoft and Anthropic back a shared AI-scraping opt-out"
    url: "https://mezha.net/eng/news/mezha-af14fa00446d6e59417473eb_openai-_google-_microsoft"
    publisher: "Mezha"
  - title: "AI Giants Unite Behind Universal Scraping Opt-Out Standard"
    url: "https://www.techbuzz.ai/articles/ai-giants-unite-behind-universal-scraping-opt-out-standard"
    publisher: "TechBuzz"
categories: ["AI Search", "AEO", "SEO"]
tags: ["robots.txt", "AI training", "OpenAI", "Google", "Microsoft", "Anthropic", "Publishers"]
---

Four AI companies have reportedly agreed to support one shared way for websites to say they do not want their content used for AI training. We could not open the original announcement or the technical draft from our systems, so this account is based on search summaries of 24NewsHD, Mezha and TechBuzz coverage. Details may change, so check the primary sources before you edit any files.

![Summary of the reported shared AI training opt-out: announced on 30 October, a robots.txt style request, rollout dates differ by company, and it is a request that may reduce AI visibility](/images/shared-ai-training-opt-out/what-is-reported.svg)

## What is reported

According to the coverage, OpenAI, Google, Microsoft and Anthropic backed a single opt-out for AI training on 30 October 2026. Reports describe it as a robots.txt-based signal, proposed in an Internet-Draft. Coverage notes a draft is a proposal, not an adopted internet standard.

## Rollout dates

The reports give different timings. They say Anthropic has begun implementing support, Microsoft will start on 1 February 2027, Google plans to follow in 2027, and OpenAI says "in the coming months". One source gives Google only as "2027". Until a company ships support, nothing changes for your site.

## What it does not cover

Reports say the signal is a voluntary request, not a technical block. They also say OpenAI told publishers that it will not replace its existing crawler controls. Training is only one use. Search and AI answers use other crawlers and controls. Coverage adds that Google and Microsoft warn that opting out of AI uses can reduce how often a site appears in AI experiences, and that Bing has separate controls. We have not verified any of this.

## Our view

This is our opinion, not any company's position. A shared signal could save publishers from maintaining one rule per company. But the key question for most sites is the trade-off between protecting content and being visible in AI answers. Do not treat "AI training" and "AI search" as one setting. Blocking a search crawler to stop training could remove a site from the answers you want, as some analysts have noted.

## What to do

1. List which AI crawlers your site currently allows. Our guide to [blocking AI bots in robots.txt](/blocking-ai-bots-in-robots-txt-a-comprehensive-guide/) is a starting point.
2. Decide separately for training, search and AI answers. Write the decision down.
3. Do not edit robots.txt for this signal until a company documents support for it.
4. Test visibility before and after any change with our [20-prompt AI visibility test](/a-20-prompt-ai-visibility-test-template-scoring-rubric-and-monthly-routine/).
5. Remember that other files do not substitute for this. See [do you need an llms.txt file](/do-you-need-an-llms-txt-file-what-google-has-said/).
