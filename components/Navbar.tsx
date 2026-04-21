"use client";

import { useState } from "react";

const links = [
  { label: "תפריט", href: "#menu" },
  { label: "גלריה", href: "#gallery" },
  { label: "שעות ומיקום", href: "#location" },
  { label: "צור קשר", href: "#footer" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#f4ecdf]/90 backdrop-blur-sm border-b border-[#1a1613]/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display text-2xl font-bold tracking-tight text-[#1a1613]">
          קפה <span className="text-[#8b5c2a]">31</span>
        </a>

        {/* ניווט דסקטופ */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#1a1613]/70 hover:text-[#1a1613] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* המבורגר מובייל */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="פתח תפריט"
        >
          <span className={`block w-6 h-0.5 bg-[#1a1613] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1613] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1a1613] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* תפריט מובייל */}
      {open && (
        <nav className="md:hidden bg-[#f4ecdf] border-t border-[#1a1613]/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-[#1a1613]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
