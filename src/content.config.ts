import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const team = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
    bio: z.string().optional(),
    link: z.string().optional()
  })
});

const advisor = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/advisors" }),
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    image: z.string(),
    bio: z.string().optional(),
    link: z.string().optional()
  })
});

const resource = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    url: z.string(),
    date: z.string(),
    image: z.string()
  })
});

export const collections = {
  team,
  advisors: advisor,
  resources: resource
};
