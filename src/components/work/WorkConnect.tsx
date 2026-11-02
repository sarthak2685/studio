import Link from "next/link";
import { site } from "@/content/site";
import { SketchField } from "@/components/SketchField";

/** Case-study close — stacked lanes, not the home banner or About split. */
export function WorkConnect({ projectTitle }: { projectTitle?: string }) {
  return (
    <section className="section-pad relative overflow-hidden border-t border-line">
      <SketchField />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Continue the story</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-snug text-cream md:text-4xl">
          {projectTitle
            ? `Want a night like ${projectTitle}?`
            : "Want a night like this on your façade?"}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          Brief the studio or message us now — we survey the site, shape the narrative and light the
          opening.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/contact"
            className="group relative overflow-hidden border border-line/50 bg-night/50 p-6 transition hover:border-gold/45 md:p-8"
          >
            <p className="text-[10px] tracking-[0.24em] text-gold uppercase">Brief</p>
            <p className="mt-3 text-2xl font-semibold text-cream transition group-hover:text-gold">
              Plan your show
            </p>
            <p className="mt-2 text-sm text-muted">
              Share place, audience and ambition — we reply in two working days.
            </p>
            <span
              aria-hidden
              className="mt-6 inline-block text-xs tracking-[0.2em] text-gold uppercase"
            >
              Open the brief →
            </span>
          </Link>

          <a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden border border-gold/30 bg-burgundy-deep/40 p-6 transition hover:border-gold/60 md:p-8"
          >
            <p className="text-[10px] tracking-[0.24em] text-gold uppercase">Direct line</p>
            <p className="mt-3 text-2xl font-semibold text-cream transition group-hover:text-gold">
              WhatsApp us
            </p>
            <p className="mt-2 text-sm text-muted">
              Same team that walks the façade and signs off the show.
            </p>
            <span
              aria-hidden
              className="mt-6 inline-block text-xs tracking-[0.2em] text-cream/80 uppercase group-hover:text-gold"
            >
              {site.contact.phone} ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
