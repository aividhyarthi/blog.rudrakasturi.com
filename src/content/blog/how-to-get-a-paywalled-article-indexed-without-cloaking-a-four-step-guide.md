---
title: "How to get a paywalled article indexed without cloaking: a four-step guide"
date: 2026-11-10T18:00:00+05:30
description: "Google's paywalled content markup tells Search which part of a page is behind a paywall, so it is not mistaken for cloaking. Four steps and the rules to follow."
tag: "AEO"
tldr: "Google's paywalled content documentation (last updated 8 September 2026) says CreativeWork markup helps Google tell paywalled content apart from cloaking, which breaks its spam policies. You wrap the paywalled part in a class, set isAccessibleForFree to false and point a cssSelector at that class. The steps and test are ours."
sources:
  - title: "Structured data for subscription and paywalled content (CreativeWork)"
    url: "https://developers.google.com/search/docs/appearance/structured-data/paywalled-content"
    publisher: "Google Search Central"
  - title: "Optimizing your website for generative AI features on Google Search"
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
    publisher: "Google Search Central"
categories: ["AEO", "SEO", "Structured data"]
tags: ["Paywall", "Cloaking", "Subscription content", "Structured data"]
---

If Google can read an article that a visitor cannot, that can look like cloaking. Google's paywalled content documentation (last updated 8 September 2026 as we read it) exists to separate a legitimate paywall from that practice.

**Best for:** publishers and membership sites that charge for some or all of an article.

![Paywalled content steps: wrap the paywalled section, add the markup, follow the rules, check every version](/images/paywalled-content-without-cloaking/paywall-steps.svg)

## What Google says

- The CreativeWork markup helps Google differentiate paywalled content from cloaking, which violates its spam policies.
- Wrap each paywalled section in a class name, then add markup with `isAccessibleForFree` set to false and a `hasPart` entry whose `cssSelector` points to that class.
- Use only `.class` selectors, and do not nest content sections.
- Follow the steps for all versions of the page, including AMP and non-AMP.
- If you do not want the content to be accessible to the browser at serving time, choose a paywall implementation that does not supply it to the browser. For client-side JavaScript paywalls, Google points to its JavaScript guidance.
- Breaking these guidelines may make a page ineligible to appear in results.

## A minimal pattern

```html
<p>This part is visible to everyone.</p>
<div class="paywall">This part needs a subscription or registration.</div>
```

In the article's JSON-LD, set `"isAccessibleForFree": false` and add `"hasPart": {"@type": "WebPageElement", "isAccessibleForFree": false, "cssSelector": ".paywall"}`. Check Google's page for the exact current example.

## A four-step test

| Step | Pass if |
|---|---|
| Wrap | The paywalled text sits inside one class and the free text does not |
| Markup | The selector matches that class exactly |
| Rules | No nested sections, and only class selectors |
| Versions | Every version of the page carries the same markup |

## What to do

1. Decide how much of each article is free. A readable free opening helps both readers and search.
2. Apply the steps above and validate with the Rich Results Test.
3. Inspect one article with the URL Inspection tool to see what Google received.
4. Do not show Googlebot different content from visitors beyond what the markup describes. See our [spam policy self-audit](/google-spam-policies-in-plain-english-a-self-audit-for-your-site-in-four-groups/).
5. Check your [structured data against Google's policies](/structured-data-policies-what-gets-your-markup-ignored/).

Our view: whatever sits behind the paywall cannot be quoted from your page, so make sure the free part states the answer or the finding clearly.
