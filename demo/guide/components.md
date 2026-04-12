# 컴포넌트

스타일링된 모든 컴포넌트를 보여주는 페이지입니다.

## 타이포그래피

### 헤딩 레벨 2

#### 헤딩 레벨 3

본문 텍스트는 **Pretendard**를 사용하며 `#A89E95` 색상입니다. 제목은 `#F5F0EB` 색상을 사용합니다.

**볼드 텍스트**와 *이탤릭 텍스트*도 잘 동작합니다.

## 인라인 코드

`npm install`로 패키지를 설치합니다. `config.ts` 파일에서 사이트를 설정합니다.

## 코드 블록

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  appearance: 'force-dark',
  themeConfig: {
    // 브랜드 옐로우 네비 타이틀
    siteTitle: 'My Project',
  },
})
```

```bash
# 의존성 설치
npm install lemon-vitepress-theme

# 개발 서버 시작
npm run docs:dev
```

## 커스텀 블록

::: info
정보 블록입니다.
:::

::: tip
팁 블록입니다 — 브랜드 옐로우 액센트를 사용합니다.
:::

::: warning
경고 블록입니다 — 시맨틱 옐로우를 사용합니다.
:::

::: danger
위험 블록입니다 — 시맨틱 레드를 사용합니다.
:::

## 테이블

| 기능 | 상태 | 비고 |
|------|------|------|
| 다크 모드 | 활성 | Force-dark 전용 |
| Galmuri11 | 활성 | 헤딩, Bold 700 |
| Pretendard | 활성 | 본문, 코드, 버튼 |
| 글래스 네비 | 활성 | blur(12px) 백드롭 |

## 뱃지

- 기본 뱃지 <Badge type="info" text="info" />
- 팁 뱃지 <Badge type="tip" text="tip" />
- 경고 뱃지 <Badge type="warning" text="warning" />
- 위험 뱃지 <Badge type="danger" text="danger" />

## 인용문

> 브랜드 옐로우 왼쪽 보더와 따뜻한 배경 틴트가 적용된 인용문입니다.

## 목록

- 첫 번째 항목 — **옐로우 마커**
- 두 번째 항목
- 세 번째 항목

1. 순서 1
2. 순서 2
3. 순서 3

## 링크

[내부 링크](/guide/getting-started)와 [외부 링크](https://github.com/LemonDouble/lemon-vitepress-theme)는 브랜드 옐로우로 스타일링됩니다.
