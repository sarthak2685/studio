import Image from "next/image";
import Link from "next/link";

const placards = [
  {
    place: "Florence, Italy",
    title: "XR Festival 2025",
    result: "Third Place Winner",
    tone: "cream" as const,
    lean: "left" as const,
    image: "/media/awards/xr-florence-award.jpg",
  },
  {
    place: "Chemnitz, Germany",
    title: "The Light Our Vision Festival",
    result: "Selected & celebrated",
    tone: "gold" as const,
    lean: "front" as const,
    image: "/media/awards/xr-florence-2.jpg",
  },
  {
    place: "China",
    title: "Yifeng Light Art Competition 2024",
    result: "Silver Award Winner",
    tone: "cream" as const,
    lean: "right" as const,
    image: "/media/awards/yifeng-silver.jpg",
  },
];

/** Photographs from the nights the trophies were handed over. */
const ceremony = [
  { src: "/media/awards/siia-2025-maheshwar.jpg", caption: "SIIA 2025 · Maheshwar Ghat" },
  { src: "/media/awards/siia-2024-kashi.jpg", caption: "SIIA 2024 · Kashi Vishwanath" },
  { src: "/media/awards/siia-2024-travancore.jpg", caption: "SIIA 2024 · Travancore House" },
  { src: "/media/awards/barco-2024.jpg", caption: "BARCO 2024 · Creative Partner" },
];

const ledger = [
  ["SIIA — Best Projection Mapping Show, Maheshwar Ghat", "2025"],
  ["Panasonic Connect — Excellence Award", "2025"],
  ["SIIA — Best Projection Mapping Show, Travancore House", "2024"],
  ["SIIA — Best Projection Mapping Show, Kashi Vishwanath Ghat", "2024"],
  ["BARCO — Most Valuable Creative Partner", "2024"],
  ["Epson — Winner, Projection Mapping category", "2024"],
  ["SIIA — Best Projection Mapping Show, Rajwada Palace", "2023"],
  ["Panasonic Connect — Valued Partner", "2022"],
];

const lean = {
  left: "rotateY(14deg) rotateX(4deg)",
  front: "translateZ(40px)",
  right: "rotateY(-14deg) rotateX(4deg)",
};

const shadow = {
  left: "-2px 2px 0 #E8B04B, -4px 4px 0 #D49C38, -6px 6px 0 #B8812C, -8px 8px 0 #8A5C1A, -30px 40px 60px rgba(0,0,0,0.45)",
  front: "0 3px 0 #C99032, 0 6px 0 #A06E22, 0 9px 0 #744B13, 0 40px 60px rgba(0,0,0,0.5)",
  right:
    "2px 2px 0 #E8B04B, 4px 4px 0 #D49C38, 6px 6px 0 #B8812C, 8px 8px 0 #8A5C1A, 30px 40px 60px rgba(0,0,0,0.45)",
};

/** The one maroon-flooded band on the page, bulb-edged like an award hoarding. */
export function AwardsTeaser() {
  return (
    <section id="awards" className="overflow-hidden bg-burgundy">
      <div className="bulbs" aria-hidden />

      <div className="mx-auto max-w-[82.5rem] px-6 py-24">
        <p className="eyebrow mb-3.5 text-gold-bright">Recognition</p>
        <h2 className="display-lg max-w-[51rem] text-[clamp(2.125rem,4.4vw,3.875rem)]">
          Applauded at home. Celebrated abroad.
        </h2>

        <div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1400px" }}
        >
          {placards.map((award) => (
            <div
              key={award.title}
              className={`tilt overflow-hidden rounded-md ${
                award.tone === "gold" ? "bg-gold" : "bg-cream"
              } text-ink`}
              style={{ transform: lean[award.lean], boxShadow: shadow[award.lean] }}
            >
              <div className="relative aspect-[16/10] bg-burgundy-deep">
                <Image
                  src={award.image}
                  alt={`${award.title} — ${award.result}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="px-7 pt-6 pb-8">
                <p className="text-[0.8125rem] font-semibold tracking-[0.16em] text-burgundy uppercase">
                  {award.place}
                </p>
                <p className="mt-3.5 font-display text-[2rem] leading-[1.02] font-black uppercase">
                  {award.title}
                </p>
                <p className="mt-3 font-medium">{award.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {ceremony.map((shot) => (
            <figure
              key={shot.src}
              className="overflow-hidden rounded-md border border-cream/15 bg-burgundy-deep"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-3.5 py-3 text-[0.8125rem] text-cream-dim">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 grid gap-x-10 sm:grid-cols-2">
          {ledger.map(([name, year]) => (
            <div
              key={name}
              className="flex justify-between gap-4 border-b border-cream/20 py-4.5"
            >
              <span>{name}</span>
              <span className="flex-none text-gold-bright">{year}</span>
            </div>
          ))}
        </div>

        <Link
          href="/awards"
          className="mt-10 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-cream px-6 font-semibold text-ink transition hover:bg-white"
        >
          All achievements
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      <div className="bulbs" aria-hidden />
    </section>
  );
}
