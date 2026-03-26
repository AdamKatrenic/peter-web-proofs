'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0f0f0f]">
      {/* Background grid pattern */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(232,97,42,0.03) 80px, rgba(232,97,42,0.03) 81px)`,
        }}
      />

      {/* Big background text */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-2 font-[family-name:var(--font-oswald)] font-bold uppercase text-white/[0.025] select-none whitespace-nowrap leading-none"
        style={{ fontSize: 'clamp(120px, 22vw, 320px)' }}>
        STRECHA
      </div>

      {/* Orange diagonal line */}
      <div className="absolute top-0 right-1/4 w-px h-full opacity-40 -skew-x-[8deg]"
        style={{ background: 'linear-gradient(to bottom, transparent, #e8612a, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 pt-32 pb-10 md:pb-24 max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-[#e8612a]" />
          <span className="font-[family-name:var(--font-oswald)] text-xs font-medium text-[#e8612a] uppercase tracking-[0.15em]">
            Profesionálne strechárske práce
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-oswald)] font-bold leading-[0.95] mb-8 text-[#f0ece4]"
          style={{ fontSize: 'clamp(52px, 9vw, 120px)' }}>
          Vaša strecha<br />
          <span className="text-[#e8612a]">v dobrých</span><br />
          rukách
        </h1>

        <p className="font-[family-name:var(--font-barlow)] font-light text-[#8a8278] max-w-md leading-relaxed mb-10"
          style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>
          Realizujeme nové strechy, opravy aj rekonštrukcie.
          Kvalitné materiály, skúsení remeselníci, férové ceny.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-0">
          <a href="#projekty"
            className="bg-[#e8612a] text-white font-[family-name:var(--font-oswald)] font-semibold text-base uppercase tracking-wider px-10 py-4 no-underline hover:opacity-85 transition-opacity text-center">
            Naše realizácie
          </a>
          <a href="#kontakt"
            className="border border-[#f0ece4]/20 text-[#f0ece4] font-[family-name:var(--font-oswald)] font-medium text-base uppercase tracking-wider px-10 py-4 no-underline hover:border-[#e8612a] transition-colors text-center">
            Kontaktovať
          </a>
        </div>

        {/* Stats — mobile (súčasť flow, nie absolute) */}
        <div className="flex gap-10 md:hidden pt-2 pb-6">
          {[
            { num: '15+', label: 'Rokov skúseností' },
            { num: '300+', label: 'Realizácií' },
          ].map(stat => (
            <div key={stat.num}>
              <div className="font-[family-name:var(--font-oswald)] font-bold text-[#e8612a] text-4xl leading-none">
                {stat.num}
              </div>
              <div className="font-[family-name:var(--font-barlow)] text-xs text-[#8a8278] uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats — desktop (absolute vpravo dole) */}
      <div className="hidden md:flex absolute bottom-20 right-20 gap-12 z-10">
        {[
          { num: '15+', label: 'Rokov skúseností' },
          { num: '300+', label: 'Realizácií' },
        ].map(stat => (
          <div key={stat.num} className="text-right">
            <div className="font-[family-name:var(--font-oswald)] font-bold text-[#e8612a] leading-none"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
              {stat.num}
            </div>
            <div className="font-[family-name:var(--font-barlow)] text-xs text-[#8a8278] uppercase tracking-widest mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}