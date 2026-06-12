import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CtaBand from "@/components/sections/CtaBand";
import { events, type BadgeType } from "@/content/events";

export const metadata: Metadata = {
  title: "Etkinlikler",
  description:
    "Közbaşı'nın 2026 sahne takvimi. Festival, konser ve etkinliklerde nerede olduğumuzu görün.",
};

function Badge({ type }: { type: BadgeType }) {
  if (type === "sahnedeyiz") {
    return (
      <span
        style={{
          fontFamily: "var(--font-utility)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#FFB23E",
          border: "1px solid rgba(255,178,62,0.4)",
          background: "rgba(255,178,62,0.1)",
          borderRadius: 8,
          padding: "8px 14px",
          whiteSpace: "nowrap",
        }}
      >
        Sahnedeyiz
      </span>
    );
  }
  if (type === "dolu") {
    return (
      <span
        style={{
          fontFamily: "var(--font-utility)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(242,232,220,0.45)",
          border: "1px solid rgba(242,232,220,0.2)",
          borderRadius: 8,
          padding: "8px 14px",
          whiteSpace: "nowrap",
        }}
      >
        Kontenjan dolu
      </span>
    );
  }
  return (
    <span
      style={{
        fontFamily: "var(--font-utility)",
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "rgba(242,232,220,0.45)",
        border: "1px solid rgba(242,232,220,0.2)",
        borderRadius: 8,
        padding: "8px 14px",
        whiteSpace: "nowrap",
      }}
    >
      Özel etkinlik
    </span>
  );
}

export default function EtkinliklerPage() {
  return (
    <>
      <Header activePage="etkinlikler" />
      <main style={{ background: "#16120F", color: "#F2E8DC" }}>
        {/* Başlık */}
        <section style={{ padding: "88px 64px 16px" }}>
          <div style={{ maxWidth: 980, margin: "0 auto" }}>
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
              Yaz 2026 · Sahne takvimi
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
              Etkinlikler
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
              Bu yaz standın kurulacağı sahneler. Koçanı kapan, közün önünde
              buluşuruz.
            </p>
          </div>
        </section>

        {/* Bilet koçanları */}
        <section style={{ padding: "48px 64px 96px" }}>
          <div
            style={{
              maxWidth: 980,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {events.map((ev) => (
              <div
                key={ev.title}
                className="kz-card"
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  border: "1px solid rgba(242,232,220,0.12)",
                  borderRadius: 8,
                  background: "#2A211B",
                  overflow: "hidden",
                }}
              >
                {/* Tarih kolonu */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 4,
                    width: 116,
                    flexShrink: 0,
                    background: "#211A14",
                    padding: "26px 0",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-utility)",
                      fontVariantNumeric: "tabular-nums",
                      fontSize: 40,
                      fontWeight: 700,
                      lineHeight: 1,
                      color: "#FF4D1C",
                    }}
                  >
                    {ev.day}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-utility)",
                      fontSize: 12,
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      color: "#9C7A4B",
                    }}
                  >
                    {ev.month}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-utility)",
                      fontVariantNumeric: "tabular-nums",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      color: "rgba(242,232,220,0.4)",
                    }}
                  >
                    {ev.year}
                  </span>
                </div>

                {/* Perforasyon */}
                <div
                  style={{
                    width: 18,
                    flexShrink: 0,
                    backgroundImage:
                      "radial-gradient(circle, #16120F 3.5px, transparent 4px)",
                    backgroundSize: "18px 18px",
                    backgroundRepeat: "repeat-y",
                    backgroundPosition: "center",
                  }}
                  aria-hidden="true"
                />

                {/* İçerik */}
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                    padding: "24px 28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 24,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        margin: 0,
                        fontFamily: "var(--font-display)",
                        fontSize: 26,
                        letterSpacing: "0.01em",
                        textTransform: "uppercase",
                        color: "#F2E8DC",
                      }}
                    >
                      {ev.title}
                    </h2>
                    <p
                      style={{
                        margin: "8px 0 0",
                        fontFamily: "var(--font-utility)",
                        fontSize: 13,
                        fontWeight: 500,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "rgba(242,232,220,0.55)",
                      }}
                    >
                      {ev.location}
                    </p>
                    <p
                      style={{
                        margin: "6px 0 0",
                        fontFamily: "var(--font-utility)",
                        fontSize: 12,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#9C7A4B",
                      }}
                    >
                      {ev.standType}
                    </p>
                  </div>
                  <Badge type={ev.badge} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBand
          heading="Sahnenize bizi çağırın"
          subtext="Festival, konser, kurumsal — takvimde yerinizi ayırtın"
        />
      </main>
      <Footer variant="light" />
    </>
  );
}
