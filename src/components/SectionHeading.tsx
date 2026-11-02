export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-xs tracking-[0.28em] text-gold uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold leading-snug text-cream md:text-5xl lg:text-[3.25rem] text-balance">
        {title}
      </h2>
      <div className={`gold-rule mt-5 ${align === "center" ? "mx-auto" : ""}`} />
      {body ? (
        <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">{body}</p>
      ) : null}
    </div>
  );
}
