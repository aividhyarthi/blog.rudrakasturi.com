---
title: "How to get your pricing page understood by AI tools and crawlers"
date: 2026-11-05T14:00:00+05:30
description: "A pricing page that only works visually can be misread by crawlers and AI tools. Four checks and a five-minute test for reachable, readable, consistent and dated prices."
tag: "AEO"
tldr: "Google says content must be crawlable and indexed, that JavaScript content is processed if not blocked, and that browser agents may read pages through screenshots, the DOM and the accessibility tree. A pricing page should therefore state plans and prices as text, consistently, with a date. The checks and test are our own."
sources:
  - title: "Optimizing your website for generative AI features on Google Search"
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
    publisher: "Google Search Central"
  - title: "General structured data guidelines"
    url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies"
    publisher: "Google Search Central"
  - title: "Software app (SoftwareApplication) structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/software-app"
    publisher: "Google Search Central"
categories: ["AEO", "GEO", "SEO"]
tags: ["Pricing page", "AI crawlers", "SaaS", "Structured data", "AEO"]
---

Pricing is a common question for AI tools: how much does it cost, is there a free plan, which plan includes this. If your pricing page cannot be read, the answer comes from somewhere else, such as a review site or an old forum post. Google does not publish a rule specific to pricing pages. Its guide to generative AI search (updated 10 July 2026 as we read it) does say content must be crawlable, indexed and eligible for a snippet, and that browser agents may read pages through screenshots, the page structure and the accessibility tree. The four checks below are our view.

![Four checks for a pricing page: reachable, readable, consistent and dated](/images/pricing-page-ai-crawlers/pricing-checks.svg)

## The four checks

1. **Reachable.** Not blocked in robots.txt, not behind a login, and indexed. Check it in the URL Inspection tool.
2. **Readable.** Plan names, prices and limits are text in the HTML. A price drawn only as an image, or loaded after a click, can be missed.
3. **Consistent.** The same price appears on the page, in any feed and in any markup. Google's structured data guidelines say markup must represent the visible content and must not mark up content readers cannot see.
4. **Dated.** State the currency, the billing period and when the prices were last checked. AI answers can repeat old prices for a long time.

## A five-minute test (our own)

1. Open the page, view the page source and search for one price. If it is not there, the text is script-rendered.
2. Turn off JavaScript in your browser and reload. Note what remains.
3. Select the page text and paste it into a note. Does it make sense without the layout, with each plan next to its price?
4. Ask an AI tool, "How much does [your product] cost?" and compare the answer with the page. Record any difference. This is one test, not proof, as answers vary.

## Common mistakes

| Mistake | Fix |
|---|---|
| "Contact us" for every plan | Give at least a starting price or a range, if you can |
| Prices only in a comparison image | Add the same facts as a text table |
| Annual price shown, monthly implied | State both, with the billing period |
| Old pricing on blog posts and help pages | Search your site for the old figure and update it |
| Different price in markup and on page | Make them match |

## Markup

Structured data is not required for generative AI search, and Google says no special schema.org markup is needed. If you use SoftwareApplication markup, Google's documentation lists an offer with price and either a rating or a review among the requirements for its software app result, and the guidelines forbid fake reviews. Do not add markup you cannot back up on the page.

## What to do

1. Run the five-minute test.
2. Put every plan, price, limit and billing period in text.
3. Add "Prices checked on [date]" and keep it honest.
4. Update old prices elsewhere on your site.
5. Retest monthly with your [20-prompt visibility test](/a-20-prompt-ai-visibility-test-template-scoring-rubric-and-monthly-routine/), and check crawler access with our [ChatGPT crawler test](/can-chatgpt-reach-your-site-a-10-minute-test-for-gptbot-oai-searchbot-and-chatgpt-user/). For the landing page itself, see [the SaaS landing page guide](/how-to-get-a-saas-landing-page-found-in-chatgpt-google-ai-mode-and-copilot/).
