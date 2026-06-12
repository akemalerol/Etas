export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuSection = {
  tag: string;
  title: string;
  titleHtml?: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    tag: "Headliner",
    title: "DÖNER",
    items: [
      {
        name: "Et Döner Dürüm",
        price: "₺220",
        description: "Lavaş, közlenmiş biber, soğan-sumak",
      },
      {
        name: "Et Döner Porsiyon",
        price: "₺320",
        description: "Tereyağlı pilav üstü, közlenmiş domates",
      },
      {
        name: "Tavuk Döner Dürüm",
        price: "₺160",
        description: "Marine tavuk, turşu, akçaağaç-biber sos",
      },
      {
        name: "Festival Box",
        price: "₺380",
        description: "Dürüm + yayık ayran + közde patates",
      },
    ],
  },
  {
    tag: "Sahne arkası",
    title: "KÖFTE • KEBAP",
    items: [
      {
        name: "Izgara Köfte Ekmek",
        price: "₺180",
        description: "Közde köfte, piyaz soğanı, taş fırın ekmeği",
      },
      {
        name: "Adana Dürüm",
        price: "₺240",
        description: "Zırh kıyma, közlenmiş biber, maydanozlu soğan",
      },
      {
        name: "Kuzu Şiş Porsiyon",
        price: "₺350",
        description: "Pirinç şişte kuzu, közde domates-biber",
      },
    ],
  },
  {
    tag: "Soğuk sahne",
    title: "DONDURMA • KAHVE • FRESH",
    items: [
      {
        name: "Maraş Dondurma",
        price: "₺90",
        description: "Külahta, keçi sütü — kesme şov dahil",
      },
      { name: "Sıkma Portakal", price: "₺80" },
      { name: "Yayık Ayran", price: "₺50" },
      {
        name: "Türk Kahvesi",
        price: "₺70",
        description: "Közde pişer — sahnenin en yavaş işi",
      },
    ],
  },
];
