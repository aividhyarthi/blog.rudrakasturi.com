# Drafts 7 to 10 for review (apple format). Not live.


---

## Draft 7: How to write a 'which one should I pick' guide: the format behind a grocery store's apple page

Planned time: 2026-11-06T11:30:00+05:30

**Quick answer:** put the choice at the top, give every option the same short block, and add the practical tips people need after they choose.
**Best for:** anyone writing a "types of", "best" or "which one" page.

Search for "types of apples" and one of the pages near the top is a guide from LaBonne's Markets, a grocery chain in Connecticut that has been open since 1962. It was published on 8 April 2026. The topic has plenty of demand: Semrush's US data shows about 40,500 searches a month for "types of apples" and about 246,000 for "apples".

The page is worth studying because of how it is built.

## What the page does

![The sweetness chart and quick picks from LaBonne's apple guide, sorting apples from tart to sweet and by use: pie, snacking, applesauce, cheese boards](https://blog.rudrakasturi.com/images/apple-guide-case-study/sweetness-chart-quick-picks.png)

*Source: [LaBonne's Markets](https://labonnes.com/blog/2026/4/8/types-of-apples-a-complete-guide-to-choosing-the-best-at-the-market), Types of Apples guide.*

## Pick your starting point

| If you are writing... | Put this at the top |
|---|---|
| A "types of" guide | A chart that sorts the options on the one scale readers care about |
| A "best X for Y" page | Quick picks grouped by use |
| A "which one should I choose" page | A short table: situation, then the option |

## The five parts

**1. One question, in the title.**
The title is "Types of Apples: A Complete Guide to Choosing the Best at the Market". The whole page answers one question, which apple to pick.
*Do this:* write the question first. If the page needs two questions, it is two pages.

**2. A chart before any long text.**
Apples are sorted from tart to sweet into four groups: very tart, balanced, mildly sweet and very sweet. Directly under it is a "Quick picks" list: pie and baking, snacking and lunch boxes, applesauce, cheese boards.
*Do this:* pick the one scale your readers use to decide and sort everything on it.

**3. The same block for every option.**
Each apple gets a photo, a sweetness label, two short paragraphs and a "Best for" line.

![The Honeycrisp block: photo, Balanced (sweet-tart) label, a description and Best for: snacking, cheese boards, salads](https://blog.rudrakasturi.com/images/apple-guide-case-study/honeycrisp-block.png)

*Source: [LaBonne's Markets](https://labonnes.com/blog/2026/4/8/types-of-apples-a-complete-guide-to-choosing-the-best-at-the-market).*

*Best for:* readers who skim. They find their option in seconds.
*Watch out:* it only works if each block includes a limit. Honeycrisp is "best eaten fresh" and does not hold up as well when baked. Red Delicious is "more of a nostalgic apple than a culinary workhorse".

**4. Tips for what happens next.**
The guide ends with four things to check when buying (firmness, skin, smell, weight) and how to store apples: three to six weeks in the fridge drawer, one to two weeks at room temperature.
*Do this:* answer the question the reader has after they choose.

**5. A real voice and a next step.**
The McIntosh block says it is a classic New England apple with deep roots in Connecticut. The page links to recipes, the weekly flyer and online shopping.
*Do this:* add something only you know, and tell the reader where to go next.

## Using it on your own topic (example)

Suppose you are writing "Which schema markup does my site need?"

| Part | Your page |
|---|---|
| Chart | Site types: blog, online store, local business, recipe site |
| Quick picks | Blog: Article. Store: Product. Local business: LocalBusiness. Recipes: Recipe |
| Block per option | What it is, best for, one limit, one example |
| Tips | How to test it, the common mistakes |
| Next step | Link to the full guide for each type |

## What to do

1. Write the one question your page answers.
2. Build the chart or quick-picks table first, then the text.
3. Give each option the same block: what it is, best for, one limit, one example.
4. Add the tips a reader needs after they choose.
5. Add proof only you have: your photos, your tests, your numbers.
6. End with a next step.


---

## Draft 8: How to set a Target CPA in ChatGPT Ads: pick a bidding strategy, then a realistic number

Planned time: 2026-11-06T14:00:00+05:30

**Quick answer:** choose the strategy that matches your goal, fix your tracking, then set a target near what you actually pay today.
**Best for:** advertisers moving ChatGPT Ads campaigns off Max Bid and Max CPC. The dates are in [our news post](/chatgpt-ads-target-cpa-and-target-cpc-start-on-9-november-and-max-bid-and-max-cpc-retire-on-1-january-2027/).

## Pick your strategy

| What you want | Use | OpenAI's description |
|---|---|---|
| The most results from your budget, no target | Intelligent bidding | The system adjusts bids and delivery for your desired outcome within budget. You do not manage bids. |
| An average cost per purchase or lead | Target CPA (conversion campaigns) | The system works toward your average cost per conversion. |
| An average cost per click | Target CPC (click campaigns) | The system bids above or below your target in each auction and aims for your average. |
| Old setting | Max Bid or Max CPC | Retire on 1 January 2027. |

## Setting a Target CPA in four steps

![OpenAI Help Center page section Set a realistic target, with advice to review recent actual CPA and an example of $400 spend and 10 purchases](https://blog.rudrakasturi.com/images/chatgpt-ads-target-cpa-worksheet/help-center-set-a-realistic-target.png)

*Source: OpenAI Help Center, [Bidding strategies and how pricing works in ChatGPT Ads](https://help.openai.com/en/articles/20001634-bidding-strategies-and-how-pricing-works-in-chatgpt-ads).*

**Step 1: Check the signal.**
*What it is:* the conversion events reaching ChatGPT Ads. Setup alone does not prove they arrive.
*Do this:* confirm the OpenAI Pixel or the Conversions API is sending your chosen event to the data source linked to the campaign. Read the Event Quality Score warnings for missing matching information, delays and repeated events.
*Watch out:* OpenAI says weak or missing signals can reduce delivery and leave budget unspent.

**Step 2: Find your actual CPA.**
*What it is:* what you really pay now, for the same conversion event.
*Do this:* use a steady period and allow for reporting delay. OpenAI's example: $400 spent and 10 purchases is a $40 CPA.

**Step 3: Set the target.**
*What it is:* the average you want the system to aim for.
*Do this:* start from your actual CPA and what a conversion is worth to you. A target below recent performance may restrict delivery.
*Watch out:* a $20 target on a $40 result does not mean the system can deliver purchases at half the cost.

**Step 4: Review as it learns.**
*What it is:* checking that the target and the results agree.
*Do this:* look at spend, results and average cost together, and adjust gradually. Where an audience multiplier is available, remember it changes the target for that group: $50 with a 1.2 times new-customer multiplier gives that group a $60 target.
*Watch out:* actual costs can be higher or lower than the target, and a very tight target can leave budget unspent.

## Before you launch: a landing page check

This is my checklist, not OpenAI's.

- The page matches what the ad promised.
- The conversion fires once, and only on success.
- The page loads fast on a phone.
- Price, delivery and returns are easy to find.

## What to do

1. Pick the strategy from the table.
2. Test your conversion event with a real purchase or lead.
3. Work out your actual CPA for the same event.
4. Set the target near it, not at half of it.
5. Review weekly and change it in small steps.
6. Read [what advertisers should know before they spend](/chatgpt-ads-what-advertisers-should-know-before-they-spend/) and [how to track AI referrals](/how-to-track-ai-referral-traffic-in-analytics-a-four-step-setup-and-its-limits/).

Your bidding goal and your billing are separate settings, and OpenAI does not guarantee results.


---

## Draft 9: More pages do not mean more AI citations: which pages to keep, merge or cut

Planned time: 2026-11-06T16:30:00+05:30

**The myth:** if AI answers cite pages, then 500 pages will get cited more than 50.
**The answer:** no. Google's spam policies point the other way.

**Best for:** site owners, SEOs and agencies tempted to mass-produce pages.

## What Google's spam policy says

**Scaled content abuse** is when many pages are generated for the primary purpose of manipulating search rankings. Google's examples include using generative AI to produce many pages that add nothing for users, scraping feeds or search results to build pages, stitching together content from other pages without adding value, and creating several sites to hide the scale.

**Doorway abuse** is when sites or pages are created to rank for specific, similar searches. The examples include pages for different cities that funnel people to one page, and substantially similar pages.

The test is purpose. Having many pages is allowed. Having many pages mainly to rank is not.

## Keep, merge or cut

| Your pages | Verdict |
|---|---|
| One page per real question, each with its own answer | Keep |
| Near-identical pages with only a city or name swapped | Merge into one |
| Many AI-written summaries of the same topic | Cut or merge |
| Pages built from other sites' text with nothing added | Cut |
| Pages that only point readers to another page | Cut |

## The page types

**Near-identical pages with a place or name swapped**
*What it is:* the same four paragraphs with a different city in the title.
*Google's view:* this matches its doorway abuse examples.
*Do instead:* one strong page that covers the areas you serve, with real details for each.

**Mass AI summaries of the same topic**
*What it is:* many AI-written pages on one subject, each a little different.
*Real example:* Saul Westbrook of Peripheral found over 180 English Facebook Answers pages on padel tennis, with near-identical titles. He says Facebook has not been penalised so far, and that it has its own supply of real posts and huge authority. Most sites have neither. Read [the full case](/facebook-answers-millions-of-ai-pages-is-it-scaled-content-abuse-what-google-says-and-what-your-site-should-learn/).

![Five Google results from facebook.com/fb-answers, all about padel tennis, with near-identical titles](https://blog.rudrakasturi.com/images/myth-more-pages-more-citations/padel-pages.png)

*Source: [Peripheral](https://www.peripheralcreative.com/news/facebook-answers-ai-generated-pages), a selection of Facebook Answers page titles on padel tennis in Google results.*

*Do instead:* one page per distinct question, with first-hand detail.

**Pages stitched from other sites**
*What it is:* summaries of other people's articles with nothing of your own.
*Google's view:* a named example of scaled content abuse.
*Do instead:* add your own test, data or experience, or do not publish.

**One page per real question**
*What it is:* each page answers something no other page on your site answers.
*Verdict:* keep. This is the page type AI answers and searchers both want. See [first-hand evidence](/first-hand-evidence-eight-kinds-you-can-add-to-any-page-and-what-never-to-fake/).

## What to do

1. List your pages by topic and mark the near-duplicates.
2. Merge weak pages into one stronger page and use a 301 redirect. See [which redirect to use](/which-redirect-should-you-use-301-302-meta-refresh-or-javascript/).
3. Stop publishing pages that differ only by a city or a name.
4. Add something only you have to every page you keep.
5. Check your whole site against our [spam policy audit](/google-spam-policies-in-plain-english-a-self-audit-for-your-site-in-four-groups/).

No one can promise you a citation, whatever the number of pages.


---

## Draft 10: QAPage markup or not: which question-and-answer pages qualify, and what to do for the rest

Planned time: 2026-11-06T19:00:00+05:30

**Quick answer:** use QAPage only when the page is one question and visitors can add their own answers. For everything else, write clear questions and answer-first text.
**Best for:** forum and community owners, support sites, and bloggers who want to add question-and-answer markup.

## Which page are you?

| Your page | QAPage? | Do instead |
|---|---|---|
| A forum thread: one question, many member answers | Yes | Mark up the real question and answers |
| A support page where customers add answers | Yes | Same |
| An FAQ page you wrote yourself | No | Headings and answer-first text |
| A how-to guide | No | Numbered steps |
| A blog post with several questions | No | Question subheadings |

![Decision guide for when to use QAPage markup: one question with user answers, one author answer, many questions, and markup matching visible content](https://blog.rudrakasturi.com/images/qa-page-markup-decision/qa-decision.svg)

## What Google says

QAPage markup can make a page eligible for a Q&A rich result in Google Search, and it can help Google show a better snippet. These are Google's rules:

- The page must be focused on a single question and its answers.
- Only one QAPage per page.
- Visitors must be able to submit answers.
- Do not use it for FAQs, how-to guides, blog posts or essays, or for advertising.
- Mark up the full question and answer text.
- Use the `comment` property for comments, not `Answer`.

## The page types

**A forum thread**
*What it is:* one question, with replies from members.
*QAPage?* Yes. This is what the markup is for.
*Do this:* mark up the question and each answer exactly as visitors see them.

**A support page where customers answer**
*What it is:* a question from one customer and answers from others or from staff.
*QAPage?* Yes, if visitors can submit answers.

**An FAQ page you wrote yourself**
*What it is:* a list of questions with answers that only you provide.
*QAPage?* No. Google says QAPage is not for FAQs.
*Do instead:* write each question as a heading and put the answer in the first sentence. See [answer-first pages](/write-answer-first-pages-open-with-the-direct-answer-then-the-detail/).

**A how-to guide or blog post**
*What it is:* steps, or an article that covers several questions.
*QAPage?* No.
*Do instead:* numbered steps, or question subheadings.

## A minimal example

Every value must match what visitors can see on the page.

```json
{
  "@context": "https://schema.org",
  "@type": "QAPage",
  "mainEntity": {
    "@type": "Question",
    "name": "How do I reset my router?",
    "answerCount": 1,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Hold the reset button for ten seconds, then wait for the lights to settle."
    }
  }
}
```

The required properties are `mainEntity` (the Question) on the page, then `name`, `answerCount` and at least one `acceptedAnswer` or `suggestedAnswer` on the question, and `text` on each answer.

## Why this matters now

AI answers increasingly quote real people. Our post on [Google's AI Overview quoting Reddit for movie reviews](/google-ai-answers-now-quote-reddit-for-movie-reviews-what-it-means-for-ratings-and-how-to-read-them/) shows how a forum thread ends up in the answer. A community page with real answers gives them something to quote.

## What to do

1. List the pages on your site that really are one question with visitor answers.
2. Add QAPage markup only to those, matching the visible text.
3. Test it with Google's Rich Results Test and watch Search Console for errors.
4. For every other page, use clear question headings and answer-first paragraphs.
5. Moderate answers. Wrong or spam replies hurt the page.
6. See our [schema decision table](/schema-for-aeo-and-geo-a-decision-table-by-page-type-and-a-ten-point-audit/) for other page types.

Google does not promise a rich result, even when the markup is correct.
