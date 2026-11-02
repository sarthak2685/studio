"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { team, teamIntro } from "@/content/team";

export function TeamGrid() {
  const founder = team.find((m) => m.featured);
  const rest = team.filter((m) => !m.featured);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <SectionHeading eyebrow="Studio" title="The people behind the light" body={teamIntro} />
      </Reveal>

      {founder ? (
        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-8 border border-line/50 bg-night-elevated/50 p-6 md:grid-cols-[1.05fr_1fr] md:p-10">
            <div className="relative aspect-[4/5] overflow-hidden border border-line/40">
              <Image
                src={founder.photo}
                alt={founder.name}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[10px] tracking-[0.28em] text-gold uppercase">Founder</p>
              <h2 className="mt-3 text-4xl font-semibold leading-snug text-cream md:text-5xl">
                {founder.name}
              </h2>
              <p className="mt-3 text-lg text-cream/85">{founder.role}</p>
              {founder.experience ? (
                <p className="mt-2 text-sm text-muted">{founder.experience}</p>
              ) : null}
              {founder.bio ? (
                <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">{founder.bio}</p>
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
            className="group overflow-hidden border border-line/40 bg-night"
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
    </section>
  );
}
