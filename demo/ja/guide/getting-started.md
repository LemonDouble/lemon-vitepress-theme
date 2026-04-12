# スタートガイド

## インストール

```bash
npm install lemon-vitepress-theme
```

## セットアップ

### 1. テーマ

`.vitepress/theme/index.ts`を作成または更新します：

```ts
import LemonTheme from 'lemon-vitepress-theme'

export default LemonTheme
```

### 2. 設定

`.vitepress/config.ts`に`appearance: 'force-dark'`を設定します：

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: 'force-dark',
  // ... その他の設定
})
```

以上です。2つのファイルでデザインシステムが適用されます。

## 含まれる機能

- **カラー** — ブランドイエロー、コーラルレッド、暖かいダーク背景、セマンティックカラー
- **フォント** — Galmuri11 Bold見出し、Pretendard本文/コード
- **コンポーネント** — ボタン、バッジ、コードブロック、カスタムブロック、テーブル
- **ナビ** — グラスエフェクトナビゲーションバー (56px)

::: tip
このテーマはダークモード専用です。`force-dark`設定でトグルが非表示になります。
:::
