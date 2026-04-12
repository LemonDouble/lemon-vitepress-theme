# Components

This page showcases all styled components.

## Typography

### Heading Level 2

#### Heading Level 3

Body text uses **Pretendard** with `#A89E95` color. Primary text like headings uses `#F5F0EB`.

**Bold text** and *italic text* work as expected.

## Inline Code

Use `npm install` to install packages. The `config.ts` file controls your site settings.

## Code Block

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  appearance: 'force-dark',
  themeConfig: {
    siteTitle: 'My Project',
  },
})
```

## Custom Blocks

::: info
This is an info block.
:::

::: tip
This is a tip — uses brand yellow accent.
:::

::: warning
This is a warning — uses semantic yellow.
:::

::: danger
This is a danger block — uses semantic red.
:::

## Table

| Feature | Status | Notes |
|---------|--------|-------|
| Dark Mode | Active | Force-dark only |
| Galmuri11 | Active | Headings, Bold 700 |
| Pretendard | Active | Body, code, buttons |
| Glass Nav | Active | blur(12px) backdrop |

## Badges

- Default Badge <Badge type="info" text="info" />
- Tip Badge <Badge type="tip" text="tip" />
- Warning Badge <Badge type="warning" text="warning" />
- Danger Badge <Badge type="danger" text="danger" />

## Blockquote

> This is a blockquote with brand yellow left border and warm background tint.

## Lists

- First item with **yellow marker**
- Second item
- Third item

## Links

[Internal link](/en/guide/getting-started) and [external link](https://github.com/LemonDouble/lemon-vitepress-theme) are styled in brand yellow.
