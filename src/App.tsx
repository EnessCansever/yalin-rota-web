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
