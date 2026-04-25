function Badge({ variant }) {
  const isLive = variant === "live";
  return (
    <span
      className="rounded-[4px] px-[8px] py-[4px] font-mono text-[10.5px] uppercase tracking-[0.08em]"
      style={{
        color: isLive ? "var(--success)" : "var(--textDim)",
        border: isLive ? "1px solid rgba(34,197,94,0.3)" : "1px solid var(--border)",
        background: isLive ? "rgba(34,197,94,0.06)" : "transparent",
      }}
    >
      {isLive ? "Live" : "Private — Production"}
    </span>
  );
}

function IconTile({ icon }) {
  return (
    <div
      className="grid h-[44px] w-[44px] place-items-center rounded-[10px] text-[22px]"
      style={{ background: "var(--bgAlt)", border: "1px solid var(--border)" }}
      aria-hidden="true"
    >
      {icon}
    </div>
  );
}

function StackPill({ children }) {
  return (
    <span
      className="rounded-[4px] px-[7px] py-[3px] font-mono text-[11px]"
      style={{ background: "var(--bgAlt)", border: "1px solid var(--border)", color: "var(--textDim)" }}
    >
      {children}
    </span>
  );
}

export function ProjectCard({ project }) {
  const { id, icon, title, description, stack, badge, href, accent, visitLabel } = project;

  const Base = href ? "a" : "button";
  const baseProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { type: "button", onClick: () => {} };

  return (
    <Base
      {...baseProps}
      className="group relative block w-full overflow-hidden rounded-[12px] p-[26px] pb-[24px] text-left focus-visible:ring-2 focus-visible:ring-[#3B82F6]/50"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--border)",
        boxShadow: "0 1px 0 rgba(255,255,255,.02) inset",
        transition:
          "transform 280ms cubic-bezier(.22,.61,.36,1), border-color 280ms, box-shadow 280ms",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "var(--borderHi)";
        e.currentTarget.style.boxShadow =
          "0 24px 60px -30px rgba(0,0,0,0.7), 0 0 0 1px var(--borderHi)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "0 1px 0 rgba(255,255,255,.02) inset";
      }}
      aria-label={href ? `Open ${title}` : undefined}
    >
      <div
        className="absolute left-0 top-0 h-full w-[2px] origin-top opacity-0"
        aria-hidden="true"
        style={{
          background: accent,
          transform: "scaleY(0.3)",
          transition: "opacity 320ms, transform 320ms",
        }}
      />

      <div className="flex items-start justify-between">
        <IconTile icon={icon} />
        <Badge variant={badge} />
      </div>

      <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--textFaint)" }}>
        {id}
      </div>

      <div
        className="mt-3 text-[19px] font-semibold tracking-[-0.015em]"
        style={{ lineHeight: 1.25, color: "var(--text)" }}
      >
        {title}
      </div>

      <p className="mt-3 text-[14px] leading-[1.6]" style={{ color: "var(--textDim)" }}>
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {stack.map((s) => (
          <StackPill key={s}>{s}</StackPill>
        ))}
      </div>

      {visitLabel ? (
        <div className="mt-6 flex items-center gap-2 font-mono text-[12px]" style={{ color: "var(--textDim)" }}>
          <span className="transition-colors">{visitLabel}</span>
          <span
            className="transition-transform"
            aria-hidden="true"
            style={{ transform: "translate(0,0)" }}
          >
            ↗
          </span>
        </div>
      ) : null}

      <style>{`
        .group:hover > div[aria-hidden="true"] { opacity: 1; transform: scaleY(1); }
        .group:hover div.font-mono.text-[12px] { color: var(--accentHi); }
        .group:hover div.font-mono.text-[12px] span[aria-hidden="true"] { transform: translate(2px,-2px); }
      `}</style>
    </Base>
  );
}

