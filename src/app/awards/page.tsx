import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { SketchField } from "@/components/SketchField";
import { AwardsList } from "@/components/awards/AwardsList";

export const metadata: Metadata = {
  title: "Awards",
  description:
    "International and national recognition for Magical Theatre — Florence, Germany, China and SIIA Best Projection Mapping Show.",
};

export default function AwardsPage() {
  return (
    <PageTransition>
      <section className="section-pad relative overflow-hidden border-b border-line py-16 md:py-24">
        <SketchField />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.36em] text-gold uppercase md:text-base">
              Achievements
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-cream md:text-6xl lg:text-[4rem]">
              Awards that travel with the light
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
              From Florence and Chemnitz to China and India&apos;s SIIA stage — recognition for
              storytelling through projection, immersion and craft.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden">
        <SketchField className="opacity-75" />
        <div className="relative z-10">
          <AwardsList />
        </div>
      </section>

      <section className="section-pad relative overflow-hidden border-t border-line">
        <SketchField className="opacity-90" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-20">
          <div className="max-w-xl">
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Keep going</p>
            <h2 className="mt-3 text-3xl font-semibold text-cream md:text-4xl">
              See the shows behind the applause
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/work"
              className="bg-burgundy px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase transition hover:bg-burgundy-glow"
            >
              View work
            </Link>
            <Link
              href="/contact"
              className="border border-cream/30 px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase transition hover:border-gold hover:text-gold"
            >
              Plan your show
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
