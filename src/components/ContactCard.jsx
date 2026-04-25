function Arrow() {
  return (
    <span className="transition-all" aria-hidden="true" style={{ color: "var(--textFaint)", transform: "translate(0,0)" }}>
      ↗
    </span>
  );
}

function Tile({ children }) {
  return (
    <div
      className="grid h-[40px] w-[40px] place-items-center rounded-[8px] transition-colors"
      style={{ background: "var(--bgAlt)", border: "1px solid var(--border)", color: "var(--textDim)" }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export function ContactCard({ label, handle, href, icon, external }) {
  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="group block rounded-[12px] p-[26px] focus-visible:ring-2 focus-visible:ring-[#3B82F6]/50"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--border)",
        transition: "all 240ms cubic-bezier(.22,.61,.36,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--panelHi)";
        e.currentTarget.style.borderColor = "rgba(59,130,246,0.45)";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 20px 50px -25px rgba(26,86,219,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--panel)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
      aria-label={label}
    >
      <div className="flex items-start justify-between">
        <div className="group-hover:text-[var(--accentHi)]">
          <Tile>{icon}</Tile>
        </div>
        <Arrow />
      </div>

      <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--textFaint)" }}>
        {label}
      </div>

      <div className="mt-2 text-[15px] font-medium break-all" style={{ color: "var(--text)" }}>
        {handle}
      </div>

      <style>{`
        .group:hover span[aria-hidden="true"] { color: var(--accentHi); transform: translate(2px,-2px); }
        .group:hover div[aria-hidden="true"] { color: var(--accentHi); }
      `}</style>
    </a>
  );
}

