"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { site } from "@/content/site";
import { heroMedia, heroMedia2d, heroMedia3d } from "@/content/media";
import { prefersReducedMotion } from "@/lib/motion";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<"2d" | "3d">("3d");

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-media]",
        { scale: 1.18 },
        { scale: 1, duration: 2.4, ease: "power2.out" },
      );
      gsap.fromTo(
        "[data-hero-mask]",
        { yPercent: 105 },
        { yPercent: 0, duration: 1, stagger: 0.12, ease: "power3.out", delay: 0.2 },
      );
      gsap.fromTo(
        "[data-hero-fade]",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out", delay: 0.55 },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setMode((m) => (m === "3d" ? "2d" : "3d"));
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  const activeStill = mode === "3d" ? heroMedia3d : heroMedia2d;

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-12 pt-28 md:justify-center md:pb-20 md:pt-28"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div data-hero-media className="absolute inset-[-8%] will-change-transform">
          <Image
            src={heroMedia}
            alt="Magical Theatre projection mapping"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/50 to-night/20" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-5 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12 md:px-8">
        <div>
          <p data-hero-fade className="text-[11px] tracking-[0.34em] text-gold uppercase">
            Magical Theatre · Product
          </p>

          <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.18] tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-[4.1rem]">
            <span className="block overflow-hidden pb-1">
              <span data-hero-mask className="block">
                We build
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span data-hero-mask className="block">
                <span className="text-gold">2D & 3D</span> shows
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span data-hero-mask className="block">on living monuments</span>
            </span>
          </h1>

          <p
            data-hero-fade
            className="mt-6 max-w-lg text-base leading-relaxed text-cream/80 md:text-lg"
          >
            Projection mapping, son-et-lumière, laser & water — designed, animated and installed so
            architecture becomes the screen.
          </p>

          <div data-hero-fade className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex min-w-[11rem] items-center justify-center bg-burgundy px-7 py-4 text-xs tracking-[0.2em] text-cream uppercase transition hover:bg-burgundy-glow"
            >
              See the shows
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-w-[11rem] items-center justify-center border border-cream/45 px-7 py-4 text-xs tracking-[0.2em] text-cream uppercase transition hover:border-gold hover:text-gold"
            >
              {site.cta.primary}
            </Link>
          </div>
        </div>

        {/* Product stage — 2D / 3D flip showcase */}
        <div data-hero-fade className="relative">
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setMode("2d")}
              className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition ${
                mode === "2d"
                  ? "bg-gold text-night"
                  : "border border-cream/30 text-cream/70 hover:border-gold hover:text-gold"
              }`}
            >
              2D frames
            </button>
            <button
              type="button"
              onClick={() => setMode("3d")}
              className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition ${
                mode === "3d"
                  ? "bg-gold text-night"
                  : "border border-cream/30 text-cream/70 hover:border-gold hover:text-gold"
              }`}
            >
              3D mapping
            </button>
          </div>

          <div
            className="product-stage relative aspect-[4/3] w-full"
            style={{ perspective: "1400px" }}
          >
            <div
              key={mode}
              className="product-card absolute inset-0 overflow-hidden border border-line/60 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            >
              <Image
                src={activeStill}
                alt={mode === "3d" ? "3D architectural projection mapping" : "2D story projection frames"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] tracking-[0.28em] text-gold uppercase">
                  {mode === "3d" ? "Product · 3D depth" : "Product · 2D narrative"}
                </p>
                <p className="mt-2 text-lg font-semibold text-cream">
                  {mode === "3d"
                    ? "Architecture gains volume, motion and relief."
                    : "Illustrated story locked frame-by-frame to the façade."}
                </p>
              </div>
            </div>

            {/* Floating depth layers */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-3 -bottom-3 hidden h-full w-full border border-gold/25 md:block"
              style={{ transform: "translateZ(-40px) translate(12px, 12px)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -bottom-6 hidden h-full w-full border border-cream/10 md:block"
              style={{ transform: "translateZ(-80px) translate(24px, 24px)" }}
            />
          </div>

          <p className="mt-4 text-[10px] tracking-[0.22em] text-cream/45 uppercase">
            Toggle 2D / 3D — this is what we sell
          </p>
        </div>
      </div>
    </section>
  );
}
