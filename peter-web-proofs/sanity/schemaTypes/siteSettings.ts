import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Nastavenia webu',
  type: 'document',
  fields: [
    defineField({ name: 'nazovFirmy', title: 'Názov firmy', type: 'string' }),
    defineField({ name: 'telefon', title: 'Telefón', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'heroText', title: 'Hero text (krátky popis)', type: 'text', rows: 3 }),
  ],
})