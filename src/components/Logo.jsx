import { CHARCOAL, GOLD, GOLD_DEEP, PAPER, TAGLINE } from '../brand/colors'
import { MARK_VB, WORDMARK_VB, wordmarkInner } from '../brand/logoAssets'

const sizes = { sm: 36, md: 44, lg: 72, xl: 96 }

function palette(variant) {
  const isDark = variant === 'onDark'
  return {
    isDark,
    ink: isDark ? PAPER : CHARCOAL,
    gold: GOLD,
    deep: GOLD_DEEP,
  }
}

function BrandSvg({ className, viewBox, width, height, inner, label }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      role={label ? 'img' : 'presentation'}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      <g dangerouslySetInnerHTML={{ __html: inner }} />
    </svg>
  )
}

function Wordmark({ variant = 'onLight', size, label }) {
  const { ink, gold, deep } = palette(variant)
  const height = size
  const width = Math.round(height * (560 / 200))
  return (
    <BrandSvg
      className="logo-wordmark"
      viewBox={WORDMARK_VB}
      width={width}
      height={height}
      inner={wordmarkInner(ink, gold, deep)}
      label={label}
    />
  )
}

export function Monogram({ variant = 'onLight', size = 48 }) {
  const px = typeof size === 'number' ? size : sizes[size] || 48
  const { ink, gold, deep } = palette(variant)
  const width = Math.round(px * (164 / 200))
  return (
    <BrandSvg
      className="logo-emblem"
      viewBox={MARK_VB}
      width={width}
      height={px}
      inner={wordmarkInner(ink, gold, deep)}
    />
  )
}

export default function Logo({
  variant = 'onLight',
  lockup = 'full',
  size = 'md',
  showTagline = false,
}) {
  const px = typeof size === 'number' ? size : sizes[size] || 44
  const { isDark, ink } = palette(variant)

  if (lockup === 'mark') {
    return <Monogram variant={variant} size={px} />
  }

  if (lockup === 'wordmark') {
    return (
      <Wordmark
        variant={variant}
        size={px}
        label="National Benchmark Engineering Ltd"
      />
    )
  }

  return (
    <span className={`logo${isDark ? ' is-dark' : ''}`}>
      <Wordmark variant={variant} size={px} />
      <span className="logo-type" style={{ color: ink }}>
        <span className="logo-rule" />
        <span className="logo-explain">
          <span>National Benchmark</span>
          <span className="logo-legal">Engineering Ltd</span>
          {showTagline ? <span className="logo-tag">{TAGLINE}</span> : null}
        </span>
      </span>
    </span>
  )
}

export { TAGLINE }
