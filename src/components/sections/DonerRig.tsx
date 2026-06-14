"use client";

export default function DonerRig() {
  const BW = 260, BH = 500, TOP = 56;
  const silhouette = `path('M130,10 C172,10 200,44 206,100 C211,154 211,224 203,296 C195,360 178,430 150,470 C141,482 130,486 130,486 C130,486 119,482 110,470 C82,430 65,360 57,296 C49,224 49,154 54,100 C60,44 88,10 130,10 Z')`;
  const metal = "linear-gradient(90deg, #3f3f3f, #ededed 45%, #b8b8b8 60%, #3f3f3f)";

  return (
    <div
      style={{
        position: "relative",
        width: 320,
        maxWidth: "100%",
        height: BH + TOP + 60,
        margin: "0 auto",
      }}
      aria-hidden="true"
    >
      {/* Smoke wisps */}
      {[0, 1, 2].map((i) => (
        <div
          key={`sm${i}`}
          style={{
            position: "absolute",
            left: `${44 + i * 5}%`,
            top: TOP - 6,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(245,240,230,0.5), rgba(245,240,230,0))",
            filter: "blur(6px)",
            opacity: 0,
            animation: `kz-smoke 3.6s ease-out ${i * 1.2}s infinite`,
          }}
        />
      ))}

      {/* Knob */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 8,
          transform: "translateX(-50%)",
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: metal,
          boxShadow: "0 2px 6px rgba(0,0,0,0.45)",
          zIndex: 4,
        }}
      />

      {/* Skewer top */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 20,
          transform: "translateX(-50%)",
          width: 14,
          height: 46,
          borderRadius: 7,
          background: metal,
          boxShadow: "0 2px 6px rgba(0,0,0,0.45)",
          zIndex: 3,
        }}
      />

      {/* Skewer bottom */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 30,
          transform: "translateX(-50%)",
          width: 14,
          height: 46,
          borderRadius: 7,
          background: metal,
          boxShadow: "0 2px 6px rgba(0,0,0,0.45)",
          zIndex: 3,
        }}
      />

      {/* Döner body */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: TOP,
          width: BW,
          height: BH,
          marginLeft: -BW / 2,
          clipPath: silhouette,
          WebkitClipPath: silhouette,
          filter: "drop-shadow(0 26px 30px rgba(0,0,0,0.55))",
          overflow: "hidden",
        }}
      >
        {/* Rotating meat texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/doner-meat.png')",
            backgroundRepeat: "repeat-x",
            backgroundSize: `${BW}px ${BH}px`,
            backgroundPosition: "0 center",
            animation: "kz-shave 2.6s linear infinite",
          }}
        />
        {/* Fixed cylinder lighting */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.32) 14%, rgba(0,0,0,0) 36%, rgba(255,245,220,0.34) 50%, rgba(0,0,0,0) 64%, rgba(0,0,0,0.32) 86%, rgba(0,0,0,0.8) 100%)",
          }}
        />
        {/* Vertical shade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "linear-gradient(180deg, rgba(22,19,14,0.72) 0%, rgba(22,19,14,0) 11%, rgba(22,19,14,0) 87%, rgba(22,19,14,0.8) 100%)",
          }}
        />
      </div>

      {/* Coal glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 6,
          width: 250,
          height: 46,
          borderRadius: "50%",
          background:
            "radial-gradient(closest-side, rgba(255,150,40,0.75), rgba(224,30,38,0.4) 55%, transparent)",
          filter: "blur(7px)",
          animation: "kz-coal 1.8s ease-in-out infinite",
        }}
      />
    </div>
  );
}
