import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const buildOrderSchema = z.object({
  title: z.string(),
  slug: z.string(),
  faction: z.enum(["Armada", "Cortex"]),
  mapSize: z.enum(["Small", "Medium", "Large"]),
  style: z.enum(["Aggro", "Eco", "Balanced"]),
  summary: z.string(),
});

const mapGuideSchema = z.object({
  title: z.string(),
  slug: z.string(),
  tier: z.enum(["Beginner", "Intermediate", "Advanced"]),
  summary: z.string(),
});

const patchSchema = z.object({
  title: z.string(),
  slug: z.string(),
  version: z.string(),
  publishedAt: z.coerce.string(),
  summary: z.string(),
});

export type BuildOrder = z.infer<typeof buildOrderSchema> & { content: string };
export type MapGuide = z.infer<typeof mapGuideSchema> & { content: string };
export type PatchNote = z.infer<typeof patchSchema> & { content: string };

async function readCollection<T>(dir: string, schema: z.ZodSchema<T>): Promise<(T & { content: string })[]> {
  const base = path.join(process.cwd(), "content", dir);
  const files = await fs.readdir(base);
  const entries = await Promise.all(
    files.filter((f) => f.endsWith(".mdx")).map(async (file) => {
      const raw = await fs.readFile(path.join(base, file), "utf8");
      const { data, content } = matter(raw);
      return { ...schema.parse(data), content } as T & { content: string };
    }),
  );
  return entries;
}

export const getBuildOrders = () => readCollection("build-orders", buildOrderSchema);
export const getMapGuides = () => readCollection("map-guides", mapGuideSchema);
export const getPatchNotes = () => readCollection("patch-notes", patchSchema);

