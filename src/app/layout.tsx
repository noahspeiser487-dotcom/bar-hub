import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BAR Hub",
  description: "Beyond All Reason Resource Center",
  openGraph: {
    title: "BAR Hub",
    description: "Build Orders, Map Guides, Counter Matrix und Learning Paths fÃ¼r Beyond All Reason.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${geist.variable} antialiased`}>
        <header className="border-b border-white/10">
          <div className="container-shell flex h-16 items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">BAR Hub</Link>
            <nav className="hidden gap-6 text-sm text-[var(--muted)] md:flex">
              <Link href="/build-orders">Build Orders</Link>
              <Link href="/map-guides">Map Guides</Link>
              <Link href="/unit-counter">Unit Counter</Link>
              <Link href="/learning-paths">Learning Paths</Link>
              <Link href="/patch-notes">Patch Notes</Link>
            </nav>
          </div>
        </header>
        <main className="container-shell py-10">{children}</main>
      </body>
    </html>
  );
}

