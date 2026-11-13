---
title: "Robots meta tag and X-Robots-Tag rules explained, including what they mean for AI Overviews and AI Mode"
date: 2026-11-13T12:00:00+05:30
description: "A plain reference to Google's page-level rules: noindex, nosnippet, max-snippet, max-image-preview, unavailable_after and more, with a cheat sheet, a rollout routine and the AI side effects."
tag: "AEO"
tldr: "Google's robots meta tag specification (last updated 24 March 2026) lists rules for indexing and serving, says they work only if crawlers can access the page, and says the more restrictive rule wins when rules conflict. It states that nosnippet and max-snippet apply to AI Overviews and AI Mode and limit use as direct input. The cheat sheet and routine are ours."
sources:
  - title: "Robots meta tag, data-nosnippet, and X-Robots-Tag specifications"
    url: "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag"
    publisher: "Google Search Central"
categories: ["AEO", "SEO", "Technical SEO"]
tags: ["Robots meta tag", "X-Robots-Tag", "noindex", "nosnippet", "max-image-preview", "AI Overviews"]
---

The robots meta tag is a small piece of HTML with large effects. Google's specification (last updated 24 March 2026 as we read it) is the reference for what each rule does. This post turns it into a cheat sheet and a safe rollout routine.

**Best for:** SEO leads, developers and CMS owners who add or audit page-level rules.

![Robots rules: place them in a meta tag or header, indexing rules, snippet rules that also apply to AI features, and the more restrictive rule wins](/images/robots-meta-tag-rules/robots-rules.svg)

## What Google says

- Settings can be set on HTML pages with a meta tag or in an HTTP header, and at text level with the `data-nosnippet` attribute. They can be read and followed only if crawlers are allowed to access the page.
- The `name` value `robots` applies to all crawlers. Google supports two user agent tokens in the meta tag: `googlebot` (text results) and `googlebot-news` (news results). Other values are ignored.
- Google does not enforce placement in the `head` and will respect meta tags in the body as well.
- For non-HTML files such as PDFs, video and images, use the `X-Robots-Tag` response header. Any rule usable in a meta tag can be used there, and a user agent can be named before the rules.
- **Conflicts:** the more restrictive rule applies. For example `nosnippet` beats `max-snippet:50`.
- **Rules:** `noindex` (do not show the page), `nofollow`, `none` (noindex plus nofollow), `nosnippet`, `indexifembedded` (allows indexing of an embedded page despite noindex, and only works with noindex), `max-snippet`, `max-image-preview` (none, standard or large), `max-video-preview`, `notranslate`, `noimageindex` and `unavailable_after`.
- **AI features:** `nosnippet` applies to all forms of results at Google, including AI Overviews and AI Mode, and prevents the content from being used as a direct input for them. `max-snippet` limits how much may be used as direct input, though it does not override content a publisher has separately permitted, such as in-page structured data or a licence.

## Cheat sheet (our summary)

| You want | Rule | Watch out for |
|---|---|---|
| Keep a page out of results | `noindex` | The page must be crawlable so Google sees it |
| Retire a page on a date | `unavailable_after: [date]` | Use a standard date format |
| No text snippet anywhere | `nosnippet` | Also limits AI features |
| Cap the snippet length | `max-snippet:[n]` | `0` equals nosnippet, `-1` leaves it to Google |
| Allow big image previews | `max-image-preview:large` | Helps Discover images, see our checklist |
| Limit video previews | `max-video-preview:[n]` | `0` allows at most a static image |
| Keep a PDF out | `X-Robots-Tag: noindex` | Needs a server header |

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Inventory current rules | SEO | 1 hour | Crawl and export meta robots and X-Robots-Tag values | A table of rule per template |
| 2. Remove accidental rules | SEO, developer | 1 hour | Look for site-wide noindex or nosnippet | None on pages meant to be found |
| 3. Check crawl access | SEO | 20 min | Is any noindex page also blocked in robots.txt? | No conflicts |
| 4. Set intended rules | Developer | 2 hours | View source and headers | Output matches the plan |
| 5. Test five pages | SEO | 30 min | URL Inspection shows the rule | Samples confirm it |
| 6. Record AI decisions | Leadership, SEO | 30 min | Which pages may be used by AI features? | A written decision |

## Common mistakes

- Blocking a page in robots.txt and expecting its noindex to be read. See [noindex vs robots.txt](/noindex-vs-robots-txt-which-one-to-use-and-the-common-mistake/).
- Adding `nosnippet` for a legal reason without knowing it limits AI features.
- Forgetting the header for non-HTML files.
- Assuming other search engines treat every rule the same way. Google notes they may not.

Related: [featured snippets and opting out](/featured-snippets-what-you-can-and-cannot-control-and-how-to-opt-out-with-nosnippet-and-max-snippet/), [control what you share](/control-what-you-share-with-google-the-options-compared-and-when-to-use-each/) and [Discover images](/google-discover-images-the-size-ratio-and-max-image-preview-large-checklist/). Rules do not guarantee a result.
