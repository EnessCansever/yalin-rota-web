import { useEffect, useRef, useState } from 'react'
import fixoraScreenshot from '../assets/projects/fixora-analysis-result.png'
import jobfitScreenshot from '../assets/projects/jobfit-analysis-dashboard.png'

type Project = {
  id: string
  name: string
  type: string
  description: string
  features: string[]
  technologies: string[]
  liveUrl: string
  githubUrl: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
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
    image: fixoraScreenshot,
    imageAlt: 'Fixora analiz sonucu ekranı',
    imageWidth: 2552,
    imageHeight: 1342,
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
    image: jobfitScreenshot,
    imageAlt: 'JobFit TR ilan uyumluluk ve başvuru takip ekranı',
    imageWidth: 2546,
    imageHeight: 1352,
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!selectedProject) return

    const dialog = dialogRef.current
    if (!dialog) return

    const previousOverflow = document.body.style.overflow
    const trigger = triggerRef.current
    document.body.style.overflow = 'hidden'
    // Native modal arka sayfayı etkileşime kapatır ve odağı içeride tutar.
    dialog.showModal()
    closeButtonRef.current?.focus()

    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      trigger?.focus({ preventScroll: true })
    }
  }, [selectedProject])

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
            <article className="project-showcase" key={project.id} aria-labelledby={`${project.id}-title`}>
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
              <div className="project-visual">
                <button
                  className="project-screenshot-trigger"
                  type="button"
                  aria-label={`${project.name} ekran görüntüsünü büyüt`}
                  aria-haspopup="dialog"
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget
                    setSelectedProject(project)
                  }}
                >
                  <img
                    className="project-screenshot"
                    src={project.image}
                    alt={project.imageAlt}
                    width={project.imageWidth}
                    height={project.imageHeight}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="project-lightbox"
        aria-modal="true"
        aria-label={selectedProject?.imageAlt || 'Proje ekran görüntüsü'}
        onKeyDown={(event) => {
          // Modalın tek etkileşimli öğesi kapatma butonu; Tab odağı burada tutar.
          if (event.key === 'Tab') {
            event.preventDefault()
            closeButtonRef.current?.focus()
          }
        }}
        onCancel={(event) => {
          event.preventDefault()
          setSelectedProject(null)
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedProject(null)
        }}
      >
        <div className="project-lightbox-frame">
          <button
            ref={closeButtonRef}
            className="project-lightbox-close"
            type="button"
            aria-label="Görseli kapat"
            onClick={() => setSelectedProject(null)}
          >
            <span aria-hidden="true">×</span>
          </button>
          {selectedProject && (
            <img
              className="project-lightbox-image"
              src={selectedProject.image}
              alt={selectedProject.imageAlt}
              width={selectedProject.imageWidth}
              height={selectedProject.imageHeight}
            />
          )}
        </div>
      </dialog>
    </section>
  )
}
