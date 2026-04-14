import DefaultTheme from 'vitepress/theme-without-fonts'
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
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

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()
    onMounted(() => nextTick(wrapTables))
    watch(() => route.path, () => nextTick(wrapTables))
  },
}
