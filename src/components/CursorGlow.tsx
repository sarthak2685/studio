"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

/** Soft gold spotlight that follows the pointer — desktop only. */
export function CursorGlow() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glow.current;
    if (!el || prefersReducedMotion()) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.55, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.55, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      gsap.to(el, { opacity: 1, duration: 0.4 });
    };
    const onLeave = () => gsap.to(el, { opacity: 0, duration: 0.5 });

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={glow}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[45] hidden h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 opacity-0 lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(240,180,41,0.12) 0%, rgba(122,18,18,0.06) 35%, transparent 68%)",
      }}
    />
  );
}
