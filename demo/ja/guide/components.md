# コンポーネント

スタイリングされたすべてのコンポーネントを紹介するページです。

## タイポグラフィ

### 見出しレベル2

#### 見出しレベル3

本文テキストは**Pretendard**を使用し、`#A89E95`カラーです。見出しは`#F5F0EB`カラーを使用します。

## インラインコード

`npm install`でパッケージをインストールします。`config.ts`ファイルでサイトを設定します。

## コードブロック

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  appearance: 'force-dark',
})
```

## カスタムブロック

::: info
情報ブロックです。
:::

::: tip
ティップブロックです — ブランドイエローアクセントを使用します。
:::

::: warning
警告ブロックです — セマンティックイエローを使用します。
:::

::: danger
危険ブロックです — セマンティックレッドを使用します。
:::

## テーブル

| 機能 | 状態 | 備考 |
|------|------|------|
| ダークモード | 有効 | Force-dark専用 |
| Galmuri11 | 有効 | 見出し、Bold 700 |
| Pretendard | 有効 | 本文、コード、ボタン |

## 引用

> ブランドイエローの左ボーダーと暖かい背景ティントが適用された引用です。

## リンク

[内部リンク](/ja/guide/getting-started)と[外部リンク](https://github.com/LemonDouble/lemon-vitepress-theme)はブランドイエローでスタイリングされます。
