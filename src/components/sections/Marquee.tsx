const TEXT =
  "Yerinde kesim  •  Festival  •  Konser  •  Özel gün  •  Kurumsal  •  ";

export default function Marquee() {
  return (
    <div
      style={{
        background: "#DC2626",
        overflow: "hidden",
        padding: "13px 0",
      }}
      aria-hidden="true"
    >
      <div className="kz-marquee-track">
        <span
          style={{
            display: "block",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-display)",
            fontSize: 17,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#16120F",
          }}
        >
          {TEXT}
          {TEXT}
        </span>
        <span
          style={{
            display: "block",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-display)",
            fontSize: 17,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#16120F",
          }}
        >
          {TEXT}
          {TEXT}
        </span>
      </div>
    </div>
  );
}
