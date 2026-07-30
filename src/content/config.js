import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const featured = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().optional(),
    external: z.string().optional(),
    date: z.string(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().optional(),
    external: z.string().optional(),
    showInProjects: z.boolean().default(true),
    date: z.string(),
  }),
});

const jobs = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string().optional(),
    range: z.string(),
    url: z.string().optional(),
    date: z.string(),
  }),
});

export const collections = { blog, featured, projects, jobs };