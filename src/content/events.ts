export type BadgeType = "sahnedeyiz" | "dolu" | "ozel";
export type EventCategory = "festival" | "konser" | "stand" | "ozel-gun";

export type Event = {
  day: string;
  month: string;
  monthShort: string;
  year: string;
  title: string;
  location: string;
  standType: string;
  badge: BadgeType;
  category: EventCategory;
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
    category: "festival",
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
    category: "festival",
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
    category: "festival",
  },
  {
    day: "09",
    month: "AĞUSTOS",
    monthShort: "AĞU",
    year: "2026",
    title: "Zeytinli Rock",
    location: "Edremit · Balıkesir",
    standType: "Kamp alanı standı",
    badge: "dolu",
    category: "konser",
  },
  {
    day: "23",
    month: "AĞUSTOS",
    monthShort: "AĞU",
    year: "2026",
    title: "TeknoZirve After Party",
    location: "Ankara",
    standType: "Davete özel menü",
    badge: "ozel",
    category: "ozel-gun",
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
    category: "stand",
  },
];

export const previewEvents = events.slice(0, 3);

export const categoryLabels: Record<EventCategory, string> = {
  festival: "Festival",
  konser: "Konser",
  stand: "Stand",
  "ozel-gun": "Özel Gün",
};

export const categoryColors: Record<EventCategory, string> = {
  festival: "#DC2626",
  konser: "#22C55E",
  stand: "#9C7A4B",
  "ozel-gun": "#F2E8DC",
};
