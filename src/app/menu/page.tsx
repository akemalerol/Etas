import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CtaBand from "@/components/sections/CtaBand";
import { brands, categoryLabels, type BrandCategory } from "@/content/brands";

export const metadata: Metadata = {
  title: "Markalar — ETASAS",
  description:
    "ETASAS marka portföyü: Mono Burger, Dürümo, Bereket Döner, Mikel Coffee, Clasigo, Fresh, Aidos Chocolatier. Etkinliğinize uygun markayı seçin.",
};

const categoryOrder: BrandCategory[] = [
  "doner-burger",
  "kahve",
  "dondurma",
  "meyve-suyu",
  "cikolata",
];

const categoryAccents: Record<BrandCategory, { bg: string; circle: string }> = {
  "doner-burger": { bg: "#E01E26", circle: "#E01E26" },
  kahve: { bg: "#1E7A3D", circle: "#1E7A3D" },
  dondurma: { bg: "#E01E26", circle: "#E01E26" },
  "meyve-suyu": { bg: "#1E7A3D", circle: "#1E7A3D" },
  cikolata: { bg: "#E01E26", circle: "#E01E26" },
};

export default function MarkalarPage() {
  const grouped = brands.reduce<Partial<Record<BrandCategory, typeof brands>>>(
    (acc, b) => {
      if (!acc[b.category]) acc[b.category] = [];
      acc[b.category]!.push(b);
      return acc;
    },
    {}
  );

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
              ETASAS sunar
            </p>
            <h1
              style={{
                margin: "16px 0 0",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(64px, 12vw, 150px)",
                lineHeight: 0.86,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "#FBF4E6",
              }}
            >
              Markalar
            </h1>
            <p
              style={{
                margin: "22px auto 0",
                maxWidth: 520,
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(251,244,230,0.9)",
              }}
            >
              Tüketici tarafından bilinen, talep gören markalar. Etkinliğiniz için doğru kombinasyonu birlikte oluşturalım.
            </p>
          </div>
        </section>

        {/* Değer proposisyon band */}
        <section
          style={{
            background: "#16130E",
            color: "#FBF4E6",
            padding: "40px 48px",
            borderTop: "3px solid #E01E26",
            borderBottom: "3px solid #E01E26",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 48,
              flexWrap: "wrap",
              textAlign: "center",
            }}
          >
            {[
              "Tek sözleşme",
              "Tek muhatap",
              "Tek operasyon ekibi",
            ].map((item, i) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(18px, 2.4vw, 26px)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#FBF4E6",
                  }}
                >
                  {item}
                </p>
                {i < 2 && (
                  <span style={{ color: "#E01E26", fontSize: 24 }}>◆</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Marka listesi */}
        <section style={{ background: "#FBF4E6", padding: "72px 48px 100px" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 48,
            }}
          >
            {categoryOrder.map((cat, catIndex) => {
              const catBrands = grouped[cat];
              if (!catBrands) return null;
              const accent = categoryAccents[cat];
              const shadow = catIndex % 2 === 0 ? "10px 10px 0 #E01E26" : "10px 10px 0 #1E7A3D";

              return (
                <div key={cat} id={cat} style={{ scrollMarginTop: 100 }}>
                  {/* Kategori başlığı */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      marginBottom: 24,
                      paddingBottom: 20,
                      borderBottom: "2px solid rgba(22,19,14,0.15)",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: accent.circle,
                        color: "#FBF4E6",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: 18,
                      }}
                    >
                      {(catIndex + 1).toString().padStart(2, "0")}
                    </span>
                    <h2
                      style={{
                        margin: 0,
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "clamp(26px, 4vw, 42px)",
                        letterSpacing: "0.02em",
                        textTransform: "uppercase",
                        color: "#16130E",
                      }}
                    >
                      {categoryLabels[cat]}
                    </h2>
                  </div>

                  {/* Marka kartları */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                      gap: 20,
                    }}
                  >
                    {catBrands.map((brand) => (
                      <div
                        key={brand.name}
                        className="kz-service-card"
                        style={{
                          border: "2px solid #16130E",
                          borderRadius: 16,
                          background: "#ffffff",
                          padding: "28px 26px",
                          boxShadow: shadow,
                        }}
                      >
                        <h3
                          style={{
                            margin: 0,
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontSize: 28,
                            letterSpacing: "0.02em",
                            textTransform: "uppercase",
                            color: "#16130E",
                          }}
                        >
                          {brand.name}
                        </h3>
                        <p
                          style={{
                            margin: "10px 0 0",
                            fontSize: 15,
                            lineHeight: 1.65,
                            color: "rgba(22,19,14,0.65)",
                          }}
                        >
                          {brand.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p
            style={{
              maxWidth: 1100,
              margin: "52px auto 0",
              paddingTop: 28,
              borderTop: "2px solid rgba(22,19,14,0.15)",
              textAlign: "center",
              fontFamily: "var(--font-body)",
              fontSize: 15,
              lineHeight: 1.65,
              color: "rgba(22,19,14,0.55)",
            }}
          >
            Marka portföyümüz sürekli genişliyor. Etkinliğinize özel kombinasyon ve paket bilgisi için bizimle iletişime geçin.
          </p>
        </section>

        <CtaBand heading="Etkinliğinize uygun markalar için teklif alın" />
      </main>
      <Footer variant="compact" />
    </>
  );
}
