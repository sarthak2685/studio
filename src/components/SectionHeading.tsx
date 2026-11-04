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
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="display-lg mt-3.5 text-[clamp(2rem,4.2vw,3.5rem)] text-balance">{title}</h2>
      <div className={`gold-rule mt-5 ${align === "center" ? "mx-auto" : ""}`} />
      {body ? (
        <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">{body}</p>
      ) : null}
    </div>
  );
}
