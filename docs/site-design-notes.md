# Site Design Notes

This document records the current visual and identity choices for the blog. It is a lightweight reference for future site changes, not a full design system.

## Identity

- `BuildFromIdea` is the English site name.
- `开物成务` is the Chinese site name.
- `BuildFromIdea · 开物成务` is the formal site identity used in the header, browser title, RSS title, and sharing surfaces.
- `Delulu2Solulu` is the homepage masthead and content personality. It should stay playful and personal.

These names have different jobs. Do not collapse them into one expression unless the site identity is intentionally redesigned.

## Homepage Role

The homepage should feel like a real person saying hello, not a brand manifesto.

Current direction:

- First impression: this person sounds interesting, writes from real work, and is not recycling generic content.
- Voice balance: 60% real work notes, 30% light humor, 10% self-mockery.
- It is acceptable to share things that are not fully understood yet, as long as they are not presented as final conclusions.

Current homepage copy:

```text
欢迎来到这里。这个博客暂时不打算装成一套成熟方法论。

我会把一些从离谱想法、真实项目和 AI 工具里长出来的东西放在这里：有的最后成了方案，有的只是暴露了一个更大的坑。

想明白的写，没想明白的也写。区别是，没想明白的不会假装已经想明白。
```

## Visual Direction

The site should feel like a restrained personal publication:

- Warm paper background.
- Ink-like foreground text.
- Low-saturation green as the accent color.
- Light borders and dividers.
- No loud gradients, floating decorative elements, or generic SaaS card grids.
- Keep the design readable before making it decorative.

Current color implementation lives in `src/styles/global.css`.

## Typography

Keep the current template font setup for now.

Do not copy Anthropic or Claude font files. Their public font URLs are not a license to reuse their brand fonts. If typography changes later, use either system fonts or clearly licensed open-source fonts.

## Header And Masthead

- Header brand: `BuildFromIdea · 开物成务`.
- Homepage masthead: `Delulu 2 Solulu`.
- Only the `2` is accented. Do not color all three parts unless the design direction changes.
- RSS belongs near the masthead but should not visually stick to the title text.

## Article Lists

Article lists should feel like a simple editorial list, not a card grid.

Current direction:

- Title uses foreground text, not default template blue.
- Hover uses the accent color.
- Date is lighter and secondary.
- Description is softer than the title.
- Items are separated by subtle dividers.

Use `Pinned`, `Latest`, and `All` for the homepage list labels.

## Boundaries

Avoid these unless there is a deliberate redesign:

- Turning the homepage into a marketing landing page.
- Locking the blog into fixed content categories too early.
- Adding heavy logos, large illustrations, or decorative animations.
- Adding font files without checking the license.
- Using cards when a simple list communicates better.

When the visual direction changes, update this file in the same change as the code.
