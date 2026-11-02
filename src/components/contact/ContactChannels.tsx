"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { studioMedia } from "@/content/media";

const channels = [
  {
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    note: "Briefs & proposals",
  },
  {
    label: "Phone",
    value: site.contact.phone,
    href: site.contact.phoneHref,
    note: "Speak with the studio",
  },
  {
    label: "WhatsApp",
    value: "Message the team",
    href: site.contact.whatsapp,
    note: "Fast line · same people",
    external: true,
  },
] as const;

export function ContactChannels() {
  return (
    <motion.div
      initial={{ y: 28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-5"
    >
      <div className="relative overflow-hidden border border-line/45">
        <div className="relative aspect-[16/10]">
          <Image
            src={studioMedia}
            alt="Magical Theatre studio"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-[10px] tracking-[0.24em] text-gold uppercase">Studio</p>
            <p className="mt-2 text-sm leading-relaxed text-cream/90 md:text-base">
              {site.contact.address}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-3">
        {channels.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target={"external" in item && item.external ? "_blank" : undefined}
            rel={"external" in item && item.external ? "noreferrer" : undefined}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
            className="group flex items-center justify-between gap-4 border border-line/45 bg-night/40 px-5 py-4 transition hover:border-gold/45"
          >
            <div>
              <p className="text-[10px] tracking-[0.24em] text-gold uppercase">{item.label}</p>
              <p className="mt-1.5 text-base text-cream transition group-hover:text-gold">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-muted">{item.note}</p>
            </div>
            <span
              aria-hidden
              className="text-gold/70 transition group-hover:translate-x-1 group-hover:text-gold"
            >
              →
            </span>
          </motion.a>
        ))}
      </div>

      <a
        href={site.contact.instagram}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-1 text-xs tracking-[0.22em] text-cream/55 uppercase transition hover:text-gold"
      >
        {site.contact.instagramHandle}
        <span aria-hidden>↗</span>
      </a>
    </motion.div>
  );
}
