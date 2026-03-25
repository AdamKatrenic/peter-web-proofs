'use client'

export default function Projekty() {
  const projekty = [
    { id: 1, nazov: 'Rodinný dom Bratislava', typ: 'Šindeľová strecha', rok: '2024' },
    { id: 2, nazov: 'Bytový dom Trnava', typ: 'Plochá strecha', rok: '2024' },
    { id: 3, nazov: 'Chata Tatry', typ: 'Plechová strecha', rok: '2023' },
    { id: 4, nazov: 'Priemyselný objekt', typ: 'Trapézový plech', rok: '2023' },
    { id: 5, nazov: 'Vila Senec', typ: 'Bobrovka', rok: '2023' },
    { id: 6, nazov: 'Rekonštrukcia Nitra', typ: 'Oprava + izolácia', rok: '2022' },
  ]

  return (
    <section id="projekty" className="py-20 md:py-36 px-6 md:px-20 bg-[#0f0f0f]">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-[#e8612a]" />
          <span className="font-[family-name:var(--font-oswald)] text-xs text-[#e8612a] uppercase tracking-[0.15em]">
            Naša práca
          </span>
        </div>
        <h2 className="font-[family-name:var(--font-oswald)] font-bold text-[#f0ece4]"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          Realizácie
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
        {projekty.map((p, i) => (
          <div key={p.id}
            className="group bg-[#1a1a1a] p-10 md:p-12 cursor-pointer hover:bg-[#222] transition-colors duration-200 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#e8612a] group-hover:w-full transition-all duration-300" />
            <div className="font-[family-name:var(--font-oswald)] text-xs text-[#e8612a] tracking-[0.12em] uppercase mb-3">
              {String(i + 1).padStart(2, '0')} — {p.rok}
            </div>
            <h3 className="font-[family-name:var(--font-oswald)] font-semibold text-[#f0ece4] text-xl md:text-2xl mb-2">
              {p.nazov}
            </h3>
            <p className="font-[family-name:var(--font-barlow)] text-sm text-[#8a8278]">
              {p.typ}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}