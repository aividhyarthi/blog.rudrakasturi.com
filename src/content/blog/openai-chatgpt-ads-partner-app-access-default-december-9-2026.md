---
title: "OpenAI to Change ChatGPT Ads Partner App Defaults on December 9: What Organisations Need to Check"
date: 2026-11-25T16:30:00+05:30
description: "An OpenAI email says approved partner apps will be allowed to connect to ChatGPT Ads data by default from December 9. Here is what the change means, what it does not mean and what administrators should review."
tag: "ChatGPT"
tldr: "An email received by an organisation says ChatGPT Ads settings will allow approved partner app connections by default from December 9, unless the organisation opts out by December 8. This does not mean every partner app is automatically connected or receives unrestricted access. Organisation approval and each advertiser's own authorisation remain separate steps."
categories: ["AI", "ChatGPT", "Advertising", "Technology"]
tags: ["ChatGPT Ads", "OpenAI Ads", "External Access", "Partner Apps", "Data Permissions", "Advertising Technology"]
type: "research"
sources:
  - title: "Managing your tenant in Admin Console"
    url: "https://help.openai.com/en/articles/12289294-managing-your-tenant-in-admin-console"
    publisher: "OpenAI Help Center"
    reviewed: "2026-11-25"
  - title: "ChatGPT Business release notes"
    url: "https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes"
    publisher: "OpenAI Help Center"
    reviewed: "2026-11-25"
  - title: "Sign in with ChatGPT"
    url: "https://help.openai.com/en/articles/20001410-sign-in-with-chatgpt"
    publisher: "OpenAI Help Center"
    reviewed: "2026-11-25"
---

An email sent to an organisation says that ChatGPT Ads settings will change on **9 December 2026**. From that date, connections to approved partner apps will be allowed by default under the organisation's ChatGPT Ads settings.

The notice gives organisations until **8 December 2026** to opt out. If they do nothing, the new default will take effect on 9 December.

At first glance, this may sound as if OpenAI is opening every advertising account to third party applications. That is not what the notice says. The distinction between allowing an app to request access and actually connecting that app is important.

The email says that a person setting up advertising through a partner app will sign in with OpenAI and authorise the app to view or manage Ads data that the person can already access. OpenAI's public documentation describes a similar two step permission model: organisation approval makes an app permission available, and the individual advertiser still completes the app's authorisation flow using their own existing permissions.

This article explains what the notice says, what the public documentation confirms, and what administrators should review before the deadline.

![Editorial illustration of an advertiser reviewing ChatGPT Ads permissions, connected partner apps and organisation access controls](/images/chatgpt-ads-partner-permissions-editorial.svg)

## What changes on December 9?

According to the email notice received by an organisation, the default setting for approved partner app connections to ChatGPT Ads will change on 9 December.

The notice identifies two permissions:

| Permission | What it allows |
|---|---|
| View ad account | A partner app can view advertising account data that the authorising person is already permitted to access |
| Manage ad account | A partner app can manage supported advertising data or actions within the access granted to that person |

The email says the organisation can keep third party Ads access off by replying to the notice by 8 December. It also points administrators to this location:

**External Access → Organization defaults → ChatGPT Ads**

The exact wording and deadline above come from the email supplied to us. We have not independently verified the distribution list or confirmed that the same date applies to every OpenAI organisation. Administrators should check the notice in their own official organisation mailbox and the Admin Console before taking action.

## Does this mean third party apps will automatically get access to your ad account?

No. This is the most important distinction.

There are separate steps in the access process:

1. **Organisation default:** An administrator decides whether the relevant permission is available to approved partner apps by default.
2. **Partner app connection:** A person chooses to connect a supported partner app and signs in with OpenAI.
3. **Individual authorisation:** The person reviews the permissions requested by the app and authorises the connection.
4. **Existing account permissions:** The app's access is limited by the advertising data and actions the person is already allowed to access.

OpenAI's Admin Console documentation says organisation approval does not replace the individual's authorisation. It also explains that an app can be allowed at organisation level even when no member has connected it yet.

So the change described in the email is a change to the organisation's starting permission setting. It is not evidence that every approved app will be connected automatically, or that every partner receives unrestricted access to every advertising account.

## Why are View and Manage separate permissions?

The two permissions represent different levels of risk.

A view permission is generally read oriented. Depending on the app and the exact scope, it may allow a partner to retrieve reporting or account information.

A manage permission can be more consequential. Depending on the supported actions, it may allow a connected app to make changes to advertising resources. That could affect campaign settings, creative, budgets or other supported operations.

The email does not list the complete technical scope of either permission. Administrators should open the individual app's permission details in External Access rather than assume that every partner requests the same access.

A sensible default is to grant the minimum access needed for the job. If a reporting partner only needs performance data, ask why it needs management permission. If an agency needs to edit campaigns, confirm exactly which actions it can perform and who is accountable for those changes.

## Why is OpenAI making partner app connections easier?

The direction is consistent with a wider shift in business software. Advertising work increasingly happens across several tools. A company may use one platform to plan campaigns, another to manage customer relationships, a separate analytics product to review performance and an agency platform to coordinate work.

A direct connection can reduce manual exports and repeated data entry. It can also help teams bring advertising information into the tools where they already work.

OpenAI's public documentation already describes ChatGPT Ads access for partner applications such as HubSpot. It says administrators can review Ads permissions for an application in External Access, while the advertiser completes the authorisation using their own account permissions.

The benefit is convenience and workflow integration. The trade off is that an organisation must govern which applications can connect, what data they can see and what actions they can take.

## What should organisations do before December 8?

The right response is not to approve everything or block every connection without review. It is to make a deliberate access decision.

### 1. Confirm the notice is genuine

Check the sender address, message authentication and the organisation's Admin Console. Do not use links in an unexpected email to change security settings. Open the Admin Console through the organisation's known sign in route and check whether the same notice or setting is visible there.

### 2. Identify the person responsible for organisation level access

OpenAI says organisation level External Access settings are managed by a Global Admin. A ChatGPT workspace owner, Ads account administrator or HubSpot administrator does not automatically have this tenant wide authority.

Make sure the decision is made by the right administrator, not simply the person who manages campaigns.

### 3. Review the two permissions separately

Look at View ad account and Manage ad account as separate decisions. Do not treat them as one general integration switch.

Ask whether the organisation needs partner apps to view data, manage data or both.

### 4. Review the approved partner apps

Check which applications are approved, which ones are actually connected and which permissions each app requests. An app being allowed by an organisation does not necessarily mean someone has connected it.

Remove or restrict apps that are no longer needed, and review any app specific exceptions to the organisation default.

### 5. Apply least privilege

Give each partner only the access it needs. Prefer view access for reporting use cases. Allow management access only when the partner has a clear operational role and the organisation has agreed on the controls.

### 6. Make the opt out decision before the stated deadline

If the organisation wants to keep third party Ads access off, the email instructs it to reply by 8 December. Because this instruction is based on a recipient supplied email, verify the request through a known OpenAI account contact or official Admin Console route before sending sensitive information or acting on an unfamiliar message.

If the organisation chooses to accept the new default, it should still review the permissions granted to each individual application.

## A simple partner access review checklist

| Question | Why it matters |
|---|---|
| Is the partner app approved by the organisation? | Organisation level approval is the first gate |
| Is the app actually connected by a user? | An allowed app may have no connected users |
| Who authorised the connection? | Individual consent is a separate step |
| Does it have View or Manage permission? | The level of access changes the risk |
| What can the user already access in Ads Manager? | App access is tied to the user's existing permissions |
| Is the connection still needed? | Old integrations can create unnecessary access |
| Who reviews activity and removes access? | Permissions need ongoing ownership |

## What this means for agencies and advertisers

For agencies, the change could make it easier to connect approved workflow tools to ChatGPT Ads accounts. But it also makes permission discipline more important. Agencies should explain why they need each permission and should not request management access simply because it is available.

For advertisers, the key question is not whether an app is popular. It is whether the organisation trusts the provider, understands the data being shared and has a clear reason to connect it.

For security and IT teams, the change belongs in the same review process as other delegated application access. Keep an inventory of connected apps, identify the business owner for each integration and periodically remove access that is no longer required.

## The bigger shift: advertising platforms are becoming connected systems

The move described in the email is part of a broader change in how advertising work is managed. Ad platforms are no longer isolated dashboards. They increasingly connect to analytics, customer relationship management, agency operations and AI assisted workflows.

That can make campaign work faster. It also means that access defaults are business decisions, not minor settings.

The useful principle is simple: organisation approval should be deliberate, individual authorisation should be informed, and the access granted should match the work being done.

**The December 9 change is not the same as automatic access for every partner. But it is a good reason for every organisation receiving the notice to review who can connect to its advertising data, what those apps can do and who is responsible for the decision.**

*Editorial note: The December 9 default change and December 8 opt out deadline in this article are based on an email notice supplied by a recipient on 25 November 2026. OpenAI's public documentation confirms the separate organisation approval and individual authorisation model, but we could not independently verify the exact date or whether the notice applies to every organisation. Check the current Admin Console and official OpenAI communications before acting.*
