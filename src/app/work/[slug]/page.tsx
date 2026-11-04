import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PageTransition } from "@/components/PageTransition";
import { MediaFrame } from "@/components/MediaFrame";
import { SketchField } from "@/components/SketchField";
import { WorkConnect } from "@/components/work/WorkConnect";
import { ProjectStillStack } from "@/components/work/ProjectStillStack";
import {
  categoryLabels,
  getProject,
  projects,
  storyChapters,
} from "@/content/projects";
import { mediaForProject } from "@/content/media";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function CaseStudyPage(props: Props) {
  return (
    <Suspense
      fallback={<div className="min-h-[70vh] bg-night" aria-hidden />}
    >
      <CaseStudyBody {...props} />
    </Suspense>
  );
}

async function CaseStudyBody({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const chapters = storyChapters(project);

  return (
    <PageTransition>
      <article>
        <header className="relative overflow-hidden border-b border-line">
          <MediaFrame
            className="min-h-[52vh] md:min-h-[62vh]"
            label={project.format}
            src={mediaForProject(project.slug)}
            priority
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-night via-night/40 to-transparent">
            <div className="mx-auto w-full max-w-7xl px-5 pb-12 md:px-8 md:pb-16">
              <p className="text-xs tracking-[0.24em] text-gold uppercase">
                Work / {categoryLabels[project.category]}
              </p>
              <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-snug text-cream md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-cream/75 md:text-lg">
                {project.summary}
              </p>
            </div>
          </div>
        </header>

        <section className="theme-lift section-pad relative overflow-hidden border-b border-line">
          <SketchField />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.4fr] md:px-8 md:py-24">
            <aside className="h-fit space-y-5 border border-line/50 bg-night/55 p-6 backdrop-blur-[1px] md:sticky md:top-28">
              <MetaRow label="Location" value={`${project.location}, ${project.state}`} />
              <MetaRow label="Our role" value={project.role} />
              <MetaRow label="Format" value={project.format} />
              {project.launched ? <MetaRow label="Launched" value={project.launched} /> : null}
              {project.result ? <MetaRow label="Result" value={project.result} /> : null}
              {project.awards?.length ? (
                <MetaRow label="Awards" value={project.awards.join(" · ")} />
              ) : null}
              {project.stats?.map((stat) => (
                <MetaRow key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </aside>

            <div>
              <p className="text-xs tracking-[0.24em] text-gold uppercase">The story</p>
              <h2 className="display-lg mt-3.5 text-[clamp(1.875rem,3.6vw,2.75rem)]">
                Myth, memory and place — told on its own walls.
              </h2>
              <div className="mt-10 space-y-10">
                {chapters.map((block, i) => (
                  <div key={`${block.title}-${i}`} className="border-l border-line pl-5">
                    <p className="text-[10px] tracking-[0.28em] text-gold uppercase">
                      {String(i + 1).padStart(2, "0")} · {block.title}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
                      {block.body}
                    </p>
                  </div>
                ))}
              </div>

              <ProjectStillStack slug={project.slug} title={project.title} />

              <div className="mt-16 border-t border-line pt-10">
                <p className="text-xs tracking-[0.22em] text-muted uppercase">Next project</p>
                <Link
                  href={`/work/${next.slug}`}
                  className="display-lg mt-3 block text-[clamp(1.625rem,3vw,2.25rem)] transition hover:text-gold"
                >
                  {next.title} →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      <WorkConnect projectTitle={project.title} />
    </PageTransition>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.22em] text-gold uppercase">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-cream/85">{value}</p>
    </div>
  );
}
