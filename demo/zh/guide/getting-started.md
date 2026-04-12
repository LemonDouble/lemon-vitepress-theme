# 快速开始

## 安装

```bash
npm install lemon-vitepress-theme
```

## 配置

### 1. 主题

创建或更新 `.vitepress/theme/index.ts`：

```ts
import LemonTheme from 'lemon-vitepress-theme'

export default LemonTheme
```

### 2. 配置文件

在 `.vitepress/config.ts` 中设置 `appearance: 'force-dark'`：

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: 'force-dark',
  // ... 其他配置
})
```

就这样。两个文件即可应用设计系统。

## 包含功能

- **颜色** — 品牌黄、珊瑚红、温暖深色背景、语义色彩
- **字体** — Galmuri11 Bold标题、Pretendard正文/代码
- **组件** — 按钮、徽章、代码块、自定义块、表格样式
- **导航** — 毛玻璃效果导航栏 (56px)

::: tip
此主题仅支持深色模式。`force-dark` 设置会隐藏切换按钮。
:::
