---
title: "Your AI Prompts May Not Stay Private. What the OpenRouter and Together AI Incidents Reveal"
date: 2026-11-23T07:00:00+05:30
description: "Security researchers say AI prompts and test credentials were exposed across parts of the inference supply chain. OpenRouter removed 125 endpoints from Zero Data Retention eligibility. Here is what happened, what is confirmed and what businesses should do."
tag: "ai"
categories: ["AI","Technology","Cybersecurity","Enterprise AI"]
tags: ["AI Privacy","OpenRouter","Together AI","Dragos","Zero Data Retention","Prompt Leakage","AI Security","Inference Providers"]
type: "article"
tldr: "A Dragos investigation using nearly two million prompts seeded with unique canary links and credentials reported evidence of provider compromises, prompt access by inference resellers and apparent failures to honour privacy settings. OpenRouter said on November 22 that it had off-boarded three providers and removed 125 endpoints from Zero Data Retention eligibility, while stating that its own platform was not breached. Separate disclosures from Together AI, Novita and Phala describe different incidents and exposure mechanisms. These reports do not establish that every AI provider is unsafe, nor do they prove that all named providers were responsible for the same incidents. They do show why organisations must verify the full route their prompts take, not rely on a privacy label alone."
sources:
  - title: "Three breaches, endless leaks: Your AI supply chain needs canaries"
    url: "https://t.co/QsvmhYFSoX"
    publisher: "Dragos"
    reviewed: "2026-11-22"
  - title: "Data Processing Incidents on Inference Providers"
    url: "https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/"
    publisher: "OpenRouter"
    reviewed: "2026-11-22"
  - title: "Security event: Prompt leakage for requests in June and July of 2026"
    url: "https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026"
    publisher: "Together AI"
    reviewed: "2026-11-22"
  - title: "Privacy Notice Regarding MiniMax Requests on Novita"
    url: "https://novita.ai/blog/minimax-requests-privacy-notice/"
    publisher: "Novita AI"
    reviewed: "2026-11-22"
  - title: "Phala November Preliminary Incident Report"
    url: "https://phala.com/posts/phala-november-preliminary-incident-report"
    publisher: "Phala"
    reviewed: "2026-11-22"
---

A company employee pastes a customer email into an AI assistant and asks it to draft a reply. A developer sends a code snippet to an AI coding tool. A finance team uploads a spreadsheet and asks a model to find unusual transactions.

The user sees a chat box and an answer. What they may not see is the chain of systems that handled the request in between.

That chain can include an AI application, an API gateway, an inference marketplace, a hosting provider, the company operating the model and, in some cases, another service that the provider uses behind the scenes. Each step can create a new place where a prompt may be processed, logged, retained or accessed.

A security investigation published by Dragos on November 19 has put that supply chain under scrutiny. The industrial cybersecurity company says it sent approximately two million prompts containing unique, trackable URLs and credentials to AI services between July and November 2026. It then monitored whether those planted markers were accessed after the prompts had been processed.

Dragos reported evidence of data exposure at multiple providers, prompt access by resellers operating through an inference marketplace, and cases where data appeared to move beyond the route or privacy settings customers expected.

On November 22, AI model gateway OpenRouter announced that it had removed three providers from its platform and taken 125 endpoints out of Zero Data Retention, or ZDR, eligibility. It said the findings did not show a breach or unauthorised access of OpenRouter itself.

The disclosures from Dragos, OpenRouter, Together AI, Novita and Phala describe several different events. They should not be collapsed into one claim that every provider was breached. But together they expose a question that every business using AI APIs should be asking: when a prompt leaves your system, who can actually see it?

## The investigation: nearly two million prompts used as digital tripwires

Dragos did not rely only on provider statements or policy documents. It created unique URLs and canary credentials and placed them inside prompts sent to AI services.

A canary is a controlled marker that should not be accessed during normal use. If a unique link or credential is later opened or tested, the researcher can investigate which systems may have encountered the original prompt.

Dragos says it submitted approximately two million such prompts over five months, from July through November 2026. Its November 19 report describes three broad findings.

First, it observed activity indicating that data from at least three AI providers had been exposed. Dragos says the planted credentials were used in attempts to access its controlled test systems and canary cloud accounts.

Second, it found that some inference marketplace resellers could view and retain customer prompts using ordinary request logging. According to Dragos, this did not require a software exploit or a sophisticated break-in. A reseller offering a model through a marketplace could enable logging and collect requests that passed through its service.

Third, Dragos found cases where privacy settings and published data-handling policies appeared not to be followed. It reported examples of URLs in prompts being accessed by organisations that customers did not expect to receive the data, including cases involving requests marked as no data collection or Zero Data Retention.

The report is important because it tests what happened to data after an AI request was sent. A provider's privacy policy describes what should happen. A canary experiment can reveal evidence about what happened in practice.

There are limits. The test prompts were designed to detect access to specific markers. They do not reveal every person or system that may have seen a prompt, and they do not establish that every customer request was exposed. Dragos also did not publicly name all the providers or organisations implicated in its wider findings.

## OpenRouter removes 125 endpoints from ZDR eligibility

OpenRouter operates as a gateway between customers and a large ecosystem of AI models and inference providers. A user can send a request through the platform, which routes it to a provider capable of serving the selected model.

That convenience can also make the data path less obvious. The company running the model, the company hosting the model and the service routing the request may not always be the same organisation.

In its November 22 announcement, OpenRouter said it had taken three steps:

1. It off-boarded three providers following its investigations.
2. It removed 125 endpoints from Zero Data Retention eligibility. The removals included providers flagged by researchers and additional endpoints removed as a precaution.
3. It notified customers who might have been affected.

OpenRouter also said it was adapting the researchers' testing approach so that it could run similar checks continuously. It was conducting technical verification of network paths to identify cases where requests and responses might be forwarded to third parties. It said providers would need to provide appropriate assurances and validation before removed endpoints could regain ZDR eligibility.

One distinction matters. OpenRouter said the findings did not show a breach or unauthorised access of OpenRouter itself. The action concerned the providers and endpoints in the inference ecosystem around it.

OpenRouter's public post links to security notices from Novita, Phala and Together AI. However, it does not state that these three are necessarily the same three providers it off-boarded. Dragos has also not publicly named the three providers it says were compromised. It would therefore be inaccurate to claim that the identities of all three have been confirmed.

## Three provider disclosures, three different data-handling problems

The public notices now available describe separate incidents. Understanding the differences is essential.

### 1. Together AI: a credential exposed by an AI coding agent

Together AI published a security notice on November 21. It said an AI coding agent committed a credential while work was being done on the company's public GitHub repository.

That credential provided access to a private Hugging Face repository where Together had stored prompt samples collected for routine software testing. The samples came from requests to MiniMax M3, GLM 5.2 and Kimi 2.6, primarily on June 24 and July 4, 8 and 14, 2026.

Together said an unauthorised party obtained the credential and downloaded the stored samples. The party then searched the samples for credentials to other services and tested whether they worked. Five of the credentials tested were canary credentials associated with Dragos.

Together said it had not found evidence of further prompt leakage beyond this incident. Its review of the affected prompts was still under way to determine whether sensitive personal information or other customer data had been exposed. The company said it understood the downloaded data had been deleted.

Together listed several changes, including scoped or short-lived credentials, pull-request checks for secrets, updated development processes for AI coding agents and Zero Data Retention as the default for new accounts.

This incident is a reminder that AI security does not stop at the model endpoint. A coding agent can create a security problem if it handles credentials carelessly or places them in a repository where they become accessible.

### 2. Novita: some MiniMax requests were forwarded to another API

Novita published a privacy notice on November 22. It said an independent researcher reported an issue with the handling of MiniMax requests.

Novita's review found that a routing configuration issue caused some requests to be forwarded to MiniMax's official API rather than being processed on Novita-hosted infrastructure. The company said it suspended the affected models.

Novita identified a potential exposure period from May 28 to November 11, 2026. It said requests made directly through Novita and requests routed to Novita through OpenRouter could be affected.

The company said it did not itself retain customer prompts or generated outputs or use them for model training. It was following up with MiniMax to understand whether data had been retained by the receiving service and to verify deletion.

The practical issue here is the difference between the service a customer thinks is processing a request and the service that actually receives it. A routing or partner configuration can change that path.

### 3. Phala: an inference server was compromised

Phala's preliminary incident report, published on November 10, describes a different type of event.

Phala said an attacker compromised infrastructure associated with an inference deployment serving DeepSeek V4 Flash 0731 requests routed through OpenRouter. The attacker gained control of the inference environment, making request data visible while it was being processed.

Phala advised users whose requests were routed to the affected deployment during its stated precautionary exposure window, October 21 through November 8, to treat request contents as potentially exposed and rotate any credentials or secrets included in those requests.

Phala said it contained the incident on November 8, restored the affected model service with additional protections and had observed no successful unauthorised access after containment. Its investigation and verification work remained in progress when the report was published.

This was an infrastructure compromise, not the same mechanism as the exposed repository credential described by Together AI or the routing configuration issue described by Novita.

## What Zero Data Retention actually promises

Zero Data Retention is a privacy arrangement under which a provider agrees not to store the prompts and responses covered by that arrangement after processing.

For a business, this can be important. Prompts may contain source code, customer details, internal documents, commercial plans, financial information or credentials. If those records are retained, they may create additional risks through storage, access, backups, logging or downstream sharing.

But a ZDR label should not be treated as a magic shield.

A request may pass through multiple organisations. A gateway may route it to an inference provider. That provider may use another service. A hosting partner may operate the underlying infrastructure. The customer needs to know which parties are covered by the retention promise and whether the same controls apply across the full route.

There are also different kinds of data handling. A provider might not store prompts for model training but may still process them in operational logs. A service may retain metadata even when it does not retain prompt text. A provider may forward a request to a partner whose policies differ.

The exact terms matter. Businesses should ask whether ZDR applies to prompts, responses, logs, abuse monitoring, backups and downstream providers, and whether the commitment is technically enforced or simply stated in a policy.

## Why this matters to Indian companies

Indian businesses are adopting AI APIs quickly. Software companies use coding assistants. Marketing teams upload campaign material. Media organisations summarise documents and transcripts. Financial services teams experiment with research assistants. Startups route requests through model gateways to compare cost, speed and quality.

In each case, the prompt can contain information that should not leave the organisation without controls.

Consider a media company that sends an unpublished interview transcript to an AI service for summarisation. Or a software company that shares a code snippet containing an internal endpoint. Or a customer support team that asks a model to classify complaints containing names, phone numbers and account details.

The risk is not limited to a hacker stealing a password. It can include confidential business information being retained or accessed by a party that the organisation did not know was in the processing chain.

For Indian companies, data protection reviews should therefore include AI vendors and their downstream providers. Procurement teams should not accept a generic statement that a service is secure. They should ask for the actual data flow, retention terms, processing locations, subprocessors, incident notification commitments and evidence of access controls.

## A practical AI prompt supply-chain checklist

Businesses do not need to stop using AI APIs. They need to make the data path visible and limit what they send.

### 1. Map every hop

Document the application, gateway, model provider, hosting provider and any downstream service that can receive a prompt. Ask the vendor to disclose partner routing and changes to the processing chain.

### 2. Classify prompts before sending them

Create simple categories such as public, internal, confidential and restricted. Decide which categories may be sent to external AI services. Remove personal information, credentials and customer identifiers unless there is a clear approved reason.

### 3. Verify ZDR at endpoint level

Do not assume that a platform-wide privacy setting applies to every model and provider. Check the exact endpoint, route and downstream provider. Keep a dated record of the provider's terms and any technical evidence supplied.

### 4. Stop secrets entering prompts

API keys, passwords, private tokens and database credentials should not be pasted into chat prompts or coding-agent contexts. Use secret managers, environment variables and scoped credentials. Scan repositories and pull requests for exposed secrets.

### 5. Keep an approved provider register

Record which models and endpoints employees may use, what data they can receive, their retention terms and who has approved them. Recheck the register when a provider changes its routing or privacy terms.

### 6. Prepare an incident response process

If a prompt may have contained a live credential, revoke and rotate it. Review access logs. Identify which model, endpoint and time window were involved. Ask the provider for a written account of the exposure and the affected data.

## Measure the risk instead of relying on a privacy badge

An organisation can create a simple internal metric called the AI Data Exposure Surface.

Score each AI workflow on five dimensions:

- **Route visibility:** Do we know every organisation that can receive the request?
- **Retention assurance:** Is retention disabled or contractually and technically controlled at every relevant hop?
- **Sensitive data control:** Are credentials and personal or confidential information removed before submission?
- **Access accountability:** Can we identify who or what accessed the prompt and when?
- **Incident readiness:** Can we identify affected requests, revoke secrets and notify the right people quickly?

Give each dimension a score from zero to two. Zero means unknown or absent, one means partially documented, and two means verified. A workflow can score up to ten. Any zero in route visibility or retention assurance should trigger a review before confidential data is sent.

This is not a formal security certification. It is a practical way for procurement, security and AI teams to find gaps before they become incidents.

## What this story does not prove

The disclosures should be read carefully.

Dragos says it found evidence of provider compromises and data-handling failures, but it has not publicly named all the organisations involved. OpenRouter says it removed three providers and 125 endpoints from ZDR eligibility, but it has not publicly identified the three off-boarded providers in the announcement. The public notices from Together AI, Novita and Phala describe different events and should not be treated as proof that all three were responsible for the same findings.

Together AI says its investigation into the affected prompt contents is ongoing. Novita says it is following up with MiniMax on retention and deletion. Phala says its investigation and remediation verification continue.

The evidence is serious, but the boundaries of each incident matter. It would be wrong to say that every AI prompt sent through every gateway has been exposed, or that every provider ignores privacy settings.

## The next AI competition is also about trust

The AI industry has spent years competing on model quality, speed, context length and price. As more businesses use AI for real work, the supply chain behind each answer becomes just as important.

A model may be excellent at writing code or analysing documents. But a business also needs to know where its prompts travel, who can access them, how long they remain available and what happens when a provider's security controls fail.

The lesson from these disclosures is straightforward: do not treat the AI prompt as a harmless question. Treat it as business data moving through a chain of vendors.

The right question for every AI procurement team is not only, "Which model are we using?" It is, "Who else can see what we send to it?"

**Source and reporting note:** This article is based on public security disclosures and research published by Dragos, OpenRouter, Together AI, Novita and Phala. We are reporting what these organisations have shared and are not involved in the research, incident investigations or product operations. Some investigations remain ongoing, and the scope of affected data may change as providers publish further findings. Please consult the original source links above for full details and subsequent updates.
