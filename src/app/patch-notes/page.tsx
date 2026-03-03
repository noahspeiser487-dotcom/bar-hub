import Link from "next/link";
import { getPatchNotes } from "@/lib/content";

export default async function PatchNotesPage() {
  const items = (await getPatchNotes()).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return (
    <div className="space-y-6">
      <h1 className="h2">Patch Notes (Human Summary)</h1>
      <div className="space-y-3">
        {items.map((item) => (
          <Link key={item.slug} href={`/patch-notes/${item.slug}`} className="card block p-5">
            <p className="kicker">{item.version} Â· {item.publishedAt}</p>
            <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

