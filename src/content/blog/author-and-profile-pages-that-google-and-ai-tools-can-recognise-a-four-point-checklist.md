---
title: "Author and profile pages that Google and AI tools can recognise: a four-point checklist"
date: 2026-11-10T15:00:00+05:30
description: "How to build an author page that is about one real person, shows proof, uses ProfilePage markup correctly and avoids fake creator details. Based on Google's documentation."
tag: "AEO"
tldr: "Google's ProfilePage documentation (last updated 8 September 2026) says the page must focus on a single person or organisation affiliated with the site. Its helpful content guidance says to show accurate authorship and warns that made-up names, AI headshots or false credentials make a page untrustworthy. The checklist is our own."
sources:
  - title: "Profile page (ProfilePage) structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/profile-page"
    publisher: "Google Search Central"
  - title: "Creating helpful, reliable, people-first content"
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
    publisher: "Google Search Central"
categories: ["AEO", "SEO", "Structured data"]
tags: ["Author page", "ProfilePage", "E-E-A-T", "sameAs", "Structured data"]
---

An author page is where a reader, and a search system, can check who is behind your content. Many are a name and a stock sentence. Google's documentation points to what makes them useful.

**Best for:** blogs, news sites, forums and company sites with named creators.

![Author page checklist: one subject per page, visible facts, ProfilePage markup with sameAs links, honest creator details](/images/author-profile-pages/profile-page.svg)

## What Google says

- ProfilePage markup is for sites where creators, people or organisations, share first-hand perspectives. It helps Google understand the creators behind content.
- The primary focus of the page must be a single person or organisation affiliated with the website. Valid examples include an author page on a news site, an "About Me" page on a blog, an employee page and a forum profile.
- A store home page, or a review site for an organisation not associated with the site, is not a valid use.
- Google's examples use `name`, `alternateName` and `sameAs` links on a Person.
- The helpful content guidance encourages accurate bylines where readers expect them. It warns that fabricated creator profiles, such as AI-generated headshots, made-up names or false credentials, make a page untrustworthy.

Google's generative AI guide says no special markup is needed for AI features. Our view: an honest author page still helps, because it gives every system the same checkable facts.

## The four-point checklist

| Check | Pass if |
|---|---|
| One subject | The page is about one person or organisation |
| Visible facts | Name, role, topics covered and examples of work are on the page |
| Markup | ProfilePage with Person, and `sameAs` links only to real profiles |
| Honest details | Every credential and photo is real |

## A worked example (made-up)

Before: "Admin" with a stock bio. After: "Priya Nair, senior editor, covers travel and rail. Articles: five linked titles. Profiles: her publisher page and professional profile." Each statement is true and checkable.

## What to do

1. List your authors and merge "Admin" pages into real names or an organisation page.
2. Add a short bio, topic list and links to recent work.
3. Add ProfilePage markup and validate it.
4. Link each article byline to the author page. See [Article schema that matches the page](/article-schema-that-matches-the-page-author-dates-and-headline-with-a-checklist/).
5. Read [first-hand evidence](/first-hand-evidence-eight-kinds-you-can-add-to-any-page-and-what-never-to-fake/) and [schema for AEO](/schema-for-aeo-and-geo-a-decision-table-by-page-type-and-a-ten-point-audit/).
