
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/(hs-boys-basketball)/scores", label: "Scores" },
  { href: "/(hs-boys-basketball)/teams", label: "Teams" },
  { href: "/(hs-boys-basketball)/standings", label: "Standings" },
  { href: "/(hs-boys-basketball)/players", label: "Players" },
  { href: "/tournaments", label: "More" },
];

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface md:hidden" aria-label="Mobile">
      <ul className="mx-auto flex max-w-6xl items-center justify-between px-2 py-2">
        {tabs.map((t) => {
          const active = pathname.startsWith(t.href);
          return (
            <li key={t.href}>
              <Link
                href={t.href}
                className={`px-3 py-2 text-sm ${active ? "text-accent" : "text-text-secondary"}`}
                aria-current={active ? "page" : undefined}
              >
                {t.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
