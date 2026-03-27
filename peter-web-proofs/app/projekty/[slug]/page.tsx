import { client } from "../../../sanity/lib/client";
import { projektDetailQuery, projektQuery } from "../../../sanity/lib/queries";
import Galeria from "./Galeria";
import Link from "next/link";

type Projekt = {
  _id: string;
  nazov: string;
  popis?: string;
  datum?: string;
  fotky?: string[];
};

// Generovanie statických stránok pre každý projekt
export async function generateStaticParams() {
  const projekty = await client.fetch(projektQuery);
  return projekty.map((p: { slug: { current: string } }) => ({
    slug: p.slug.current,
  }));
}

export default async function ProjektDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projekt: Projekt = await client.fetch(projektDetailQuery, { slug });

  if (!projekt) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <p className="text-[#8a8278] font-[family-name:var(--font-barlow)]">
          Projekt nenájdený.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Header */}
      <div className="px-6 md:px-20 pt-32 pb-12 border-b border-white/5">
        <Link
          href="/#projekty"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-oswald)] text-xs text-[#8a8278] uppercase tracking-widest no-underline hover:text-[#e8612a] transition-colors mb-8"
        >
          ← Späť na realizácie
        </Link>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-[#e8612a]" />
          <span className="font-[family-name:var(--font-oswald)] text-xs text-[#e8612a] uppercase tracking-[0.15em]">
            Realizácia
          </span>
        </div>

        <h1
          className="font-[family-name:var(--font-oswald)] font-bold text-[#f0ece4] mb-4"
          style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
        >
          {projekt.nazov}
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
          {projekt.popis && (
            <p className="font-[family-name:var(--font-barlow)] font-light text-[#8a8278] max-w-2xl leading-relaxed">
              {projekt.popis}
            </p>
          )}
          {projekt.datum && (
            <span className="font-[family-name:var(--font-oswald)] text-sm text-[#e8612a] uppercase tracking-widest shrink-0">
              {new Date(projekt.datum).getFullYear()}
            </span>
          )}
        </div>
      </div>

      {/* Fotogaléria */}
      <div className="px-6 md:px-20 py-16">
        {projekt.fotky && projekt.fotky.length > 0 ? (
          <Galeria fotky={projekt.fotky} nazov={projekt.nazov} />
        ) : (
          <p className="text-[#8a8278] font-[family-name:var(--font-barlow)]">
            Žiadne fotky.
          </p>
        )}
      </div>
    </div>
  );
}
