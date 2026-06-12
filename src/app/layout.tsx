import type { Metadata } from "next";
import { Anton, Schibsted_Grotesk, Space_Grotesk } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/content/site";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Festival Gastronomi & Yerinde Döner Kesimi`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Festival, konser ve özel günlerde yerinde döner kesimi ve catering hizmeti. Türkiye geneli stand kurulumu, köfte, kebap ve daha fazlası.",
  keywords: ["festival catering", "konser alanı yemek standı", "yerinde döner kesimi", "düğünde döner", "etkinlik catering"],
  openGraph: {
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${anton.variable} ${schibstedGrotesk.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
