"use client";

import { useRef, useState } from "react";
import { showreelVideo } from "@/content/videos";

/**
 * The auditorium: a screen raked back on its bottom edge, a projector beam
 * through the dust, footlights along the apron. Click once and it plays here.
 */
export function ShowreelTheatre() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const el = video.current;
    if (!el) return;
    el.muted = false;
    el.currentTime = 0;
    void el.play().catch(() => undefined);
    setPlaying(true);
  };

  return (
    <section
      id="showreel"
      aria-label="Showreel"
      className="relative h-[47.5rem] overflow-hidden bg-stage"
      style={{ perspective: "1200px" }}
    >
      <div
        className="absolute top-[4.375rem] left-1/2 aspect-video w-[62.5rem] max-w-[86vw] overflow-hidden border border-gold/40"
        style={{
          transform: "translateX(-50%) rotateX(9deg)",
          transformOrigin: "center bottom",
          boxShadow: "0 0 120px rgba(232,176,75,0.25), 0 60px 120px rgba(0,0,0,0.8)",
        }}
      >
        <video
          ref={video}
          src={showreelVideo.src}
          poster={showreelVideo.poster}
          playsInline
          controls={playing}
          preload="none"
          className="h-full w-full object-cover"
          onEnded={() => setPlaying(false)}
        />

        {!playing ? (
          <div className="absolute inset-0 flex items-center justify-center bg-stage/25">
            <button
              type="button"
              onClick={start}
              aria-label="Play showreel"
              className="inline-flex h-26 w-26 items-center justify-center rounded-full bg-gold text-ink transition hover:bg-gold-bright"
              style={{
                boxShadow: "0 0 0 14px rgba(232,176,75,0.2), 0 0 0 28px rgba(232,176,75,0.08)",
              }}
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M7 4.5v15l12-7.5z" />
              </svg>
            </button>
          </div>
        ) : null}
      </div>

      <div
        aria-hidden
        className="beam pointer-events-none absolute inset-0"
        style={{
          clipPath: "polygon(50% 100%, 18% 12%, 82% 12%)",
          background: "linear-gradient(0deg, rgba(255,226,170,0.28), rgba(255,226,170,0.03))",
          mixBlendMode: "screen",
        }}
      />

      <div aria-hidden className="footlights pointer-events-none absolute inset-x-0 bottom-0 h-[9.375rem]" />
      <div
        aria-hidden
        className="footlights-back pointer-events-none absolute inset-x-0 bottom-0 h-[5.625rem]"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-[6.875rem] px-6 text-center">
        <h2
          className="display-lg text-[clamp(1.875rem,4vw,3.25rem)]"
          style={{ textShadow: "0 8px 30px rgba(0,0,0,0.9)" }}
        >
          Showreel 2026
        </h2>
        <p className="mt-2 text-cream-dim" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.9)" }}>
          The Gateway of India, lit for the G20. Sound on.
        </p>
      </div>
    </section>
  );
}
