import type { SchemaTypeDefinition } from 'sanity'
import siteSettings from './siteSettings'
import projekt from './projekt'
import oNas from './oNas'

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  projekt,
  oNas,
]