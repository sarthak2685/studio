"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { methodSteps } from "@/content/services";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/** Consult → Conceptualise → Design → Install with flowing arrow path. */
export function MethodSteps() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-method-card]",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 75%" },
        },
      );

      gsap.fromTo(
        "[data-method-arrow]",
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.55,
          stagger: 0.14,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: { trigger: el, start: "top 70%" },
        },
      );

      gsap.to("[data-arrow-dash]", {
        strokeDashoffset: -28,
        duration: 1.4,
        ease: "none",
        repeat: -1,
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="mt-14">
      {/* Desktop: row with arrows */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-0">
        {methodSteps.map((step, i) => (
          <div key={step.step} className="contents">
            <article
              data-method-card
              className="relative border border-line/45 bg-night/50 p-6 backdrop-blur-[1px]"
            >
              <p className="text-[10px] tracking-[0.28em] text-gold uppercase">Step {step.step}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-snug text-cream">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </article>
            {i < methodSteps.length - 1 ? (
              <div
                data-method-arrow
                className="flex w-12 items-center justify-center px-1"
                aria-hidden
              >
                <svg viewBox="0 0 48 24" className="h-6 w-12 overflow-visible">
                  <path
                    data-arrow-dash
                    d="M2 12 H36"
                    fill="none"
                    stroke="rgba(240,180,41,0.75)"
                    strokeWidth="1.5"
                    strokeDasharray="6 6"
                  />
                  <path
                    d="M34 6 L44 12 L34 18"
                    fill="none"
                    stroke="rgba(240,180,41,0.95)"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Mobile / tablet: stacked with down arrows */}
      <div className="grid gap-0 lg:hidden">
        {methodSteps.map((step, i) => (
          <div key={step.step}>
            <article
              data-method-card
              className="border border-line/45 bg-night/50 p-6"
            >
              <p className="text-[10px] tracking-[0.28em] text-gold uppercase">Step {step.step}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-snug text-cream">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </article>
            {i < methodSteps.length - 1 ? (
              <div data-method-arrow className="flex justify-center py-3" aria-hidden>
                <svg viewBox="0 0 24 40" className="h-10 w-6 overflow-visible">
                  <path
                    data-arrow-dash
                    d="M12 2 V28"
                    fill="none"
                    stroke="rgba(240,180,41,0.75)"
                    strokeWidth="1.5"
                    strokeDasharray="5 5"
                  />
                  <path
                    d="M6 26 L12 34 L18 26"
                    fill="none"
                    stroke="rgba(240,180,41,0.95)"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
