# lemon-vitepress-theme

[LemonDouble 디자인 시스템](https://github.com/LemonDouble/lemon-design-system)이 적용된 VitePress 테마 패키지.

설치하고 import하면 끝. 어떤 VitePress 프로젝트든 2줄이면 적용됩니다.

**[데모 사이트](https://lemondouble.github.io/lemon-vitepress-theme/)**

## 특징

- **다크 모드 전용** — 따뜻한 다크 배경 (`#12100E`), 순수 블랙/화이트 없음
- **듀얼 폰트** — Galmuri11 Bold 헤딩 (8-bit 레트로) + Pretendard 본문
- **브랜드 컬러** — 골든 옐로우 (`#F0B90B`) CTA/링크, 코랄 레드 (`#CD6B5E`) 보조 액센트
- **글래스 네비게이션** — `backdrop-filter: blur(12px)` 적용
- **i18n 지원** — KO/EN/JA/ZH 다국어 데모 포함

## 설치

```bash
npm install lemon-vitepress-theme
```

## 사용법

### 1. 테마 설정

```ts
// .vitepress/theme/index.ts
import LemonTheme from 'lemon-vitepress-theme'

export default LemonTheme
```

### 2. VitePress 설정

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: 'force-dark',
  // ... 나머지 설정
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

## 라이선스

MIT
