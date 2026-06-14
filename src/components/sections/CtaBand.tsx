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
        background: "#1E7A3D",
        padding: "76px 0",
        borderTop: "3px solid #16130E",
        borderBottom: "3px solid #16130E",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 48px",
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
              fontWeight: 700,
              fontSize: "clamp(32px, 4.4vw, 52px)",
              letterSpacing: "0.01em",
              textTransform: "uppercase",
              color: "#FBF4E6",
            }}
          >
            {heading}
          </h2>
          {subtext && (
            <p
              style={{
                margin: "10px 0 0",
                fontFamily: "var(--font-display)",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(251,244,230,0.82)",
              }}
            >
              {subtext}
            </p>
          )}
        </div>
        <Link
          href="/iletisim"
          className="kz-btn-cream"
          style={{
            display: "inline-flex",
            alignItems: "center",
            minHeight: 54,
            padding: "16px 38px",
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
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
