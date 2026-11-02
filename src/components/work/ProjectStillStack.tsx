"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mediaForProject, mediaForSlug } from "@/content/media";

type Props = {
  slug: string;
  title: string;
};

export function ProjectStillStack({ slug, title }: Props) {
  const stills = useMemo(
    () => [
      mediaForProject(slug, 0),
      mediaForSlug(slug, 1),
      mediaForSlug(slug, 2),
      mediaForSlug(slug, 3),
    ],
    [slug],
  );
  const [active, setActive] = useState(0);

  return (
    <div className="mt-14">
      <p className="text-xs tracking-[0.24em] text-gold uppercase">Stills from the night</p>
      <p className="mt-2 text-sm text-muted">Click a frame to bring it forward.</p>

      <div className="relative mt-6 h-[240px] sm:h-[300px] md:h-[360px]">
        {stills.map((src, i) => {
          const isFront = active === i;
          const offset = (i - active + stills.length) % stills.length;
          return (
            <motion.button
              key={`${src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isFront}
              aria-label={`Show still ${i + 1} of ${title}`}
              className="absolute overflow-hidden border border-line/45 bg-night outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
              style={{
                width: "78%",
                maxWidth: 560,
                aspectRatio: "16 / 10",
                left: `${8 + offset * 7}%`,
                top: `${offset * 6}%`,
                zIndex: isFront ? 20 : 10 - offset,
              }}
              initial={false}
              animate={{
                scale: isFront ? 1 : 0.94 - offset * 0.02,
                opacity: isFront ? 1 : 0.55 + (3 - offset) * 0.08,
                rotate: isFront ? 0 : offset % 2 === 0 ? -2.5 : 2.2,
                filter: isFront ? "brightness(1)" : "brightness(0.65)",
              }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
            >
              <Image
                src={src}
                alt={`${title} still ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent" />
            </motion.button>
          );
        })}
      </div>

      <div className="mt-4 flex gap-2">
        {stills.map((src, i) => (
          <button
            key={`thumb-${i}`}
            type="button"
            onClick={() => setActive(i)}
            className={`relative h-12 w-16 overflow-hidden border transition sm:h-14 sm:w-20 ${
              active === i ? "border-gold" : "border-line/40 opacity-70 hover:opacity-100"
            }`}
            aria-label={`Select still ${i + 1}`}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="80px" />
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-3 text-[10px] tracking-[0.2em] text-muted uppercase"
        >
          Frame {String(active + 1).padStart(2, "0")} / {String(stills.length).padStart(2, "0")}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
