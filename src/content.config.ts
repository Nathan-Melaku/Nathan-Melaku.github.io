import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional()
  })
})

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.coerce.date(),
    endDate: z.union([z.coerce.date(), z.string()])
  })
})

const project = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  })
})

export const collections = { blog, work, project };
