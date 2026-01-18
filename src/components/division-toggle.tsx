
"use client";
import { useState } from "react";

export default function DivisionToggle({ defaultDiv = "DI" }: { defaultDiv?: "DI" | "DII" }) {
  const [div, setDiv] = useState<"DI" | "DII">(defaultDiv);
  return (
    <div className="inline-flex rounded-lg border border-border bg-surface">
      {(["DI", "DII"] as const).map((d) => (
        <button
          key={d}
          type="button"
          onClick={() => setDiv(d)}
          className={`px-3 py-1 text-sm ${div === d ? "bg-accent text-white" : "text-text-secondary"}`}
          aria-pressed={div === d}
        >
          Division {d === "DI" ? "I" : "II"}
        </button>
      ))}
    </div>
  );
}
