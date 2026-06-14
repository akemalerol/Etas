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
      <main>
        {/* Hero */}
        <section
          style={{
            background: "#E01E26",
            color: "#FBF4E6",
            padding: "80px 48px 64px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#36A85A",
              }}
            >
              Teklif al
            </p>
            <h1
              style={{
                margin: "16px 0 0",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(52px, 9vw, 110px)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "#FBF4E6",
              }}
            >
              Sahneyi konuşalım
            </h1>
            <p
              style={{
                margin: "24px auto 0",
                maxWidth: 500,
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(251,244,230,0.9)",
              }}
            >
              Etkinliğinizi anlatın; 48 saat içinde kapasite, menü ve fiyat teklifiyle dönelim.
            </p>
          </div>
        </section>

        {/* Form + İletişim */}
        <section style={{ background: "#FBF4E6", padding: "72px 48px 104px" }}>
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

            {/* Sağ kolon */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {/* Doğrudan ulaş */}
              <div
                style={{
                  background: "#ffffff",
                  border: "2px solid #16130E",
                  borderRadius: 18,
                  padding: "32px 28px",
                  boxShadow: "10px 10px 0 #1E7A3D",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(22,19,14,0.5)",
                  }}
                >
                  Doğrudan ulaşın
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 18 }}>
                  <a
                    href={siteConfig.phoneHref}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontVariantNumeric: "tabular-nums",
                      fontWeight: 700,
                      fontSize: 26,
                      letterSpacing: "0.01em",
                      color: "#16130E",
                      textDecoration: "none",
                    }}
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 15,
                      fontWeight: 500,
                      color: "rgba(22,19,14,0.7)",
                      textDecoration: "none",
                    }}
                  >
                    {siteConfig.email}
                  </a>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "var(--font-display)",
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#FBF4E6",
                      background: "#1E7A3D",
                      padding: "12px 20px",
                      borderRadius: 999,
                      textDecoration: "none",
                      width: "fit-content",
                      marginTop: 4,
                    }}
                  >
                    WhatsApp&rsquo;tan yaz
                  </a>
                  {siteConfig.instagram && (
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        color: "rgba(22,19,14,0.55)",
                      }}
                    >
                      {siteConfig.instagram}
                    </p>
                  )}
                </div>
              </div>

              {/* Merkez + Nasıl işler */}
              <div
                style={{
                  background: "#ffffff",
                  border: "2px solid #16130E",
                  borderRadius: 18,
                  padding: "28px 28px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(22,19,14,0.5)",
                  }}
                >
                  Merkez
                </p>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "rgba(22,19,14,0.75)",
                  }}
                >
                  Bomonti, Şişli — İstanbul
                  <br />
                  Çalışma alanı: Türkiye geneli
                </p>

                <p
                  style={{
                    margin: "24px 0 0",
                    fontFamily: "var(--font-display)",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(22,19,14,0.5)",
                  }}
                >
                  Nasıl işler
                </p>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "rgba(22,19,14,0.7)",
                  }}
                >
                  Formu doldurun → 48 saatte teklif → keşif görüşmesi → standı kurar, etkinliğinizi şova dönüştürürüz.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="compact" />
    </>
  );
}
