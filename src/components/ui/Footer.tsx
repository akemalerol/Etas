import Link from "next/link";
import { siteConfig } from "@/content/site";

type FooterProps = {
  variant?: "home" | "compact";
};

const Logo = ({ size = 38 }: { size?: number }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
    <span
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "50%",
        background: "#E01E26",
        border: "2.5px solid #36A85A",
        color: "#FBF4E6",
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: size * 0.53,
        lineHeight: 1,
      }}
    >
      E
    </span>
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: size * 0.68,
        letterSpacing: "0.04em",
        textTransform: "uppercase" as const,
        color: "#FBF4E6",
      }}
    >
      {siteConfig.name}
    </span>
  </div>
);

const BottomBar = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap" as const,
      borderTop: "1px solid rgba(251,244,230,0.16)",
      paddingTop: 20,
    }}
  >
    <p
      style={{
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: 13,
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
        color: "rgba(251,244,230,0.5)",
      }}
    >
      {siteConfig.copyright}
    </p>
    <p
      style={{
        margin: 0,
        fontFamily: "var(--font-display)",
        fontSize: 13,
        letterSpacing: "0.1em",
        textTransform: "uppercase" as const,
        color: "rgba(251,244,230,0.5)",
      }}
    >
      Her festivalde sahnede
    </p>
  </div>
);

export default function Footer({ variant = "compact" }: FooterProps) {
  return (
    <footer style={{ background: "#16130E", color: "#FBF4E6", padding: "0 0 28px" }}>
      {variant === "home" && <div className="kz-awning" />}

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: variant === "home" ? "68px 48px 0" : "56px 48px 0",
        }}
      >
        {variant === "home" ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 48,
              marginBottom: 56,
            }}
          >
            {/* Brand kolonu */}
            <div>
              <Logo size={40} />
              <p
                style={{
                  margin: "16px 0 0",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(251,244,230,0.65)",
                  maxWidth: 280,
                }}
              >
                Festival gastronomi markası. Yerinde kesim ve stand kurulumu.
              </p>
            </div>

            {/* Sayfalar kolonu */}
            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#36A85A",
                }}
              >
                Sayfalar
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}
              >
                {[
                  { href: "/menu", label: "Menü" },
                  { href: "/etkinlikler", label: "Etkinlikler" },
                  { href: "/iletisim", label: "İletişim" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: "#FBF4E6",
                      textDecoration: "none",
                      transition: "color 150ms ease-out",
                    }}
                    className="kz-nav-link"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* İletişim kolonu */}
            <div>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#36A85A",
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
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  fontVariantNumeric: "tabular-nums",
                  color: "rgba(251,244,230,0.82)",
                }}
              >
                <a href={siteConfig.phoneHref} style={{ color: "rgba(251,244,230,0.82)", textDecoration: "none" }} className="kz-nav-link">
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} style={{ color: "rgba(251,244,230,0.82)", textDecoration: "none" }} className="kz-nav-link">
                  {siteConfig.email}
                </a>
                <span>{siteConfig.instagram}</span>
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
              marginBottom: 36,
            }}
          >
            <Logo size={38} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 26,
                flexWrap: "wrap",
                fontFamily: "var(--font-body)",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "0.02em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <a href={siteConfig.phoneHref} style={{ color: "rgba(251,244,230,0.82)", textDecoration: "none" }} className="kz-nav-link">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} style={{ color: "rgba(251,244,230,0.82)", textDecoration: "none" }} className="kz-nav-link">
                {siteConfig.email}
              </a>
              <span style={{ color: "rgba(251,244,230,0.55)" }}>Bomonti · İstanbul</span>
            </div>
          </div>
        )}

        <BottomBar />
      </div>
    </footer>
  );
}
