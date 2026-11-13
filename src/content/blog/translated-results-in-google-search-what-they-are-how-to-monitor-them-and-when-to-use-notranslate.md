---
title: "Translated results in Google Search: what they are, how to monitor them and when to use notranslate"
date: 2026-11-15T17:00:00+05:30
description: "Google may translate the title link and snippet of results that are not in the searcher's language. What the feature does, how to measure it in Search Console, how to opt out with notranslate, and a made-up example."
tag: "SEO"
tldr: "Google's translated results page (last updated 10 December 2025) says Google may translate the title link and snippet of results not in the query language, for languages that include Hindi, Bengali, Tamil, Telugu, Marathi and English. Clicking opens a machine-translated page, Google hosts no translated pages, and the notranslate rule opts out. The routine is ours."
sources:
  - title: "Translated results in Google Search"
    url: "https://developers.google.com/search/docs/appearance/translated-results"
    publisher: "Google Search Central"
categories: ["SEO", "International SEO", "Search appearance"]
tags: ["Translated results", "notranslate", "Multilingual SEO", "Hindi", "Search Console"]
---

A person searches in Hindi and sees a result from an English page, with the title and snippet already in Hindi. That is a translated result. Google's page on it (last updated 10 December 2025 as we read it) explains what it does and how to opt out. This post turns it into a routine for publishers who serve readers in more than one language.

**Best for:** publishers, ecommerce and SaaS sites with international or regional-language audiences.

![Translated results: Google may translate title and snippet, machine translation opens on click, measure in Search Console, opt out with notranslate](/images/translated-results/translated-results.svg)

## What Google says

- To help close content and perspective gaps when users search in their local language, Google may translate the title link and snippet of results that are not in the language of the query, when available.
- Google may translate results into these languages: Arabic, Bengali, English, French, German, Gujarati, Hindi, Indonesian, Kannada, Korean, Malayalam, Marathi, Persian, Portuguese, Spanish, Tamil, Telugu, Thai, Turkish, Urdu and Vietnamese. It is available on mobile and desktop.
- If the user clicks the translated title link, they get a machine-translated page, with an option to view the original. Google does not host translated pages: opening one is no different from opening the original through Google Translate or Chrome's in-browser translation. JavaScript on the page is usually supported, as are embedded images and other page features.
- If you run an ad network, you may need extra steps so ads display correctly after a click on a translated result.
- To monitor clicks and impressions, use the Search Appearance filter in the Performance report in Search Console.
- You do not need to opt in. To opt out of all translation features in Google Search, use the `notranslate` rule as a meta tag (`<meta name="robots" content="notranslate">`, or `googlebot` to apply only to Google) or as an `X-Robots-Tag: notranslate` HTTP header.

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Check your languages | SEO | 30 min | Your content languages against Google's list | Overlap noted |
| 2. Measure | Analyst | 30 min | Search Appearance filter in the Performance report | Clicks and impressions recorded |
| 3. Test the experience | QA | 1 hour | Open a translated result and use the page | Core actions work after machine translation |
| 4. Check ads | Ad ops | 1 hour | Ads and consent still display | Ad network confirmed |
| 5. Decide | Marketing lead | 30 min | Keep, or add notranslate to pages where translation would mislead | Decision per page type |
| 6. Review quarterly | SEO | 30 min | Same filter, new dates | Dated review |

## Example (made up)

A legal information site finds that translated results bring Hindi readers to English guides. QA finds the machine-translated pages work. The team keeps the feature for guides but adds `notranslate` on pages with exact legal wording, where a machine translation could mislead.

## Common mistakes

- Assuming Google stores a translated copy of your page.
- Never checking how a translated page behaves for users.
- Adding notranslate site-wide without a reason.
- Forgetting that ad networks may need extra steps.

Related: [robots meta tag and X-Robots-Tag rules](/robots-meta-tag-and-x-robots-tag-rules-explained-including-what-they-mean-for-ai-overviews-and-ai-mode/), [Google softens its stance on automated translation](/google-softens-its-stance-on-automated-translation/) and [visual elements of a search result](/anatomy-of-a-google-search-result-which-visual-elements-you-can-influence-and-how-a-team-audit-works/). Results are not guaranteed.
