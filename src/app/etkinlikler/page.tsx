import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CtaBand from "@/components/sections/CtaBand";
import { events, categoryLabels } from "@/content/events";

export const metadata: Metadata = {
  title: "Etkinlikler",
  description:
    "Közbaşı'nın katıldığı ve katılacağı festival, konser ve özel günler. 2026 yaz sahne takvimi.",
};

const badgeConfig = {
  sahnedeyiz: {
    label: "Sahnedeyiz",
    bg: "#1E7A3D",
    color: "#FBF4E6",
    border: "none",
  },
  ozel: {
    label: "Özel etkinlik",
    bg: "transparent",
    color: "#1E7A3D",
    border: "2px solid #1E7A3D",
  },
  dolu: {
    label: "Kontenjan dolu",
    bg: "transparent",
    color: "rgba(22,19,14,0.45)",
    border: "2px solid rgba(22,19,14,0.3)",
  },
} as const;

export default function EtkinliklerPage() {
  return (
    <>
      <Header activePage="etkinlikler" />
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
              Yaz 2026 · Sahne Takvimi
            </p>
            <h1
              style={{
                margin: "16px 0 0",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(60px, 11vw, 140px)",
                lineHeight: 0.88,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "#FBF4E6",
              }}
            >
              Etkinlikler
            </h1>
            <p
              style={{
                margin: "24px auto 0",
                maxWidth: 520,
                fontSize: 18,
                lineHeight: 1.6,
                color: "rgba(251,244,230,0.9)",
              }}
            >
              Önceki ve yaklaşan etkinliklerimiz. Sizi de sahnede görmek istiyoruz.
            </p>
          </div>
        </section>

        {/* Bilet stub listesi */}
        <section style={{ background: "#FBF4E6", padding: "72px 48px 100px" }}>
          <div
            style={{
              maxWidth: 960,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {events.map((ev) => {
              const isDolu = ev.badge === "dolu";
              const badge = badgeConfig[ev.badge];
              const catLabel = categoryLabels[ev.category];

              return (
                <article
                  key={ev.title}
                  className={isDolu ? "" : "kz-ticket-hover"}
                  style={{
                    border: "2px solid #16130E",
                    borderRadius: 16,
                    background: isDolu ? "#F3E8D2" : "#ffffff",
                    display: "grid",
                    gridTemplateColumns: "120px 1px 1fr",
                    overflow: "hidden",
                    opacity: isDolu ? 0.85 : 1,
                    transition: "transform 150ms ease-out, box-shadow 150ms ease-out",
                  }}
                >
                  {/* Date block */}
                  <div
                    style={{
                      background: isDolu ? "#8A7F6B" : "#E01E26",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "28px 16px",
                      gap: 4,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontVariantNumeric: "tabular-nums",
                        fontSize: 52,
                        lineHeight: 1,
                        color: "#FBF4E6",
                      }}
                    >
                      {ev.day}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 14,
                        fontWeight: 600,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: isDolu ? "rgba(251,244,230,0.8)" : "#36A85A",
                      }}
                    >
                      {ev.monthShort}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 12,
                        fontWeight: 500,
                        color: "rgba(251,244,230,0.65)",
                        letterSpacing: "0.05em",
                        marginTop: 2,
                      }}
                    >
                      {ev.year}
                    </span>
                  </div>

                  {/* Perforation */}
                  <div
                    style={{
                      width: 1,
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderLeft: "2px dashed rgba(22,19,14,0.25)",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      padding: "28px 32px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "rgba(22,19,14,0.5)",
                          background: "rgba(22,19,14,0.08)",
                          padding: "4px 10px",
                          borderRadius: 999,
                        }}
                      >
                        {catLabel}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: badge.color,
                          background: badge.bg,
                          border: badge.border,
                          padding: "4px 10px",
                          borderRadius: 999,
                        }}
                      >
                        {badge.label}
                      </span>
                    </div>

                    <h2
                      style={{
                        margin: 0,
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "clamp(22px, 3vw, 32px)",
                        letterSpacing: "0.01em",
                        textTransform: "uppercase",
                        color: isDolu ? "rgba(22,19,14,0.6)" : "#16130E",
                        lineHeight: 1.05,
                      }}
                    >
                      {ev.title}
                    </h2>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 24px" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          fontWeight: 500,
                          color: isDolu ? "rgba(22,19,14,0.45)" : "rgba(22,19,14,0.65)",
                        }}
                      >
                        📍 {ev.location}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          fontWeight: 500,
                          color: isDolu ? "rgba(22,19,14,0.45)" : "rgba(22,19,14,0.65)",
                        }}
                      >
                        {ev.standType}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p
            style={{
              maxWidth: 960,
              margin: "40px auto 0",
              textAlign: "center",
              fontFamily: "var(--font-body)",
              fontSize: 14,
              lineHeight: 1.6,
              color: "rgba(22,19,14,0.55)",
            }}
          >
            Katıldığımız festival ve etkinliklerin bir kısmı gizlilik anlaşması kapsamında
            listelenmeyebilir. Organizatör iseniz doğrudan iletişime geçin.
          </p>
        </section>

        <CtaBand heading="Etkinliğinize dahil olalım" subtext="Yer açığımız varsa sahneye çıkıyoruz" />
      </main>
      <Footer variant="compact" />
    </>
  );
}
