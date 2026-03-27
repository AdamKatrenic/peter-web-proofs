'use client'

type FooterProps = {
  nazovFirmy: string
}

export default function Footer({ nazovFirmy }: FooterProps) {
  return (
    <footer className="bg-[#1a1a1a] border-t border-white/5 px-6 md:px-20 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-[family-name:var(--font-oswald)] text-xl font-bold uppercase tracking-wider text-[#f0ece4]">
        {nazovFirmy}
      </span>
      <p className="font-[family-name:var(--font-barlow)] text-xs text-[#8a8278]">
        © {new Date().getFullYear()} {nazovFirmy}. Všetky práva vyhradené.
      </p>
    </footer>
  )
}