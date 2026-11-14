---
title: "General structured data guidelines as a pre-release QA checklist for SEO and AEO teams"
date: 2026-11-14T11:00:00+05:30
description: "Google's general structured data guidelines turned into a release checklist: format, access, visible content, relevance, completeness, location and images. Owners, checks and a made-up example audit."
tag: "AEO"
tldr: "Google's general structured data guidelines say markup must follow the content policies, use JSON-LD, Microdata or RDFa, stay crawlable, describe content visible on the page, and include all required properties. A valid test result does not guarantee a rich result. The seven-step checklist is ours."
sources:
  - title: "General structured data guidelines"
    url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies"
    publisher: "Google Search Central"
    reviewed: "13 Nov 2026"
categories: ["AEO", "Structured data", "Technical SEO"]
tags: ["Structured data", "Schema markup", "QA checklist", "Rich results", "AEO"]
---

Most teams test structured data with a validator and stop there. Google's general guidelines say a clean test is not the whole story. Some quality rules cannot be tested by a tool. This post turns the page into a checklist you can run before every release that touches markup.

**Best for:** SEO and AEO leads, and developers who ship schema. Learners are welcome: each step names who does it and how to check it.

**New to SEO or AEO?** Structured data is extra code on a page that labels what it contains, such as a recipe, a product or an author, so search engines do not have to guess. These guidelines are the rulebook for that code.

**SEO and AEO angle:** Google's generative AI guide says structured data is not required for its AI features and that no special markup exists for them, but it is still worth getting right for rich results.

![Structured data QA: format and access, visible and honest content, complete and specific properties, then test and monitor](/images/structured-data-qa-checklist/sd-qa.svg)

## What Google says

- Structured data should not violate the content policies for Google Search, which include the spam policies. Using markup enables a feature to be present; it does not guarantee that it will be present, even when the Rich Results Test passes.
- A structured data issue can lead to a manual action. Google describes it as the page losing eligibility for rich results, not a change to how it ranks in web search.
- Supported formats are JSON-LD (recommended), Microdata and RDFa.
- Do not block pages with markup from Googlebot using robots.txt, noindex or other access controls.
- Do not mark up content that readers cannot see. If the markup describes a performer, the page body must describe that performer.
- Provide up-to-date, original information. Google says it will not show a rich result for time-sensitive content that is no longer relevant.
- The markup must truly represent the page. Google's examples of irrelevant data: a live streaming site labelling broadcasts as local events, and a woodworking site labelling instructions as recipes.
- Include all required properties. More recommended properties make a result higher quality for users.
- Put the markup on the page it describes. For duplicate pages, Google recommends the same markup on all duplicates, not only the canonical one.
- Use the most specific schema.org type and property names that apply. Images in markup must be relevant, crawlable and indexable.

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. List pages and types | SEO | 30 min | A sheet of page, markup type and format | Every page in scope listed |
| 2. Check format | Developer | 20 min | JSON-LD in the rendered page | One format, no mixed leftovers |
| 3. Check access | Developer | 20 min | URL Inspection on a sample, no robots.txt or noindex block | Sample pages are fetchable |
| 4. Compare markup with visible text | Editor | 1 hour | Every marked-up fact appears on the page | No hidden or invented facts |
| 5. Check required and recommended properties | SEO | 45 min | Validator plus the type's documentation | Required complete, recommended added where true |
| 6. Check duplicates and images | Developer | 30 min | Duplicate URLs carry the same markup, image URLs are crawlable | No orphan or blocked images |
| 7. Test, release, monitor | SEO | 30 min | Rich Results Test, then Search Console reports | Passed test and a dated review |

## Example (made up)

A team reviews 10 product pages before a release. Eight pass. One shows a price in markup that is not on the page, and one has an image blocked by robots.txt. Both are fixed before release. The team writes down the date and does not promise a rich result.

## Common mistakes

- Treating a passed test as proof that quality rules are met.
- Marking up reviews or facts that are not visible on the page.
- Adding the markup to the canonical page only, when duplicates exist.
- Using a vague type when a specific one applies.

Related: [structured data before and after](/structured-data-before-and-after-a-test-plan-and-rollout-for-seo-and-aeo-teams/), [Search Essentials onboarding](/google-search-essentials-as-an-onboarding-checklist-for-new-seo-and-aeo-team-members/) and [spam policies self-audit](/google-spam-policies-in-plain-english-a-self-audit-for-your-site-in-four-groups/). Results are not guaranteed.
