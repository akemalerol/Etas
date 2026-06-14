"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/lib/actions";

const initialState: FormState = {
  success: false,
  message: "",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  minHeight: 48,
  background: "#FBF4E6",
  border: "2px solid rgba(22,19,14,0.2)",
  borderRadius: 10,
  color: "#16130E",
  padding: "12px 14px",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  outline: "none",
  transition: "border-color 150ms ease-out",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "rgba(22,19,14,0.6)",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  return (
    <form
      action={formAction}
      style={{
        background: "#ffffff",
        border: "2px solid #16130E",
        borderRadius: 18,
        padding: "40px 36px",
        boxShadow: "10px 10px 0 #E01E26",
        display: "flex",
        flexDirection: "column",
        gap: 22,
      }}
    >
      {/* Ad Soyad + Telefon */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={labelStyle}>Ad Soyad *</span>
          <input
            type="text"
            name="ad"
            required
            placeholder="Adınız"
            className="kz-form-input"
            style={inputStyle}
          />
          {state.errors?.ad && (
            <span style={{ fontSize: 12, color: "#E01E26" }}>{state.errors.ad[0]}</span>
          )}
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={labelStyle}>Telefon *</span>
          <input
            type="tel"
            name="telefon"
            required
            placeholder="+90 5__ ___ __ __"
            className="kz-form-input"
            style={inputStyle}
          />
          {state.errors?.telefon && (
            <span style={{ fontSize: 12, color: "#E01E26" }}>{state.errors.telefon[0]}</span>
          )}
        </label>
      </div>

      {/* Firma + E-posta */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={labelStyle}>Firma (opsiyonel)</span>
          <input
            type="text"
            name="firma"
            placeholder="Şirket / organizasyon"
            className="kz-form-input"
            style={inputStyle}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={labelStyle}>E-posta</span>
          <input
            type="email"
            name="eposta"
            placeholder="ornek@eposta.com"
            className="kz-form-input"
            style={inputStyle}
          />
        </label>
      </div>

      {/* Etkinlik türü + Kişi + Tarih */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18 }}>
        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={labelStyle}>Hizmet türü</span>
          <select
            name="tur"
            className="kz-form-input"
            style={inputStyle}
          >
            <option value="">Seçin</option>
            <option>Festival / Konser Standı</option>
            <option>Yerinde Döner Kesimi</option>
            <option>Özel Gün</option>
            <option>Toplu Yemek</option>
          </select>
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={labelStyle}>Tahmini kişi</span>
          <input
            type="number"
            name="kisi"
            min="50"
            placeholder="500"
            className="kz-form-input"
            style={{ ...inputStyle, fontVariantNumeric: "tabular-nums" }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={labelStyle}>Tarih</span>
          <input
            type="date"
            name="tarih"
            className="kz-form-input"
            style={inputStyle}
          />
        </label>
      </div>

      {/* Lokasyon */}
      <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={labelStyle}>Şehir / Lokasyon</span>
        <input
          type="text"
          name="lokasyon"
          placeholder="İstanbul, Bursa, online…"
          className="kz-form-input"
          style={inputStyle}
        />
      </label>

      {/* Mesaj */}
      <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={labelStyle}>Mesaj</span>
        <textarea
          name="mesaj"
          rows={4}
          placeholder="Etkinliğin yeri, saati, beklenen kalabalık, özel istekler…"
          className="kz-form-input"
          style={{ ...inputStyle, minHeight: "auto", lineHeight: 1.6, resize: "vertical" }}
        />
      </label>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* State message */}
      {state.message && (
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.06em",
            color: state.success ? "#1E7A3D" : "#E01E26",
          }}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "flex-start",
          minHeight: 52,
          padding: "14px 36px",
          background: "#1E7A3D",
          color: "#FBF4E6",
          border: "none",
          borderRadius: 999,
          fontFamily: "var(--font-display)",
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          cursor: isPending ? "not-allowed" : "pointer",
          opacity: isPending ? 0.7 : 1,
          transition: "transform 150ms ease-out, background 150ms ease-out",
        }}
      >
        {isPending ? "Gönderiliyor…" : "Teklif İste"}
      </button>
    </form>
  );
}
