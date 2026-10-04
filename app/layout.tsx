import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/bodoni-moda/wght-italic.css";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Graphic & UI/UX Designer`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
