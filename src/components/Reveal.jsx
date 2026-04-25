import { useReveal } from "../hooks/useReveal.js";

const getPrefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
};

export function Reveal({ delay = 0, className = "", children }) {
  const [ref, shown] = useReveal();
  const reduce = getPrefersReducedMotion();

  const style = reduce
    ? { opacity: 1, transform: "none" }
    : {
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 700ms cubic-bezier(.22,.61,.36,1) ${delay}ms, transform 700ms cubic-bezier(.22,.61,.36,1) ${delay}ms`,
      };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}

