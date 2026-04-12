# 组件

展示所有已样式化组件的页面。

## 排版

### 二级标题

#### 三级标题

正文使用 **Pretendard** 字体，颜色为 `#A89E95`。标题使用 `#F5F0EB` 颜色。

## 行内代码

使用 `npm install` 安装包。`config.ts` 文件控制站点设置。

## 代码块

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  appearance: 'force-dark',
})
```

## 自定义块

::: info
这是一个信息块。
:::

::: tip
这是一个提示块 — 使用品牌黄强调色。
:::

::: warning
这是一个警告块 — 使用语义黄色。
:::

::: danger
这是一个危险块 — 使用语义红色。
:::

## 表格

| 功能 | 状态 | 备注 |
|------|------|------|
| 深色模式 | 启用 | 仅Force-dark |
| Galmuri11 | 启用 | 标题、Bold 700 |
| Pretendard | 启用 | 正文、代码、按钮 |

## 引用

> 带有品牌黄左边框和温暖背景色调的引用块。

## 链接

[内部链接](/zh/guide/getting-started)和[外部链接](https://github.com/LemonDouble/lemon-vitepress-theme)以品牌黄色样式显示。
