export default function Marquee() {
  const text =
    "Tek Sözleşme  ◆  Tek Muhatap  ◆  Tek Operasyon Ekibi  ◆  Festival  ◆  Konser  ◆  Kurumsal  ◆  Döner  ◆  Burger  ◆  Kahve  ◆  Dondurma  ◆  Meyve Suyu  ◆  ";

  return (
    <div
      style={{
        background: "#1E7A3D",
        overflow: "hidden",
        padding: "14px 0",
        borderTop: "3px solid #16130E",
        borderBottom: "3px solid #16130E",
      }}
      aria-hidden="true"
    >
      <div className="kz-marquee-track">
        <span
          style={{
            display: "block",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FBF4E6",
          }}
        >
          {text}
          {text}
        </span>
        <span
          style={{
            display: "block",
            whiteSpace: "nowrap",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FBF4E6",
          }}
        >
          {text}
          {text}
        </span>
      </div>
    </div>
  );
}
