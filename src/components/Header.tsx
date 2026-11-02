"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md transition-colors duration-500 ${
        scrolled ? "border-line/50 bg-night/85" : "border-transparent bg-night/40"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-[0.18em] text-cream uppercase md:text-2xl">
            Magical Theatre
          </span>
          <span className="hidden text-[10px] tracking-[0.28em] text-gold uppercase sm:inline">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {site.nav
            .filter((item) => item.href !== "/")
            .map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs tracking-[0.22em] uppercase transition-colors ${
                    active ? "text-gold" : "text-cream/70 hover:text-cream"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          <Link
            href="/contact"
            className="border border-gold/50 bg-burgundy px-4 py-2 text-xs tracking-[0.2em] text-cream uppercase transition hover:bg-burgundy-glow"
          >
            {site.cta.primary}
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-line lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-px w-full bg-cream transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-full bg-cream transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 block h-px w-full bg-cream transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-line bg-night-elevated lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm tracking-[0.2em] text-cream/80 uppercase"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 border border-gold/50 bg-burgundy px-4 py-3 text-center text-xs tracking-[0.2em] text-cream uppercase"
              >
                {site.cta.primary}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
