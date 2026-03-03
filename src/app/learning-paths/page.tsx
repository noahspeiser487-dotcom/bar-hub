const paths = [
  { level: "Beginner", checklist: ["2 stabile Build Orders lernen", "Konstant Mex ausbauen", "Radar immer aktiv halten"] },
  { level: "Intermediate", checklist: ["Timing Pushes ab Minute 6-8", "Counter-Switches lesen", "Map-Control priorisieren"] },
  { level: "Advanced", checklist: ["Scout-Info in Eco-Entscheidungen Ã¼bersetzen", "Multi-Front Druck", "Replays mit klaren Fehlerlabels reviewen"] },
];

export default function LearningPathsPage() {
  return (
    <div className="space-y-6">
      <h1 className="h2">Learning Paths</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {paths.map((path) => (
          <section key={path.level} className="card p-5">
            <p className="kicker">{path.level}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {path.checklist.map((item) => (
                <li key={item} className="text-[var(--muted)]">â€¢ {item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}

