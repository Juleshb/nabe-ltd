import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Leadership' },
  { to: '/identity', label: 'Identity' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <p>
            Call us:{' '}
            <a href="tel:+250781126059">+250 781 126 059</a>
            {' · '}
            info@nabe.rw
          </p>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-inner">
          <Link
            to="/"
            className="brand"
            onClick={() => setOpen(false)}
            aria-label="National Benchmark Engineering Ltd home"
          >
            <Logo variant="onLight" size={40} showTagline />
          </Link>
          <button
            className="menu-btn"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
          <nav className={open ? 'nav open' : 'nav'} aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link className="btn btn-gold" to="/contact" onClick={() => setOpen(false)}>
              Start a project
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
