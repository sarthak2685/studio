"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/content/services";
import { SketchField } from "@/components/SketchField";
import { ServiceZigZag } from "@/components/services/ServiceZigZag";
import { MethodSteps } from "@/components/about/MethodSteps";

export function ServicesExplorer() {
  return (
    <>
      {/* Hero */}
      <section className="section-pad relative overflow-hidden border-b border-line py-16 md:py-24">
        <SketchField />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-bold tracking-[0.36em] text-gold uppercase md:text-base">
              Services
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-cream md:text-6xl lg:text-[4.25rem]">
              What we create
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
              Projection mapping, son-et-lumière, laser & water, museums, events and façade lighting
              — turnkey or as content partners, always mapped to the architecture.
            </p>
          </motion.div>

          {/* Jump pills */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {services.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="border border-line/50 px-4 py-2 text-[10px] tracking-[0.2em] text-muted uppercase transition hover:border-gold/50 hover:text-gold"
              >
                {String(i + 1).padStart(2, "0")} {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Zigzag capabilities */}
      <div className="section-pad relative overflow-hidden">
        <SketchField className="opacity-80" />
        <div className="relative z-10">
          {services.map((service, i) => (
            <ServiceZigZag key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>

      {/* Process */}
      <section className="section-pad relative overflow-hidden border-t border-line py-20 md:py-28">
        <SketchField />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Process</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-snug text-cream md:text-5xl">
              From survey to showtime
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Every install is mapped to the architecture and signed off with you — one studio, end
              to end.
            </p>
          </motion.div>
          <MethodSteps />
        </div>
      </section>

      {/* Soft close strip */}
      <section className="section-pad relative overflow-hidden border-t border-line">
        <SketchField className="opacity-90" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-20">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Next step</p>
            <h2 className="mt-3 text-3xl font-semibold text-cream md:text-4xl">
              Bring us a site. We bring the night.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-burgundy px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase transition hover:bg-burgundy-glow"
            >
              Plan your show
            </Link>
            <Link
              href="/work"
              className="border border-cream/30 px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase transition hover:border-gold hover:text-gold"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
