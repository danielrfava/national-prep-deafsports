
import DivisionToggle from "@/components/division-toggle";
import ScoreCard from "@/components/score-card";

export default async function ScoresPage() {
  const games = [
    { id:"isd-msd-20260115", homeTeam:"ISD", awayTeam:"MSD", homeScore:58, awayScore:62, date:"Jan 15, 2026", venue:"ISD Gym" },
  ];
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">HS Boys Basketball — Scores</h1>
        <DivisionToggle />
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {games.map(g => <ScoreCard key={g.id} {...g} />)}
      </div>
    </section>
  );
}
