---
title: "How to identify Google Search traffic in analytics and server logs: Referer values and why numbers differ"
date: 2026-11-15T16:00:00+05:30
description: "Google's guide to spotting Search traffic by the HTTP Referer header, the values it sends, why the Referer is sometimes blank, and why analytics never match Search Console. A checklist with owners and a made-up example."
tag: "SEO"
tldr: "Google's guide to identifying Search traffic says Google Search uses the origin referrer policy, so the Referer holds only the scheme and host, never the query. Blank referrers, redirects, ad blockers and different counting methods mean analytics and server logs rarely match Search Console one to one. The checklist is ours."
sources:
  - title: "Identify Google Search traffic in your web analytics or server logs"
    url: "https://developers.google.com/search/docs/monitor-debug/identify-google-search-traffic"
    publisher: "Google Search Central"
    reviewed: "13 Nov 2026"
categories: ["SEO", "Analytics", "Measurement"]
tags: ["Analytics", "Referer header", "Server logs", "Search Console", "Organic traffic"]
---

Marketing reports Google traffic from analytics, SEO reports it from Search Console, and the numbers never agree. Google published a guide on this that explains which Referer values to look for and why the totals differ. This post turns it into a checklist for analysts and SEO leads.

**Best for:** analysts, SEO leads and developers who maintain analytics and log pipelines. Learners are welcome: each step names who does it and how to check it.

**New to SEO or AEO?** Analytics tools count visits to your site. Search Console counts clicks in Google. The two measure different things, so they rarely match.

**SEO and AEO angle:** Google's generative AI guide points to the generative AI performance report in Search Console for impressions in AI features. This post covers the web analytics side.

![Identifying Search traffic: know the Referer values, check channel rules, expect blanks, reconcile with Search Console](/images/identify-google-search-traffic/identify-traffic.svg)

## What Google says

- You can identify Search traffic in your analytics or server logs by inspecting the HTTP `Referer` header sent when a user clicks a link from Google Search to your site. It does not include the search query; use the Performance report in Search Console for queries.
- Google Search uses the origin referrer policy, so the header contains only the scheme and host, such as `https://www.google.com/` or a local domain like `https://www.google.co.uk/`.
- Google app on Android may send `android-app://com.google.android.googlequicksearchbox/https/www.google.com` when it opens the link in a browser tab, or the normal Google value. Google app on iOS uses the normal value. Discover traffic uses the same values as the surface where Discover was viewed. Other Google services served from the same origins, such as Google Images, send the same values, so they are included when you match.
- The Referer may be blank because of private browsing, anti-fingerprinting protections, opening results in a new tab in some browsers, moving from a native search widget to an external browser, and privacy extensions. JavaScript tracking may miss visits because of privacy settings, consent tools and ad blockers.
- If traffic shows as referral or direct, check custom channel rules, referral exclusions and filters. For logs, only count requests for landing pages, since image or script requests carry your own page as the Referer.
- Reasons the data differs from Search Console: privacy settings, client-side redirects replacing the Referer or dropping parameters such as `gclid`, different methods (Search Console counts a click on a link, analytics counts a session after the page loads and runs tracking code), and paid traffic, which Search Console excludes.

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Write down the Referer values | Analyst | 30 min | The values above, including the Android app form | A pattern list |
| 2. Test the channel rules | Analyst | 1 hour | Click through from Google and see the channel in your tool | Visit lands in organic search |
| 3. Check redirects | Developer | 1 hour | Landing pages keep the Referer and the query string | No redirect strips them |
| 4. Filter logs to landing pages | Developer | 1 hour | Exclude image, CSS and script requests | Counts are page visits only |
| 5. Reconcile with Search Console | Analyst | 2 hours | Compare clicks, expect gaps, explain each | A written reason for the gap |
| 6. Report with a note | SEO lead | 15 min | Reports say which source each number comes from | No mixed definitions |

## Example (made up)

A team sees 12,000 organic clicks in Search Console and 9,500 organic sessions in analytics. Instead of calling one wrong, they check channel rules, find a redirect that drops the Referer on one section, fix it, and document the remaining gap as privacy settings and different counting.

## Common mistakes

- Expecting analytics and Search Console to match exactly.
- Looking for the search query in the Referer.
- Counting asset requests as visits from Google.
- Mixing paid and organic totals in one report.

Related: [Search Console for social and video content](/how-to-use-search-console-for-tiktok-instagram-x-and-youtube-content-a-weekly-routine/), [search traffic drop routine](/search-traffic-drop-a-four-step-debugging-routine-from-googles-guide/) and [Google Discover images checklist](/google-discover-images-the-size-ratio-and-max-image-preview-large-checklist/). Results are not guaranteed.
