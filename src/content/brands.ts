export type BrandCategory =
  | "doner-burger"
  | "kahve"
  | "dondurma"
  | "meyve-suyu"
  | "cikolata";

export type Brand = {
  name: string;
  category: BrandCategory;
  desc: string;
};

export const categoryLabels: Record<BrandCategory, string> = {
  "doner-burger": "Döner · Dürüm · Burger",
  kahve: "Kahve",
  dondurma: "Dondurma",
  "meyve-suyu": "Meyve Suyu",
  cikolata: "Çikolata & Atıştırmalık",
};

export const brands: Brand[] = [
  {
    name: "Mono Burger",
    category: "doner-burger",
    desc: "Yüksek talep gören burger markası. Festival alanlarında hızlı servis kapasitesi.",
  },
  {
    name: "Dürümo",
    category: "doner-burger",
    desc: "Döner ve dürüm odaklı, kalabalık etkinliklerde test edilmiş operasyon modeli.",
  },
  {
    name: "Bereket Döner",
    category: "doner-burger",
    desc: "Güvenilir döner markası. Geniş kapasiteli stand kurulumu ve deneyimli personel.",
  },
  {
    name: "Mikel Coffee",
    category: "kahve",
    desc: "Avrupa'nın en hızlı büyüyen kahve zinciri. Etkinlik alanlarına özel stand formatı.",
  },
  {
    name: "Clasigo",
    category: "dondurma",
    desc: "Premium dondurma markası. Yaz etkinliklerinde yüksek satış hacmi.",
  },
  {
    name: "Fresh",
    category: "meyve-suyu",
    desc: "Taze sıkma meyve suyu. Festival ortamında sağlıklı alternatif olarak öne çıkıyor.",
  },
  {
    name: "Aidos Chocolatier",
    category: "cikolata",
    desc: "Premium çikolata ve ikram çözümleri. Kurumsal etkinlikler ve VIP alanlar için ideal.",
  },
];

export const brandsByCategory = brands.reduce<Partial<Record<BrandCategory, Brand[]>>>(
  (acc, brand) => {
    if (!acc[brand.category]) acc[brand.category] = [];
    acc[brand.category]!.push(brand);
    return acc;
  },
  {}
);
