---
title: "Semrush and poisoned Google SERPs: what changed in October, and what it means for your rank, AI citation and source URL reports"
date: 2026-11-03T14:13:00+05:30
description: "Semrush says Google has been returning inaccurate results to automated trackers, and that it changed how it collects and validates data. A plain-English Q&A: what changed, the dates, the numbers, what it means for AI citation and source URL reports, and what to do before you react to a drop."
tag: "SEO"
tldr: "Semrush says Google has returned inaccurate results to rank trackers and that it has adjusted its data sources, added checks to detect and exclude invalid results and re-collects flagged data. Reports put the affected share anywhere from about 8 percent to over 20 percent depending on the tracker, and sources disagree on dates. Google has not confirmed why. Check Search Console before acting on a ranking drop."
sources:
  - title: "Poisoned SERPs: An update on Google ranking data in Semrush"
    url: "https://www.semrush.com/blog/poisoned-serps/"
    publisher: "Semrush"
  - title: "Semrush confirms 'poisoned' Google results are impacting SEO tools"
    url: "https://searchengineland.com/semrush-confirms-poisoned-google-results-499199"
    publisher: "Search Engine Land"
  - title: "Analysis: Google Is Poisoning Search Results For Rank Trackers"
    url: "https://www.searchenginejournal.com/analysis-google-is-poisoning-search-results-for-rank-trackers/592873/"
    publisher: "Search Engine Journal"
  - title: "Semrush says Google is feeding rank trackers bad results, but impact is limited"
    url: "https://searchenginewatch.com/poisoned-google-serps-rank-trackers/"
    publisher: "Search Engine Watch"
  - title: "Google feeds rank trackers swapped results on 8% of pages, Nozzle finds"
    url: "https://ppc.land/google-feeds-rank-trackers-swapped-results-on-8-of-pages-nozzle-finds/"
    publisher: "PPC Land"
  - title: "Poisoned SERPs: Semrush Confirms Google Ranking Issues"
    url: "https://delante.co/semrush-poisoned-serps-google-ranking-data/"
    publisher: "Delante"
categories: ["SEO", "Tools", "AI Search"]
tags: ["Semrush", "Poisoned SERPs", "Rank tracking", "Search Console", "AI visibility", "Data quality"]
---

If your Semrush rankings or AI visibility numbers moved sharply this autumn, the cause may not be your site. In October, Semrush said that Google has been returning inaccurate results to automated rank trackers, and that it had changed how it collects and checks its data. This post answers the questions site owners are asking, in plain English. We could not open the Semrush post or the Search Engine Land article from our systems, so everything below comes from search summaries of those pages and of other coverage. Where sources disagree, we say so.

## What are "poisoned" SERPs?

SERP means search engine results page. Reports describe poisoned results as pages that Google returns to automated tools that do not match the query, for example a page about one product appearing for a search about something else because they share a single word. Semrush's own description, as quoted in coverage, says Google has returned inaccurate results to automated collectors, and that in some cases the results page as a whole is clearly off, with results that do not match the query even on page one.

The term is not an official Google term. It was popularised by SEO researchers and vendors writing about the problem.

## Did Semrush change its methodology in October?

According to the coverage we could see, yes, in three ways:

1. **Source adjustments.** Semrush said it adjusted its data sources and collection settings to reduce the impact.
2. **Validation checks.** It added checks to identify suspicious results pages and exclude invalid results from reporting.
3. **Re-collection.** Reports say that when a result is flagged as invalid, the system requests the data again.

Search Engine Land reports that Semrush confirmed the issue and described the changes, and that Semrush said incorrect data affected roughly 10 percent of tracked keywords from October. We have not verified that figure against Semrush's own page.

## What date did this happen?

Sources disagree, so treat any single date with care.

- The Semrush post, as listed in search results, carries the date 27 October 2026.
- Other coverage places a Semrush statement earlier in October, and one source points to an earlier update to a 12 October report. We could not reach the page to settle which is right.
- The underlying problem started earlier. Nozzle, a rank tracker, reported that the share of poisoned results rose from 0.17 percent to 8.0 percent from 13 September.

So there are two dates to keep apart: when the problem began in tracker data (reported from mid-September) and when Semrush announced and applied its changes (October).

![Timeline of the poisoned SERPs reports: Nozzle data from 13 September, other tools in October, the Semrush statement whose date differs between sources, and what is still unknown](/images/semrush-poisoned-serps/timeline.svg)

## How big is the problem?

It depends on who measured it, how, and on what.

| Source | What it reported |
|---|---|
| Nozzle, as reported by Search Engine Watch and PPC Land | 8.0 percent of SERPs poisoned from 13 September, against 0.17 percent before, in a sample of about 27.5 million SERPs across 49 countries |
| AccuRanker, as summarised in coverage | Much lower rates with its own collection, and 93.7 percent of poisoned spells lasting a single day |
| Nozzle, on duration | 77.9 percent of poisoned SERPs had their usual sites back within three days |
| Search Engine Land, on Semrush | Roughly 10 percent of tracked keywords affected from October |
| One third-party source on a Semrush dataset | An average of 22.6 percent, peaking at 43.5 percent, across about 29.9 million SERPs in 53 countries. We could not verify this, and it differs from the Search Engine Land figure |

Our view: the safest reading is that the share was not trivial, that it varied by tool and market, and that most poisoned spells were short. Do not quote a single figure as fact.

## Does this apply to AI citation URLs and source URL reports?

This is the question we cannot answer with certainty.

What the coverage supports is that Semrush's statement concerns Google search results data collected by automated requests. Some third-party write-ups say the same validation applies to AI Overview and AI Mode tracking in Semrush's AI tools, because those are also collected by automated queries. We did not find Semrush's own wording saying so in the summaries available to us.

Our view, labelled as such: the logic is plausible, because any report built from automated Google requests can inherit bad results. But plausible is not confirmed. The honest approach is to ask Semrush support directly:

- Which reports are covered by the new validation checks?
- From what date?
- Were earlier data in the AI citation and source URL reports restated, or only new data?

Until you have that answer, treat sudden changes in citation counts or source URLs from September and October with the same caution as a ranking drop.

## Why would Google do this?

Google has not confirmed that it does this on purpose. According to Search Engine Land's summary, Semrush and others suggest the cause may be Google's efforts to restrict large-scale automated data collection, including collection for AI systems. SEO consultant Brodie Clark, as reported, suggests Google may be limiting what AI competitors can take from its results. These are hypotheses, not facts.

## What should you do before reacting to a drop?

![Four checks before reacting to a ranking drop: Search Console first, the date window, a live spot-check, and business results](/images/semrush-poisoned-serps/checks.svg)

1. **Check Search Console.** If impressions, clicks and average position held for the query, the drop was in the tracker's data, not in Google. Coverage from several vendors gives the same advice.
2. **Check the dates.** Compare the change with the reported window, from mid-September to the end of October.
3. **Spot-check live.** Search the query yourself in a clean browser, from the right country, and note who ranks.
4. **Check business results.** Leads, calls, form fills and sales matter more than one chart.
5. **Compare tools.** If two trackers disagree, trust neither until Search Console agrees.
6. **Annotate your reports.** Mark the period in your charts so that nobody blames the wrong team later.

## What not to do

Do not rewrite pages, change titles or cancel campaigns because a tracker line fell. Do not tell a client that rankings dropped, or recovered, from a tracker alone. And do not assume your AI visibility has collapsed without running a live check. Our [20-prompt AI visibility test](/a-20-prompt-ai-visibility-test-template-scoring-rubric-and-monthly-routine/) gives you a manual cross-check.

## What to do this week

- Pull Search Console data for your 20 most important queries and compare it with your tracker for September and October.
- Ask your tool vendor in writing which reports use the new checks and from which date.
- Add a note to any dashboard or client report covering the period.
- Read our [traffic drop debugging routine](/search-traffic-drop-a-four-step-debugging-routine-from-googles-guide/) and our guide to [tracking AI referrals in analytics](/how-to-track-ai-referral-traffic-in-analytics-a-four-step-setup-and-its-limits/), which gives you a second signal that does not depend on a tracker.
- Keep your [AEO and GEO playbook](/the-aeo-and-geo-playbook-technology-content-schema-writing-style-and-myths/) as the map for what to improve once you know a drop is real.

## Frequently asked questions

**Did Semrush change anything in its tool, or only publish a warning?**
Reports say both: it adjusted data sources, added validation checks and re-collection, and published a statement about the problem.

**Are other tools affected?**
Yes. Coverage names Ahrefs, AccuRanker, BrightLocal and Nozzle, among others, as seeing similar issues.

**Has Google commented?**
Not that we found. Coverage says Google had made no public statement.

**Is my site penalised?**
Nothing in this story points to a penalty. If Search Console shows real drops, treat that as a separate problem.

**Should I change my SEO strategy?**
Not on tracker data alone. Verify first.

*This article is based on search summaries of the Semrush post and coverage by Search Engine Land, Search Engine Journal, Search Engine Watch, PPC Land and Delante. We could not open the primary pages. Check them for exact wording and dates.*
