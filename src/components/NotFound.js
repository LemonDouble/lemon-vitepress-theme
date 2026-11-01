import { computed, defineComponent, h } from 'vue'
import { useData, withBase } from 'vitepress'

// lemon-ui 의 Notice Page(404) 패턴. 문구는 VitePress 의 themeConfig.notFound 로 바꿀 수 있다.
// .vue 대신 render 함수로 써서, 사이트가 node_modules 의 SFC 를 컴파일하지 않아도 되게 한다.

// Lucide file-x, arrow-left
const FILE_X_PATHS = [
  'M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z',
  'M14 2v5a1 1 0 0 0 1 1h5',
  'm14.5 12.5-5 5',
  'm9.5 12.5 5 5',
]
const ARROW_LEFT_PATHS = ['m12 19-7-7 7-7', 'M19 12H5']

function lucideIcon(paths, size, strokeWidth) {
  return h(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': strokeWidth,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'aria-hidden': 'true',
    },
    paths.map((path) => h('path', { d: path })),
  )
}

export default defineComponent({
  name: 'LemonNotFound',
  setup() {
    const { theme, site, localeIndex } = useData()
    const notFound = computed(() => theme.value.notFound ?? {})
    const homeLink = computed(() => {
      if (notFound.value.link) return notFound.value.link
      if (localeIndex.value === 'root') return '/'
      return site.value.locales[localeIndex.value]?.link ?? `/${localeIndex.value}/`
    })

    return () =>
      h('div', { class: 'LemonNotFound' }, [
        h('div', { class: 'icon-badge' }, [lucideIcon(FILE_X_PATHS, 32, 1.5)]),
        h('p', { class: 'code' }, notFound.value.code ?? '404'),
        h('h1', { class: 'title' }, notFound.value.title ?? '찾을 수 없는 페이지'),
        h('p', { class: 'description' }, notFound.value.quote ?? '주소가 바뀌었거나, 이미 삭제되었을 수 있습니다.'),
        h('div', { class: 'actions' }, [
          h(
            'a',
            { class: 'home-link', href: withBase(homeLink.value), 'aria-label': notFound.value.linkLabel },
            [lucideIcon(ARROW_LEFT_PATHS, 16, 2), notFound.value.linkText ?? '홈으로'],
          ),
        ]),
      ])
  },
})
