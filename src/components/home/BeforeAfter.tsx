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
  const [pos, setPos] = useState(22);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(90, Math.max(10, next)));
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
          setPos(22 + self.progress * 55);
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
      className="section-pad relative overflow-hidden border-t border-line bg-night-elevated py-20 md:py-24"
    >
      <SketchField />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Without us · With us</p>
          <h2 className="mt-4 text-3xl font-semibold leading-snug text-cream md:text-5xl">
            The monument stays. The night changes.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Drag the divider — or keep scrolling — to see how the same façade feels before Magical
            Theatre, and after the story is mapped in light.
          </p>
        </div>
      </div>

      <div
        ref={frame}
        className="relative z-10 mx-auto mt-10 aspect-[16/9] max-w-[100vw] cursor-ew-resize overflow-hidden border-y border-line/40 select-none md:mt-12 md:aspect-[21/9] md:border-x-0"
        onPointerDown={(e) => {
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
        role="img"
        aria-label="Before and after comparison of a monument with Magical Theatre projection mapping"
      >
        <div className="absolute inset-0">
          <Image
            src={SHOW}
            alt="Monument without projection mapping"
            fill
            className="object-cover"
            sizes="100vw"
            style={{ filter: "brightness(0.4) saturate(0.12) contrast(1.05)" }}
            priority
          />
        </div>

        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <Image
            src={SHOW}
            alt="Monument with Magical Theatre show"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-y-0 z-10 w-0.5 bg-gold" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-gold/80 bg-night/90">
            <span className="text-[9px] tracking-[0.16em] text-gold uppercase">Drag</span>
          </div>
        </div>

        <p className="absolute top-4 left-4 z-10 bg-night/70 px-3 py-1.5 text-[10px] tracking-[0.2em] text-cream/85 uppercase backdrop-blur-sm">
          Without us
        </p>
        <p className="absolute top-4 right-4 z-10 bg-night/70 px-3 py-1.5 text-[10px] tracking-[0.2em] text-gold uppercase backdrop-blur-sm">
          With Magical Theatre
        </p>
      </div>
    </section>
  );
}
