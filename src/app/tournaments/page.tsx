
import Link from "next/link";

export default function TournamentsIndex() {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-semibold">Tournaments</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link href="/tournaments/clerc-classic" className="block rounded-lg border border-border bg-surface p-4 hover:border-accent">
          Clerc Classic — Basketball
        </Link>
        <Link href="/tournaments/willigan-classic" className="block rounded-lg border border-border bg-surface p-4 hover:border-accent">
          Willigan Classic — Wrestling
        </Link>
      </div>
    </section>
  );
}
