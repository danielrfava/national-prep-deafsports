
import PlayerRow from "@/components/player-row";

export default function TeamProfilePage({ params }:{ params:{ id:string }}) {
  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-xl font-semibold">Team: {params.id.toUpperCase()}</h1>
        <p className="text-text-secondary">Record: 0-0 • City, ST</p>
      </header>
      <nav className="flex gap-4 text-sm">
        <button className="text-accent">Roster</button>
        <button className="text-text-secondary">Schedule</button>
        <button className="text-text-secondary">Stats</button>
        <button className="text-text-secondary">Rankings</button>
        <button className="text-text-secondary">Tournaments</button>
      </nav>
      <div className="rounded-lg border border-border">
        <PlayerRow name="Player One" number={3} position="G" classYear="Sr" />
        <PlayerRow name="Player Two" number={11} position="F" classYear="Jr" />
      </div>
    </section>
  );
}
