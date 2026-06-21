import Link from "next/link";

export default function HeroFoto() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: 680,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background:
          "radial-gradient(120% 95% at 72% 28%, #3a1712 0%, #1c0e0a 52%, #16130E 100%)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(52% 44% at 74% 80%, rgba(224,30,38,0.4), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 48px",
          }}
        >
          {/* Eyebrow pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "#1E7A3D",
              padding: "8px 16px",
              borderRadius: 999,
              marginBottom: 28,
              animation: "kz-fade 0.4s ease-out both",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#FBF4E6",
                display: "block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#FBF4E6",
              }}
            >
              Event Solutions · İstanbul
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(52px, 9vw, 120px)",
              lineHeight: 0.92,
              letterSpacing: "0.005em",
              textTransform: "uppercase",
              color: "#FBF4E6",
            }}
          >
            <span style={{ display: "block", overflow: "hidden" }}>
              <span
                style={{
                  display: "block",
                  animation: "kz-rise 0.6s cubic-bezier(0,0,0.2,1) 0.08s both",
                }}
              >
                Tek
              </span>
            </span>
            <span style={{ display: "block", overflow: "hidden" }}>
              <span
                style={{
                  display: "block",
                  animation: "kz-rise 0.6s cubic-bezier(0,0,0.2,1) 0.16s both",
                  color: "#36A85A",
                }}
              >
                Muhatap
              </span>
            </span>
          </h1>

          {/* Tagline band */}
          <div
            style={{
              marginTop: 28,
              animation: "kz-fade 0.4s ease-out 0.38s both",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: "clamp(14px, 2vw, 18px)",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#E01E26",
              }}
            >
              Döner &nbsp;·&nbsp; Burger &nbsp;·&nbsp; Kahve &nbsp;·&nbsp; Dondurma &nbsp;·&nbsp; Meyve Suyu &nbsp;·&nbsp; Atıştırmalık
            </p>
            <div
              style={{
                marginTop: 10,
                width: 56,
                height: 3,
                background: "#E01E26",
                borderRadius: 2,
              }}
            />
          </div>

          <p
            style={{
              margin: "24px 0 0",
              maxWidth: 540,
              fontSize: 18,
              lineHeight: 1.65,
              color: "rgba(251,244,230,0.9)",
              animation: "kz-fade 0.4s ease-out 0.5s both",
            }}
          >
            Festival, konser ve kurumsal etkinliklerde yiyecek-içecek operasyonunu planlıyor, kuruyor ve yönetiyoruz. Siz etkinliğinize odaklanırken, biz ziyaretçilerinize sorunsuz hizmet sunuyoruz.
          </p>

          {/* Güven cümlesi */}
          <p
            style={{
              margin: "16px 0 0",
              maxWidth: 440,
              fontFamily: "var(--font-display)",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "rgba(251,244,230,0.55)",
              animation: "kz-fade 0.4s ease-out 0.58s both",
            }}
          >
            Tek sözleşme &nbsp;·&nbsp; Tek muhatap &nbsp;·&nbsp; Tek operasyon ekibi
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginTop: 38,
              animation: "kz-fade 0.4s ease-out 0.68s both",
            }}
          >
            <Link
              href="/iletisim"
              className="kz-btn-green"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: 52,
                padding: "15px 32px",
                background: "#1E7A3D",
                color: "#FBF4E6",
                borderRadius: 999,
                fontFamily: "var(--font-display)",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Teklif Al
            </Link>
            <Link
              href="/menu"
              className="kz-btn-cream"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: 52,
                padding: "15px 32px",
                background: "#FBF4E6",
                color: "#16130E",
                borderRadius: 999,
                fontFamily: "var(--font-display)",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Markalarımız
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
