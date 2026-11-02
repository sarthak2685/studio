import type { Metadata } from "next";
import { PageTransition } from "@/components/PageTransition";
import { SketchField } from "@/components/SketchField";
import { WorkHero } from "@/components/work/WorkHero";
import { WorkFilters } from "@/components/work/WorkFilters";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Landmark projection mapping shows, museums and events by Magical Theatre — son-et-lumière, laser & water, and high-profile stages across India.",
};

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="theme-dark section-pad relative overflow-hidden border-b border-line py-16 md:py-24">
        <SketchField />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <WorkHero />
          <div className="mt-12 md:mt-14">
            <WorkFilters />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
