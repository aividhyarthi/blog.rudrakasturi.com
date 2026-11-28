---
title: "OpenAI's GPT-6 Astra Scores 98% on Unpublished Physics Problems. What Does the Result Really Prove?"
date: 2026-11-28T19:15:00+05:30
description: "A research preprint reports near-perfect performance by a GPT-6 Astra agent on 50 unpublished theoretical physics problems. The result is notable, but its evaluation design matters."
tag: "OpenAI Research"
tldr: "The TheoPhysEval research preprint reports that a GPT-6 Astra agent running through Codex achieved 98% accuracy on 50 unpublished theoretical physics problems when allowed to use tools such as literature search and code. The benchmark is designed to test concrete research calculations, not autonomous scientific discovery. The result is promising, but the small problem set and tool-assisted setup need to be understood before drawing broad conclusions."
categories: ["OpenAI", "AI Research", "LLMs", "Science", "AI Benchmarks"]
tags: ["GPT-6 Astra", "TheoPhysEval", "Theoretical Physics", "AI Reasoning", "OpenAI"]
type: "article"
sources:
  - title: "TheoPhysEval: Assessing AI agents at autonomous theoretical physics problem solving"
    url: "https://arxiv.org/abs/2610.16733"
    publisher: "arXiv"
    reviewed: "2026-11-28"
  - title: "GPT-6 Astra: A new generation of intelligence"
    url: "https://openai.com/index/gpt-6-astra/"
    publisher: "OpenAI"
    reviewed: "2026-11-28"
---

An AI system getting a difficult physics question right is interesting. Getting a set of research-level problems right, where the answers have not been published online, is a more meaningful test. But even a strong benchmark result needs to be read carefully.

A research preprint titled *TheoPhysEval: Assessing AI agents at autonomous theoretical physics problem solving* reports that a GPT-6 Astra agent running through Codex achieved 98% accuracy on a set of 50 unpublished theoretical physics problems. The evaluation allowed realistic tools, including literature search and numerical or symbolic scripts.

The paper was posted to arXiv on October 9, 2026. Its results have attracted attention again in late November, but this is a research finding, not a new model launch or a new benchmark published on November 27.

## What is TheoPhysEval?

TheoPhysEval is a benchmark built around 50 theoretical physics problems with verifiable answers. The research team designed the questions so they had not appeared on the public internet.

The idea is to reduce the chance that a model simply retrieves or reproduces an answer it encountered during training. The questions are intended to test whether an AI agent can carry out concrete calculations that would require a specialist researcher time to solve.

The paper says a typical problem could take a world expert about a day or less, while taking much longer for someone working outside that specialist area.

## What did GPT-6 Astra achieve?

The preprint reports that the best-performing agent, GPT-6 Astra harnessed in Codex, achieved 98% accuracy in the realistic setting. That setting allowed access to tools such as web search and scripts for numerical and symbolic work.

The paper also reports an average cost below US$3 per problem. This matters because a result that is technically impressive but prohibitively expensive may have limited practical value.

The evaluation is not simply a test of the model answering from memory. It assesses a system that can gather information, use tools and work through calculations.

## Why the unpublished questions matter

Language models can perform well on familiar questions because training data may contain explanations, worked examples or even exact answers. A benchmark built around unpublished problems attempts to reduce that contamination.

However, unpublished does not automatically mean impossible to infer from existing knowledge. The benchmark's design, the availability of related literature and the tools allowed during evaluation all influence what the score means.

The researchers also report that average accuracy changed only modestly when agents were denied web search and access to background research papers. They discuss the possibility that models may retain substantial knowledge of the literature. That is an important caveat when interpreting claims about genuinely new reasoning.

## Does this mean AI can now do theoretical physics research?

Not by itself.

The result supports a narrower conclusion: a tool-using AI agent can solve many concrete, research-level physics problems with checkable answers under the conditions tested.

That is different from independently choosing an important open question, developing a new theory, deciding which assumptions are physically meaningful, validating a result across methods and persuading the scientific community that a discovery is correct.

Scientific work involves more than obtaining a correct numerical or symbolic answer. It requires judgement about the problem, assumptions, evidence, interpretation and the significance of the result.

The benchmark is useful precisely because it measures a concrete part of that workflow. It should not be stretched into a claim that AI has replaced theoretical physicists.

## What researchers and organisations should take from this

**For research teams:** AI agents may be useful for calculations, literature review, code-assisted exploration and checking intermediate results. Every output still needs independent verification.

**For universities:** Assessments may need to distinguish recall, calculation, tool use and original research judgement. A model performing well on a benchmark does not make every form of academic assessment obsolete.

**For AI developers:** Evaluation should include unseen problems, transparent scoring, tool-use disclosure and cost per solved task.

**For businesses:** The result is relevant to complex knowledge work, but it does not establish that an AI agent can safely own an entire specialist workflow without human review.

A useful metric for future research-agent evaluations is *verified task completion rate*: the share of tasks whose final answers are independently checked, reproducible and correct, reported alongside cost, time and tool access.

## What is confirmed and what remains uncertain?

The arXiv preprint is the primary source for the benchmark and its reported result. OpenAI's own GPT-6 Astra announcement provides separate information about the model's broader capabilities.

The benchmark contains 50 problems, so the sample is small. Its results are also specific to the evaluated agent setup and should not be assumed to apply to every GPT-6 Astra deployment, every physics domain or every scientific task.

The paper is a preprint. Its claims should be treated as research-stage evidence until further independent evaluations and replications are available.

## Frequently asked questions

### Did GPT-6 Astra solve 49 out of 50 physics problems?

The TheoPhysEval paper reports 98% accuracy on a set of 50 unpublished theoretical physics problems for the best-performing GPT-6 Astra agent configuration. That is equivalent to 49 correct answers out of 50.

### What is the TheoPhysEval benchmark?

TheoPhysEval is a research benchmark containing 50 theoretical physics problems with verifiable answers. The questions were designed not to have appeared publicly online.

### Was GPT-6 Astra tested without tools?

The headline 98% result comes from the realistic setting, which allowed tools including literature search and numerical or symbolic scripts. The paper also discusses evaluations with restricted access to external resources.

### Does this prove that AI can make scientific discoveries?

No. It shows strong performance on a defined set of concrete physics problems. Independent scientific discovery involves choosing questions, forming hypotheses, validating results and establishing their significance.

### How much did solving each problem cost?

The preprint reports an average cost below US$3 per problem for the best-performing agent setup. Costs can vary with the model, tools and evaluation configuration.

### Is TheoPhysEval a peer-reviewed study?

The cited version is an arXiv preprint. A preprint is publicly available research, but it should not automatically be described as peer-reviewed.

## A strong benchmark result, not the end of scientific work

TheoPhysEval is worth watching because it tests a meaningful part of scientific work: solving unfamiliar problems with access to practical tools. GPT-6 Astra's reported score is impressive, particularly alongside the reported cost.

But the useful conclusion is measured. AI agents are becoming more capable research assistants for defined technical tasks. Whether they can reliably generate and validate genuinely new scientific knowledge remains a much larger question.
