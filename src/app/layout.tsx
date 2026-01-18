
import "./../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/header";
import MobileNav from "@/components/mobile-nav";

export const metadata: Metadata = {
  title: "National Prep DeafSports",
  description: "HS-first Deaf/HoH sports archive and live platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg text-text-primary pb-14 md:pb-0">
        <Header />
        <div role="region" aria-label="Live Score Ticker" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-2 text-sm text-text-secondary">
            Live ticker: Clerc Classic week • DI games tonight
          </div>
        </div>
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        <MobileNav />
      </body>
    </html>
  );
}
