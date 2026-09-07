import Header from './components/Header'
import Hero from './components/Hero'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">İçeriğe geç</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
      </main>
    </>
  )
}
