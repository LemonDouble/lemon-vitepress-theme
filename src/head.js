const CDN = 'https://cdn.jsdelivr.net/gh/LemonDouble/lemon-design-system/images'

export const lemonFaviconHead = [
  ['link', { rel: 'icon', href: `${CDN}/favicon.ico`, sizes: '48x48' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${CDN}/favicon-32.png` }],
  ['link', { rel: 'apple-touch-icon', href: `${CDN}/apple-touch-icon.png` }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: `${CDN}/favicon-192.png` }],
]

export const lemonHead = [
  ...lemonFaviconHead,
]
