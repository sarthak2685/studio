"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getFeaturedProjects } from "@/content/projects";
import { mediaForProject } from "@/content/media";

const STACK = [
  { width: "72%", top: "8%", left: "0%", rotate: -1.5 },
  { width: "58%", top: "0%", left: "38%", rotate: 2.8 },
  { width: "54%", top: "44%", left: "26%", rotate: -3.2 },
] as const;

export function WorkHero() {
  const shots = getFeaturedProjects().slice(0, 3);
  /** Index currently on top of the stack */
  const [front, setFront] = useState(1);

  return (
    <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
      <motion.div
        initial={{ y: 28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm font-bold tracking-[0.36em] text-gold uppercase md:text-base">
          Work
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-cream md:text-6xl lg:text-[4.25rem]">
          Where we’ve put on a show
        </h1>
        <div className="gold-rule mt-6" />
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
          Son-et-lumière, water & laser, museums and high-profile events — each project told in
          full, from façade survey to opening night.
        </p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted md:text-base">
          Tap a still to bring it forward — then open any card below for the full case study.
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 36, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto hidden h-[300px] w-full max-w-md lg:mx-0 lg:block lg:h-[340px] lg:max-w-none"
        aria-label="Featured show stills — click to bring forward"
      >
        {shots.map((project, i) => {
          const isFront = front === i;
          const z = isFront ? 30 : 10 + ((i + front) % 3);
          const layout = STACK[i];

          return (
            <motion.button
              key={project.slug}
              type="button"
              onClick={() => setFront(i)}
              aria-pressed={isFront}
              aria-label={`Bring ${project.title} to front`}
              className="absolute overflow-hidden border border-line/50 bg-night text-left shadow-[0_20px_60px_rgba(0,0,0,0.45)] outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              style={{
                width: layout.width,
                aspectRatio: "16 / 10",
                top: layout.top,
                left: layout.left,
                zIndex: z,
              }}
              initial={false}
              animate={{
                scale: isFront ? 1.06 : 0.96,
                rotate: isFront ? 0 : layout.rotate,
                y: isFront ? -10 : 0,
                filter: isFront ? "brightness(1)" : "brightness(0.72)",
                boxShadow: isFront
                  ? "0 28px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(240,180,41,0.35)"
                  : "0 16px 40px rgba(0,0,0,0.4)",
              }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              whileHover={isFront ? undefined : { scale: 0.99, filter: "brightness(0.85)" }}
            >
              <Image
                src={mediaForProject(project.slug, i)}
                alt={project.title}
                fill
                className="object-cover"
                sizes="360px"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
              <AnimatePresence>
                {isFront ? (
                  <motion.span
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute bottom-3 left-3 right-3 text-[10px] tracking-[0.18em] text-cream/90 uppercase"
                  >
                    {project.title}
                  </motion.span>
                ) : null}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
