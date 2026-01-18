
"use client";
import { useState } from "react";

export default function Search() {
  const [q, setQ] = useState("");
  const onSubmit = (e: React.FormEvent) => e.preventDefault();
  return (
    <form role="search" aria-label="Global" onSubmit={onSubmit}>
      <label htmlFor="global-search" className="sr-only">Search players, teams, schools</label>
      <input
        id="global-search"
        value={q}
        onChange={(e)=>setQ(e.target.value)}
        placeholder="Search players, teams, schools…"
        className="w-72 rounded-lg border border-border bg-bg px-3 py-2 text-sm placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </form>
  );
}
