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
    body: "Usta ve bıçak etkinlikte. Kesim anı etkinliğin kendisi olur — kalabalık standın önünde toplanır.",
  },
];

export default function ServicesSection() {
  return (
    <section
      style={{
        background: "#FBF4E6",
        color: "#16130E",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#E01E26",
          }}
        >
          Ne yapıyoruz
        </p>
        <h2
          style={{
            margin: "12px 0 0",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(36px, 5vw, 60px)",
            lineHeight: 0.98,
            letterSpacing: "0.01em",
            textTransform: "uppercase",
            color: "#16130E",
            maxWidth: 640,
          }}
        >
          Üç sahne, tek ekip
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginTop: 48,
          }}
        >
          {services.map((s) => (
            <div
              key={s.num}
              className="kz-service-card"
              style={{
                border: "2px solid #16130E",
                borderRadius: 16,
                background: "#ffffff",
                padding: "32px 28px",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "#E01E26",
                  color: "#FBF4E6",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 19,
                }}
              >
                {s.num}
              </span>
              <h3
                style={{
                  margin: "18px 0 0",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 27,
                  letterSpacing: "0.01em",
                  textTransform: "uppercase",
                  color: "#16130E",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "rgba(22,19,14,0.72)",
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
