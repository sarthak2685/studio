import Link from "next/link";
import { site } from "@/content/site";
import { SketchField } from "@/components/SketchField";

/** Two contact lanes with deliberately different visual languages. */
export function AboutConnect() {
  return (
    <section className="section-pad relative overflow-hidden border-t border-line">
      <SketchField className="opacity-90" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 md:gap-0 md:px-8">
        {/* Plan — folio / brief card */}
        <div className="relative border border-line/60 bg-night-elevated/80 p-8 md:mr-3 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 h-24 w-24 border-t border-r border-gold/25"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-0 h-16 w-16 border-b border-l border-gold/20"
          />
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Commission a show</p>
          <h2 className="mt-4 text-3xl font-semibold leading-snug text-cream md:text-4xl">
            Plan your show
          </h2>
          <div className="gold-rule mt-5" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
            Share the site, the audience and the story you want told. We map the façade, the
            narrative and the install path — then reply within two working days.
          </p>
          <ol className="mt-8 space-y-3">
            {[
              "Site & audience notes",
              "Story beat & façade survey",
              "Install path & opening date",
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm text-cream/80">
                <span className="mt-0.5 font-mono text-[10px] tracking-widest text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-gold px-5 py-3.5 text-xs tracking-[0.22em] text-night uppercase transition hover:bg-cream"
          >
            Open the brief
            <span aria-hidden className="text-base leading-none">
              →
            </span>
          </Link>
        </div>

        {/* WhatsApp — chat / pulse lane */}
        <div className="relative overflow-hidden border border-[#25D366]/25 bg-[#0b1a12]/55 p-8 md:ml-3 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-[#25D366]/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-gold/5 blur-3xl"
          />
          <div className="relative">
            <p className="text-[11px] tracking-[0.28em] text-[#7ddea3] uppercase">Talk now</p>
            <h2 className="mt-4 text-3xl font-semibold leading-snug text-cream md:text-4xl">
              WhatsApp the studio
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/65 md:text-base">
              Prefer a quick line? Message the team on WhatsApp — same people who walk the site and
              sign off the show.
            </p>

            {/* Fake chat preview for uniqueness */}
            <div className="mt-8 max-w-sm space-y-2.5">
              <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-[#25D366]/20 px-3.5 py-2 text-xs leading-relaxed text-cream/90">
                We’re looking at a riverside fort for Diwali…
              </div>
              <div className="mr-auto w-fit max-w-[90%] rounded-2xl rounded-bl-sm border border-cream/10 bg-night/70 px-3.5 py-2 text-xs leading-relaxed text-cream/75">
                Send a few photos of the façade — we’ll sketch a first beat.
              </div>
            </div>

            <a
              href={site.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-3 border border-[#25D366]/45 bg-[#25D366]/10 px-5 py-3.5 text-xs tracking-[0.22em] text-cream uppercase transition hover:border-[#25D366] hover:bg-[#25D366]/20"
            >
              <WhatsAppGlyph />
              {site.contact.phone}
              <span aria-hidden>↗</span>
            </a>
            <p className="mt-6 text-xs text-muted">
              Or write{" "}
              <a href={`mailto:${site.contact.email}`} className="text-gold hover:underline">
                {site.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="text-[#25D366]">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
