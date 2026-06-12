"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "@/lib/actions";

const initialState: FormState = {
  success: false,
  message: "",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box" as const,
  minHeight: 48,
  background: "#16120F",
  border: "1px solid rgba(242,232,220,0.15)",
  borderRadius: 8,
  color: "#F2E8DC",
  padding: "12px 14px",
  fontFamily: "var(--font-body)",
  fontSize: 15,
  colorScheme: "dark" as const,
};

const labelStyle = {
  fontFamily: "var(--font-utility)",
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: "rgba(242,232,220,0.6)",
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
        background: "#2A211B",
        border: "1px solid rgba(242,232,220,0.1)",
        borderRadius: 8,
        padding: 36,
        display: "flex",
        flexDirection: "column",
        gap: 22,
      }}
    >
      {/* Ad Soyad + Telefon */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18,
        }}
      >
        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={labelStyle}>Ad Soyad</span>
          <input
            type="text"
            name="ad"
            required
            placeholder="Adınız"
            className="kz-input"
            style={inputStyle}
          />
          {state.errors?.ad && (
            <span style={{ fontSize: 12, color: "#DC2626" }}>
              {state.errors.ad[0]}
            </span>
          )}
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={labelStyle}>Telefon</span>
          <input
            type="tel"
            name="telefon"
            required
            placeholder="+90 5__ ___ __ __"
            className="kz-input"
            style={inputStyle}
          />
          {state.errors?.telefon && (
            <span style={{ fontSize: 12, color: "#DC2626" }}>
              {state.errors.telefon[0]}
            </span>
          )}
        </label>
      </div>

      {/* E-posta */}
      <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={labelStyle}>E-posta</span>
        <input
          type="email"
          name="eposta"
          placeholder="ornek@eposta.com"
          className="kz-input"
          style={inputStyle}
        />
      </label>

      {/* Etkinlik türü + Kişi sayısı + Tarih */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 18,
        }}
      >
        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={labelStyle}>Etkinlik türü</span>
          <select
            name="tur"
            className="kz-select"
            style={inputStyle}
          >
            <option>Festival</option>
            <option>Konser</option>
            <option>Kurumsal</option>
            <option>Özel gün</option>
          </select>
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={labelStyle}>Kişi sayısı</span>
          <input
            type="number"
            name="kisi"
            min="50"
            placeholder="500"
            className="kz-input"
            style={{
              ...inputStyle,
              fontFamily: "var(--font-utility)",
              fontVariantNumeric: "tabular-nums",
            }}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={labelStyle}>Tarih</span>
          <input
            type="date"
            name="tarih"
            className="kz-input"
            style={{ ...inputStyle, fontFamily: "var(--font-utility)" }}
          />
        </label>
      </div>

      {/* Mesaj */}
      <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={labelStyle}>Mesaj</span>
        <textarea
          name="mesaj"
          rows={4}
          placeholder="Etkinliğin yeri, saati, beklenen kalabalık…"
          className="kz-input"
          style={{
            ...inputStyle,
            minHeight: "auto",
            lineHeight: 1.6,
            resize: "vertical",
          }}
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

      {/* Success / Error message */}
      {state.message && (
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-utility)",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.06em",
            color: state.success ? "#22C55E" : "#DC2626",
          }}
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="kz-btn-ember"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 52,
          padding: "16px 36px",
          background: "#DC2626",
          color: "#16120F",
          border: "none",
          borderRadius: 8,
          fontFamily: "var(--font-utility)",
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          cursor: isPending ? "not-allowed" : "pointer",
          alignSelf: "flex-start",
          opacity: isPending ? 0.7 : 1,
        }}
      >
        {isPending ? "Gönderiliyor…" : "Teklif İste"}
      </button>
    </form>
  );
}
