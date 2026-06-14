import type { Metadata } from "next";
import { Oswald, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/content/site";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Festival Gastronomi & Yerinde Döner Kesimi`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Festival, konser ve özel günlerde yerinde döner kesimi ve catering hizmeti. İstanbul merkezli stand kurulumu, köfte, kebap ve daha fazlası.",
  keywords: [
    "festival catering",
    "konser alanı yemek standı",
    "yerinde döner kesimi",
    "düğünde döner",
    "etkinlik catering",
  ],
  openGraph: {
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${oswald.variable} ${hankenGrotesk.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
