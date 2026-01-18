
import DivisionToggle from "@/components/division-toggle";
import TeamCard from "@/components/team-card";

const TEAMS = [
  { id:"isd", abbr:"ISD", name:"Indiana School for the Deaf", city:"Indianapolis", state:"IN" },
  { id:"msd", abbr:"MSD", name:"Maryland School for the Deaf", city:"Frederick", state:"MD" },
  { id:"tsd", abbr:"TSD", name:"Texas School for the Deaf", city:"Austin", state:"TX" },
  { id:"csd-f", abbr:"CSD-F", name:"California School for the Deaf - Fremont", city:"Fremont", state:"CA" },
  { id:"csd-r", abbr:"CSD-R", name:"California School for the Deaf - Riverside", city:"Riverside", state:"CA" },
  { id:"mssd", abbr:"MSSD", name:"Model Secondary School for the Deaf", city:"Washington", state:"DC" },
];

export default function TeamsPage() {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">HS Boys Basketball — Teams</h1>
        <DivisionToggle />
      </header>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {TEAMS.map(t => <TeamCard key={t.id} {...t} />)}
      </div>
    </section>
  );
}
