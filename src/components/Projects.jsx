import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Reveal } from "./Reveal.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { ProjectCard } from "./ProjectCard.jsx";
import { useI18n } from "./LanguageProvider.jsx";
import { motion } from "framer-motion";

const CARD_W = 360;
const GAP = 20;

export function Projects() {
  const { t } = useI18n();
  const projects = t("projects.cards");

  const [isLg, setIsLg] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 1024px)").matches;
  });

  const viewportRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setIsLg(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const trackWidth = useMemo(() => {
    const n = projects.length;
    if (n <= 0) return 0;
    return n * CARD_W + Math.max(0, n - 1) * GAP;
  }, [projects.length]);

  const recomputeConstraints = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const vw = el.clientWidth || 0;
    const minLeft = Math.min(0, vw - trackWidth);
    setDragConstraints({ left: minLeft, right: 0 });
  }, [trackWidth]);

  useEffect(() => {
    recomputeConstraints();
  }, [isLg, recomputeConstraints]);

  useEffect(() => {
    if (!isLg) return;
    const onResize = () => recomputeConstraints();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isLg, recomputeConstraints]);

  const cardMotionProps = (i) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.22, 0.61, 0.36, 1],
    },
  });

  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal delay={0}>
          <SectionHeader kicker={t("projects.kicker")} title={t("projects.title")} subtitle={t("projects.subtitle")} />
        </Reveal>

        <Reveal delay={120}>
          {!isLg ? (
            <div className="grid auto-rows-fr items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <motion.div key={p.id} className="h-full" {...cardMotionProps(i)}>
                  <ProjectCard project={p} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div>
              <div
                ref={viewportRef}
                className="relative w-full overflow-hidden"
                style={{ cursor: isDragging ? "grabbing" : "grab" }}
              >
                <div
                  className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[48px]"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
                />
                <div
                  className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[48px]"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
                />

                <motion.div
                  className="flex w-max"
                  style={{ gap: GAP }}
                  drag="x"
                  dragConstraints={dragConstraints}
                  dragElastic={0.1}
                  dragMomentum
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={() => setIsDragging(false)}
                >
                  {projects.map((p, i) => (
                    <motion.div key={p.id} className="h-full w-[360px] shrink-0" {...cardMotionProps(i)}>
                      <ProjectCard project={p} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--textFaint)" }}>
                ← {t("projects.dragHint")} →
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
