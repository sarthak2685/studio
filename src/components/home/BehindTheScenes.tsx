"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const shots = [
  { src: "/media/bts/behind-the-scene---9.jpg", caption: "Rigging the river line", span: "lg:col-span-2 lg:row-span-2" },
  { src: "/media/bts/behind-the-scene---6.jpg", caption: "Green-screen shoot day" },
  { src: "/media/bts/behind-the-scene---1.jpg", caption: "Projector towers going up" },
  { src: "/media/bts/behind-the-scene---10.jpg", caption: "Control desk, opening night" },
  { src: "/media/bts/behind-the-scene---7.jpg", caption: "Water screen, full house" },
  { src: "/media/bts/kashi---2.jpg", caption: "Kashi, before the crowd" },
  { src: "/media/bts/shoot---1.jpg", caption: "Studio build" },
];

/**
 * The unglamorous half of the craft — scaffolds, shoots and control desks —
 * shown because it is the proof that the studio owns the whole chain.
 */
export function BehindTheScenes() {
  return (
    <section
      aria-label="Behind the scenes"
      className="border-t border-line bg-night-elevated py-20 md:py-24"
    >
      <div className="mx-auto max-w-[82.5rem] px-6">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
          <div className="min-w-0 flex-1 basis-[28rem]">
            <p className="eyebrow mb-3.5">Behind the scenes</p>
            <h2 className="display-lg text-[clamp(2.125rem,4.4vw,3.875rem)]">
              Before the lights go up
            </h2>
          </div>
          <p className="max-w-[24rem] min-w-0 flex-1 basis-[20rem] text-muted-soft">
            Site surveys, scaffold towers, costume shoots and the control desk at midnight — the
            work the audience never sees.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4 lg:auto-rows-[12rem]">
          {shots.map((shot, i) => (
            <motion.figure
              key={shot.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-md border border-line bg-night ${shot.span ?? ""}`}
            >
              <Image
                src={shot.src}
                alt={shot.caption}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stage/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3.5 text-[0.9375rem] font-medium text-cream">
                {shot.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
