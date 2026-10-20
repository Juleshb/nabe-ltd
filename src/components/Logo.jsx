import { BURGUNDY, CHARCOAL, PAPER, TAGLINE } from '../brand/colors'

const sizes = { sm: 48, md: 64, lg: 108, xl: 148 }

function Mark({ ink, accent, size }) {
  const w = Math.round(size * 1.18)
  return (
    <svg
      className="logo-emblem"
      width={w}
      height={size}
      viewBox="0 0 200 168"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill={accent}
        d="M10 150V28h18l40 78V28h18v122H68L28 72v78H10Z"
      />
      <path fill={ink} d="M42 138V88h11v50H42Zm16 0V72h11v66H58Zm16 0V56h11v82H74Z" />
      <path
        fill={ink}
        fillRule="evenodd"
        d="M102 36h46c18 0 30 12 30 28 0 12-7 21-19 25 15 4 26 15 26 32 0 20-17 33-40 33H102V36Zm16 14v24h24c8 0 13-5 13-12s-5-12-13-12H118Zm0 40v30h28c10 0 16-6 16-15s-6-15-16-15h-28Z"
      />
      <rect x="100" y="10" width="8" height="140" fill={accent} />
      <path fill={accent} d="M36 16h132v7H36z" />
      <path fill={accent} d="M96 8h16v14H96z" />
      <circle cx="162" cy="19.5" r="5.5" fill={accent} />
      <path d="M162 25v28" stroke={accent} strokeWidth="3.5" strokeLinecap="round" />
      <path fill={accent} d="M156 53h12c0 8-12 10-12 0Z" />
      <path
        fill={ink}
        d="M4 142c40-14 86 6 188 22l-4 9C90 157 46 139 2 151L4 142Z"
      />
      <path
        fill={accent}
        d="M10 140c42-12 88 6 162 20l-4 7C96 153 52 136 8 147l2-7Z"
      />
    </svg>
  )
}

export function Monogram({ variant = 'onLight', size = 48 }) {
  const px = typeof size === 'number' ? size : sizes[size] || 48
  const isDark = variant === 'onDark'
  return (
    <Mark
      size={px}
      ink={isDark ? PAPER : CHARCOAL}
      accent={BURGUNDY}
    />
  )
}

export default function Logo({
  variant = 'onLight',
  lockup = 'full',
  size = 'md',
  showTagline = false,
}) {
  const px = typeof size === 'number' ? size : sizes[size] || 64
  const isDark = variant === 'onDark'
  const ink = isDark ? PAPER : CHARCOAL

  if (lockup === 'mark') {
    return <Monogram variant={variant} size={px} />
  }

  return (
    <span className={`logo${isDark ? ' is-dark' : ''}`}>
      <Monogram variant={variant} size={px} />
      <span className="logo-type" style={{ color: ink }}>
        <span className="logo-acronym">NABE</span>
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
