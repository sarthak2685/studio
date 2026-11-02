import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";
import { mediaPool } from "@/content/media";

const serviceMedia = [mediaPool[3], mediaPool[0], mediaPool[12], mediaPool[8], mediaPool[25]];

export function ServicesStrip() {
  return (
    <section className="border-t border-line py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">What we create</p>
          <h2 className="font-display mt-4 text-4xl text-cream md:text-5xl text-balance">
            Five ways to light a place
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Turnkey projects or content partnership — for heritage, tourism, culture, museums,
            broadcast, realty and corporates.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, i) => (
            <Link
              key={service.id}
              href="/services"
              className="group relative min-h-[280px] overflow-hidden border border-line/40"
            >
              <Image
                src={serviceMedia[i] || mediaPool[0]}
                alt={service.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/15" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[10px] tracking-[0.28em] text-gold uppercase">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-xl text-cream transition group-hover:text-gold">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-cream/70">{service.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
