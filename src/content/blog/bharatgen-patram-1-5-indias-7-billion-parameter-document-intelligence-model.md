---
title: "BharatGen Launches Patram 1.5: India's New 7 Billion Parameter Model Can Read and Reason Through Documents"
date: 2026-11-27
description: "BharatGen's Patram 1.5 is a 7 billion parameter document intelligence model designed to understand complex documents, tables, charts and handwriting."
draft: true
tag: "India AI"
tldr: "BharatGen has introduced Patram 1.5, a 7 billion parameter vision language model for document intelligence. The company reports an overall score of 83 on its evaluation and highlights OCR 3.0, structured extraction and abstention when information is unclear. These are BharatGen's reported results and should be evaluated against independent, real-world document tests."
categories: ["AI", "India AI", "Technology"]
tags: ["AI news", "India AI", "2026"]
type: "article"
sources:
  - title: "Introducing Patram 1.5"
    url: "https://bharatgen.com/blogs/introducing-patram-1-5/"
    publisher: "BharatGen"
    reviewed: "2026-11-27"
---

A large share of business information in India still lives inside documents. Banks process statements and forms, hospitals handle reports, government departments work with applications, and legal teams review contracts and filings.

Reading these documents is not simply an OCR problem. Tables, handwritten notes, stamps, signatures and mixed layouts can make extraction difficult even when the text is technically readable.

BharatGen's new Patram 1.5 is designed for this challenge. Announced on November 26, 2026, it is a 7 billion parameter vision language model focused on document intelligence.

## What is Patram 1.5?

Patram 1.5 is a model that combines visual understanding with language processing. It is designed to interpret the structure and meaning of documents, rather than only convert images into plain text.

BharatGen describes it as a document intelligence system that can work with tables, charts, signatures, stamps and handwriting. It can also extract requested information using natural language instructions and return structured outputs such as JSON, Markdown and HTML.

The company reports an overall evaluation score of 83 and says the model matched the largest model in its comparison despite being 97 times smaller. These are the company's own benchmark claims. The announcement should not be read as proof that Patram will outperform larger models across every document type or language.

## Why document intelligence is different from OCR

Traditional OCR identifies characters and converts them into text. That is useful, but it often loses the relationship between different parts of a document.

Consider a bank statement. OCR may recognise the date, transaction description and amount. Document intelligence needs to understand that these fields belong to the same row, distinguish debit from credit and preserve the table structure.

A similar challenge appears in medical reports, invoices, legal agreements and government forms.

Patram 1.5's focus is on interpreting these relationships and responding to instructions about the document.

## The two capabilities BharatGen highlights

### OCR 3.0

BharatGen describes OCR 3.0 as a capability for more advanced document understanding. The focus is not limited to printed text. The model is designed to handle complex layouts and visual elements such as charts, signatures and stamps.

### Abstention when information is unclear

A particularly important claim is the ability to abstain when the model cannot confidently identify information.

This matters because document extraction systems can create serious problems when they confidently invent a missing number or misread a handwritten entry. A system that can flag uncertainty is more useful in workflows where people need to verify the source.

The practical quality of this behaviour still needs independent testing. A model must not only say when it is uncertain, but do so consistently on difficult documents.

## Where could Patram 1.5 be useful?

The use cases are broad because document-heavy work exists across industries.

**Banking and financial services:** Extracting information from statements, loan applications, invoices and compliance documents.

**Healthcare:** Reading structured information from reports and forms, subject to clinical review and privacy requirements.

**Legal services:** Finding clauses, dates, parties and obligations in contracts and filings.

**Government:** Processing applications, certificates and records that may contain mixed printed and handwritten content.

**Business operations:** Turning invoices, purchase orders and internal documents into structured data that can be checked by staff.

These are potential applications based on the model's stated capabilities, not proof that it is already deployed in every sector.

## Why a 7 billion parameter model matters

A smaller model can be easier to deploy than a much larger one, depending on hardware, throughput and accuracy requirements.

For Indian organisations, the question is whether a model of this size can deliver sufficient document accuracy while keeping deployment and operating costs manageable.

However, parameter count alone does not determine total cost. Organisations must also consider inference speed, memory requirements, document volume, integration work and human review.

Our [guide to AI in enterprise workflows](/openai-and-scientific-discovery-how-ai-supports-research/) discusses why source verification and human review remain important when AI is used for knowledge work.

## How organisations should evaluate Patram 1.5

Before using any document model in production, run a representative test.

1. Build a test set of real documents, with sensitive information removed or properly protected.
2. Include scanned PDFs, tables, handwritten entries, charts, stamps and low-quality images.
3. Measure field-level extraction accuracy, not just whether the model produces a readable summary.
4. Test whether the model flags ambiguous or missing information.
5. Check whether the output preserves relationships between rows, columns and sections.
6. Compare performance with existing OCR and larger vision language models.
7. Measure the time required for human correction.

A useful metric is *verified field accuracy*: the percentage of extracted fields that match the source document after human verification. Track abstention quality and false confident answers separately.

## Frequently asked questions

### What is BharatGen Patram 1.5?

Patram 1.5 is a 7 billion parameter vision language model developed for document intelligence. It is designed to interpret complex documents and extract structured information.

### What makes Patram 1.5 different from ordinary OCR?

Ordinary OCR primarily converts visible characters into text. Patram 1.5 is designed to understand document structure and relationships between text, tables, charts and other visual elements.

### What is OCR 3.0 in Patram 1.5?

BharatGen uses the term OCR 3.0 for its enhanced document understanding capability. The company highlights complex layouts, signatures, stamps, charts and handwriting.

### Can Patram 1.5 read handwritten documents?

BharatGen lists handwriting among the document elements the model is designed to handle. Actual accuracy will depend on handwriting quality, language, scan quality and document format.

### Is Patram 1.5 better than larger AI models?

BharatGen reports that Patram 1.5 matched the largest model in its evaluation while being 97 times smaller. This is a company-reported benchmark result, not an independent conclusion across all tasks.

### Can businesses use Patram 1.5 for financial or medical documents?

Those are potential application areas, but organisations must test accuracy, protect sensitive data and retain appropriate human review before using it in consequential workflows.

## India's document AI opportunity

India's AI opportunity is not limited to building chatbots that answer general questions. A large amount of economic activity depends on understanding documents accurately and moving information between systems.

Patram 1.5 is an interesting attempt to address that problem with a smaller specialised model. The real test will be how it performs on messy, diverse and high-volume documents outside benchmark demonstrations.