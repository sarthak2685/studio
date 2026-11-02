"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/content/site";

const fieldClass =
  "mt-2 w-full border border-gold/35 bg-[rgba(240,180,41,0.06)] px-4 py-3.5 text-sm text-cream outline-none transition placeholder:text-cream/45 focus:border-gold focus:bg-[rgba(240,180,41,0.1)] focus:ring-1 focus:ring-gold/40";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const siteName = String(data.get("site") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Plan a show — ${siteName || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nSite / monument: ${siteName}\n\n${message}`,
    );
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden border border-gold/40 bg-gradient-to-br from-[rgba(240,180,41,0.1)] via-night-elevated to-night p-6 shadow-[0_0_60px_rgba(240,180,41,0.08)] md:p-9"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(240,180,41,0.14),transparent_55%)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />

      <div className="relative">
        <p className="text-[11px] font-semibold tracking-[0.28em] text-gold uppercase">The brief</p>
        <h2 className="mt-3 text-2xl font-bold text-cream md:text-3xl">Write the night you want</h2>
        <p className="mt-2 text-sm leading-relaxed text-cream/75">
          Name the place. Sketch the story. We open it in your mail client.
        </p>

        <div className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Site / monument" name="site" placeholder="Fort, ghat, museum, venue…" />
          <label className="block">
            <span className="text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">
              Message
            </span>
            <textarea
              name="message"
              required
              rows={5}
              className={`${fieldClass} resize-y`}
              placeholder="Audience, ambition, timeline — whatever helps us see the night."
            />
          </label>
          <button
            type="submit"
            className="w-full bg-gold px-5 py-3.5 text-xs font-semibold tracking-[0.22em] text-night uppercase transition hover:bg-cream hover:shadow-[0_0_28px_rgba(240,180,41,0.35)]"
          >
            {site.cta.primary}
          </button>
          {sent ? (
            <p className="text-sm text-gold/90">
              Opening your email client… Or reach us on WhatsApp / phone beside this form.
            </p>
          ) : null}
        </div>
      </div>
    </motion.form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold tracking-[0.22em] text-gold uppercase">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={fieldClass}
      />
    </label>
  );
}
