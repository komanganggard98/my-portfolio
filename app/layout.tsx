import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Link } from "lucide-react";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angga R. — Independent Web Developer",
  description: "Thoughtful digital experiences, built with purpose. Explore the selected work and experience of Angga R.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        <main className="flex-1">
          <div className="page-shell">
            {children}
            <footer className="site-footer">
              <span>© 2026 ANGGA R.</span>
              <span>DESIGNED WITH INTENTION · BUILT WITH CARE</span>
              <Link href="/profile">BACK TO PROFILE ↑</Link>
            </footer>
          </div>

        </main>
      </body>
    </html>
  );
}
