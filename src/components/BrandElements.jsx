import { CHARCOAL, GOLD } from '../brand/colors'

export function ElementBuildings({ color = CHARCOAL }) {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <path fill={color} d="M8 52V28h12v24H8Zm18 0V18h12v34H26Zm18 0V10h12v42H44Z" />
    </svg>
  )
}

export function ElementCrane({ color = CHARCOAL, accent = GOLD }) {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <rect x="28" y="14" width="5" height="42" fill={color} />
      <rect x="8" y="16" width="48" height="4" fill={color} />
      <rect x="24" y="10" width="12" height="8" fill={color} />
      <circle cx="52" cy="18" r="3.2" fill={accent} />
      <path d="M52 21v14" stroke={color} strokeWidth="2" />
      <path fill={accent} d="M48 35h8v3c0 5-8 5-8 0v-3Z" />
    </svg>
  )
}

export function ElementCurve({ color = GOLD }) {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <path
        fill={color}
        d="M4 40c16-10 28-6 56 8l-3 7C30 42 18 38 4 48V40Z"
      />
    </svg>
  )
}

export function ServiceIcon({ name, color = CHARCOAL, accent = GOLD }) {
  const icons = {
    building: (
      <path
        d="M10 50V22l22-10 22 10v28H10Z"
        fill="none"
        stroke={color}
        strokeWidth="2.2"
      />
    ),
    architecture: (
      <>
        <path d="M12 50V28h40v22" fill="none" stroke={color} strokeWidth="2.2" />
        <path d="M8 28h48L32 10 8 28Z" fill="none" stroke={accent} strokeWidth="2.2" />
      </>
    ),
    interior: (
      <>
        <rect x="12" y="18" width="40" height="32" fill="none" stroke={color} strokeWidth="2.2" />
        <path d="M12 38h40M28 18v32" stroke={color} strokeWidth="2.2" />
      </>
    ),
    structure: (
      <path
        d="M10 50V22h16v28M38 50V14h16v36M10 22h44"
        fill="none"
        stroke={color}
        strokeWidth="2.2"
      />
    ),
    survey: (
      <>
        <circle cx="32" cy="28" r="10" fill="none" stroke={color} strokeWidth="2.2" />
        <path d="M32 18v20M22 28h20M32 38l-8 14h16L32 38Z" stroke={color} strokeWidth="2.2" />
      </>
    ),
    permits: (
      <>
        <rect x="16" y="12" width="28" height="40" fill="none" stroke={color} strokeWidth="2.2" />
        <path d="M22 24h16M22 32h16M22 40h10" stroke={color} strokeWidth="2" />
        <path d="M36 40l4 4 10-12" fill="none" stroke={accent} strokeWidth="2.2" />
      </>
    ),
    maintenance: (
      <>
        <circle cx="26" cy="28" r="10" fill="none" stroke={color} strokeWidth="2.2" />
        <path d="M33 35l16 16M45 39l6 6" stroke={color} strokeWidth="2.2" />
      </>
    ),
    people: (
      <>
        <circle cx="22" cy="22" r="6" fill="none" stroke={color} strokeWidth="2.2" />
        <circle cx="42" cy="22" r="6" fill="none" stroke={color} strokeWidth="2.2" />
        <path d="M10 48c2-10 10-14 18-14s16 4 18 14" fill="none" stroke={color} strokeWidth="2.2" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 64 64" width="48" height="48" fill="none" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}
