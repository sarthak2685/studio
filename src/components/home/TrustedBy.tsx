const clients = [
  "Lucknow Development Authority",
  "Indian Air Force",
  "HDFC",
  "Global Vipassana Pagoda",
  "Signature Global",
  "WAVES 2025",
  "G20 India",
  "Panasonic",
  "Epson",
  "BARCO",
  "BenQ",
];

export function TrustedBy() {
  return (
    <section aria-label="Clients and partners" className="bg-night">
      <div className="mx-auto max-w-[82.5rem] px-6 pt-20 pb-6">
        <p className="mb-6 text-center text-[0.875rem] font-semibold tracking-[0.22em] text-muted uppercase">
          Trusted on projects for
        </p>
        <div className="flex flex-wrap justify-center gap-x-11 gap-y-3.5">
          {clients.map((client) => (
            <span
              key={client}
              className="font-display text-[1.375rem] font-bold text-muted-deep uppercase"
              style={{ fontStretch: "90%" }}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
