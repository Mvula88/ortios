import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ortios LLC - Building the Future of Digital Marketplaces & SaaS Innovation",
  description:
    "Ortios LLC creates scalable digital products that solve real-world problems. We build innovative SaaS platforms and digital marketplaces across multiple industries.",
  keywords:
    "Ortios LLC, SaaS, digital marketplaces, Credlio, Tumalio, JapRide, technology, innovation",
  authors: [{ name: "Ortios LLC" }],
  openGraph: {
    title: "Ortios LLC - Building the Future of Digital Marketplaces & SaaS Innovation",
    description:
      "Ortios LLC creates scalable digital products that solve real-world problems. We build innovative SaaS platforms and digital marketplaces across multiple industries.",
    url: "https://ortios.com",
    siteName: "Ortios LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ortios LLC - Building the Future of Digital Marketplaces & SaaS Innovation",
    description:
      "Ortios LLC creates scalable digital products that solve real-world problems. We build innovative SaaS platforms and digital marketplaces across multiple industries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
