export default function Contact() {
  return (
    <section id="iletisim" className="contact" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="page-container contact-layout">
        <div className="contact-intro">
          <p className="contact-eyebrow">İletişim</p>
          <h2 id="contact-title">Web projenizi konuşalım.</h2>
          <p className="contact-description">
            Yeni bir siteye ihtiyacınız varsa veya mevcut sitenizi yenilemeyi
            düşünüyorsanız, ihtiyacınızı kısaca anlatmanız yeterli.
          </p>
        </div>
        <div className="contact-channels">
          <a
            className="contact-channel"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yalinrota%40gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="E-posta: yalinrota@gmail.com — Gmail'de yazın (yeni sekmede)"
          >
            <span className="contact-channel-name">E-posta</span>
            <span className="contact-channel-address">yalinrota@gmail.com</span>
            <span className="contact-channel-action">Gmail'de yazın <span aria-hidden="true">↗</span></span>
          </a>
          <a className="contact-channel" href="https://www.instagram.com/yalinrota/" target="_blank" rel="noopener noreferrer">
            <span className="contact-channel-name">Instagram</span>
            <span className="contact-channel-address">@yalinrota</span>
            <span className="contact-channel-action">Profili açın · Yeni sekmede <span aria-hidden="true">↗</span></span>
          </a>
        </div>
      </div>
    </section>
  )
}
