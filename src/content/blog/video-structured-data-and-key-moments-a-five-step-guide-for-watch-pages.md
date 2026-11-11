---
title: "Video structured data and key moments: a five-step guide for watch pages"
date: 2026-11-11T19:00:00+05:30
description: "Google's video structured data documentation covers required fields, key moments, YouTube timestamps and live streams. Five steps with owners and checks for video and SEO teams."
tag: "AEO"
tldr: "Google's video documentation (last updated 24 September 2026) requires name, thumbnailUrl and uploadDate on a watch page, asks for a unique name per video, supports key moments through Clip, SeekToAction or YouTube timestamps, and says the Indexing API supports live streams only. The five steps are ours."
sources:
  - title: "Video (VideoObject, Clip, BroadcastEvent) structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/video"
    publisher: "Google Search Central"
  - title: "Google Search Central updates, 24 September 2026"
    url: "https://developers.google.com/search/updates"
    publisher: "Google Search Central"
categories: ["AEO", "SEO", "Video", "Structured data"]
tags: ["VideoObject", "Key moments", "Clip", "YouTube", "Live streams"]
---

Video can appear in text results, in video results and in features that jump to a moment in a video. Google's video documentation (last updated 24 September 2026 as we read it) says what a watch page must tell Google.

**Best for:** video producers, publishers with embedded video, and SEO teams.

![Video markup: mark up the watch page, fill required fields, help with key moments, notify for live streams](/images/video-structured-data/video-markup.svg)

## What Google says

- Video markup can influence what shows in video results: description, thumbnail, upload date and duration. It applies to watch pages.
- Required properties for VideoObject: `name` (unique text for each video), `thumbnailUrl` and `uploadDate` in ISO 8601 format.
- Google's examples also include `duration`, `contentUrl`, `embedUrl` and `creator`. Google's updates page for 24 September 2026 records that the `creator` property was added, noting support for `author`.
- Key moments let users navigate segments like chapters. Google can detect them automatically but prefers those you set through `Clip` or `SeekToAction` structured data, or through timestamps in a YouTube description.
- For YouTube timestamps: use `[hour]:[minute]:[second]` (hours optional), put the label on the same line, one timestamp per line, link each timestamp to the point in the video, keep labels to at least one word and list them in order.
- `Clip` and `SeekToAction` need a video that can deep link to a point other than the start.
- A `BroadcastEvent` can earn a LIVE badge. For livestreams, Google asks you to call the Indexing API when the video goes live, when it stops and the markup is updated with an end date, and when the markup changes. The Indexing API supports livestream videos only.
- Following the Search Essentials, structured data guidelines and video indexing requirements is required for eligibility. Misuse can lead to a manual action.

## What to do: five steps

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Pick the watch pages | SEO | 30 min | A page whose main content is one video | A list of 10 URLs |
| 2. Add the required fields | Developer | 1 hour | Rich Results Test | name, thumbnailUrl, uploadDate valid on all ten |
| 3. Make every name unique | Content | 30 min | Sort names in a spreadsheet | No duplicates |
| 4. Add key moments | Video editor | 1 hour | Clip markup, or timestamps in the YouTube description | Moments are listed in order |
| 5. Handle live streams | Developer | 2 hours | Indexing API calls at start, end and on change | Test stream triggers the three calls |

## Common mistakes

- Marking a page with five videos as if it were one watch page.
- Reusing the same title for a series of videos.
- Timestamps out of order or without labels.
- Using the Indexing API for videos that are not live.

See also our [schema decision table](/schema-for-aeo-and-geo-a-decision-table-by-page-type-and-a-ten-point-audit/) and [JavaScript SEO check](/javascript-seo-a-ten-minute-check-for-script-heavy-sites/). Results are not guaranteed, and we did not test the Indexing API.
