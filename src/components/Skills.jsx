import { useState } from "react";
import { Reveal } from "./Reveal.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { SkillTag } from "./SkillTag.jsx";
import { useI18n } from "./LanguageProvider.jsx";
import { LANGS } from "../lib/i18n.js";

const PROJECT_FILTERS = [
  {
    id: "all",
    label: "",
    labelEs: "",
    skills: [],
    skillsEs: [],
  },
  {
    id: "lending-platform",
    label: "Lending Platform",
    labelEs: "Plataforma de Crédito",
    skills: [
      "React.js",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT / RBAC",
      "REST API Design",
      "Loandisk API",
      "VPS Deployment",
      "Server Configuration",
      "Production Management",
    ],
    skillsEs: [
      "React.js",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT / RBAC",
      "Diseño de APIs REST",
      "Loandisk API",
      "Despliegue en VPS",
      "Configuración de servidor",
      "Gestión en producción",
    ],
  },
  {
    id: "mcp-server",
    label: "MCP Server",
    labelEs: "Servidor MCP",
    skills: ["Python", "FastAPI", "MCP Server Development", "Claude AI / Anthropic API", "LLM Integration", "REST API Design"],
    skillsEs: ["Python", "FastAPI", "Desarrollo de Servidores MCP", "Claude AI / Anthropic API", "Integración de LLM", "Diseño de APIs REST"],
  },
  {
    id: "ai-pipeline",
    label: "AI Pipeline",
    labelEs: "Pipeline IA",
    skills: ["n8n", "PostgreSQL", "Claude AI / Anthropic API", "LLM Integration", "REST API Design"],
    skillsEs: ["n8n", "PostgreSQL", "Claude AI / Anthropic API", "Integración de LLM", "Diseño de APIs REST"],
  },
  {
    id: "payment-verify",
    label: "Payment Verification",
    labelEs: "Verificación de Pagos",
    skills: ["Python", "FastAPI", "BNC Payment API", "Loandisk API", "REST API Design", "PostgreSQL"],
    skillsEs: ["Python", "FastAPI", "BNC Payment API", "Loandisk API", "Diseño de APIs REST", "PostgreSQL"],
  },
  {
    id: "whatsapp-bot",
    label: "WhatsApp Bot",
    labelEs: "Bot WhatsApp",
    skills: ["n8n", "WATI WhatsApp API", "LLM Integration", "Python"],
    skillsEs: ["n8n", "WATI WhatsApp API", "Integración de LLM", "Python"],
  },
];

function pluralize(count, singular, plural) {
  return `${count} ${count === 1 ? singular : plural}`;
}

function FilterBar({ filters, active, onChange, lang }) {
  const { t } = useI18n();
  const labelFor = (f) => {
    if (f.id === "all") return t("skills.filterAll");
    return lang === LANGS.es ? f.labelEs : f.label;
  };

  return (
    <div className="relative" aria-label={t("skills.filterLabel")}>
      <style>{`
        .skills-filter-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .skills-filter-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="skills-filter-scroll flex gap-2 overflow-x-auto pb-2">
        {filters.map((f) => {
          const isActive = active === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onChange(f.id)}
              className="rounded-[999px] px-[14px] py-[8px] font-mono text-[12px] uppercase tracking-[0.1em]"
              style={
                isActive
                  ? {
                      background: "var(--accent)",
                      border: "1px solid var(--accentHi)",
                      color: "#ffffff",
                      boxShadow: "0 0 16px -4px rgba(26,86,219,0.5)",
                      transition: "200ms ease",
                    }
                  : {
                      background: "var(--panel)",
                      border: "1px solid var(--border)",
                      color: "var(--textDim)",
                      transition: "200ms ease",
                    }
              }
              onMouseEnter={(e) => {
                if (isActive) return;
                e.currentTarget.style.borderColor = "var(--borderHi)";
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.background = "var(--panelHi)";
              }}
              onMouseLeave={(e) => {
                if (isActive) return;
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--textDim)";
                e.currentTarget.style.background = "var(--panel)";
              }}
            >
              {labelFor(f)}
            </button>
          );
        })}
      </div>

      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-[48px]"
        aria-hidden="true"
        style={{ background: "linear-gradient(to left, var(--bgAlt), transparent)" }}
      />
    </div>
  );
}

function GroupCard({ index, title, items, activeSkills, isFiltered }) {
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
        {items.map((name) => (
          <SkillTag key={name} highlighted={isFiltered && activeSkills.has(name)} dimmed={isFiltered && !activeSkills.has(name)}>
            {name}
          </SkillTag>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t, lang } = useI18n();
  const groups = t("skills.groups");

  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (id) => {
    if (id === "all") {
      setActiveFilter("all");
      return;
    }
    setActiveFilter((cur) => (cur === id ? "all" : id));
  };

  const activeProject = PROJECT_FILTERS.find((f) => f.id === activeFilter);
  const activeSkillList = activeProject ? (lang === LANGS.es ? activeProject.skillsEs : activeProject.skills) : [];
  const activeSkills = new Set(activeSkillList ?? []);
  const isFiltered = activeFilter !== "all";

  return (
    <section id="skills" style={{ background: "var(--bgAlt)" }} className="py-28 md:py-36">
      <div className="pointer-events-none h-px w-full" aria-hidden="true" style={{ backgroundImage: "linear-gradient(90deg, transparent, var(--borderHi), transparent)" }} />

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal delay={0}>
          <SectionHeader kicker={t("skills.kicker")} title={t("skills.title")} subtitle={t("skills.subtitle")} />
        </Reveal>

        <Reveal delay={60}>
          <div className="mb-8 md:mb-10">
            <FilterBar filters={PROJECT_FILTERS} active={activeFilter} onChange={handleFilterChange} lang={lang} />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[12px]" style={{ border: "1px solid var(--border)", background: "var(--border)" }}>
            <div className="grid gap-px md:grid-cols-2">
              {groups.map((g, idx) => (
                <GroupCard key={g.title} index={idx + 1} title={g.title} items={g.items} activeSkills={activeSkills} isFiltered={isFiltered} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
