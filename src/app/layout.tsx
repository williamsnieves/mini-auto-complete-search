import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search System",
  description: "Search system with autocomplete",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <nav className="bg-primary-800 text-white shadow-lg">
          <div className="container py-4">
            <h1 className="text-xl font-bold">Search System</h1>
          </div>
        </nav>
        <main className="container py-8">{children}</main>
      </body>
    </html>
  );
}
