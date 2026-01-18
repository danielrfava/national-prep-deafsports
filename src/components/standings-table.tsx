
type Row = { teamId:string; wins:number; losses:number; pct:number; pf:number; pa:number; rating?:number|null; sos?:number|null }
export default function StandingsTable({ rows }:{ rows: Row[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead className="text-left text-text-secondary">
          <tr>
            <th className="border-b border-border p-2">Team</th>
            <th className="border-b border-border p-2">W</th>
            <th className="border-b border-border p-2">L</th>
            <th className="border-b border-border p-2">PCT</th>
            <th className="border-b border-border p-2">PF</th>
            <th className="border-b border-border p-2">PA</th>
            <th className="border-b border-border p-2">SOS</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.teamId} className="odd:bg-[#151617]">
              <td className="border-b border-border p-2">{r.teamId.toUpperCase()}</td>
              <td className="border-b border-border p-2">{r.wins}</td>
              <td className="border-b border-border p-2">{r.losses}</td>
              <td className="border-b border-border p-2">{r.pct.toFixed(3)}</td>
              <td className="border-b border-border p-2">{r.pf}</td>
              <td className="border-b border-border p-2">{r.pa}</td>
              <td className="border-b border-border p-2">{r.sos ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
