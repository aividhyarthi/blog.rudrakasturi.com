---
title: "AWS Shows How to Share NVIDIA GPU Memory Across Kubernetes Workloads"
date: 2026-11-20T09:10:00+05:30
description: "An AWS technical walkthrough demonstrates NVIDIA Run:ai GPU Fractioning on Amazon EKS, allowing compatible workloads to share GPU memory with per-Pod memory contracts."
categories: ["Artificial Intelligence", "AWS", "Cloud Computing", "Developer Tools"]
tags: ["NVIDIA Run:ai", "Amazon EKS", "GPU Fractioning", "Kubernetes", "AI Infrastructure"]
type: "article"
tldr: "An AWS technical walkthrough published on November 19 demonstrates NVIDIA Run:ai GPU Fractioning on Amazon EKS using an NVIDIA A10G GPU. Two Kubernetes Pods each receive an 8 GiB GPU memory contract and successfully allocate 6 GiB. This is a validated example, not a universal performance or cost guarantee."
sources:
  - title: "Using NVIDIA Run:ai GPU Fractioning on Amazon EKS"
    url: "https://aws.amazon.com/blogs/machine-learning/using-nvidia-runai-gpu-fractioning-on-amazon-eks/"
    publisher: "Amazon Web Services"
  - title: "Sample code for GPU fractioning on EKS"
    url: "https://github.com/aws-samples/sample-code-for-gpu-fractioning-on-eks"
    publisher: "AWS Samples"
---

GPU capacity is expensive, and many AI workloads do not use an entire GPU all the time. Notebooks, model evaluations and small inference services can leave memory available while other teams wait for access.

An AWS technical walkthrough published on November 19, 2026 demonstrates how NVIDIA Run:ai GPU Fractioning can share GPU memory across Kubernetes workloads on Amazon Elastic Kubernetes Service (EKS).

The example uses an NVIDIA A10G GPU on an Amazon EC2 G5 instance. It shows two Pods sharing the same physical GPU, each with an 8 GiB memory contract and a successful 6 GiB allocation.

## What is GPU fractioning?

GPU fractioning is a way to divide GPU memory capacity into controlled portions for different workloads. It is different from assigning one entire GPU to every Pod.

The AWS walkthrough combines NVIDIA Run:ai GPU Fractioning Operator with KAI Scheduler. It uses Kubernetes scheduling integration, per-Pod memory contracts and metrics to manage the shared resource.

This is not the same as hardware partitioning through NVIDIA Multi-Instance GPU (MIG). The available isolation and fault behaviour depend on the selected technology and configuration.

## What did AWS demonstrate?

The validated example uses one NVIDIA A10G GPU with approximately 23 GiB of memory.

The walkthrough first establishes a baseline. With whole-GPU scheduling and sharing disabled, one Pod runs while a second Pod remains pending.

After installing the fractioning components, two Pods are scheduled on the same GPU. Each receives an 8 GiB memory contract. The test workload successfully allocates 6 GiB in each Pod.

AWS also tests an allocation above the contract. A 9 GiB allocation attempt fails with an out-of-memory result, demonstrating that the configured memory limit is enforced in that test.

These results demonstrate the behaviour of the tested configuration. They do not establish a general throughput improvement, a fixed cost saving or production readiness for every GPU model.

## Why this matters for AI infrastructure teams

GPU sharing can improve utilisation when workloads have modest memory requirements and do not need exclusive access to an entire device.

Potential workloads include interactive notebooks, short evaluation jobs, compatibility tests and small inference services.

But memory is only one part of GPU performance. Sharing can affect latency and throughput when workloads compete for compute. Teams must measure performance under realistic concurrent load.

## What should teams check before using it?

1. Confirm that the GPU model, driver, toolkit and operator versions are compatible.
2. Measure peak memory use and leave room for CUDA context and runtime overhead.
3. Test latency and throughput with the expected number of concurrent workloads.
4. Restrict access to the privileged components and GPU scheduling controls.
5. Monitor memory use, allocation failures, GPU errors and workload health.
6. Clean up test infrastructure because the EKS control plane, instances, networking and storage can create ongoing cloud charges.

AWS's walkthrough validates a specific G5 and A10G configuration. Other GPU types and cluster designs require their own compatibility checks.

## Frequently asked questions

### What is NVIDIA Run:ai GPU Fractioning?

It is software for sharing GPU memory across workloads, with Kubernetes integration and per-workload memory controls.

### Can two Kubernetes Pods use one GPU?

In the AWS validated example, two Pods run on the same NVIDIA A10G GPU, each with an 8 GiB memory contract.

### Does GPU fractioning guarantee lower AI costs?

No. It can improve utilisation in suitable workloads, but actual savings depend on workload behaviour, performance, infrastructure costs and operational overhead.

### Is GPU fractioning the same as NVIDIA MIG?

No. MIG uses supported hardware partitioning. GPU fractioning is a software-managed approach with different isolation and performance characteristics.

**Technical note:** Treat the AWS walkthrough as a tested example, not a blanket support statement. Validate hardware, driver, operator and Kubernetes compatibility before production use.
