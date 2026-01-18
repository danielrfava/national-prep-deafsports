
export default function PlayerRow({ name, number, position, classYear }:{
  name: string; number?: number; position?: string; classYear?: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-border px-2 py-2">
      <div className="flex items-center gap-3">
        <span className="w-8 text-text-secondary">{number ?? ""}</span>
        <span className="font-medium">{name}</span>
      </div>
      <div className="text-sm text-text-secondary">{position ?? ""} {classYear ? `• ${classYear}` : ""}</div>
    </div>
  );
}
