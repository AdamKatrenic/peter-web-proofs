import { client } from '../../sanity/lib/client'
import { oNasQuery } from '../../sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import type { PortableTextBlock } from '@portabletext/react'

type ONasData = {
  nadpis?: string
  rokovSkusenosti?: number
  pocetProjektov?: number
  fotkaUrl?: string
  text?: PortableTextBlock[]
}

export default async function ONas() {
  const data: ONasData = await client.fetch(oNasQuery)

  const stats = [
    { num: data?.rokovSkusenosti ? `${data.rokovSkusenosti}+` : '15+', label: 'Rokov na trhu' },
    { num: data?.pocetProjektov ? `${data.pocetProjektov}+` : '300+', label: 'Dokončených striech' },
    { num: '100%', label: 'Spokojných klientov' },
    { num: '5★', label: 'Hodnotenie zákazníkov' },
  ]

  return (
    <section id="o-nas" className="py-20 md:py-36 px-6 md:px-20 bg-[#1a1a1a] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-[#e8612a]" />
          <span className="font-[family-name:var(--font-oswald)] text-xs text-[#e8612a] uppercase tracking-[0.15em]">
            O nás
          </span>
        </div>

        <h2 className="font-[family-name:var(--font-oswald)] font-bold leading-[1.1] mb-6 text-[#f0ece4]"
          style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
          {data?.nadpis || (
            <>Remeslo, ktoré<br /><span className="text-[#e8612a]">hovorí za seba</span></>
          )}
        </h2>

        {data?.text ? (
          <div className="font-[family-name:var(--font-barlow)] font-light text-[#8a8278] leading-relaxed prose prose-invert">
            <PortableText value={data.text} />
          </div>
        ) : (
          <>
            <p className="font-[family-name:var(--font-barlow)] font-light text-[#8a8278] leading-relaxed mb-4">
              Sme rodinná firma s viac ako 15 rokmi skúseností v strechárskom remesle.
              Každý projekt berieme ako vlastný dom — s rovnakou starostlivosťou,
              precíznosťou a zodpovednosťou.
            </p>
            <p className="font-[family-name:var(--font-barlow)] font-light text-[#8a8278] leading-relaxed">
              Pracujeme s overenými materiálmi od európskych výrobcov a na každú
              realizáciu poskytujeme záručný list.
            </p>
          </>
        )}

        {/* Fotka ak je nahraná */}
        {data?.fotkaUrl && (
          <div className="relative w-full h-64 mt-8 overflow-hidden">
            <Image
              src={data.fotkaUrl}
              alt="O nás"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-px">
        {stats.map(stat => (
          <div key={stat.label} className="bg-[#0f0f0f] p-8 md:p-10">
            <div className="font-[family-name:var(--font-oswald)] font-bold text-[#e8612a] leading-none mb-2"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
              {stat.num}
            </div>
            <div className="font-[family-name:var(--font-barlow)] text-xs text-[#8a8278] uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}