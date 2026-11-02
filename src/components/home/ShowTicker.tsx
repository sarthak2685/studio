const phrases = [
  "2D Projection",
  "3D Mapping",
  "Son-et-Lumière",
  "Laser & Water",
  "Museums",
  "China · Yifeng Silver",
  "Italy · XR Florence",
  "Germany · Light Festival",
];

export function ShowTicker() {
  const loop = [...phrases, ...phrases];

  return (
    <section
      aria-label="What Magical Theatre creates"
      className="overflow-hidden border-y border-line bg-burgundy-deep py-5"
    >
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {loop.map((phrase, i) => (
          <span key={`${phrase}-${i}`} className="flex items-center gap-10">
            <span className="text-sm font-medium tracking-[0.2em] text-cream uppercase md:text-base">
              {phrase}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
