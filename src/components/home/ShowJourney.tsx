"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { showPlaces } from "@/content/presence";
import { SketchField } from "@/components/SketchField";

/**
 * Tree-stem of show places — NO ScrollTrigger pin (won't get stuck).
 * Center stem fills with Framer scroll progress; cards alternate L/R.
 */
export function ShowJourney() {
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start 70%", "end 25%"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });
  const lineScale = useTransform(smooth, [0, 1], [0, 1]);

  return (
    <section
      id="journey"
      className="section-pad relative overflow-hidden border-t border-line bg-night py-24 md:py-32"
      aria-label="Show places across India"
    >
      <SketchField />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Show journey</p>
          <h2 className="mt-4 text-3xl font-semibold leading-snug text-cream md:text-5xl">
            One stem. Many stages.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Scroll the tree — left, then right — through the landmarks Magical Theatre lights across
            India.
          </p>
        </div>

        <div ref={track} className="relative mt-16 md:mt-24">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-4 w-px overflow-hidden bg-cream/10 md:left-1/2 md:-translate-x-1/2"
          >
            <motion.div
              style={{ scaleY: lineScale, transformOrigin: "top" }}
              className="h-full w-full bg-gradient-to-b from-gold via-burgundy-glow to-gold"
            />
          </div>

          <ul className="space-y-20 md:space-y-28">
            {showPlaces.map((place, i) => (
              <JourneyNode key={place.slug} place={place} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function JourneyNode({
  place,
  index,
}: {
  place: (typeof showPlaces)[number];
  index: number;
}) {
  const left = index % 2 === 0;

  return (
    <motion.li
      initial={{ opacity: 0, y: 48, x: left ? -36 : 36 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <span
        aria-hidden
        className="absolute top-10 left-4 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-gold bg-night shadow-[0_0_18px_rgba(240,180,41,0.55)] md:left-1/2"
      />

      <div
        className={`grid items-center gap-6 pl-10 md:grid-cols-2 md:gap-14 md:pl-0 ${
          left ? "" : "md:[&>*:first-child]:order-2"
        }`}
      >
        <Link
          href={`/work/${place.slug}`}
          className={`group relative aspect-[16/10] overflow-hidden border border-line/40 ${
            left ? "md:mr-8" : "md:ml-8"
          }`}
        >
          <Image
            src={place.media}
            alt={place.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
          <p className="absolute bottom-3 left-3 text-[10px] tracking-[0.2em] text-gold uppercase">
            {place.format}
          </p>
        </Link>

        <div className={left ? "md:pl-8" : "md:pr-8 md:text-right"}>
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
            {String(index + 1).padStart(2, "0")} · {place.place}
          </p>
          <h3 className="mt-3 text-2xl font-semibold leading-snug text-cream md:text-4xl">
            {place.title}
          </h3>
          <p
            className={`mt-4 text-sm leading-relaxed text-muted md:text-base ${
              left ? "md:max-w-md" : "md:ml-auto md:max-w-md"
            }`}
          >
            {place.blurb}
          </p>
          <Link
            href={`/work/${place.slug}`}
            className="mt-5 inline-block text-xs tracking-[0.2em] text-gold uppercase underline-offset-4 hover:underline"
          >
            View show
          </Link>
        </div>
      </div>
    </motion.li>
  );
}
