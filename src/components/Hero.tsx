export default function Hero() {
  return (
    <section className="hero page-container" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-eyebrow">Web &amp; Dijital Çözümler</p>
        <h1 id="hero-title">İşletmenize yakışan bir web sitesi.</h1>
        <p className="hero-description">
          Yalın Rota, işletmeler için hızlı, modern ve güven veren web siteleri geliştirir.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#iletisim">Projenizi Konuşalım</a>
          <a className="hero-secondary" href="#hizmetler">Hizmetleri İncele</a>
        </div>
      </div>
      <div className="hero-preview" aria-hidden="true">
        <div className="preview-toolbar">
          <span /><span /><span />
          <div className="preview-address" />
        </div>
        <div className="preview-page">
          <div className="preview-header">
            <div className="preview-brand" />
            <div className="preview-nav"><span /><span /><span /></div>
          </div>
          <div className="preview-content">
            <div className="preview-heading" />
            <div className="preview-heading preview-heading-short" />
            <div className="preview-line" />
            <div className="preview-line preview-line-short" />
            <div className="preview-button" />
          </div>
          <div className="preview-blocks"><span /><span /><span /></div>
        </div>
      </div>
    </section>
  )
}
