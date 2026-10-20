import { BURGUNDY, CHARCOAL, PAPER, TAGLINE } from './colors'

export function markInner(ink, accent) {
  return `
    <path fill="${accent}" d="M10 150V28h18l40 78V28h18v122H68L28 72v78H10Z"/>
    <path fill="${ink}" d="M42 138V88h11v50H42Zm16 0V72h11v66H58Zm16 0V56h11v82H74Z"/>
    <path fill="${ink}" fill-rule="evenodd" d="M102 36h46c18 0 30 12 30 28 0 12-7 21-19 25 15 4 26 15 26 32 0 20-17 33-40 33H102V36Zm16 14v24h24c8 0 13-5 13-12s-5-12-13-12H118Zm0 40v30h28c10 0 16-6 16-15s-6-15-16-15h-28Z"/>
    <rect x="100" y="10" width="8" height="140" fill="${accent}"/>
    <path fill="${accent}" d="M36 16h132v7H36z"/>
    <path fill="${accent}" d="M96 8h16v14H96z"/>
    <circle cx="162" cy="19.5" r="5.5" fill="${accent}"/>
    <path d="M162 25v28" stroke="${accent}" stroke-width="3.5" stroke-linecap="round"/>
    <path fill="${accent}" d="M156 53h12c0 8-12 10-12 0Z"/>
    <path fill="${ink}" d="M4 142c40-14 86 6 188 22l-4 9C90 157 46 139 2 151L4 142Z"/>
    <path fill="${accent}" d="M10 140c42-12 88 6 162 20l-4 7C96 153 52 136 8 147l2-7Z"/>
  `
}

export function markSvg({ reverse = false } = {}) {
  const ink = reverse ? PAPER : CHARCOAL
  const accent = BURGUNDY
  const bg = reverse ? CHARCOAL : 'none'
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 168" width="1000" height="840" fill="none">
  ${reverse ? `<rect width="200" height="168" rx="12" fill="${bg}"/>` : ''}
  ${markInner(ink, accent)}
</svg>`
}

export function lockupSvg({ reverse = false } = {}) {
  const ink = reverse ? PAPER : CHARCOAL
  const accent = BURGUNDY
  const bg = reverse ? CHARCOAL : PAPER
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 200" width="1900" height="500" fill="none">
  <rect width="760" height="200" fill="${bg}"/>
  <g transform="translate(24 16)">
    ${markInner(ink, accent)}
  </g>
  <text x="250" y="118" fill="${ink}" font-family="Montserrat, Helvetica Neue, Arial Black, sans-serif" font-size="64" font-weight="800" letter-spacing="-2">NABE</text>
  <rect x="478" y="58" width="1.5" height="84" fill="${ink}" opacity="0.28"/>
  <text x="500" y="92" fill="${ink}" font-family="Montserrat, Helvetica Neue, Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="2.4">NATIONAL BENCHMARK</text>
  <text x="500" y="118" fill="${accent}" font-family="Montserrat, Helvetica Neue, Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="2.4">ENGINEERING LTD</text>
  <text x="500" y="146" fill="${ink}" opacity="0.7" font-family="Helvetica Neue, Arial, sans-serif" font-size="12">${TAGLINE}</text>
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
