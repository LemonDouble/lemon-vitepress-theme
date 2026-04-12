# Getting Started

## Installation

```bash
npm install lemon-vitepress-theme
```

## Setup

### 1. Theme

Create or update `.vitepress/theme/index.ts`:

```ts
import LemonTheme from 'lemon-vitepress-theme'

export default LemonTheme
```

### 2. Config

Set `appearance: 'force-dark'` in `.vitepress/config.ts`:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: 'force-dark',
  // ... your config
})
```

That's it. Two files, and your docs site has the LemonDouble design system applied.

## What's Included

- **Colors** — Brand yellow, coral red, warm dark background, semantic colors
- **Fonts** — Galmuri11 Bold for headings, Pretendard for body/code
- **Components** — Styled buttons, badges, code blocks, custom blocks, tables
- **Nav** — Glass-effect navigation bar (56px height)

::: tip
This theme is dark-mode only. The `force-dark` setting ensures the toggle is hidden.
:::

::: warning
Make sure to set `appearance: 'force-dark'` — without it, users might switch to light mode which isn't styled.
:::
