import Link from "next/link";

export default function LineupPoster() {
  return (
    <section
      style={{
        background: "#16120F",
        padding: "112px 64px",
      }}
    >
      <div
        style={{
          maxWidth: 880,
          margin: "0 auto",
          border: "1px solid rgba(156,122,75,0.45)",
          borderRadius: 8,
          background: "#1C1712",
          padding: "72px 40px 56px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-utility)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#9C7A4B",
          }}
        >
          Közbaşı sunar
        </p>

        <h2
          style={{
            margin: "26px 0 0",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 10vw, 120px)",
            lineHeight: 1,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            background: "linear-gradient(90deg, #FF4D1C, #FFB23E)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            paddingLeft: "0.16em",
          }}
        >
          Döner
        </h2>

        <p
          style={{
            margin: "24px 0 0",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(22px, 3.4vw, 34px)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#F2E8DC",
          }}
        >
          Köfte <span style={{ color: "#FF4D1C" }}>•</span> Kebap
        </p>

        <p
          style={{
            margin: "16px 0 0",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(15px, 2vw, 20px)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#9C7A4B",
          }}
        >
          Dondurma • Kahve • Fresh
        </p>

        <div
          style={{
            margin: "44px auto 0",
            maxWidth: 420,
            borderTop: "1px solid rgba(156,122,75,0.4)",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-utility)",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F2E8DC",
            }}
          >
            Her festivalde sahnede
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 880,
          margin: "20px auto 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          href="/menu"
          className="kz-nav-link"
          style={{
            fontFamily: "var(--font-utility)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#9C7A4B",
            textDecoration: "none",
            padding: "8px 4px",
          }}
        >
          Tam menüyü gör →
        </Link>
      </div>
    </section>
  );
}
