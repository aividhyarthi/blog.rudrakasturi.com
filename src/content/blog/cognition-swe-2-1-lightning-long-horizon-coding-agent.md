---
title: "Cognition Launches SWE-2.1 Coding Model With 10x Faster Ultrafast Version"
date: 2026-11-27T08:30:00+05:30
description: "Cognition says its SWE-2.1 coding model is better at long software tasks and has an Ultrafast version powered by Cerebras. Here is what the benchmarks mean for developers."
tag: "AI"
tldr: "Cognition released SWE-2.1 on November 24 and says it improves on SWE-2 across several coding benchmarks. Its SWE-2.1 Ultrafast version uses Cerebras infrastructure for a claimed 10-times speed increase. The company also reports stronger cybersecurity benchmark results, making safeguards and human review important parts of the story."
categories: ["AI","Technology","Software Development","Cybersecurity"]
tags: ["Cognition","SWE-2.1","AI Coding Agents","Devin","Cerebras","AI Cybersecurity"]
type: "article"
draft: true
sources:
  - title: "Introducing SWE-2.1"
    url: "https://cognition.com/blog/swe-2-1"
    publisher: "Cognition"
    reviewed: "2026-11-26"
  - title: "Cerebras and Cognition announce SWE-2.1 Ultrafast"
    url: "https://www.cerebras.ai/"
    publisher: "Cerebras"
    reviewed: "2026-11-26"
---

Cognition has released SWE-2.1, a new version of its AI software engineering model. The company says the model is better at handling long coding tasks that can take many minutes or even several hours.

It has also introduced SWE-2.1 Ultrafast, a faster version powered by Cerebras infrastructure. Cognition says it can run at 10 times the speed of the standard model.

The announcement matters because the next stage of AI coding is not just about writing a function from a short instruction. It is about whether an AI agent can understand a large codebase, make changes, run tests, find errors and keep working until a task is complete.

![How a long-running AI coding agent moves from a software issue to tested code](/images/editorial/cognition-swe-2-1-lightning-long-horizon-coding-agent.svg)

*Original editorial illustration based on Cognition's [SWE-2.1 announcement](https://cognition.com/blog/swe-2-1).*

## What is Cognition SWE-2.1?

SWE-2.1 is Cognition's software engineering model, used in its Devin coding agent. Cognition says it is trained with reinforcement learning on Kimi K3 and that it has improved the model's ability to work through long tasks.

A short coding prompt may ask an AI to write one function. A long software engineering task is different. The agent may need to inspect several files, understand how the application works, identify the right place to make a change, run tests, read the errors and try again.

Cognition says it improved its training process so the model can work across tasks that last from a few minutes to many hours.

## What do the SWE-2.1 benchmark results show?

Cognition published results across several coding benchmarks. In its table, SWE-2.1 scored 50.0 on Terminal-Bench 4.1, compared with 24.2 for SWE-2. It scored 41.3 on FrontierCode 2.0, compared with 24.1 for SWE-2. On ProgramBench, the scores were 44.0 and 17.0 respectively. SWE Marathon v1.2 recorded 54.9 for SWE-2.1 and 32.5 for SWE-2.

| Benchmark | SWE-2.1 | SWE-2 |
|---|---:|---:|
| Terminal-Bench 4.1 | 50.0 | 24.2 |
| FrontierCode 2.0 | 41.3 | 24.1 |
| ProgramBench | 44.0 | 17.0 |
| SWE Marathon v1.2 | 54.9 | 32.5 |

These are results published by Cognition. The company also explains that different models may use different evaluation tools and time limits. They are useful for understanding the company's progress, but they are not proof that SWE-2.1 will outperform every other coding model on every real project.

## What is SWE-2.1 Ultrafast?

Cognition says its Ultrafast version uses Cerebras infrastructure to deliver the same model at 10 times the speed.

Why does speed matter? An AI coding agent does not always produce the final answer in one response. It may read code, call a tool, run a test, inspect an error and repeat the process. Faster model responses can reduce waiting time during these loops.

Cognition says this can turn hours of investigation and iteration into minutes during an urgent software fix or security incident. That is the company's claim. Actual completion time still depends on the codebase, the tools, test duration, task complexity and how much human review is needed.

## Why are the cybersecurity results important?

One of the most notable parts of Cognition's announcement is the model's performance on cybersecurity tests.

Cognition reports an 80% score on ExploitBench and 27.3% success on ExploitGym. It says the model can find vulnerabilities and carry out parts of a multi-step exploitation process during long autonomous runs.

This is a dual-use capability. Security teams can use AI to find weaknesses before attackers do. But a model that can identify and exploit vulnerabilities also needs safeguards to prevent unauthorised use.

Cognition says it tested its training environment through red teaming and continuous safety monitoring. It also says its model discovered new weaknesses in the sandbox during training, which alerted its researchers.

The company says it is making a more permissive version, SWE-2.1 Cyber, available through Devin Security for defensive work. These are Cognition's own descriptions of its safety and access controls.

## What does this mean for software developers?

AI coding tools are moving from autocomplete towards delegated work. Developers may increasingly assign a well-defined issue to an agent and ask it to return a tested change.

That does not remove the developer's responsibility. The person using the tool still needs to define the task, control access, review the changes and decide whether the code is safe to merge.

A useful test is not how many lines of code the model writes. It is whether the model completes the task correctly, whether tests pass, how many corrections are needed and how much time the developer spends reviewing the result.

For more context, read our [AI coding agents and the productivity gap](/ai-coding-agents-productivity-gap-commits-projects-releases-nber/) and our [AI vulnerability disclosure policy explainer](/anthropic-ai-vulnerability-disclosure-30-day-policy-cybersecurity/).

## What should engineering teams measure before adopting it?

| Measure | What to record |
|---|---|
| Task completion | Percentage of assigned issues completed correctly |
| Test quality | Existing tests passed and new tests added |
| Review effort | Minutes spent checking and correcting the output |
| Time to completion | Total time from task assignment to accepted change |
| Cost | Model, tool and infrastructure cost per accepted task |
| Safety | Unauthorised file access, risky commands and scope violations |

Start with a small group of low-risk tasks in a separate repository. Do not give an agent broad production access simply because it performs well in a benchmark.

## Frequently asked questions about Cognition SWE-2.1

### What is SWE-2.1?

SWE-2.1 is Cognition's AI software engineering model, designed to handle longer coding and engineering tasks. It is used in the company's Devin coding agent.

### Is SWE-2.1 Ultrafast 10 times faster?

Cognition says its Ultrafast version runs the same model at 10 times the speed using Cerebras infrastructure. Real task completion time will also depend on tools, tests and the work being performed.

### Is SWE-2.1 better than other coding models?

Cognition reports improvements over its earlier SWE-2 model on several benchmarks. The published results do not prove it is best for every programming language, codebase or engineering task.

### Can SWE-2.1 find security vulnerabilities?

Cognition reports results on ExploitBench and ExploitGym, which test vulnerability discovery and exploitation. These capabilities can support security work, but they also require strict controls and authorised use.

### Should developers let AI agents merge code automatically?

Not without a carefully tested process. Teams should review code changes, run tests and control the agent's permissions before merging anything into production.

## The next coding race is about completing the work

SWE-2.1 is part of a wider shift from AI that suggests code to AI that attempts to complete engineering tasks. Faster models may make these workflows more practical, but speed alone is not the measure of success.

For development teams, the useful question is whether an agent can complete a real task safely, reliably and at a lower total cost than the current workflow.

*Editorial note: Benchmark scores, speed comparisons and safety claims in this article are attributed to Cognition. They are company-published results and should be tested against independent evaluations and real engineering workloads.*
