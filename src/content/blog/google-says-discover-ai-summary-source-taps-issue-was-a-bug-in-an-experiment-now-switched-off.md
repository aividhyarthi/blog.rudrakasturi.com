---
title: "Google says Discover AI summary source taps issue was a bug in an experiment, now switched off"
date: 2026-10-31T10:25:00+05:30
description: "A test stopped readers opening cited articles from source taps on Discover's AI summary cards. Google says it was a bug in an experiment and is off. What was reported, and what publishers can check."
tag: "Google Discover"
tldr: "An SEO researcher reported on 23 October that Discover's AI summary cards had stopped opening a feed of cited articles when readers tapped the sources. Search Engine Journal, Search Engine Roundtable and ALM Corp report that a Google search executive called it a bug in an experiment and said it is switched off. We could not open the pages, so details come from search summaries."
sources:
  - title: "Google Turns Off Discover Experiment After AI Summary Source Bug"
    url: "https://www.searchenginejournal.com/rajan-patel-disabled-discover-source-clicks-bug/594579/"
    publisher: "Search Engine Journal"
  - title: "Google Discover Testing Disabling Clicks In Sources Section"
    url: "https://www.seroundtable.com/google-discover-disabling-clicks-42369.html"
    publisher: "Search Engine Roundtable"
  - title: "Google Switches Off Discover AI Summary Bug Experiment 2026"
    url: "https://almcorp.com/news/google-switches-off-discover-experiment-after-ai-summary-source-bug/"
    publisher: "ALM Corp"
categories: ["Google Discover", "AI Search", "SEO"]
tags: ["Discover", "AI summaries", "Publishers", "Search Console", "Google"]
---

Google has said that a change to source taps on Discover's AI summary cards was a bug in an experiment, and that the experiment is switched off. We could not open the original posts or articles from our systems, so this account rests on summaries of Search Engine Journal, Search Engine Roundtable and ALM Corp coverage. Check those pages for exact wording.

![Timeline of the Google Discover AI summary source-tap bug: a test is spotted on 23 October, what the test did, Google says it was a bug and turned it off, and what publishers can check in Search Console](/images/google-discover-ai-source-tap-bug/timeline.svg)

## What was reported

According to the coverage, Discover researcher Damien Andell reported on 23 October that a test had started on AI summary cards. Before the test, tapping the sources at the bottom of a summary card opened a mini-feed of articles from those sources. During the test, that tap was disabled. In the summary we saw, Andell named the flag as disable_aio_sources_button_tap. We have not verified that name.

## What Google said

The reports say Rajan Patel, a vice president of engineering for Search at Google, replied on X that the disabled taps were a bug in an experiment, that the experiment has been turned off, and that the experience is working as intended again. The summaries say he did not describe what the experiment was meant to change.

## What the reports say about measurement

Coverage notes that Search Console's Discover generative AI report is described in Search Console Help as showing impressions, not source taps. So a publisher could not use that report to see whether the taps changed.

## Our view

This is our opinion, not Google's. Source taps are one of the few visible routes from an AI summary to a publisher's articles, so even a short-lived change matters to publishers who depend on Discover. Without a tap metric, a change like this can be seen only through traffic and third-party observers. We would treat a drop in Discover visits during 23 October and the days after as a possible effect, not proof.

## What to do

1. Check Search Console's Discover performance for 23 October onward and compare it with the previous two weeks.
2. Note any change in Discover referrals in your own analytics for the same dates.
3. Keep a dated log of Discover changes, so you can separate bugs from content problems.
4. Review the basics in our [Discover checklist](/google-discover-checklist-for-blogs-a-10-minute-test/).
5. Read what we know about AI summaries in Discover in [Google Discover now testing AI-generated summaries](/google-discover-now-testing-ai-generated-summaries-what-it-means-for-publishers-seo/), and how to see AI features in Search Console in [our control guide](/how-to-see-and-control-ai-overviews-and-ai-mode-in-search-console/).
