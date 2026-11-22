---
title: "AWS Wants AI Coding Agents to Optimise AI Infrastructure. How Its New KV Caching Skill Works"
date: 2026-11-22T08:15:00+05:30
description: "AWS has introduced a distributed KV caching skill for coding agents, helping teams assess, configure and troubleshoot shared caching for self-hosted LLMs. Here is what it does and when the claimed savings may apply."
tag: "ai"
categories: ["AI","Technology","Cloud Computing"]
tags: ["AWS","Distributed KV Caching","LLM Inference","Claude Code","OpenAI Codex","AI Infrastructure","GPU Costs"]
type: "article"
draft: true
tldr: "AWS has added a distributed key-value caching skill to the Agent Toolkit for AWS. It lets compatible coding agents assess whether a self-hosted LLM workload can benefit from a shared cache, estimate savings using workload traces, guide setup and help troubleshoot. AWS reports potential reductions of up to 40% in inference cost and 80% in time to first token for its distributed caching approach, but the results depend on prompt repetition, cache hit rate, model serving setup and infrastructure cost. The skill is not a universal cost-reduction switch."
sources:
  - title: "Cut self-hosted LLM cost and latency with the distributed KV caching agent skill"
    url: "https://aws.amazon.com/blogs/machine-learning/cut-self-hosted-llm-cost-and-latency-with-the-distributed-kv-caching-agent-skill/"
    publisher: "Amazon Web Services"
    reviewed: "2026-11-22"
  - title: "Amazon ElastiCache now supports distributed KV caching for self-hosted LLM inference"
    url: "https://aws.amazon.com/about-aws/whats-new/2026/11/announcing-distributed-kv-caching-for-self-hosted-llms-with-amazon-elasticache/"
    publisher: "Amazon Web Services"
    reviewed: "2026-11-22"
  - title: "What is the Agent Toolkit for AWS?"
    url: "https://docs.aws.amazon.com/agent-toolkit/latest/userguide/what-is-agent-toolkit.html"
    publisher: "Amazon Web Services"
    reviewed: "2026-11-22"
---

Artificial intelligence companies spend heavily on GPUs to run large language models. But not every GPU cycle is spent generating a new answer. A significant amount of computing can be used to process information that an AI system has already seen in an earlier turn of the same conversation.

Amazon Web Services is trying to reduce that repeated work with a new agent skill that helps developers assess and configure distributed key-value caching for self-hosted large language models.

The skill is part of the Agent Toolkit for AWS. It works with compatible coding agents, including Kiro, Claude Code and OpenAI Codex. Instead of asking developers to read several technical guides and manually work through every configuration step, the skill guides the coding agent through workload assessment, cost estimation, setup and troubleshooting.

The announcement is interesting for two reasons. First, it focuses on the economics of running AI rather than introducing another AI model. Second, it uses an AI coding agent to help configure infrastructure that is itself designed to make AI inference more efficient.

## The problem AWS is trying to solve

When a user has a long conversation with an AI assistant, the model may need to process a large amount of earlier context again when preparing the next response.

The same issue appears in coding agents, document question-answering systems and applications that work with long files or repeated instructions.

A model serving system commonly uses a key-value cache, usually called a KV cache, to store intermediate attention information calculated while processing tokens. If the next request contains a matching prefix or conversation history, the system may be able to reuse that stored information instead of calculating it again.

The difficulty appears when the model runs across several GPU servers.

Each server may have its own local cache. A user's next request can be sent to a different server, one that does not hold the earlier context. That server may then have to repeat the prefill computation before it can begin generating the answer.

For a short prompt, this may not matter much. For a long conversation or a coding agent that repeatedly sends a large context, the repeated work can increase the time before the first token appears and consume expensive GPU capacity.

## What distributed KV caching changes

AWS's distributed KV caching approach adds a shared cache tier alongside the GPU fleet. Instead of relying only on the cache held by one GPU server, multiple servers can reuse stored KV state through a shared infrastructure layer.

AWS implements this using Amazon ElastiCache for Valkey and a connection through LMCache. The design uses Remote Direct Memory Access over Elastic Fabric Adapter networking to move large KV objects between GPU servers and the cache infrastructure.

The important idea is that a server receiving a request may be able to retrieve previously computed context from the shared cache, even if another server handled the earlier turn.

AWS says the shared cache can retain KV state across sessions, routing changes and server failures. Its technical announcement describes a tiered approach using memory and local NVMe storage.

This is infrastructure optimisation. It does not make the underlying model smaller or change the intelligence of the model. It aims to reduce the amount of repeated computation required to serve certain workloads.

## What the new agent skill actually does

The new skill packages AWS's guidance into a workflow that a compatible coding agent can follow.

AWS describes four broad tasks.

**Check whether the workload is suitable.** The skill first assesses whether distributed caching is likely to help. It checks relevant infrastructure information where possible and asks the developer for details it cannot determine automatically. These can include the model and inference engine, tensor parallel configuration, KV data type, GPU server pricing and how often prompts repeat.

This step matters because shared caching is not automatically useful for every workload. If prompts are short or rarely repeated, retrieving cached state may take longer or cost more than recomputing it.

**Estimate the possible savings.** AWS provides a tool called KVTrace to estimate the potential benefit using the application's own traffic patterns. The idea is to collect cache-related events from an inference workload and replay them against candidate shared cache sizes. The tool can help estimate how often previously computed context could be reused.

AWS says the trace does not record token IDs or prompt text. It records block hashes and token counts. However, the company also warns that hashes are derived from token content and recommends using its anonymisation option when prompts are sensitive.

This is an important point for enterprises. Even when a tool does not store raw prompts, teams should understand what metadata is collected and whether it could reveal information about sensitive workloads.

**Guide the setup.** If the workload appears suitable, the skill can guide the coding agent through configuring the cache infrastructure and the relevant inference servers. AWS's examples include setting up an ElastiCache for Valkey cluster, configuring the LMCache connector and aligning cache identifiers and data types across servers.

The skill is designed to work with existing serving systems such as vLLM and SGLang, subject to the prerequisites and versions described by AWS.

The agent is also instructed to seek explicit approval before high-impact operations such as creating, changing or deleting resources. That is an important safeguard because infrastructure changes can create real costs or affect production systems.

**Troubleshoot the deployment.** The skill can help diagnose problems such as slow first-token latency, cache sizing, pricing and failed data transfers.

AWS's examples show the agent asking for the information needed to diagnose the workload rather than simply recommending a larger cache. It also describes checking that cache-loaded runs produce the same output, because an incorrect cache layout could create misleading hit statistics while returning wrong results.

## What do the 40% cost and 80% latency claims mean?

AWS says distributed KV caching can reduce self-hosted LLM inference costs by up to 40% and time to first token by up to 80%.

These are AWS-reported maximum results, not guaranteed improvements for every customer.

The benefit depends on several factors.

- **Prompt length:** Long prompts create more opportunity to reuse previously computed context.
- **Prompt repetition:** If users repeatedly send similar context, the cache may have more opportunities to serve a hit.
- **Cache hit rate:** A cache that rarely contains the required information will not deliver the same benefit.
- **Inference engine and model:** The serving stack, model architecture and KV data format affect compatibility and performance.
- **Infrastructure cost:** The shared cache has its own cost. The savings must exceed the cost of running it.
- **Capacity utilisation:** Faster inference creates economic value only if the business can serve more traffic with the same GPU fleet or reduce the number of GPUs it operates.

AWS's technical material includes workload examples and benchmark conditions. Those results should not be converted into a universal claim that every company can cut its AI bill by 40%.

## Who could benefit?

The strongest candidates are organisations that self-host large language models and repeatedly process long contexts.

A coding assistant may send a large codebase and project instructions with every new request. A legal assistant may work with long case histories. A document question-answering system may repeatedly refer to the same files. An enterprise assistant may process recurring instructions and shared context across many users.

In each case, the question is whether enough of the computation can be reused to justify the shared cache.

This is less relevant to a small business that simply uses a hosted chatbot through a standard subscription. The feature is aimed at teams operating their own model-serving infrastructure on GPUs.

For Indian AI startups and enterprises building private LLM deployments, the potential value is in reducing infrastructure cost as usage grows. But the technical prerequisites, AWS regional availability, GPU types and service pricing need to be checked before planning a deployment.

## What should an engineering team measure?

Before adopting distributed caching, a team should establish a baseline.

Measure the time to first token, total response latency, GPU utilisation, tokens generated per second, prompt length distribution and the percentage of requests that repeat earlier context.

Then run KVTrace on representative traffic and estimate the cache size required. Include the full cost of the cache infrastructure, networking, monitoring and engineering time.

A useful pilot scorecard should track:

1. Cache hit rate across real production-like traffic.
2. Change in time to first token at both median and high-percentile levels.
3. Change in requests served per GPU hour.
4. Total cost per million input and output tokens, including the shared cache.
5. Correctness and consistency of outputs when cached state is reused.
6. Operational complexity, failure recovery and data isolation.

Do not judge success from a single fast demonstration. A cache can improve latency in one workload and add unnecessary cost in another.

## Security and operational considerations

Shared caching introduces design questions that need careful attention.

Different customers or business units may need strict data isolation. Cache keys must be designed so that one tenant cannot infer another tenant's activity through cache behaviour. AWS's own examples discuss separate caches or tenant-specific identifiers for sensitive workloads.

Teams must also test how the system behaves when a server fails, a cache entry is missing or the inference engine changes configuration. A successful cache hit counter is not enough. The system must return the correct answer.

The agent skill can guide the setup, but the engineering team remains responsible for access controls, production approval, monitoring and incident response.

## The larger shift: AI agents are now helping optimise AI infrastructure

The broader story is not just about a new cache. It is about the growing role of coding agents in infrastructure work.

Developers increasingly use AI tools to understand cloud services, generate configuration, diagnose errors and automate routine operations. AWS's skill packages service-specific knowledge and guardrails so that an agent can follow a more structured process.

That does not remove the need for experienced engineers. It can reduce the amount of manual documentation work and help teams follow a repeatable setup, but the decisions about architecture, cost, security and production readiness still matter.

For companies running large AI workloads, the next efficiency gain may come not only from a cheaper model, but from avoiding unnecessary computation around the model.

**Source and reporting note:** This article reports the technical approach, workflow and performance claims described by Amazon Web Services. We are not involved in the development, testing or benchmarking of the feature. The stated savings are AWS-reported results and will vary by workload and deployment. Please consult the original AWS technical article, feature announcement and Agent Toolkit documentation for prerequisites, regional availability and current limits: [Distributed KV caching agent skill](https://aws.amazon.com/blogs/machine-learning/cut-self-hosted-llm-cost-and-latency-with-the-distributed-kv-caching-agent-skill/), [ElastiCache feature announcement](https://aws.amazon.com/about-aws/whats-new/2026/11/announcing-distributed-kv-caching-for-self-hosted-llms-with-amazon-elasticache/) and [Agent Toolkit for AWS](https://docs.aws.amazon.com/agent-toolkit/latest/userguide/what-is-agent-toolkit.html).