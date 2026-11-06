---
title: "QAPage markup or not: a decision guide for question-and-answer pages in Google and AI answers"
date: 2026-11-06T19:00:00+05:30
description: "Google's QAPage markup is for one question with answers people can submit, not for FAQs or how-to pages. A decision table, a minimal example, and what to do for pages that do not qualify."
tag: "SEO"
tldr: "Google says QAPage structured data is for pages focused on a single question and its answers, where users can submit answers. It is not for FAQs, how-to guides, blog posts or essays. If your page does not fit, skip the markup and write clear questions with answer-first paragraphs instead."
sources:
  - title: "Q&A Page (QAPage) structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/qapage"
    publisher: "Google Search Central"
categories: ["SEO", "Structure Data", "Forums"]
tags: ["QAPage", "Structured data", "Forums", "Community", "Schema"]
---

**Quick answer:** Use QAPage only when the page is one question with answers that visitors can submit. Everything else needs plain, well-written text.
**Best for:** forum owners, community and support sites, and bloggers tempted to add Q&A markup.

## What Google says

We read Google's QAPage documentation on 6 November 2026. QAPage markup can make a page eligible for a Q&A rich result and may help Google produce a better snippet. Google's rules include:

- Use it only when the focus of the page is a single question and its answers.
- One QAPage per page.
- Users must be able to submit answers.
- Do not use it for FAQs, how-to guides, blog posts or essays, or for advertising.
- Mark up the full question and answer text.

Required properties are `mainEntity` (the Question) on the page, `name`, `answerCount` and at least one `acceptedAnswer` or `suggestedAnswer` on the question, and `text` on each answer.

## Decision table

Our own framework, built from Google's rules.

| Your page | Use QAPage? | Instead |
|---|---|---|
| A forum thread: one question, many member answers | Yes | Mark up the real question and answers |
| A support page where customers add answers | Yes | Same |
| An FAQ page you wrote yourself | No | Clear headings, answer-first text |
| A how-to guide | No | Numbered steps |
| A blog post with several questions | No | Subheadings that are questions |

## A minimal example

This is an illustration, not a template to copy blindly. Every value must match what visitors can see.

```json
{
  "@context": "https://schema.org",
  "@type": "QAPage",
  "mainEntity": {
    "@type": "Question",
    "name": "How long do apples last in the fridge?",
    "answerCount": 1,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Most varieties keep three to six weeks in the crisper drawer."
    }
  }
}
```

## Why this matters now

AI answers increasingly quote human discussion, such as [Reddit threads](/reddit-and-ai-answers-what-the-citation-data-actually-says/). A community page with real answers is something an AI answer can quote. Markup does not guarantee that. Google's own AI guide says no special markup is required.

## What to do

1. Decide which of your pages are truly one question with user answers.
2. Add QAPage only to those, matching the visible text.
3. Test with Google's Rich Results Test and check Search Console for errors.
4. For the rest, write each question as a heading and answer in the first sentence. See [answer-first pages](/write-answer-first-pages-open-with-the-direct-answer-then-the-detail/).
5. Moderate answers. Spam and wrong replies hurt trust.
6. See our [schema decision table](/schema-for-aeo-and-geo-a-decision-table-by-page-type-and-a-ten-point-audit/) for other page types.

Markup does not promise a rich result.

![Decision guide for when to use QAPage markup: one question with user answers, one author answer, many questions, and markup matching visible content](/images/qa-page-markup-decision/qa-decision.svg)
