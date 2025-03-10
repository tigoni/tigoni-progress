import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
    schema: () =>
        z.object({
            pubDatetime: z.date(),
            modDatetime: z.date().optional().nullable(),
            series: z.string().optional(),
            readTime: z.string(),
            image: z.string(),
            title: z.string(),
            featured: z.boolean().optional(),
            draft: z.boolean().optional(),
            tags: z.array(z.string()).default(["others"]),
            category: z.string(),
            description: z.string(),
        }),
});

export const collections = { blog };
