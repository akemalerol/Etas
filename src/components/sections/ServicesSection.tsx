const services = [
  {
    num: "01",
    title: "Festival & Konser",
    body: "Yüksek hacim, hızlı servis. Saatte 600 porsiyon kapasiteli çift stand kurulumu, kendi jeneratörümüzle.",
  },
  {
    num: "02",
    title: "Kurumsal & Özel Gün",
    body: "Lansman, düğün, after-party. Menü etkinliğe göre kurgulanır; servis ekibi ve sunum bize ait.",
  },
  {
    num: "03",
    title: "Yerinde Kesim Şov",
    body: "Usta, köz ve bıçak sahnede. Kesim anı etkinliğin kendisi olur — kalabalık standın önünde toplanır.",
  },
];

export default function ServicesSection() {
  return (
    <section
      style={{
        background: "#F2E8DC",
        color: "#16120F",
        padding: "104px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 64px",
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
            color: "#9C7A4B",
          }}
        >
          Ne yapıyoruz
        </p>
        <h2
          style={{
            margin: "14px 0 0",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4.5vw, 48px)",
            lineHeight: 1.06,
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            color: "#16120F",
            maxWidth: 620,
          }}
        >
          Üç sahne, tek ekip
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginTop: 52,
          }}
        >
          {services.map((s) => (
            <div
              key={s.num}
              className="kz-card"
              style={{
                border: "1px solid rgba(22,18,15,0.18)",
                borderRadius: 8,
                background: "rgba(255,250,243,0.6)",
                padding: "32px 28px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-utility)",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#9C7A4B",
                }}
              >
                {s.num}
              </p>
              <h3
                style={{
                  margin: "16px 0 0",
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  letterSpacing: "0.01em",
                  textTransform: "uppercase",
                  color: "#16120F",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "rgba(22,18,15,0.75)",
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
