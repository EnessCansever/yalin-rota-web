const steps = [
  {
    number: '01',
    title: 'İhtiyacı Anlıyoruz',
    description: 'İşletmenizi, hedeflerinizi ve varsa mevcut sitenizi konuşuyoruz. Yeni siteden ne beklediğinizi birlikte netleştiriyoruz.',
  },
  {
    number: '02',
    title: 'Kapsamı Belirliyoruz',
    description: 'Gerekli sayfaları, özellikleri ve içerikleri belirliyoruz. İşe başlamadan önce ücret ve teslim planında anlaşıyoruz.',
  },
  {
    number: '03',
    title: 'Tasarlıyor ve Geliştiriyoruz',
    description: 'Onayladığınız yapı doğrultusunda, telefonda ve bilgisayarda rahat kullanılan sitenizi hazırlıyoruz. İncelemenizle birlikte kapsam içindeki düzenlemeleri tamamlıyoruz.',
  },
  {
    number: '04',
    title: 'Yayına Alıyoruz',
    description: 'Mobil görünümü ve bağlantıları kontrol ediyoruz. Alan adı ve yayın ayarlarını tamamlayıp onayınızla siteyi yayına alıyoruz.',
  },
]

export default function Process() {
  return (
    <section id="surec" className="process" aria-labelledby="process-title" tabIndex={-1}>
      <div className="page-container">
        <div className="process-intro">
          <p className="process-eyebrow">Süreç</p>
          <h2 id="process-title">Fikirden yayına, anlaşılır bir süreç.</h2>
        </div>
        <ol className="process-steps" role="list">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="process-number" aria-hidden="true">{step.number}</span>
              <div className="process-step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
