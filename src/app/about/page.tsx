import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/MediaFrame";
import { SketchField } from "@/components/SketchField";
import { MethodSteps } from "@/components/about/MethodSteps";
import { AboutTeam } from "@/components/about/AboutTeam";
import { AboutConnect } from "@/components/about/AboutConnect";
import { site } from "@/content/site";
import { studioMedia } from "@/content/media";

export const metadata: Metadata = {
  title: "About",
  description: site.aboutLead,
};

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Intro */}
      <section className="section-pad relative overflow-hidden border-b border-line py-16 md:py-24">
        <SketchField />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.36em] text-gold uppercase md:text-base">
              About us
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-snug text-cream md:text-6xl lg:text-[4rem]">
              We are storytellers in light
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-cream/85 md:text-xl">
              {site.aboutLead}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              {site.aboutSupport}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <MediaFrame
                className="aspect-[4/5] md:aspect-[5/4]"
                label="Studio · New Delhi"
                src={studioMedia}
                priority
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-base leading-relaxed text-cream/85 md:text-lg">
                  {site.philosophy}
                </p>
                <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                  {site.quality}
                </p>
                <p className="mt-6 text-xs tracking-[0.18em] text-gold/90 uppercase">
                  {site.audiences}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#team"
                    className="border border-line px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase transition hover:border-gold hover:text-gold"
                  >
                    Meet the team
                  </a>
                  <Link
                    href="/services"
                    className="bg-burgundy px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase transition hover:bg-burgundy-glow"
                  >
                    Our services
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="section-pad relative overflow-hidden border-b border-line py-20 md:py-28">
        <SketchField />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Method</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-snug text-cream md:text-5xl">
              From survey to showtime
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              Consultation, conceptualisation, design and integration — with experiential installs
              for heritage, tourism, culture, museums, interpretation centres, broadcast studios,
              realty and corporations.
            </p>
          </Reveal>
          <MethodSteps />
        </div>
      </section>

      {/* Team merged here */}
      <AboutTeam />

      {/* Stats */}
      <section className="section-pad relative overflow-hidden border-t border-line py-20 md:py-24">
        <SketchField className="opacity-70" />
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
          {site.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <p className="text-4xl font-semibold text-gold md:text-5xl">{stat.value}</p>
              <p className="mt-3 text-xs tracking-[0.14em] text-muted uppercase">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <AboutConnect />
    </PageTransition>
  );
}
