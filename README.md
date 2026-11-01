# @lemondouble/lemon-vitepress-theme

[LemonDouble 디자인 시스템](https://github.com/LemonDouble/lemon-design-system)이 적용된 VitePress 테마 패키지.

VitePress 기본 테마를 확장한 구조라, 설치 후 import만 하면 바로 테마가 적용됩니다.

**[데모 사이트](https://lemondouble.github.io/lemon-vitepress-theme/)**

## 특징

- **다크 모드 전용** — 따뜻한 다크 배경 (`#12100E`), 순수 블랙/화이트 없음
- **듀얼 폰트** — Galmuri11 Bold 사이트 이름·히어로 (8-bit 레트로) + Pretendard 제목·본문 (가독성 우선)
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

### 2. 설정 프리셋 적용

`.vitepress/config.ts`에서 `extends`로 테마의 설정 프리셋을 받습니다. 테마는 markdown과 빌드 설정을 직접 바꿀 수 없어서, 이 값들은 프리셋으로 제공합니다.

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { lemonConfig } from '@lemondouble/lemon-vitepress-theme/config'

export default defineConfig({
  extends: lemonConfig,
  title: 'My Site',
  description: 'My VitePress site',

  themeConfig: {
    // VitePress 기본 themeConfig 그대로 사용 가능
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],
  },
})
```

| 프리셋 항목 | 내용 |
|------|------|
| `appearance: 'force-dark'` | 다크 모드 전용 테마입니다. |
| `vite.ssr.noExternal` | 테마가 CSS를 import하므로, SSR 빌드에도 테마 패키지를 번들에 넣습니다. 없으면 빌드 결과에서 테마 CSS가 빠집니다. |
| `markdown.breaks: true` | 줄바꿈 하나도 화면에서 줄을 바꿉니다. 문단을 한 줄에 한 문장씩 쓰는 문서에 맞춘 설정입니다. |
| `markdown.anchor.slugify`, `markdown.headers.slugify` | 한글 제목의 앵커가 자모로 쪼개지지 않게 NFC로 다시 합칩니다. 그래야 `[링크](#관리자)` 같은 한글 앵커 링크가 이동합니다. |

- 프리셋의 값은 사이트 설정에서 다시 덮어쓸 수 있습니다 (예: `markdown: { breaks: false }`).
- `slugify`만 따로 쓰려면 `import { slugify } from '@lemondouble/lemon-vitepress-theme/config'`로 가져옵니다.

### 3. (선택) 디자인 시스템 favicon 적용

LemonDouble 디자인 시스템에 포함된 favicon을 테마에서 제공하는 head 프리셋으로 적용할 수 있습니다. jsdelivr CDN으로 로드되어 별도 파일 복사가 필요하지 않습니다.

```ts
// .vitepress/config.ts
import { defineConfig } from 'vitepress'
import { lemonConfig } from '@lemondouble/lemon-vitepress-theme/config'
import { lemonHead } from '@lemondouble/lemon-vitepress-theme/head'

export default defineConfig({
  extends: lemonConfig,
  title: 'My Site',
  head: [...lemonHead],
  // ...
})
```

### 4. (선택) 404 문구 바꾸기

404 화면은 [lemon-ui](https://github.com/LemonDouble/lemon-ui)의 안내 화면(Notice Page) 패턴입니다. 문구는 VitePress의 `themeConfig.notFound`로 바꿉니다.

```ts
themeConfig: {
  notFound: {
    title: '찾을 수 없는 페이지', // 기본값
    quote: '주소가 바뀌었거나, 이미 삭제되었을 수 있습니다.', // 기본값
    linkText: '홈으로', // 기본값
  },
}
```

- 다국어 사이트는 locale마다 `themeConfig.notFound`를 넣습니다 (데모 설정 참고).

## 포함 항목

| 항목 | 설명 |
|------|------|
| 컬러 시스템 | 브랜드, 배경, 텍스트, 보더, 시맨틱 컬러 전체 오버라이드 |
| 타이포그래피 | 제목과 본문은 Pretendard, 사이트 이름과 히어로는 Galmuri11 Bold, 코드는 D2 coding |
| 컴포넌트 | 버튼, 뱃지, 코드 블록, 커스텀 블록, 테이블, 인용문 |
| 네비게이션 | 56px 글래스 이펙트 네비바, 넓은 검색 버튼, 모바일에서도 상단 고정 |
| 이미지 | 테두리, 누르면 새 탭에서 원본 열기, 1280px 이상에서 본문 폭 확장 |
| 404 | lemon-ui 안내 화면 패턴, `themeConfig.notFound`로 문구 변경 |
| 스크롤바 | 따뜻한 다크 톤 커스텀 스크롤바 |

## 폰트 정보

테마에 포함된 웹폰트:

- **Galmuri11 Bold** — [Quiple](https://quiple.dev/galmuri/)의 8-bit 레트로 한글 비트맵 폰트 (헤딩용)
- **Pretendard** — [orioncactus/pretendard](https://github.com/orioncactus/pretendard)의 산세리프 한글 폰트 (본문용)

폰트는 jsdelivr / cdnjs CDN을 통해 자동 로드되므로 별도 설정이 필요 없습니다.

## 요구사항

- Node.js >= 18
- VitePress >= 1.0.0

## 라이선스

MIT
