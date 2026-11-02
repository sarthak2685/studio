"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/content/site";
import { SketchField } from "@/components/SketchField";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  // years
  <svg key="y" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l2.5 1.5" />
  </svg>,
  // shows
  <svg key="s" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M4 18V7l8-3 8 3v11" />
    <path d="M4 18l8 3 8-3" />
    <path d="M12 4v17" />
  </svg>,
  // india / map pin
  <svg key="i" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>,
  // award
  <svg key="a" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="9" r="5" />
    <path d="M9 13.5 8 21l4-2 4 2-1-7.5" />
  </svg>,
];

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
            scrollTrigger: {
              trigger: node,
              start: "top 88%",
              toggleActions: "play none none none",
            },
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
    <section ref={ref} className="theme-lift section-pad relative overflow-hidden border-y border-line">
      <SketchField />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
        {site.stats.map((stat, i) => (
          <div
            key={stat.label}
            className="px-5 py-12 md:px-8 md:py-16"
          >
            <div className="text-gold/80">{icons[i]}</div>
            <p
              data-count
              data-value={stat.value}
              className="mt-5 text-4xl font-semibold text-gold md:text-5xl"
            >
              {stat.value}
            </p>
            <p className="mt-3 text-xs leading-relaxed tracking-[0.14em] text-muted uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
