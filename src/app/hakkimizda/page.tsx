import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Közbaşı'nın hikayesi: İstanbul merkezli festival gastronomi firması. Yerinde döner kesimi, stand kurulumu ve etkinlik yemek hizmeti.",
};

const stats = [
  { value: "120+", label: "Etkinlik" },
  { value: "250.000+", label: "Porsiyon" },
  { value: "8", label: "Yıl" },
  { value: "İstanbul", label: "Merkez" },
];

const services = [
  {
    title: "Festival & Konser Standları",
    description:
      "Etkinlik alanlarında kendi standımızda döner, köfte, kebap, dondurma ve kahve. Her etkinliğe özel stand kurulumu ve operasyon yönetimi.",
    color: "#DC2626",
  },
  {
    title: "Yerinde Döner Kesimi",
    description:
      "Festival ve konser alanlarında canlı döner kesimi — kesim şovu olarak kalabalıkla buluşan, etkinliğin kendisine katan bir deneyim.",
    color: "#22C55E",
  },
  {
    title: "Özel Günler",
    description:
      "Düğün, nişan, kurumsal etkinlik ve açılışlarda yerinde döner kesimi. Misafirlerinize unutulmaz bir gastronomi anı.",
    color: "#9C7A4B",
  },
  {
    title: "Toplu Yemek",
    description:
      "Kurumsal ve etkinlik bazlı toplu yemek hizmeti. Kapasite, menü ve lojistik tamamen sizin ihtiyacınıza göre planlanır.",
    color: "#DC2626",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <Header activePage="hakkimizda" />
      <main style={{ background: "#16120F", color: "#F2E8DC" }}>
        {/* Hero bölümü */}
        <section style={{ padding: "88px 64px 80px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-utility)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9C7A4B",
              }}
            >
              {siteConfig.tagline}
            </p>
            <h1
              style={{
                margin: "16px 0 0",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(44px, 7vw, 80px)",
                lineHeight: 1.02,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: "#F2E8DC",
              }}
            >
              Hakkımızda
            </h1>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                gap: 64,
                marginTop: 56,
                alignItems: "start",
              }}
            >
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 20,
                    lineHeight: 1.7,
                    color: "rgba(242,232,220,0.9)",
                  }}
                >
                  Festival alanlarında yemek, sıradan bir ihtiyaç değil — etkinliğin ta kendisi. Biz bunu sekiz yıl önce anladık.
                </p>
                <p
                  style={{
                    margin: "22px 0 0",
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "rgba(242,232,220,0.7)",
                  }}
                >
                  Közbaşı, İstanbul merkezli bir festival gastronomi firmasıdır. Festival ve konser alanlarında kendi standlarımızda yiyecek-içecek satışı yapıyor; organizatörlerle, etkinlik planlamacılarıyla ve kurumsal müşterilerle uzun vadeli işbirlikleri kuruyoruz.
                </p>
                <p
                  style={{
                    margin: "22px 0 0",
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "rgba(242,232,220,0.7)",
                  }}
                >
                  Standı kurmaktan operasyonu yönetmeye, yerinde döner kesim şovundan toplu yemek lojistiğine kadar her şeyi biz üstleniyoruz. Siz etkinliğinize odaklanın, gastronomi kısmı bizden.
                </p>
              </div>

              {/* Sağ — kutulu vurgu */}
              <div
                style={{
                  background: "#1C1712",
                  border: "1px solid rgba(156,122,75,0.3)",
                  borderRadius: 8,
                  padding: "44px 40px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-utility)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#9C7A4B",
                  }}
                >
                  Bizden kısaca
                </p>
                <ul
                  style={{
                    margin: "22px 0 0",
                    padding: 0,
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  {[
                    "İstanbul merkezli, festival odaklı",
                    "8 yıllık sektör deneyimi",
                    "Yerinde kesim şovu dahil tam operasyon",
                    "Festival, konser, özel gün, toplu yemek",
                    "Stand kurulumundan lojistiğe tek elden",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        fontSize: 15,
                        lineHeight: 1.5,
                        color: "rgba(242,232,220,0.8)",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          marginTop: 3,
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: "#DC2626",
                          display: "block",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sayılarla biz */}
        <section
          style={{
            borderTop: "1px solid rgba(242,232,220,0.08)",
            borderBottom: "1px solid rgba(242,232,220,0.08)",
            padding: "72px 64px",
            background: "#1C1712",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 32,
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(40px, 5vw, 64px)",
                      letterSpacing: "0.02em",
                      textTransform: "uppercase",
                      color: "#DC2626",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      margin: "10px 0 0",
                      fontFamily: "var(--font-utility)",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#9C7A4B",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hizmetler */}
        <section style={{ padding: "96px 64px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-utility)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#9C7A4B",
              }}
            >
              Ne yapıyoruz
            </p>
            <h2
              style={{
                margin: "16px 0 40px",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4.5vw, 52px)",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: "#F2E8DC",
              }}
            >
              Hizmetlerimiz
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {services.map((service) => (
                <div
                  key={service.title}
                  style={{
                    background: "#1C1712",
                    border: `1px solid ${service.color}25`,
                    borderTop: `3px solid ${service.color}`,
                    borderRadius: 8,
                    padding: "32px 28px",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      letterSpacing: "0.03em",
                      textTransform: "uppercase",
                      color: "#F2E8DC",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      margin: "14px 0 0",
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: "rgba(242,232,220,0.65)",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          heading="Etkinliğinizi birlikte planlayalım"
          subtext="Festival, konser, kurumsal — teklif almak için yazın"
        />
      </main>
      <Footer variant="light" />
    </>
  );
}
