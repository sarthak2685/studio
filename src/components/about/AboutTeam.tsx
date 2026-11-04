"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SketchField } from "@/components/SketchField";
import { team } from "@/content/team";

export function AboutTeam() {
  const founder = team.find((m) => m.featured);
  const rest = team.filter((m) => !m.featured);

  return (
    <section
      id="team"
      className="theme-dark section-pad relative overflow-hidden border-t border-line py-24 md:py-32"
    >
      <SketchField />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.32em] text-gold uppercase">The company</p>
          <h2 className="display-lg mt-3.5 max-w-3xl text-[clamp(2rem,4.2vw,3.5rem)]">
            Minds that map the night
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Producers, writers, animators and integrators — one studio that treats every façade
            like a living manuscript.
          </p>
        </Reveal>

        {founder ? (
          <Reveal delay={0.08}>
            <div className="mt-14 grid items-center gap-8 border border-line/50 bg-night/40 md:grid-cols-[0.95fr_1.05fr] md:gap-0">
              <div className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[520px]">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-night/30" />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">
                <p className="text-[10px] tracking-[0.28em] text-gold uppercase">Founder</p>
                <h3 className="display-lg mt-3.5 text-[clamp(2rem,4.2vw,3.5rem)]">
                  {founder.name}
                </h3>
                <p className="mt-3 text-lg text-cream/85">{founder.role}</p>
                {founder.experience ? (
                  <p className="mt-2 text-sm text-muted">{founder.experience}</p>
                ) : null}
                <div className="gold-rule mt-6" />
                <p className="mt-6 text-sm leading-relaxed text-cream/80 md:text-base">
                  {founder.vision ?? founder.bio}
                </p>
                {founder.bio && founder.vision ? (
                  <p className="mt-4 text-sm leading-relaxed text-muted">{founder.bio}</p>
                ) : null}
              </div>
            </div>
          </Reveal>
        ) : null}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((member, i) => (
            <motion.article
              key={member.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden border border-line/40 bg-night/60"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-5">
                <p className="text-[10px] tracking-[0.22em] text-gold uppercase">{member.role}</p>
                <h3 className="mt-2 text-2xl font-semibold leading-snug text-cream">{member.name}</h3>
                {member.experience ? (
                  <p className="mt-2 text-sm text-muted">{member.experience}</p>
                ) : null}
                {member.bio ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
