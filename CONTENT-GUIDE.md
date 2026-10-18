# How we write about SEO, AEO and AI search

Goal: be the place people go to *understand* what is changing in search and AI, in plain English,
with every claim traceable to a source.

## Where stories come from
Google Search Central and Googlers' public statements, Search Engine Roundtable (seroundtable.com),
Search Engine Land (searchengineland.com), Search Engine Journal (searchenginejournal.com), and the
public conversations those outlets quote (X, Reddit, LinkedIn, conference talks).
Rule: if we explain a story that comes from one of these, we link it in `sources` (shown in a small Sources box at the end).
Do not call sources out in headers, cards or the homepage (no "based on reporting by..."). Name the source naturally inside the text instead.

## Article format (front matter at the top of each `.md` file in src/content/blog)
    title: plain question or statement, no jargon
    date: 2026-10-18
    description: one sentence for Google
    tag: AEO            # topic; see GROUPS in src/lib/posts.ts
    tldr: "Two or three simple sentences. This shows in the yellow 'In plain English' box."
    sources:
      - title: "Exact headline of the source article"
        url: "https://..."
        publisher: "Search Engine Land"

Body structure: what happened -> in plain words -> why it matters -> what to do (numbered).
Keep sentences short. Explain every acronym once. Link related articles on this site.

## Accuracy rules
1. Only state what the source says. Attribute it ("Search Engine Journal reports...").
2. Put numbers next to who measured them. Say when a figure is unverified or from a vendor.
3. Never copy sentences from a source. Explain it in new words and link the original.
4. Say what we could not confirm. Never fill gaps with guesses.
5. Date-stamp anything that will go out of date. Update `updated:` when you revise.
