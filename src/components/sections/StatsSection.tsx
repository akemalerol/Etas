"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 120, suffix: "+", label: "Etkinlik" },
  { target: 250000, suffix: "+", label: "Porsiyon servis" },
  { target: 14, suffix: "", label: "Şehir" },
  { target: 8, suffix: "", label: "Yıl deneyim" },
] as const;

function formatTR(n: number) {
  return new Intl.NumberFormat("tr-TR").format(n);
}

export default function StatsSection() {
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      setCounts(STATS.map((s) => s.target));
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !started) {
          setStarted(true);
          observer.disconnect();

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
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#2A211B",
        padding: "96px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 64px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-utility)",
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#9C7A4B",
          }}
        >
          Sayılarla biz
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
            marginTop: 40,
          }}
        >
          {STATS.map((stat, i) => (
            <div key={stat.label}>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-utility)",
                  fontVariantNumeric: "tabular-nums",
                  fontSize: "clamp(44px, 5vw, 64px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "#F2E8DC",
                }}
              >
                {formatTR(counts[i])}
                <span style={{ color: "#DC2626" }}>{stat.suffix}</span>
              </p>
              <p
                style={{
                  margin: "12px 0 0",
                  fontFamily: "var(--font-utility)",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(242,232,220,0.6)",
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
