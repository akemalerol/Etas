import Link from "next/link";
import { siteConfig } from "@/content/site";

type FooterVariant = "light" | "dark";

type FooterProps = {
  variant?: FooterVariant;
};

export default function Footer({ variant = "light" }: FooterProps) {
  const isLight = variant === "light";

  return (
    <footer
      style={{
        background: isLight ? "#F2E8DC" : "#16120F",
        color: isLight ? "#16120F" : "#F2E8DC",
        padding: "56px 0 28px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 64px",
        }}
      >
        {isLight ? (
          /* Light footer: 3-column with full nav */
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 48,
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: 30,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "#16120F",
                }}
              >
                {siteConfig.name}
                <span style={{ color: "#DC2626" }}>.</span>
              </p>
              <p
                style={{
                  margin: "14px 0 0",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(22,18,15,0.7)",
                  maxWidth: 280,
                }}
              >
                İstanbul merkezli festival gastronomi markası. Yerinde kesim ve
                stand kurulumu.
              </p>
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-utility)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#9C7A4B",
                }}
              >
                Sayfalar
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginTop: 16,
                }}
              >
                {[
                  { href: "/menu", label: "Menü" },
                  { href: "/etkinlikler", label: "Etkinlikler" },
                  { href: "/hakkimizda", label: "Hakkımızda" },
                  { href: "/iletisim", label: "İletişim" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="kz-footer-link"
                    style={{
                      fontFamily: "var(--font-utility)",
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#16120F",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-utility)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#9C7A4B",
                }}
              >
                İletişim
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  marginTop: 16,
                  fontFamily: "var(--font-utility)",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  fontVariantNumeric: "tabular-nums",
                  color: "#16120F",
                }}
              >
                <a
                  href={siteConfig.phoneHref}
                  className="kz-footer-link"
                  style={{ color: "#16120F", textDecoration: "none" }}
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="kz-footer-link"
                  style={{
                    color: "#16120F",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  {siteConfig.email}
                </a>
                <span style={{ textTransform: "uppercase" }}>
                  {siteConfig.instagram}
                </span>
                <span style={{ textTransform: "uppercase" }}>
                  Bomonti · İstanbul
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Dark footer: compact 1-row */
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: 26,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              {siteConfig.name}
              <span style={{ color: "#DC2626" }}>.</span>
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
                flexWrap: "wrap",
                fontFamily: "var(--font-utility)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <a
                href={siteConfig.phoneHref}
                className="kz-nav-link"
                style={{
                  color: "rgba(242,232,220,0.75)",
                  textDecoration: "none",
                }}
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="kz-nav-link"
                style={{
                  color: "rgba(242,232,220,0.75)",
                  textDecoration: "none",
                }}
              >
                {siteConfig.email}
              </a>
              <span style={{ color: "rgba(242,232,220,0.5)" }}>
                Bomonti · İstanbul
              </span>
            </div>
          </div>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            borderTop: `1px solid ${
              isLight ? "rgba(22,18,15,0.2)" : "rgba(242,232,220,0.15)"
            }`,
            marginTop: isLight ? 56 : 36,
            paddingTop: 20,
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-utility)",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: isLight
                ? "rgba(22,18,15,0.6)"
                : "rgba(242,232,220,0.5)",
            }}
          >
            {siteConfig.copyright}
          </p>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-utility)",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: isLight
                ? "rgba(22,18,15,0.6)"
                : "rgba(242,232,220,0.5)",
            }}
          >
            {siteConfig.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}
