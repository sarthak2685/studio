"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { services, methodSteps } from "@/content/services";
import { videoAt } from "@/content/videos";

/**
 * Five panels hinged like a folding screen. Each opens flat on hover and
 * starts its clip, so the services read as moving shows rather than cards.
 */
export function ServiceFold() {
  return (
    <section id="services" className="overflow-hidden border-t border-line bg-night-elevated">
      <div className="mx-auto max-w-[85rem] px-6 py-24 md:py-28">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-3.5">What we create</p>
            <h2 className="display-lg text-[clamp(2.125rem,4.4vw,3.875rem)]">
              Five ways to light up a place
            </h2>
          </div>
          <p className="max-w-[26rem] text-muted-soft">
            Turnkey projects or content partnership — for heritage, tourism, culture, museums,
            broadcast, realty and corporates.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-1.5">
          {services.map((service, i) => (
            <Panel key={service.id} index={i} service={service} />
          ))}
        </div>

        <div className="mt-22 grid gap-0 border-t border-cream/15 sm:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((item) => (
            <div key={item.step} className="pt-7 pr-7">
              <p className="font-display text-[0.9375rem] font-extrabold tracking-[0.14em] text-gold">
                STEP {item.step}
              </p>
              <h3 className="mt-2 text-[1.3125rem] font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-[0.9375rem] text-muted-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Panel({ service, index }: { service: (typeof services)[number]; index: number }) {
  const video = useRef<HTMLVideoElement>(null);
  const clip = videoAt(index);

  return (
    <Link
      href={`/services#${service.id}`}
      className={`fold ${index % 2 === 0 ? "fold-l" : "fold-r"} block h-[33.75rem] min-w-0 flex-1 basis-[13.75rem] overflow-hidden bg-black text-cream no-underline`}
      onMouseEnter={() => void video.current?.play().catch(() => undefined)}
      onMouseLeave={() => video.current?.pause()}
    >
      <Image
        src={service.images[0]}
        alt=""
        fill
        sizes="(max-width: 760px) 100vw, 20vw"
        className="object-cover"
      />
      <video
        ref={video}
        src={clip.src}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 [.fold:hover_&]:opacity-100"
      />
      <div
        className="absolute inset-x-0 bottom-0 px-5.5 pt-20 pb-6.5"
        style={{ background: "linear-gradient(0deg, rgba(5,2,3,0.95) 30%, transparent)" }}
      >
        <p className="font-display text-[3.375rem] leading-none font-black text-gold/90">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 mb-1.5 font-display text-[1.375rem] leading-tight font-extrabold uppercase">
          {service.title}
        </h3>
        <p className="text-[0.9375rem] text-muted-soft">{service.short}</p>
      </div>
    </Link>
  );
}
