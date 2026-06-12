import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CtaBand from "@/components/sections/CtaBand";
import { menuSections } from "@/content/menu";

export const metadata: Metadata = {
  title: "Menü",
  description:
    "Et döner, tavuk döner, köfte, kebap, dondurma, kahve ve fresh içecekler. Festival standı menümüz ve fiyatlarımız.",
};

export default function MenuPage() {
  return (
    <>
      <Header activePage="menu" />
      <main style={{ background: "#F2E8DC", color: "#16120F" }}>
        {/* Başlık */}
        <section
          style={{
            padding: "96px 64px 24px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-utility)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#9C7A4B",
            }}
          >
            Közbaşı sunar
          </p>
          <h1
            style={{
              margin: "20px 0 0",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 9vw, 110px)",
              lineHeight: 1,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#16120F",
              paddingLeft: "0.12em",
            }}
          >
            Menü
          </h1>
          <p
            style={{
              margin: "22px auto 0",
              maxWidth: 440,
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(22,18,15,0.7)",
            }}
          >
            Afişin arka yüzü: standda ne pişiyorsa burada. Etkinlik menüleri
            ayrıca kurgulanır.
          </p>
        </section>

        {/* Menü listesi */}
        <section
          style={{
            padding: "48px 64px 104px",
          }}
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 72,
            }}
          >
            {menuSections.map((section, si) => (
              <div key={si}>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-utility)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#FF4D1C",
                  }}
                >
                  {section.tag}
                </p>
                <h2
                  style={{
                    margin: "12px 0 0",
                    fontFamily: "var(--font-display)",
                    fontSize:
                      si === 0
                        ? "clamp(40px, 6vw, 64px)"
                        : "clamp(28px, 4vw, 40px)",
                    lineHeight: 1.04,
                    letterSpacing: si === 0 ? "0.1em" : "0.06em",
                    textTransform: "uppercase",
                    color: "#16120F",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: section.title.replace(
                      /•/g,
                      `<span style="color:#FF4D1C">•</span>`
                    ),
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 26,
                    marginTop: si === 0 ? 36 : 32,
                  }}
                >
                  {section.items.map((item, ii) => (
                    <div key={ii}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 12,
                        }}
                      >
                        <span
                          style={{ fontSize: 17, fontWeight: 500 }}
                        >
                          {item.name}
                        </span>
                        <span
                          style={{
                            flex: 1,
                            borderBottom:
                              "1px dotted rgba(22,18,15,0.35)",
                            transform: "translateY(-4px)",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-utility)",
                            fontVariantNumeric: "tabular-nums",
                            fontSize: 17,
                            fontWeight: 700,
                          }}
                        >
                          {item.price}
                        </span>
                      </div>
                      {item.description && (
                        <p
                          style={{
                            margin: "6px 0 0",
                            fontSize: 14,
                            lineHeight: 1.5,
                            color: "rgba(22,18,15,0.6)",
                          }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p
              style={{
                margin: 0,
                paddingTop: 24,
                borderTop: "1px solid rgba(22,18,15,0.2)",
                fontFamily: "var(--font-utility)",
                fontSize: 13,
                letterSpacing: "0.06em",
                color: "rgba(22,18,15,0.55)",
              }}
            >
              Fiyatlar stand satışı içindir. Festival, konser ve kurumsal
              etkinliklerde menü kişi başı paket olarak teklif edilir.
            </p>
          </div>
        </section>

        <CtaBand heading="Etkinliğinize özel menü kuralım" />
      </main>
      <Footer variant="dark" />
    </>
  );
}
