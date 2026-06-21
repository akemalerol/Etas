import { brands, categoryLabels, type BrandCategory } from "@/content/brands";
import Link from "next/link";

const categoryOrder: BrandCategory[] = [
  "doner-burger",
  "kahve",
  "dondurma",
  "meyve-suyu",
  "cikolata",
];

const categoryAccents: Record<BrandCategory, string> = {
  "doner-burger": "#E01E26",
  kahve: "#1E7A3D",
  dondurma: "#E01E26",
  "meyve-suyu": "#1E7A3D",
  cikolata: "#E01E26",
};

export default function BrandsSection() {
  const grouped = brands.reduce<Partial<Record<BrandCategory, typeof brands>>>(
    (acc, b) => {
      if (!acc[b.category]) acc[b.category] = [];
      acc[b.category]!.push(b);
      return acc;
    },
    {}
  );

  return (
    <section style={{ background: "#16130E", padding: "100px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: 52,
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#36A85A",
              }}
            >
              Marka portföyü
            </p>
            <h2
              style={{
                margin: "12px 0 0",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 60px)",
                lineHeight: 0.98,
                letterSpacing: "0.01em",
                textTransform: "uppercase",
                color: "#FBF4E6",
              }}
            >
              Etkinliğinizde yer almaya hazır markalar
            </h2>
          </div>
          <Link
            href="/menu"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#36A85A",
              textDecoration: "none",
            }}
            className="kz-nav-link"
          >
            Tüm portföy →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {categoryOrder.map((cat) => {
            const catBrands = grouped[cat];
            if (!catBrands) return null;
            const accent = categoryAccents[cat];
            return (
              <div
                key={cat}
                style={{
                  border: "2px solid rgba(251,244,230,0.12)",
                  borderRadius: 16,
                  background: "#211A14",
                  padding: "28px 26px",
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
                    color: accent,
                  }}
                >
                  {categoryLabels[cat]}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                    marginTop: 16,
                  }}
                >
                  {catBrands.map((brand) => (
                    <div
                      key={brand.name}
                      style={{
                        paddingBottom: 14,
                        borderBottom: "1px solid rgba(251,244,230,0.08)",
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: 20,
                          letterSpacing: "0.02em",
                          textTransform: "uppercase",
                          color: "#FBF4E6",
                        }}
                      >
                        {brand.name}
                      </p>
                      <p
                        style={{
                          margin: "5px 0 0",
                          fontFamily: "var(--font-body)",
                          fontSize: 13,
                          lineHeight: 1.5,
                          color: "rgba(251,244,230,0.55)",
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
      </div>
    </section>
  );
}
