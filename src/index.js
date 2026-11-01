import DefaultTheme from 'vitepress/theme-without-fonts'
import { h, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import NotFound from './components/NotFound.js'
import './styles/fonts.css'
import './styles/vars.css'
import './styles/overrides.css'

function wrapTables() {
  if (typeof document === 'undefined') return
  document.querySelectorAll('.vp-doc table').forEach((table) => {
    const parent = table.parentElement
    if (!parent || parent.classList.contains('table-wrapper')) return
    const wrapper = document.createElement('div')
    wrapper.className = 'table-wrapper'
    parent.insertBefore(wrapper, table)
    wrapper.appendChild(table)
  })
}

// 다이어그램처럼 세로로 긴 이미지는 본문 폭에서 글자가 작아지므로, 누르면 원본을 새 탭에서 연다.
function openImageInNewTab(event) {
  const target = event.target
  if (target instanceof HTMLImageElement && target.closest('.vp-doc')) {
    window.open(target.src, '_blank', 'noopener')
  }
}

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, { 'not-found': () => h(NotFound) }),
  enhanceApp() {
    if (typeof window === 'undefined') return
    window.addEventListener('click', openImageInNewTab)
  },
  setup() {
    const route = useRoute()
    onMounted(() => nextTick(wrapTables))
    watch(() => route.path, () => nextTick(wrapTables))
  },
}
