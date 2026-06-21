"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 7, suffix: "+", label: "Aktif marka" },
  { target: 120, suffix: "+", label: "Etkinlik" },
  { target: 8, suffix: "", label: "Yıl deneyim" },
  { target: 50000, suffix: "+", label: "Kapasite / etkinlik" },
] as const;

function formatTR(n: number) {
  return new Intl.NumberFormat("tr-TR").format(n);
}

export default function StatsSection() {
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setCounts(STATS.map((s) => s.target));
      setStarted(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !started) {
          setStarted(true);
          const dur = 1300;
          const t0 = performance.now();
          const ease = (x: number) => 1 - Math.pow(1 - x, 3);
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / dur);
            const e = ease(p);
            setCounts(STATS.map((s) => Math.round(s.target * e)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [started]);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#E01E26",
        padding: "92px 0",
        borderTop: "3px solid #16130E",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#FBF4E6",
          }}
        >
          Sayılarla biz
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 28,
            marginTop: 36,
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              style={{ borderLeft: "3px solid rgba(251,244,230,0.35)", paddingLeft: 22 }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontVariantNumeric: "tabular-nums",
                  fontSize: "clamp(48px, 5.4vw, 72px)",
                  lineHeight: 0.95,
                  color: "#FBF4E6",
                }}
              >
                {formatTR(counts[i])}
                <span style={{ color: "#16130E" }}>{stat.suffix}</span>
              </p>
              <p
                style={{
                  margin: "10px 0 0",
                  fontFamily: "var(--font-display)",
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(251,244,230,0.82)",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
