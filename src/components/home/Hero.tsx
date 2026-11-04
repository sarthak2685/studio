"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { heroVideo } from "@/content/videos";
import { MOTION_QUERY } from "@/lib/motion";

const ROOM = {
  left: {
    src: "/media/bundle-03.jpg",
    alt: "Rajwada Palace façade mapped with the Holkar story",
    label: "Rajwada Palace, Indore",
  },
  right: {
    src: "/media/bundle-17.jpg",
    alt: "A Theyyam face projected across Travancore House",
    label: "Travancore House, Delhi",
  },
  floor: "/media/bundle-07.jpg",
};

/** The room is authored at 1500px wide and zooms as a whole to fit narrower screens. */
const DESIGN_WIDTH = 1500;

function subscribeResize(onChange: () => void) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia(MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const raf = useRef(0);

  const scale = useSyncExternalStore(
    subscribeResize,
    () => Math.min(1, Math.max(0.52, window.innerWidth / DESIGN_WIDTH)),
    () => 1,
  );
  const still = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(MOTION_QUERY).matches,
    () => false,
  );

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (still || raf.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        setTilt({ x, y });
      });
    },
    [still],
  );

  // Scaling every length by the same factor zooms the room without distorting it.
  const u = (n: number) => n * scale;

  return (
    <section
      id="top"
      aria-label="Inside a Magical Theatre projection room"
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative h-[32rem] overflow-hidden bg-stage sm:h-[40rem] lg:h-[54rem]"
      style={{ perspective: `${u(1100)}px`, perspectiveOrigin: "50% 46%" }}
    >
      <div
        className="absolute top-1/2 left-1/2 h-0 w-0"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform .35s ease-out",
          transform: `rotateX(${(tilt.y * -5).toFixed(2)}deg) rotateY(${(tilt.x * 9).toFixed(2)}deg)`,
        }}
      >
        <div className={still ? "" : "sway"} style={{ transformStyle: "preserve-3d" }}>
          {/* Back wall — the show itself, running live */}
          <Surface
            width={u(2000)}
            height={u(1124)}
            left={u(-1000)}
            top={u(-562)}
            transform={`translateZ(${u(-560)}px)`}
          >
            <video
              src={heroVideo.src}
              poster={heroVideo.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Projection mapping show running on the Gateway of India"
              className="h-full w-full object-cover"
            />
            <Plaque style={{ top: u(28), right: u(32), fontSize: u(22) }}>{heroVideo.place}</Plaque>
          </Surface>

          {/* Left wall */}
          <Surface
            width={u(1200)}
            height={u(1124)}
            left={u(-600)}
            top={u(-562)}
            transform={`translateX(${u(-1000)}px) rotateY(90deg)`}
          >
            <Image src={ROOM.left.src} alt={ROOM.left.alt} fill priority sizes="1200px" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-stage/35" />
            <Plaque style={{ bottom: u(40), right: u(60), fontSize: u(26) }}>
              {ROOM.left.label}
            </Plaque>
          </Surface>

          {/* Right wall */}
          <Surface
            width={u(1200)}
            height={u(1124)}
            left={u(-600)}
            top={u(-562)}
            transform={`translateX(${u(1000)}px) rotateY(-90deg)`}
          >
            <Image src={ROOM.right.src} alt={ROOM.right.alt} fill priority sizes="1200px" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-stage/35" />
            <Plaque style={{ bottom: u(40), left: u(60), fontSize: u(26) }}>
              {ROOM.right.label}
            </Plaque>
          </Surface>

          {/* Floor — the show reflected in wet stone */}
          <Surface
            width={u(2000)}
            height={u(1200)}
            left={u(-1000)}
            top={u(-600)}
            transform={`translateY(${u(562)}px) rotateX(90deg)`}
            hidden
          >
            <Image
              src={ROOM.floor}
              alt=""
              fill
              sizes="2000px"
              className="object-cover opacity-55"
              style={{ transform: "scaleY(-1)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stage/95 to-stage/35" />
          </Surface>

          {/* Ceiling — marquee bulbs overhead */}
          <div
            aria-hidden
            className="absolute"
            style={{
              left: u(-1000),
              top: u(-600),
              width: u(2000),
              height: u(1200),
              transform: `translateY(${u(-562)}px) rotateX(-90deg)`,
              backgroundColor: "#1c0608",
              backgroundImage: `radial-gradient(circle, #f2c35e 0 ${u(5)}px, rgba(242,195,94,0.25) ${u(9)}px, transparent ${u(13)}px)`,
              backgroundSize: `${u(80)}px ${u(80)}px`,
            }}
          />
        </div>
      </div>

      {/* Projector beam */}
      <div
        aria-hidden
        className="beam pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 55% at 50% 38%, rgba(255,226,170,0.16), transparent 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Scrim so copy reads over any surface, weighted to the headline corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,2,3,0) 30%, rgba(5,2,3,0.86) 70%, #050203 100%)," +
            "linear-gradient(100deg, rgba(5,2,3,0.8) 0%, rgba(5,2,3,0.3) 38%, transparent 62%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 z-[5]">
        <div className="mx-auto flex max-w-[82.5rem] flex-wrap items-end justify-between gap-6 px-6 pb-8 md:pb-12">
          <div className="min-w-0 flex-1 basis-[36rem]">
            <p className="eyebrow mb-3">You are standing inside our work</p>
            <h1 className="display-xl text-extrude text-[clamp(2.5rem,6.6vw,6rem)]">
              Every wall
              <br />
              is a stage.
            </h1>
            <p className="mt-5 max-w-[34rem] text-[1.0625rem] leading-relaxed text-cream-dim md:text-lg">
              Projection mapping, son-et-lumière, laser water shows and museums — designed,
              produced and installed across India by one studio.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 pb-1">
            <Link
              href="#showreel"
              className="inline-flex min-h-[3.375rem] items-center gap-3 rounded-full bg-cream py-0 pr-7 pl-2.5 font-semibold text-ink transition hover:bg-white"
            >
              <span className="inline-flex h-[2.375rem] w-[2.375rem] items-center justify-center rounded-full bg-burgundy">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F6EEE6" aria-hidden>
                  <path d="M7 4.5v15l12-7.5z" />
                </svg>
              </span>
              Watch the showreel
            </Link>
            <span className="hidden items-center gap-2 text-sm text-muted md:inline-flex">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 9 2 12l3 3M19 9l3 3-3 3M2 12h20" />
              </svg>
              Move your cursor to look around
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Surface({
  width,
  height,
  left,
  top,
  transform,
  hidden,
  children,
}: {
  width: number;
  height: number;
  left: number;
  top: number;
  transform: string;
  hidden?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden={hidden}
      className="absolute overflow-hidden bg-black"
      style={{ width, height, left, top, transform }}
    >
      {children}
    </div>
  );
}

function Plaque({
  children,
  style,
}: {
  children: React.ReactNode;
  style: React.CSSProperties;
}) {
  return (
    <span
      className="absolute rounded-full border border-gold/60 bg-night/75 text-gold-bright"
      style={{ padding: "0.36em 0.72em", lineHeight: 1.2, ...style }}
    >
      {children}
    </span>
  );
}
