// 1. Import utilities from `astro:content`
import { defineCollection, reference, z } from "astro:content";

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: defineCollection({
    type: "content", // v2.5.0 and later
    schema: z.object({
      title: z.string().max(60, { message: "Massimo 60 caratteri" }),
      description: z.string().max(250, { message: "Massimo 250 caratteri" }),
      date: z.date(),
      tags: z.array(z.string()),
      image: z.string(),
      author: reference("team"),
      relatedPosts: z.array(reference("posts")).optional(),
    }),
  }),
  team: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z.object({
        name: z.string(),
        bio: z.string(),
        email: z.string(),
        role: z.enum(["Software", "Design", "Marketing"]),
        headshot: image(),
      }),
  }),
};
