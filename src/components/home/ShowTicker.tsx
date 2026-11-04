/** Places we have actually lit — the top ribbon names shows, not adjectives. */
const places = [
  "Ram Mandir, Ayodhya",
  "Maheshwar Ghat",
  "Gateway of India",
  "Rajwada Palace",
  "Kashi Vishwanath Ghat",
  "Mahakumbh 2025",
  "Jhansi Fort",
  "Aguada Fort",
];

const formats = [
  "Son-et-lumière",
  "Laser water shows",
  "Museums",
  "Experience centres",
  "Façade lighting",
  "High-profile events",
];

/**
 * Two marquee ribbons crossing at opposing angles, bulbs along the edges —
 * the banner outside a theatre rather than a flat strip of keywords.
 */
export function ShowTicker() {
  return (
    <section
      aria-label="Places we have lit and what we create"
      className="relative h-[13rem] overflow-hidden bg-night"
      style={{ perspective: "900px" }}
    >
      <div
        className="ribbon absolute -left-[5%] -right-[5%] top-[2.875rem] overflow-hidden bg-burgundy shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
        style={{ transform: "rotateZ(-3deg) rotateX(18deg)" }}
      >
        <div className="bulbs" aria-hidden />
        <div className="overflow-hidden py-3">
          <span className="ticker font-display text-[1.625rem] font-extrabold tracking-[0.1em] uppercase">
            {[...places, ...places].map((place, i) => (
              <span key={`${place}-${i}`}>
                {place} <span className="text-gold-bright">✦</span>{" "}
              </span>
            ))}
          </span>
        </div>
        <div className="bulbs" aria-hidden />
      </div>

      <div
        className="ribbon absolute -left-[5%] -right-[5%] top-28 overflow-hidden bg-gold text-ink shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        style={{ transform: "rotateZ(2.4deg) rotateX(-14deg)" }}
      >
        <div className="overflow-hidden py-2.5">
          <span className="ticker-rev font-display text-xl font-extrabold tracking-[0.14em] uppercase">
            {[...formats, ...formats].map((format, i) => (
              <span key={`${format}-${i}`}>{format} ● </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
