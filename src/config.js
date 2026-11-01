// 사이트 설정 프리셋. 테마는 markdown 과 빌드 설정을 바꿀 수 없으므로, 사이트가 defineConfig({ extends: lemonConfig }) 로 받는다.

/**
 * VitePress 기본 slugify(@mdit-vue/shared)와 같은 규칙이지만, NFKD 로 분해된 한글을 NFC 로 다시 합친다.
 * 그러지 않으면 한글 제목의 id 가 자모로 쪼개져서, 문서에 쓴 `#관리자` 같은 링크가 이동하지 않는다.
 * @param {string} text
 */
export function slugify(text) {
  return text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[\u0000-\u001f]/g, '')
    .replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/^(\d)/, '_$1')
    .toLowerCase()
    .normalize('NFC')
}

export const lemonConfig = {
  // 다크 모드 전용 테마다.
  appearance: 'force-dark',
  // 테마 패키지가 CSS 를 import 하므로, SSR 빌드에서도 Vite 가 번들에 포함해야 한다.
  vite: { ssr: { noExternal: ['@lemondouble/lemon-vitepress-theme'] } },
  markdown: {
    // 문단을 한 줄에 한 문장씩 쓰므로, 줄바꿈 하나도 화면에서 줄을 바꾼다.
    breaks: true,
    anchor: { slugify },
    headers: { slugify },
  },
}
