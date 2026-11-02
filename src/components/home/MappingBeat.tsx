"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { methodSteps } from "@/content/services";
import { SectionHeading } from "@/components/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export function MappingBeat() {
  const ref = useRef<HTMLElement>(null);
  const [drag, setDrag] = useState(42);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-map-copy]", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div data-map-copy>
        <SectionHeading
          eyebrow="How the magic works"
          title="We scan every arch, then paint the story in light."
          body="Survey every pillar and cornice, build a 3D model of the façade, then map narrative onto architecture — down to the last carving."
        />
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="media-placeholder relative aspect-[4/3] overflow-hidden border border-line">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background: `linear-gradient(105deg, rgba(5,3,4,0.2) ${drag - 8}%, rgba(122,18,18,0.55) ${drag}%, rgba(240,180,41,0.25) ${drag + 12}%, rgba(5,3,4,0.85) ${drag + 28}%)`,
            }}
          />
          <div className="absolute inset-x-8 top-1/3 h-px bg-cream/10" />
          <div className="absolute inset-y-10 left-1/3 w-px bg-cream/10" />
          <div className="absolute inset-y-16 right-1/4 w-px bg-gold/20" />
          <p className="absolute left-5 top-5 text-[10px] tracking-[0.24em] text-cream/50 uppercase">
            Survey & 3D model
          </p>
          <p className="absolute bottom-5 right-5 text-[10px] tracking-[0.24em] text-gold uppercase">
            Showtime
          </p>
          <label className="absolute inset-x-5 bottom-14 block">
            <span className="sr-only">Drag to project</span>
            <input
              type="range"
              min={10}
              max={85}
              value={drag}
              onChange={(e) => setDrag(Number(e.target.value))}
              className="w-full accent-gold"
            />
            <span className="mt-2 block text-[10px] tracking-[0.2em] text-muted uppercase">
              Drag to project
            </span>
          </label>
        </div>

        <ol className="space-y-6">
          {methodSteps.map((step) => (
            <li key={step.step} className="border-l border-line pl-5">
              <p className="text-[10px] tracking-[0.28em] text-gold uppercase">Step {step.step}</p>
              <h3 className="font-display mt-2 text-2xl text-cream">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
