import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function HeroFoto() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: 660,
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "#1C1712",
      }}
    >
      {/* Placeholder background: ember/flame gradient when no real photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 60% 30%, rgba(255,77,28,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(255,178,62,0.12) 0%, transparent 55%), #16120F",
        }}
        aria-hidden="true"
      />

      {/* Overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(22,18,15,0.35) 0%, rgba(22,18,15,0.55) 50%, rgba(22,18,15,0.96) 100%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "140px 64px 80px",
          }}
        >
          {/* Eyebrow */}
          <div style={{ overflow: "hidden", marginBottom: 18 }}>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-utility)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9C7A4B",
                animation: "kz-rise 0.5s cubic-bezier(0,0,0.2,1) both",
              }}
            >
              {siteConfig.tagline}
            </p>
          </div>

          {/* H1 */}
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 96px)",
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#F2E8DC",
            }}
          >
            <span style={{ display: "block", overflow: "hidden" }}>
              <span
                style={{
                  display: "block",
                  animation:
                    "kz-rise 0.6s cubic-bezier(0,0,0.2,1) 0.08s both",
                }}
              >
                Sahnede
              </span>
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              <span
                style={{
                  display: "block",
                  animation:
                    "kz-rise 0.6s cubic-bezier(0,0,0.2,1) 0.16s both",
                  background: "linear-gradient(90deg, #FF4D1C, #FFB23E)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Döner var
              </span>
            </span>
          </h1>

          {/* Body */}
          <p
            style={{
              margin: "22px 0 0",
              maxWidth: 480,
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(242,232,220,0.85)",
              animation: "kz-fade 0.4s ease-out 0.5s both",
            }}
          >
            {siteConfig.description}
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginTop: 34,
              animation: "kz-fade 0.4s ease-out 0.65s both",
            }}
          >
            <Link
              href="/iletisim"
              className="kz-btn-ember"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: 48,
                padding: "14px 30px",
                background: "#FF4D1C",
                color: "#16120F",
                borderRadius: 8,
                fontFamily: "var(--font-utility)",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Teklif Al
            </Link>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="kz-btn-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: 48,
                padding: "14px 30px",
                background: "transparent",
                border: "1px solid rgba(242,232,220,0.5)",
                color: "#F2E8DC",
                borderRadius: 8,
                fontFamily: "var(--font-utility)",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
