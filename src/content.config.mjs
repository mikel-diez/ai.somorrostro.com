// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
})

const asignaturas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/asignaturas' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    professor: z.string().optional(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
})

// 4. Export a single `collections` object to register you collection(s)
export const collections = { projects, asignaturas }
