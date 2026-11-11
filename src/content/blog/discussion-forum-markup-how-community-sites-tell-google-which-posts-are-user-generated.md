---
title: "Discussion forum markup: how community sites tell Google which posts are user-generated"
date: 2026-11-12T13:00:00+05:30
description: "Google's DiscussionForumPosting documentation covers user-generated posts only, full text, nested comments and the Q and A exception. Steps for forum and community teams."
tag: "AEO"
tldr: "Google's discussion forum documentation (last updated 8 September 2026) says to use DiscussionForumPosting only for user-generated posts, include the entire text of each post and comment on the page, nest comments under their post, and use Q&A markup instead when the forum is mostly questions with answers. The checklist is ours."
sources:
  - title: "Discussion forum (DiscussionForumPosting) structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/discussion-forum"
    publisher: "Google Search Central"
categories: ["AEO", "SEO", "Structured data", "Community"]
tags: ["DiscussionForumPosting", "Forums", "User-generated content", "Structured data"]
---

Forum posts carry first-hand experience, which is why they appear in many answers. Google's documentation (last updated 8 September 2026 as we read it) says how a community site should describe its posts.

**Best for:** forum owners, community platforms and product teams with user discussion pages.

![Forum markup: user-generated posts only, include the full text, nest comments, choose the right type](/images/discussion-forum-markup/forum-markup.svg)

## What Google says

- Discussion forum markup is for forum-style sites where people share first-hand perspectives. It helps Google identify online discussions.
- Use `DiscussionForumPosting` only for a user-generated post. Do not use it for content mainly written by the site's publishers or their agents, such as an article with comments or user reviews of a product.
- A generic social platform can use `SocialMediaPosting`, its parent type, with the same requirements.
- If the forum is mostly questions with answers, Google recommends Q&A markup instead. For general discussion, `DiscussionForumPosting` is better.
- Each post must include its entire text, and each `Comment` must include the entire text of the response if it is on that page.
- Nest comments under the post they relate to. On multi-page threads, ideally later pages include the original post with the main page URL. If a URL is mainly about one post, use `mainEntity` or `mainEntityOfPage`.
- Required: `author` (a person or organisation) and `datePublished`, plus one of `text`, `image` or `video`. `headline` should not duplicate or truncate the text if there is no separate title.
- The optional `digitalSourceType` property distinguishes human from machine-generated content. Google supports `TrainedAlgorithmicMediaDigitalSource` (for example an LLM) and `AlgorithmicMediaDigitalSource` (for example an automatic reply bot), and assumes content is human-generated if the property is missing.
- Google recommends Microdata or RDFa where possible, to avoid repeating large text blocks, though JSON-LD is fully supported.

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Classify your page types | Product, SEO | 45 min | Thread page, category page, question page | Each type has a markup choice |
| 2. Use the right type per page | SEO | 30 min | Mostly Q and A? Use Q&A. Mixed? Use forum markup | Types are documented |
| 3. Check text completeness | Developer | 45 min | Compare visible post text with markup text | No truncated text |
| 4. Nest the comments | Developer | 1 to 2 hours | Inspect the tree against the page | Replies sit under their posts |
| 5. Handle multi-page threads | Developer | 1 hour | Page 2 of a long thread | The original post is referenced |
| 6. Test five thread pages | SEO | 30 min | Rich Results Test and URL Inspection | Required fields valid |
| 7. Mark machine-generated posts | Community lead, developer | 30 min | Does the platform set `digitalSourceType` for LLM or bot posts? | Generated posts carry the right value |

## Common mistakes

- Marking up a blog post written by your team as a forum post.
- Marking up product reviews as forum posts.
- Putting a clipped excerpt of the post in the markup.
- Keeping spam threads indexed. See [control what you share](/control-what-you-share-with-google-the-options-compared-and-when-to-use-each/) for the noindex options.

Related: [author and profile pages](/author-and-profile-pages-that-google-and-ai-tools-can-recognise-a-four-point-checklist/). Markup does not guarantee that a thread appears in any feature.
