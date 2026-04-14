import { defineConfig } from 'vitepress'
import { lemonHead } from '../../src/head.js'

export default defineConfig({
  title: 'Lemon Theme Demo',
  description: 'VitePress theme with LemonDouble Design System',
  appearance: 'force-dark',
  base: '/lemon-vitepress-theme/',
  head: [...lemonHead],

  locales: {
    root: {
      label: '한국어',
      lang: 'ko',
      themeConfig: {
        nav: [
          { text: '홈', link: '/' },
          { text: '가이드', link: '/guide/getting-started' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '소개',
              items: [
                { text: '시작하기', link: '/guide/getting-started' },
                { text: '컴포넌트', link: '/guide/components' },
              ],
            },
          ],
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/getting-started' },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Introduction',
              items: [
                { text: 'Getting Started', link: '/en/guide/getting-started' },
                { text: 'Components', link: '/en/guide/components' },
              ],
            },
          ],
        },
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'ガイド', link: '/ja/guide/getting-started' },
        ],
        sidebar: {
          '/ja/guide/': [
            {
              text: 'はじめに',
              items: [
                { text: 'スタートガイド', link: '/ja/guide/getting-started' },
                { text: 'コンポーネント', link: '/ja/guide/components' },
              ],
            },
          ],
        },
      },
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/getting-started' },
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '介绍',
              items: [
                { text: '快速开始', link: '/zh/guide/getting-started' },
                { text: '组件', link: '/zh/guide/components' },
              ],
            },
          ],
        },
      },
    },
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LemonDouble/lemon-vitepress-theme' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 LemonDouble',
    },
  },
})
