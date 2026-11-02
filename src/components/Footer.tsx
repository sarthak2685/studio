import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { SketchField } from "@/components/SketchField";

export function Footer() {
  return (
    <footer className="section-pad relative mt-auto overflow-hidden border-t border-line bg-night-elevated">
      <SketchField />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-30 lg:block">
        <Image
          src="/media/bundle-08.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-night-elevated" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-8 md:py-20">
        <div>
          <p className="font-display text-3xl tracking-[0.14em] text-cream uppercase">
            Magical Theatre
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
            {site.tagline}. 2D & 3D projection mapping, son-et-lumière and landmark spectacles —
            from India to stages worldwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-burgundy px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase transition hover:bg-burgundy-glow"
            >
              {site.cta.primary}
            </Link>
            <Link
              href="/work"
              className="border border-cream/30 px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase transition hover:border-gold hover:text-gold"
            >
              See the work
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.24em] text-gold uppercase">Navigate</p>
          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-cream/75 transition hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.24em] text-gold uppercase">Contact</p>
          <div className="mt-5 space-y-3 text-sm text-cream/75">
            <a href={`mailto:${site.contact.email}`} className="block hover:text-gold">
              {site.contact.email}
            </a>
            <a href={site.contact.phoneHref} className="block hover:text-gold">
              {site.contact.phone}
            </a>
            <p className="leading-relaxed">{site.contact.addressShort}</p>
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-gold"
            >
              {site.contact.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-line/60 px-5 py-5 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 Magical Theatre. All rights reserved.</p>
          <p className="tracking-[0.18em] text-cream/40 uppercase">Storytelling in light</p>
        </div>
      </div>
    </footer>
  );
}
