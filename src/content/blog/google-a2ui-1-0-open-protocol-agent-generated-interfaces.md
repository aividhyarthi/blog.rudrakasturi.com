---
title: "Google releases A2UI 1.0: an open protocol for AI agents to create interactive interfaces"
date: 2026-11-13T08:00:00+05:30
description: "Google has released A2UI 1.0, a stable open protocol that lets AI agents describe interactive screens which apps render using their own native components."
tag: "AI Development"
tldr: "Google announced A2UI 1.0 on 11 November 2026. The open protocol lets an AI agent describe an interface, such as a form, chart or approval screen, while the host application renders it using its registered components. Google says SDKs are available for web, Android and iOS renderers and Python, TypeScript and Dart agents. A2UI complements MCP Apps rather than replacing MCP."
sources:
  - title: "A2UI 1.0: Build delightful, fast, reliable, agentic experiences"
    url: "https://developers.googleblog.com/en/a2ui-10-build-delightful-fast-reliable-agentic-experiences/"
    publisher: "Google Developers Blog"
categories: ["AI Development","Agents","News"]
tags: ["A2UI","Google Developers","AI agents","MCP"]
draft: true
---

Google has released A2UI 1.0, the first stable version of its open protocol for generative user interfaces. The announcement was published on 11 November 2026.

Instead of returning only a block of text, an AI agent can describe an interactive screen. The application then renders that screen using components that the app itself has registered and controls.

![A2UI interaction model: an AI agent describes a screen, the host application validates and renders approved native components](/images/news/a2ui-agent-ui-flow.svg)

## The problem A2UI is trying to solve

Text is useful for explanations, but it is not always the best way to complete a task. Comparing products, approving a plan, entering information or reviewing a chart can be easier through an interface than through a long chat response.

A2UI lets agents request task-specific interfaces while the host app retains control over how components are displayed.

## How it works

1. A user asks an agent to complete a task.
2. The agent describes the interface it needs using A2UI messages.
3. The host application receives the description.
4. The app renders the screen using components from its own design system.
5. The user interacts with the rendered interface and can confirm or change the proposed action.

This is different from letting a model freely generate arbitrary executable interface code. The host app chooses which components are available and how they are rendered.

## What developers get

Google says A2UI 1.0 includes open-source renderer SDKs for web, Android and iOS, and agent SDKs for Python, TypeScript and Dart. The announcement says companies including Atlassian, Alation, Bloomberg and ByteDance are building with it.

The announcement says A2UI can work alongside MCP Apps. MCP Apps provide a way to host app experiences in compatible assistants, while A2UI describes how an agent can request a structured interface rendered by the host.

Google says Jetpack Compose support for A2UI 1.0 is coming soon, so developers should check current project documentation before planning a production implementation.

## Why this matters

A customer support agent might show a return form. A travel assistant might present a comparison table. An enterprise agent might display an approval screen.

For developers, the important questions will be security, component governance, accessibility, state management and how the app validates agent-generated requests.

## What to evaluate before adopting it

- Which components can the agent request?
- What data is allowed to reach the model?
- How are user permissions enforced?
- Can every interaction be audited?
- What happens when a requested component is unavailable?
- Does the interface work with assistive technology and on small screens?

## Our analysis

A2UI is worth watching because it addresses a real limitation in conversational AI: many jobs need a screen, not another paragraph. The protocol does not make every agent automatically trustworthy or every app instantly agentic. Quality still depends on the host application's component rules, permissions and data handling.
