
"use client";
import Link from "next/link";
import Search from "./search";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface shadow-nav">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-semibold" aria-label="National Prep DeafSports Home">
          National Prep DeafSports
        </Link>
        <nav className="hidden flex-1 items-center gap-4 md:flex" aria-label="Primary">
          <Link href="/(hs-boys-basketball)/scores" className="hover:text-accent">Scores</Link>
          <Link href="/(hs-boys-basketball)/teams" className="hover:text-accent">Teams</Link>
          <Link href="/(hs-boys-basketball)/players" className="hover:text-accent">Players</Link>
          <Link href="/(hs-boys-basketball)/standings" className="hover:text-accent">Standings</Link>
          <Link href="/athletes" className="hover:text-accent">Athletes</Link>
          <Link href="/tournaments" className="hover:text-accent">Tournaments</Link>
        </nav>
        <div className="ml-auto hidden md:block">
          <Search />
        </div>
        <button className="md:hidden rounded-lg border border-border px-2 py-1" aria-label="Open Search">🔍</button>
      </div>
    </header>
  );
}
