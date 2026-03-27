import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projekty from './components/Projekty'
import ONas from './components/ONas'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'
import { client } from '../sanity/lib/client'
import { siteSettingsQuery, heroQuery } from '../sanity/lib/queries'

type SiteSettings = {
  nazovFirmy?: string
  telefon?: string
  email?: string
  heroText?: string
}

type HeroData = {
  settings?: { heroText?: string }
  oNas?: { rokovSkusenosti?: number; pocetProjektov?: number }
}

export default async function Home() {
  const settings: SiteSettings = await client.fetch(siteSettingsQuery)
  const heroData: HeroData = await client.fetch(heroQuery)
  const nazovFirmy = settings?.nazovFirmy || 'PeterStrechy'

  return (
    <>
      <Navbar nazovFirmy={nazovFirmy} />
      <main>
        <Hero
          heroText={heroData?.settings?.heroText}
          rokovSkusenosti={heroData?.oNas?.rokovSkusenosti}
          pocetProjektov={heroData?.oNas?.pocetProjektov}
        />
        <Projekty />
        <ONas />
        <Kontakt />
      </main>
      <Footer nazovFirmy={nazovFirmy} />
    </>
  )
}