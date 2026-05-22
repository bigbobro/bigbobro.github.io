# Blog Publishing Notes

This document records how posts should be prepared for this AstroPaper blog. It is about Markdown publishing and editorial consistency, not rich-text formatting.

## Publishing Model

Posts are Markdown files in `src/data/blog/`.

The normal flow is:

1. Add or edit a Markdown post.
2. Keep the post clean and structurally clear.
3. Commit and push when publishing is requested.
4. Let GitHub Pages / GitHub Actions build and deploy remotely.

Do not install dependencies, run local builds, or run preview by default. Only do that when the user explicitly asks or when debugging a site failure.

## Markdown Is Structure, Not Rich Text

Do not hand-style individual paragraphs inside posts.

Use Markdown for:

- title
- paragraph
- heading
- list
- quote
- link
- image
- code block

The site CSS controls fonts, colors, spacing, and article layout. Avoid inline HTML or ad hoc styling in posts unless there is a specific reason.

## Frontmatter

Keep frontmatter consistent with existing posts.

Common fields:

```yaml
---
author: BigBoBro
title: "Post title"
pubDatetime: 2026-05-23T00:00:00Z
slug: post-slug
featured: false
draft: false
tags:
  - ai
description: One clear sentence explaining what this post is about.
---
```

Use `featured: true` only when a post should be pinned on the homepage. For now, the default is not to pin posts.

Use `draft: true` for posts that should stay unpublished.

## Description

The `description` field is important because it appears in lists and sharing metadata.

Good descriptions:

- Say what the post is actually about.
- Sound like a human note, not SEO copy.
- Stay concise.
- Avoid overusing words like `signal`, `important`, `really`, and `worth watching`.

## Writing Voice

Preferred voice:

- practical
- grounded
- personal
- allowed to be unfinished
- lightly humorous when natural

Avoid:

- consulting-speak
- polished slogans
- pretending uncertainty is already a conclusion
- long meta-explanations before getting to the point
- turning every post into a framework

It is fine to publish things that are not fully resolved. In that case, make the uncertainty explicit and show the process, the question, and the current stuck point.

## Article Shape

A good post usually has:

- A short opening that says what triggered the note.
- A few concrete observations or examples.
- A clear distinction between facts, interpretation, and unresolved questions.
- A grounded ending, even if the ending is only "this is where I am stuck now."

Use headings to help reading, not to make the post look formal.

## Tags

Keep tags simple. Tags should help readers find related posts, not become a full taxonomy.

Prefer a small number of stable tags over many one-off tags.

Possible recurring tags:

- `ai`
- `weekly-ai-signal`
- `solution`
- `workflow`
- `project-notes`

Do not force a post into a category just because the homepage once mentioned that topic.

## Images And Media

Use images only when they help the reader understand the post.

Avoid decorative images in ordinary posts. If an image is used, keep alt text clear and factual.

## Updates

When publishing rules or site voice changes, update this file with the same change. The goal is to keep the repo self-explanatory for future writing sessions.
