# Drafts for review: 6 November 2026

None of these are live. Order below is the planned order. Tell me what to change, and I will not publish anything until you say so.


---

## Draft 1: ChatGPT Ads: Target CPA and Target CPC start on 9 November, and Max Bid and Max CPC retire on 1 January 2027

- Planned time: 2026-11-06T08:20:00+05:30
- Link when live: https://blog.rudrakasturi.com/chatgpt-ads-target-cpa-and-target-cpc-start-on-9-november-and-max-bid-and-max-cpc-retire-on-1-january-2027/
- Description: OpenAI is replacing Max Bid and Max CPC in ChatGPT Ads with Target CPA and Target CPC. The dates, what each option does, what API users must change, and what to check before you switch.
- Summary box: OpenAI's help page and advertiser email say Target CPA replaces Max Bid for new conversion campaigns and Target CPC replaces Max CPC for new click campaigns from Monday 9 November. Max Bid and Max CPC retire on 1 January 2027. Both targets are averages, not guaranteed prices. Maximize results is now called intelligent bidding.
- Sources: [Bidding strategies and how pricing works in ChatGPT Ads](https://help.openai.com/en/articles/20001634-bidding-strategies-and-how-pricing-works-in-chatgpt-ads) (OpenAI Help Center)

**Quick answer:** From 9 November you can set an average cost per conversion or click in ChatGPT Ads Manager. The old Max Bid and Max CPC controls stop on 1 January 2027.
**Best for:** advertisers and agencies running ChatGPT Ads.

## What changes and when

This comes from OpenAI's help article, "Bidding strategies and how pricing works in ChatGPT Ads", and OpenAI's email to advertisers.

| Date | What happens |
|---|---|
| Monday 9 November 2026 | Target CPA is available for new conversion campaigns and replaces Max Bid. Target CPC is available for new click campaigns and replaces Max CPC. |
| Now | Existing campaigns keep serving as Max Bid or Max CPC. You may switch them. |
| Before 18 November (API) | Max Bid and Max CPC fields keep their behaviour. |
| From 18 November (API) | OpenAI recommends the new target fields. Legacy fields work through 31 December, but using them to create a campaign or change an ad group's bid type selects Target CPA or Target CPC, and the values become average-cost targets. |
| 1 January 2027 | Max Bid and Max CPC retire. The legacy API fields are deprecated. |

## What each option means

- **Intelligent bidding** (formerly Maximize results or autobid): the system adjusts bids and delivery to pursue your outcome within budget. No target needed.
- **Target CPA:** the average you would like to pay per conversion, such as a purchase or lead. OpenAI's example: a $50 target aims for a $50 average, and some conversions will cost more or less.
- **Target CPC:** the average you would like to pay per click. Unlike Max CPC, the system may bid above or below the target in each auction.

OpenAI states that a target is not a guaranteed maximum, and that the final winning auction bid sets the price you pay. Your bidding goal and billing event are separate settings.

## What to check first

OpenAI says restrictive targets or weak conversion signals can reduce delivery and leave budget unspent. For conversion campaigns, confirm the OpenAI Pixel or Conversions API is sending the selected event, and review Event Quality Score warnings.

## What to do

1. List every campaign still on Max Bid or Max CPC.
2. Calculate recent actual CPA or CPC for the same event and period. A worksheet for this follows later today.
3. Check that conversion events are arriving before you switch.
4. If you use the API, plan to move to the new fields before 18 November and before the 1 January deprecation.
5. Watch spend as campaigns learn. OpenAI does not promise any result.
6. Read our earlier guide, [what advertisers should know before they spend](/chatgpt-ads-what-advertisers-should-know-before-they-spend/).

The dates come from OpenAI's own page and advertiser email.

![Timeline of ChatGPT Ads bidding changes: now, 9 November, 18 November for API and 1 January 2027](https://blog.rudrakasturi.com/images/chatgpt-ads-target-cpa-cpc/bidding-changes.svg)


---

## Draft 2: ChatGPT Work and Dots errors on 5 November: what OpenAI reported, and a continuity plan for teams

- Planned time: 2026-11-06T08:30:00+05:30
- Link when live: https://blog.rudrakasturi.com/chatgpt-work-and-dots-errors-what-it-means-for-you-and-what-could-go-wrong/
- Description: OpenAI's status page logged elevated errors for ChatGPT Work and Dots on 5 November 2026. The timeline as published, what we could not confirm, and a simple fallback plan for teams that depend on ChatGPT.
- Summary box: OpenAI's status page shows an incident titled 'ChatGPT Work and Dots Errors', first logged at 8:55 PM on Thursday 5 November 2026, with elevated errors identified at 10:27 PM and a mitigation applied at 10:35 PM, after which it was monitoring recovery. Two ChatGPT components and one Codex component were affected. The incident is still open and has not been marked resolved.
- Sources: [ChatGPT Work and Dots Errors (incident page)](https://status.openai.com/) (OpenAI Status)

**Quick answer:** OpenAI reported degraded performance for ChatGPT Work and Dots on the evening of 5 November 2026. It applied a mitigation and is monitoring recovery. The issue is not resolved yet.
**Best for:** teams, agencies and ad managers that run work through ChatGPT.

## The timeline as OpenAI published it

This is from OpenAI's incident page, captured about nine hours after the last update, and the issue was still open when we checked. The page does not state a time zone. Check the live page for newer updates.

| Time (Thursday 5 Nov 2026) | Status | OpenAI's wording |
|---|---|---|
| 8:55 PM | Investigating | A potential issue for the listed services |
| 9:00 PM | Investigating | Same message, repeated |
| 9:56 PM | Investigating | Same message, repeated |
| 10:27 PM | Identified | Users are experiencing elevated errors; working on a mitigation |
| 10:35 PM | Monitoring | A mitigation is applied; monitoring to confirm recovery |

The incident was labelled "Degraded performance". Affected components: two under ChatGPT and one under Codex. The page we saw does not name them beyond the incident title.

## What OpenAI has not said

- Which users or regions were hit hardest.
- The cause. OpenAI gave none.

## Why it matters now

The same day, OpenAI told advertisers that ChatGPT Ads bidding is changing. Teams moving campaigns in early November should not assume every tool is available all day. See [the bidding changes](/chatgpt-ads-target-cpa-and-target-cpc-start-on-9-november-and-max-bid-and-max-cpc-retire-on-1-january-2027/).

## A simple continuity plan

Our own framework, not OpenAI's advice.

| Tier | Example work | If ChatGPT is down |
|---|---|---|
| Must ship today | Client reports, launch copy | Use a second assistant or your manual template |
| Can wait a day | Drafts, research summaries | Queue the prompt and retry |
| Nice to have | Ideas, brainstorms | Skip |

## What to do

1. Bookmark status.openai.com and subscribe to updates.
2. Save your best prompts in a shared document, so any assistant can run them.
3. Name one backup tool for each must-ship task.
4. Keep manual templates for reports and ad copy.
5. Note incident times in your analytics, since an outage can shift [AI referral traffic](/how-to-track-ai-referral-traffic-in-analytics-a-four-step-setup-and-its-limits/).
6. Do not change live ad budgets while the tool is degraded.

![Timeline of the ChatGPT Work and Dots Errors incident on 5 November 2026: investigating, identified, monitoring, still open](https://blog.rudrakasturi.com/images/chatgpt-work-dots-incident/incident-timeline.svg)


---

## Draft 3: Facebook Answers: millions of AI-generated pages. Is it scaled content abuse, and what should your site learn?

- Planned time: 2026-11-06T08:40:00+05:30
- Link when live: https://blog.rudrakasturi.com/facebook-answers-millions-of-ai-pages-is-it-scaled-content-abuse-what-google-says-and-what-your-site-should-learn/
- Description: Facebook's AI-generated Answers pages rank widely on Google. What Google's scaled content abuse policy says, what the data shows, why Facebook may escape a penalty, and what that means for your own site.
- Summary box: Saul Westbrook of Peripheral reports millions of AI-generated pages under facebook.com/fb-answers/, with Semrush estimating about 40.6 million worldwide visits in October 2026. Google defines scaled content abuse as many pages made mainly to manipulate rankings. Facebook has not commented and Google has not ruled on these pages. Do not copy the tactic.
- Sources: [Facebook made one quiet change, and increased organic traffic by over 40 million visits a month](https://www.peripheralcreative.com/news/facebook-answers-ai-generated-pages) (Peripheral); [Facebook Answers AI-Generated Pages Scaled Content Abuse In Google Search](https://www.seroundtable.com/facebook-answers-google-42467.html) (Search Engine Roundtable); [Spam policies for Google web search](https://developers.google.com/search/docs/essentials/spam-policies) (Google Search Central)

**Quick answer:** Facebook has put millions of AI-summarised "Answers" pages into Google, and many rank. Whether that breaks Google's scaled content abuse policy is undecided. Smaller sites should not assume the same pages would survive for them.
**Best for:** SEOs, publishers and anyone tempted to generate pages in bulk.

## What was found

Saul Westbrook of [Peripheral](https://www.peripheralcreative.com/news/facebook-answers-ai-generated-pages) reported that from around summer 2026 Meta had indexed millions of AI-generated pages under facebook.com/fb-answers/. Each is an AI summary of a topic, built from Facebook posts. Search Engine Roundtable also covered it. Its coverage cites over 6 million indexed pages, while Westbrook's article, using Semrush estimates, counts over 39 million pages ranking for at least one US keyword. The two figures measure different things, and both are estimates.

Westbrook's numbers, all Semrush estimates:

- Worldwide organic visits to the section: about 129,500 in May, 1.03 million in July, 12.2 million in August, 36.4 million in September and 40.6 million in October 2026.
- Example US rankings include position 1 for "LAS Airport location" and position 2 for an Amex travel query.
- He found over 180 near-overlapping English pages on padel tennis.
- Facebook has not commented, and LLM crawlers appear to be blocked from the pages, though Google's AI Overviews cite them.

## What Google's policy says

Google's spam policies define scaled content abuse as many pages generated for the primary purpose of manipulating search rankings. Its examples include using generative AI to produce many pages that add nothing for users. Doorway abuse covers substantially similar pages created to rank for similar queries. User-generated content is not itself a violation under the site reputation policy.

## Why Facebook may not be penalised, and why you might be

Our view, not Google's: the pages draw on real first-party posts, and Facebook has strong authority. Westbrook notes they survived the September spam update. A new or small site generating similar pages has neither advantage. See our [September update review](/google-september-2026-spam-update-what-happened-and-what-to-do/).

## The test to run on your own site

| Question | Safer answer |
|---|---|
| Does each page answer a distinct question? | Yes, and you can name it |
| Is there first-hand data or experience? | Yes, and it is shown |
| Would a person find page 2 useful after page 1? | Yes |
| Are many pages near copies with swapped words? | No |

## What to do

1. Do not copy Facebook's approach. Rankings today say nothing about penalties tomorrow.
2. Search your own site for near-duplicate pages and merge them.
3. Check what Facebook Answers says about your brand with site:facebook.com/fb-answers "your brand", as Westbrook suggests.
4. Read [our plain-English spam policy audit](/google-spam-policies-in-plain-english-a-self-audit-for-your-site-in-four-groups/).
5. Re-check in a month. Westbrook warns the pages are new and may not keep ranking.

![Four questions Google applies to scaled content, shown against Facebook Answers: many pages, purpose, added value and no ruling yet](https://blog.rudrakasturi.com/images/facebook-answers-scaled-content/scale-test.svg)


---

## Draft 4: Google's AI answers now quote Reddit for movie reviews: what that means for ratings and how to read them

- Planned time: 2026-11-06T09:05:00+05:30
- Link when live: https://blog.rudrakasturi.com/google-ai-answers-now-quote-reddit-for-movie-reviews-what-it-means-for-ratings-and-how-to-read-them/
- Description: A Google AI answer for a film review now splits critic reactions from Reddit viewer reactions. Here is what a screenshot shows, why it matters beyond site ratings, and how to check the sources.
- Summary box: A Google AI Overview screenshot for the query 'ramayan review' shows positives, criticisms and a 'Viewer Reactions' section that quotes a Reddit comment and an IGN review, with Reddit, YouTube and Times of India links. Real viewer talk is now part of the verdict, not just site ratings. The summary can still be wrong, so open the sources.
- Sources: [Google Search AI Overviews For Movie Reviews](https://www.seroundtable.com/google-movie-reviews-ai-overviews-38981.html) (Search Engine Roundtable); [Google's AI search is now turning to Reddit for answers](https://gulfnews.com/technology/media/googles-ai-search-is-now-turning-to-reddit-for-answers-1.500532763) (Gulf News); [Google, and the mystery of its top-ranked Mission: Impossible – The Final Reckoning review](https://filmstories.co.uk/?p=103236) (Film Stories)

**Quick answer:** For at least one big film release, Google's AI answer now builds its verdict from critics and from real viewers, with Reddit quoted by name. Site ratings are no longer the only voice.
**Best for:** film fans, entertainment publishers, review sites and any brand that depends on public opinion.

## What the AI Overview shows

Our screenshot shows a Google AI Overview for the query "ramayan review", taken by the author on 6 November 2026. It describes the first part of Nitesh Tiwari's *Ramayana* as drawing a "heavily divided but massive critical and audience response".

Below that, the answer is organised in four blocks:

- **The Positives:** performance, visual effects, cast and music, each with a short reason.
- **The Criticisms:** pacing and the three-hour-fifteen-minute runtime, the portrayal of the lead role, and narrative coherence.
- **Viewer Reactions:** two quoted lines, one from a Reddit comment and one from IGN.
- **Sources:** small labels linking to The Times of India, YouTube and Reddit (r/tollywood).

Google's answers vary by user and time, so yours may differ.

## Why this is different from ratings

A star score tells you how many people liked a film. The AI answer tells you why they liked or disliked it, in their own words. For a decision such as "is this worth three hours", the reasons are more useful than the number. Our earlier look at [Reddit in AI answers](/reddit-and-ai-answers-what-the-citation-data-actually-says/) found the same pull toward first-hand voices.

Google began adding AI summaries to movie review results in 2025, according to Search Engine Roundtable. This screenshot shows the idea extended to community voices.

## The catch

Opinion threads can be wrong, jokey or manipulated. Film Stories reported in 2025 that top audience reviews Google surfaced for one film looked machine-written, which is a single account, not proof of a trend. The AI summary can also flatten a split opinion into a neat verdict.

## What to do

1. As a viewer, open the Reddit thread and the critic link behind each quote. Check the date, and look for spoilers.
2. Look for the disagreement. If critics and viewers differ, the summary should say so.
3. As a publisher, add what a thread cannot: a tested view, a runtime note, who the film suits. See [first-hand evidence](/first-hand-evidence-eight-kinds-you-can-add-to-any-page-and-what-never-to-fake/).
4. As a brand, read the threads about you. They feed the answers. See [how Reddit became a top source for AI](/how-reddit-quietly-became-the-1-domain-for-ai-and-why-it-changes-everything/).
5. Do not post fake reviews or seed threads. Google's spam policies cover manipulation, and trust is hard to rebuild.

![How an AI movie review answer combines critic reviews, Reddit audience reactions and YouTube into one summary that readers should check against sources](https://blog.rudrakasturi.com/images/reddit-movie-reviews-ai-answers/review-sources.svg)


---

## Draft 5: Google AI Mode now links straight to home service bookings: why ranking there is becoming a sales channel

- Planned time: 2026-11-06T08:50:00+05:30
- Link when live: https://blog.rudrakasturi.com/google-ai-mode-now-links-straight-to-home-service-bookings-why-ranking-there-is-becoming-a-sales-channel/
- Description: Google AI Mode now offers direct booking and quote links for home services in the US. This is the shift from answer engine to booking tool, and what local service businesses should check.
- Summary box: On 4 November 2026 Google's Robby Stein said AI Mode has direct links to research and book home services through partners including Angi, Thumbtack, Housecall Pro and Jobber, with ServiceTitan coming soon, available in the US. AI Mode is moving from answering questions to completing jobs, so a business missing from the answer may miss the booking.
- Sources: [Google AI Mode adds home services booking links](https://searchengineland.com/google-ai-mode-adds-home-services-booking-links-500603) (Search Engine Land); [Google Adds Home Service Booking & Quote Links To AI Mode](https://www.searchenginejournal.com/google-ai-mode-home-services-booking-quote-links/595871/) (Search Engine Journal); [Google AI Mode With Home Services Booking Integration](https://www.seroundtable.com/google-ai-mode-home-services-booking-42459.html) (Search Engine Roundtable); [Housecall Pro Integrates with AI Mode in Google Search to Turn Home Service Searches into Booked Jobs](https://www.manilatimes.net/2026/11/05/tmt-newswire/globenewswire/housecall-pro-integrates-with-ai-mode-in-google-search-to-turn-home-service-searches-into-booked-jobs/2462067) (Manila Times (press release))

**Quick answer:** AI Mode is no longer only a place to read answers. For home services in the US, it can now hand a searcher a direct link to book or ask for a quote.
**Best for:** plumbers, electricians, handymen, cleaners and any local service business, plus agencies that serve them.

## What was announced

Robby Stein of Google posted on X that Google is making it easier to research and book home services with direct links in AI Mode, through partners including Angi, Thumbtack, Housecall Pro and Jobber, with ServiceTitan coming soon. He said it is available now in the US.

Stein described his own use: a backed-up main line at home, a description typed into AI Mode, and an answer that compared local pricing, checked reviews and made recommendations. He booked a plumber who came out and fixed it. That is his account, and it is one example.

Search Engine Land, Search Engine Journal and Search Engine Roundtable covered the launch. Housecall Pro also issued a press release.

## What the screenshots show

Our screenshot of AI Mode for the query "help me find a handyman to assemble a bed and dresser tomorrow" shows an answer that lists local businesses with a star rating, review count, open status, address, a short summary and time slots such as 12:30 PM and 2:15 PM. Those are the visible signals. Google has not said how it chooses or ranks providers.

## Why it matters for B2C and local businesses

The path used to be: search, open several sites, compare, call. Now it can be: describe the problem, read a shortlist, tap a time. The business shown first can win the job before its website is ever opened.

Two things follow, and both are our view:

- **Rank inside the answer is the new first page.** If you are not in the shortlist, you are not in the choice.
- **Booking tools matter.** The links run through partner platforms. A business that cannot take a booking online may lose to one that can.

Trade coverage also reports that some partners say AI Mode requests carry no lead fee. Confirm the terms with your platform.

## What to do

1. Check whether you use a listed partner (Angi, Thumbtack, Housecall Pro, Jobber) and ask how AI Mode requests reach you. Housecall Pro says its integration is coming soon to eligible US customers.
2. Keep your Business Profile complete: hours, services, address, photos and reviews. See [how local pages are found in AI Mode](/how-to-get-your-local-business-page-found-in-google-ai-mode-and-chatgpt/).
3. Earn reviews that describe the job, not just the stars. Read [why reviews now decide AI Mode results](/in-ai-mode-search-your-flats-dont-sell-your-reviews-do/).
4. Offer real availability online, including same-day and next-day slots.
5. Run the emergency queries for your trade in AI Mode once a week and record who is shown, using our [20-prompt test](/a-20-prompt-ai-visibility-test-template-scoring-rubric-and-monthly-routine/).

Results are not guaranteed, and the feature is US-only for now.

![Four steps from describing a home problem in AI Mode to a booked job with a local pro](https://blog.rudrakasturi.com/images/ai-mode-home-services-booking/from-question-to-booked.svg)


---

## Draft 6: Google Business Profile Cars for Sale: what the dealership inventory pilot is, and how it helps buyers and dealers

- Planned time: 2026-11-06T09:00:00+05:30
- Link when live: https://blog.rudrakasturi.com/google-business-profile-cars-for-sale-what-the-dealership-inventory-pilot-is-and-how-it-helps-buyers-and-dealers/
- Description: Google's help page describes a limited pilot that shows a dealership's cars for sale on its Business Profile. Here is what it does, how it helps shoppers and dealers, and a six-step checklist.
- Summary box: Google's Business Profile help page describes a limited pilot in which a dealership's available cars appear on its profile, where shoppers can search, sort and read about them. Dealers join through an interest form and manage it under Edit Profile, then Cars for Sale. Google does not promise results, so treat it as a test.
- Sources: [Google Business Profile Help: Edit your Business Profile information (Car dealership inventory, limited availability)](https://support.google.com/business/answer/3039617?hl=en) (Google Business Profile Help); [Google rolling out cars for sale in Google Business Profiles](https://searchengineland.com/google-rolling-out-cars-for-sale-in-google-business-profiles-392234) (Search Engine Land); [Cars For Sale On Google Business Profiles](https://seroundtable.com/cars-for-sale-on-google-business-profiles-32707.html) (Search Engine Roundtable)

**Quick answer:** Google is piloting a "Cars for Sale" section on dealership Business Profiles. Shoppers can search and sort the cars from the profile. Dealers opt in with an interest form and manage the feature themselves.
**Best for:** car dealers, and agencies and software partners that work with them.

## What Google's help page says

Google's Business Profile help page describes the feature as a new pilot. In its words, Google displays available sales inventory on dealership Business Profiles, where customers can search, sort and learn about the cars, which might make customers come to the dealership. A dealer, or someone who works with dealers, can ask to join through an interest form.

Partners who sign up manage it on Google Search. To update sales inventory, choose **Edit Profile**, then **Cars for Sale**. From there you can choose whether to show the cars for sale and select preferred data providers.

Google's help page is the primary source for this section.

## What earlier coverage adds

Search Engine Land and Search Engine Roundtable reported on car inventory in Business Profiles in earlier years, when it was a test. Details from those years, such as who can join, may have changed, so check the help page.

## How it helps shoppers and dealers

| Who | What changes | Our view |
|---|---|---|
| Shopper | Sees real cars on the profile before visiting, and can sort them | Fewer wasted trips and phone calls |
| Dealer | Inventory sits in the place local searches already land | A showroom window inside the search result |
| Both | Less guessing about what is on the lot | Only works if the data is current |

The "our view" column is our judgement, not Google's.

## The risk to manage

A profile that shows a car that was sold last week creates a bad visit. The feature depends on inventory data that you or your provider keep fresh. Compare it with the same cars on your own website, as in our guide to [local business pages in AI search](/how-to-get-your-local-business-page-found-in-google-ai-mode-and-chatgpt/).

## What to do

1. Read the help page and fill out the interest form if you are a dealer or work with dealers.
2. Ask your website or inventory provider whether it is one of the data providers offered under Cars for Sale.
3. Compare prices and availability on the profile with your own site every week. Fix any mismatch the same day.
4. Remove sold cars quickly. This is our advice, not a Google rule.
5. Keep the rest of the profile strong. See [what drives local ranking](/gbp-ranking-factors-what-really-drives-local-seo-in-2025/).
6. Tag your profile website link so you can see visits from it in analytics.

Google does not guarantee more visits or sales from the pilot. Results will vary.

![Four steps of the Google Business Profile Cars for Sale pilot: dealer joins, inventory is supplied, Google shows cars on the profile, shopper visits](https://blog.rudrakasturi.com/images/gbp-cars-for-sale-pilot/how-it-works.svg)


---

## Draft 7: How to set a realistic Target CPA in ChatGPT Ads: a four-step worksheet and pre-launch check

- Planned time: 2026-11-06T14:00:00+05:30
- Link when live: https://blog.rudrakasturi.com/how-to-set-a-realistic-target-cpa-in-chatgpt-ads-a-four-step-worksheet-and-pre-launch-check/
- Description: Before ChatGPT Ads moves conversion campaigns to Target CPA, use this worksheet: confirm conversion signals, find your actual CPA, set a target, and review it as the campaign learns.
- Summary box: OpenAI says Target CPA is an average-cost goal, not a guaranteed price, and that a target below recent performance may restrict delivery. The safest start is your actual CPA for the same event over a consistent window. A $20 target on a $40 actual CPA does not mean purchases at half the cost.
- Sources: [Bidding strategies and how pricing works in ChatGPT Ads](https://help.openai.com/en/articles/20001634-bidding-strategies-and-how-pricing-works-in-chatgpt-ads) (OpenAI Help Center)

**Quick answer:** Fix the data first, then set the target close to what you actually pay today, and adjust slowly.
**Best for:** advertisers moving ChatGPT conversion campaigns from Max Bid to Target CPA after 9 November.

OpenAI's help page is the source for the rules below. The worksheet layout is ours. For dates and what changes, see [our news post](/chatgpt-ads-target-cpa-and-target-cpc-start-on-9-november-and-max-bid-and-max-cpc-retire-on-1-january-2027/).

## Step 1: check the signal

OpenAI says setup alone does not prove usable conversion signals are arriving. Confirm that the OpenAI Pixel or Conversions API is sending the selected event to the data source linked to the campaign. Then read Event Quality Score warnings for missing matching information, delays and repeated events. Weak or missing signals can reduce delivery and leave budget unspent.

## Step 2: find actual CPA

Use the same conversion event and a consistent reporting period, and allow for conversion-reporting delay. OpenAI's example: $400 spend and 10 attributed purchases gives an actual CPA of $40 for that scope.

## Step 3: set the target

OpenAI advises comparing recent performance with what the outcome is worth to you. A target below recent performance may restrict delivery, and a $20 target on that $40 result does not mean the system delivers purchases at half the cost.

| Line | Your number |
|---|---|
| Actual CPA, last period | $40 |
| Most you can pay per sale and still profit | $55 |
| First target (our suggestion) | $40 to $45 |
| Review date | 7 days |

The $40 comes from OpenAI's example. The other numbers are illustrative.

## Step 4: review as it learns

OpenAI says to review spend, results and average cost together. Actual costs can be higher or lower than the target, since it is an average-cost goal. Audience multipliers, where available, change the target for a segment: a $50 target with a 1.2 times new-customer multiplier gives that segment $60.

## Landing page checks

Our checklist, not OpenAI's:

- The page matches the ad's promise.
- The conversion event fires once, and only on success.
- The page loads fast on a phone.
- Price, delivery and returns are visible.
- Tag links so visits appear in analytics. See [tracking AI referrals](/how-to-track-ai-referral-traffic-in-analytics-a-four-step-setup-and-its-limits/).

## What to do

1. Test the event today with a real conversion.
2. Calculate actual CPA by campaign.
3. Start near it, not at half.
4. Change the target in small steps and wait for data.
5. Read [what to know before you spend](/chatgpt-ads-what-advertisers-should-know-before-they-spend/).

Results are not guaranteed.

![Four-step worksheet for setting a realistic Target CPA in ChatGPT Ads: check signal, find actual CPA, set the target, review as it learns](https://blog.rudrakasturi.com/images/chatgpt-ads-target-cpa-worksheet/target-cpa-worksheet.svg)


---

## Draft 8: Myth: more pages mean more AI citations. What Google's spam policy says and what to do instead

- Planned time: 2026-11-06T16:30:00+05:30
- Link when live: https://blog.rudrakasturi.com/myth-more-pages-mean-more-ai-citations-what-googles-spam-policy-says-and-what-to-do-instead/
- Description: Publishing hundreds of near-identical pages to get cited by AI is a trap. What Google's scaled content abuse and doorway abuse policies say, plus a five-question test for each page.
- Summary box: Google defines scaled content abuse as many pages generated mainly to manipulate rankings, and doorway abuse as substantially similar pages made to rank for similar queries. Nothing in either policy says more pages earn more citations. A page should earn its place by answering a distinct question with something first-hand.
- Sources: [Spam policies for Google web search](https://developers.google.com/search/docs/essentials/spam-policies) (Google Search Central); [Facebook Answers AI-Generated Pages Scaled Content Abuse In Google Search](https://www.seroundtable.com/facebook-answers-google-42467.html) (Search Engine Roundtable)

**The myth:** if AI answers cite pages, publishing hundreds of pages, one per city or keyword, will get cited more.
**The verdict:** not supported, and risky.

## What Google's policy says

From Google's spam policies page, checked 6 November 2026:

- **Scaled content abuse** is when many pages are generated for the primary purpose of manipulating search rankings. Google's examples include using generative AI to produce many pages that add nothing for users, and stitching together content from other pages without adding value.
- **Doorway abuse** is when sites or pages are created to rank for specific, similar queries. Examples include multiple pages targeting different cities that funnel people to one page, and substantially similar pages.

Purpose is the test. Having many pages is not banned. Having many pages mainly to rank is.

## Why the myth persists

A case like [Facebook Answers](/facebook-answers-millions-of-ai-pages-is-it-scaled-content-abuse-what-google-says-and-what-your-site-should-learn/) looks like proof that volume wins. Our view: it is an exception, since Facebook has first-party posts and enormous authority, and no ruling has been made. We found nothing from Google saying more pages produce more AI citations.

## A worked example (made-up numbers)

A plumber with one city builds 200 pages: "emergency plumber in [suburb]". Each page has the same four paragraphs with the suburb swapped. Compare that with 12 pages: one per service, each with real job photos, price ranges from real jobs and the plumber's own checklist.

The first set is the pattern Google's doorway examples describe. The second gives an AI answer something to quote.

## The five-question test

| Question | Pass if |
|---|---|
| Is the question distinct on your site? | You can state it in one sentence |
| Is there a real source behind it? | First-hand data, a test, or a named expert |
| Remove the place or product name. Is it still different? | Yes |
| Would you link to it from another page? | Yes |
| Does it help someone who has already read your other pages? | Yes |

Two or more fails: merge, improve or do not publish.

## What to do

1. List your pages by topic. Group near-duplicates.
2. Run the five-question test on a sample of ten.
3. Merge weak pages into one stronger guide and use 301 redirects. See [which redirect to use](/which-redirect-should-you-use-301-302-meta-refresh-or-javascript/).
4. Add first-hand proof. See [first-hand evidence](/first-hand-evidence-eight-kinds-you-can-add-to-any-page-and-what-never-to-fake/).
5. Review your site against our [plain-English spam audit](/google-spam-policies-in-plain-english-a-self-audit-for-your-site-in-four-groups/).
6. Measure citations with the [20-prompt test](/a-20-prompt-ai-visibility-test-template-scoring-rubric-and-monthly-routine/).

Nobody can guarantee a citation, whatever the page count.

![Four-question test for deciding whether a page is worth keeping before publishing more pages](https://blog.rudrakasturi.com/images/myth-more-pages-more-citations/page-worth-keeping.svg)


---

## Draft 9: QAPage markup or not: a decision guide for question-and-answer pages in Google and AI answers

- Planned time: 2026-11-06T19:00:00+05:30
- Link when live: https://blog.rudrakasturi.com/qapage-markup-or-not-a-decision-guide-for-question-and-answer-pages-in-google-and-ai-answers/
- Description: Google's QAPage markup is for one question with answers people can submit, not for FAQs or how-to pages. A decision table, a minimal example, and what to do for pages that do not qualify.
- Summary box: Google says QAPage structured data is for pages focused on a single question and its answers, where users can submit answers. It is not for FAQs, how-to guides, blog posts or essays. If your page does not fit, skip the markup and write clear questions with answer-first paragraphs instead.
- Sources: [Q&A Page (QAPage) structured data](https://developers.google.com/search/docs/appearance/structured-data/qapage) (Google Search Central)

**Quick answer:** Use QAPage only when the page is one question with answers that visitors can submit. Everything else needs plain, well-written text.
**Best for:** forum owners, community and support sites, and bloggers tempted to add Q&A markup.

## What Google says

From Google's QAPage documentation, checked 6 November 2026: QAPage markup can make a page eligible for a Q&A rich result and may help Google produce a better snippet. Google's rules include:

- Use it only when the focus of the page is a single question and its answers.
- One QAPage per page.
- Users must be able to submit answers.
- Do not use it for FAQs, how-to guides, blog posts or essays, or for advertising.
- Mark up the full question and answer text.

Required properties are `mainEntity` (the Question) on the page, `name`, `answerCount` and at least one `acceptedAnswer` or `suggestedAnswer` on the question, and `text` on each answer.

## Decision table

Our own framework, built from Google's rules.

| Your page | Use QAPage? | Instead |
|---|---|---|
| A forum thread: one question, many member answers | Yes | Mark up the real question and answers |
| A support page where customers add answers | Yes | Same |
| An FAQ page you wrote yourself | No | Clear headings, answer-first text |
| A how-to guide | No | Numbered steps |
| A blog post with several questions | No | Subheadings that are questions |

## A minimal example

This is an illustration, not a template to copy blindly. Every value must match what visitors can see.

```json
{
  "@context": "https://schema.org",
  "@type": "QAPage",
  "mainEntity": {
    "@type": "Question",
    "name": "How long do apples last in the fridge?",
    "answerCount": 1,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Most varieties keep three to six weeks in the crisper drawer."
    }
  }
}
```

## Why this matters now

AI answers increasingly quote human discussion, such as [Reddit threads](/reddit-and-ai-answers-what-the-citation-data-actually-says/). A community page with real answers is something an AI answer can quote. Markup does not guarantee that. Google's own AI guide says no special markup is required.

## What to do

1. Decide which of your pages are truly one question with user answers.
2. Add QAPage only to those, matching the visible text.
3. Test with Google's Rich Results Test and check Search Console for errors.
4. For the rest, write each question as a heading and answer in the first sentence. See [answer-first pages](/write-answer-first-pages-open-with-the-direct-answer-then-the-detail/).
5. Moderate answers. Spam and wrong replies hurt trust.
6. See our [schema decision table](/schema-for-aeo-and-geo-a-decision-table-by-page-type-and-a-ten-point-audit/) for other page types.

Markup does not promise a rich result.

![Decision guide for when to use QAPage markup: one question with user answers, one author answer, many questions, and markup matching visible content](https://blog.rudrakasturi.com/images/qa-page-markup-decision/qa-decision.svg)


---

## Draft 10: Why a grocery store's apple guide ranks on page one for 'types of apples', and what our blog posts can copy

- Planned time: 2026-11-06T11:30:00+05:30
- Link when live: https://blog.rudrakasturi.com/why-a-grocery-stores-apple-guide-ranks-on-page-one-for-types-of-apples-and-what-our-blog-posts-can-copy/
- Description: LaBonne's Markets, a Connecticut grocer, ranks for hundreds of apple searches with one guide. Semrush data, the page's structure, and a five-part pattern any blog post can borrow.
- Summary box: Semrush shows LaBonne's apple guide in position 2 for 'types of apples' (40,500 searches a month) and position 4 for 'apples' (246,000). It is a single-purpose page with a picker chart at the top, a quick-picks list, an identical block for each apple, and buying and storage tips. We can copy the structure, but not the authority behind it.
- Sources: [Types of Apples: A Complete Guide to Choosing the Best at the Market](https://labonnes.com/blog/2026/4/8/types-of-apples-a-complete-guide-to-choosing-the-best-at-the-market) (LaBonne's Markets)

**Quick answer:** One clear question, answered at the top with a chart, then the same short block for every item. That pattern, not length, is what we can learn from this page.
**Best for:** bloggers, publishers and anyone writing a "types of", "best", "which one" guide.

## The data

Semrush US data for LaBonne's apple guide, published 8 April 2026, pulled on 6 November 2026:

| Keyword | Position | Monthly searches | Est. traffic |
|---|---|---|---|
| apples | 4 | 246,000 | 7,380 |
| types of apples | 2 | 40,500 | 2,632 |
| kinds of apples | 3 | 9,900 | 346 |
| sweet apples | 2 | 5,400 | 237 |
| are pink lady apples sweet | 2 | 1,600 | 104 |

Semrush traffic figures are estimates, and positions move with location and time.

## What the page does

1. **One question in the title.** The whole page answers "which apple should I pick".
2. **A picker above the fold.** A sweetness chart sorts apples from tart to sweet, followed by quick picks by purpose: pie, snacks, sauce, cheese boards.
3. **The same block for every apple.** A photo, a sweetness label, two short paragraphs and a "best for" line. It includes honest limits, such as Honeycrisp not holding up as well when baked.
4. **Buyer help.** Four tips for choosing apples and a storage note: three to six weeks in the fridge drawer, one to two weeks at room temperature.
5. **A real voice.** Local references, such as McIntosh having roots in Connecticut, and a store that has served the area since 1962.

## What we cannot claim

Structure is one part of why this page ranks. LaBonne's is also an established local brand with its own audience. Our view is that the structure helps readers decide fast, which is what a good page should do.

## The pattern for our own posts

| Part | Apple guide | Our post |
|---|---|---|
| Question | Which apple? | One question we can name |
| Picker | Sweetness chart | Quick answer and a table |
| Repeated block | One per apple | One per option, same layout |
| Proof | Storage tips, local detail | First-hand tests and data |
| Next step | Recipes, store links | Linked guides |

## What to do

1. Write the one question before the title.
2. Open with the answer and a table, as this page does with its chart.
3. Give every option the same four lines: what it is, best for, one limit, one example.
4. Add proof only you have. See [first-hand evidence](/first-hand-evidence-eight-kinds-you-can-add-to-any-page-and-what-never-to-fake/).
5. Reuse the layout for comparisons. See [comparison pages](/how-to-get-a-comparison-page-x-vs-y-cited-in-ai-answers/) and [recipe posts](/how-to-get-your-recipe-post-found-in-google-ai-mode-and-chatgpt/).
6. Track rankings for the whole keyword family monthly, not one keyword.

![The four-part pattern of a grocery store apple guide: one question, a picker above the fold, the same block for every item, and real-world proof](https://blog.rudrakasturi.com/images/apple-guide-case-study/apple-pattern.svg)
