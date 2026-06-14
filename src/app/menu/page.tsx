import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Menü",
  description:
    "Közbaşı menüsü: et döner, tavuk döner, köfte, kebap, dondurma ve kahve. Stand fiyatları ile etkinlik paket seçenekleri.",
};

const categories = [
  {
    id: "doner",
    num: "01",
    title: "Döner",
    subtitle: "Dürüm · porsiyon · box",
    badge: "Headliner",
    label: "Headliner",
  },
  {
    id: "kofte",
    num: "02",
    title: "Köfte · Kebap",
    subtitle: "Izgara · Adana · şiş",
    badge: null,
    label: "Sahne arkası",
  },
  {
    id: "soguk",
    num: "03",
    title: "Soğuk Sahne",
    subtitle: "Dondurma · kahve · fresh",
    badge: null,
    label: "Soğuk sahne",
  },
];

type MenuItem = { name: string; price: string; desc: string | null; badge?: string };
type Board = { id: string; num: string; eyebrow: string; eyebrowColor: string; title: string; titleSize: string; shadow: string; circleColor: string; items: MenuItem[] };

const boards: Board[] = [
  {
    id: "doner",
    num: "01",
    eyebrow: "Headliner",
    eyebrowColor: "#1E7A3D",
    title: "Döner",
    titleSize: "clamp(34px, 5vw, 52px)",
    shadow: "10px 10px 0 #E01E26",
    circleColor: "#E01E26",
    items: [
      { name: "Et Döner Dürüm", price: "₺220", desc: "Lavaş, közlenmiş biber, soğan-sumak" },
      { name: "Et Döner Porsiyon", price: "₺320", desc: "Tereyağlı pilav üstü, közlenmiş domates" },
      { name: "Tavuk Döner Dürüm", price: "₺160", desc: "Marine tavuk, turşu, akçaağaç-biber sos" },
      { name: "Festival Box", price: "₺380", desc: "Dürüm + yayık ayran + közde patates", badge: "Favori" },
    ],
  },
  {
    id: "kofte",
    num: "02",
    eyebrow: "Sahne arkası",
    eyebrowColor: "#E01E26",
    title: "Köfte · Kebap",
    titleSize: "clamp(28px, 4vw, 42px)",
    shadow: "10px 10px 0 #1E7A3D",
    circleColor: "#1E7A3D",
    items: [
      { name: "Izgara Köfte Ekmek", price: "₺180", desc: "Közde köfte, piyaz soğanı, taş fırın ekmeği" },
      { name: "Adana Dürüm", price: "₺240", desc: "Zırh kıyma, közlenmiş biber, maydanozlu soğan" },
      { name: "Kuzu Şiş Porsiyon", price: "₺350", desc: "Pirinç şişte kuzu, közde domates-biber" },
    ],
  },
  {
    id: "soguk",
    num: "03",
    eyebrow: "Soğuk sahne",
    eyebrowColor: "#1E7A3D",
    title: "Dondurma · Kahve · Fresh",
    titleSize: "clamp(26px, 3.6vw, 40px)",
    shadow: "10px 10px 0 #E01E26",
    circleColor: "#E01E26",
    items: [
      { name: "Maraş Dondurma", price: "₺90", desc: "Külahta, keçi sütü — kesme şov dahil" },
      { name: "Sıkma Portakal", price: "₺80", desc: null },
      { name: "Yayık Ayran", price: "₺50", desc: null },
      { name: "Türk Kahvesi", price: "₺70", desc: "Közde pişer — sahnenin en yavaş işi" },
    ],
  },
];

const extras = ["Közlenmiş biber", "Soğan-sumak", "Turşu", "Acı sos", "Maydanozlu soğan"];

export default function MenuPage() {
  return (
    <>
      <Header activePage="menu" />
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
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#36A85A",
              }}
            >
              Közbaşı sunar
            </p>
            <h1
              style={{
                margin: "16px 0 0",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(72px, 13vw, 168px)",
                lineHeight: 0.86,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "#FBF4E6",
              }}
            >
              Menü
            </h1>
            <p
              style={{
                margin: "22px auto 0",
                maxWidth: 480,
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(251,244,230,0.9)",
              }}
            >
              Afişin arka yüzü: standda ne pişiyorsa burada. Etkinlik menüleri ayrıca kurgulanır.
            </p>
          </div>
        </section>

        {/* Kategori fotoğraf kartları */}
        <section style={{ background: "#E01E26", padding: "12px 48px 72px" }}>
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 18,
            }}
          >
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                style={{
                  position: "relative",
                  display: "block",
                  height: 320,
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "3px solid #FBF4E6",
                  textDecoration: "none",
                  transition: "transform 150ms ease-out",
                  background: "#211A14",
                }}
                className="kz-btn-cream"
              >
                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(22,19,14,0.1) 0%, rgba(22,19,14,0.82) 100%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Numbered circle */}
                <span
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#1E7A3D",
                    color: "#FBF4E6",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 18,
                    pointerEvents: "none",
                  }}
                >
                  {cat.num}
                </span>
                {/* Headliner badge */}
                {cat.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: 18,
                      right: 18,
                      fontFamily: "var(--font-display)",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#FBF4E6",
                      background: "rgba(176,20,26,0.85)",
                      padding: "6px 12px",
                      borderRadius: 999,
                      pointerEvents: "none",
                    }}
                  >
                    {cat.badge}
                  </span>
                )}
                {/* Title */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    padding: "22px 24px",
                    pointerEvents: "none",
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 36,
                      lineHeight: 1,
                      textTransform: "uppercase",
                      color: "#FBF4E6",
                    }}
                  >
                    {cat.title}
                  </h2>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      fontWeight: 500,
                      color: "rgba(251,244,230,0.85)",
                    }}
                  >
                    {cat.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Yanında bedava strip */}
        <section
          style={{
            background: "#1E7A3D",
            color: "#FBF4E6",
            padding: "40px 48px",
            borderTop: "3px solid #16130E",
            borderBottom: "3px solid #16130E",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              gap: 32,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(251,244,230,0.8)",
                }}
              >
                Yanında ne var
              </p>
              <h2
                style={{
                  margin: "6px 0 0",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(26px, 3.4vw, 38px)",
                  lineHeight: 1,
                  textTransform: "uppercase",
                  color: "#FBF4E6",
                }}
              >
                Hepsi standda, ekstra yok
              </h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {extras.map((extra) => (
                <span
                  key={extra}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#16130E",
                    background: "#FBF4E6",
                    padding: "9px 16px",
                    borderRadius: 999,
                  }}
                >
                  {extra}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Menü board */}
        <section style={{ background: "#FBF4E6", padding: "72px 48px 100px" }}>
          <div
            style={{
              maxWidth: 880,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            {boards.map((board) => (
              <div
                key={board.id}
                id={board.id}
                style={{
                  scrollMarginTop: 110,
                  border: "2px solid #16130E",
                  borderRadius: 18,
                  background: "#ffffff",
                  padding: "40px 36px",
                  boxShadow: board.shadow,
                }}
              >
                {/* Board header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    paddingBottom: 22,
                    borderBottom: "2px dashed rgba(22,19,14,0.25)",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: board.circleColor,
                      color: "#FBF4E6",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 20,
                    }}
                  >
                    {board.num}
                  </span>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontFamily: "var(--font-display)",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: board.eyebrowColor,
                      }}
                    >
                      {board.eyebrow}
                    </p>
                    <h2
                      style={{
                        margin: "2px 0 0",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: board.titleSize,
                        lineHeight: 1,
                        letterSpacing: "0.02em",
                        textTransform: "uppercase",
                        color: "#16130E",
                      }}
                    >
                      {board.title}
                    </h2>
                  </div>
                </div>

                {/* Items */}
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 28 }}
                >
                  {board.items.map((item) => (
                    <div key={item.name}>
                      <div
                        style={{ display: "flex", alignItems: "baseline", gap: 12 }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 21,
                            fontWeight: 600,
                            letterSpacing: "0.01em",
                            textTransform: "uppercase",
                            color: "#16130E",
                          }}
                        >
                          {item.name}
                        </span>
                        {item.badge && (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              fontFamily: "var(--font-display)",
                              fontSize: 11,
                              fontWeight: 600,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "#FBF4E6",
                              background: "#1E7A3D",
                              padding: "3px 9px",
                              borderRadius: 999,
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                        <span
                          style={{
                            flex: 1,
                            borderBottom: "2px dotted rgba(22,19,14,0.3)",
                            transform: "translateY(-5px)",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontVariantNumeric: "tabular-nums",
                            fontSize: 22,
                            color: "#E01E26",
                          }}
                        >
                          {item.price}
                        </span>
                      </div>
                      {item.desc && (
                        <p
                          style={{
                            margin: "5px 0 0",
                            fontSize: 14,
                            lineHeight: 1.5,
                            color: "rgba(22,19,14,0.6)",
                          }}
                        >
                          {item.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p
              style={{
                margin: "8px 0 0",
                paddingTop: 22,
                borderTop: "2px solid rgba(22,19,14,0.2)",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                lineHeight: 1.6,
                letterSpacing: "0.02em",
                color: "rgba(22,19,14,0.6)",
              }}
            >
              Fiyatlar stand satışı içindir. Festival, konser ve kurumsal etkinliklerde menü kişi başı paket olarak teklif edilir.
            </p>
          </div>
        </section>

        <CtaBand heading="Etkinliğinize özel menü kuralım" />
      </main>
      <Footer variant="compact" />
    </>
  );
}
