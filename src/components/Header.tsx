"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-night/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[82.5rem] items-center gap-8 px-6 md:h-20">
        <Link
          href="/"
          aria-label="Magical Theatre home"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/media/logo-magical-theatre.png"
            alt="Magical Theatre"
            width={342}
            height={220}
            className="h-10 w-auto object-contain md:h-11"
            priority
            unoptimized
          />
        </Link>

        <nav className="hidden flex-1 items-center gap-7 lg:flex">
          {site.nav
            .filter((item) => item.href !== "/")
            .map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.9375rem] font-medium tracking-[0.02em] transition-colors ${
                    active ? "text-gold" : "text-cream hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
        </nav>

        <div className="ml-auto flex items-center gap-2.5">
          <a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full border border-cream/25 px-4 text-[0.9375rem] text-cream transition hover:border-gold hover:text-gold md:inline-flex"
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
              <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.3A8.5 8.5 0 1 1 20.5 11.6z" />
            </svg>
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-full bg-gold px-5 text-[0.9375rem] font-semibold text-ink transition hover:bg-gold-bright"
          >
            {site.cta.primary}
          </Link>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-px w-full bg-cream transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute top-1.5 left-0 block h-px w-full bg-cream transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-cream transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-night-elevated lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 font-medium text-cream"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
