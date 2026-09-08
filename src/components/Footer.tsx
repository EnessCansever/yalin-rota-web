import logo from '../assets/brand/yalin-rota-logo.png'

const footerLinks = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Çalışmalar', href: '#calismalar' },
  { label: 'Süreç', href: '#surec' },
  { label: 'SSS', href: '#sss' },
  { label: 'İletişim', href: '#iletisim' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-layout">
          <div>
            <a className="brand-link" href="#top">
              <img className="brand-logo" src={logo} alt="Yalın Rota" width={2172} height={724} />
            </a>
            <p className="footer-tagline">Web &amp; Dijital Çözümler</p>
          </div>
          <nav aria-label="Alt navigasyon">
            <ul className="footer-links" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>
          <div className="footer-contact">
            <a href="https://www.instagram.com/yalinrota/" target="_blank" rel="noopener noreferrer" aria-label="Instagram @yalinrota (yeni sekmede)">@yalinrota <span aria-hidden="true">↗</span></a>
            <a href="mailto:yalinrota@gmail.com">yalinrota@gmail.com</a>
          </div>
        </div>
        <p className="footer-copyright">© {currentYear} Yalın Rota.</p>
      </div>
    </footer>
  )
}
