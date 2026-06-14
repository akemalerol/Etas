import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import HeroFoto from "@/components/sections/HeroFoto";
import Marquee from "@/components/sections/Marquee";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import SchedulePreview from "@/components/sections/SchedulePreview";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "KÖZBAŞI — Festival Gastronomi & Yerinde Döner Kesimi",
  description:
    "Festival, konser ve özel günlerde yerinde döner kesimi. İstanbul merkezli stand kurulumu, taze malzeme, kesim şov. Teklif için hemen yazın.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroFoto />
        <Marquee />
        <ServicesSection />
        <StatsSection />
        <SchedulePreview />
        <CtaBand
          heading="Sahnenizi ayarlayalım"
          subtext="48 saat içinde teklif dönüyoruz"
        />
      </main>
      <Footer variant="home" />
    </>
  );
}
