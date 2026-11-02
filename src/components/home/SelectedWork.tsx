"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getFeaturedProjects, categoryLabels } from "@/content/projects";
import { mediaForProject } from "@/content/media";
import { SketchField } from "@/components/SketchField";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

/** Horizontal page-flip through landmark shows while section is pinned. */
export function SelectedWork() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const featured = getFeaturedProjects().slice(0, 5);

  useEffect(() => {
    const root = section.current;
    const board = stage.current;
    if (!root || !board || prefersReducedMotion()) return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const pages = gsap.utils.toArray<HTMLElement>("[data-flip-page]", board);
    if (pages.length < 2) return;

    const ctx = gsap.context(() => {
      gsap.set(pages, {
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      });
      gsap.set(pages[0], { rotateY: 0, zIndex: pages.length, autoAlpha: 1 });
      pages.slice(1).forEach((page, i) => {
        gsap.set(page, { rotateY: -92, zIndex: pages.length - i - 1, autoAlpha: 0 });
      });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: () => `+=${pages.length * window.innerHeight * 0.55}`,
          pin: true,
          scrub: 0.45,
          anticipatePin: 0.5,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });

      pages.forEach((page, i) => {
        if (i === 0) return;
        const prev = pages[i - 1];
        tl.to(
          prev,
          {
            rotateY: 88,
            transformOrigin: "right center",
            autoAlpha: 0.15,
            duration: 1,
            zIndex: 1,
          },
          i,
        );
        tl.fromTo(
          page,
          { rotateY: -92, autoAlpha: 0, transformOrigin: "left center" },
          { rotateY: 0, autoAlpha: 1, duration: 1, zIndex: pages.length - i + 2 },
          i,
        );
      });

      const progress = root.querySelector<HTMLElement>("[data-flip-progress]");
      if (progress) {
        gsap.fromTo(
          progress,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: () => `+=${pages.length * window.innerHeight * 0.55}`,
              scrub: true,
            },
          },
        );
      }
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => ctx.revert();
  }, [featured.length]);

  return (
    <section
      ref={section}
      className="section-pad relative overflow-hidden border-t border-line bg-night"
      aria-label="Selected landmark shows"
    >
      <SketchField />

      <div className="relative z-10 mx-auto flex h-auto max-w-7xl flex-col px-5 py-16 md:h-[100svh] md:px-8 md:py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Selected work</p>
            <h2 className="mt-3 text-3xl font-semibold leading-snug text-cream md:text-5xl">
              Landmark shows across India
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              Scroll to flip the next page — each landmark a new chapter.
            </p>
          </div>
          <Link
            href="/work"
            className="shrink-0 text-xs tracking-[0.22em] text-gold uppercase underline-offset-4 hover:underline"
          >
            View all projects
          </Link>
        </div>

        {/* Desktop flip stage */}
        <div
          ref={stage}
          className="relative mt-8 hidden flex-1 md:block"
          style={{ perspective: "2200px" }}
        >
          {featured.map((project, i) => (
            <article
              key={project.slug}
              data-flip-page
              className="absolute inset-0 grid overflow-hidden border border-line/50 bg-night-elevated md:grid-cols-[1.15fr_0.85fr]"
            >
              <div className="relative min-h-[420px]">
                <Image
                  src={mediaForProject(project.slug, i)}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="55vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-night/40" />
              </div>
              <div className="flex flex-col justify-center bg-night/90 p-8 lg:p-12">
                <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
                  {String(i + 1).padStart(2, "0")} · {categoryLabels[project.category]} ·{" "}
                  {project.location}
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-snug text-cream lg:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-[11px] tracking-[0.18em] text-cream/50 uppercase">
                  {project.format}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted lg:text-base">
                  {project.summary}
                </p>
                <Link
                  href={`/work/${project.slug}`}
                  className="mt-8 inline-flex w-fit items-center gap-2 border border-cream/30 px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase transition hover:border-gold hover:text-gold"
                >
                  Enter case study →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 hidden h-px origin-left overflow-hidden bg-cream/10 md:block">
          <div
            data-flip-progress
            className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-gold to-burgundy-glow"
          />
        </div>

        {/* Mobile fallback — horizontal snap */}
        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:hidden">
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="w-[85%] shrink-0 snap-center overflow-hidden border border-line/40"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={mediaForProject(project.slug, i)}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="85vw"
                />
              </div>
              <div className="p-4">
                <p className="text-[10px] tracking-[0.2em] text-gold uppercase">
                  {categoryLabels[project.category]}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-cream">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
