import { useEffect, useRef, useState } from "react";

const getPrefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
};

export function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (getPrefersReducedMotion()) {
      setShown(true);
      return;
    }

    // Reveal immediately if already in viewport on mount (above the fold).
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh && r.bottom > 0) {
      setShown(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);

    // Safety net: reveal after 1.2s if observer never fires.
    const fb = setTimeout(() => setShown(true), 1200);
    return () => {
      clearTimeout(fb);
      io.disconnect();
    };
  }, []);

  return [ref, shown];
}

