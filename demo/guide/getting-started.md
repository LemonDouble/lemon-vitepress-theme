# 시작하기

## 설치

```bash
npm install lemon-vitepress-theme
```

## 설정

### 1. 테마

`.vitepress/theme/index.ts`를 생성하거나 수정합니다:

```ts
import LemonTheme from 'lemon-vitepress-theme'

export default LemonTheme
```

### 2. 설정 파일

`.vitepress/config.ts`에 `appearance: 'force-dark'`를 설정합니다:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  appearance: 'force-dark',
  // ... 나머지 설정
})
```

이게 전부입니다. 파일 2개면 디자인 시스템이 적용됩니다.

## 포함된 기능

- **컬러** — 브랜드 옐로우, 코랄 레드, 따뜻한 다크 배경, 시맨틱 컬러
- **폰트** — Galmuri11 Bold 헤딩, Pretendard 본문/코드
- **컴포넌트** — 버튼, 뱃지, 코드 블록, 커스텀 블록, 테이블 스타일링
- **네비게이션** — 글래스 이펙트 네비게이션 바 (56px)

::: tip
이 테마는 다크 모드 전용입니다. `force-dark` 설정으로 토글이 숨겨집니다.
:::

::: warning
`appearance: 'force-dark'`를 반드시 설정하세요 — 없으면 사용자가 스타일링되지 않은 라이트 모드로 전환할 수 있습니다.
:::
