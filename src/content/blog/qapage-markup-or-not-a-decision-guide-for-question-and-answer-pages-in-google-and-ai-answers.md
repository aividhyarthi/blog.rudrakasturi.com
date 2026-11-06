---
title: "QAPage markup or not: which question-and-answer pages qualify, and what to do for the rest"
date: 2026-11-06T19:00:00+05:30
description: "Google's QAPage markup is for a page with one question and answers that visitors can submit. It is not for FAQs, how-to guides or blog posts. Which pages qualify, a minimal example, and what to do instead."
draft: true
tag: "SEO"
tldr: "Google says QAPage structured data is for pages focused on a single question and its answers, where users can submit answers. It is not for FAQs, how-to guides, blog posts or essays. If your page does not fit, skip the markup and write each question as a heading with the answer in the first sentence."
sources:
  - title: "Q&A Page (QAPage) structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/qapage"
    publisher: "Google Search Central"
categories: ["SEO", "Structure Data", "Forums"]
tags: ["QAPage", "Structured data", "Forums", "Community", "Schema"]
---

**Quick answer:** use QAPage only when the page is one question and visitors can add their own answers. For everything else, write clear questions and answer-first text.
**Best for:** forum and community owners, support sites, and bloggers who want to add question-and-answer markup.

## Which page are you?

| Your page | QAPage? | Do instead |
|---|---|---|
| A forum thread: one question, many member answers | Yes | Mark up the real question and answers |
| A support page where customers add answers | Yes | Same |
| An FAQ page you wrote yourself | No | Headings and answer-first text |
| A how-to guide | No | Numbered steps |
| A blog post with several questions | No | Question subheadings |

![Decision guide for when to use QAPage markup: one question with user answers, one author answer, many questions, and markup matching visible content](/images/qa-page-markup-decision/qa-decision.svg)

## What Google says

QAPage markup can make a page eligible for a Q&A rich result in Google Search, and it can help Google show a better snippet. These are Google's rules:

- The page must be focused on a single question and its answers.
- Only one QAPage per page.
- Visitors must be able to submit answers.
- Do not use it for FAQs, how-to guides, blog posts or essays, or for advertising.
- Mark up the full question and answer text.
- Use the `comment` property for comments, not `Answer`.

## The page types

**A forum thread**
*What it is:* one question, with replies from members.
*QAPage?* Yes. This is what the markup is for.
*Do this:* mark up the question and each answer exactly as visitors see them.

**A support page where customers answer**
*What it is:* a question from one customer and answers from others or from staff.
*QAPage?* Yes, if visitors can submit answers.

**An FAQ page you wrote yourself**
*What it is:* a list of questions with answers that only you provide.
*QAPage?* No. Google says QAPage is not for FAQs.
*Do instead:* write each question as a heading and put the answer in the first sentence. See [answer-first pages](/write-answer-first-pages-open-with-the-direct-answer-then-the-detail/).

**A how-to guide or blog post**
*What it is:* steps, or an article that covers several questions.
*QAPage?* No.
*Do instead:* numbered steps, or question subheadings.

## A minimal example

Every value must match what visitors can see on the page.

```json
{
  "@context": "https://schema.org",
  "@type": "QAPage",
  "mainEntity": {
    "@type": "Question",
    "name": "How do I reset my router?",
    "answerCount": 1,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Hold the reset button for ten seconds, then wait for the lights to settle."
    }
  }
}
```

The required properties are `mainEntity` (the Question) on the page, then `name`, `answerCount` and at least one `acceptedAnswer` or `suggestedAnswer` on the question, and `text` on each answer.

## Why this matters now

AI answers increasingly quote real people. Our post on [Google's AI Overview quoting Reddit for movie reviews](/google-ai-answers-now-quote-reddit-for-movie-reviews-what-it-means-for-ratings-and-how-to-read-them/) shows how a forum thread ends up in the answer. A community page with real answers gives them something to quote.

## What to do

1. List the pages on your site that really are one question with visitor answers.
2. Add QAPage markup only to those, matching the visible text.
3. Test it with Google's Rich Results Test and watch Search Console for errors.
4. For every other page, use clear question headings and answer-first paragraphs.
5. Moderate answers. Wrong or spam replies hurt the page.
6. See our [schema decision table](/schema-for-aeo-and-geo-a-decision-table-by-page-type-and-a-ten-point-audit/) for other page types.

Google does not promise a rich result, even when the markup is correct.
