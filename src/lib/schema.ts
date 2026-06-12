import { z } from "zod";

export const contactSchema = z.object({
  ad: z.string().min(2, "Ad Soyad en az 2 karakter olmalı"),
  telefon: z.string().min(10, "Geçerli bir telefon numarası girin"),
  eposta: z
    .string()
    .email("Geçerli bir e-posta adresi girin")
    .optional()
    .or(z.literal("")),
  tur: z.enum(["Festival", "Konser", "Kurumsal", "Özel gün"]),
  kisi: z.coerce
    .number()
    .min(1, "Kişi sayısı giriniz")
    .optional()
    .or(z.literal(0)),
  tarih: z.string().optional(),
  mesaj: z.string().optional(),
  // Honeypot
  website: z.string().max(0, "Spam algılandı").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
