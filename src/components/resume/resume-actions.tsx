"use client";

import { ArrowUpRight, Download } from "lucide-react";
import { ctaClass } from "@/components/ui/primitives";

export function ResumeActions() {
  return (
    <div className="no-print flex flex-wrap items-center gap-5 font-mono text-sm">
      <button type="button" onClick={() => window.print()} className={ctaClass}>
        <Download className="h-4 w-4" />
        Download PDF
      </button>
      <a
        href="/resume"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-bone"
      >
        Open in new tab
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
