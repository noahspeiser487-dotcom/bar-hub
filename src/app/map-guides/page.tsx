import Link from "next/link";
import { getMapGuides } from "@/lib/content";

export default async function MapGuidesPage() {
  const items = await getMapGuides();
  return (
    <div className="space-y-6">
      <h1 className="h2">Map Guides</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link key={item.slug} href={`/map-guides/${item.slug}`} className="card p-5">
            <p className="kicker">{item.tier}</p>
            <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

