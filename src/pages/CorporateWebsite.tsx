import Header from '../components/Header'
import Footer from '../components/Footer'

const scopeItems = [
  { title: 'Telefonda ve bilgisayarda rahat kullanım', text: 'Ekran boyutuna uyum sağlayan tasarım, okunaklı metinler ve kolay kullanılan menüler hazırlıyoruz.' },
  { title: 'İşletmenizi anlatan içerik yapısı', text: 'Şirket tanıtımını ve hizmetlerinizi ziyaretçinin aradığı bilgiye kolayca ulaşabileceği bölümlerde düzenliyoruz.' },
  { title: 'Ulaşılabilir iletişim alanları', text: 'Paylaşmak istediğiniz gerçek iletişim kanallarını görünür kılıyoruz. Form gibi ek ihtiyaçları kapsam belirlerken ayrıca değerlendiriyoruz.' },
  { title: 'Temel SEO altyapısı', text: 'Sayfa başlıklarını, açıklamalarını ve arama motorlarının içeriği anlamasına yardımcı olan teknik temelleri hazırlıyoruz. Arama sıralaması garantisi vermiyoruz.' },
  { title: 'Hızlı ve modern arayüz', text: 'Gereksiz görsel yükünü ve karmaşık etkileşimleri azaltarak sitenin rahat kullanılmasına odaklanıyoruz.' },
  { title: 'Yayına geçişte teknik destek', text: 'Son kontrollerde, alan adı bağlantısında ve yayın ayarlarında yardımcı oluyoruz. Alan adı ve barındırma maliyetlerini teklifte ayrıca netleştiriyoruz.' },
]

const steps = [
  { title: 'İhtiyacı anlama', text: 'İşletmenizi, ulaşmak istediğiniz müşterileri ve web sitesi yaptırmak için öncelikli nedeninizi dinliyoruz.' },
  { title: 'Kapsamı belirleme', text: 'Sayfaları, içerikleri ve gerekli işlevleri birlikte seçiyoruz. İşe başlamadan önce ücret, teslim planı ve sorumluluklar netleşiyor.' },
  { title: 'Tasarım ve geliştirme', text: 'Kararlaştırılan yapıyı işletmenizin kimliğine uygun bir arayüze dönüştürüyoruz. İncelemeniz ve kapsam içindeki geri bildirimleriniz için alan bırakıyoruz.' },
  { title: 'Yayına alma', text: 'Mobil görünümü, bağlantıları ve temel teknik ayarları kontrol ediyoruz. Onayınızın ardından yayın işlemlerini tamamlıyoruz.' },
]

const priceFactors = [
  { title: 'Sayfa sayısı', text: 'Tek sayfalık bir işletme web sitesi ile her hizmetin ayrı anlatıldığı bir yapı farklı çalışma gerektirir.' },
  { title: 'Özel tasarım ihtiyacı', text: 'Markaya özel yerleşimler ve ayrıntılı görsel çalışmalar tasarım kapsamını etkiler.' },
  { title: 'Özel fonksiyonlar', text: 'Standart tanıtımın dışındaki işlevleri uygulanabilirlik ve geliştirme süresi açısından ayrıca değerlendiriyoruz.' },
  { title: 'İçeriklerin hazır olması', text: 'Metin, logo ve görsellerin hazır olması planlamayı kolaylaştırır. Eksik içerikler için kimin ne hazırlayacağını baştan belirliyoruz.' },
  { title: 'Bakım ve destek kapsamı', text: 'Yayın sonrası güncelleme sıklığı ve beklenen teknik destek, proje tesliminden ayrı planlanabilir.' },
]

const questions = [
  { question: 'Kurumsal web sitesi ne kadar sürede hazırlanır?', answer: 'Takvim; sayfaların kapsamına, ek işlevlere ve içeriklerin ne zaman hazır olacağına bağlıdır. İhtiyaçları konuştuktan sonra bir teslim planı paylaşırız. Sonradan eklenen talepler takvimi değiştirebilir.' },
  { question: 'Domain ve hosting dahil mi?', answer: 'Alan adı ve hosting ayrı hizmet bedelleridir. Bu maliyetlerin kim tarafından karşılanacağı ve teklifin neleri kapsadığı işe başlamadan önce belirtilir. Mevcut alan adınız varsa bağlantısını birlikte değerlendiririz.' },
  { question: 'İçerikleri kim hazırlıyor?', answer: 'İşletmenize ait bilgiler, logo ve kullanım izniniz olan görseller sizden gelir. Sayfaların içerik düzenini birlikte planlarız. Yeni metin yazımı veya görsel üretimi gerekiyorsa bunları ayrıca konuşuruz; fotoğraf çekimi hizmete otomatik olarak dahil değildir.' },
  { question: 'Web sitesi mobil uyumlu olacak mı?', answer: 'Evet. Mobil uyumlu web sitesi tasarımını başlangıçtan itibaren ele alırız. Yayından önce telefon, tablet ve masaüstü genişliklerinde okunabilirliği, menüleri ve iletişim bağlantılarını kontrol ederiz.' },
  { question: 'Daha sonra güncelleme yapılabilir mi?', answer: 'Evet, yeni içerik veya özellikler için sonradan çalışma planlanabilir. Güncellemeleri kendiniz yapmak istiyorsanız bunu başlangıçta belirtmeniz gerekir; yönetim paneli her projede varsayılan olarak bulunmaz.' },
  { question: 'Fiyat nasıl belirleniyor?', answer: 'Sayfa sayısını, tasarım ihtiyacını, ek işlevleri ve içerik durumunu birlikte değerlendirerek teklif hazırlıyoruz. Bakım desteği de beklentinize göre ayrıca belirlenir. Kapsamı görmeden sabit bir fiyat söylemek yerine ne için ödeme yapacağınızı açıkça anlatıyoruz.' },
]

export default function CorporateWebsite() {
  return (
    <>
      <a className="skip-link" href="#main-content">İçeriğe geç</a>
      <Header homePath="/" />
      <main id="main-content" tabIndex={-1} className="corporate-page">
        <section className="corporate-hero page-container" aria-labelledby="corporate-title">
          <p className="hero-eyebrow">Kurumsal web sitesi</p>
          <h1 id="corporate-title">İşletmeniz için profesyonel bir kurumsal web sitesi</h1>
          <p className="hero-description">İşletmenizi tanımak isteyen müşteriler için açık, güven veren bir ilk izlenim oluşturun. Hizmetlerinizi anlatan, hızlı çalışan ve telefonda kolay kullanılan modern web siteleri geliştiriyoruz.</p>
          <div className="hero-actions">
            <a className="button-primary" href="/#iletisim">Projenizi Konuşalım</a>
            <a className="hero-secondary" href="/">Ana Sayfaya Dön</a>
          </div>
        </section>

        <section className="corporate-section corporate-surface" aria-labelledby="audience-title">
          <div className="page-container corporate-split">
            <div><p className="hero-eyebrow">Kimler için uygun?</p><h2 id="audience-title">İşletmenizi internette daha iyi anlatmak istediğinizde.</h2></div>
            <ul className="corporate-list">
              <li>Yeni kurulan ve müşterilerine kendini tanıtmak isteyen işletmeler.</li>
              <li>Henüz web sitesi olmayan, bilgilerini tek bir yerde sunmak isteyen işletmeler.</li>
              <li>Eski sitesi güncel görünmeyen veya ziyaretçisine güven vermeyen işletmeler.</li>
              <li>Hizmetlerini daha düzenli sunmak ve iletişime geçmeyi kolaylaştırmak isteyen işletmeler.</li>
            </ul>
          </div>
        </section>

        <section className="corporate-section" aria-labelledby="scope-title">
          <div className="page-container">
            <div className="corporate-intro"><p className="hero-eyebrow">Hizmet kapsamı</p><h2 id="scope-title">Kurumsal web sitenizde neler sunuluyor?</h2><p>Temel yapıyı aşağıdaki ihtiyaçlar üzerine kuruyoruz. Hangi sayfaların ve özelliklerin yer alacağını teklif aşamasında birlikte netleştiriyoruz.</p></div>
            <ul className="corporate-grid" role="list">
              {scopeItems.map(item => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="corporate-section corporate-surface" aria-labelledby="corporate-process-title">
          <div className="page-container"><p className="hero-eyebrow">Süreç</p><h2 id="corporate-process-title">İlk görüşmeden yayına kadar dört adım.</h2>
            <ol className="process-steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="process-number" aria-hidden="true">0{index + 1}</span>
                  <div className="process-step-content">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="corporate-section" aria-labelledby="price-title">
          <div className="page-container corporate-split">
            <div className="corporate-intro"><p className="hero-eyebrow">Bütçe ve kapsam</p><h2 id="price-title">Kurumsal web sitesi fiyatları neye göre değişir?</h2><p>Doğru teklif, ihtiyaç duyduğunuz işi tarif eder. Bu yüzden fiyatı tek bir pakete göre değil, birlikte belirlediğimiz kapsam üzerinden oluşturuyoruz.</p></div>
            <dl className="corporate-factors">
              {priceFactors.map(item => (
                <div key={item.title}>
                  <dt>{item.title}</dt>
                  <dd>{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="corporate-section corporate-surface" aria-labelledby="approach-title">
          <div className="page-container corporate-split">
            <div><p className="hero-eyebrow">Neden Yalın Rota?</p><h2 id="approach-title">Ne yaptırdığınızı bilerek ilerleyin.</h2></div>
            <div className="corporate-prose"><p>Web sitesi kararları vermek için teknik terimlere hâkim olmanız gerekmez. Seçenekleri işletmenize katkılarıyla anlatır, gerekli olmayan özellikleri sırf eklenebildiği için kapsama almayız.</p><p>İletişimin doğrudan olduğu, mobil kullanımın baştan düşünüldüğü bir çalışma sunuyoruz. Yayından sonra ihtiyaç duyacağınız güncellemeler için de destek kapsamını birlikte planlayabiliriz.</p></div>
          </div>
        </section>

        <section className="faq" aria-labelledby="corporate-faq-title">
          <div className="page-container"><div className="faq-inner"><p className="faq-eyebrow">Sık sorulan sorular</p><h2 id="corporate-faq-title">Başlamadan önce bilmek isteyebilecekleriniz.</h2>
            <div className="faq-list">
              {questions.map(item => (
                <details className="corporate-question" key={item.question}>
                  <summary>{item.question}</summary>
                  <div className="faq-answer"><p>{item.answer}</p></div>
                </details>
              ))}
            </div>
          </div></div>
        </section>

        <section className="contact" aria-labelledby="corporate-contact-title">
          <div className="page-container"><div className="corporate-intro"><p className="contact-eyebrow">Bir sonraki adım</p><h2 id="corporate-contact-title">İşletmeniz için doğru web sitesini birlikte planlayalım.</h2><p className="contact-description">Ne iş yaptığınızı ve sitenizden ne beklediğinizi kısaca paylaşın. Nereden başlayabileceğimizi konuşalım.</p><a className="corporate-contact-link" href="/#iletisim">İletişime Geç →</a></div></div>
        </section>
      </main>
      <Footer homePath="/" />
    </>
  )
}
