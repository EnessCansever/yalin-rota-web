import Header from '../components/Header'
import Footer from '../components/Footer'

const renewalAreas = [
  {
    title: 'Mobil kullanım',
    text: 'Menüleri, metinleri ve tıklanabilir alanları küçük ekranlarda rahat kullanılacak şekilde düzenleyebiliriz. Mobil uyumlu web sitesi yaklaşımı, yenilemenin temel parçalarından biridir.',
  },
  {
    title: 'Görsel tasarım',
    text: 'Markanızı yansıtan renk, tipografi ve yerleşimlerle görünümü güncelleyebiliriz. İşe yarayan görsel unsurları koruyarak daha tutarlı bir bütün oluşturmayı hedefliyoruz.',
  },
  {
    title: 'İçerik ve sayfa yapısı',
    text: 'Güncelliğini yitirmiş bilgileri ayıklayıp hizmetleri anlaşılır bir sıraya koyabiliriz. Ziyaretçilerin aradığı bilgiye daha az adımda ulaşmasını amaçlıyoruz.',
  },
  {
    title: 'Performans',
    text: 'Büyük görselleri, gereksiz yükleri ve açılışı yavaşlatan noktaları inceliyoruz. Yapılabilecek iyileştirmeleri mevcut altyapının sınırlarıyla birlikte değerlendiriyoruz.',
  },
  {
    title: 'İletişim alanları',
    text: 'Mevcut iletişim kanallarınızı kolay bulunur hale getirebilir, hatalı bağlantıları düzeltebiliriz. Yeni bir form veya işlev gerekiyorsa kapsamını ayrıca belirliyoruz.',
  },
  {
    title: 'Temel SEO altyapısı',
    text: 'Sayfa başlıkları, açıklamalar, içerik yapısı ve arama motorlarının sayfayı anlamasına yardımcı olan teknik temeller yeniden düzenlenebilir. Organik görünürlük zaman ve içerik çalışmasıyla gelişir.',
  },
]

const steps = [
  {
    title: 'Mevcut siteyi inceliyoruz',
    text: 'Site adresinizi, kullanılan altyapıyı ve erişilebilen teknik bilgileri gözden geçiriyoruz. Korunabilecek içerik ve işlevleri belirliyoruz.',
  },
  {
    title: 'Sorunları ve hedefleri belirliyoruz',
    text: 'Sizin önceliklerinizle teknik bulguları birlikte değerlendiriyoruz. Hangi alanların değişeceğini, çalışma takvimini ve ücreti netleştiriyoruz.',
  },
  {
    title: 'Tasarım ve teknik geliştirmeyi yapıyoruz',
    text: 'Onaylanan kapsamdaki düzenlemeleri hazırlıyoruz. Mümkün olduğunda değişiklikleri ayrı bir ortamda incelemenize sunarak mevcut yayından ayırıyoruz.',
  },
  {
    title: 'Kontrol edip yayına alıyoruz',
    text: 'Mobil görünümü, sayfaları ve bağlantıları kontrol ederek geçişi planlıyoruz. Mevcut domainin korunmasını hedefliyoruz; gerekli bağlantı ve taşıma işlemleri teknik duruma ve erişimlere göre değişebilir.',
  },
]

const priceFactors = [
  { title: 'Mevcut sitenin teknik durumu', text: 'Altyapının güncelliği, erişim imkânları ve mevcut sorunlar yapılacak işin kapsamını etkiler.' },
  { title: 'Yenilenecek sayfa sayısı', text: 'Birkaç sayfanın düzenlenmesi ile tüm sitenin yeniden ele alınması farklı çalışma gerektirir.' },
  { title: 'Tasarımın değişim düzeyi', text: 'Mevcut görünümün iyileştirilmesi veya yeni bir görsel yapının hazırlanması tasarım süresini değiştirir.' },
  { title: 'İçerik güncellemeleri', text: 'Korunacak, taşınacak ve yeniden hazırlanacak metin ve görselleri birlikte belirliyoruz.' },
  { title: 'Özel fonksiyonlar', text: 'Mevcut işlevlerin korunması, düzeltilmesi veya yenilerinin eklenmesi ayrıca değerlendirilir.' },
  { title: 'Bakım ve destek ihtiyacı', text: 'Geçiş sonrasındaki düzenleme ve teknik destek beklentileri teklifte ayrıca netleştirilir.' },
]

const questions = [
  {
    question: 'Web sitem tamamen sıfırdan mı yapılmalı?',
    answer: 'Bunu siteyi incelemeden söylemek doğru olmaz. Mevcut yapı güncellemeye uygunsa ihtiyaç duyulan alanları iyileştirebiliriz. Altyapı yeni ihtiyaçları karşılamıyorsa veya düzenlemeler sürdürülebilir olmayacaksa yeniden geliştirmeyi değerlendiririz.',
  },
  {
    question: 'Mevcut domainimi kullanmaya devam edebilir miyim?',
    answer: 'Çoğu durumda mevcut alan adı kullanılabilir. Alan adının yönetimine erişim, kayıt durumu ve yayın altyapısı kontrol edilmelidir. Hosting değişikliği gerekse bile domain değişmesi her zaman gerekmez; uygulanacak yolu inceleme sonrasında belirleriz.',
  },
  {
    question: 'Site yenilenirken mevcut site açık kalabilir mi?',
    answer: 'Teknik yapı uygunsa yeni sürüm ayrı bir ortamda hazırlanırken mevcut site yayında kalabilir. Ancak geçişin nasıl yapılacağı altyapıya ve erişimlere bağlıdır. Olası kesintileri önceden konuşarak uygun bir yayın zamanı planlarız.',
  },
  {
    question: 'Mevcut içeriklerim korunabilir mi?',
    answer: 'Güncel, kullanılabilir ve kullanım hakkı size ait içerikleri korumayı tercih ederiz. Taşımanın mümkün olup olmadığı kaynak sisteme ve erişimlere bağlıdır. Sayfa adresleri değişecekse eski bağlantıların nasıl yönlendirileceğini de kapsam içinde değerlendiririz.',
  },
  {
    question: 'Yenileme ne kadar sürer?',
    answer: 'Süre; mevcut sorunlara, değişecek sayfalara, yeni tasarım ihtiyacına ve içerik hazırlığına göre değişir. İnceleme ve kapsam belirleme sonrasında bir takvim paylaşırız. Eksik erişimler veya ek talepler bu takvimi etkileyebilir.',
  },
  {
    question: 'Web sitesi yenileme fiyatı nasıl belirlenir?',
    answer: 'Önce mevcut sitenizi ve değiştirmek istediğiniz alanları inceleriz. Teknik durum, sayfa sayısı, tasarım, içerik ve işlev ihtiyacına göre teklif hazırlarız. Bakım desteği ve varsa harici hizmet maliyetleri de işe başlamadan önce açıklanır.',
  },
]

export default function WebsiteRenewal() {
  return (
    <>
      <a className="skip-link" href="#main-content">İçeriğe geç</a>
      <Header homePath="/" />
      <main id="main-content" tabIndex={-1} className="corporate-page">
        <section className="corporate-hero page-container" aria-labelledby="renewal-title">
          <p className="hero-eyebrow">Web sitesi yenileme</p>
          <h1 id="renewal-title">Eski web sitenizi daha modern ve kullanışlı hale getirin</h1>
          <p className="hero-description">İşe yarayanı koruyup ihtiyaç duyulanı yenileyelim. Web sitesi yenileme hizmetimizle görünümü, mobil kullanımı, hızı, içerik düzenini ve teknik altyapıyı işletmenizin bugünkü ihtiyaçlarına göre değerlendiriyoruz.</p>
          <div className="hero-actions">
            <a className="button-primary" href="/#iletisim">Mevcut Sitenizi Konuşalım</a>
            <a className="hero-secondary" href="/">Ana Sayfaya Dön</a>
          </div>
        </section>

        <section className="corporate-section corporate-surface corporate-section-compact" aria-labelledby="renewal-needs-title">
          <div className="page-container corporate-split">
            <div>
              <p className="hero-eyebrow">Ne zaman yenileme gerekir?</p>
              <h2 id="renewal-needs-title">Siteniz bugünkü işletmenizi anlatmakta zorlanıyorsa.</h2>
            </div>
            <ul className="corporate-list">
              <li>Telefonda okumak, menüyü açmak veya bağlantılara dokunmak zorlaşıyorsa.</li>
              <li>Eski tasarım, işletmenizin sunduğu özeni ve güveni yansıtmıyorsa.</li>
              <li>Sayfalar yavaş açılıyor ve bilgiye ulaşmak gereğinden uzun sürüyorsa.</li>
              <li>İçerikler dağınıksa veya artık geçerli olmayan bilgiler içeriyorsa.</li>
              <li>Hizmetleriniz ve iletişim kanallarınız kolay bulunamıyorsa.</li>
              <li>Yeni hizmetleriniz, değişen çalışma alanınız veya marka kimliğiniz sitede yer almıyorsa.</li>
            </ul>
          </div>
        </section>

        <section className="corporate-section" aria-labelledby="renewal-scope-title">
          <div className="page-container">
            <div className="corporate-intro">
              <p className="hero-eyebrow">Yenileme kapsamı</p>
              <h2 id="renewal-scope-title">Neler yenilenebilir?</h2>
              <p>Her alanı değiştirmek zorunda değilsiniz. Öncelikleri belirleyip sitenizin ihtiyaç duyduğu düzenlemelere odaklanıyoruz.</p>
            </div>
            <ul className="corporate-grid" role="list">
              {renewalAreas.map(item => (
                <li key={item.title}><h3>{item.title}</h3><p>{item.text}</p></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="corporate-section corporate-surface corporate-section-compact" aria-labelledby="renewal-choice-title">
          <div className="page-container corporate-split">
            <div>
              <p className="hero-eyebrow">Doğru yaklaşımı seçmek</p>
              <h2 id="renewal-choice-title">Web sitesi yenileme mi, yeniden yaptırma mı?</h2>
            </div>
            <div className="corporate-prose">
              <p>Eski bir web sitesi, her şeyin baştan yapılması gerektiği anlamına gelmez. Mevcut altyapıyı, içerikleri ve beklentilerinizi inceleyerek korunabilecek parçaları belirliyoruz.</p>
              <p>Yapı uygunsa mevcut site üzerinde iyileştirme yapmak yeterli olabilir. Altyapı çok eski, sorunlu veya ihtiyaçlarınıza uygun değilse yeniden geliştirme daha mantıklı olabilir. Seçenekleri gerekçeleriyle paylaşarak kararı birlikte veriyoruz.</p>
              <a className="corporate-inline-link" href="/kurumsal-web-sitesi">Yeni bir kurumsal web sitesi seçeneğini incele →</a>
            </div>
          </div>
        </section>

        <section className="corporate-section" aria-labelledby="renewal-process-title">
          <div className="page-container">
            <p className="hero-eyebrow">Çalışma süreci</p>
            <h2 id="renewal-process-title">İncelemeyle başlayan, kontrollü bir yenileme.</h2>
            <ol className="process-steps">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <span className="process-number" aria-hidden="true">0{index + 1}</span>
                  <div className="process-step-content"><h3>{step.title}</h3><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="corporate-section corporate-surface" aria-labelledby="renewal-price-title">
          <div className="page-container corporate-split">
            <div className="corporate-intro">
              <p className="hero-eyebrow">Fiyat ve teklif</p>
              <h2 id="renewal-price-title">Web sitesi yenileme fiyatları neye göre değişir?</h2>
              <p>Her yenileme projesini mevcut sitenin durumuna göre değerlendiriyoruz. İhtiyacınızı ve sitenizi inceledikten sonra kapsamı netleştirip teklif sunuyoruz.</p>
            </div>
            <dl className="corporate-factors">
              {priceFactors.map(item => (
                <div key={item.title}><dt>{item.title}</dt><dd>{item.text}</dd></div>
              ))}
            </dl>
          </div>
          <div className="page-container">
            <a className="corporate-inline-link" href="/#iletisim">Mevcut siteniz için teklif alın →</a>
          </div>
        </section>

        <section className="corporate-section corporate-section-compact" aria-labelledby="renewal-approach-title">
          <div className="page-container corporate-split">
            <div>
              <p className="hero-eyebrow">Neden Yalın Rota?</p>
              <h2 id="renewal-approach-title">Değiştirmeden önce neyi koruyacağımızı anlıyoruz.</h2>
            </div>
            <div className="corporate-prose">
              <p>Mevcut sisteminizi tanımadan büyük değişiklikler önermiyoruz. Mobil kullanım ve bilgiye erişim gibi somut ihtiyaçlara öncelik veriyor, yenileme fırsatını gereksiz özelliklerle büyütmüyoruz.</p>
              <p>Geçiş sırasında mevcut yayının nasıl yönetileceğini baştan konuşuyoruz. Yeni sürümün kontrollerini ve yayın sonrası bakım ihtiyaçlarını birlikte planlayarak değişiklikleri takip edilebilir tutuyoruz.</p>
            </div>
          </div>
        </section>

        <section className="faq" aria-labelledby="renewal-faq-title">
          <div className="page-container">
            <div className="faq-inner">
              <p className="faq-eyebrow">Sık sorulan sorular</p>
              <h2 id="renewal-faq-title">Mevcut sitenizle ilgili merak ettikleriniz.</h2>
              <div className="faq-list">
                {questions.map(item => (
                  <details className="corporate-question" key={item.question}>
                    <summary>{item.question}</summary>
                    <div className="faq-answer"><p>{item.answer}</p></div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact" aria-labelledby="renewal-contact-title">
          <div className="page-container">
            <div className="corporate-intro">
              <p className="contact-eyebrow">Sitenizin bir sonraki adımı</p>
              <h2 id="renewal-contact-title">Mevcut sitenizin nerede iyileştirilebileceğini birlikte değerlendirelim.</h2>
              <p className="contact-description">Site adresinizi ve değiştirmek istediğiniz noktaları paylaşın. Size uygun yenileme kapsamını konuşalım.</p>
              <a className="corporate-contact-link" href="/#iletisim">İletişime Geç</a>
            </div>
          </div>
        </section>
      </main>
      <Footer homePath="/" />
    </>
  )
}
