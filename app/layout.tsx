import type { Metadata } from "next";
import { Big_Shoulders, Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-display",
  display: "swap",
});

const accent = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-accent",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Korista Printing Hub | Printing & Branding in Kisii",
  description:
    "Korista Printing Hub offers digital printing, banners, signage, promotional merchandise and cyber services in Suneka, Kisii County, Kenya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${accent.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="font-body bg-paper text-text-ink">{children}</body>
    </html>
  );
}
