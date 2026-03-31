'use client'

import Image from 'next/image'
import { useState } from 'react'

type GaleriaProps = {
  fotky: string[]
  nazov: string
}

export default function Galeria({ fotky, nazov }: GaleriaProps) {
  const [aktualnaFotka, setAktualnaFotka] = useState<string | null>(null)
  const [aktualnyIndex, setAktualnyIndex] = useState<number>(0)

  const otvorFotku = (url: string, index: number) => {
    setAktualnaFotka(url)
    setAktualnyIndex(index)
  }

  const zavriFotku = () => setAktualnaFotka(null)

  const predosla = () => {
    const newIndex = (aktualnyIndex - 1 + fotky.length) % fotky.length
    setAktualnyIndex(newIndex)
    setAktualnaFotka(fotky[newIndex])
  }

  const dalsia = () => {
    const newIndex = (aktualnyIndex + 1) % fotky.length
    setAktualnyIndex(newIndex)
    setAktualnaFotka(fotky[newIndex])
  }

  return (
    <>
      {/* Grid fotiek */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
        {fotky.map((url, i) => (
          <div
            key={i}
            className="relative w-full h-72 md:h-80 overflow-hidden group cursor-zoom-in"
            onClick={() => otvorFotku(url, i)}
          >
            <Image
              src={url}
              alt={`${nazov} — fotka ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay na hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-[family-name:var(--font-oswald)] text-sm uppercase tracking-widest">
                Zobraziť
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {aktualnaFotka && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={zavriFotku}
        >
          {/* Zavrieť */}
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white font-[family-name:var(--font-oswald)] text-sm uppercase tracking-widest transition-colors z-10"
            onClick={zavriFotku}
          >
            ✕ Zavrieť
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 font-[family-name:var(--font-oswald)] text-xs text-[#e8612a] uppercase tracking-widest">
            {aktualnyIndex + 1} / {fotky.length}
          </div>

          {/* Predošlá */}
          {fotky.length > 1 && (
            <button
              className="absolute left-4 md:left-8 text-white/60 hover:text-[#e8612a] transition-colors z-10 text-3xl p-4"
              onClick={(e) => { e.stopPropagation(); predosla() }}
            >
              ←
            </button>
          )}

          {/* Fotka */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={aktualnaFotka}
              alt={nazov}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Ďalšia */}
          {fotky.length > 1 && (
            <button
              className="absolute right-4 md:right-8 text-white/60 hover:text-[#e8612a] transition-colors z-10 text-3xl p-4"
              onClick={(e) => { e.stopPropagation(); dalsia() }}
            >
              →
            </button>
          )}
        </div>
      )}
    </>
  )
}