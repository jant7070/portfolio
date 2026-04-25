import { Reveal } from "./Reveal.jsx";
import { ContactCard } from "./ContactCard.jsx";
import { useI18n } from "./LanguageProvider.jsx";

function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.72V8z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.55C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" style={{ background: "var(--bgAlt)" }} className="py-28 md:py-36">
      <div
        className="pointer-events-none h-px w-full"
        aria-hidden="true"
        style={{ backgroundImage: "linear-gradient(90deg, transparent, var(--borderHi), transparent)" }}
      />

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal delay={0}>
          <div className="mb-12 md:mb-16">
            <div className="flex items-center gap-3">
              <div
                className="h-[2px] w-[28px]"
                style={{ backgroundImage: "linear-gradient(90deg, var(--accent), transparent)" }}
                aria-hidden="true"
              />
              <div className="font-mono text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--accentHi)" }}>
                {t("contact.kicker")}
              </div>
            </div>

            <h2
              className="mt-4 font-semibold tracking-[-0.025em]"
              style={{ fontSize: "clamp(36px, 6vw, 64px)", color: "var(--text)" }}
            >
              {t("contact.title")}
            </h2>

            <p className="mt-4 max-w-[640px] text-[16px] leading-[1.7] md:text-[18px]" style={{ color: "var(--textDim)" }}>
              {t("contact.subtitle")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-4 md:grid-cols-3">
            <ContactCard
              label={t("contact.email")}
              handle="josemorillo702@gmail.com"
              href="mailto:josemorillo702@gmail.com"
              icon={<EmailIcon />}
              external={false}
            />
            <ContactCard
              label={t("contact.linkedin")}
              handle="linkedin.com/in/jose-a-morillo"
              href="https://linkedin.com/in/jose-a-morillo"
              icon={<LinkedInIcon />}
              external
            />
            <ContactCard
              label={t("contact.github")}
              handle="github.com/jant7070"
              href="https://github.com/jant7070"
              icon={<GitHubIcon />}
              external
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

