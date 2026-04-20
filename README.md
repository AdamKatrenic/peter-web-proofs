
# Proofs — Strechárska firma

Firemný web pre strechársku spoločnosť Proofs. Klient spravuje obsah webu (referencie, služby, kontakty) samostatne cez CMS administráciu bez zásahu do kódu.

 **Live:** [proofs.sk](https://www.proofs.sk)

---

## Tech stack

| Technológia | Použitie |
|---|---|
| Next.js 16 (App Router) | Frontend framework |
| TypeScript | Typová bezpečnosť |
| Tailwind CSS v4 | Štýlovanie |
| Sanity CMS | Správa obsahu |
| Vercel | Hosting a deploy |

---

## Čo projekt rieši

- Klient nepotrebuje programátora na úpravu obsahu — všetko edituje cez Sanity Studio
- Automatický redeploy po každej zmene obsahu v CMS
- Optimalizácia obrázkov cez Sanity Image URL a Next.js Image

---

## Lokálne spustenie

\`\`\`bash
git clone https://github.com/AdamKatrenic/peter-web-proofs
cd peter-web-proofs
npm install
\`\`\`

Skopíruj \`.env.example\` ako \`.env.local\` a doplň Sanity projekt ID a dataset:

\`\`\`bash
cp .env.example .env.local
\`\`\`

\`\`\`bash
npm run dev
\`\`\`

Web beží na [http://localhost:3000](http://localhost:3000)

### Sanity Studio (CMS)

\`\`\`bash
cd studio
npm install
npm run dev
\`\`\`

---

## Autor

Adam Katrenic — [github.com/AdamKatrenic](https://github.com/AdamKatrenic)
