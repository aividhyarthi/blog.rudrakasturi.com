---
title: "Movie carousel markup: required image and name, the mobile-only limit, and a rollout for list pages"
date: 2026-11-14T19:00:00+05:30
description: "Google's movie carousel structured data: required image and name, recommended rating, release date, director and review, and a mobile-only feature. A rollout with owners and checks and a made-up example."
tag: "AEO"
tldr: "Google's movie carousel page (last updated 8 September 2026) says movie lists can be marked up so users can explore movies in Search, that the carousel is only available on mobile devices, that image and name are required, and that aggregateRating, dateCreated, director and review are recommended. Images need a 6:9 ratio as stated on the page. The rollout is ours."
sources:
  - title: "Movie carousel (Movie) structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/movie"
    publisher: "Google Search Central"
categories: ["AEO", "Structured data", "Entertainment"]
tags: ["Movie markup", "Carousel", "Structured data", "Entertainment SEO", "Rich results"]
---

Searches like "best movies of 2026" return lists, and Google has a rich result for them. Its movie carousel page (last updated 8 September 2026 as we read it) says how to mark up your list pages. This post turns it into a rollout for entertainment sites and review blogs.

**Best for:** film sites, review blogs and streaming guides that publish ranked or themed movie lists.

![Movie carousel markup: a list page, required image and name, recommended rating and director, mobile only](/images/movie-carousel-markup/movie-carousel.svg)

## What Google says

- Mark up movie lists with structured data so users can explore movies in new ways on Google Search. You can provide details such as the title, director and an image.
- The movie carousel is only available on mobile devices.
- It is built with the Carousel markup, plus Movie properties for each item. If a list is shown from one site, see Google's carousel guidance.
- **Required** for each movie: `image` and `name`. The image URL must be crawlable and indexable, represent the marked up content, be a .jpg, .png or .gif, and be high resolution. The page states a 6:9 aspect ratio and says images that deviate a lot from it are not eligible, while images close to it can be cropped.
- **Recommended:** `aggregateRating`, `dateCreated` (the release date), `director` (a Person) and a nested `review`, following the review snippet guidelines.
- If Google detects markup that goes outside the structured data guidelines, the site may receive a manual action.
- Google does not guarantee that markup will show in search results. Test it, check it with URL Inspection and keep the page accessible.

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Pick list pages | SEO | 30 min | Pages that list several movies, for example a year or genre roundup | A page list, one list per page |
| 2. Set the carousel | Developer | 1 hour | Carousel markup with one entry per movie | Entries match the visible list |
| 3. Add required properties | Developer | 1 hour | `name` and `image` for every movie | No entry without both |
| 4. Fix the images | Designer | 2 hours | Crawlable files in a supported format at the stated ratio | All images pass |
| 5. Add recommended properties | Editor | 1 hour | Release date, director and ratings from the page text | Only visible facts used |
| 6. Test on mobile | SEO | 30 min | Rich Results Test, URL Inspection, mobile view | Passed test and dated review |

## Example (made up)

A review site has a "best thrillers of 2026" list with 10 movies. The team marks up each entry with name, image, release date and director, resizes every poster to the stated ratio, and checks the page on a phone. It does not promise a carousel.

## Common mistakes

- Marking up movies the page does not list.
- Using images that are far from the stated ratio.
- Expecting the carousel on desktop.
- Adding ratings that are not on the page.

Related: [carousel markup with ItemList](/carousel-markup-with-itemlist-when-host-carousels-apply-and-how-to-validate-them/), [review snippet markup](/google-explains-review-snippet-markup-what-changed-how-to-fix-your-pages/) and [general structured data guidelines](/general-structured-data-guidelines-as-a-pre-release-qa-checklist-for-seo-and-aeo-teams/). Results are not guaranteed.
