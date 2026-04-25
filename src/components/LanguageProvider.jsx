import { createContext, useContext, useEffect, useMemo } from "react";
import { copy, LANGS } from "../lib/i18n.js";
import { useHashLanguage } from "../hooks/useHashLanguage.js";

const LanguageContext = createContext(null);

function getByPath(obj, path) {
  if (!obj) return undefined;
  if (!path) return obj;
  const parts = String(path).split(".");
  let cur = obj;
  for (const p of parts) {
    if (!cur || typeof cur !== "object") return undefined;
    cur = cur[p];
  }
  return cur;
}

export function LanguageProvider({ children }) {
  const { lang, section, setLang } = useHashLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!section) return;
    const el = document.getElementById(section);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [section]);

  const value = useMemo(() => {
    const t = (keyPath) => {
      const primary = getByPath(copy[lang], keyPath);
      if (primary !== undefined) return primary;
      return getByPath(copy[LANGS.en], keyPath);
    };

    return { lang, setLang, t };
  }, [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

