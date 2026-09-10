import { useEffect, useRef, useState } from 'react'
import logo from '../assets/brand/yalin-rota-logo.png'

const navigationLinks = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Çalışmalar', href: '#calismalar' },
  { label: 'Süreç', href: '#surec' },
  { label: 'SSS', href: '#sss' },
]

export default function Header({ homePath = '' }: { homePath?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 64rem)')

    function closeOnDesktop() {
      if (desktop.matches) setIsMenuOpen(false)
    }

    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  function closeMenu(href: string) {
    if (!isMenuOpen) return

    setIsMenuOpen(false)
    const target = document.getElementById(href.slice(1))

    // Bölümler eklendiğinde odağı hedefe taşı; şimdilik menü butonuna dön.
    if (target) {
      target.setAttribute('tabindex', '-1')
      target.focus()
    } else {
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header
      id="top"
      tabIndex={-1}
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isMenuOpen) {
          setIsMenuOpen(false)
          menuButtonRef.current?.focus()
        }
      }}
    >
      <div className="page-container header-inner">
        <a className="brand-link" href={`${homePath}#top`} onClick={() => closeMenu('#top')}>
          <img className="brand-logo" src={logo} alt="Yalın Rota" width={2172} height={724} />
        </a>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span>Menü</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d={isMenuOpen ? 'M6 6l12 12M6 18L18 6' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        <nav
          id="main-navigation"
          aria-label="Ana navigasyon"
          className={`header-navigation${isMenuOpen ? ' is-open' : ''}`}
        >
          <ul className="navigation-links">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={`${homePath}${link.href}`} onClick={() => closeMenu(link.href)}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a className="button-primary" href={`${homePath}#iletisim`} onClick={() => closeMenu('#iletisim')}>
            İletişime Geç
          </a>
        </nav>
      </div>
    </header>
  )
}
