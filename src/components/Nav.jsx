import { useScrolled } from "../hooks/useScrolled.js";

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="grid h-[22px] w-[22px] place-items-center rounded-[6px]"
        style={{
          backgroundImage: "linear-gradient(135deg, #1A56DB, #22D3EE)",
          boxShadow: "0 6px 20px -6px #1A56DB",
        }}
        aria-hidden="true"
      >
        <span className="font-mono text-[11px] font-bold text-white">J</span>
      </div>

      <div className="font-mono text-[13px]">
        <span style={{ color: "var(--text)" }}>morillo</span>
        <span style={{ color: "var(--textFaint)" }}>.dev</span>
      </div>
    </div>
  );
}

function AvailablePill() {
  return (
    <div
      className="group hidden items-center gap-2 rounded-[999px] px-3 py-2 transition-all md:flex"
      style={{
        border: "1px solid var(--borderHi)",
        background: "var(--panel)",
      }}
    >
      <span
        className="h-[6px] w-[6px] rounded-full"
        style={{ background: "var(--success)", boxShadow: "0 0 8px #22c55e" }}
        aria-hidden="true"
      />
      <span className="text-[14px]" style={{ color: "var(--textDim)" }}>
        Available
      </span>

      <style>{`
        .group:hover { border-color: var(--accentHi); background: var(--panelHi); }
        .group:hover span { color: var(--text); }
      `}</style>
    </div>
  );
}

export function Nav() {
  const scrolled = useScrolled(16);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 h-16 transition-all"
      style={{
        background: scrolled ? "rgba(6,9,15,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 280ms ease",
      }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="inline-flex items-center focus-visible:ring-2 focus-visible:ring-[#3B82F6]/50">
          <LogoMark />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Work", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[14px] transition-colors"
              style={{ color: "var(--textDim)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--textDim)")}
            >
              {label}
            </a>
          ))}
        </nav>

        <AvailablePill />
      </div>
    </header>
  );
}

