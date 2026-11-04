"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { reels, type Reel } from "@/content/reels";

export function VideoReels() {
  const [active, setActive] = useState<Reel | null>(null);

  return (
    <section
      aria-label="Show reels"
      className="relative overflow-hidden border-t border-line bg-night py-20 md:py-24"
    >
      <div className="mx-auto max-w-[82.5rem] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3.5">Video / Reels</p>
            <h2 className="display-lg text-[clamp(2.125rem,4.4vw,3.875rem)]">The night, in motion</h2>
          </div>
          <p className="max-w-[26rem] text-muted-soft">
            Short cuts from Magical Theatre shows. Hover a frame to preview it, click to watch it
            full size with sound.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-3">
          {reels.map((reel, i) => (
            <ReelTile key={reel.id} reel={reel} index={i} onOpen={() => setActive(reel)} />
          ))}
        </div>
      </div>

      <ReelModal reel={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ReelTile({ reel, index, onOpen }: { reel: Reel; index: number; onOpen: () => void }) {
  const video = useRef<HTMLVideoElement>(null);
  const [preview, setPreview] = useState(false);

  const start = () => {
    setPreview(true);
    void video.current?.play().catch(() => undefined);
  };
  const stop = () => {
    setPreview(false);
    video.current?.pause();
  };

  return (
    <motion.button
      type="button"
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onClick={onOpen}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      aria-label={`Play ${reel.title}`}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-md border border-line bg-night text-left transition hover:border-gold/50"
    >
      <Image
        src={reel.poster}
        alt=""
        fill
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
        sizes="(max-width: 1024px) 50vw, 33vw"
      />
      <video
        ref={video}
        src={reel.src}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          preview ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-stage via-stage/20 to-transparent" />

      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold/90 text-ink transition group-hover:bg-gold md:h-16 md:w-16"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M8 5.5v13l11-6.5L8 5.5Z" />
        </svg>
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <p className="text-[0.8125rem] tracking-[0.16em] text-gold uppercase">{reel.place}</p>
        <h3 className="mt-1 text-lg font-semibold text-cream">{reel.title}</h3>
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
            className="absolute inset-0 bg-stage/90 backdrop-blur-sm"
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
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-md border border-line bg-night shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-6">
              <div>
                <p className="text-[0.8125rem] tracking-[0.16em] text-gold uppercase">
                  {reel.place}
                </p>
                <h3 id={titleId} className="mt-1 text-xl font-semibold text-cream">
                  {reel.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-cream/25 px-4 py-2 text-[0.8125rem] tracking-[0.16em] text-cream uppercase transition hover:border-gold hover:text-gold"
              >
                Close
              </button>
            </div>

            <div className="relative aspect-video bg-stage">
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
