"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "15+", label: "Years of storytelling in light" },
  { value: "40+", label: "Landmark shows, museums & events" },
  { value: "12", label: "States & UTs across India" },
  { value: "3", label: "International honours — Italy, Germany, China" },
];

/** Signage numerals, extruded in gold and maroon like a theatre hoarding. */
export function Stats() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((node) => {
        const raw = node.dataset.value || "";
        const numeric = parseFloat(raw.replace(/[^\d.]/g, ""));
        if (Number.isNaN(numeric)) return;
        const suffix = raw.replace(/[\d.\s]/g, "");
        const obj = { val: 0 };
        gsap.fromTo(
          obj,
          { val: 0 },
          {
            val: numeric,
            duration: 1.8,
            ease: "power2.out",
            immediateRender: false,
            scrollTrigger: { trigger: node, start: "top 88%", toggleActions: "play none none none" },
            onUpdate: () => {
              node.textContent = `${Math.round(obj.val)}${suffix}`;
            },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} aria-label="At a glance" className="bg-night">
      <div className="mx-auto grid max-w-[82.5rem] gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="py-3">
            <p
              data-count
              data-value={stat.value}
              className="num-extrude font-display text-[4rem] leading-none font-black text-gold lg:text-[6rem]"
              style={{ fontStretch: "112%" }}
            >
              {stat.value}
            </p>
            <p className="mt-3.5 text-muted-soft">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
