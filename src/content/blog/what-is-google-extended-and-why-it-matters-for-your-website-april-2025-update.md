---
title: "What Is Google-Extended? The Updated Guide to Google's AI Content Controls"
date: 2025-04-26T03:45:30Z
updated: 2026-11-25
description: "Google-Extended is a robots.txt token for controlling certain non-Search AI uses of website content. Learn how it differs from Search AI controls, training and grounding."
tag: "Google"
tldr: "Google-Extended is not a crawler and does not have its own user-agent string. Google's November 2026 documentation clarifies that it can control training and grounding on certain non-Search products, including Gemini Apps and Vertex AI. It does not affect Search crawling, indexing or ranking, and does not control grounding or display in AI Overviews or AI Mode. Google says it can limit training of models used for Search AI responses; Search generative AI features have a separate Search Console control for grounding and display."
sources:
  - title: "Control how your content is used for generative AI at Google"
    url: "https://developers.google.com/search/docs/fundamentals/gen-ai-controls"
    publisher: "Google Search Central"
    reviewed: "2026-11-25"
  - title: "List of Google's common crawlers"
    url: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers"
    publisher: "Google Search Central"
    reviewed: "2026-11-25"
categories: ["Crawling", "Google Search", "SEO", "AEO"]
tags: ["Google", "Google-Extended", "Robots", "AI training", "AI grounding", "SEO"]
---

Website owners often use the word "blocking" as if every Google AI product draws from one shared access switch. Google's controls are more specific than that. The right setting depends on whether the concern is model training, grounding in a non-Search product, or the way a page is used in Search AI features.

The distinction is important before changing robots.txt. A rule intended to limit one type of AI use can be ineffective for another, or can affect more of Google's products than the site owner intended.

Google's November 2026 documentation clarifies these boundaries. This update revisits the original Google-Extended explanation and sets out which control applies to which use.

## What is Google-Extended?

Google-Extended is a control that website owners can use to limit certain uses of their content by Google's non-Search generative AI products.

Google's updated documentation describes two uses of web content:

- **Training:** using content to help train future foundation models before they are deployed.
- **Grounding:** retrieving relevant information from the web when a deployed AI system answers a prompt.

These are separate activities. Training happens before deployment. Grounding happens when an AI product looks up current information to support a response.

Google says Google-Extended can limit training use and grounding for specified products. Its grounding control applies to non-Search products such as Gemini Apps and Vertex AI. Google's Search Console Help also says to use Google-Extended to limit training of the models used to generate Search AI responses.

## Does Google-Extended block AI Overviews or AI Mode?

No. Google's November 2026 documentation makes this distinction clear.

Google-Extended does not affect whether a page can be crawled, indexed or ranked in Google Search. It does not control whether a page is grounded or displayed as a source in AI Overviews or AI Mode. However, Google's Search Console Help says Google-Extended can be used to limit training of the models used to generate Search AI responses.

Search generative AI features use a separate control in Search Console. Google says that setting manages whether content from a site is used for grounding or displayed, including links, in Search AI features such as AI Overviews and AI Mode.

The Search generative AI control does not affect model training and is not a ranking or inclusion signal for other parts of Google Search. Google says its worldwide rollout was completed on August 31, 2026.

For the full comparison, read our guide to [Google's AI content controls: training, grounding and Search](/google-ai-content-controls-training-grounding-search-publishers/).

## How to use Google-Extended in robots.txt

If your organisation decides to disallow Google-Extended, the rule can look like this:

\`\`\`txt
User-agent: Google-Extended
Disallow: /
\`\`\`

This is a site-wide rule for the uses governed by Google-Extended. It is not a general instruction to stop Google Search from visiting the site.

Do not add the rule without a policy decision. Consider whether your organisation wants to permit training, non-Search grounding, Search AI features and ordinary Search visibility. They are not one combined setting.

## Which Google control should you use?

| Your goal | Control |
|---|---|
| Limit training and grounding on specified non-Search Google AI products | Google-Extended in robots.txt |
| Opt out of AI Overviews, AI Mode and Search generative AI features | Search generative AI control in Search Console |
| Limit snippets or exclude selected text from Search features | \`nosnippet\`, \`max-snippet\` or \`data-nosnippet\` |
| Remove a page from Google Search | \`noindex\` |

A \`noindex\` rule is much broader than an AI opt-out. It prevents the page from appearing in Search, including Search generative AI features.

## What website owners should check

1. Review the current robots.txt file and confirm whether Google-Extended is already blocked.
2. Check the Search generative AI setting in Search Console.
3. Review page-level snippet controls such as \`nosnippet\`, \`max-snippet\` and \`data-nosnippet\`.
4. Record which uses the organisation permits and which it restricts.
5. Test the rules after deployment and check that ordinary Search visibility has not been unintentionally affected.
6. Review Google's documentation when the available controls change.

Also check our updated guide to [Google's crawlers and fetchers](/googles-crawlers-and-fetchers-which-obey-robots-txt-and-which-do-not-a-decision-table/). Google-Extended is not one of the crawlers listed there because it is a control token, not a crawler.

## The key point

Google-Extended is not a way to remove a website from Search or to opt out of grounding and display in AI Overviews and AI Mode. It can limit training use, including training of models used for Search AI responses, while the Search Console control governs grounding and display in Search AI features.

Publishers should decide what they want to allow, use the correct setting for that purpose and avoid treating robots.txt as a universal switch for Google's products.

## Frequently asked questions

### Is Google-Extended a Google crawler?

No. It is a robots.txt product token and has no separate crawler or user-agent string.

### Does blocking Google-Extended remove a website from Google Search?

No. Google says Google-Extended does not affect Search crawling, indexing or ranking.

### Does Google-Extended block AI Overviews and AI Mode citations?

It does not control whether pages are grounded or displayed as sources in AI Overviews or AI Mode. Google's Search Console control governs that. Google-Extended can limit training use, including training of models used for Search AI responses.

### What is the difference between Google-Extended and the Search Console AI control?

Google-Extended controls training use and grounding for specified products. The Search Console setting controls grounding and display in Search generative AI features.

### Should publishers add Disallow: / for Google-Extended?

Only after a deliberate policy decision. A site-wide rule affects the uses governed by Google-Extended and should be reviewed with editorial, legal and product teams.

### Does noindex block only AI use?

No. Noindex removes a page from Google Search, including Search generative AI features. It is not a selective AI-use setting.

