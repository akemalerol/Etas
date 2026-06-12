import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "İletişim — Teklif Al",
  description:
    "Festival, konser, kurumsal etkinlik veya özel gün için teklif alın. 48 saat içinde kapasite, menü ve fiyat teklifinizle dönüyoruz.",
};

export default function IletisimPage() {
  return (
    <>
      <Header activePage="iletisim" />
      <main style={{ background: "#16120F", color: "#F2E8DC" }}>
        {/* Başlık */}
        <section style={{ padding: "88px 64px 16px" }}>
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
              Teklif al
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
              Sahneyi konuşalım
            </h1>
            <p
              style={{
                margin: "20px 0 0",
                maxWidth: 480,
                fontSize: 17,
                lineHeight: 1.6,
                color: "rgba(242,232,220,0.75)",
              }}
            >
              Etkinliğinizi anlatın; 48 saat içinde kapasite, menü ve fiyat
              teklifiyle dönelim.
            </p>
          </div>
        </section>

        {/* Form + İletişim bilgileri */}
        <section style={{ padding: "48px 64px 104px" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.25fr) minmax(0, 0.75fr)",
              gap: 56,
              alignItems: "start",
            }}
          >
            <ContactForm />

            {/* Sağ kolon — iletişim bilgileri */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 36,
              }}
            >
              <div>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-utility)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#9C7A4B",
                  }}
                >
                  Doğrudan ulaşın
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    marginTop: 18,
                  }}
                >
                  <a
                    href={siteConfig.phoneHref}
                    className="kz-nav-link"
                    style={{
                      fontFamily: "var(--font-utility)",
                      fontVariantNumeric: "tabular-nums",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#F2E8DC",
                      textDecoration: "none",
                    }}
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="kz-nav-link"
                    style={{
                      fontFamily: "var(--font-utility)",
                      fontSize: 16,
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      color: "rgba(242,232,220,0.8)",
                      textDecoration: "none",
                    }}
                  >
                    {siteConfig.email}
                  </a>
                  <span
                    style={{
                      fontFamily: "var(--font-utility)",
                      fontSize: 16,
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      color: "rgba(242,232,220,0.8)",
                    }}
                  >
                    {siteConfig.instagram}
                  </span>
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(242,232,220,0.12)",
                  paddingTop: 28,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-utility)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#9C7A4B",
                  }}
                >
                  Merkez
                </p>
                <p
                  style={{
                    margin: "14px 0 0",
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: "rgba(242,232,220,0.8)",
                  }}
                >
                  Bomonti, Şişli — İstanbul
                  <br />
                  Çalışma alanı: Türkiye geneli
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(242,232,220,0.12)",
                  paddingTop: 28,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-utility)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#9C7A4B",
                  }}
                >
                  Nasıl işler
                </p>
                <p
                  style={{
                    margin: "14px 0 0",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "rgba(242,232,220,0.7)",
                  }}
                >
                  Formu doldurun → 48 saatte teklif → keşif görüşmesi →
                  standı kurar, sahneyi devralırız.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="light" />
    </>
  );
}
