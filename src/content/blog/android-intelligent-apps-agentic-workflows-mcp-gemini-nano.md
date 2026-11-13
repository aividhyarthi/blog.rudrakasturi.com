---
title: "Android's next app shift: Google brings agents, MCP and on-device AI into developer workflows"
date: 2026-11-13T08:00:00+05:30
description: "At Android Developer Summit, Google outlined intelligent app building blocks including Android MCP, Gemini Nano, AICore, ML Kit and connected app capabilities."
tag: "Android"
tldr: "Google's 5 November Android Developer Summit update describes a move toward apps that respond to high-level user goals and coordinate multi-step workflows. The developer story includes Android MCP, Gemini Nano, ML Kit, AICore and Connected Apps Platform. These are developer capabilities and direction, not proof every Android app can already be controlled by an agent."
sources:
  - title: "What's new in intelligent apps at the Android Developer Summit"
    url: "https://developer.android.com/blog/posts/whats-new-in-intelligent-apps-at-android-developer-summit"
    publisher: "Android Developers"
  - title: "Android Developers Blog latest updates"
    url: "https://developer.android.com/blog/latest"
    publisher: "Android Developers"
categories: ["Android","AI Development","News"]
tags: ["Android MCP","Gemini Nano","AICore","ML Kit"]
draft: true
---

Google's Android Developer Summit update on 5 November describes a future in which people tell apps what they want to accomplish rather than manually navigating every screen.

Google calls these intelligent apps. The developer building blocks highlighted include Android MCP, Gemini Nano, ML Kit, AICore and Connected Apps Platform.

![Android agent workflow: user goal, agent planning, app tools and permissions, task completion across apps](/images/news/android-intelligent-apps-flow.svg)

## From tapping screens to expressing goals

A traditional app expects users to follow a sequence: open a screen, select an option, enter details and submit.

An agentic experience starts with a goal. A user might ask an assistant to find an appointment, check availability and prepare a booking. The agent needs to understand the request, identify which app capabilities are relevant and ask for confirmation when an action has consequences.

Google's announcement describes this direction and the developer technologies intended to support it. It does not mean every app can already be operated this way.

## The technologies to understand

**Android MCP.** Model Context Protocol provides a standardised way for AI systems to discover and use tools. Android's work aims to make app capabilities more accessible to agents through defined interfaces.

**Gemini Nano and AICore.** These are part of Google's on-device AI direction. On-device processing can help with latency, availability and privacy-sensitive tasks, although capability depends on device and model.

**ML Kit.** Google's developer toolkit provides machine learning capabilities that app teams can integrate into mobile experiences.

**Connected Apps Platform.** Google's announcement points to ways for apps and assistants to coordinate actions across services. Developers must still design permissions and user controls carefully.

## What this could mean for app businesses

The app interface may become only one way to access a service. A user could discover a capability through an assistant and complete a task without browsing every screen.

That creates an opportunity for businesses to make app functions more discoverable to agents. It also raises questions about attribution, user consent, security and whether the app remains the trusted place where transactions are confirmed.

## What developers should do

1. Map the app's most useful user tasks, not just its screens.
2. Identify actions that can be safely exposed as tools.
3. Separate read-only actions from actions that change data or spend money.
4. Require clear user confirmation for consequential actions.
5. Test device compatibility and on-device model limitations.
6. Provide a fallback when the agent cannot complete a task.

## Our analysis

The shift is from apps as destinations to apps as services that can participate in a wider workflow. For Indian app businesses, start by identifying two or three high-value workflows that can be safely exposed and measured. A wholesale rebuild around agents is not the first step.
