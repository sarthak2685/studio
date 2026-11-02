"use client";

import { useId } from "react";

/**
 * Heritage sketch atmosphere — ink-drawn façades, arches & paper grain
 * so empty dark space feels like an architect’s folio, not flat black.
 * `dense` fills side margins (e.g. team intro) with extra folio drawings.
 */
export function SketchField({
  className = "",
  dense = false,
}: {
  className?: string;
  dense?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const grain = `grain-${uid}`;
  const paper = `paper-${uid}`;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="sketch-wash absolute inset-0" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.28]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={grain}>
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.28" />
            </feComponentTransfer>
          </filter>
          <radialGradient id={paper} cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="var(--sketch-glow)" />
            <stop offset="55%" stopColor="var(--sketch-bloom)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" filter={`url(#${grain})`} opacity="0.22" />
        <rect width="100%" height="100%" fill={`url(#${paper})`} />
      </svg>

      <svg
        className="absolute inset-0 h-full w-full"
        style={{ opacity: "var(--sketch-draw-opacity)" }}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="var(--sketch-ink)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Left — grand gateway */}
          <g transform="translate(48 120)" opacity="0.95">
            <path d="M40 520 V180 Q40 80 160 80 Q280 80 280 180 V520" />
            <path d="M70 520 V210 Q70 130 160 130 Q250 130 250 210 V520" />
            <path d="M100 520 V240 Q100 170 160 170 Q220 170 220 240 V520" />
            <path d="M160 80 V40 M140 55 H180" />
            <path d="M55 280 H265 M55 340 H265 M55 400 H265" />
            <path d="M20 520 H300" />
            <path d="M90 200 Q160 150 230 200" opacity="0.7" />
            <path d="M-10 520 V260 H20 V520 M300 520 V260 H330 V520" />
            <path d="M-10 260 Q5 230 20 260 M300 260 Q315 230 330 260" />
            <path d="M75 300 l12 12 M75 330 l12 12 M75 360 l12 12 M75 390 l12 12" opacity="0.45" />
            <path d="M233 300 l12 12 M233 330 l12 12 M233 360 l12 12 M233 390 l12 12" opacity="0.45" />
          </g>

          {/* Right — palace façade */}
          <g transform="translate(1020 90)" opacity="0.9">
            <path d="M20 560 V100 H340 V560" />
            <path d="M50 560 V140 H310 V560" />
            <path d="M20 100 L180 20 L340 100" />
            <path d="M50 140 L180 70 L310 140" />
            <path d="M180 20 V560" opacity="0.5" />
            <path d="M80 200 H150 V280 H80 Z M210 200 H280 V280 H210 Z" />
            <path d="M80 320 H150 V400 H80 Z M210 320 H280 V400 H210 Z" />
            <path d="M80 440 H150 V520 H80 Z M210 440 H280 V520 H210 Z" />
            <path d="M115 200 V280 M80 240 H150 M245 200 V280 M210 240 H280" opacity="0.55" />
            <path d="M115 320 V400 M80 360 H150 M245 320 V400 M210 360 H280" opacity="0.55" />
            <path d="M40 160 Q180 120 320 160" />
            <path d="M60 180 Q180 145 300 180" opacity="0.6" />
            <path d="M0 560 H360" />
          </g>

          <g transform="translate(480 520)" opacity="0.55">
            <path d="M40 280 V120 Q40 20 240 20 Q440 20 440 120 V280" />
            <path d="M90 280 V140 Q90 60 240 60 Q390 60 390 140 V280" />
            <path d="M140 280 V160 Q140 100 240 100 Q340 100 340 160 V280" />
            <path d="M20 280 H460" />
            <path d="M240 20 V0" />
            <circle cx="240" cy="-8" r="8" />
          </g>

          <g transform="translate(620 40)" opacity="0.5">
            <circle cx="100" cy="70" r="42" />
            <circle cx="100" cy="70" r="28" />
            <path d="M100 20 V120 M50 70 H150" />
            <path d="M100 28 L108 70 L100 112 L92 70 Z" />
            <path d="M70 45 L130 95 M130 45 L70 95" opacity="0.45" />
          </g>

          <g transform="translate(380 180)" opacity="0.4" strokeWidth="0.9">
            <path d="M0 0 H160 M0 0 V8 M160 0 V8" />
            <path d="M0 40 H90 M0 40 V6 M90 40 V6" />
            <path d="M200 10 C220 -10 260 -10 280 20 C300 50 260 70 240 50" />
          </g>

          {dense ? (
            <>
              {/* Far-left column study — fills empty margin beside copy */}
              <g transform="translate(-20 40)" opacity="0.85" stroke="var(--sketch-ink)">
                <path d="M60 40 V720" />
                <path d="M90 80 V680" />
                <path d="M40 120 H140 M40 200 H140 M40 280 H140 M40 360 H140" />
                <path d="M55 160 H125 M55 240 H125 M55 320 H125" opacity="0.6" />
                <circle cx="75" cy="60" r="14" />
                <path d="M75 46 V74 M61 60 H89" />
                <path d="M30 720 H160" />
                <path d="M100 100 l10 10 M100 140 l10 10 M100 180 l10 10 M100 220 l10 10" opacity="0.5" />
              </g>

              {/* Mid-left temple elevation beside heading */}
              <g transform="translate(220 60)" opacity="0.55">
                <path d="M20 380 V100 H200 V380" />
                <path d="M20 100 L110 30 L200 100" />
                <path d="M50 380 V140 H170 V380" />
                <path d="M70 180 H150 V240 H70 Z M70 270 H150 V330 H70 Z" />
                <path d="M110 180 V240 M70 210 H150 M110 270 V330 M70 300 H150" opacity="0.55" />
                <path d="M0 380 H220" />
                <path d="M110 30 V10" />
              </g>

              {/* Far-right lantern / minaret */}
              <g transform="translate(1280 50)" opacity="0.85" stroke="var(--sketch-ink)">
                <path d="M40 700 V180" />
                <path d="M20 180 H60 L50 140 H30 Z" />
                <path d="M40 140 V90" />
                <circle cx="40" cy="78" r="12" />
                <path d="M10 220 H70 M15 280 H65 M15 340 H65 M15 400 H65" />
                <path d="M25 460 H55 V620 H25 Z" />
                <path d="M0 700 H80" />
              </g>

              {/* Mid-right balcony / colonnade */}
              <g transform="translate(880 70)" opacity="0.58">
                <path d="M0 320 H280" />
                <path d="M20 320 V140 Q20 100 50 100 H90 V320" />
                <path d="M110 320 V140 Q110 100 140 100 H180 V320" />
                <path d="M200 320 V140 Q200 100 230 100 H270 V320" />
                <path d="M20 100 H270" />
                <path d="M50 180 H90 M140 180 H180 M230 180 H270" opacity="0.55" />
                <path d="M50 240 H90 M140 240 H180 M230 240 H270" opacity="0.55" />
              </g>

              {/* Top-right dimension fan */}
              <g transform="translate(1100 20)" opacity="0.45" strokeWidth="0.9">
                <path d="M0 80 H180" />
                <path d="M0 80 L40 20 M0 80 L80 10 M0 80 L120 20 M0 80 L160 40" />
                <circle cx="0" cy="80" r="5" />
              </g>

              {/* Bottom-left scroll / plan lines */}
              <g transform="translate(40 620)" opacity="0.5" strokeWidth="0.9">
                <path d="M0 40 H320" />
                <path d="M0 70 H260" />
                <path d="M0 100 H300" />
                <path d="M40 20 V120 M120 20 V120 M220 20 V120" />
                <path d="M280 10 C300 -5 340 5 350 40" />
              </g>
            </>
          ) : null}
        </g>

        <g
          fill="none"
          stroke="var(--sketch-ink-soft)"
          strokeWidth="0.8"
          strokeLinecap="round"
        >
          <path d="M120 700 C200 640 280 760 360 690 C440 620 500 740 580 680" />
          <path d="M900 750 C980 690 1060 800 1140 740 C1220 680 1280 790 1340 730" />
          <path d="M700 200 C760 160 820 240 880 190" opacity="0.7" />
          {dense ? (
            <>
              <path d="M200 250 C280 210 340 300 420 250" opacity="0.8" />
              <path d="M1000 280 C1080 240 1160 320 1240 270" opacity="0.8" />
            </>
          ) : null}
        </g>
      </svg>

      <div
        className={`sketch-vignette absolute inset-0 ${dense ? "opacity-80" : ""}`}
      />
      <div className="sketch-glow absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full" />
      <div className="sketch-bloom absolute -bottom-36 -left-28 h-[30rem] w-[30rem] rounded-full" />
      {dense ? (
        <>
          <div className="sketch-glow absolute top-10 left-[8%] h-64 w-64 rounded-full opacity-80" />
          <div className="sketch-glow absolute top-16 right-[10%] h-72 w-72 rounded-full opacity-90" />
        </>
      ) : null}
    </div>
  );
}
