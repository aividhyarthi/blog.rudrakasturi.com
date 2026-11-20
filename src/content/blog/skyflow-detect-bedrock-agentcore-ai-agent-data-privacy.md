---
title: "AWS and Skyflow Add a Privacy Layer to AI Agent Tool Calls"
date: 2026-11-20T09:00:00+05:30
description: "Skyflow Detect can intercept Amazon Bedrock AgentCore Gateway requests and responses, de-identify sensitive information before tools and models receive it, and restore authorised data when needed."
categories: ["Artificial Intelligence", "Cybersecurity", "AWS", "Enterprise Technology"]
tags: ["Skyflow", "Amazon Bedrock AgentCore", "AI Agent Security", "Data Privacy", "Enterprise AI"]
type: "article"
tldr: "AWS and Skyflow published an integration pattern for Amazon Bedrock AgentCore Gateway. Skyflow Detect can de-identify sensitive data in requests before it reaches tools and restore information for authorised callers in responses. It addresses a key enterprise risk: AI agents can expose private data while calling tools and processing documents."
sources:
  - title: "Protect agent tool calls with Skyflow and Amazon Bedrock AgentCore Gateway"
    url: "https://aws.amazon.com/blogs/machine-learning/protect-agent-tool-calls-with-skyflow-and-amazon-bedrock-agentcore-gateway/"
    publisher: "Amazon Web Services"
---

AI agents are becoming more useful because they can call tools, retrieve documents and take actions across business systems. But every tool call creates another path through which sensitive information can move.

AWS and Skyflow have published an integration pattern for applications using Amazon Bedrock AgentCore Gateway. The approach places Skyflow Detect between an agent and the tools it calls.

The goal is to prevent sensitive information from being unnecessarily exposed to tools or included in model context.

## How the privacy layer works

AWS describes Skyflow Detect as a request and response interceptor.

Before a request reaches a tool, the interceptor can identify and de-identify sensitive data. When a tool returns information, the integration can restore data for an authorised caller. The approach can also process documents before an agent opens them.

The protection is placed in the gateway path. This can reduce the need to rewrite every individual tool integration, although organisations still need to configure and test policies for their own data.

## Why agent tool calls create a privacy problem

An AI agent may need access to customer records, invoices, support tickets, internal documents or payment information to complete a task.

If full information is passed into every model prompt and tool call, the organisation increases the number of places where sensitive data may be exposed, logged or retained.

A privacy layer can reduce unnecessary exposure. It does not remove the need for access controls, audit logs, retention policies and carefully scoped tool permissions.

## What enterprise teams should evaluate

Before using this architecture in production, teams should test five things.

1. Which sensitive fields are detected and protected?
2. Which users and services are allowed to restore original information?
3. What happens if the interceptor is unavailable?
4. Are requests, responses and document transformations recorded for audit?
5. Does the protection add latency or affect agent task completion?

AWS's example describes a fail-closed approach. In such a configuration, a request can be blocked rather than allowed through without the expected protection. Organisations should validate the exact behaviour in their own deployment.

## Why this matters for India

Indian businesses using AI agents in banking, insurance, healthcare, commerce and customer support need to understand where personal and confidential data travels.

The practical requirement is not merely to keep data out of a chatbot prompt. Teams must map the entire path from the user request to the model, gateway, tool, external system and final response.

A gateway-level privacy control can become one part of that architecture. It should be combined with data minimisation, role-based access, encryption, monitoring and legal review.

## Frequently asked questions

### What is Skyflow Detect?

Skyflow Detect is a data protection component used in the AWS example to identify and de-identify sensitive information moving through AI agent tool calls.

### What is Amazon Bedrock AgentCore Gateway?

It is a gateway used to connect AI agents with tools and services.

### Does this mean AI agents can safely access every company database?

No. The integration can reduce exposure of sensitive information, but it does not replace identity controls, least-privilege access, monitoring or governance.

### What happens when sensitive data must be used?

The integration can restore information for authorised callers, according to the configured policy. Organisations must define and test who is authorised.

**Security note:** This article describes the architecture published by AWS and Skyflow. It is not a security certification or a guarantee that every agent deployment is compliant.
