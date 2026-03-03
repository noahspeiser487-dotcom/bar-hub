"use client";

import { useMemo, useState } from "react";

const rows = [
  { attacker: "Light Bots", counter: "Riot Bots", note: "Riot splash clears swarm quickly." },
  { attacker: "Gunships", counter: "Mobile AA", note: "Mix in radar to avoid surprise dives." },
  { attacker: "Heavy Tanks", counter: "Bombers", note: "Punish slow pushes with timed air runs." },
  { attacker: "Artillery", counter: "Fast Raiders", note: "Flank and kill production behind front." },
  { attacker: "Subs", counter: "Sonar + Torpedo", note: "Vision wins naval engagements." },
];

export default function UnitCounterPage() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => rows.filter((r) => `${r.attacker} ${r.counter} ${r.note}`.toLowerCase().includes(q.toLowerCase())), [q]);

  return (
    <div className="space-y-5">
      <h1 className="h2">Unit Counter Matrix</h1>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Suche nach Unit oder Counter..."
        className="w-full rounded-xl border bg-transparent px-4 py-2 outline-none ring-[var(--accent)] focus:ring-2"
      />
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-left text-[var(--muted)]">
            <tr>
              <th className="px-4 py-3">Threat</th>
              <th className="px-4 py-3">Best Counter</th>
              <th className="px-4 py-3">Praktischer Tipp</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.attacker} className="border-t border-white/10">
                <td className="px-4 py-3">{r.attacker}</td>
                <td className="px-4 py-3">{r.counter}</td>
                <td className="px-4 py-3 text-[var(--muted)]">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

