type Project = {
  id: string
  name: string
  type: string
  description: string
  features: string[]
  technologies: string[]
  liveUrl: string
  githubUrl: string
  visualVariant: 'fixora' | 'jobfit'
}

const projects: Project[] = [
  {
    id: 'fixora',
    name: 'Fixora',
    type: 'AI destekli web uygulaması',
    description: 'Yazılımcıların tarayıcı konsolunda gördüğü İngilizce hata mesajlarını Türkçe ve uygulanabilir açıklamalara dönüştüren web uygulaması.',
    features: ['AI destekli hata analizi', 'Türkçe açıklamalar', 'Geçmiş analizler', 'Paylaşılabilir sonuçlar'],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AI'],
    liveUrl: 'https://getfixora.dev',
    githubUrl: 'https://github.com/EnessCansever/fixora',
    visualVariant: 'fixora',
  },
  {
    id: 'jobfit-tr',
    name: 'JobFit TR',
    type: 'İş ilanı analiz ve başvuru takip uygulaması',
    description: 'İş ilanlarını adayın becerileriyle karşılaştıran, uygunluk oranını ve eksik alanları gösteren, başvuruların takip edilmesini sağlayan web uygulaması.',
    features: ['İlan uyumluluk analizi', 'Eşleşen ve eksik beceriler', 'Uygunluk skoru', 'Başvuru takibi'],
    technologies: ['React', 'TypeScript', 'Vite'],
    liveUrl: 'https://jobfit-tr.vercel.app/',
    githubUrl: 'https://github.com/EnessCansever/jobfit-tr',
    visualVariant: 'jobfit',
  },
]

export default function Projects() {
  return (
    <section id="calismalar" className="projects" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="page-container">
        <div className="projects-intro">
          <p className="projects-eyebrow">Seçilmiş Çalışmalar</p>
          <h2 id="projects-title">Fikirden çalışan ürüne dönüşen projeler.</h2>
          <p className="projects-description">
            Yalın Rota’nın kurucusu tarafından geliştirilen seçili ürünler.
            Bu çalışmalar müşteri projesi değildir; ürün geliştirme ve teknik uygulama deneyimini gösterir.
          </p>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <article className={`project-showcase project-showcase--${project.visualVariant}`} key={project.id} aria-labelledby={`${project.id}-title`}>
              <div className="project-info">
                <p className="project-type">{project.type}</p>
                <h3 id={`${project.id}-title`}>{project.name}</h3>
                <p className="project-origin">Kurucu projesi</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-features" aria-label={`${project.name} özellikleri`}>
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <p className="project-technologies">
                  <span>Teknolojiler: </span>{project.technologies.join(' · ')}
                </p>
                <div className="project-links">
                  <a className="project-link-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} — Canlıyı Gör (yeni sekmede)`}>
                    Canlıyı Gör <span aria-hidden="true">↗</span>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} — GitHub (yeni sekmede)`}>
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
              <figure className="project-visual">
                {/* Gerçek ekran görüntüsü geldiğinde yalnızca bu dekoratif çerçeve değiştirilebilir. */}
                <div className="project-browser" aria-hidden="true">
                  <div className="project-browser-bar">
                    <span /><span /><span />
                    <p>{project.name}</p>
                  </div>
                  {project.visualVariant === 'fixora' ? (
                    <div className="project-browser-body">
                      <div className="project-error-line">
                        <span className="project-code-mark">{'</>'}</span>
                        <span>Hata mesajı</span>
                      </div>
                      <div className="project-flow-label">↓ Türkçe açıklama</div>
                      <div className="project-analysis-block">
                        <span className="project-placeholder-line" />
                        <span className="project-placeholder-line project-placeholder-line--short" />
                        <span className="project-placeholder-line" />
                      </div>
                      <div className="project-preview-tags"><span>Analiz geçmişi</span><span>Paylaşım</span></div>
                    </div>
                  ) : (
                    <div className="project-browser-body">
                      <div className="project-match-heading"><span className="project-match-symbol">↔</span><span>Beceri karşılaştırması</span></div>
                      <div className="project-skill-row"><span>Eşleşen alanlar</span><span className="project-placeholder-line" /></div>
                      <div className="project-skill-row"><span>Eksik alanlar</span><span className="project-placeholder-line project-placeholder-line--short" /></div>
                      <div className="project-preview-tags"><span>İlan analizi</span><span>Başvuru takibi</span></div>
                    </div>
                  )}
                </div>
                <figcaption>Temsili arayüz · Gerçek ekran görüntüsü değildir</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
