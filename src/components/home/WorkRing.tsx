"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  categoryLabels,
  getProjectsByCategory,
  projects,
  type ProjectCategory,
} from "@/content/projects";
import { mediaForProject } from "@/content/media";
import { prefersReducedMotion } from "@/lib/motion";

const FILTERS: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "son-et-lumiere", label: "Son-et-lumière" },
  { id: "laser-water", label: "Water & laser" },
  { id: "museums", label: "Museums" },
  { id: "events", label: "Events" },
];

/**
 * The hall of shows — projects arranged on a rotating cylinder so exactly one
 * façade faces the audience at a time, with its story read underneath.
 */
export function WorkRing() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const still = useRef(false);

  const list = useMemo(() => getProjectsByCategory(filter).slice(0, 12), [filter]);

  useEffect(() => {
    still.current = prefersReducedMotion();
  }, []);

  useEffect(() => {
    if (paused || still.current || list.length < 2) return;
    const id = window.setInterval(() => setStep((s) => s + 1), 4200);
    return () => window.clearInterval(id);
  }, [paused, list.length]);

  const count = list.length;
  const active = count ? ((step % count) + count) % count : 0;
  const angle = count ? 360 / count : 0;
  const radius = count > 1 ? Math.max(480, Math.round(230 / Math.tan(Math.PI / count)) + 60) : 480;
  const project = list[active];

  if (!project) return null;

  return (
    <section
      id="work"
      aria-label="Selected work"
      className="relative overflow-hidden border-t border-line bg-panel py-20 md:py-24"
    >
      <div className="mx-auto flex max-w-[82.5rem] flex-wrap items-end justify-between gap-6 px-6">
        <div>
          <p className="eyebrow mb-3.5">
            Selected work · {count} of {projects.length}+ projects
          </p>
          <h2 className="display-lg text-[clamp(2.125rem,4.4vw,3.875rem)]">The hall of shows</h2>
        </div>

        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {FILTERS.map((chip) => {
            const on = chip.id === filter;
            return (
              <button
                key={chip.id}
                type="button"
                aria-pressed={on}
                onClick={() => {
                  setFilter(chip.id);
                  setStep(0);
                }}
                className={`min-h-11 rounded-full border px-[1.125rem] font-medium transition ${
                  on
                    ? "border-gold bg-gold text-ink"
                    : "border-cream/25 text-cream hover:border-gold hover:text-gold"
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative mt-14 h-[29.375rem]"
        style={{ perspective: "1700px", perspectiveOrigin: "50% 35%" }}
      >
        <div
          aria-hidden
          className="absolute bottom-2.5 left-1/2 -ml-[34.375rem] h-[8.75rem] w-[68.75rem] rounded-[50%]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(232,176,75,0.22), rgba(92,18,24,0.15) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-10 left-1/2 -ml-[14.375rem] h-80 w-[28.75rem]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 1.2s cubic-bezier(.2,.7,.2,1)",
              transform: `translateZ(-${radius}px) rotateY(${-step * angle}deg)`,
            }}
          >
            {list.map((item, i) => {
              const raw = Math.abs(i - active);
              const distance = Math.min(raw, count - raw);
              const opacity = distance === 0 ? 1 : distance === 1 ? 0.6 : distance === 2 ? 0.35 : 0.18;
              return (
                <button
                  key={item.slug}
                  type="button"
                  className="ring-card absolute inset-0 cursor-pointer overflow-hidden rounded-md bg-night-elevated"
                  aria-label={item.title}
                  onClick={() => {
                    let delta = (((i - active) % count) + count) % count;
                    if (delta > count / 2) delta -= count;
                    setStep((s) => s + delta);
                  }}
                  style={{
                    backfaceVisibility: "hidden",
                    transition: "opacity .9s",
                    opacity,
                    boxShadow:
                      distance === 0
                        ? "0 0 0 2px #E8B04B, 0 30px 80px rgba(232,176,75,0.25)"
                        : "0 20px 50px rgba(0,0,0,0.6)",
                    transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                  }}
                >
                  <Image
                    src={mediaForProject(item.slug, i)}
                    alt=""
                    fill
                    sizes="460px"
                    className="object-cover"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stage/95 to-transparent px-4.5 pt-10 pb-3.5 text-left text-[1.0625rem] font-semibold text-cream">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2 flex max-w-[68.75rem] flex-wrap items-center justify-between gap-7 px-6">
        <button
          type="button"
          onClick={() => setStep((s) => s - 1)}
          aria-label="Previous project"
          className="inline-flex h-15 w-15 flex-none items-center justify-center rounded-full border border-cream/30 text-cream transition hover:border-gold hover:text-gold"
        >
          <Arrow flip />
        </button>

        <div className="min-w-0 flex-1 basis-[32.5rem] text-center">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="text-[0.8125rem] tracking-[0.16em] text-gold uppercase">
              {project.role} · {String(active + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </span>
            {project.result ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[0.8125rem] font-semibold text-ink">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <circle cx="12" cy="9" r="6" />
                  <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
                </svg>
                {project.result}
              </span>
            ) : null}
          </div>
          <h3 className="display-lg mt-3 text-[clamp(1.75rem,3.4vw,2.875rem)]">{project.title}</h3>
          <p className="text-muted">
            {categoryLabels[project.category]} · {project.location}, {project.state}
          </p>
          <p className="mx-auto mt-3.5 max-w-[40rem] text-muted-soft">{project.summary}</p>
          <Link
            href={`/work/${project.slug}`}
            className="mt-4.5 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-cream px-5.5 font-semibold text-ink transition hover:bg-white"
          >
            Read the case study
            <Arrow />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setStep((s) => s + 1)}
          aria-label="Next project"
          className="inline-flex h-15 w-15 flex-none items-center justify-center rounded-full bg-gold text-ink transition hover:bg-gold-bright"
        >
          <Arrow />
        </button>
      </div>
    </section>
  );
}

function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
