import type { Metadata } from "next";
import { Heebo, Playfair_Display } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "קפה 31 | בית קפה בבת ים",
  description: "קפה 31 — בית קפה אווירתי בלב בת ים. קפה איכותי, אוכל טעים, ואווירה ביתית חמה.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#f4ecdf] text-[#1a1613] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
