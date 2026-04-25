import { useEffect, useMemo, useRef, useState } from "react";

const getPrefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
};

export function useTypewriter(words, opts) {
  const options = useMemo(() => {
    return {
      typeMs: opts?.typeMs ?? 65,
      holdMs: opts?.holdMs ?? 1500,
      eraseMs: opts?.eraseMs ?? 30,
      holdAfterEraseMs: opts?.holdAfterEraseMs ?? 1500,
    };
  }, [opts?.eraseMs, opts?.holdAfterEraseMs, opts?.holdMs, opts?.typeMs]);

  const safeWords = Array.isArray(words) && words.length > 0 ? words : [""];
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState("type"); // type | hold | erase
  const [typed, setTyped] = useState("");

  const timeoutRef = useRef(null);

  useEffect(() => {
    if (getPrefersReducedMotion()) {
      setWordIndex(0);
      setPhase("hold");
      setTyped(safeWords[0] ?? "");
      return;
    }

    const activeWord = safeWords[wordIndex] ?? "";

    const clear = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };

    clear();

    if (phase === "type") {
      if (typed.length >= activeWord.length) {
        setPhase("hold");
        return clear;
      }

      timeoutRef.current = setTimeout(() => {
        setTyped(activeWord.slice(0, typed.length + 1));
      }, options.typeMs);
      return clear;
    }

    if (phase === "hold") {
      timeoutRef.current = setTimeout(() => setPhase("erase"), options.holdMs);
      return clear;
    }

    if (phase === "erase") {
      if (typed.length === 0) {
        timeoutRef.current = setTimeout(() => {
          setWordIndex((i) => (i + 1) % safeWords.length);
          setPhase("type");
        }, options.holdAfterEraseMs);
        return clear;
      }

      timeoutRef.current = setTimeout(() => {
        setTyped((t) => t.slice(0, Math.max(0, t.length - 1)));
      }, options.eraseMs);
      return clear;
    }

    return clear;
  }, [
    options.eraseMs,
    options.holdAfterEraseMs,
    options.holdMs,
    options.typeMs,
    phase,
    safeWords,
    typed,
    wordIndex,
  ]);

  return typed;
}

