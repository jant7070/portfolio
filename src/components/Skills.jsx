import { Reveal } from "./Reveal.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { SkillTag } from "./SkillTag.jsx";
import { useI18n } from "./LanguageProvider.jsx";

function pluralize(count, singular, plural) {
  return `${count} ${count === 1 ? singular : plural}`;
}

function GroupCard({ index, title, items }) {
  const { t } = useI18n();
  return (
    <div className="p-[28px] pb-[30px]" style={{ background: "var(--bgAlt)" }}>
      <div className="flex items-center justify-between">
        <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--accentHi)" }}>
          {String(index).padStart(2, "0")} · {title}
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--textFaint)" }}>
          {pluralize(items.length, t("skills.tool"), t("skills.tools"))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((t) => (
          <SkillTag key={t}>{t}</SkillTag>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useI18n();
  const groups = t("skills.groups");

  return (
    <section id="skills" style={{ background: "var(--bgAlt)" }} className="py-28 md:py-36">
      <div className="pointer-events-none h-px w-full" aria-hidden="true" style={{ backgroundImage: "linear-gradient(90deg, transparent, var(--borderHi), transparent)" }} />

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal delay={0}>
          <SectionHeader
            kicker={t("skills.kicker")}
            title={t("skills.title")}
            subtitle={t("skills.subtitle")}
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[12px]" style={{ border: "1px solid var(--border)", background: "var(--border)" }}>
            <div className="grid gap-px md:grid-cols-2">
              {groups.map((g, idx) => (
                <GroupCard key={g.title} index={idx + 1} title={g.title} items={g.items} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

