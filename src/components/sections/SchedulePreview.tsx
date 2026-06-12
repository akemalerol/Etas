import Link from "next/link";
import { events } from "@/content/events";

export default function SchedulePreview() {
  const preview = events.slice(0, 3);

  return (
    <section
      style={{
        background: "#16120F",
        padding: "104px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 64px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <div>
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
              Yaz 2026
            </p>
            <h2
              style={{
                margin: "14px 0 0",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(32px, 4.5vw, 48px)",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                color: "#F2E8DC",
              }}
            >
              Etkinlik Takvimi
            </h2>
          </div>
          <Link
            href="/etkinlikler"
            className="kz-nav-link"
            style={{
              fontFamily: "var(--font-utility)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#9C7A4B",
              textDecoration: "none",
              padding: "8px 0",
            }}
          >
            Tümünü gör →
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            marginTop: 44,
          }}
        >
          {preview.map((ev) => (
            <Link
              key={ev.title}
              href="/etkinlikler"
              className="kz-card"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
                border: "1px solid rgba(242,232,220,0.12)",
                borderRadius: 8,
                background: "#2A211B",
                padding: "22px 28px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 64,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-utility)",
                    fontVariantNumeric: "tabular-nums",
                    fontSize: 32,
                    fontWeight: 700,
                    lineHeight: 1,
                    color: "#DC2626",
                  }}
                >
                  {ev.day}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-utility)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    color: "#9C7A4B",
                    marginTop: 4,
                  }}
                >
                  {ev.monthShort}
                </span>
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    letterSpacing: "0.01em",
                    textTransform: "uppercase",
                    color: "#F2E8DC",
                  }}
                >
                  {ev.title}
                </p>
                <p
                  style={{
                    margin: "6px 0 0",
                    fontFamily: "var(--font-utility)",
                    fontSize: 13,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(242,232,220,0.55)",
                  }}
                >
                  {ev.location}
                </p>
              </div>

              <span style={{ fontSize: 20, color: "#9C7A4B" }}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
