import { Reveal } from "./Reveal.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { useI18n } from "./LanguageProvider.jsx";
import { FloatingGeo } from "./FloatingGeo.jsx";

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
  const { t } = useI18n();
  const identity = t("about.identity");
  const rows = [
    ["name", identity.name, "text"],
    ["role", identity.role, "accent"],
    ["base", identity.base, "accent"],
    ["mode", identity.mode, "accent"],
    ["focus", identity.focus, "accent"],
    ["status", identity.status, "success"],
  ];

  const valueColor = (kind) => {
    if (kind === "success") return "var(--success)";
    if (kind === "accent") return "var(--accentHi)";
    return "var(--text)";
  };

  return (
    <div
      className="w-full max-w-[440px] rounded-[12px] p-6 font-mono text-[12.5px]"
      style={{ background: "var(--panel)", border: "1px solid var(--border)" }}
    >
      <div className="flex items-center justify-between pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
        <div style={{ color: "var(--textFaint)" }}>{identity.file}</div>
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
  const { t } = useI18n();
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal delay={0}>
          <SectionHeader
            kicker={t("about.kicker")}
            title={t("about.title")}
            subtitle={t("about.subtitle")}
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <Reveal delay={80}>
              <p className="text-[17px] leading-[1.7]" style={{ color: "var(--text)" }}>
                {t("about.lead")}
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-[17px] leading-[1.7]" style={{ color: "var(--textDim)" }}>
                {t("about.workPrefix")}
                <span style={{ color: "var(--text)", fontWeight: 600 }}>{t("about.workStrong1")}</span>
                {t("about.workMid")}
                <span style={{ color: "var(--text)", fontWeight: 600 }}>{t("about.workStrong2")}</span>
                {t("about.workSuffix")}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 text-[17px] leading-[1.7]" style={{ color: "var(--textDim)" }}>
                {t("about.closing")}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap gap-3">
                <LanguageBadge flag="🇻🇪" label={t("about.badges.spanish")} level={t("about.badges.native")} />
                <LanguageBadge flag="🇺🇸" label={t("about.badges.english")} level={t("about.badges.c2")} />
              </div>
            </Reveal>
          </div>

          <div className="flex md:col-span-5 justify-center md:justify-end">
            <div className="flex w-full max-w-[440px] flex-col items-center gap-6">
              <FloatingGeo />
              <Reveal delay={120}>
                <IdentityCard />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

