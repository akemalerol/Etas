import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import HeroFoto from "@/components/sections/HeroFoto";
import Marquee from "@/components/sections/Marquee";
import ServicesSection from "@/components/sections/ServicesSection";
import BrandsSection from "@/components/sections/BrandsSection";
import StatsSection from "@/components/sections/StatsSection";
import SchedulePreview from "@/components/sections/SchedulePreview";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "ETASAS — Festival ve Etkinlikler İçin Yiyecek-İçecek Çözümleri",
  description:
    "Festival, konser ve kurumsal etkinliklerde yiyecek-içecek operasyonu. Tek sözleşme, tek muhatap, tek operasyon ekibi. Döner, burger, kahve, dondurma ve daha fazlası.",
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
        <BrandsSection />
        <SchedulePreview />
        <CtaBand
          heading="Etkinliğinizi birlikte planlayalım"
          subtext="48 saat içinde teklif dönüyoruz"
        />
      </main>
      <Footer variant="home" />
    </>
  );
}
