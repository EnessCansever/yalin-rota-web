const services = [
  {
    id: 'kurumsal-web-sitesi',
    number: '01',
    title: 'Kurumsal Web Sitesi',
    description:
      'Hizmetlerinizi ve iletişim bilgilerinizi açıkça sunan, işletmenize güven veren ve telefonda rahat kullanılan bir web sitesi.',
  },
  {
    id: 'web-sitesi-yenileme',
    number: '02',
    title: 'Web Sitesi Yenileme',
    description:
      'Eski, yavaş veya mobilde kullanımı zor olan sitenizi daha güncel, hızlı ve kullanışlı hale getiriyoruz.',
  },
  {
    id: 'ozel-web-gelistirme',
    number: '03',
    title: 'Özel Web Geliştirme',
    description:
      'Standart bir tanıtım sitesinin yeterli olmadığı durumlarda, işletmenizin ihtiyacına göre özel web özellikleri ve uygulamalar geliştirme.',
  },
  {
    id: 'bakim-teknik-destek',
    number: '04',
    title: 'Bakım & Teknik Destek',
    description:
      'Yayındaki sitenizin içerik güncellemeleri, teknik düzenlemeleri ve ihtiyaç duyulan geliştirmeleri için destek sağlıyoruz.',
  },
]

export default function Services() {
  return (
    <section id="hizmetler" className="services" aria-labelledby="services-title" tabIndex={-1}>
      <div className="page-container">
        <div className="services-intro">
          <p className="services-eyebrow">Hizmetler</p>
          <h2 id="services-title">İşletmenizin ihtiyacına uygun web çözümleri.</h2>
          <p className="services-description">
            Yeni bir siteye başlamak veya mevcut sitenizi geliştirmek için teknik bilgiye
            ihtiyacınız yok. İşletmenizi anlatın, uygun çözümü birlikte belirleyelim.
          </p>
        </div>
        <ul className="services-grid" role="list">
          {services.map((service) => (
            <li className="service-card" key={service.id}>
              <span className="service-number" aria-hidden="true">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
