
import DivisionToggle from "@/components/division-toggle";
import StandingsTable from "@/components/standings-table";

export default function StandingsPage() {
  const rows = [
    { teamId:"msd", wins:12, losses:2, pct:0.857, pf:988, pa:842, rating:null, sos:null },
    { teamId:"tsd", wins:10, losses:3, pct:0.769, pf:910, pa:800, rating:null, sos:null },
  ];
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">HS Boys Basketball — Standings</h1>
        <DivisionToggle />
      </header>
      <StandingsTable rows={rows} />
    </section>
  );
}
