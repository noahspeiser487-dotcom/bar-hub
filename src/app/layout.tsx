import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BAR Hub",
  description: "Beyond All Reason Resource Center",
  openGraph: {
    title: "BAR Hub",
    description: "Build Orders, Map Guides, Counter Matrix und Learning Paths fuer Beyond All Reason.",
    type: "website",
  },
};

const nav = [
  ["Build Orders", "/build-orders"],
  ["Map Guides", "/map-guides"],
  ["Unit Counter", "/unit-counter"],
  ["Learning Paths", "/learning-paths"],
  ["Patch Notes", "/patch-notes"],
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${rajdhani.variable} antialiased`}>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0c10]/90 backdrop-blur">
          <div className="container-shell flex h-16 items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-wide text-[var(--cyan)]">BAR HUB</Link>
            <nav className="hidden gap-6 text-sm text-[var(--foreground)] md:flex">
              {nav.map(([label, href]) => (
                <Link key={href} href={href} className="glow-hover rounded-md px-2 py-1 hover:text-[var(--cyan)]">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="container-shell py-10">{children}</main>
      </body>
    </html>
  );
}
