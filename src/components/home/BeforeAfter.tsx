"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const FACADE = "/media/bundle-08.jpg";

/**
 * Survey on the left, showtime on the right. The wireframe grid over the dead
 * stone is what the client is really buying: the model before the light.
 */
export function BeforeAfter() {
  const section = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState(45);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.min(92, Math.max(8, next)));
  }, []);

  useEffect(() => {
    const root = section.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root,
        start: "top 60%",
        end: "center center",
        scrub: true,
        onUpdate: (self) => {
          if (dragging.current) return;
          setSplit(22 + self.progress * 48);
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onUp = () => {
      dragging.current = false;
    };
    const onMove = (e: PointerEvent) => {
      if (dragging.current) setFromClientX(e.clientX);
    };
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointermove", onMove);
    };
  }, [setFromClientX]);

  return (
    <section
      id="mapping"
      ref={section}
      className="mx-auto max-w-[82.5rem] px-6 pt-24 pb-20 md:pt-28"
    >
      <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3.5">How the magic works</p>
          <h2 className="display-lg text-[clamp(2.125rem,4.4vw,3.875rem)]">Drag to project</h2>
        </div>
        <p className="max-w-[28.75rem] text-muted-soft">
          We scan every arch, pillar and cornice, build a 3D model of the façade, then paint the
          story onto it in light — down to the last carving.
        </p>
      </div>

      <div
        ref={frame}
        role="slider"
        tabIndex={0}
        aria-valuemin={8}
        aria-valuemax={92}
        aria-valuenow={Math.round(split)}
        aria-label="Reveal the projection-mapped show over the surveyed façade"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setSplit((p) => Math.max(8, p - 3));
          if (e.key === "ArrowRight") setSplit((p) => Math.min(92, p + 3));
        }}
        className="relative min-h-[18.75rem] cursor-ew-resize overflow-hidden rounded-md bg-black shadow-[0_50px_100px_rgba(0,0,0,0.6)] select-none"
        style={{ aspectRatio: "21 / 9" }}
      >
        <Image
          src={FACADE}
          alt="Monument façade as surveyed, before projection"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ filter: "grayscale(1) brightness(0.42) contrast(1.35)" }}
        />

        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,176,75,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(232,176,75,0.28) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${split}%)` }}>
          <Image
            src={FACADE}
            alt="The same façade with the projection-mapped show running"
            fill
            sizes="100vw"
            className="object-cover"
            style={{ filter: "brightness(1.06) saturate(1.14) contrast(1.05)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 70% 40%, rgba(232,176,75,0.14), transparent 55%)",
            }}
          />
        </div>

        <div
          aria-hidden
          className="absolute inset-y-0 w-0.5 -ml-px bg-gold shadow-[0_0_24px_4px_rgba(232,176,75,0.7)]"
          style={{ left: `${split}%` }}
        >
          <span className="absolute top-1/2 left-1/2 -mt-6.5 -ml-6.5 flex h-13 w-13 items-center justify-center rounded-full bg-gold text-ink shadow-[0_0_30px_rgba(232,176,75,0.8)]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <span className="pointer-events-none absolute top-5 left-5 rounded-full bg-night/75 px-3.5 py-1.5 text-[0.875rem] tracking-[0.1em] uppercase">
          Survey &amp; 3D model
        </span>
        <span className="pointer-events-none absolute top-5 right-5 rounded-full bg-gold px-3.5 py-1.5 text-[0.875rem] font-semibold tracking-[0.1em] text-ink uppercase">
          Showtime
        </span>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <label htmlFor="map-split" className="flex-none text-[0.9375rem] text-muted-soft">
          Projector
        </label>
        <input
          id="map-split"
          type="range"
          min={0}
          max={100}
          value={Math.round(split)}
          onChange={(e) => {
            dragging.current = true;
            setSplit(Number(e.target.value));
          }}
          className="min-h-11 flex-1"
        />
        <span className="min-w-13 flex-none text-right text-[0.9375rem] text-gold">
          {100 - Math.round(split)}%
        </span>
      </div>
    </section>
  );
}
