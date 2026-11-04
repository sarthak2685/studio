import Image from "next/image";
import { site } from "@/content/site";

const tiles = [
  { src: "/media/bundle-06.jpg", label: "WAVES at the Gateway of India" },
  { src: "/media/bundle-11.jpg", label: "Dakshineswar Kali Temple reel" },
  { src: "/media/bundle-09.jpg", label: "On-site installation" },
  { src: "/media/bundle-14.jpg", label: "Shiva sculpture mapping" },
  { src: "/media/bundle-13.jpg", label: "Jhansi Fort" },
  { src: "/media/bundle-16.jpg", label: "Inside the control room" },
];

/** Posts laid out on an isometric floor, like contact sheets on a light table. */
export function InstagramIso() {
  return (
    <section
      id="instagram"
      className="mx-auto flex max-w-[82.5rem] flex-wrap items-center gap-6 px-6 pt-24 pb-10"
    >
      <div className="relative z-[2] min-w-0 flex-1 basis-[21.25rem]">
        <p className="eyebrow mb-3.5">Behind the lights</p>
        <h2 className="display-lg text-[clamp(2rem,3.8vw,3.25rem)]">{site.contact.instagramHandle}</h2>
        <p className="mt-4.5 max-w-[23.75rem] text-muted-soft">
          Rehearsals, rigs and opening nights — follow the shows as they come to life.
        </p>
        <a
          href={site.contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-6.5 inline-flex min-h-[3.125rem] items-center gap-2.5 rounded-full bg-cream px-6 font-semibold text-ink transition hover:bg-white"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
          </svg>
          Follow on Instagram
        </a>
      </div>

      <div
        className="relative hidden h-[32.5rem] min-w-0 flex-[1.6_1_35rem] md:block"
        style={{ perspective: "1600px" }}
      >
        <div
          className="absolute top-1/2 left-1/2 -mt-[14.375rem] -ml-[20.625rem] grid w-[41.25rem] grid-cols-3 gap-3.5"
          style={{ transform: "rotateX(52deg) rotateZ(-32deg)", transformStyle: "preserve-3d" }}
        >
          {tiles.map((tile) => (
            <a
              key={tile.src}
              href={site.contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram: ${tile.label}`}
              className="iso-tile relative block aspect-square overflow-hidden"
              style={{
                boxShadow: "6px 6px 0 #3E080C, 12px 12px 0 #2A0507, 30px 30px 40px rgba(0,0,0,0.6)",
              }}
            >
              <Image src={tile.src} alt="" fill sizes="220px" className="object-cover" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
