import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'oNas',
  title: 'O nás',
  type: 'document',
  fields: [
    defineField({ name: 'nadpis', title: 'Nadpis', type: 'string' }),
    defineField({ name: 'text', title: 'Text o firme', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'fotka', title: 'Fotka tímu', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'rokovSkusenosti', title: 'Rokov skúseností', type: 'number' }),
    defineField({ name: 'pocetProjektov', title: 'Počet realizovaných projektov', type: 'number' }),
  ],
})