import { client } from '../../sanity/lib/client'
import { siteSettingsQuery } from '../../sanity/lib/queries'

type SiteSettings = {
  nazovFirmy?: string
  telefon?: string
  email?: string
}

export default async function Kontakt() {
  const data: SiteSettings = await client.fetch(siteSettingsQuery)

  const telefon = data?.telefon || '+421 900 000 000'
  const email = data?.email || 'info@peterstrechy.sk'

  return (
    <section id="kontakt" className="py-20 md:py-36 px-6 md:px-20 bg-[#0f0f0f]">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-12 h-px bg-[#e8612a]" />
          <span className="font-[family-name:var(--font-oswald)] text-xs text-[#e8612a] uppercase tracking-[0.15em]">
            Kontakt
          </span>
          <div className="w-12 h-px bg-[#e8612a]" />
        </div>

        <h2 className="font-[family-name:var(--font-oswald)] font-bold text-[#f0ece4] mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          Spojte sa s nami
        </h2>

        <p className="font-[family-name:var(--font-barlow)] font-light text-[#8a8278] leading-relaxed mb-16">
          Radi vám pripravíme nezáväznú cenovú ponuku.<br />
          Zavolajte alebo napíšte — odpovieme do 24 hodín.
        </p>

        <div className="flex flex-col sm:flex-row gap-px justify-center">
          <a href={`tel:${telefon.replace(/\s/g, '')}`}
            className="bg-[#e8612a] text-white font-[family-name:var(--font-oswald)] font-semibold text-lg uppercase tracking-wider px-10 py-6 no-underline hover:opacity-85 transition-opacity flex items-center justify-center gap-3">
            📞 {telefon}
          </a>
          <a href={`mailto:${email}`}
            className="bg-[#1a1a1a] text-[#f0ece4] font-[family-name:var(--font-oswald)] font-medium text-lg uppercase tracking-wider px-10 py-6 no-underline hover:bg-[#222] transition-colors flex items-center justify-center gap-3">
            ✉ {email}
          </a>
        </div>
      </div>
    </section>
  )
}