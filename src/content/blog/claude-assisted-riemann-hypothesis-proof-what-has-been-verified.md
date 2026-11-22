---
title: "Did Claude Help Prove the Riemann Hypothesis? What the New Mathematical Checks Actually Show"
date: 2026-11-22T08:10:00+05:30
description: "Anthropic mathematician Levent Alpöge says he worked with Claude on a proof of the Riemann Hypothesis. Independent Lean checks have accepted the formalised argument, but important verification and human review questions remain."
tag: "ai"
categories: ["AI","Technology","Research","Science"]
tags: ["Claude","Anthropic","Riemann Hypothesis","Lean","AI Research","Mathematics"]
type: "article"
draft: true
tldr: "Levent Alpöge has published a claimed proof of the Riemann Hypothesis developed with Claude, expressed as a large Lean formalisation. MIT mathematician Andrew Sutherland's verification page reports that all 175,187 modules compiled, several independent checkers accepted the exported proof, and the five headline theorems matched a separate challenge. At the same time, additional Lean comparator and kernel checks were still running in the latest cited status, and the mathematical community still needs to understand the argument. The Clay Mathematics Institute continues to list the problem as unsolved."
sources:
  - title: "RH Lean proof: verification files"
    url: "https://math.mit.edu/~drew/grh/"
    publisher: "MIT, Andrew Sutherland"
    reviewed: "2026-11-22"
  - title: "Anthropic worker claims to have solved a Holy Grail of math problems with the help of AI"
    url: "https://apnews.com/article/4fe8b69a891f160f9e7f0c85af8c55c8"
    publisher: "Associated Press"
    reviewed: "2026-11-22"
  - title: "Riemann Hypothesis"
    url: "https://www.claymath.org/millennium/Riemann-Hypothesis/"
    publisher: "Clay Mathematics Institute"
    reviewed: "2026-11-22"
---

A mathematician working at Anthropic says he has found a proof of one of the most famous unsolved problems in mathematics with help from the company's AI assistant, Claude. The claim has drawn attention not simply because an AI system was involved, but because the proposed proof has begun passing a series of demanding computer-based checks.

The mathematician is Levent Alpöge. On November 20, he published a short note and a large formalisation written in Lean, a proof assistant used to express mathematical arguments in a form that computers can verify.

The claim concerns the Riemann Hypothesis, a problem first proposed by Bernhard Riemann in 1859. It is one of the seven Millennium Prize Problems identified by the Clay Mathematics Institute. A correct proof would be a major mathematical achievement.

But there is an important distinction between a mathematician announcing a proof, a computer checking a formalised argument and the mathematical community accepting the result. Those are related stages, not interchangeable ones.

## What is the Riemann Hypothesis?

The Riemann Hypothesis is about the hidden pattern behind the distribution of prime numbers.

Prime numbers are numbers greater than one that can be divided only by one and themselves. The first few are 2, 3, 5, 7, 11 and 13. They appear irregularly across the number line, but mathematicians have discovered deep connections between their distribution and a function called the Riemann zeta function.

The hypothesis makes a precise statement about the non-trivial zeros of this function. It says that all of them lie on a particular vertical line in the complex plane, where the real part is one-half.

That may sound abstract, but the problem matters because the zeta function is closely connected to how prime numbers are distributed. A proof would confirm a central prediction in number theory and strengthen many results that depend on it.

The Clay Mathematics Institute lists the problem as one of its Millennium Prize Problems, each carrying a $1 million prize for an accepted solution under the institute's rules. Its official page continues to list the Riemann Hypothesis as unsolved.

## What did the mathematician claim?

Alpöge says he worked with Claude on the proof over a period of weeks. Rather than publishing a conventional mathematical paper that walks readers through every step, he released a short note and a large Lean archive.

Lean is a proof assistant. It allows mathematicians to write definitions, assumptions and proof steps in a language that a small trusted checking component, called a kernel, can verify.

The released archive is unusually large. MIT mathematician Andrew Sutherland's verification page records 175,187 Lean modules. The archive contains a formal statement of the Riemann Hypothesis and related statements about Dirichlet L-functions.

The distinction matters. A chatbot can produce a persuasive-looking explanation that contains a hidden error. A formal proof assistant checks whether each formal step follows from the definitions and accepted axioms. If a step is invalid, the checker should reject it.

This does not mean that the computer has independently discovered the mathematics in the way a human mathematician might. It means that the proposed argument has been translated into a precise formal system where its logical structure can be tested.

## What has actually been verified?

The most useful public record is the verification page maintained by Andrew Sutherland at MIT. It provides a dated account of the checks and the results.

In the status updated on November 21 at 12:55 UTC, the page reported several important results.

**All 175,187 modules compiled.** The source compiled with zero errors using Lean 4.33.1 and Mathlib 4.33.1. Mathlib is a large community-maintained library of formalised mathematics.

**Lean's kernel replay passed.** The page reports that every compiled module was replayed through Lean's kernel, with 175,187 out of 175,187 accepted.

**The proof used only three standard axioms.** The five headline theorems depended on Lean's standard axioms named propext, Classical.choice and Quot.sound. The audit did not report additional custom axioms for those theorems.

**Independent checkers accepted the exported proof.** The Rust-based nanoda checker accepted the full exported proof. The con-leche checker also accepted the exported declarations, and its comparison mode reported that all five headline theorems were justified by the solution. The lean4lean checker accepted all 175,187 compiled modules, with five requiring a higher computation limit.

These results are meaningful. They make the claim more substantial than an AI-generated mathematical explanation or a collection of experimental calculations.

However, the same MIT verification page also recorded that the full lake comparator run and additional Lean kernel replays of the exported proof were still in progress at the time of its latest cited update. It also documented caveats about the unsandboxed build and the need to compare exports from an independent sandboxed build.

A careful report must include both the successful checks and the checks that had not yet finished.

## Why formal verification is important

A mathematical proof is not accepted because it sounds convincing. Every step must follow from earlier steps, definitions and accepted assumptions.

Formal verification makes this process more precise. The mathematician expresses the proof in a formal language. The proof assistant checks the logical steps. Other researchers can then obtain the same source and run the checks themselves.

This creates a useful separation between the person or system that proposes a proof and the software that checks it.

The approach is especially important when AI is involved. Large language models can generate sophisticated arguments, but they can also make confident mistakes. A formal checker provides a way to test whether the final formal argument is logically valid within the system.

It is not a guarantee that every possible problem has disappeared. The definitions must represent the intended mathematics, the checker and its foundations must be trusted, and independent teams must be able to reproduce the results.

## What is still open?

There are several questions that should not be hidden behind the headline.

**First, the full verification process was not complete in the cited MIT status.** Several strong checks had passed, but the page still marked the end-to-end comparator and additional kernel replays as running.

**Second, a computer-checked proof is not the same as a human-understood proof.** Mathematicians need to understand the central ideas, why the argument works and whether the definitions capture the intended theorem. The released Lean archive is very large, and a conventional readable mathematical exposition had not accompanied it.

**Third, the scope of the generalised result needs precision.** The MIT page says the related generalised statements cover Dirichlet L-functions. It explicitly excludes broader families such as Dedekind zeta functions, Hecke L-functions and automorphic L-functions in general. It would therefore be misleading to say that every version of the Generalized Riemann Hypothesis has been solved.

**Fourth, formal verification depends on the foundations and tools being used correctly.** The independent checkers reduce reliance on a single implementation, but researchers still need to examine the definitions, source provenance and remaining verification steps.

The Clay Mathematics Institute's official page continues to label the Riemann Hypothesis as unsolved. A formal claim does not automatically satisfy the institute's prize requirements or replace the wider process of mathematical scrutiny.

## What does this mean for AI research?

The story is important even before the mathematical claim reaches a final verdict.

For years, generative AI has been judged mainly on writing, coding, conversation and benchmark performance. Mathematical research is a harder test because a result must be correct, not merely plausible.

The combination of an AI system and a proof assistant offers a different workflow. The AI can help explore ideas, generate formal code or work through difficult intermediate steps. The proof assistant then checks the formal result according to strict logical rules.

This could become useful in other fields where correctness matters. Researchers may use AI to explore candidate proofs, identify patterns or formalise existing results. The role of the checker is to make it harder for a plausible but invalid argument to pass unnoticed.

It also changes how AI capability should be measured. A model that produces a beautiful explanation is not necessarily useful for serious mathematics. A system that helps create a formal argument that independent tools can verify would be a more meaningful contribution.

## What should readers take away?

There are three separate facts.

1. A mathematician at Anthropic has claimed that he and Claude found a proof of the Riemann Hypothesis.
2. The large Lean formalisation has passed several substantial machine-based checks, including checks by independently written proof checkers.
3. The cited MIT verification record still showed additional checks in progress, while broader mathematical understanding and acceptance remain necessary.

The first two points make this a significant AI research story. The third is why the headline should not yet say that the Riemann Hypothesis has officially been solved.

The real breakthrough may ultimately be the proof itself. It may also be the demonstration that AI systems can contribute to formal mathematics when their output is subjected to rigorous, independently reproducible checking.

For now, the right description is a major claimed proof with strong formal verification progress, not an officially accepted solution.

**Source and reporting note:** This article reports the claim made by Levent Alpöge and the verification results documented by Andrew Sutherland at MIT, alongside the current public status of the Clay Mathematics Institute. We are not involved in the research, the proof or its verification. Verification status can change as additional checks and mathematical reviews are completed. Please consult the original sources for the latest record: [MIT verification files](https://math.mit.edu/~drew/grh/), [Associated Press report](https://apnews.com/article/4fe8b69a891f160f9e7f0c85af8c55c8) and [Clay Mathematics Institute](https://www.claymath.org/millennium/Riemann-Hypothesis/).