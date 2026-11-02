"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SketchField } from "@/components/SketchField";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const SHOW = "/media/bundle-08.jpg";

export function BeforeAfter() {
  const section = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(28);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(88, Math.max(12, next)));
  }, []);

  useEffect(() => {
    const root = section.current;
    if (!root || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root,
        start: "top 55%",
        end: "center center",
        scrub: true,
        onUpdate: (self) => {
          if (dragging.current) return;
          setPos(28 + self.progress * 48);
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
      if (!dragging.current) return;
      setFromClientX(e.clientX);
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
      ref={section}
      className="theme-lift section-pad relative overflow-hidden border-t border-line py-24 md:py-32"
    >
      <SketchField />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Reveal the night</p>
            <h2 className="mt-4 text-3xl font-semibold leading-snug text-cream md:text-5xl">
              The monument stays. The night changes.
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              Drag the gold line — or keep scrolling — to watch the same façade turn from silent
              stone into a living show.
            </p>
          </div>

          <div className="flex gap-8 text-[10px] tracking-[0.2em] text-cream/45 uppercase md:pb-1">
            <span>
              <span className="block text-gold">01</span>
              Stone
            </span>
            <span>
              <span className="block text-gold">02</span>
              Story
            </span>
            <span>
              <span className="block text-gold">03</span>
              Spectacle
            </span>
          </div>
        </div>

        {/* Stage frame */}
        <div className="relative mt-12 md:mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px border border-gold/25"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-3 hidden border border-line/30 md:block"
          />

          <div
            ref={frame}
            className="relative aspect-[16/10] cursor-ew-resize overflow-hidden bg-night shadow-[0_28px_80px_rgba(0,0,0,0.45)] select-none md:aspect-[21/9]"
            onPointerDown={(e) => {
              dragging.current = true;
              (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
              setFromClientX(e.clientX);
            }}
            role="slider"
            aria-valuemin={12}
            aria-valuemax={88}
            aria-valuenow={Math.round(pos)}
            aria-label="Compare monument before and after Magical Theatre"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPos((p) => Math.max(12, p - 3));
              if (e.key === "ArrowRight") setPos((p) => Math.min(88, p + 3));
            }}
          >
            {/* Before — quiet stone */}
            <div className="absolute inset-0">
              <Image
                src={SHOW}
                alt="Monument without projection mapping"
                fill
                className="object-cover"
                sizes="100vw"
                style={{ filter: "brightness(0.38) saturate(0.08) contrast(1.12)" }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-night/50 via-transparent to-transparent" />
            </div>

            {/* After — lit show */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
              <Image
                src={SHOW}
                alt="Monument with Magical Theatre show"
                fill
                className="object-cover"
                sizes="100vw"
                style={{ filter: "brightness(1.06) saturate(1.12) contrast(1.05)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-night/20 via-transparent to-transparent" />
              {/* Soft gold bloom on lit side */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(232,174,42,0.14),transparent_55%)]"
              />
            </div>

            {/* Divider + handle */}
            <div
              className="absolute inset-y-0 z-20"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold to-transparent shadow-[0_0_18px_rgba(232,174,42,0.55)]" />
              <div className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-gold bg-night/85 shadow-[0_0_28px_rgba(232,174,42,0.35)] backdrop-blur-sm transition md:h-16 md:w-16">
                <span className="flex items-center gap-1 text-gold" aria-hidden>
                  <ChevronLeft />
                  <ChevronRight />
                </span>
              </div>
            </div>

            {/* Labels */}
            <div className="pointer-events-none absolute top-4 left-4 z-20 md:top-6 md:left-6">
              <span className="inline-flex items-center gap-2 border border-cream/20 bg-night/75 px-3 py-2 backdrop-blur-md md:px-4">
                <span className="h-1.5 w-1.5 rounded-full bg-cream/50" />
                <span className="text-[10px] tracking-[0.22em] text-cream/80 uppercase">
                  Without us
                </span>
              </span>
            </div>
            <div className="pointer-events-none absolute top-4 right-4 z-20 md:top-6 md:right-6">
              <span className="inline-flex items-center gap-2 border border-gold/45 bg-night/75 px-3 py-2 backdrop-blur-md md:px-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(232,174,42,0.7)]" />
                <span className="text-[10px] tracking-[0.22em] text-gold uppercase">
                  With Magical Theatre
                </span>
              </span>
            </div>

            {/* Bottom cue */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-night/80 via-night/30 to-transparent px-4 pb-4 pt-16 md:px-6 md:pb-5">
              <p className="text-center text-[10px] tracking-[0.28em] text-cream/55 uppercase">
                Drag to reveal the show
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M6.5 1.5 2.5 5l4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M3.5 1.5 7.5 5l-4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
