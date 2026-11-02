import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { SketchField } from "@/components/SketchField";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Plan your show with Magical Theatre — New Delhi studio.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="section-pad relative overflow-hidden border-b border-line py-16 md:py-24">
        <SketchField />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-bold tracking-[0.36em] text-gold uppercase md:text-base">
              Contact
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-cream md:text-6xl lg:text-[4.25rem]">
              Plan your show
            </h1>
            <div className="gold-rule mt-6" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
              Tell us about the site and the story. We survey, script and light — and reply within
              two working days.
            </p>
          </Reveal>

          {/* Premium cue strip */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-y border-line/40 py-4 text-[10px] tracking-[0.22em] text-muted uppercase">
            <span className="text-gold">New Delhi studio</span>
            <span>Heritage · Tourism · Culture</span>
            <span>2D / 3D · Turnkey · Content</span>
            <span>Reply in 2 working days</span>
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden py-14 md:py-20">
        <SketchField className="opacity-80" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 md:px-8">
          <ContactForm />
          <ContactChannels />
        </div>
      </section>

      <section className="section-pad relative overflow-hidden border-t border-line">
        <SketchField className="opacity-90" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8 md:py-16">
          <div>
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Prefer a quick line</p>
            <p className="mt-3 text-2xl font-semibold text-cream md:text-3xl">
              WhatsApp the people who walk the façade
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="bg-burgundy px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase transition hover:bg-burgundy-glow"
            >
              WhatsApp {site.contact.phone}
            </a>
            <Link
              href="/work"
              className="border border-cream/30 px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase transition hover:border-gold hover:text-gold"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
