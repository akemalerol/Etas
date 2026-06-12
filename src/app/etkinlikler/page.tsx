import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CtaBand from "@/components/sections/CtaBand";
import {
  events,
  type BadgeType,
  type EventCategory,
  categoryLabels,
  categoryColors,
} from "@/content/events";

export const metadata: Metadata = {
  title: "Etkinlikler",
  description:
    "Közbaşı'nın 2026 etkinlik takvimi. Festival, konser, stand ve özel günlerde nerede olduğumuzu görün.",
};

function CategoryBadge({ category }: { category: EventCategory }) {
  const color = categoryColors[category];
  const label = categoryLabels[category];
  return (
    <span
      style={{
        fontFamily: "var(--font-utility)",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color,
        border: `1px solid ${color}50`,
        background: `${color}18`,
        borderRadius: 4,
        padding: "3px 8px",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

function StatusBadge({ type }: { type: BadgeType }) {
  if (type === "sahnedeyiz") {
    return (
      <span
        style={{
          fontFamily: "var(--font-utility)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#22C55E",
          border: "1px solid rgba(34,197,94,0.4)",
          background: "rgba(34,197,94,0.1)",
          borderRadius: 8,
          padding: "8px 14px",
          whiteSpace: "nowrap",
        }}
      >
        Katılıyoruz
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
              Yaz 2026 · Etkinlik takvimi
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
              Festival, konser, stand ve özel günlerde bu yaz neredeyiz — tam liste.
            </p>

            {/* Kategori göstergesi */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 24,
              }}
            >
              {(
                ["festival", "konser", "stand", "ozel-gun"] as EventCategory[]
              ).map((cat) => (
                <CategoryBadge key={cat} category={cat} />
              ))}
            </div>
          </div>
        </section>

        {/* Etkinlik listesi */}
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
                      color: categoryColors[ev.category],
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
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 8,
                      }}
                    >
                      <CategoryBadge category={ev.category} />
                    </div>
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
                  <StatusBadge type={ev.badge} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <CtaBand
          heading="Etkinliğinize bizi çağırın"
          subtext="Festival, konser, kurumsal — takvimde yerinizi ayırtın"
        />
      </main>
      <Footer variant="light" />
    </>
  );
}
