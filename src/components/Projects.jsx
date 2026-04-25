import { Reveal } from "./Reveal.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { ProjectCard } from "./ProjectCard.jsx";
import { useI18n } from "./LanguageProvider.jsx";

export function Projects() {
  const { t } = useI18n();
  const projects = t("projects.cards");

  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal delay={0}>
          <SectionHeader
            kicker={t("projects.kicker")}
            title={t("projects.title")}
            subtitle={t("projects.subtitle")}
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

