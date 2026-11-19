---
title: "AI coding agents increase coding activity, but shipped software grows much less, study finds"
date: 2026-11-19T07:45:00+05:30
description: "An NBER working paper analysing more than 500,000 GitHub developers finds that AI coding activity gains shrink as work moves from commits to projects and actual software releases."
tag: "AI Research"
tldr: "An NBER working paper analysing more than 500,000 GitHub developers finds that AI coding activity gains shrink as work moves from commits to projects and actual software releases."
sources:
  - title: "Writing Code vs. Shipping Code: Productivity Effects Across Generations of AI Coding Tools"
    url: "https://www.nber.org/papers/w35275"
    publisher: "National Bureau of Economic Research"
categories: ["AI News", "AI Research", "Software Development"]
tags: ["AI coding agents", "developer productivity", "NBER", "GitHub", "software engineering"]
draft: false
---

AI coding tools can increase the amount of code developers produce, but those gains become much smaller when measured by completed projects and software releases. That is the central finding of a National Bureau of Economic Research working paper, “Writing Code vs. Shipping Code: Productivity Effects Across Generations of AI Coding Tools”.

The paper, by Mert Demirer, Leon Musolff and Liyuan Yang, uses data covering more than 500,000 GitHub developers and their AI usage telemetry. It was issued in May 2026 and revised in September 2026. It is a working paper, so its findings should be treated as research evidence rather than a final universal estimate for every engineering team.

## What did the researchers find?

The authors report that autocomplete tools, interactive coding agents and autonomous coding agents were associated with cumulative increases in coding activity, measured through commits, of 30%, 180% and 240% respectively.

But the largest figure does not carry through to finished output. For autonomous coding agents, the reported 240% increase in commits fell to an 80% increase in the number of projects and a 30% increase in actual releases.

The researchers describe this as a weak-link effect. AI can speed up one part of software development, but the overall process still depends on requirements, architecture, testing, code review, integration and release management.

## Why more code does not automatically mean more productivity

A commit records a change to a code repository. It does not prove that the change is useful, secure, accepted by users or shipped in a product.

AI can help a developer produce a first draft quickly. The team still has to check whether it works, fits the system and creates problems elsewhere. In a large organisation, approvals, dependencies and release processes can also slow delivery.

The study's results do not mean AI coding tools are ineffective. They show why measuring only code volume can give an incomplete picture.

## A better way for engineering leaders to measure AI value

Track a small set of measures together:

| Measure | What it tells you |
|---|---|
| Accepted changes | Whether generated work passes review |
| Project completion | Whether work reaches a usable milestone |
| Release frequency | Whether value reaches users |
| Defect and rollback rate | Whether speed harms reliability |
| Review and rework time | How much human effort is still required |
| Cost per successful release | Whether the economics improve |

Compare these measures before and after introducing agents, using similar types of work. Avoid ranking engineers by token usage or raw commit counts.

## What the research means

The next stage of AI-assisted software development is not simply about making agents write more code. It is about redesigning the full delivery process so that faster generation does not create a larger queue for review, testing and integration.

**Bottom line:** AI coding agents can sharply increase coding activity, but the increase in shipped software is much smaller. Businesses should measure completed, reliable releases rather than celebrate code volume alone.
