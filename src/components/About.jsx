import { Reveal } from "./Reveal.jsx";
import { SectionHeader } from "./SectionHeader.jsx";

function LanguageBadge({ flag, label, level }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-[6px] px-[14px] py-[8px]"
      style={{ border: "1px solid var(--border)", background: "var(--panel)" }}
    >
      <span aria-hidden="true">{flag}</span>
      <span className="text-[15px] font-medium" style={{ color: "var(--text)" }}>
        {label}
      </span>
      <span className="font-mono text-[12.5px]" style={{ color: "var(--accentHi)" }}>
        {level}
      </span>
    </div>
  );
}

function IdentityCard() {
  const rows = [
    ["name", '"Jose A. Morillo Sierra"', "text"],
    ["role", '"Full-Stack · AI · Fintech"', "accent"],
    ["base", '"Caracas, VE"', "accent"],
    ["mode", '"Remote, global"', "accent"],
    ["focus", '"Lending platforms, MCP, n8n"', "accent"],
    ["status", '"Available"', "success"],
  ];

  const valueColor = (kind) => {
    if (kind === "success") return "var(--success)";
    if (kind === "accent") return "var(--accentHi)";
    return "var(--text)";
  };

  return (
    <div className="rounded-[12px] p-6 font-mono text-[12.5px]" style={{ background: "var(--panel)", border: "1px solid var(--border)" }}>
      <div className="flex items-center justify-between pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ color: "var(--textFaint)" }}>~/identity.json</div>
        <div style={{ color: "var(--textFaint)" }}>●●●</div>
      </div>

      <div className="mt-4 space-y-2">
        {rows.map(([key, value, kind], idx) => {
          const isLast = idx === rows.length - 1;
          return (
            <div key={key} className="flex">
              <div className="w-[64px]" style={{ color: "var(--textFaint)" }}>
                {key}
              </div>
              <div className="w-[18px]" style={{ color: "var(--textFaint)" }}>
                :
              </div>
              <div style={{ color: valueColor(kind) }}>
                {value}
                {isLast ? "" : ","}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal delay={0}>
          <SectionHeader
            kicker="01 / About"
            title="Solo technical hire, regulated fintech."
            subtitle="Architected and deployed an end-to-end lending platform from scratch for a Venezuelan microfinance company — every layer, from JWT auth to bank API integration."
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <Reveal delay={80}>
              <p className="text-[17px] leading-[1.7]" style={{ color: "var(--text)" }}>
                I joined a regulated Venezuelan microfinance company as the only technical hire and built an end-to-end lending platform from scratch — application intake, risk review, disbursement, repayment tracking, and the AI tooling around it.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-[17px] leading-[1.7]" style={{ color: "var(--textDim)" }}>
                The platform processes <span style={{ color: "var(--text)", fontWeight: 600 }}>500+ loan applications</span> and serves{" "}
                <span style={{ color: "var(--text)", fontWeight: 600 }}>15+ internal staff</span> across multiple roles. Self-taught, 4Geeks Academy certified. I work bilingually with native Spanish and C2 English.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <LanguageBadge flag="🇻🇪" label="Spanish" level="Native" />
                <LanguageBadge flag="🇺🇸" label="English" level="C2" />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={120}>
              <IdentityCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

