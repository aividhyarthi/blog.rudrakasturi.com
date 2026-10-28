---
title: "Snippets and meta descriptions: what Google says and how to write them"
date: 2026-10-28T16:20:00+05:30
description: "Google writes search snippets mainly from page content, and sometimes uses your meta description. What the documentation says, how to write a useful description, and how to control snippets."
tag: "SEO"
tldr: "Google says snippets are created mainly from page content and that it sometimes uses the meta description when it describes the page better. Write a unique, factual description for each page, avoid keyword lists, and use nosnippet, max-snippet or data-nosnippet only when you need to limit what is shown."
sources:
  - title: "Control your snippets in search results"
    url: "https://developers.google.com/search/docs/appearance/snippet"
    publisher: "Google Search Central"
categories: ["SEO", "Google Search"]
tags: ["Meta description", "Snippets", "SEO", "Google Search", "On-page SEO"]
---

A snippet is the description part of a search result. Many site owners write a meta description and expect it to appear every time. Google's documentation, last updated in April 2026, says otherwise, and it also explains what makes a good description.

## How Google creates snippets

Google says snippets are created automatically and primarily from the content on the page. They are designed to preview the part of the page that best relates to a person's search, so different searches can show different snippets for the same page. Google sometimes uses the meta description element when it may give users a more accurate description than content taken from the page. It adds that it cannot manually change snippets for individual sites.

That means the meta description is a candidate, not a guarantee. Writing a good one raises the chance it is used, and the page content has to carry the answer either way.

## What a good description looks like

Google's best practices are specific:

- **Unique per page.** Identical or similar descriptions on every page are not helpful. Use site-level descriptions on the home page and aggregation pages, and page-level descriptions elsewhere. If time is short, prioritise the home page and popular pages.
- **Relevant facts.** A description does not have to be a sentence. News and blog posts can list the author or publication date, and product pages can gather details such as price or manufacturer.
- **Programmatic is acceptable.** For large database-driven sites, Google says generating descriptions is appropriate if they are human-readable and diverse.
- **Truly descriptive.** Google's examples mark a keyword list as bad, the same line on every news article as bad, and a description that summarises the whole page as better. There is no length limit, but the snippet is shortened to fit the device width.

![Four rules for a meta description: make it unique per page, include real facts, summarise the page, and use snippet controls if needed](/images/meta-description-snippets/good-vs-weak.svg)

## Controlling what is shown

Google names three controls. The `nosnippet` meta tag prevents a snippet from being shown. The `max-snippet:[number]` tag sets a maximum length. The `data-nosnippet` attribute keeps specific parts of a page out of snippets. These limit what can appear, so use them on purpose. They are different from blocking a page from the index.

## A quick test

Search for a page's exact title in Google and read the snippet. If it shows text from the body rather than your description, compare the two. If the body text answers the query better, that is the behaviour Google describes, not an error. If the snippet looks poor, improve the opening of the page itself, as covered in [answer-first pages](/write-answer-first-pages-open-with-the-direct-answer-then-the-detail/).

## What to do

1. **Write a description for each important page,** starting with your home page and top posts.
2. **State what the page contains,** including author, date or price where relevant.
3. **Remove keyword lists** and repeated site-wide text.
4. **Keep the first paragraph of the page clear,** since Google may take the snippet from it.
5. **Use snippet controls only when needed,** and review them if traffic falls.

Related reading: [how Google chooses your title link](/how-google-chooses-your-title-link-and-how-to-write-one/) and [Google's review snippet guidance](/google-explains-review-snippet-markup-what-changed-how-to-fix-your-pages/).

*Source: Google Search Central documentation, as linked above.*
