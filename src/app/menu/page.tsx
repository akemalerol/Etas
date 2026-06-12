import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CtaBand from "@/components/sections/CtaBand";
import { menuSections } from "@/content/menu";

export const metadata: Metadata = {
  title: "Menü",
  description:
    "Et döner, tavuk döner, köfte, kebap, dondurma ve kahve. Festival standı menümüz — etkinliklere özel paket fiyatlandırması.",
};

function MenuItemCard({
  name,
  description,
  tag,
  accentColor,
}: {
  name: string;
  description?: string;
  tag?: string;
  accentColor: string;
}) {
  return (
    <div
      className="kz-card"
      style={{
        background: "#1C1712",
        border: "1px solid rgba(242,232,220,0.08)",
        borderRadius: 8,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Görsel alanı — placeholder gradient */}
      <div
        style={{
          height: 200,
          background: `radial-gradient(ellipse at 40% 60%, ${accentColor}28 0%, transparent 70%), #211A14`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        {/* Dekoratif çember */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: `2px solid ${accentColor}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: `${accentColor}15`,
              border: `1px solid ${accentColor}40`,
            }}
          />
        </div>
        {/* Görsel buraya gelecek etiketi */}
        <span
          style={{
            position: "absolute",
            bottom: 10,
            right: 12,
            fontFamily: "var(--font-utility)",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(242,232,220,0.25)",
          }}
        >
          Görsel
        </span>
      </div>

      {/* İçerik */}
      <div style={{ padding: "20px 22px 24px", flex: 1 }}>
        {tag && (
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-utility)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: accentColor,
              background: `${accentColor}18`,
              border: `1px solid ${accentColor}35`,
              borderRadius: 4,
              padding: "3px 8px",
              marginBottom: 10,
            }}
          >
            {tag}
          </span>
        )}
        <h3
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontSize: 20,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#F2E8DC",
          }}
        >
          {name}
        </h3>
        {description && (
          <p
            style={{
              margin: "8px 0 0",
              fontSize: 14,
              lineHeight: 1.55,
              color: "rgba(242,232,220,0.55)",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      <Header activePage="menu" />
      <main style={{ background: "#16120F", color: "#F2E8DC" }}>
        {/* Başlık — afiş tarzı */}
        <section
          style={{
            padding: "96px 64px 64px",
            textAlign: "center",
            borderBottom: "1px solid rgba(242,232,220,0.08)",
          }}
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              border: "1px solid rgba(156,122,75,0.35)",
              borderRadius: 8,
              background: "#1C1712",
              padding: "56px 40px 44px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-utility)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#9C7A4B",
              }}
            >
              Közbaşı sunar
            </p>

            {/* Afiş hiyerarşisi */}
            <h1
              style={{
                margin: "20px 0 0",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(64px, 12vw, 120px)",
                lineHeight: 1,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                background: "linear-gradient(90deg, #DC2626, #22C55E)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                paddingLeft: "0.14em",
              }}
            >
              Döner
            </h1>

            <p
              style={{
                margin: "16px 0 0",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(22px, 3vw, 32px)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#F2E8DC",
              }}
            >
              Köfte <span style={{ color: "#DC2626" }}>•</span> Kebap
            </p>

            <p
              style={{
                margin: "12px 0 0",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(14px, 1.8vw, 18px)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#9C7A4B",
              }}
            >
              Dondurma • Kahve
            </p>

            <div
              style={{
                margin: "32px auto 0",
                maxWidth: 380,
                borderTop: "1px solid rgba(156,122,75,0.35)",
                paddingTop: 20,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "rgba(242,232,220,0.6)",
                }}
              >
                Fiyatlar etkinliğe göre paket olarak teklif edilir.
                Aşağıdaki ürünler standlarımızda sunulan seçeneklerdir.
              </p>
            </div>
          </div>
        </section>

        {/* Menü grid */}
        {menuSections.map((section) => (
          <section
            key={section.tag}
            style={{ padding: "72px 64px" }}
          >
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
              {/* Bölüm başlığı */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 36,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-utility)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: section.color ?? "#DC2626",
                    background: `${section.color ?? "#DC2626"}18`,
                    border: `1px solid ${section.color ?? "#DC2626"}35`,
                    borderRadius: 4,
                    padding: "4px 10px",
                  }}
                >
                  {section.tag}
                </span>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px, 4vw, 44px)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#F2E8DC",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: section.title.replace(
                      /[&•]/g,
                      (m) =>
                        m === "•"
                          ? `<span style="color:${section.color ?? "#DC2626"}">•</span>`
                          : "&amp;"
                    ),
                  }}
                />
              </div>

              {/* Ürün grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: 20,
                }}
              >
                {section.items.map((item) => (
                  <MenuItemCard
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    tag={item.tag}
                    accentColor={section.color ?? "#DC2626"}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Alt not */}
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto 80px",
            padding: "0 64px",
          }}
        >
          <p
            style={{
              margin: 0,
              paddingTop: 24,
              borderTop: "1px solid rgba(242,232,220,0.12)",
              fontFamily: "var(--font-utility)",
              fontSize: 13,
              letterSpacing: "0.06em",
              color: "rgba(242,232,220,0.45)",
            }}
          >
            Ürünler standlarımızda sunulan seçeneklerdir. Festival, konser
            ve kurumsal etkinliklerde menü kişi başı paket olarak teklif
            edilir.
          </p>
        </div>

        <CtaBand heading="Etkinliğinize özel menü kuralım" />
      </main>
      <Footer variant="dark" />
    </>
  );
}
