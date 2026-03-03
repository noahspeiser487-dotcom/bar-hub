import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bar-hub.vercel.app";
  const routes = ["", "/build-orders", "/map-guides", "/unit-counter", "/learning-paths", "/patch-notes", "/resources"];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}

