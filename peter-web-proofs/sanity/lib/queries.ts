import { groq } from 'next-sanity'

export const projektQuery = groq`
  *[_type == "projekt"] | order(datum desc) {
    _id,
    nazov,
    slug,
    popis,
    datum,
    "titulnaFotka": fotky[0].asset->url,
  }
`

export const projektDetailQuery = groq`
  *[_type == "projekt" && slug.current == $slug][0] {
    _id,
    nazov,
    popis,
    datum,
    "fotky": fotky[].asset->url,
  }
`

export const oNasQuery = groq`
  *[_type == "oNas"][0] {
    nadpis,
    rokovSkusenosti,
    pocetProjektov,
    "fotkaUrl": fotka.asset->url,
    text
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    nazovFirmy,
    telefon,
    email,
    heroText,
  }
`

export const heroQuery = groq`
  {
    "settings": *[_type == "siteSettings"][0] {
      heroText,
    },
    "oNas": *[_type == "oNas"][0] {
      rokovSkusenosti,
      pocetProjektov,
    }
  }
`
