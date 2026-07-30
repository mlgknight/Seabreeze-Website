import type { Metadata } from "next";
import { Geist, Geist_Mono, Old_Standard_TT } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oldStandard = Old_Standard_TT({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-oldstandard",
});

export const metadata: Metadata = {
  title: "Seabreeze Strategies",
  description: "Crafting digital success, one wave at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${oldStandard.variable}
          antialiased
          bg-background text-foreground
        `}
      >
        {children}
      </body>
    </html>
  );
}
