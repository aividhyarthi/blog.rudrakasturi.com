---
title: "What Is Google-Extended? The Updated Guide to Google's AI Content Controls"
date: 2025-04-26T03:45:30Z
updated: 2026-11-25
description: "Google-Extended is a robots.txt token for controlling certain non-Search AI uses of website content. Learn how it differs from Search AI controls, training and grounding."
tag: "Google"
tldr: "Google-Extended is not a crawler and does not have its own user-agent string. Google's November 2026 documentation clarifies that it can control training and grounding on certain non-Search products, including Gemini Apps and Vertex AI. It does not block Google Search, AI Overviews or AI Mode. Search generative AI features have a separate control in Search Console."
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

If you manage a website, you may have seen the name Google-Extended in discussions about AI training and robots.txt. It is easy to mistake it for another Google crawler or assume that blocking it removes your content from AI Overviews.

Neither assumption is correct.

Google-Extended is a robots.txt product token. It does not have its own crawler or user-agent string. Google's November 24, 2026 documentation gives a clearer explanation of what it controls and, just as importantly, what it does not control.

## What is Google-Extended?

Google-Extended is a control that website owners can use to limit certain uses of their content by Google's non-Search generative AI products.

Google's updated documentation describes two uses of web content:

- **Training:** using content to help train future foundation models before they are deployed.
- **Grounding:** retrieving relevant information from the web when a deployed AI system answers a prompt.

These are separate activities. Training happens before deployment. Grounding happens when an AI product looks up current information to support a response.

Google says Google-Extended can control training and grounding for specified non-Search products, including Gemini Apps and Vertex AI.

## Does Google-Extended block AI Overviews or AI Mode?

No. Google's November 2026 documentation makes this distinction clear.

Google-Extended does not affect whether a page can be crawled, indexed or ranked in Google Search. It also does not opt a website out of AI Overviews or AI Mode.

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

Google-Extended is not a way to block every form of AI use, and it is not a way to remove a website from Search. It controls specified non-Search AI uses. Search AI features have their own control.

Publishers should decide what they want to allow, use the correct setting for that purpose and avoid treating robots.txt as a universal switch for Google's products.
