import Link from "next/link";
import { events } from "@/content/events";

export default function SchedulePreview() {
  const preview = events.slice(0, 3);

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
              Yaz 2026
            </p>
            <h2
              style={{
                margin: "12px 0 0",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(36px, 5vw, 60px)",
                letterSpacing: "0.01em",
                textTransform: "uppercase",
                color: "#FBF4E6",
              }}
            >
              Sahne takvimi
            </h2>
          </div>
          <Link
            href="/etkinlikler"
            className="kz-nav-link"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#36A85A",
              textDecoration: "none",
              padding: "8px 0",
            }}
          >
            Tümünü gör →
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 44 }}>
          {preview.map((ev) => (
            <Link
              key={ev.title}
              href="/etkinlikler"
              className="kz-event-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 26,
                border: "2px solid rgba(251,244,230,0.16)",
                borderRadius: 14,
                background: "#211A14",
                padding: "22px 28px",
                textDecoration: "none",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 64 }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontVariantNumeric: "tabular-nums",
                    fontSize: 36,
                    lineHeight: 1,
                    color: "#E01E26",
                  }}
                >
                  {ev.day}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    color: "#36A85A",
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
                    fontWeight: 700,
                    fontSize: 24,
                    letterSpacing: "0.01em",
                    textTransform: "uppercase",
                    color: "#FBF4E6",
                  }}
                >
                  {ev.title}
                </p>
                <p
                  style={{
                    margin: "5px 0 0",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    color: "rgba(251,244,230,0.6)",
                  }}
                >
                  {ev.location}
                </p>
              </div>

              <span style={{ fontSize: 22, color: "#36A85A" }}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
