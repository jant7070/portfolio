import { useTypewriter } from "../hooks/useTypewriter.js";
import { Reveal } from "./Reveal.jsx";
import { DotGrid } from "./DotGrid.jsx";

function HeroGlows() {
  return (
    <>
      <div
        className="absolute left-1/2 top-[30%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(26,86,219,0.22), transparent 60%)",
          filter: "blur(20px)",
          animation: "heroGlow 14s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute right-[8%] top-[65%] h-[420px] w-[420px] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(34,211,238,0.10), transparent 60%)",
          filter: "blur(18px)",
          animation: "heroGlow2 18s ease-in-out infinite alternate",
        }}
      />
    </>
  );
}

function MetricStrip() {
  const items = [
    ["500+", "Loan applications processed"],
    ["15+", "Internal staff served"],
    ["6", "Production systems shipped"],
    ["24h", "Response time"],
  ];

  return (
    <div
      className="mt-14 overflow-hidden rounded-[8px]"
      style={{ border: "1px solid var(--border)", background: "var(--border)" }}
    >
      <div className="grid grid-cols-2 gap-px md:grid-cols-4">
        {items.map(([num, label]) => (
          <div key={label} className="px-[22px] py-[20px]" style={{ background: "var(--bgAlt)" }}>
            <div className="text-[26px] font-semibold tracking-[-0.02em]" style={{ color: "var(--text)" }}>
              {num}
            </div>
            <div
              className="mt-1 font-mono text-[11px] uppercase tracking-[0.04em]"
              style={{ color: "var(--textFaint)" }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const typed = useTypewriter(
    ["Full-Stack Developer", "AI Automation Engineer", "Fintech Systems Builder"],
    { typeMs: 65, holdMs: 1500, eraseMs: 30, holdAfterEraseMs: 1500 }
  );

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center pb-24 pt-24"
      style={{ paddingTop: "96px", paddingBottom: "96px" }}
    >
      <DotGrid />
      <HeroGlows />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px" aria-hidden="true">
        <div style={{ height: 1, backgroundImage: "linear-gradient(90deg, transparent, var(--borderHi), transparent)" }} />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Reveal delay={0}>
          <div className="flex items-center gap-3">
            <span
              className="h-[6px] w-[6px] rounded-full"
              aria-hidden="true"
              style={{ background: "var(--accent)", boxShadow: "0 0 12px rgba(26,86,219,0.55)" }}
            />
            <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--textFaint)" }}>
              Caracas, Venezuela · Remote, Globally
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1
            className="mt-8 font-semibold tracking-[-0.035em]"
            style={{
              fontSize: "clamp(40px, 7vw, 86px)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              color: "var(--text)",
            }}
          >
            <div>Jose Antonio</div>
            <div style={{ color: "var(--textDim)" }}>Morillo Sierra</div>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-6 flex min-h-[38px] items-center gap-3">
            <div className="font-mono text-[13px]" style={{ color: "var(--textFaint)" }}>
              role <span style={{ color: "var(--textFaint)" }}>::</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[16px] md:text-[18px] lg:text-[22px]" style={{ color: "var(--text)" }}>
              <span>{typed}</span>
              <span
                className="inline-block w-[9px]"
                aria-hidden="true"
                style={{
                  height: "1em",
                  background: "var(--accentHi)",
                  animation: "blink 1s steps(2) infinite",
                }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-7 max-w-[640px] text-[17px] leading-[1.7]" style={{ color: "var(--textDim)" }}>
            I design and ship full-stack systems that automate complex business processes — with a focus on AI integration and fintech.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-[6px] px-[20px] py-[12px] text-white transition-transform focus-visible:ring-2 focus-visible:ring-[#3B82F6]/50"
              style={{
                background: "var(--accent)",
                border: "1px solid var(--accentHi)",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,.08) inset, 0 10px 30px -10px #1A56DB",
                transition: "all 260ms cubic-bezier(.22,.61,.36,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accentHi)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span className="text-[14px] font-medium">View My Work</span>
              <span aria-hidden="true">↓</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[6px] px-[20px] py-[12px] transition-all focus-visible:ring-2 focus-visible:ring-[#3B82F6]/50"
              style={{
                border: "1px solid var(--borderHi)",
                color: "var(--text)",
                background: "transparent",
                transition: "all 260ms cubic-bezier(.22,.61,.36,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accentHi)";
                e.currentTarget.style.background = "var(--panel)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--borderHi)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span className="text-[14px] font-medium">Get In Touch</span>
              <span aria-hidden="true" style={{ color: "var(--textFaint)" }}>
                ↗
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <MetricStrip />
        </Reveal>
      </div>
    </section>
  );
}

