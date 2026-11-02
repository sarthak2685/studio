"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SketchField } from "@/components/SketchField";
import { reels } from "@/content/reels";

export function VideoReels() {
  return (
    <section
      className="section-pad relative overflow-hidden border-t border-line py-20 md:py-28"
      aria-label="Show reels"
    >
      <SketchField />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Video / Reels</p>
            <h2 className="mt-4 text-3xl font-bold leading-snug text-cream md:text-5xl">
              The night, in motion
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Short cuts from Magical Theatre shows — tap to play with sound. More reels from the
              archive coming as we light the rest of the map.
            </p>
          </div>
          <p className="text-[10px] tracking-[0.2em] text-cream/40 uppercase">
            Sample · 02 clips
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          {reels.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReelCard({
  reel,
  index,
}: {
  reel: (typeof reels)[number];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    // Soft autoplay muted for presence
    el.muted = true;
    const play = el.play();
    if (play) play.catch(() => undefined);
    setPlaying(true);
  }, []);

  return (
    <motion.article
      initial={{ y: 36, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden border border-line/45 bg-night"
    >
      <div className="relative aspect-[9/14] overflow-hidden md:aspect-[9/13]">
        <video
          ref={videoRef}
          src={reel.src}
          poster={reel.poster}
          className="absolute inset-0 h-full w-full object-cover"
          playsInline
          loop
          muted={muted}
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/20" />

        {/* Gold frame accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-3 border border-gold/20 opacity-0 transition group-hover:opacity-100"
        />

        <div className="absolute inset-x-0 bottom-0 z-10 p-5">
          <p className="text-[10px] tracking-[0.22em] text-gold uppercase">{reel.place}</p>
          <h3 className="mt-2 text-xl font-semibold leading-snug text-cream">{reel.title}</h3>

          <div className="mt-4 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                const el = videoRef.current;
                if (!el) return;
                if (el.paused) {
                  void el.play();
                } else {
                  el.pause();
                }
              }}
              className="border border-gold/50 bg-night/70 px-3 py-2 text-[10px] tracking-[0.18em] text-cream uppercase backdrop-blur-sm transition hover:border-gold hover:text-gold"
            >
              {playing ? "Pause" : "Play"}
            </button>
            <button
              type="button"
              onClick={() => {
                const next = !muted;
                setMuted(next);
                if (videoRef.current) videoRef.current.muted = next;
              }}
              className="border border-line/50 bg-night/70 px-3 py-2 text-[10px] tracking-[0.18em] text-cream/80 uppercase backdrop-blur-sm transition hover:border-gold/40 hover:text-gold"
            >
              {muted ? "Unmute" : "Mute"}
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
