import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projekt',
  title: 'Projekty',
  type: 'document',
  fields: [
    defineField({
      name: 'nazov',
      title: 'Názov projektu',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'nazov' },
    }),
    defineField({
      name: 'popis',
      title: 'Popis',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'fotky',
      title: 'Fotky',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'datum',
      title: 'Dátum realizácie',
      type: 'date',
    }),
  ],
})