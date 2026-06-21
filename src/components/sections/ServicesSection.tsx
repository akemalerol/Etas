const services = [
  {
    num: "01",
    title: "Hazır ve Güçlü Markalar",
    body: "Tüketici tarafından bilinen ve talep gören markaları tek çatı altında sunuyoruz. Ayrı ayrı marka arayışına gerek yok.",
    accent: "#E01E26",
  },
  {
    num: "02",
    title: "Operasyon Yönetimi",
    body: "Stand kurulumu, personel planlaması, stok yönetimi ve saha koordinasyonu tamamen bizim tarafımızdan yürütülür.",
    accent: "#1E7A3D",
  },
  {
    num: "03",
    title: "Tek Muhatap Avantajı",
    body: "Birden fazla marka ve tedarikçiyle ayrı ayrı görüşmek yerine tüm süreci tek ekip üzerinden yönetebilirsiniz.",
    accent: "#E01E26",
  },
  {
    num: "04",
    title: "Ölçeklenebilir Yapı",
    body: "1.000 kişilik kurumsal organizasyonlardan on binlerce ziyaretçiyi ağırlayan festivallere kadar farklı ölçeklerde çözüm üretiyoruz.",
    accent: "#1E7A3D",
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
          Neden ETASAS
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
            maxWidth: 700,
          }}
        >
          Başarılı etkinlik yalnızca sahneden ibaret değil
        </h2>
        <p
          style={{
            margin: "18px 0 0",
            maxWidth: 520,
            fontSize: 17,
            lineHeight: 1.65,
            color: "rgba(22,19,14,0.7)",
          }}
        >
          Katılımcı deneyiminin en önemli parçalarından biri yiyecek-içecek alanıdır. Doğru marka, doğru operasyon, doğru planlama — ziyaretçi memnuniyetini artırırken organizasyon ekibinin iş yükünü azaltıyoruz.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            marginTop: 56,
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
                  background: s.accent,
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
                  fontSize: 24,
                  letterSpacing: "0.01em",
                  textTransform: "uppercase",
                  color: "#16130E",
                  lineHeight: 1.1,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  margin: "12px 0 0",
                  fontSize: 15,
                  lineHeight: 1.65,
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
