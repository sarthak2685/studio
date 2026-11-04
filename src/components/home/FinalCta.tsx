import Link from "next/link";
import { site } from "@/content/site";

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
];

export function FinalCta() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-[82.5rem] flex-wrap gap-14 px-6 pt-24 pb-28"
    >
      <div className="min-w-0 flex-1 basis-[27.5rem]">
        <p className="eyebrow mb-3.5">Let&rsquo;s talk</p>
        <h2 className="display-xl text-extrude text-[clamp(2.25rem,4.6vw,4rem)]">
          Have a monument, a museum or a moment in mind?
        </h2>
        <p className="mt-6 max-w-[30rem] text-muted-soft">
          Tell us about the site and the story. We&rsquo;ll come back within two working days with
          an initial approach.
        </p>

        <div className="mt-9 flex flex-col gap-4.5">
          <a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-cream hover:text-gold"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E8B04B"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.3A8.5 8.5 0 1 1 20.5 11.6z" />
            </svg>
            {site.contact.phone} · WhatsApp
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex items-center gap-3 text-cream hover:text-gold"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E8B04B"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            {site.contact.email}
          </a>
          <p className="flex gap-3 text-muted-soft">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E8B04B"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="mt-1 flex-none"
            >
              <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            <span>{site.contact.address}</span>
          </p>
        </div>
      </div>

      <div className="min-w-0 flex-1 basis-[30rem] rounded-md border border-line bg-night-elevated p-9 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
        <p className="eyebrow mb-3.5">What we deliver</p>
        <h3 className="display-lg text-[1.75rem]">Architecture stays. The night changes.</h3>
        <div className="gold-rule mt-5" />
        <p className="mt-5 text-muted-soft">
          Magical Theatre turns heritage, tourism and culture sites into living shows — not décor
          lighting.
        </p>

        <div className="mt-8 flex flex-col gap-6 border-t border-line pt-7">
          {pillars.map((item) => (
            <div key={item.label}>
              <p className="text-[0.8125rem] font-semibold tracking-[0.16em] text-gold uppercase">
                {item.label}
              </p>
              <p className="mt-1.5 text-[0.9375rem] text-cream-dim">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex min-h-13 items-center rounded-full bg-gold px-7 font-semibold text-ink transition hover:bg-gold-bright"
          >
            {site.cta.primary}
          </Link>
          <Link
            href="/work"
            className="inline-flex min-h-13 items-center rounded-full border border-cream/25 px-7 font-semibold text-cream transition hover:border-gold hover:text-gold"
          >
            Landmark shows
          </Link>
        </div>
      </div>
    </section>
  );
}
