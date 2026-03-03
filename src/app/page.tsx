import Link from "next/link";

const categories = [
  { title: "Build Orders", href: "/build-orders", desc: "Eroeffnungen nach Fraktion, Map-Groesse und Spielstil.", tag: "Basics", thumb: "⚙️" },
  { title: "Map Guides", href: "/map-guides", desc: "Early-Game Plaene, Expansion und typische Fehler.", tag: "Tactics", thumb: "🗺️" },
  { title: "Unit Counter", href: "/unit-counter", desc: "Interaktive Counter-Matrix fuer schnelle Entscheidungen.", tag: "Combat", thumb: "🎯" },
  { title: "Learning Paths", href: "/learning-paths", desc: "Von Anfaenger bis Advanced mit klaren Checklisten.", tag: "Training", thumb: "📈" },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="hero">
        <p className="kicker">Beyond All Reason · Tactical Resource Center</p>
        <h1 className="h1 mt-3 max-w-3xl">Guides & Tactics fuer bessere Entscheidungen im Match.</h1>
        <p className="mt-4 max-w-2xl text-[var(--foreground)]/85">
          BAR Hub fuehlt sich wie ein Teil vom Game UI an: klar, taktisch, fokussiert. Hier findest du lange und verstaendliche Guides statt kurzer Stichwoerter.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/map-guides" className="btn-primary glow-hover">Zu den Guides</Link>
          <Link href="/resources" className="btn-secondary glow-hover">Community Links</Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {categories.map((c) => (
          <Link key={c.title} href={c.href} className="card glow-hover p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-2xl">{c.thumb}</span>
              <span className="rounded-full border border-[var(--green)]/50 px-2 py-0.5 text-xs text-[var(--green)]">{c.tag}</span>
            </div>
            <h2 className="text-xl font-bold text-[var(--cyan)]">{c.title}</h2>
            <p className="mt-2 text-sm text-[var(--foreground)]/85">{c.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
