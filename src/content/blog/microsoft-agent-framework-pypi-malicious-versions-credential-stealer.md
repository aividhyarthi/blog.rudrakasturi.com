---
title: "Malicious Microsoft Agent Framework packages stole developer credentials: what users should check"
date: 2026-11-19T07:00:00+05:30
description: "Two compromised versions of Microsoft's Agent Framework Python package were distributed through PyPI on 17 November, prompting developers to check installations and rotate exposed credentials."
tag: "Cybersecurity"
tldr: "Two compromised versions of Microsoft's Agent Framework Python package were distributed through PyPI on 17 November, prompting developers to check installations and rotate exposed credentials."
sources:
  - title: "Microsoft Agent Framework releases poisoned with credential stealer"
    url: "https://www.securityweek.com/microsoft-agent-framework-releases-poisoned-with-credential-stealer/"
    publisher: "SecurityWeek"
  - title: "Microsoft's Agent Framework PyPI package compromised to steal credentials"
    url: "https://www.bleepingcomputer.com/news/security/microsofts-agent-framework-pypi-package-compromised-to-steal-credentials/"
    publisher: "BleepingComputer"
categories: ["AI News", "Cybersecurity", "Microsoft"]
tags: ["Microsoft Agent Framework", "PyPI", "supply chain attack", "credential theft", "Python security"]
draft: false
---

Two malicious versions of Microsoft's Agent Framework Python package were published to the Python Package Index (PyPI) on 17 November 2026. SecurityWeek and BleepingComputer reported that versions 1.26.1 and 1.26.2 contained credential-stealing code. The releases were subsequently removed from PyPI.

The incident is a reminder that installing an AI development framework is also a software supply-chain security decision. A package can appear to work normally while carrying code that runs in the background.

## What happened?

Microsoft Agent Framework is a toolkit for building AI agents and multi-agent applications. According to the security reports, the two affected package versions were designed to collect sensitive information from developer environments, including cloud and continuous-integration credentials.

The reports say the malicious code could execute during Python startup through a .pth file, rather than waiting for a developer to import the package in a script. That makes the incident particularly serious for environments where Python is started automatically by build systems or development tools.

The reports identify 1.26.1 and 1.26.2 as the affected versions and say they were removed. SecurityWeek reported that a framework maintainer acknowledged the removal and said an investigation was under way. The precise initial compromise route should not be assumed until the investigation establishes it.

## What developers should do now

If your team installed either affected version, treat the environment as potentially exposed.

1. Check package inventories, lockfiles, build logs and virtual environments for agent-framework versions 1.26.1 and 1.26.2.
2. Preserve relevant logs and isolate affected machines or build runners while investigating.
3. Remove the affected package and install a verified clean release. Confirm the current safe version from the official project and package index before upgrading.
4. Rotate credentials that were available to the affected environment, including cloud keys, GitHub tokens, package publishing tokens and CI/CD secrets.
5. Review cloud audit logs and repository activity for unexpected access, token use or workflow changes.
6. Rebuild affected environments from trusted sources rather than assuming that uninstalling the package removes every trace.

Do not rely only on whether the application appeared to run normally. Credential theft can happen without an obvious application failure.

## What this means for AI agent development

Agent frameworks often have access to source code, APIs, cloud services and deployment systems. That makes their dependency chains attractive targets. Teams should pin package versions, use trusted registries and hashes where practical, scan dependencies and keep production secrets out of developer environments wherever possible.

**Bottom line:** The reported compromise affected Agent Framework versions 1.26.1 and 1.26.2. Check your dependency history, investigate any exposure and rotate credentials that may have been accessible. Confirm remediation against Microsoft's latest security guidance before returning affected systems to service.
