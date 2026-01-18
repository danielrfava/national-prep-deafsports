
import DivisionToggle from "@/components/division-toggle";
import PlayerRow from "@/components/player-row";

export default function PlayersPage() {
  const players = [
    { name:"Player One", number:3, position:"G", classYear:"Sr" },
    { name:"Player Two", number:11, position:"F", classYear:"Jr" },
  ];
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">HS Boys Basketball — Players</h1>
        <DivisionToggle />
      </header>
      <div className="rounded-lg border border-border">
        {players.map((p,i)=>(<PlayerRow key={i} {...p} />))}
      </div>
    </section>
  );
}
