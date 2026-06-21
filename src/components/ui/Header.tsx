import Link from "next/link";
import { siteConfig } from "@/content/site";

type HeaderProps = {
  activePage?: "menu" | "etkinlikler" | "iletisim" | "hakkimizda";
};

const navItems = [
  { href: "/menu", label: "Markalar", key: "menu" },
  { href: "/etkinlikler", label: "Etkinlikler", key: "etkinlikler" },
  { href: "/iletisim", label: "İletişim", key: "iletisim" },
] as const;

export default function Header({ activePage }: HeaderProps) {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40 }}>
      {/* Awning stripe */}
      <div className="kz-awning" />

      {/* Red nav bar */}
      <div
        style={{
          background: "#E01E26",
          boxShadow: "0 2px 0 rgba(22,19,14,0.18)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "14px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "#FBF4E6",
                border: "2.5px solid #1E7A3D",
                color: "#E01E26",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 22,
                lineHeight: 1,
              }}
            >
              E
            </span>
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 23,
                  letterSpacing: "0.05em",
                  color: "#FBF4E6",
                  textTransform: "uppercase",
                }}
              >
                {siteConfig.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 9,
                  fontWeight: 600,
                  letterSpacing: "0.34em",
                  textTransform: "uppercase",
                  color: "rgba(251,244,230,0.75)",
                  marginTop: 3,
                }}
              >
                Event Solutions
              </span>
            </span>
          </Link>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 26 }}>
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`kz-nav-link${activePage === item.key ? " kz-nav-link-active" : ""}`}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: activePage === item.key ? "#FBF4E6" : "rgba(251,244,230,0.88)",
                  textDecoration: "none",
                  padding: "6px 0",
                }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/iletisim"
              className="kz-btn-green"
              style={{
                display: "inline-flex",
                alignItems: "center",
                minHeight: 44,
                padding: "9px 22px",
                background: "#1E7A3D",
                color: "#FBF4E6",
                borderRadius: 999,
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Teklif Al
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
