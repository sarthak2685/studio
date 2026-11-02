"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SketchField } from "@/components/SketchField";
import { reels, type Reel } from "@/content/reels";

export function VideoReels() {
  const [active, setActive] = useState<Reel | null>(null);

  return (
    <section
      className="theme-lift section-pad relative overflow-hidden border-t border-line py-20 md:py-28"
      aria-label="Show reels"
    >
      <SketchField />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Video / Reels</p>
          <h2 className="mt-4 text-3xl font-bold leading-snug text-cream md:text-5xl">
            The night, in motion
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Short cuts from Magical Theatre shows — open a frame to watch the night come alive.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {reels.map((reel, i) => (
            <ReelTile key={reel.id} reel={reel} index={i} onOpen={() => setActive(reel)} />
          ))}
        </div>
      </div>

      <ReelModal reel={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ReelTile({
  reel,
  index,
  onOpen,
}: {
  reel: Reel;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onClick={onOpen}
      aria-label={`Play ${reel.title}`}
      className="group relative aspect-[3/4] w-full overflow-hidden border border-line/40 bg-night text-left outline-none transition hover:border-gold/45 focus-visible:ring-2 focus-visible:ring-gold/50"
    >
      <Image
        src={reel.poster}
        alt=""
        fill
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 50vw, 25vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-night/15" />

      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-gold/55 bg-night/55 backdrop-blur-sm transition group-hover:border-gold group-hover:bg-night/70 md:h-16 md:w-16"
      >
        <PlayIcon />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <p className="text-[10px] tracking-[0.2em] text-gold uppercase">{reel.place}</p>
        <h3 className="mt-1.5 text-base font-semibold leading-snug text-cream md:text-lg">
          {reel.title}
        </h3>
      </div>
    </motion.button>
  );
}

function ReelModal({ reel, onClose }: { reel: Reel | null; onClose: () => void }) {
  const titleId = useId();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!reel) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const el = videoRef.current;
    if (el) {
      el.currentTime = 0;
      void el.play().catch(() => undefined);
    }

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [reel, onClose]);

  return (
    <AnimatePresence>
      {reel ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Close video"
            className="absolute inset-0 bg-night/90 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-4xl overflow-hidden border border-line/50 bg-night shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-line/40 px-5 py-4 md:px-6">
              <div>
                <p className="text-[10px] tracking-[0.22em] text-gold uppercase">{reel.place}</p>
                <h3 id={titleId} className="mt-1 text-lg font-semibold text-cream md:text-xl">
                  {reel.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="border border-line/50 px-3 py-2 text-[10px] tracking-[0.2em] text-cream/80 uppercase transition hover:border-gold hover:text-gold"
              >
                Close
              </button>
            </div>

            <div className="relative aspect-video bg-night">
              <video
                key={reel.id}
                ref={videoRef}
                src={reel.src}
                poster={reel.poster}
                className="absolute inset-0 h-full w-full object-contain"
                controls
                playsInline
                autoPlay
                preload="metadata"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 5.5v13l11-6.5L8 5.5Z" fill="currentColor" className="text-gold" />
    </svg>
  );
}
