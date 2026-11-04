import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export function Footer() {
  return (
    <>
      <div className="bulbs" aria-hidden />
      <footer className="mt-auto bg-burgundy-deep">
        <div className="mx-auto flex max-w-[82.5rem] flex-wrap justify-between gap-10 px-6 pt-14 pb-8">
          <div className="flex-1 basis-[16.25rem]">
            <Image
              src="/media/logo-magical-theatre.png"
              alt="Magical Theatre"
              width={342}
              height={220}
              className="h-18 w-auto object-contain object-left"
              unoptimized
            />
            <p className="mt-4.5 max-w-[18.75rem] text-[0.9375rem] text-cream-dim">
              A one-stop storytelling studio for projection mapping, son-et-lumière, museums and
              live experiences.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid flex-1 basis-[22.5rem] grid-cols-2 gap-6 text-[0.9375rem] sm:grid-cols-3"
          >
            <div className="flex flex-col gap-2.5">
              <p className="text-[0.8125rem] tracking-[0.16em] text-gold-bright uppercase">
                Explore
              </p>
              {site.nav
                .filter((item) => item.href !== "/")
                .map((item) => (
                  <Link key={item.href} href={item.href} className="text-cream hover:text-gold">
                    {item.label}
                  </Link>
                ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <p className="text-[0.8125rem] tracking-[0.16em] text-gold-bright uppercase">
                Follow
              </p>
              <a
                href={site.contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-cream hover:text-gold"
              >
                Instagram
              </a>
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-cream hover:text-gold"
              >
                WhatsApp
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              <p className="text-[0.8125rem] tracking-[0.16em] text-gold-bright uppercase">
                Contact
              </p>
              <a href={`mailto:${site.contact.email}`} className="text-cream hover:text-gold">
                {site.contact.email}
              </a>
              <a href={site.contact.phoneHref} className="text-cream hover:text-gold">
                {site.contact.phone}
              </a>
              <p className="text-cream-dim">{site.contact.addressShort}</p>
            </div>
          </nav>
        </div>

        <div className="mx-auto flex max-w-[82.5rem] flex-wrap justify-between gap-3 border-t border-cream/15 px-6 pt-5 pb-7 text-[0.875rem] text-cream-dim">
          <span>© 2026 Magical Theatre. All rights reserved.</span>
          <span>magicaltheatre.in</span>
        </div>
      </footer>
    </>
  );
}
