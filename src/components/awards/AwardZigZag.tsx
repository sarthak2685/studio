"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Award } from "@/content/awards";

type AnimMode = "wipe" | "kenburns" | "stack";

function AwardStills({
  images,
  title,
  mode,
}: {
  images: string[];
  title: string;
  mode: AnimMode;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, mode === "stack" ? 2600 : 3400);
    return () => window.clearInterval(id);
  }, [images.length, mode]);

  return (
    <div className="relative h-full min-h-[200px] overflow-hidden border-0 border-line/45 bg-night md:min-h-[240px]">
      {mode === "wipe" ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index]}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            exit={{ clipPath: "inset(0 0 0 100%)" }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover"
              sizes="48vw"
            />
          </motion.div>
        </AnimatePresence>
      ) : null}

      {mode === "kenburns" ? (
        <AnimatePresence mode="sync">
          <motion.div
            key={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1 }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1.08, 1] }}
              transition={{ duration: 3.4, ease: "easeOut" }}
            >
              <Image
                src={images[index]}
                alt={`${title} ${index + 1}`}
                fill
                className="object-cover"
                sizes="48vw"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      ) : null}

      {mode === "stack" ? (
        <div className="absolute inset-0">
          {images.map((src, i) => {
            const order = (i - index + images.length) % images.length;
            const isFront = order === 0;
            return (
              <motion.div
                key={`${src}-${i}`}
                className="absolute inset-[8%]"
                initial={false}
                animate={{
                  x: order * 14,
                  y: order * 10,
                  scale: 1 - order * 0.04,
                  opacity: order > 2 ? 0 : 1 - order * 0.2,
                  zIndex: 10 - order,
                  rotate: isFront ? 0 : order % 2 === 0 ? -2 : 2.5,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
              >
                <div className="relative h-full w-full overflow-hidden border border-line/40">
                  <Image src={src} alt="" fill className="object-cover" sizes="48vw" />
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />

      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
        <p className="text-[10px] tracking-[0.2em] text-cream/70 uppercase">
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </p>
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Frame ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all ${
                i === index ? "w-5 bg-gold" : "w-1.5 bg-cream/35 hover:bg-cream/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const modes: AnimMode[] = ["wipe", "kenburns", "stack", "wipe", "kenburns"];

export function AwardZigZag({ award, index }: { award: Award; index: number }) {
  const imageLeft = index % 2 === 0;
  const mode = modes[index % modes.length];

  return (
    <motion.article
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-7xl px-5 py-4 md:px-8 md:py-5"
    >
      <div
        className={`grid items-center gap-5 overflow-hidden border border-line/45 bg-night/50 md:grid-cols-[0.85fr_1.15fr] md:gap-0 ${
          imageLeft ? "" : "md:[&>*:first-child]:order-2"
        }`}
      >
        <div className="relative h-[210px] overflow-hidden md:h-[250px]">
          <AwardStills images={award.images} title={award.title} mode={mode} />
        </div>

        <div className="flex flex-col justify-center p-5 md:p-7 lg:p-8">
          <div className="flex items-start justify-between gap-3">
            <p className="text-[10px] tracking-[0.24em] text-gold uppercase">
              {award.place} · {award.year}
            </p>
            <span className="text-2xl font-semibold text-burgundy-glow md:text-3xl">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h2 className="mt-3 text-2xl font-bold leading-snug text-cream md:text-3xl">
            {award.title}
          </h2>
          <p className="mt-2 text-base text-gold">{award.result}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-[15px]">{award.detail}</p>
          {award.projectSlug ? (
            <Link
              href={`/work/${award.projectSlug}`}
              className="mt-5 inline-flex text-xs tracking-[0.2em] text-gold uppercase underline-offset-4 hover:underline"
            >
              View project →
            </Link>
          ) : (
            <p className="mt-5 text-[10px] tracking-[0.2em] text-cream/40 uppercase">
              Studio honour
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
