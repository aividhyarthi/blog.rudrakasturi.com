---
title: "Did Claude Help Prove the Riemann Hypothesis? What the New Mathematical Checks Actually Show"
date: 2026-11-22T10:20:00+05:30
description: "Anthropic mathematician Levent Alpöge says he worked with Claude on a proof of the Riemann Hypothesis. The Lean and Mathlib communities now say they have full confidence in the formalised proof, while broader mathematical understanding and review continue."
tag: "ai"
categories: ["AI","Technology","Research","Science"]
tags: ["Claude","Anthropic","Riemann Hypothesis","Lean","AI Research","Mathematics"]
type: "article"
tldr: "Levent Alpöge has published a proof of the Riemann Hypothesis developed with Claude, expressed as a large Lean formalisation. The Lean and Mathlib communities have now issued a joint statement saying they have full confidence in the proof, citing successful compilation, comparison against the established Mathlib statement and checks by several independent proof checkers. Mathematicians still need to study and explain the argument. The Clay Mathematics Institute has not yet updated its official page, which continues to list the problem as unsolved."
sources:
  - title: "RH Lean proof: verification files"
    url: "https://math.mit.edu/~drew/grh/"
    publisher: "MIT, Andrew Sutherland"
    reviewed: "2026-11-22"
  - title: "Anthropic worker claims to have solved a Holy Grail of math problems with the help of AI"
    url: "https://apnews.com/article/4fe8b69a891f160f9e7f0c85af8c55c8"
    publisher: "Associated Press"
    reviewed: "2026-11-22"
  - title: "Lean verification of the Riemann Hypothesis"
    url: "https://leanprover-community.github.io/blog/posts/riemann-hypothesis/"
    publisher: "Lean and Mathlib communities"
    reviewed: "2026-11-22"
  - title: "Alpöge/Claude proof of the Generalized Riemann Hypothesis"
    url: "https://www.math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/"
    publisher: "University of Waterloo"
    reviewed: "2026-11-22"
  - title: "Riemann Hypothesis"
    url: "https://www.claymath.org/millennium/Riemann-Hypothesis/"
    publisher: "Clay Mathematics Institute"
    reviewed: "2026-11-22"
---

A mathematician working at Anthropic says he has found a proof of one of the most famous unsolved problems in mathematics with help from the company's AI assistant, Claude. The claim has drawn attention not simply because an AI system was involved, but because the proposed proof has begun passing a series of demanding computer-based checks.

The mathematician is Levent Alpöge. On November 20, he published a short note and a large formalisation written in Lean, a proof assistant used to express mathematical arguments in a form that computers can verify.

The claim concerns the Riemann Hypothesis, a problem first proposed by Bernhard Riemann in 1859. It is one of the seven Millennium Prize Problems identified by the Clay Mathematics Institute. A correct proof would be a major mathematical achievement.

But there is an important distinction between a mathematician announcing a proof, a computer checking a formalised argument, specialists confirming that the formal statement is the intended theorem, and the wider mathematical community understanding the new ideas. Those are related stages, not interchangeable ones.

## What is the Riemann Hypothesis?

The Riemann Hypothesis is about the hidden pattern behind the distribution of prime numbers.

Prime numbers are numbers greater than one that can be divided only by one and themselves. The first few are 2, 3, 5, 7, 11 and 13. They appear irregularly across the number line, but mathematicians have discovered deep connections between their distribution and a function called the Riemann zeta function.

The hypothesis makes a precise statement about the non-trivial zeros of this function. It says that all of them lie on a particular vertical line in the complex plane, where the real part is one-half.

That may sound abstract, but the problem matters because the zeta function is closely connected to how prime numbers are distributed. A proof would confirm a central prediction in number theory and strengthen many results that depend on it.

The Clay Mathematics Institute lists the problem as one of its Millennium Prize Problems, each carrying a $1 million prize for an accepted solution under the institute's rules. Its official page had not yet been updated at the time of this article and continued to list the Riemann Hypothesis as unsolved.

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

A subsequent joint statement from the Lean and Mathlib communities, endorsed by the Lean FRO and Mathlib Initiative, goes further. It says the communities have full confidence in the proof and that the four key criteria for formal verification have been met. These include checking that the theorem statement is the intended Riemann Hypothesis, confirming that the code compiles, comparing the proved theorem with the established Mathlib statement, and checking the exported proof with several independent proof checkers. The statement says these checks were run on an inert export, out of reach of hypothetical malicious code in the original proof sources.

This is a substantial change in the verification status. It is no longer accurate to describe the core formal checks as unfinished. The remaining challenge is for mathematicians to study the proof's ideas, explain them in a conventional form and understand the implications.

## Why formal verification is important

A mathematical proof is not accepted because it sounds convincing. Every step must follow from earlier steps, definitions and accepted assumptions.

Formal verification makes this process more precise. The mathematician expresses the proof in a formal language. The proof assistant checks the logical steps. Other researchers can then obtain the same source and run the checks themselves.

This creates a useful separation between the person or system that proposes a proof and the software that checks it.

The approach is especially important when AI is involved. Large language models can generate sophisticated arguments, but they can also make confident mistakes. A formal checker provides a way to test whether the final formal argument is logically valid within the system.

It is not a guarantee that every possible problem has disappeared. The definitions must represent the intended mathematics, the checker and its foundations must be trusted, and independent teams must be able to reproduce the results.

## What is still open?

There are several questions that should not be hidden behind the headline.

**First, formal verification and mathematical exposition are different tasks.** The Lean and Mathlib communities now report that the formal verification criteria have been met. That is strong evidence that the formalised theorem follows within the stated foundations. It does not automatically give every mathematician an intuitive understanding of the proof.

**Second, a computer-checked proof is not the same as a human-understood proof.** Mathematicians need to understand the central ideas, why the argument works and whether the definitions capture the intended theorem. The released Lean archive is very large, and a conventional readable mathematical exposition had not accompanied it.

**Third, the scope of the generalised result needs precision.** The MIT page says the related generalised statements cover Dirichlet L-functions. It explicitly excludes broader families such as Dedekind zeta functions, Hecke L-functions and automorphic L-functions in general. It would therefore be misleading to say that every version of the Generalized Riemann Hypothesis has been solved.

**Fourth, formal verification depends on the foundations and tools being used correctly.** The independent checkers reduce reliance on a single implementation, but researchers still need to examine the definitions, source provenance and remaining verification steps.

The Clay Mathematics Institute's official page had not yet been updated and continued to label the Riemann Hypothesis as unsolved. A community verification statement is a major milestone, but it does not automatically settle the institute's prize process or replace broader mathematical scrutiny.

## What does this mean for AI research?

The story is important even before the mathematical claim reaches a final verdict.

For years, generative AI has been judged mainly on writing, coding, conversation and benchmark performance. Mathematical research is a harder test because a result must be correct, not merely plausible.

The combination of an AI system and a proof assistant offers a different workflow. The AI can help explore ideas, generate formal code or work through difficult intermediate steps. The proof assistant then checks the formal result according to strict logical rules.

This could become useful in other fields where correctness matters. Researchers may use AI to explore candidate proofs, identify patterns or formalise existing results. The role of the checker is to make it harder for a plausible but invalid argument to pass unnoticed.

It also changes how AI capability should be measured. A model that produces a beautiful explanation is not necessarily useful for serious mathematics. A system that helps create a formal argument that independent tools can verify would be a more meaningful contribution.

## What should readers take away?

There are three separate facts.

1. A mathematician at Anthropic has claimed that he and Claude found a proof of the Riemann Hypothesis.
2. The Lean and Mathlib communities have publicly stated that the formal proof passed the key verification checks and that they have full confidence in its correctness.
3. Mathematicians still need to study and explain the proof, while the Clay Mathematics Institute page had not yet reflected the announcement.

This makes the development substantially stronger than an unverified AI-generated claim. The responsible headline is that a Claude-assisted proof has received strong formal verification and community endorsement, while broader mathematical exposition and institutional updates continue.

The real breakthrough may ultimately be the proof itself. It may also be the demonstration that AI systems can contribute to formal mathematics when their output is subjected to rigorous, independently reproducible checking.

For now, the right description is a Claude-assisted proof that has received a strong formal verification endorsement from the Lean and Mathlib communities. The work now moves into the wider process of mathematical study, explanation and institutional consideration.

**Source and reporting note:** This article reports the claim made by Levent Alpöge and the verification results documented by Andrew Sutherland at MIT, alongside the joint statement from the Lean and Mathlib communities and the public status of the Clay Mathematics Institute. We are not involved in the research, the proof or its verification. Verification status and mathematical interpretation may continue to develop. Please consult the original sources for the latest record: [MIT verification files](https://math.mit.edu/~drew/grh/), [Lean and Mathlib community statement](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/), [University of Waterloo verification overview](https://www.math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/), [Associated Press report](https://apnews.com/article/4fe8b69a891f160f9e7f0c85af8c55c8) and [Clay Mathematics Institute](https://www.claymath.org/millennium/Riemann-Hypothesis/).