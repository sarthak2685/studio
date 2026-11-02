"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Service } from "@/content/services";

function AutoStill({
  images,
  title,
  interval = 3200,
}: {
  images: string[];
  title: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="relative aspect-[4/5] overflow-hidden border border-line/45 bg-night md:aspect-[5/6]">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 1.12, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.04, filter: "blur(4px)" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`${title} — frame ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 48vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent opacity-70" />

      {/* Scan / light sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-gold/15 to-transparent"
        animate={{ x: ["-40%", "140%"] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear", repeatDelay: 1.2 }}
      />

      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
        <p className="text-[10px] tracking-[0.22em] text-cream/70 uppercase">
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </p>
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show frame ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-cream/35 hover:bg-cream/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServiceZigZag({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const imageLeft = index % 2 === 0;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 15%"],
  });
  // Light parallax only — opacity-on-scroll was making the page feel sticky
  const y = useTransform(scrollYProgress, [0, 1], [20, -12]);

  return (
    <motion.section
      ref={ref}
      id={service.id}
      className="relative border-b border-line/40 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <motion.div
          style={{ y }}
          className={`relative ${imageLeft ? "md:order-1" : "md:order-2"}`}
        >
          <div className="absolute -inset-3 border border-gold/15 md:-inset-4" aria-hidden />
          <AutoStill
            images={service.images}
            title={service.title}
            interval={2800 + index * 400}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 border border-gold/25 md:block"
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <motion.div
          initial={{ x: imageLeft ? 40 : -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className={imageLeft ? "md:order-2" : "md:order-1"}
        >
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">
            {String(index + 1).padStart(2, "0")} · Capability
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-snug text-cream md:text-5xl">
            {service.title}
          </h2>
          <div className="gold-rule mt-5" />
          <p className="mt-5 text-lg leading-relaxed text-cream/85 md:text-xl">{service.short}</p>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {service.description}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cream/70 md:text-base">{service.detail}</p>

          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {["Survey", "Narrative", "2D / 3D", "Install"].map((tag) => (
              <motion.span
                key={tag}
                variants={{
                  hidden: { y: 12, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
                className="border border-line/50 px-3 py-1.5 text-[10px] tracking-[0.18em] text-gold/90 uppercase"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
