"use client";

import { useEffect, useState } from "react";

// שעות פתיחה לפי יום (0=ראשון ... 6=שבת). null = סגור
const hours: Record<number, [number, number] | null> = {
  0: null,
  1: null,
  2: [7, 19],
  3: [7, 19],
  4: [7, 19],
  5: [7, 14],
  6: null,
};

const dayNames = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];

const schedule: { day: number; label: string; time: string; closed: boolean }[] = [
  { day: 0, label: "ראשון", time: "סגור", closed: true },
  { day: 1, label: "שני", time: "סגור", closed: true },
  { day: 2, label: "שלישי", time: "07:00 — 19:00", closed: false },
  { day: 3, label: "רביעי", time: "07:00 — 19:00", closed: false },
  { day: 4, label: "חמישי", time: "07:00 — 19:00", closed: false },
  { day: 5, label: "שישי", time: "07:00 — 14:00", closed: false },
  { day: 6, label: "שבת", time: "סגור", closed: true },
];

export default function LocationHours() {
  // חישוב היום הנוכחי והסטטוס (פתוח/סגור) – בצד הלקוח בלבד
  const [today, setToday] = useState<number | null>(null);
  const [statusText, setStatusText] = useState("פתוח עכשיו");
  const [isClosedNow, setIsClosedNow] = useState(false);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hr = now.getHours() + now.getMinutes() / 60;
    setToday(day);

    const h = hours[day];
    if (h && hr >= h[0] && hr < h[1]) {
      setStatusText(`פתוח עכשיו · סוגרים ב־${String(h[1]).padStart(2, "0")}:00`);
      setIsClosedNow(false);
    } else {
      let next = day;
      for (let i = 1; i <= 7; i++) {
        const nd = (day + i) % 7;
        if (hours[nd]) {
          next = nd;
          break;
        }
      }
      setStatusText(`סגור · נפתח ביום ${dayNames[next]} ב־07:00`);
      setIsClosedNow(true);
    }
  }, []);

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#1a1613] text-[#f4ecdf] py-[110px]"
    >
      {/* אנימציית פעימה לנקודה הירוקה של "פתוח עכשיו" */}
      <style>{`
        @keyframes coffee31-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(198,225,165,.7); }
          70%  { box-shadow: 0 0 0 10px rgba(198,225,165,0); }
          100% { box-shadow: 0 0 0 0 rgba(198,225,165,0); }
        }
      `}</style>

      <div className="max-w-[1240px] mx-auto px-7">
        {/* מספר סקשן */}
        <div className="font-display text-[13px] tracking-[0.3em] text-[#b9743a] mb-3.5">
          — 04 · ביקור
        </div>

        {/* כותרת הסקשן */}
        <div className="flex justify-between items-end mb-[60px] gap-10 flex-wrap">
          <h2 className="font-display font-medium leading-none m-0 text-[clamp(38px,4.6vw,64px)] -tracking-[0.01em] text-[#f4ecdf]">
            שעות פתיחה
            <br />ו
            <em className="italic font-normal text-[#b9743a]">איך מגיעים</em>
          </h2>
          <p className="max-w-[360px] text-[15px] text-[#f4ecdf]/75 text-pretty m-0">
            אנחנו על דניאל 31, פינת הרחוב — עם כיסאות בחוץ, הצל של העץ, והחלון שפונה לרחוב.
          </p>
        </div>

        {/* רשת תוכן: שעות + מפה */}
        <div className="grid grid-cols-1 md:grid-cols-[.85fr_1.15fr] gap-12 items-stretch">
          {/* כרטיס שעות */}
          <div className="relative overflow-hidden bg-[#f4ecdf] text-[#1a1613] rounded-[22px] p-10 flex flex-col">
            {/* עיגול דקורטיבי בפינה */}
            <span
              aria-hidden="true"
              className="absolute -top-10 -left-10 w-[140px] h-[140px] border-[1.5px] border-[#1a1613] rounded-full opacity-10"
            />

            {/* פיל סטטוס */}
            <span
              className={`inline-flex items-center gap-2.5 self-start rounded-full px-4 py-2.5 mb-6 text-[13px] font-medium text-[#f4ecdf] ${
                isClosedNow ? "bg-[#c2432c]" : "bg-[#5a6147]"
              }`}
            >
              <span
                className="block w-2 h-2 rounded-full"
                style={{
                  background: isClosedNow ? "#f5c1b6" : "#c6e1a5",
                  animation: isClosedNow
                    ? undefined
                    : "coffee31-pulse 2s infinite",
                }}
              />
              <span>{statusText}</span>
            </span>

            <h3 className="font-display font-medium text-[32px] m-0 mb-6 -tracking-[0.005em]">
              השבוע אצלנו
            </h3>

            <ul className="list-none p-0 m-0 mb-7">
              {schedule.map((item, idx) => {
                const isToday = today === item.day;
                const isLast = idx === schedule.length - 1;

                if (isToday) {
                  return (
                    <li
                      key={item.day}
                      className="relative flex justify-between items-center py-3.5 px-3 -mx-3 rounded-[10px] bg-[#ece1cd] text-base"
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="font-display font-medium tabular-nums pl-[60px]">
                        {item.time}
                      </span>
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 rounded-full bg-[#5a6147] text-[#f4ecdf] text-[10px] px-2.5 py-[3px] tracking-[0.1em]">
                        עכשיו
                      </span>
                    </li>
                  );
                }

                return (
                  <li
                    key={item.day}
                    className={`flex justify-between items-center py-3.5 text-base ${
                      isLast ? "" : "border-b border-dotted border-[#1a1613]/20"
                    } ${item.closed ? "opacity-45" : ""}`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span
                      className={`font-display font-medium tabular-nums ${
                        item.closed ? "text-[#c2432c] italic" : ""
                      }`}
                    >
                      {item.time}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* כפתורים */}
            <div className="flex gap-2.5 mt-auto">
              <a
                href="tel:0544301100"
                className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-[#1a1613] text-[#f4ecdf] px-6 py-3.5 text-[15px] font-medium transition-all duration-200 hover:bg-[#3b2a1e] hover:-translate-y-px"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.34 1.78.64 2.62a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.46-1.21a2 2 0 012.11-.45c.84.3 1.72.52 2.62.64a2 2 0 011.72 2z" />
                </svg>
                054-430-1100
              </a>
              <a
                href="https://instagram.com/coffee31_batyam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="אינסטגרם"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-[#1a1613] bg-transparent text-[#1a1613] px-6 py-3.5 text-[15px] font-medium transition-colors duration-200 hover:bg-[#1a1613] hover:text-[#f4ecdf]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                </svg>
              </a>
            </div>
          </div>

          {/* כרטיס מפה */}
          <div className="relative overflow-hidden rounded-[22px] min-h-[440px] bg-[#1a1613] border border-[#f4ecdf]/10">
            <iframe
              title="מפת הגעה לקפה 31 — רחוב דניאל 31, בת ים"
              src="https://www.google.com/maps?q=%D7%93%D7%A0%D7%99%D7%90%D7%9C+31%2C+%D7%91%D7%AA+%D7%99%D7%9D&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />

            {/* כרטיס כתובת צף */}
            <div className="absolute left-6 right-6 bottom-6 flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-[#f4ecdf] text-[#1a1613] py-[22px] px-6">
              <div>
                <b className="font-display text-[20px] block">רחוב דניאל 31</b>
                <span className="text-sm opacity-70">בת ים · 5 דקות הליכה מהים</span>
              </div>
              <a
                href="https://maps.google.com/?q=%D7%93%D7%A0%D7%99%D7%90%D7%9C+31+%D7%91%D7%AA+%D7%99%D7%9D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1a1613] text-[#f4ecdf] px-4 py-2.5 text-[13px] font-medium transition-colors duration-200 hover:bg-[#3b2a1e]"
              >
                פתח במפות
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  width={14}
                  height={14}
                  aria-hidden="true"
                >
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
