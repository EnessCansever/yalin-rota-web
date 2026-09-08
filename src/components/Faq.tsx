import { useState } from 'react'

const faqItems = [
  {
    id: 'teslim-suresi',
    question: 'Web sitesi ne kadar sürede hazırlanır?',
    answer: 'Süre; projenin kapsamına, sayfa sayısına, özelliklerine ve içeriklerin hazır olmasına göre değişir. Basit bir kurumsal site ile özel geliştirme gerektiren bir proje aynı sürede tamamlanmaz. Teslim planını işe başlamadan önce birlikte belirliyoruz.',
  },
  {
    id: 'icerikler',
    question: 'Web sitesi için içerikleri kim hazırlıyor?',
    answer: 'Mevcut metinlerinizi, kullanma hakkınız olan görselleri ve marka materyallerinizi kullanabiliriz. Hangi içeriklerin gerektiğini ve nasıl düzenleneceğini birlikte netleştiriyoruz. Profesyonel fotoğrafçılık ve ayrıca içerik üretimi otomatik olarak hizmet kapsamına dahil değildir.',
  },
  {
    id: 'mobil-uyum',
    question: 'Mobil uyumlu olacak mı?',
    answer: 'Evet. Mobil kullanımı ilk aşamadan itibaren dikkate alıyoruz. Hizmetlerinizin telefonda rahat okunmasına, menülerin kolay kullanılmasına ve iletişim bilgilerinizin erişilebilir olmasına önem veriyoruz.',
  },
  {
    id: 'alan-adi-hosting',
    question: 'Alan adı ve hosting konusunda yardımcı oluyor musunuz?',
    answer: 'Evet. Alan adı ve sitenin yayınlanacağı barındırma hizmetinin kurulum ve bağlantılarında yardımcı oluyoruz. Alan adı ve hosting ücretleri ayrı maliyetlerdir; proje ücretine dahil olup olmadıkları teklifte açıkça belirtilir.',
  },
  {
    id: 'yayin-sonrasi',
    question: 'Site yayınlandıktan sonra destek alabilir miyim?',
    answer: 'Evet. İçerik güncellemeleri, teknik düzenlemeler ve geliştirmeler için bakım ve destek ayrıca planlanabilir. İhtiyacınıza göre kapsamı ve ücreti netleştiriyoruz.',
  },
  {
    id: 'fiyat',
    question: 'Fiyat nasıl belirleniyor?',
    answer: 'Fiyat; sayfa sayısı, gereken özellikler, içerik durumu ve özel geliştirme ihtiyacına göre belirlenir. İşe başlamadan önce yapılacak işleri ve ücreti birlikte netleştiriyoruz.',
  },
]

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null)

  return (
    <section id="sss" className="faq" aria-labelledby="faq-title" tabIndex={-1}>
      <div className="page-container">
        <div className="faq-inner">
          <p className="faq-eyebrow">SSS</p>
          <h2 id="faq-title">Aklınıza takılabilecek birkaç konu.</h2>
          <p className="faq-description">Süreç, teslim ve çalışma şekli hakkında kısa yanıtlar.</p>
          <div className="faq-list">
            {faqItems.map((item) => {
              const isOpen = activeFaq === item.id

              return (
                <div className="faq-item" key={item.id}>
                  <h3>
                    <button
                      id={`faq-question-${item.id}`}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                      onClick={() => setActiveFaq((current) => current === item.id ? null : item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                    </button>
                  </h3>
                  <div
                    id={`faq-answer-${item.id}`}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    hidden={!isOpen}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
