export default function Footer() {
  return (
    <footer className="bg-[#2a231d] text-[#f4ecdf] pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12" dir="rtl">

          {/* עמודה 1 — לוגו ותיאור */}
          <div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
  <div className="relative w-12 h-12 border-2 border-[#f4ecdf] flex items-center justify-center flex-shrink-0">
    <span className="text-2xl font-bold leading-none">31</span>
    <span className="absolute -top-3 text-[10px] font-bold tracking-widest bg-[#2a231d] px-1">קפה</span>
  </div>
  <div className="flex flex-col">
    <span className="text-lg font-bold leading-tight">קפה 31</span>
    <span className="text-[10px] tracking-widest text-[#a89880]">COFFEE · BAT YAM</span>
  </div>
</div>            <p className="text-sm text-[#a89880] leading-relaxed">
              בית קפה שכונתי עם אספרסו טרי, מאפים חמים וקצת גוד וויבס — כל יום, כבר כמה שנים, על דניאל 31.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com/coffee31_batyam" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="w-5 h-5 text-[#a89880] hover:text-white transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path>
                </svg>
              </a>
              <a href="https://wa.me/972544301100" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg className="w-5 h-5 text-[#a89880] hover:text-white transition" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              <a href="tel:0544301100" aria-label="טלפון">
                <svg className="w-5 h-5 text-[#a89880] hover:text-white transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.34 1.78.64 2.62a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.46-1.21a2 2 0 012.11-.45c.84.3 1.72.52 2.62.64a2 2 0 011.72 2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* עמודה 2 — ניווט */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">ניווט</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#a89880]">
              <li><a href="#menu" className="hover:text-white transition">תפריט</a></li>
              <li><a href="#gallery" className="hover:text-white transition">גלריה</a></li>
              <li><a href="#story" className="hover:text-white transition">הסיפור שלנו</a></li>
              <li><a href="#visit" className="hover:text-white transition">איך מגיעים</a></li>
            </ul>
          </div>

          {/* עמודה 3 — שעות */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">שעות</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#a89880]">
              <li>ג׳-ה׳ · 07:00–19:00</li>
              <li>שישי · 07:00–14:00</li>
              <li>א׳, ב׳, שבת · סגור</li>
            </ul>
          </div>

          {/* עמודה 4 — יצירת קשר */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white">יצירת קשר</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#a89880]">
              <li><a href="tel:0544301100" className="hover:text-white transition">054-430-1100</a></li>
              <li>דניאל 31, בת ים</li>
              <li><a href="https://instagram.com/coffee31_batyam" className="hover:text-white transition">@coffee31_batyam</a></li>
            </ul>
          </div>

        </div>

        {/* תחתית */}
        <div className="border-t border-[#ffffff15] pt-6 flex flex-col md:flex-row justify-between text-xs text-[#6b5e52]" dir="rtl">
          <div>© 2026 קפה 31 · כל הזכויות שמורות</div>
          <div>נעשה באהבה ❤ בת ים</div>
        </div>

      </div>
    </footer>
  )
}