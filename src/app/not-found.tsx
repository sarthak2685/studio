import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-start justify-center px-5 py-24 md:px-8">
      <p className="text-xs tracking-[0.28em] text-gold uppercase">404</p>
      <h1 className="font-display mt-4 text-5xl text-cream">This scene went dark.</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you requested isn&apos;t on this stage. Return home or browse the work.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="bg-burgundy px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase"
        >
          Home
        </Link>
        <Link
          href="/work"
          className="border border-line px-5 py-3 text-xs tracking-[0.2em] text-cream uppercase"
        >
          Work
        </Link>
      </div>
    </div>
  );
}
