"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { awards } from "@/content/awards";
import { SketchField } from "@/components/SketchField";

const ribbon = [
  "China · Yifeng Silver 2024",
  "Italy · XR Festival Florence 2025",
  "Germany · Light Our Vision",
  "India · SIIA Best Projection Mapping",
  "4× National Best Show",
];

export function AwardsTeaser() {
  const loop = [...ribbon, ...ribbon];

  return (
    <section className="section-pad relative overflow-hidden border-t border-line py-24 md:py-32">
      <SketchField />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Recognition</p>
          <h2 className="mt-4 text-3xl font-semibold leading-snug text-cream md:text-5xl">
            Applause that crossed borders
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Stages in China, Italy, Germany and India — each honour paired with the light that
            earned it.
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-12 overflow-hidden border-y border-line/50 bg-burgundy-deep py-5">
        <div className="marquee-track-reverse flex w-max gap-10 whitespace-nowrap">
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-10">
              <span className="text-sm tracking-[0.18em] text-cream uppercase md:text-base">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 grid max-w-7xl gap-5 px-5 md:px-8">
        {awards.slice(0, 4).map((award, i) => (
          <MedalCard key={award.id} index={i} image={award.image} imageLeft={i % 2 === 0}>
            <div className="flex items-start justify-between gap-4">
              <p className="text-[10px] tracking-[0.24em] text-gold uppercase">
                {award.place} · {award.year}
              </p>
              <span className="text-2xl font-semibold text-burgundy-glow md:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold leading-snug text-cream md:text-3xl">
              {award.title}
            </h3>
            <p className="mt-3 text-lg text-gold">{award.result}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{award.detail}</p>
          </MedalCard>
        ))}
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-7xl px-5 md:px-8">
        <Link
          href="/awards"
          className="inline-block text-xs tracking-[0.22em] text-gold uppercase underline-offset-4 hover:underline"
        >
          All achievements
        </Link>
      </div>
    </section>
  );
}

function MedalCard({
  children,
  index,
  image,
  imageLeft,
}: {
  children: React.ReactNode;
  index: number;
  image: string;
  imageLeft: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 22 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const gx = useSpring(glowX, { stiffness: 140, damping: 22 });
  const gy = useSpring(glowY, { stiffness: 140, damping: 22 });
  const glow = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgba(240,180,41,0.18), transparent 50%)`;

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        glowX.set(px * 100);
        glowY.set(py * 100);
        rotateX.set((py - 0.5) * -8);
        rotateY.set((px - 0.5) * 8);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
        glowX.set(50);
        glowY.set(50);
      }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="relative grid overflow-hidden border border-line/50 bg-night-elevated/90 md:grid-cols-[1.1fr_0.9fr]"
    >
      <motion.div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 z-[1]"
      />
      <div
        className={`relative z-[2] min-h-[220px] overflow-hidden md:min-h-[280px] ${
          imageLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image src={image} alt="" fill className="object-cover opacity-90" sizes="40vw" />
        <div
          className={`absolute inset-0 ${
            imageLeft
              ? "bg-gradient-to-r from-transparent via-transparent to-night/50 md:to-night/70"
              : "bg-gradient-to-l from-transparent via-transparent to-night/50 md:to-night/70"
          }`}
        />
      </div>
      <div
        className={`relative z-[2] p-6 md:p-8 ${imageLeft ? "md:order-2" : "md:order-1"}`}
      >
        {children}
      </div>
    </motion.div>
  );
}
