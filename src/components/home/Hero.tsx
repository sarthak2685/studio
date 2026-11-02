"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { site } from "@/content/site";
import { heroMedia } from "@/content/media";
import { prefersReducedMotion } from "@/lib/motion";

const PRODUCT_STILLS = [
  {
    id: "2d",
    src: "/media/bundle-03.jpg",
    label: "2D frames",
    eyebrow: "Product · 2D narrative",
    caption: "Illustrated story locked frame-by-frame to the façade.",
  },
  {
    id: "3d",
    src: "/media/bundle-00.jpg",
    label: "3D mapping",
    eyebrow: "Product · 3D depth",
    caption: "Architecture gains volume, motion and relief.",
  },
  {
    id: "heritage",
    src: "/media/hero-product-temple.jpg",
    label: "Heritage show",
    eyebrow: "Product · Living temple",
    caption: "Faith, flag and façade — a monument told in light.",
  },
] as const;

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-media]",
        { scale: 1.14 },
        { scale: 1, duration: 2.4, ease: "power2.out" },
      );
      gsap.fromTo(
        "[data-hero-mask]",
        { yPercent: 105 },
        { yPercent: 0, duration: 1, stagger: 0.12, ease: "power3.out", delay: 0.2 },
      );
      gsap.fromTo(
        "[data-hero-fade]",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out", delay: 0.5 },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % PRODUCT_STILLS.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  const active = PRODUCT_STILLS[index] ?? PRODUCT_STILLS[1];

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
    >
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
        {PRODUCT_STILLS.map((still) => (
          <Image key={still.id} src={still.src} alt="" width={16} height={16} priority />
        ))}
      </div>

      {/* Full-bleed show photo */}
      <div className="absolute inset-0 bg-night" aria-hidden />
      <div className="absolute inset-0 overflow-hidden">
        <div data-hero-media className="absolute inset-[-6%] will-change-transform">
          <Image
            src={heroMedia}
            alt="Magical Theatre projection mapping"
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
        </div>
      </div>

      {/* Dark readability overlays — banner only (matches reference) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-black/45"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[70%] max-w-3xl bg-gradient-to-r from-black/75 via-black/35 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/90 via-black/50 to-transparent"
      />

      {/* Two-column layout: copy | product stage */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-14 md:px-8 lg:gap-16">
        {/* Left — text */}
        <div className="max-w-xl">
          <p data-hero-fade className="text-[11px] tracking-[0.34em] text-gold uppercase">
            Magical Theatre · Product
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-[3.35rem] lg:text-[3.85rem]">
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
            className="mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-[1.05rem]"
          >
            Projection mapping, son-et-lumière, laser & water — designed, animated and installed so
            architecture becomes the screen.
          </p>

          <div data-hero-fade className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex min-w-[10.5rem] items-center justify-center bg-burgundy px-6 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition hover:bg-burgundy-glow"
            >
              See the shows
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-w-[10.5rem] items-center justify-center border border-white/50 px-6 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition hover:border-gold hover:text-gold"
            >
              {site.cta.primary}
            </Link>
          </div>
        </div>

        {/* Right — product stage */}
        <div data-hero-fade className="w-full max-w-lg justify-self-end md:max-w-none">
          <div className="mb-3 flex flex-wrap gap-2">
            {PRODUCT_STILLS.map((still, i) => (
              <button
                key={still.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`px-3.5 py-2 text-[10px] tracking-[0.2em] uppercase transition ${
                  index === i
                    ? "bg-gold text-night"
                    : "border border-white/40 text-white/75 hover:border-gold hover:text-gold"
                }`}
              >
                {still.label}
              </button>
            ))}
          </div>

          <div className="product-stage relative" style={{ perspective: "1400px" }}>
            <div
              key={active.id}
              className="product-card relative aspect-[5/4] w-full overflow-hidden border border-white/20 shadow-[0_28px_70px_rgba(0,0,0,0.55)]"
            >
              <Image
                src={active.src}
                alt={active.caption}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 42vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="text-[10px] tracking-[0.28em] text-gold uppercase">{active.eyebrow}</p>
                <p className="mt-2 text-base font-semibold text-white md:text-lg">{active.caption}</p>
              </div>
            </div>

            {/* Offset gold frame — reference wireframe */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 translate-x-2.5 translate-y-2.5 border border-gold/35 md:translate-x-3 md:translate-y-3"
            />
          </div>

          <p className="mt-5 text-[10px] tracking-[0.22em] text-white/40 uppercase">
            Toggle 2D / 3D — this is what we sell
          </p>
        </div>
      </div>
    </section>
  );
}
