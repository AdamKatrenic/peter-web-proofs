import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projekty from './components/Projekty'
import ONas from './components/ONas'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projekty />
        <ONas />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}