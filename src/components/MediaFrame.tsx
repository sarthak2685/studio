import Image from "next/image";

export function MediaFrame({
  label,
  src,
  className = "",
  children,
  priority = false,
}: {
  label?: string;
  src?: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
}) {
  return (
    <div
      className={`media-placeholder relative overflow-hidden border border-line/50 ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={label || "Magical Theatre show"}
          fill
          priority={priority}
          className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : null}
      {children}
      <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent opacity-80" />
      {label ? (
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between gap-3">
          <p className="text-[10px] tracking-[0.24em] text-cream/60 uppercase">{label}</p>
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(240,180,41,0.8)]" />
        </div>
      ) : null}
    </div>
  );
}
