import Link from "next/link";

const categories = [
  { title: "Build Orders", href: "/build-orders", desc: "Eröffnungen nach Fraktion, Map-Grösse und Spielstil." },
  { title: "Map Guides", href: "/map-guides", desc: "Early-Game Pläne, Expansion und typische Fehler." },
  { title: "Unit Counter", href: "/unit-counter", desc: "Interaktive Counter-Matrix für schnelle Entscheidungen." },
  { title: "Learning Paths", href: "/learning-paths", desc: "Von Anfänger bis Advanced mit klaren Checklisten." },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <p className="kicker">Beyond All Reason Resource Center</p>
        <h1 className="h1 max-w-3xl">Gewinne mehr Spiele mit klaren Builds, besseren Entscheidungen und sauberem Map-Play.</h1>
        <p className="max-w-2xl text-[var(--muted)]">BAR Hub bündelt die wichtigsten Ressourcen in einem modernen, schnellen Knowledge Center – gratis, übersichtlich und direkt praktisch.</p>
        <div className="flex gap-3">
          <Link href="/build-orders" className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-medium text-slate-900">Start here</Link>
          <Link href="/resources" className="rounded-xl border px-4 py-2 text-sm">Community Links</Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {categories.map((c) => (
          <Link key={c.title} href={c.href} className="card p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]/60">
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">{c.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

