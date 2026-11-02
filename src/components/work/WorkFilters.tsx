"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  categoryLabels,
  projects,
  type ProjectCategory,
} from "@/content/projects";
import { mediaForProject } from "@/content/media";
import { MediaFrame } from "@/components/MediaFrame";
import { AnimatePresence, motion } from "framer-motion";

const filters: Array<"all" | ProjectCategory> = [
  "all",
  "son-et-lumiere",
  "laser-water",
  "museums",
  "events",
  "facade",
];

export function WorkFilters() {
  const [active, setActive] = useState<"all" | ProjectCategory>("all");

  const list = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div>
      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap gap-2 border-b border-line pb-6"
      >
        {filters.map((filter) => {
          const label = filter === "all" ? "All" : categoryLabels[filter];
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition ${
                isActive
                  ? "bg-burgundy text-cream"
                  : "border border-line text-muted hover:border-gold/40 hover:text-cream"
              }`}
            >
              {label}
            </button>
          );
        })}
      </motion.div>

      <p className="mt-6 text-xs tracking-[0.18em] text-muted uppercase">
        {list.length} projects
      </p>

      <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group block overflow-hidden border border-line/40 transition hover:border-gold/35"
              >
                <MediaFrame
                  className="aspect-[16/10]"
                  label={categoryLabels[project.category]}
                  src={mediaForProject(project.slug, i)}
                />
                <div className="p-5">
                  <p className="text-[10px] tracking-[0.2em] text-muted uppercase">
                    {project.location}, {project.state} · {project.role}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold leading-snug text-cream transition group-hover:text-gold">
                    {project.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <p className="mt-4 text-[10px] tracking-[0.22em] text-gold/80 uppercase transition group-hover:text-gold">
                    Full case study →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
