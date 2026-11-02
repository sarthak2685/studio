"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SketchField } from "@/components/SketchField";
import { worldwidePresence } from "@/content/presence";

/** ~3 cards in section gutters — seamless GSAP auto-scroll. */
export function Worldwide() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const loop = [...worldwidePresence, ...worldwidePresence];

  useEffect(() => {
    const board = track.current;
    const clip = viewport.current;
    if (!board || !clip) return;

    let tween: gsap.core.Tween | null = null;
    let ro: ResizeObserver | null = null;
    let resizeTimer = 0;

    const build = () => {
      const distance = board.scrollWidth / 2;
      if (distance < 8) return;

      const wasPaused = tween?.paused() ?? false;
      tween?.kill();
      gsap.set(board, { x: 0 });

      tween = gsap.to(board, {
        x: -distance,
        duration: Math.max(16, distance / 45),
        ease: "none",
        repeat: -1,
        force3D: true,
      });
      if (wasPaused) tween.pause();
    };

    const boot = window.setTimeout(build, 100);
    ro = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(build, 150);
    });
    ro.observe(clip);

    const pause = () => tween?.pause();
    const play = () => tween?.play();
    clip.addEventListener("pointerenter", pause);
    clip.addEventListener("pointerleave", play);

    return () => {
      window.clearTimeout(boot);
      window.clearTimeout(resizeTimer);
      tween?.kill();
      ro?.disconnect();
      clip.removeEventListener("pointerenter", pause);
      clip.removeEventListener("pointerleave", play);
    };
  }, []);

  return (
    <section
      className="section-pad relative overflow-hidden border-t border-line bg-night py-24 md:py-28"
      aria-label="Worldwide presence"
    >
      <SketchField />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Presence worldwide</p>
          <h2 className="mt-4 text-3xl font-semibold leading-snug text-cream md:text-5xl">
            India. China. Italy. Germany.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            International stages that already applauded Magical Theatre — built to grow as more
            cities join the map.
          </p>
        </div>

        <div
          ref={viewport}
          className="relative mt-12 overflow-hidden"
          style={{ containerType: "inline-size" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-night to-transparent md:w-14"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-night to-transparent md:w-14"
          />

          <div ref={track} className="flex w-max gap-5 will-change-transform md:gap-6">
            {loop.map((item, i) => (
              <article
                key={`${item.id}-${i}`}
                className="group relative w-[min(78cqw,22rem)] shrink-0 overflow-hidden border border-line/45 bg-night-elevated sm:w-[min(46cqw,20rem)] md:w-[calc((100cqw-3rem)/3)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.media}
                    alt={`${item.title} — ${item.region}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 78vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-transparent" />
                  <p className="absolute top-4 left-4 border border-gold/50 bg-night/70 px-2.5 py-1 text-[10px] tracking-[0.2em] text-gold uppercase backdrop-blur-sm">
                    {item.region}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <p className="text-[10px] tracking-[0.2em] text-cream/55 uppercase">
                      {item.city}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug text-cream md:text-2xl lg:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gold md:text-base">{item.result}</p>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-cream/70">
                      {item.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
