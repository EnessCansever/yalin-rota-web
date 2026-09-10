import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Projects from './components/Projects'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    if (!window.location.hash) return

    // Yeni document açılırken tarayıcı, React bölümleri oluşmadan hash'i arayabilir.
    const frame = window.requestAnimationFrame(() => {
      let targetId: string
      try {
        targetId = decodeURIComponent(window.location.hash.slice(1))
      } catch {
        return // Hatalı URL kodlaması sayfanın çalışmasını engellememeli.
      }

      const target = document.getElementById(targetId)
      if (!target) return

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'auto', block: 'start' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">İçeriğe geç</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
