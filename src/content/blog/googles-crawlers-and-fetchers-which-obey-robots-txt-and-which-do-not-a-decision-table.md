---
title: "Google's Crawlers and Fetchers: Which Obey robots.txt, Including the November 2026 Changes"
date: 2026-11-12T11:00:00+05:30
updated: 2026-11-25
description: "Google's crawler documentation now lists additional existing special-case crawlers and user-triggered fetchers. Use this updated decision table to understand robots.txt behaviour and Google-Extended."
tag: "AEO"
tldr: "Google updated its crawler documentation on November 23, 2026, adding six existing special-case crawlers and six existing user-triggered fetchers. These are not newly launched bots. APIs-Google moved to the user-triggered fetcher list. Google also clarified that Google-Extended controls training and grounding on certain non-Search products, not AI Overviews or AI Mode."
sources:
  - title: "List of Google's common crawlers"
    url: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers"
    publisher: "Google Search Central"
    reviewed: "2026-11-25"
  - title: "List of Google's special-case crawlers"
    url: "https://developers.google.com/search/docs/crawling-indexing/google-special-case-crawlers"
    publisher: "Google Search Central"
    reviewed: "2026-11-25"
  - title: "List of Google user-triggered fetchers"
    url: "https://developers.google.com/search/docs/crawling-indexing/google-user-triggered-fetchers"
    publisher: "Google Search Central"
    reviewed: "2026-11-25"
  - title: "Google's Crawling Documentation Changelog"
    url: "https://developers.google.com/crawling/docs/changelog"
    publisher: "Google"
    reviewed: "2026-11-25"
categories: ["AEO", "SEO", "Technical SEO"]
tags: ["Googlebot", "Google-Extended", "robots.txt", "Crawlers", "User-triggered fetchers"]
---

A robots.txt rule only controls the crawlers and fetchers that are required to obey it. Google's documentation now lists more of the systems that may appear in website server logs, and the latest update makes an important distinction between automated crawlers and user-triggered fetchers.

Google updated its crawling documentation on November 23, 2026. It added six existing special-case crawlers and six existing user-triggered fetchers. These are not new bots. Google says they were already operating and were added to the documentation because they are high-volume clients that website owners were asking about.

This guide updates the earlier crawler decision table with those changes and clarifies the separate role of Google-Extended.

**Best for:** SEO leads, developers, infrastructure teams and anyone editing robots.txt or investigating server logs.

## What changed in Google's crawler documentation?

Google added the following existing clients to its documentation.

| Group | Newly documented names | What to remember |
|---|---|---|
| Special-case crawlers | \`Google-analytics-postbacks\`, \`Google-Calendar-Importer\`, \`GoogleDocs\`, \`Google-Edu\`, \`pageburst\`, \`PlayStore-Google\` | These are tied to specific Google products and may have different robots.txt behaviour |
| User-triggered fetchers | \`AppEngine-Google\`, \`Google-Apps-Script\`, \`Google-Cloud-Tasks\`, \`GoogleImageProxy\`, \`Google Web Preview\`, \`Chrome-Lighthouse\` | These run in response to a user or service request and generally ignore robots.txt |
| Reclassified | \`APIs-Google\` | Moved from special-case crawlers to user-triggered fetchers |

Google says these clients are not new. The change documents existing high-volume systems that may already be visible in server logs.

The APIs-Google change is worth checking if a team has hardcoded user-agent strings. Google corrected the documented string and says webhook push requests come from user-triggered fetcher IP ranges and ignore robots.txt rules.

## The three groups of Google visitors

Google's documentation separates its visitors into three broad groups.

### 1. Common crawlers

Common crawlers are used to build Google's indexes and automatically discover content. Google says they always obey robots.txt when crawling automatically.

Examples include Googlebot, Googlebot-Image, Googlebot-Video, Googlebot-News, Storebot-Google, Google-InspectionTool and members of the GoogleOther family.

Rules for Googlebot can affect Google Search crawling and other Search features. A rule for Googlebot-Image has a narrower image-crawling purpose. Storebot-Google is associated with Shopping, while Google-InspectionTool is used by testing tools and does not itself determine Search rankings.

### 2. Special-case crawlers

Special-case crawlers are used for specific products where Google has an agreement or a particular product relationship with the site.

Google says these crawlers may ignore robots.txt and can use different IP ranges. AdsBot is a familiar example. The six names added on November 23 belong in this documented group.

Do not assume that a rule for the global \`*\` user agent will control every special-case crawler.

### 3. User-triggered fetchers

User-triggered fetchers run because a person or service has asked Google to retrieve something. Google says these fetchers generally ignore robots.txt.

Examples include link previews, verification requests, content fetches and other requests initiated by a user action. The six names added on November 23 are part of this group.

If a fetcher ignores robots.txt, a robots rule is not a reliable way to prevent the request. Access controls, authentication or removing the resource are more appropriate options, depending on the use case.

## Decision table: which control should you use?

| Your objective | Relevant control | Important limitation |
|---|---|---|
| Control automatic Google Search crawling | Googlebot rules in robots.txt | Does not remove a URL that is already indexed |
| Control image crawling | Googlebot-Image | Applies to image crawling, not every use of the page |
| Control a special-case crawler | Check its specific documentation and product relationship | It may not follow the global robots.txt rule |
| Prevent a user-triggered fetch | Authentication, access control or resource removal | These fetchers generally ignore robots.txt |
| Control AI training and grounding on certain non-Search Google products | Google-Extended in robots.txt | Does not block Search inclusion, AI Overviews or AI Mode |
| Control use or display in Search AI features | Search generative AI control in Search Console | Separate from model training and not a ranking signal |
| Remove a page from Google Search | \`noindex\` | Also removes eligibility for Search AI features |

Google's updated explanation of [AI content controls](/google-ai-content-controls-training-grounding-search-publishers/) is important here. Google-Extended is not a crawler and is not a switch for Search AI answers. It controls training and grounding for specified non-Search products. Search AI features have a separate Search Console control.

## How to identify a Google visitor in server logs

A user-agent string alone is not proof that a request came from Google. User-agent strings can be copied or spoofed.

Use this routine before changing access rules:

1. Pull a sample of requests from the relevant time period.
2. Record the full user-agent string, IP address, request path, response code and timestamp.
3. Compare the requester with Google's published IP ranges or use the documented reverse and forward DNS verification process.
4. Classify the visitor as a common crawler, special-case crawler or user-triggered fetcher.
5. Check the specific documentation for that group before changing robots.txt.
6. Keep a record of the reason for the rule and the date it was reviewed.

Do not block a crawler simply because its name is unfamiliar. First establish what product uses it and whether it is responsible for Search crawling, a user-requested fetch or another service.

## Common mistakes

**Blocking Googlebot to stop AI training.** This can affect Search crawling. Google-Extended is the separate control for certain non-Search AI uses.

**Assuming Google-Extended blocks AI Overviews.** Google's November 2026 documentation says it does not. Use the Search generative AI control for Search AI features.

**Assuming every Google request obeys robots.txt.** Special-case crawlers and user-triggered fetchers can follow different rules.

**Treating the newly documented names as newly launched bots.** Google explicitly says these clients already existed.

**Trusting a user-agent string without verification.** Check the IP address and Google's verification guidance.

## What SEO and engineering teams should do this week

Review your robots.txt file and server-log dashboards together. Add the newly documented names to your monitoring and classification rules, but do not block them by default.

Check whether any code depends on the old APIs-Google classification or user-agent string. Review Google-Extended separately from the Search generative AI control, and document the organisation's choice.

Finally, schedule a quarterly review of Google's crawler documentation. The list can change, and a rule that made sense for one product may not control another.

The practical lesson is simple: identify the visitor before deciding what to block. A robots.txt file is not a universal access-control system, and Google's different crawlers and fetchers do not all follow the same rules.
