const values = [
  {
    title: 'İhtiyaca göre çözüm',
    description: 'Önce işletmenizi ve hedeflerinizi konuşuyoruz. Sayfaları ve özellikleri, gerçekten ihtiyaç duyduğunuz işlere göre belirliyoruz.',
  },
  {
    title: 'Açık iletişim',
    description: 'Projeyi geliştiren kişiyle doğrudan görüşürsünüz. Teknik bilgiye ihtiyaç duymadan, hangi aşamada olduğumuzu ve sırada ne olduğunu bilirsiniz.',
  },
  {
    title: 'Telefonda da rahat kullanım',
    description: 'Müşterilerinizin hizmetlerinizi incelemesini ve size ulaşmasını telefonda da kolaylaştıran bir site hazırlıyoruz.',
  },
  {
    title: 'Yayın sonrası destek',
    description: 'Site yayınlandıktan sonraki güncelleme ve geliştirme ihtiyaçlarınız için destek sunuyoruz. Desteğin kapsamını ve ücretini ayrıca netleştiriyoruz.',
  },
]

export default function WhyUs() {
  return (
    <section id="neden-yalin-rota" className="why-us" aria-labelledby="why-us-title">
      <div className="page-container why-us-layout">
        <div className="why-us-intro">
          <p className="why-us-eyebrow">Neden Yalın Rota?</p>
          <h2 id="why-us-title">Web projenizi gereksiz karmaşaya dönüştürmeden ilerletiyoruz.</h2>
          <p className="why-us-description">
            Önce ihtiyacınızı anlıyor, gereksiz özelliklerle projeyi büyütmeden kapsamı
            belirliyoruz. Süreç boyunca ne yapıldığını açıkça paylaşıyoruz.
          </p>
        </div>
        <ul className="why-us-values" role="list">
          {values.map((value) => (
            <li key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
