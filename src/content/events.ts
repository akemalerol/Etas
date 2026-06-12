export type BadgeType = "sahnedeyiz" | "dolu" | "ozel";

export type Event = {
  day: string;
  month: string;
  monthShort: string;
  year: string;
  title: string;
  location: string;
  standType: string;
  badge: BadgeType;
};

export const events: Event[] = [
  {
    day: "21",
    month: "HAZİRAN",
    monthShort: "HAZ",
    year: "2026",
    title: "Duman Fest 2026",
    location: "KüçükÇiftlik Park · İstanbul",
    standType: "Ana yemek standı + kesim şov",
    badge: "sahnedeyiz",
  },
  {
    day: "04",
    month: "TEMMUZ",
    monthShort: "TEM",
    year: "2026",
    title: "Kapadokya Balon & Müzik Fest",
    location: "Ürgüp · Nevşehir",
    standType: "Çift stand kurulumu",
    badge: "sahnedeyiz",
  },
  {
    day: "18",
    month: "TEMMUZ",
    monthShort: "TEM",
    year: "2026",
    title: "Ege Fest",
    location: "Kültürpark · İzmir",
    standType: "Ana yemek standı",
    badge: "sahnedeyiz",
  },
  {
    day: "09",
    month: "AĞUSTOS",
    monthShort: "AĞU",
    year: "2026",
    title: "Zeytinli Kamp Sahnesi",
    location: "Edremit · Balıkesir",
    standType: "Kamp alanı standı",
    badge: "dolu",
  },
  {
    day: "23",
    month: "AĞUSTOS",
    monthShort: "AĞU",
    year: "2026",
    title: "TeknoZirve After Party",
    location: "Kurumsal · Ankara",
    standType: "Davete özel menü",
    badge: "ozel",
  },
  {
    day: "05",
    month: "EYLÜL",
    monthShort: "EYL",
    year: "2026",
    title: "Bozcaada Bağbozumu Şenliği",
    location: "Bozcaada · Çanakkale",
    standType: "Kesim şov + özel menü",
    badge: "sahnedeyiz",
  },
];

export const previewEvents = events.slice(0, 3);
