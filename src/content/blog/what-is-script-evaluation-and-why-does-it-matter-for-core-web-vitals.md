---
title: "What is Script Evaluation and Why Does it Matter for Core Web Vitals?"
date: 2025-08-05T11:07:17Z
description: "Script evaluation refers to the phase when the browser parses and executes JavaScript code. It includes: Parsing JavaScript files. Running global and in-line scripts. Executing event handlers…"
tag: "Core Web Vitals"
image: "https://blog.rudrakasturi.com/wp-content/uploads/2025/08/image-32.webp"
---

**Script evaluation** refers to the phase when the browser parses and executes JavaScript code. It includes:

*   Parsing JavaScript files.
*   Running global and in-line scripts.
*   Executing event handlers, callbacks, or initialization code.

In PSI and the Chrome Performance panel, you'll often see “**Script Evaluation**” (sometimes called “Scripting” or “Evaluate Script”) in the flame chart or timeline. This shows how much time the browser spent running JavaScript, as opposed to rendering, painting, or idle.

## **Why Does Script Evaluation Matter?**

![](https://rudrakasturi.wpcomstaging.com/wp-content/uploads/2025/08/Screenshot-2025-08-05-at-4.34.11-PM-1024x406.webp)

### **Impact on Core Web Vitals**

1.  **Main-Thread Blocking**
    *   Script evaluation happens on the browser’s main thread. If it takes too long, it can block other critical work (like rendering the page or responding to user input).
    *   This is called **main-thread blocking**.
2.  **Impacts These Core Web Vitals:**
    *   **INP (Interaction to Next Paint):** Long script evaluations can delay how quickly a user’s click/tap gets a visual response.
    *   **LCP (Largest Contentful Paint):** If heavy JS runs before rendering the main content, LCP gets delayed.
    *   **CLS (Cumulative Layout Shift):** Late-running scripts that insert images/ads can cause layout shifts.
3.  **Related Lab Metrics in PSI:**
    *   **Total Blocking Time (TBT):** Time when the main thread is blocked by long script tasks (>50ms).
    *   **First Contentful Paint (FCP):** Delayed if the browser is busy evaluating JS.
    *   **Time to Interactive (TTI):** Affected by long-running scripts.

## **How to Spot Script Evaluation in PSI**

*   In the **Diagnostics** section, look for:
    *   "Reduce JavaScript execution time"
    *   "Minimize main-thread work"
    *   "Avoid long main-thread tasks"
*   In the **Performance** tab (DevTools):
    *   Flame charts show “Script Evaluation” bars; longer bars mean heavier JavaScript.

**Example:**

> PageSpeed Insights shows “Reduce JavaScript execution time — 3.5s” in the Diagnostics section. This means your scripts are blocking the main thread for 3.5 seconds, which can delay INP and LCP.

## **How Script Evaluation Affects Your Core Web Vitals Score**

*   **High script evaluation time = lower Core Web Vitals scores.**
    *   **LCP:** Slow if scripts block rendering.
    *   **INP:** Slow if scripts block user interactions.
    *   **CLS:** Can cause shifts if scripts insert content late.
*   **PSI Score:** If your scripts take too long, PSI will dock your score, especially if it affects TBT (lab) and INP (field data).

## **How to Reduce Script Evaluation Time**

*   **Code-splitting:** Only load critical JS upfront; defer the rest.
*   **Async/defer scripts:** Don’t block rendering for non-critical scripts.
*   **Eliminate unused JS:** Remove unused code (tree-shaking, code splitting).
*   **Minimize third-party scripts:** Ads, widgets, trackers can block the main thread.
*   **Optimize event handlers:** Make sure interaction-related scripts run fast.
*   **Web Workers:** Move heavy computations off the main thread.

### **Summary Table**

Metric

Impacted by Script Evaluation

Example Issue

LCP

Yes

Delayed rendering of hero image

INP

Yes

Slow response to user clicks

CLS

Sometimes

Late-injected ads shifting layout

TBT

Yes

High “main-thread blocking” time

FID

Yes (legacy)

Slow to respond to first input

### **Resources**

*   Google: Optimize JavaScript Execution
*   PageSpeed Insights: Understanding Diagnostics

**TL;DR:**  
Script evaluation is the time your browser spends running JS. High script evaluation time blocks the main thread, directly hurting Core Web Vitals (INP, LCP, TBT), and will lower your PageSpeed score. Optimize your JS and defer non-critical scripts for the best results.
