# @lemondouble/lemon-vitepress-theme

[LemonDouble 디자인 시스템](https://github.com/LemonDouble/lemon-design-system)이 적용된 VitePress 테마 패키지.

VitePress 기본 테마를 확장한 구조라, 설치 후 import만 하면 바로 테마가 적용됩니다.

**[데모 사이트](https://lemondouble.github.io/lemon-vitepress-theme/)**

## 특징

- **다크 모드 전용** — 따뜻한 다크 배경 (`#12100E`), 순수 블랙/화이트 없음
- **듀얼 폰트** — Galmuri11 Bold 헤딩 (8-bit 레트로) + Pretendard 본문
- **브랜드 컬러** — 골든 옐로우 (`#F0B90B`) CTA/링크, 코랄 레드 (`#CD6B5E`) 보조 액센트
- **글래스 네비게이션** — `backdrop-filter: blur(12px)` 적용
- **i18n 지원** — KO/EN/JA/ZH 다국어 데모 포함

## 설치

```bash
# npm
npm install -D @lemondouble/lemon-vitepress-theme vitepress

# pnpm
pnpm add -D @lemondouble/lemon-vitepress-theme vitepress

# yarn
yarn add -D @lemondouble/lemon-vitepress-theme vitepress
```

> `vitepress`는 peer dependency입니다. (>=1.0.0)

## 사용법

### 1. 테마 등록

VitePress 프로젝트의 `.vitepress/theme/index.ts` (또는 `.js`) 파일에 테마를 import 해서 export 하세요. 파일이 없으면 새로 생성하면 됩니다.

```ts
// .vitepress/theme/index.ts
import LemonTheme from '@lemondouble/lemon-vitepress-theme'

export default LemonTheme
```

### 2. 다크 모드 강제 적용

이 테마는 다크 모드 전용입니다. `.vitepress/config.ts`에서 `appearance`를 `'force-dark'`로 설정하세요.

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Site',
  description: 'My VitePress site',
  appearance: 'force-dark',

  themeConfig: {
    // VitePress 기본 themeConfig 그대로 사용 가능
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
    ],
  },
})
```

## 포함 항목

| 항목 | 설명 |
|------|------|
| 컬러 시스템 | 브랜드, 배경, 텍스트, 보더, 시맨틱 컬러 전체 오버라이드 |
| 타이포그래피 | Galmuri11 Bold 헤딩 + Pretendard 본문/코드 |
| 컴포넌트 | 버튼, 뱃지, 코드 블록, 커스텀 블록, 테이블, 인용문 |
| 네비게이션 | 56px 글래스 이펙트 네비바 |
| 스크롤바 | 따뜻한 다크 톤 커스텀 스크롤바 |

## 폰트 정보

테마에 포함된 웹폰트:

- **Galmuri11 Bold** — [Quiple](https://quiple.dev/galmuri/)의 8-bit 레트로 한글 비트맵 폰트 (헤딩용)
- **Pretendard** — [orioncactus/pretendard](https://github.com/orioncactus/pretendard)의 산세리프 한글 폰트 (본문용)

폰트는 패키지에 포함되어 별도 설정 없이 자동 로딩됩니다.

## 요구사항

- Node.js >= 18
- VitePress >= 1.0.0

## 라이선스

MIT
