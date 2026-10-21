import { CHARCOAL, GOLD, GOLD_DEEP, PAPER, TAGLINE } from './colors'

export const WORDMARK_VB = '0 0 560 200'
export const MARK_VB = '132 0 164 200'

export function wordmarkInner(ink, gold, deep) {
  return `
    <g transform="translate(159 14)">
      <path fill="${gold}" d="M18 52C16 24 32 6 55 6c22 0 38 16 36 46H18Z"/>
      <path fill="${gold}" d="M4 50c8 12 92 12 102 0-10-6-18-8-28-8H32C20 42 10 45 4 50Z"/>
      <path fill="${deep}" d="M8 52c10 8 36 12 47 12s37-4 47-12c-10 3-28 8-47 8S18 55 8 52Z"/>
      <rect x="53" y="10" width="4" height="36" rx="2" fill="${deep}" opacity="0.35"/>
      <ellipse cx="90" cy="46" rx="8" ry="10" fill="${deep}"/>
      <ellipse cx="90" cy="46" rx="3.8" ry="5.5" fill="${gold}"/>
    </g>
    <path fill="${ink}" d="M20 188V76h28l56 76V76h28v112h-28L48 112v76H20Z"/>
    <path fill="${ink}" d="M214 76l66 112h-32L214 122 180 188h-32L214 76Z"/>
    <path fill="${gold}" d="M186 146 214 112l28 34h-10l-18-22-18 22z"/>
    <rect fill="${gold}" x="208" y="150" width="5.2" height="5.2"/>
    <rect fill="${gold}" x="215.8" y="150" width="5.2" height="5.2"/>
    <rect fill="${gold}" x="208" y="157.8" width="5.2" height="5.2"/>
    <rect fill="${gold}" x="215.8" y="157.8" width="5.2" height="5.2"/>
    <rect fill="${ink}" x="300" y="76" width="30" height="112"/>
    <path fill="${ink}" fill-rule="evenodd" d="M330 76h34c26 0 40 14 40 28 0 14-14 28-40 28H330V76Zm22 16h14c12 0 20 6 20 12s-8 12-20 12h-14V92Z"/>
    <path fill="${ink}" fill-rule="evenodd" d="M330 132h38c28 0 44 14 44 28 0 16-16 28-44 28H330v-56Zm22 16h18c14 0 24 6 24 12s-10 12-24 12h-18v-24Z"/>
    <path fill="${ink}" d="M432 76h108v24H460v24h72v22H460v22h80v20H432V76Z"/>
  `
}

export function markSvg({ reverse = false } = {}) {
  const ink = reverse ? PAPER : CHARCOAL
  const gold = GOLD
  const deep = GOLD_DEEP
  const bg = reverse ? CHARCOAL : 'none'
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MARK_VB}" width="820" height="1000" fill="none">
  ${reverse ? `<rect x="132" width="164" height="200" rx="12" fill="${bg}"/>` : ''}
  ${wordmarkInner(ink, gold, deep)}
</svg>`
}

export function lockupSvg({ reverse = false } = {}) {
  const ink = reverse ? PAPER : CHARCOAL
  const gold = GOLD
  const deep = GOLD_DEEP
  const bg = reverse ? CHARCOAL : PAPER
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 220" width="1840" height="440" fill="none">
  <rect width="920" height="220" fill="${bg}"/>
  <g transform="translate(16 10)">
    ${wordmarkInner(ink, gold, deep)}
  </g>
  <rect x="596" y="72" width="1.5" height="84" fill="${ink}" opacity="0.28"/>
  <text x="616" y="104" fill="${ink}" font-family="Montserrat, Helvetica Neue, Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="2.4">NATIONAL BENCHMARK</text>
  <text x="616" y="128" fill="${gold}" font-family="Montserrat, Helvetica Neue, Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="2.4">ENGINEERING LTD</text>
  <text x="616" y="154" fill="${ink}" opacity="0.7" font-family="Helvetica Neue, Arial, sans-serif" font-size="12">${TAGLINE}</text>
</svg>`
}

function triggerDownload(filename, blob) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

export function downloadSvgFile(filename, svg) {
  triggerDownload(filename, new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }))
}

export function downloadPngFile(filename, svg, width, height) {
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const img = new Image()
  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, width, height)
    canvas.toBlob((png) => {
      if (png) triggerDownload(filename, png)
      URL.revokeObjectURL(url)
    }, 'image/png')
  }
  img.onerror = () => URL.revokeObjectURL(url)
  img.src = url
}
