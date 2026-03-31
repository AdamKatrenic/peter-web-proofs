import { client } from "../../sanity/lib/client";
import { projektQuery } from "../../sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

type Projekt = {
  _id: string;
  nazov: string;
  popis?: string;
  datum?: string;
  titulnaFotka?: string;
  slug?: { current: string };
};

export default async function Projekty() {
  const projekty: Projekt[] = await client.fetch(projektQuery);

  return (
    <section
      id="projekty"
      className="py-20 md:py-36 px-6 md:px-20 bg-[#0f0f0f]"
    >
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-[#e8612a]" />
          <span className="font-[family-name:var(--font-oswald)] text-xs text-[#e8612a] uppercase tracking-[0.15em]">
            Naša práca
          </span>
        </div>
        <h2
          className="font-[family-name:var(--font-oswald)] font-bold text-[#f0ece4]"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Realizácie
        </h2>
      </div>

      {projekty.length === 0 ? (
        <p className="font-[family-name:var(--font-barlow)] text-[#8a8278] text-lg">
          Zatiaľ žiadne projekty. Pridajte ich cez Sanity Studio.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          {projekty.map((p, i) => (
            <Link
              key={p._id}
              href={`/projekty/${p.slug?.current}`}
              className="no-underline"
            >
              <div className="group bg-[#1a1a1a] cursor-pointer hover:bg-[#222] transition-colors duration-200 relative overflow-hidden h-full">
                {/* Fotka */}
                {p.titulnaFotka && (
                  <div className="w-full h-56 overflow-hidden relative">
                    <Image
                      src={p.titulnaFotka}
                      alt={p.nazov}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-8 md:p-10">
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#e8612a] group-hover:w-full transition-all duration-300" />
                  <div className="font-[family-name:var(--font-oswald)] text-xs text-[#e8612a] tracking-[0.12em] uppercase mb-3">
                    {String(i + 1).padStart(2, "0")}
                    {p.datum && ` — ${new Date(p.datum).getFullYear()}`}
                  </div>
                  <h3 className="font-[family-name:var(--font-oswald)] font-semibold text-[#f0ece4] text-xl md:text-2xl mb-2">
                    {p.nazov}
                  </h3>
                  {p.popis && (
                    <p className="font-[family-name:var(--font-barlow)] text-sm text-[#8a8278] leading-relaxed line-clamp-2">
                      {p.popis}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}