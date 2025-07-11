import { type SchemaTypeDefinition } from 'sanity'
import cake from './cake'
import { category } from './category'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cake,category],
}

