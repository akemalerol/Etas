"use server";

import { contactSchema } from "./schema";

export type FormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    ad: formData.get("ad"),
    telefon: formData.get("telefon"),
    eposta: formData.get("eposta"),
    tur: formData.get("tur"),
    kisi: formData.get("kisi"),
    tarih: formData.get("tarih"),
    mesaj: formData.get("mesaj"),
    website: formData.get("website"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Lütfen gerekli alanları doldurun.",
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  // Honeypot check
  if (parsed.data.website) {
    return { success: false, message: "Geçersiz gönderim." };
  }

  // TODO: Resend entegrasyonu buraya eklenecek
  // Şu an sadece başarı dönüyor - gerçek e-posta için Resend API key gerekli
  console.log("Yeni teklif talebi:", parsed.data);

  return {
    success: true,
    message: "Mesajınız alındı — 48 saat içinde dönüyoruz.",
  };
}
