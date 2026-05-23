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

### Post Image Storage

Use `public/images/posts/<post-slug>/` for images that belong to a specific article.

Example:

```text
public/images/posts/ai-subscription-upgrade/
  subscription-dashboard.png
  workflow-sketch.webp
```

Reference these images from Markdown with root-relative paths:

```markdown
![AI subscription dashboard](/images/posts/ai-subscription-upgrade/subscription-dashboard.png)
```

Do not store post images in `src/assets/icons/`; that folder is for site UI icons.

### Image Types

There are two normal sources of post images:

1. User-provided screenshots or files.
2. AI-generated illustrations or diagrams.

For user-provided screenshots:

- Keep the image only if it helps explain the article.
- Redact or crop private data, customer names, account IDs, emails, internal URLs, and pricing details before publishing.
- Prefer factual captions and alt text.
- Do not use screenshots as decoration.

For AI-generated images:

- Use them only when they clarify a concept, workflow, or metaphor.
- Avoid generic hero images and decorative stock-like illustrations.
- Prefer simple diagrams, workflow sketches, or small supporting visuals.
- Name them as generated assets, not as screenshots.

### File Naming

Use lowercase, hyphenated names.

Good:

```text
meeting-transcript-workflow.png
codex-obsidian-memory-layer.webp
```

Avoid:

```text
IMG_1234.PNG
Screen Shot 2026-05-23 at 10.31.22.png
final-final-v2.png
```

### When Not To Add Images

Most ordinary posts do not need images.

Skip images when:

- The image only makes the post look busier.
- The article is a short reflection.
- The same idea is clearer as text or a small Markdown list.
- The image needs too much explanation to be useful.

### OG Images

The current site has `dynamicOgImage: false`.

Do not add custom `ogImage` frontmatter by default. Add it only when a post has a strong, reusable visual that should appear in link previews.

## Updates

When publishing rules or site voice changes, update this file with the same change. The goal is to keep the repo self-explanatory for future writing sessions.
