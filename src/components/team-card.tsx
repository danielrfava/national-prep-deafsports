
import Link from "next/link";

export default function TeamCard({ id, abbr, name, city, state }:{
  id: string; abbr: string; name: string; city: string; state: string;
}) {
  return (
    <Link href={`/(hs-boys-basketball)/team/${id}`} className="block rounded-lg border border-border bg-surface p-4 shadow-card hover:border-accent">
      <div className="text-sm text-text-secondary">{abbr}</div>
      <div className="text-base font-semibold">{name}</div>
      <div className="text-sm text-text-secondary">{city}, {state}</div>
    </Link>
  );
}
