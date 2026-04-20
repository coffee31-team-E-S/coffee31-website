# claude.md — coffee31-website

## 🎯 מטרת הפרויקט
בניית אתר תדמית מקצועי לבית הקפה "קפה 31" בבת ים.
האתר נבנה כדמו לשיחת מכירה עם בעל העסק.

## 👥 צוות
- **המנוסה** — ארכיטקטורה, setup, קומפוננטות מורכבות
- **המתחיל** — קומפוננטות תוכן, תמונות, טקסטים

## 🛠️ סטאק טכנולוגי
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **שפה:** עברית (RTL)
- **Hosting:** Vercel
- **עיצוב:** Claude Design
- **ניהול משימות:** Trello

## 📁 מבנה תיקיות
```
coffee31-website/
├── app/
│   ├── page.tsx          # עמוד הבית הראשי
│   ├── layout.tsx        # Layout + RTL + פונטים
│   └── globals.css       # סגנונות גלובליים
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Menu.tsx
│   ├── Gallery.tsx
│   ├── LocationHours.tsx
│   └── Footer.tsx
├── public/
│   └── images/           # תמונות מהאינסטגרם
├── claude.md
└── README.md
```

## 🌿 כללי Git
- branch ראשי: `main` — אסור לדחוף ישירות
- כל פיצר נפתח ב-branch נפרד: `feature/שם-הפיצר`
- כל branch מסתיים ב-Pull Request + review של השותף
- commit messages בעברית או באנגלית, קצרים וברורים

### דוגמאות לשמות branch:
- `feature/hero`
- `feature/menu`
- `feature/gallery`
- `feature/location`
- `feature/navbar`
- `feature/footer`

## ⚙️ כללי קוד
- כל קומפוננטה בקובץ נפרד תחת `components/`
- שמות קומפוננטות ב-PascalCase
- שימוש ב-Tailwind בלבד לסגנון (אין CSS נפרד חוץ מ-globals.css)
- האתר כולו RTL — יש להוסיף `dir="rtl"` ב-layout.tsx
- תמונות דרך `next/image` בלבד לביצועים מיטביים
- אין hardcode של צבעים — הכל דרך `tailwind.config`

## 🎨 עיצוב
- סגנון: ייקבע לאחר עבודה ב-Claude Design
- פלטת צבעים: תיגזר מתמונות האינסטגרם של קפה 31
- פונט עברי: Heebo (Google Fonts)
- פונט אנגלי/מספרים: Playfair Display

## 📄 קומפוננטות — תיאור קצר

| קומפוננטה | תוכן |
|-----------|------|
| `Navbar` | לוגו + ניווט עוגן לסקשנים |
| `Hero` | תמונה גדולה + שם הקפה + סלוגן |
| `Menu` | תפריט מנו מחולק לקטגוריות |
| `Gallery` | גריד תמונות מהאינסטגרם |
| `LocationHours` | Google Maps embed + שעות פתיחה + טלפון |
| `Footer` | כתובת + אינסטגרם + קרדיט |

## ✅ הוראות לקלוד
- כתוב קוד בעברית בהערות
- כל קומפוננטה חייבת להיות responsive (mobile-first)
- בדוק RTL בכל קומפוננטה
- אל תמציא תוכן — השתמש רק בחומר מהאינסטגרם/גוגל
- שמור על קוד נקי ומודולרי
