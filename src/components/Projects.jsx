import { Reveal } from "./Reveal.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { ProjectCard } from "./ProjectCard.jsx";
import { useI18n } from "./LanguageProvider.jsx";
import { motion } from "framer-motion";

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
          <div className="grid auto-rows-fr items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                className="h-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

