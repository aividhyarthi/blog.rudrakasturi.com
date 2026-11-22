---
title: "The AI Compute Race Has a Cash Problem. Who Can Afford to Keep Building?"
date: 2026-11-23T07:30:00+05:30
description: "François Chollet points to rising GPU prices and tight memory supply. Elon Musk warns that delays in making compute productive could create hundreds of billions in extra working-capital needs. We examine the infrastructure bottleneck and compare the latest cash reserves of major companies."
tag: "ai"
categories: ["AI","Technology","Business","Semiconductors","Enterprise AI"]
tags: ["AI Infrastructure","AI Capex","GPU","HBM","DRAM","Working Capital","Alphabet","NVIDIA","Amazon","Microsoft","Berkshire Hathaway"]
type: "article"
tldr: "The next phase of the AI buildout is not only a race to buy GPUs. Companies must also secure HBM and DRAM, build data centres, obtain power, install cooling, connect clusters and make them reliable enough to earn revenue. François Chollet argues that compute demand and memory shortages remain strong; Elon Musk warns that delays between paying for infrastructure and earning revenue could create hundreds of billions of dollars in additional working-capital needs. Latest reported liquid cash and short-term investment balances show Berkshire Hathaway with about $372.8 billion and Alphabet with about $265.1 billion. Alphabet is the largest in this comparison among the major AI infrastructure companies, but cash balances alone do not reveal who can fund future commitments most comfortably."
sources:
  - title: "François Chollet's post on AI compute demand and memory supply"
    url: "https://x.com/fchollet"
    publisher: "François Chollet on X"
    reviewed: "2026-11-22"
  - title: "Elon Musk's post on compute deployment and working capital"
    url: "https://x.com/elonmusk"
    publisher: "Elon Musk on X"
    reviewed: "2026-11-22"
  - title: "HBM Supply Constraints Persist, 2027 Price Outlook Revised Upward"
    url: "https://www.trendforce.com/presscenter/news/20260929-13255.html"
    publisher: "TrendForce"
    reviewed: "2026-11-22"
  - title: "Alphabet 2026 third-quarter Form 10-Q"
    url: "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000084/goog-20260930.htm"
    publisher: "US Securities and Exchange Commission"
    reviewed: "2026-11-22"
  - title: "Berkshire Hathaway 2026 third-quarter Form 10-Q"
    url: "https://www.sec.gov/Archives/edgar/data/1067983/000119312526452412/brka-20260930.htm"
    publisher: "US Securities and Exchange Commission"
    reviewed: "2026-11-22"
  - title: "Amazon third-quarter 2026 results"
    url: "https://ir.aboutamazon.com/files/doc_earnings/2026/q3/earnings-result/AMZN-Q3-2026-Earnings-Release.pdf"
    publisher: "Amazon"
    reviewed: "2026-11-22"
  - title: "Meta third-quarter 2026 results"
    url: "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Third-Quarter-2026-Results/default.aspx"
    publisher: "Meta"
    reviewed: "2026-11-22"
  - title: "Microsoft 2026 first-quarter Form 10-Q"
    url: "https://www.sec.gov/Archives/edgar/data/789019/000119312526436133/msft-20260930.htm"
    publisher: "US Securities and Exchange Commission"
    reviewed: "2026-11-22"
  - title: "NVIDIA third-quarter fiscal 2027 results"
    url: "https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-Financial-Results-for-Third-Quarter-Fiscal-2027/default.aspx"
    publisher: "NVIDIA"
    reviewed: "2026-11-22"
  - title: "Elon Musk warns AI industry may face a severe cash shortfall next year"
    url: "https://www.hindustantimes.com/world-news/us-news/elon-musk-warns-ai-boom-may-face-hundreds-of-billions-in-cash-crunch-as-chip-demand-soars-101795312429566.html"
    publisher: "Hindustan Times"
    reviewed: "2026-11-22"
---

The artificial intelligence industry has spent the last few years asking a simple question: who can build the biggest model?

The next question may be much less glamorous. Who can pay for the infrastructure, keep it running, and wait long enough for it to generate revenue?

Two posts on X have brought that question into focus. AI researcher François Chollet argued that the AI buildout may not be over, pointing to rising GPU spot prices and tight supply of high-bandwidth memory (HBM) and DRAM. Elon Musk responded with a different concern. Getting large amounts of compute installed, cooled and working reliably is difficult, he said. If companies pay for infrastructure months before it becomes productive, the industry could need hundreds of billions of dollars in additional working capital.

The two arguments are connected. Demand for compute can remain strong while the companies supplying it face a financing and execution problem.

This is the story behind the next AI infrastructure bottleneck.

## The argument from Chollet: compute demand has not peaked

Chollet's post frames the current market debate as a choice. Either the AI buildout is nearing its end and demand for compute has peaked, or the recent weakness in some AI-related stocks could be an opportunity for investors who believe demand will continue.

His supporting points include rising GPU spot prices, difficulty securing capacity and tight HBM and DRAM supply. He also argues that new model generations unlock additional use cases, increasing the need for compute.

These are his market observations and investment interpretation, not a formal industry forecast. The statement that HBM and DRAM production is effectively sold out through 2029 should be treated as Chollet's claim rather than an independently established fact for every supplier and product category.

There is, however, independent evidence that memory supply is under pressure. TrendForce said in September that AI server demand was keeping HBM and conventional DRAM in competition for limited advanced-process and wafer capacity. It expected supply constraints to persist through 2027 and raised its forecast for blended HBM average selling prices in 2027 by 121% year on year.

That matters because an AI accelerator is not just a GPU. It needs high-bandwidth memory, advanced packaging, networking, power delivery and a functioning data-centre environment. If one critical component is unavailable, the entire system can be delayed.

## Musk's warning: buying compute is not the same as earning from it

Musk's reply shifts the discussion from demand to cash flow.

A company may pay for chips, servers, land, buildings, power equipment and network infrastructure well before the resulting compute capacity is ready to serve customers reliably. The company then has money tied up in assets and projects that are not yet generating the expected revenue.

Musk's point is that even a delay of a few months, repeated across a large industry, could create a very large working-capital requirement.

He did not publish a calculation behind the hundreds-of-billions figure, identify which companies would face the biggest shortfall or specify how much each would need to raise. It is a warning and a forecast, not a confirmed industry funding gap.

But the mechanism is real and easy to understand.

Imagine a data-centre operator that pays for GPUs in January. The equipment arrives in March. The building's electrical connection is delayed until May. Cooling and networking tests continue through June. The cluster becomes commercially reliable in July, and customers begin paying for capacity after that.

The company has been funding the project for months before it can earn the intended revenue. If the operator has borrowed to pay for the equipment, interest and other financing costs continue during the delay.

At a small scale this is a project-management problem. Across hundreds of billions of dollars of infrastructure spending, it becomes a financing problem.

## The hidden AI infrastructure chain

A working AI data centre needs several things to come together.

1. **Accelerators:** GPUs or specialised AI chips must be available and delivered.
2. **Memory:** HBM and other DRAM components must be available in the right quantities.
3. **Buildings:** Data-centre space, racks and physical infrastructure must be ready.
4. **Power:** Electricity supply, substations, transformers and backup systems must support the load.
5. **Cooling:** Liquid or other advanced cooling systems must manage the heat generated by dense computing equipment.
6. **Networking:** High-speed connections must allow thousands of processors to work together.
7. **Reliability:** The full system must be tested, maintained and kept available before customers can depend on it.

A delay in one part can hold up the revenue from the entire investment.

That is why the AI infrastructure race is not simply a contest to purchase the largest number of GPUs. It is a race to turn capital expenditure into productive, billable compute.

## Who has the largest cash pile?

The balance sheets provide useful context. The comparison below uses the latest reported cash, cash equivalents and short-term liquid securities available in company filings as of November 22, 2026.

![Comparison of liquid cash and short-term securities held by Berkshire Hathaway and major AI infrastructure companies](/images/ai-compute-cash-pile-nov-2026.svg)

| Company | Liquid cash and short-term securities | Reporting date |
|---|---:|---|
| Berkshire Hathaway | $372.8 billion | September 30, 2026 |
| Alphabet | $265.1 billion | September 30, 2026 |
| Amazon | $114.2 billion | September 30, 2026 |
| Meta | $82.4 billion | September 30, 2026 |
| Microsoft | $64.5 billion | September 30, 2026 |
| NVIDIA | $53.5 billion | October 25, 2026 |

Berkshire Hathaway has the largest liquid reserve in this comparison, with cash and US Treasury bills of approximately $372.8 billion. It is not an AI infrastructure operator, so it is a useful reference point rather than a direct competitor in the AI buildout.

Among the major AI infrastructure companies listed here, Alphabet has the largest reported balance, at approximately $265.1 billion in cash, cash equivalents and short-term marketable securities.

The figures are not perfectly identical accounting categories. Berkshire's figure includes US Treasury bills. Alphabet, Amazon, Meta and Microsoft figures include cash and short-term marketable securities or investments as reported. NVIDIA's figure includes cash and marketable debt securities but excludes marketable equity securities. Reporting dates also differ because companies have different fiscal calendars.

The chart is therefore a comparison of reported liquid resources, not a ranking of cash that can be freely spent on AI projects. It also does not include every private AI company or every global corporation.

## The biggest cash balance does not automatically mean the lowest risk

Alphabet's $265.1 billion balance looks substantial. But its third-quarter earnings call also disclosed $924 billion in future purchase commitments and $152 billion in pre-commencement leases and other obligations. The company said these are maximum contractual amounts and that variable pricing and volume flexibility could result in lower spending.

That is a useful reminder: cash should be read alongside commitments.

Amazon reported $55.8 billion in cash and cash equivalents and $58.4 billion in marketable securities at September 30. It also reported a trailing twelve-month free cash flow outflow of $42.4 billion, primarily because of increased property and equipment purchases related to AI. Amazon said it expected 2026 cash capital expenditure of approximately $220 billion.

Meta reported $82.4 billion in cash, cash equivalents and marketable securities at September 30. Its filing also showed $85.8 billion in capital expenditure during the first nine months of 2026, including property and equipment purchases and principal payments on finance leases.

Microsoft reported $64.5 billion in cash, cash equivalents and short-term investments at September 30. NVIDIA's latest quarter ended October 25 and showed $29.1 billion in cash, $24.4 billion in marketable debt securities and a separate $44.2 billion in marketable equity securities. This article excludes the equity securities from its liquid cash comparison to keep the measure closer to cash and debt instruments.

These figures show why one balance-sheet number cannot answer who is best positioned to finance the AI race. A company with a smaller cash balance may generate more operating cash, have lower commitments or have easier access to debt markets. Another company may have a larger reserve but also have much larger infrastructure obligations.

## The real metric: time from capital payment to productive compute

A useful way to understand the risk is to measure the time between paying for infrastructure and earning revenue from it.

Call this the **Capital-to-Compute Revenue Gap**.

For every major infrastructure project, track:

- Date of advance payment or equipment purchase.
- Date chips and servers are delivered.
- Date power and cooling become available.
- Date the cluster passes reliability testing.
- Date the first customer workload is billed.
- Date cash is actually collected.

The number of days between the first major cash outflow and the first meaningful customer collection is the gap.

A longer gap means more working capital is tied up. If a company is funding several projects at once, the gaps overlap and the cash requirement grows.

A simple way to estimate the financing burden is:

**Working capital tied up = average monthly project cash outflow × months before cash collection**

For example, if a company spends $10 billion a month on a project pipeline and it takes four months for that capacity to become billable and collect cash, roughly $40 billion may be tied up across that pipeline, before considering customer advances, supplier credit, financing arrangements or other offsets.

This is an illustrative calculation, not an estimate of any named company's actual requirement.

## What happens if compute demand stays high but delivery is delayed?

There are several possible outcomes.

**First, companies with strong balance sheets can keep investing.** Alphabet, Amazon, Microsoft, Meta and NVIDIA have substantial liquidity and operating cash generation. Their ability to fund infrastructure will depend on future cash flows, debt, commitments and returns on investment, not only their latest cash balance.

**Second, companies may use more external financing.** Debt, bonds, equity issuance, joint ventures, customer prepayments and long-term capacity contracts can spread the cost. But financing becomes more expensive if investors begin to question whether the capacity will earn an adequate return.

**Third, infrastructure operators may prioritise utilisation over expansion.** A data centre that is powered and connected but not fully loaded still carries operating and financing costs. Getting more revenue from existing compute can become as important as buying more chips.

**Fourth, suppliers may gain pricing power.** If GPU, HBM, DRAM, power equipment or advanced cooling capacity remains constrained, suppliers may capture a larger share of the economics. That can raise the cost for the companies building AI infrastructure.

## What should Indian businesses learn from this?

India's AI opportunity is often discussed in terms of models, applications and talent. But the same infrastructure economics apply to Indian cloud providers, data-centre developers, telecom operators and enterprises planning large AI deployments.

A company does not need to own a giant data centre to face this issue. It may sign a long-term cloud contract, reserve GPU capacity or commit to a minimum spend before its own AI products have predictable customer revenue.

Before making such commitments, Indian businesses should ask:

1. What is the minimum capacity commitment, and when does billing begin?
2. Is the capacity guaranteed, or is delivery dependent on power, networking and hardware availability?
3. What happens if the service is delayed or the workload cannot be deployed?
4. Can the business scale capacity up or down without large penalties?
5. How much revenue must the AI product generate to cover compute, people, support and financing costs?
6. Is there a fallback provider or architecture if one supplier cannot deliver?

The goal is not to avoid AI infrastructure. It is to avoid paying for capacity that cannot yet create business value.

## Is the AI buildout over? The evidence does not support a simple answer

Chollet's post argues that compute demand remains strong. TrendForce's research supports the view that HBM supply remains constrained and that memory costs could rise. Musk's reply highlights a different constraint: even when demand exists and capital is available, turning equipment into reliable revenue-generating capacity takes time.

These points can all be true at once.

The industry may continue to need more compute while some companies struggle with project delays, financing costs or the economics of underused capacity. Strong demand does not guarantee that every data centre will earn an attractive return. Equally, a difficult funding cycle does not prove that demand for AI has peaked.

The next phase of the AI race will be judged by a more demanding set of questions:

- How much compute can a company actually bring online?
- How quickly can it make that compute reliable?
- How much of the capacity is being used?
- How much revenue does each unit of compute generate?
- How long does cash remain tied up before it comes back?

The winners will not necessarily be the companies that announce the biggest GPU orders. They will be the companies that turn those orders into reliable services, paying customers and sustainable cash flows.

**Source and reporting note:** This article draws on public posts by François Chollet and Elon Musk, TrendForce research, and the latest company financial filings cited above. The working-capital shortfall described by Musk is his forecast, not a verified industry-wide funding requirement. The claim that memory production is sold out through 2029 is attributed to Chollet and should not be read as a confirmed forecast for every supplier or memory product. We are reporting what these sources have shared and are not involved in their research, financial reporting or company operations. Please consult the original sources for full details and subsequent updates.
