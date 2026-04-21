const BeanSvg = () => (
  <svg width="100%" height="100%" viewBox="0 0 40 56" aria-hidden="true">
    <ellipse cx="20" cy="28" rx="17" ry="25" fill="#3b2a1e" />
    <path d="M20 6 Q 14 28 20 50" stroke="#1a1613" strokeWidth="1.5" fill="none" />
  </svg>
);

export default function Hero() {
  return (
    <>
      {/* ====== HERO ====== */}
      <header
        id="hero"
        className="relative py-[48px] pb-[60px] overflow-hidden bg-[#f4ecdf]"
      >
        {/* גרגרי קפה מקשטים */}
        <div
          className="absolute pointer-events-none opacity-50"
          style={{ top: 80, left: "44%", width: 22, transform: "rotate(24deg)" }}
        >
          <BeanSvg />
        </div>
        <div
          className="absolute pointer-events-none opacity-50"
          style={{ bottom: 160, left: "46%", width: 16, transform: "rotate(-30deg)" }}
        >
          <BeanSvg />
        </div>
        <div
          className="absolute pointer-events-none opacity-50"
          style={{ top: 260, right: "4%", width: 18, transform: "rotate(50deg)" }}
        >
          <BeanSvg />
        </div>

        {/* גריד ראשי */}
        <div
          className="max-w-[1240px] mx-auto px-7 grid items-center gap-[50px]"
          style={{ gridTemplateColumns: "1.05fr 0.95fr" }}
        >
          {/* עמודה שמאל — תוכן */}
          <div>
            {/* eyebrow */}
            <div className="inline-flex items-center gap-[10px] text-[13px] tracking-[0.16em] font-medium text-[#8b4f23] mb-[22px]">
              <span className="block w-[38px] h-[1.2px] bg-current" />
              רחוב דניאל 31, בת ים
            </div>

            {/* כותרת ראשית */}
            <h1
              className="font-serif font-medium leading-[0.95] tracking-[-0.015em] text-[#1a1613] mb-[26px]"
              style={{ fontSize: "clamp(52px, 7.4vw, 110px)" }}
            >
              בית קפה{" "}
              <span className="italic text-[#8b4f23] font-normal">שכונתי</span>
              <br />
              מלא ב
              <span
                className="inline-block border-2 border-[#1a1613] mx-[4px]"
                style={{ padding: "0 18px 6px 18px", transform: "rotate(-1.5deg)" }}
              >
                גוד ווייבס
              </span>{" "}
              ✦
            </h1>

            {/* תיאור */}
            <p
              className="text-[18px] max-w-[480px] text-[#2a231d] opacity-[0.82] mb-[32px] leading-relaxed"
            >
              ריח של אספרסו טרי, מאפים חמים מהתנור, ואנשים שכבר הפכו לשכנים.
              קפה 31 הוא הפינה השקטה של דניאל — מקום שאליו חוזרים, גם רק בשביל החיוך.
            </p>

            {/* כפתורים */}
            <div className="flex flex-wrap gap-[14px] items-center">
              <a
                href="#menu"
                className="inline-flex items-center gap-[10px] px-6 py-[14px] rounded-full text-[15px] font-medium bg-[#1a1613] text-[#f4ecdf] transition-all duration-200 hover:bg-[#3b2a1e] hover:-translate-y-px"
              >
                לצפות בתפריט
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-[10px] px-6 py-[14px] rounded-full text-[15px] font-medium bg-transparent text-[#1a1613] border-[1.5px] border-[#1a1613] transition-all duration-200 hover:bg-[#1a1613] hover:text-[#f4ecdf]"
              >
                איך מגיעים
              </a>
            </div>

            {/* מטא — שעות ואינסטגרם */}
            <div className="flex gap-[34px] mt-[44px] pt-[30px] border-t border-dashed border-[rgba(26,22,19,0.14)] text-[13px] flex-wrap">
              <div>
                <b className="block font-bold text-[15px] mb-[3px]">07:00 — 19:00</b>
                <span className="opacity-70">ג׳ עד ה׳</span>
              </div>
              <div>
                <b className="block font-bold text-[15px] mb-[3px]">07:00 — 14:00</b>
                <span className="opacity-70">שישי</span>
              </div>
              <div>
                <b className="block font-bold text-[15px] mb-[3px]">@coffee31_batyam</b>
                <span className="opacity-70">עקבו באינסטגרם</span>
              </div>
            </div>
          </div>

          {/* עמודה ימין — תמונה */}
          <div className="relative" style={{ aspectRatio: "4/5", maxHeight: 640 }}>
            {/* placeholder — להחליף בתמונה אמיתית */}
            <div
              className="absolute inset-0 bg-[#3b2a1e]"
              style={{ borderRadius: "240px 240px 12px 12px" }}
              role="img"
              aria-label="כוס קפה עם חותמת 31"
            />

            {/* תג צף 1 — לאטה */}
            <div
              className="absolute bg-[#faf5ea] border border-[rgba(26,22,19,0.14)] rounded-[14px] p-[14px_18px] text-[13px] shadow-[0_12px_30px_-10px_rgba(59,42,30,0.25)] flex items-center gap-[12px]"
              style={{ top: 30, right: -20, transform: "rotate(3deg)" }}
            >
              <div className="w-9 h-9 rounded-[10px] bg-[#b9743a] text-white flex items-center justify-center text-[18px]">
                ✦
              </div>
              <div>
                <b className="block font-bold">לאטה בחתימה</b>
                <span className="opacity-70">חלב טרי, חום קטיפתי</span>
              </div>
            </div>

            {/* תג צף 2 — אפוי בבית */}
            <div
              className="absolute bg-[#faf5ea] border border-[rgba(26,22,19,0.14)] rounded-[14px] p-[14px_18px] text-[13px] shadow-[0_12px_30px_-10px_rgba(59,42,30,0.25)] flex items-center gap-[12px]"
              style={{ bottom: 80, left: -28, transform: "rotate(-4deg)" }}
            >
              <div className="w-9 h-9 rounded-[10px] bg-[#5a6147] text-white flex items-center justify-center text-[18px]">
                ♥
              </div>
              <div>
                <b className="block font-bold">אפוי בבית</b>
                <span className="opacity-70">מאפים של שישי</span>
              </div>
            </div>

            {/* חותמת עגולה */}
            <div
              className="absolute flex items-center justify-center text-center font-serif text-[#f4ecdf] shadow-[0_16px_30px_-10px_rgba(0,0,0,0.3)]"
              style={{
                bottom: -24,
                right: -24,
                width: 130,
                height: 130,
                borderRadius: "50%",
                background: "#1a1613",
                transform: "rotate(-10deg)",
              }}
            >
              <div
                className="flex flex-col items-center justify-center gap-[2px]"
                style={{
                  width: 108,
                  height: 108,
                  border: "1px dashed rgba(244,236,223,0.6)",
                  borderRadius: "50%",
                  fontSize: 11,
                }}
              >
                <small className="tracking-[0.2em] opacity-75 uppercase">SINCE</small>
                <div className="text-[30px] font-bold leading-none">31</div>
                <small className="tracking-[0.2em] opacity-75">דניאל · בת ים</small>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ====== MARQUEE STRIP ====== */}
      <div
        className="bg-[#1a1613] text-[#f4ecdf] py-[18px] overflow-hidden border-t border-[rgba(26,22,19,0.14)]"
        aria-hidden="true"
      >
        <div
          className="flex gap-[50px] whitespace-nowrap font-serif text-[22px] tracking-[0.02em]"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {[1, 2].map((i) => (
            <span key={i} className="inline-flex items-center gap-[50px]">
              אספרסו טרי{" "}
              <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#b9743a]" />
              מאפים חמים{" "}
              <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#b9743a]" />
              קפה שכונתי{" "}
              <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#b9743a]" />
              לאטה בחתימה{" "}
              <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#b9743a]" />
              משקה שישי{" "}
              <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#b9743a]" />
              גוד ווייבס ✦{" "}
              <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#b9743a]" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
