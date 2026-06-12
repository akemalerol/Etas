import Link from "next/link";

type CtaBandProps = {
  heading: string;
  subtext?: string;
  buttonLabel?: string;
};

export default function CtaBand({
  heading,
  subtext,
  buttonLabel = "Teklif Al",
}: CtaBandProps) {
  return (
    <section
      style={{
        background: "linear-gradient(90deg, #FF4D1C, #FFB23E)",
        padding: "72px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "clamp(30px, 4vw, 44px)",
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              color: "#16120F",
            }}
          >
            {heading}
          </h2>
          {subtext && (
            <p
              style={{
                margin: "10px 0 0",
                fontFamily: "var(--font-utility)",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(22,18,15,0.7)",
              }}
            >
              {subtext}
            </p>
          )}
        </div>
        <Link
          href="/iletisim"
          className="kz-btn-dark"
          style={{
            display: "inline-flex",
            alignItems: "center",
            minHeight: 52,
            padding: "16px 36px",
            background: "#16120F",
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
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
