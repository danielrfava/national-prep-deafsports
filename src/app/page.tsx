
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">National Prep DeafSports</h1>
      <p className="text-text-secondary">Choose a section to begin:</p>
      <div className="flex flex-wrap gap-3">
        <Link className="rounded-lg border border-border bg-surface px-3 py-2" href="/(hs-boys-basketball)/scores">Scores</Link>
        <Link className="rounded-lg border border-border bg-surface px-3 py-2" href="/(hs-boys-basketball)/teams">Teams</Link>
        <Link className="rounded-lg border border-border bg-surface px-3 py-2" href="/(hs-boys-basketball)/players">Players</Link>
        <Link className="rounded-lg border border-border bg-surface px-3 py-2" href="/(hs-boys-basketball)/standings">Standings</Link>
        <Link className="rounded-lg border border-border bg-surface px-3 py-2" href="/athletes">Athletes</Link>
        <Link className="rounded-lg border border-border bg-surface px-3 py-2" href="/tournaments">Tournaments</Link>
      </div>
    </section>
  );
}
