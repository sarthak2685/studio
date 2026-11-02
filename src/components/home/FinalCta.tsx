import Link from "next/link";
import { SketchField } from "@/components/SketchField";

const pillars = [
  {
    label: "Story first",
    body: "Research, script and sound before a single projector is specified.",
  },
  {
    label: "Built for the façade",
    body: "2D & 3D mapping, son-et-lumière, laser & water — fitted to the monument.",
  },
  {
    label: "Owned end to end",
    body: "Survey, content, systems and opening night — one studio, one chain.",
  },
] as const;

export function FinalCta() {
  return (
    <section className="theme-lift section-pad relative overflow-hidden border-t border-line py-24 md:py-28">
      <SketchField />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">What we deliver</p>
          <h2 className="mt-4 text-3xl font-semibold leading-snug text-cream md:text-5xl text-balance">
            Architecture stays. The night changes.
          </h2>
          <div className="gold-rule mt-5" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Magical Theatre turns heritage, tourism and culture sites into living shows — not décor
            lighting.
          </p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-line/40 pt-10 md:grid-cols-3 md:gap-12">
          {pillars.map((item) => (
            <div key={item.label}>
              <p className="text-[11px] tracking-[0.22em] text-gold uppercase">{item.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-cream/70 md:text-[15px]">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Link
            href="/services"
            className="text-xs tracking-[0.22em] text-gold uppercase underline-offset-4 transition hover:underline"
          >
            How we build a show →
          </Link>
          <Link
            href="/work"
            className="text-xs tracking-[0.22em] text-cream/50 uppercase transition hover:text-gold"
          >
            Landmark shows
          </Link>
        </div>
      </div>
    </section>
  );
}
