---
title: "Speakable markup (beta): how news publishers mark key points for audio playback"
date: 2026-11-13T13:00:00+05:30
description: "Google's speakable documentation covers a beta markup that marks article sections suited to text-to-speech. What it says, its limits, a rollout routine and what to avoid."
tag: "AEO"
tldr: "Google's speakable page (last updated 8 September 2026) describes a beta property that identifies article sections best suited to text-to-speech on Google Assistant devices. It works for US users with English-language Google Home devices and English content. Mark short key points, roughly 20 to 30 seconds each, and avoid datelines, captions and source lines."
sources:
  - title: "Speakable (Article, WebPage) structured data (BETA)"
    url: "https://developers.google.com/search/docs/appearance/structured-data/speakable"
    publisher: "Google Search Central"
categories: ["AEO", "SEO", "News", "Structured data"]
tags: ["Speakable", "Voice search", "Text-to-speech", "News publishers", "Beta"]
---

Voice answers read text aloud, so the text that is read matters. Google's speakable documentation (last updated 8 September 2026 as we read it) is for news publishers who want to point to the sentences that sound right when spoken. It is a beta feature, so treat it as something to test, not rely on.

**Best for:** English-language news and magazine publishers in the United States, and their developers.

![Speakable markup: know the beta limits, mark key points only, use a CSS selector or XPath, leave out datelines and captions](/images/speakable-markup/speakable.svg)

## What Google says

- The `speakable` property identifies sections of an article or web page best suited to audio playback using text-to-speech. It lets search engines and other applications identify content to read aloud on Google Assistant-enabled devices.
- Google says Assistant uses speakable data to answer topical news queries on smart speakers. For a topic it returns up to three articles and can play the speakable sections aloud, attributing the source and sending the full article URL to the user's phone through the Assistant app.
- **Beta:** the feature is subject to change, and requirements or guidelines may change.
- **Availability:** it works for users in the US with Google Home devices set to English, and for publishers in English. Google hoped to launch in other countries and languages once enough publishers had implemented it.
- Technical guidelines: do not add speakable markup to content that may sound confusing in voice-only situations, such as datelines, photo captions or source attributions. Mark key points instead of the whole article.
- Content guidelines: speakable content needs concise headlines or summaries that are comprehensible on their own. If you mark the top of the story, consider rewriting it into individual sentences so it reads clearly. Google recommends around 20 to 30 seconds per section, roughly two to three sentences.
- Markup is used with `Article` or `WebPage`. You must give a content locator: either `cssSelector` or `xPath`. The `speakable` property can be repeated.

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Check you qualify | Editor | 15 min | US audience, English content, news articles | A yes or no with reason |
| 2. Pick two or three sections | Editor | 30 min per template | Headline plus summary, each two to three sentences | A named section per article type |
| 3. Rewrite for the ear | Editor | 1 hour | Read the text aloud, without the visual context | No "see photo" or "below" wording |
| 4. Add the locator | Developer | 1 to 2 hours | A stable CSS selector or XPath for each section | Selectors resolve on 10 sample pages |
| 5. Validate | Developer | 30 min | Rich Results Test, URL Inspection | No errors |
| 6. Re-check status | SEO | Quarterly | Read Google's page again, it is beta | A dated note on any change |

## Common mistakes

- Marking an entire 1,200-word article.
- Including the dateline ("LONDON, Nov 13") or a photo credit.
- Using a selector that breaks when the template changes.
- Treating a beta feature as a guaranteed channel. Google can change or remove it.

Related: [the schema decision table](/schema-for-aeo-and-geo-a-decision-table-by-page-type-and-a-ten-point-audit/), [article schema that matches the page](/article-schema-that-matches-the-page-author-dates-and-headline-with-a-checklist/) and [answer-first pages](/write-answer-first-pages-open-with-the-direct-answer-then-the-detail/). We did not test speakable markup on a live assistant, and results are not guaranteed.
