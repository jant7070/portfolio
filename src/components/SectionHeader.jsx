export function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-3">
        <div
          className="h-[2px] w-[28px]"
          style={{ backgroundImage: "linear-gradient(90deg, var(--accent), transparent)" }}
          aria-hidden="true"
        />
        <div
          className="font-mono text-[11px] uppercase tracking-[0.14em]"
          style={{ color: "var(--accentHi)" }}
        >
          {kicker}
        </div>
      </div>

      <h2
        className="mt-4 text-3xl font-semibold tracking-[-0.02em] md:text-5xl"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 max-w-[640px] text-[16px] leading-[1.7] md:text-[18px]" style={{ color: "var(--textDim)" }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

