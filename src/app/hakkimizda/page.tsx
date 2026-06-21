import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import CtaBand from "@/components/sections/CtaBand";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Hakkımızda — ETASAS",
  description:
    "ETASAS Event Solutions hakkında: Festival ve etkinliklerde yiyecek-içecek operasyonu yöneten İstanbul merkezli firma. Tek muhatap, çoklu marka portföyü.",
};

const stats = [
  { value: "7+", label: "Aktif Marka" },
  { value: "120+", label: "Etkinlik" },
  { value: "8", label: "Yıl Deneyim" },
  { value: "50.000+", label: "Kapasite" },
];

const highlights = [
  "Tek sözleşme ile çoklu marka operasyonu",
  "Stand kurulumu, personel ve stok yönetimi",
  "Festival, konser, fuar ve kurumsal etkinlikler",
  "1.000 ila 50.000+ kişilik etkinlik kapasitesi",
  "Tüketici tarafından bilinen markalar",
];

export default function HakkimizdaPage() {
  return (
    <>
      <Header activePage="hakkimizda" />
      <main>
        {/* Hero */}
        <section
          style={{
            background: "#E01E26",
            color: "#FBF4E6",
            padding: "80px 48px 64px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#36A85A",
              }}
            >
              {siteConfig.tagline}
            </p>
            <h1
              style={{
                margin: "16px 0 0",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(56px, 10vw, 130px)",
                lineHeight: 0.88,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "#FBF4E6",
              }}
            >
              Hakkımızda
            </h1>
          </div>
        </section>

        {/* Ana metin */}
        <section style={{ background: "#FBF4E6", padding: "72px 48px 80px" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: 64,
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: 21,
                  lineHeight: 1.65,
                  fontWeight: 500,
                  color: "#16130E",
                }}
              >
                Başarılı bir etkinlik yalnızca sahneden ibaret değildir. Katılımcı deneyiminin en önemli parçalarından biri yiyecek-içecek alanıdır.
              </p>
              <p
                style={{
                  margin: "22px 0 0",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "rgba(22,19,14,0.7)",
                }}
              >
                ETASAS Event Solutions olarak festival, konser, fuar ve kurumsal etkinliklerde ihtiyaç duyduğunuz yiyecek-içecek markalarını tek noktadan organize ediyoruz.
              </p>
              <p
                style={{
                  margin: "18px 0 0",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "rgba(22,19,14,0.7)",
                }}
              >
                Döner, dürüm, hamburger, kahve, dondurma, meyve suyu ve atıştırmalık kategorilerindeki çözüm ortaklarımızla etkinliğinizin yiyecek-içecek operasyonunu planlıyor, kuruyor ve yönetiyoruz.
              </p>
              <p
                style={{
                  margin: "18px 0 0",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "rgba(22,19,14,0.7)",
                }}
              >
                Siz etkinliğinize odaklanırken, biz ziyaretçilerinize kaliteli ürün ve sorunsuz hizmet sunulmasını sağlıyoruz.
              </p>
            </div>

            {/* Öne çıkanlar kutusu */}
            <div
              style={{
                background: "#ffffff",
                border: "2px solid #16130E",
                borderRadius: 18,
                padding: "36px 32px",
                boxShadow: "10px 10px 0 #1E7A3D",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(22,19,14,0.5)",
                }}
              >
                Kısaca ETASAS
              </p>
              <ul
                style={{
                  margin: "22px 0 0",
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {highlights.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 14,
                      fontSize: 15,
                      lineHeight: 1.55,
                      color: "rgba(22,19,14,0.82)",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        marginTop: 5,
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#E01E26",
                        display: "block",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section
          style={{
            background: "#E01E26",
            padding: "72px 48px",
            borderTop: "3px solid #16130E",
            borderBottom: "3px solid #16130E",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  borderLeft: "3px solid rgba(251,244,230,0.35)",
                  paddingLeft: 22,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontVariantNumeric: "tabular-nums",
                    fontSize: "clamp(36px, 4.5vw, 58px)",
                    lineHeight: 0.95,
                    color: "#FBF4E6",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    margin: "10px 0 0",
                    fontFamily: "var(--font-display)",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(251,244,230,0.8)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Nasıl çalışıyoruz */}
        <section style={{ background: "#16130E", padding: "80px 48px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#36A85A",
              }}
            >
              Organizatörün derdi
            </p>
            <h2
              style={{
                margin: "12px 0 0",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(30px, 4.5vw, 52px)",
                lineHeight: 1,
                letterSpacing: "0.01em",
                textTransform: "uppercase",
                color: "#FBF4E6",
                maxWidth: 680,
              }}
            >
              Etkinlik sorunsuz geçecek mi?
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
                marginTop: 44,
              }}
            >
              {[
                { q: "Sorun çıkaracak mısınız?", a: "Stand kurulumundan kapanışa kadar saha koordinasyonu bizden. Sürpriz yok." },
                { q: "Kuyruk oluşacak mı?", a: "Yüksek hacimli etkinliklerde test edilmiş markalar ve ekipler. Hızlı servis standart." },
                { q: "Boş stand kalacak mı?", a: "Personel planlaması ve stok yönetimi operasyon paketine dahil. Aç stand bırakmıyoruz." },
                { q: "İş yükümü azaltacak mısınız?", a: "Birden fazla tedarikçi yerine tek muhatap. Tüm koordinasyon bizden." },
              ].map((item) => (
                <div
                  key={item.q}
                  style={{
                    border: "2px solid rgba(251,244,230,0.12)",
                    borderRadius: 14,
                    background: "#211A14",
                    padding: "26px 24px",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 18,
                      letterSpacing: "0.01em",
                      textTransform: "uppercase",
                      color: "#E01E26",
                    }}
                  >
                    {item.q}
                  </p>
                  <p
                    style={{
                      margin: "10px 0 0",
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: "rgba(251,244,230,0.72)",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          heading="Etkinliğinizi birlikte planlayalım"
          subtext="48 saat içinde teklif dönüyoruz"
        />
      </main>
      <Footer variant="compact" />
    </>
  );
}
