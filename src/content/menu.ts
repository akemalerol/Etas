export type MenuItem = {
  name: string;
  description?: string;
  tag?: string;
};

export type MenuSection = {
  tag: string;
  title: string;
  items: MenuItem[];
  color?: string;
};

export const menuSections: MenuSection[] = [
  {
    tag: "Headliner",
    title: "DÖNER",
    color: "#DC2626",
    items: [
      {
        name: "Et Döner Dürüm",
        description: "Lavaş, ızgara biber, soğan-sumak",
        tag: "En çok tercih edilen",
      },
      {
        name: "Et Döner Porsiyon",
        description: "Tereyağlı pilav üstü, ızgara domates",
      },
      {
        name: "Tavuk Döner Dürüm",
        description: "Marine tavuk, turşu, biber sos",
      },
      {
        name: "Festival Box",
        description: "Dürüm + yayık ayran + patates",
        tag: "Festival özel",
      },
    ],
  },
  {
    tag: "Stand Yıldızları",
    title: "KÖFTE & KEBAP",
    color: "#22C55E",
    items: [
      {
        name: "Izgara Köfte Ekmek",
        description: "Izgara köfte, piyaz soğanı, taş fırın ekmeği",
      },
      {
        name: "Adana Dürüm",
        description: "Zırh kıyma, ızgara biber, maydanozlu soğan",
      },
      {
        name: "Kuzu Şiş Porsiyon",
        description: "Pirinç şişte kuzu, ızgara domates-biber",
      },
    ],
  },
  {
    tag: "Tatlı & İçecek",
    title: "DONDURMA & KAHVE",
    color: "#9C7A4B",
    items: [
      {
        name: "Maraş Dondurma",
        description: "Külahta, keçi sütü — kesme şov dahil",
      },
      { name: "Sıkma Portakal", description: "Günlük taze sıkım" },
      { name: "Yayık Ayran", description: "Geleneksel yayık usulü" },
      {
        name: "Türk Kahvesi",
        description: "Geleneksel pişirim",
      },
    ],
  },
];
