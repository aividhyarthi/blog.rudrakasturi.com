---
title: "PolyAI Brings Its Real-Time Voice Reasoning Model to AWS SageMaker"
date: 2026-11-20T08:50:00+05:30
description: "PolyAI Dialog-RSN-1 is now available through AWS Marketplace and SageMaker JumpStart, allowing businesses to deploy a real-time voice reasoning model inside their own AWS environment."
categories: ["Artificial Intelligence", "Voice AI", "AWS", "Enterprise Technology"]
tags: ["PolyAI", "Dialog-RSN-1", "AWS SageMaker", "Voice Agents", "Conversational AI"]
type: "article"
tldr: "PolyAI Dialog-RSN-1 became available through AWS Marketplace and SageMaker JumpStart on November 19. The model is designed to process live caller audio, reason about the conversation and respond in real time. AWS says it can be deployed in a customer's own account and VPC. It is English-only today."
sources:
  - title: "PolyAI Dialog-RSN-1 is now on Amazon SageMaker JumpStart"
    url: "https://aws.amazon.com/blogs/machine-learning/polyai-dialog-rsn-1-is-now-on-amazon-sagemaker-jumpstart/"
    publisher: "Amazon Web Services"
---

PolyAI's Dialog-RSN-1, a model built for real-time voice conversations, is now available through AWS Marketplace and Amazon SageMaker JumpStart. The November 19 announcement gives AWS customers a way to deploy the model as an endpoint inside their own cloud environment.

The model is designed for conversations where an AI agent must listen, understand what a caller needs, decide what to do and respond without long pauses.

## How Dialog-RSN-1 works

AWS describes Dialog-RSN-1 as a model that perceives caller audio directly, reasons about the conversation and responds in real time.

This is different from a basic voice bot that converts speech into text, sends the transcript to a language model and then converts the answer back into speech. A live conversation also contains timing, interruptions, hesitation and changes in tone.

PolyAI says the model supports barge-in, allowing callers to interrupt while the agent is speaking. It is designed to maintain conversational pace rather than wait for a separate transcription and reasoning pipeline to finish.

## Why AWS deployment matters

Customers can subscribe through AWS Marketplace and deploy the model as a SageMaker endpoint in their own AWS account.

AWS says the endpoint runs within the customer's environment and uses its existing virtual private cloud, identity and access management roles, and monitoring setup. This gives enterprise teams more control over deployment and access.

The endpoint supports the OpenAI Realtime protocol through PolyAI's bridge, which may make integration easier for systems already using that protocol.

The model is English-only today. Teams should check AWS's deployment guide for supported audio formats, connection constraints and current service requirements before designing a production workflow.

## Where businesses could use it

Potential use cases include customer support, booking assistance, service enquiries and contact centre workflows.

A voice agent may be useful when it can resolve a common request accurately, transfer complex cases to a human and record the interaction in the business system.

The key performance measures should be resolution rate, average handling time, escalation rate, interruption handling, response latency and customer satisfaction. A fast response is not useful if the agent gives the wrong answer.

## What Indian companies should consider

The English-only limitation is significant for India. Many customer service environments require Hindi and regional languages, code switching and familiarity with local accents.

Before adopting a model, Indian businesses should test it with real call conditions, local language requirements, background noise, compliance rules and the quality of its handoff to human agents.

Availability on AWS is a deployment milestone. It does not mean the model is ready for every contact centre or language.

## Frequently asked questions

### What is PolyAI Dialog-RSN-1?

It is a real-time voice reasoning model designed to listen to live calls, understand the conversation and respond.

### Where can businesses access it?

It is available through AWS Marketplace and Amazon SageMaker JumpStart.

### Can it be deployed inside a company's AWS account?

AWS says customers can deploy it as a SageMaker endpoint in their own AWS environment.

### Does Dialog-RSN-1 support Indian languages?

AWS describes the model as English-only today. Indian language support should not be assumed.

### How should a company evaluate a voice AI agent?

Measure task completion, accuracy, response latency, escalation quality, customer satisfaction and the cost per successfully resolved interaction.
