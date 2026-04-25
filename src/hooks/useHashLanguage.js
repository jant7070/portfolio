import { useEffect, useState } from "react";
import { LANGS, parseHash, setHash } from "../lib/i18n.js";

export function useHashLanguage() {
  const [{ lang, section }, setState] = useState(() => parseHash());

  useEffect(() => {
    const apply = () => setState(parseHash());
    apply();

    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const setLang = (nextLang) => {
    const l = nextLang === LANGS.es ? LANGS.es : LANGS.en;
    setHash(l, section);
  };

  return { lang, section, setLang };
}

