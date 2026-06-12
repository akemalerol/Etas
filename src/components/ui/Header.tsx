import Link from "next/link";
import { siteConfig } from "@/content/site";

type HeaderProps = {
  activePage?: "menu" | "etkinlikler" | "iletisim";
};

const navItems = [
  { href: "/menu", label: "Menü", key: "menu" },
  { href: "/etkinlikler", label: "Etkinlikler", key: "etkinlikler" },
  { href: "/iletisim", label: "İletişim", key: "iletisim" },
] as const;

export default function Header({ activePage }: HeaderProps) {
  return (
    <header
      style={{
        position: "relative",
        zIndex: 5,
        background: "#16120F",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "22px 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 24,
            letterSpacing: "0.02em",
            color: "#F2E8DC",
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.name}
          <span style={{ color: "#FF4D1C" }}>.</span>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="kz-nav-link"
              style={{
                fontFamily: "var(--font-utility)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color:
                  activePage === item.key
                    ? "#FFB23E"
                    : "rgba(242,232,220,0.75)",
                textDecoration: "none",
                padding: "8px 0",
              }}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/iletisim"
            className="kz-btn-ember"
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: 44,
              padding: "10px 22px",
              background: "#FF4D1C",
              color: "#16120F",
              borderRadius: 8,
              fontFamily: "var(--font-utility)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Teklif Al
          </Link>
        </nav>
      </div>
    </header>
  );
}
