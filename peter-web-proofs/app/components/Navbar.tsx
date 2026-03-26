'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Realizácie', href: '#projekty' },
    { label: 'O nás', href: '#o-nas' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
      scrolled
        ? 'py-3 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#e8612a]/20'
        : 'py-6 bg-transparent'
    }`}>
      <Link href="/" className="no-underline">
        <span className="font-[family-name:var(--font-oswald)] text-2xl font-bold uppercase tracking-wider text-[#f0ece4]">
          Peter<span className="text-[#e8612a]">Strechy</span>
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-10">
        {links.map(link => (
          <a key={link.href} href={link.href}
            className="font-[family-name:var(--font-oswald)] text-sm font-medium text-[#8a8278] uppercase tracking-widest no-underline hover:text-[#e8612a] transition-colors duration-200">
            {link.label}
          </a>
        ))}
      </nav>

      <a href="tel:+421900000000"
        className="hidden md:block bg-[#e8612a] text-white font-[family-name:var(--font-oswald)] font-semibold text-sm uppercase tracking-wider px-6 py-3 no-underline hover:opacity-85 transition-opacity duration-200">
        Zavolať
      </a>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
      >
        <span className={`block w-6 h-0.5 bg-[#f0ece4] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#f0ece4] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-[#f0ece4] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0f0f0f]/98 border-b border-[#e8612a]/20 flex flex-col p-6 gap-6 md:hidden">
          {links.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-oswald)] text-lg font-medium text-[#f0ece4] uppercase tracking-widest no-underline hover:text-[#e8612a] transition-colors">
              {link.label}
            </a>
          ))}
          <a href="tel:+421900000000"
            className="bg-[#e8612a] text-white font-[family-name:var(--font-oswald)] font-semibold text-sm uppercase tracking-wider px-6 py-3 text-center no-underline">
            Zavolať
          </a>
        </div>
      )}
    </header>
  )
}