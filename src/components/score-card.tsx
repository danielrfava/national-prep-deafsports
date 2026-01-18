
import Link from "next/link";

export default function ScoreCard(props: {
  id: string; homeTeam: string; awayTeam: string;
  homeScore?: number; awayScore?: number; date?: string; venue?: string;
}) {
  const { id, homeTeam, awayTeam, homeScore, awayScore, date, venue } = props;
  const status = homeScore != null && awayScore != null ? "Final" : "Scheduled";
  return (
    <article className="rounded-lg border border-border bg-surface p-4 shadow-card">
      <div className="flex items-center justify-between text-sm text-text-secondary">
        <span>{date ?? "TBD"}</span>
        <span>{venue ?? ""}</span>
      </div>
      <div className="mt-2 flex items-center justify-between text-lg">
        <div>{homeTeam}</div>
        <div className="font-semibold">{homeScore ?? "-"}</div>
      </div>
      <div className="mt-1 flex items-center justify-between text-lg">
        <div>{awayTeam}</div>
        <div className="font-semibold">{awayScore ?? "-"}</div>
      </div>
      <div className="mt-2 text-sm text-text-secondary">{status}</div>
      <div className="mt-2">
        <Link href={`#box-${id}`} className="text-accent">Box Score</Link>
      </div>
    </article>
  );
}
