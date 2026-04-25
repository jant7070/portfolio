import { useI18n } from "./LanguageProvider.jsx";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--border)" }} className="py-8">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-3 font-mono text-[12px] md:flex-row md:items-center md:justify-between" style={{ color: "var(--textFaint)" }}>
          <div>Jose Antonio Morillo Sierra · {t("footer.builtWith")}</div>
          <div>© {year} · {t("footer.version")}</div>
        </div>
      </div>
    </footer>
  );
}

