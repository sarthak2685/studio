import Link from "next/link";
import { site } from "@/content/site";

export function FinalCta() {
  return (
    <section className="border-t border-line bg-burgundy-deep">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Start a conversation</p>
          <h2 className="font-display mt-4 text-4xl text-cream md:text-5xl text-balance">
            Tell us about the site and the story.
          </h2>
          <p className="mt-4 text-cream/70">We reply within two working days.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex min-w-[10.5rem] items-center justify-center bg-gold px-6 py-3.5 text-xs tracking-[0.2em] text-night uppercase transition hover:bg-cream"
          >
            {site.cta.primary}
          </Link>
          <a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-[10.5rem] items-center justify-center border border-cream/35 px-6 py-3.5 text-xs tracking-[0.2em] text-cream uppercase transition hover:border-gold hover:text-gold"
          >
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
