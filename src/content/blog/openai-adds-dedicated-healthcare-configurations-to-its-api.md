---
title: "OpenAI Adds Dedicated Healthcare Configurations to Its API"
date: 2026-11-25T13:30:00+05:30
description: "OpenAI has released healthcare model configurations for its Responses API, pairing selected models with a clinical workflow setup and a dedicated medical source index for web search."
tag: "OpenAI"
tldr: "OpenAI has made healthcare model configurations available to API organisations through the Responses API. Selected models, including Astra and Sol variants, can use a healthcare-focused configuration, and web search can query a dedicated index of medical sources. The feature is for developers building evidence-finding applications and does not replace professional medical judgement."
categories: ["AI", "OpenAI", "Healthcare", "AI Research", "Developers"]
tags: ["OpenAI API", "Healthcare AI", "Responses API", "Medical evidence", "AI models"]
type: "article"
sources:
  - title: "Model Release Notes"
    url: "https://help.openai.com/en/articles/9624314-model-release-notes"
    publisher: "OpenAI"
    reviewed: "2026-11-25"
  - title: "OpenAI API Changelog"
    url: "https://developers.openai.com/api/docs/changelog"
    publisher: "OpenAI"
    reviewed: "2026-11-25"
---

OpenAI has introduced healthcare model configurations in its API, giving developers a way to build applications that find, compare and summarise medical evidence with citations.

The configurations became available on November 24, 2026, through the Responses API. OpenAI says they pair selected models, including Astra and Sol variants, with a setup tailored to healthcare use cases. When web search is enabled, the system can search a dedicated index of medical sources.

This is an API capability for organisations building healthcare applications. It is not a new ChatGPT medical chatbot, and it does not mean that an AI response can replace a clinician.

## What has OpenAI released?

OpenAI describes the release as healthcare model configurations for the Responses API.

The Model Release Notes say the configurations tailor selected models for healthcare use cases. The API changelog lists these model configurations:

- gpt-6.2-astra-healthcare
- gpt-6.2-sol-healthcare
- gpt-6-astra-healthcare
- gpt-6.1-sol-healthcare

The release is available to API organisations. OpenAI says a ChatGPT for Healthcare workspace is not required to use the configurations.

When web search is enabled, the configurations can search a dedicated healthcare index to help applications find, compare and summarise medical evidence with citations.

## What is different about a dedicated healthcare index?

A general web search can return a mixture of medical research, hospital pages, health journalism, commercial websites and user-generated content.

A dedicated medical source index gives a healthcare application a more focused retrieval source. It is intended to help developers build workflows around medical evidence rather than treating every web result as equally useful.

There are three important parts to the capability:

1. **A healthcare-focused model configuration.** Selected models are paired with a setup intended for clinical questions.
2. **A dedicated source index.** When web search is enabled, the system can retrieve material from a medical source collection.
3. **Cited evidence.** The application can present references alongside summaries so users can inspect the underlying material.

The presence of citations is useful, but it does not automatically make a medical answer correct. Developers still need to validate sources, handle conflicting evidence and design appropriate clinical review.

## Who is this designed for?

The release is aimed at API developers and organisations building healthcare applications.

Possible application areas include:

- Finding evidence relevant to a clinical question.
- Comparing recommendations or findings across medical sources.
- Summarising research for a clinician or researcher to review.
- Building tools that help organise evidence for healthcare workflows.

These are application possibilities, not a claim that OpenAI has launched a finished product for each use case. The developer or organisation remains responsible for how the system is deployed and reviewed.

## What this does not mean

OpenAI's announcement includes an important limitation: the configurations do not replace professional medical judgement.

A model can retrieve and summarise a source while missing a limitation, interpreting a study incorrectly or failing to account for a patient's full circumstances. A citation lets a user inspect the source; it does not prove that the model's interpretation is clinically sound.

Developers also need to pay attention to the requirements for handling protected health information. OpenAI directs organisations to separate documentation covering capabilities, availability and those requirements. Access to an API configuration should not be treated as automatic permission to process every type of patient data.

## Why this matters for healthcare AI

The release reflects a wider movement from general-purpose chatbots towards domain-specific AI systems.

Healthcare is a particularly demanding area because information must be current, evidence-based and interpreted in context. A system that can retrieve medical sources and attach citations may help professionals organise information, but the quality of the retrieval and the quality of the clinical interpretation must both be evaluated.

It also creates a useful distinction for developers. A healthcare application does not only need a capable language model. It needs a controlled source strategy, traceable evidence, privacy safeguards and a workflow for qualified human review.

Our article on [OpenAI and scientific discovery](/openai-and-scientific-discovery-how-ai-supports-research/) looks at how AI can support research while keeping human verification central. The same distinction matters in healthcare: assisting with evidence is not the same as making a clinical decision.

## What developers and healthcare organisations should check

1. **Read the model configuration documentation.** Confirm which healthcare model IDs are available to the organisation and what each configuration supports.
2. **Check source coverage.** Understand what the dedicated healthcare index includes and what kinds of evidence may be missing.
3. **Test citation quality.** Verify that each citation supports the claim in the generated summary, not merely the broad topic.
4. **Evaluate conflicting evidence.** Test how the application handles different study designs, publication dates and contradictory findings.
5. **Review data handling requirements.** Check the applicable terms and requirements before sending protected health information.
6. **Keep qualified people in the loop.** Design the workflow so clinicians or other appropriate professionals review consequential outputs.

A useful evaluation measure is *evidence traceability*: the percentage of important claims in a generated summary that can be matched to a relevant, accessible source and verified by a qualified reviewer. Track factual errors and unsupported claims separately.

## Frequently asked questions

### What are OpenAI's healthcare model configurations?

They are API configurations that pair selected OpenAI models with a setup tailored to healthcare use cases. They are available through the Responses API to API organisations.

### Which models are included?

The November 24 API changelog lists GPT-6.2 Astra Healthcare, GPT-6.2 Sol Healthcare, GPT-6 Astra Healthcare and GPT-6.1 Sol Healthcare configurations.

### Does the healthcare API search medical sources?

When web search is enabled, OpenAI says the configurations can search a dedicated index of medical sources to help applications find, compare and summarise evidence with citations.

### Do developers need ChatGPT for Healthcare to use these configurations?

No. OpenAI says API organisations can use the configurations through the Responses API without a ChatGPT for Healthcare workspace.

### Does this mean OpenAI's API can make clinical decisions?

No. OpenAI says the configurations do not replace professional medical judgement. Developers must design appropriate validation, privacy and clinical review processes.

### Can developers send protected health information to these models?

Organisations must review OpenAI's specific requirements and terms for handling protected health information before doing so. The availability of a model configuration alone does not establish that a particular data workflow is compliant.

## The shift is from general answers to evidence workflows

OpenAI's healthcare configurations are notable because they combine a model setup with a specialised retrieval source. The value is not simply that an AI can write a medical summary. It is whether the system can find relevant evidence, show where its claims came from and make it easier for a qualified person to review that evidence.

For healthcare AI, that is the standard that matters. A fluent answer is not enough. The evidence behind it must be traceable, relevant and open to professional scrutiny.
