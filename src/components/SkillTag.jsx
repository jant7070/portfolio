export function SkillTag({ children, highlighted = false, dimmed = false }) {
  const interactive = !highlighted && !dimmed;

  const baseStyle = highlighted
    ? {
        background: "rgba(26,86,219,0.15)",
        border: "1px solid rgba(59,130,246,0.6)",
        color: "var(--text)",
        boxShadow: "0 0 0 3px rgba(26,86,219,0.12), 0 0 12px -4px rgba(26,86,219,0.4)",
        opacity: 1,
        transition: "opacity 250ms ease, background-color 250ms ease, border-color 250ms ease, color 250ms ease, box-shadow 250ms ease",
        cursor: "default",
      }
    : dimmed
      ? {
          background: "var(--panel)",
          border: "1px solid var(--border)",
          color: "var(--textDim)",
          opacity: 0.25,
          boxShadow: "none",
          transition: "opacity 250ms ease, background-color 250ms ease, border-color 250ms ease, color 250ms ease, box-shadow 250ms ease",
          cursor: "default",
        }
      : {
          background: "var(--panel)",
          border: "1px solid var(--border)",
          color: "var(--textDim)",
          opacity: 1,
          boxShadow: "none",
          transition: "all 220ms ease",
          cursor: "default",
        };

  return (
    <span
      className="inline-flex items-center rounded-[6px] px-[12px] py-[8px] font-mono text-[12.5px]"
      style={baseStyle}
      onMouseEnter={
        interactive
          ? (e) => {
              e.currentTarget.style.background = "rgba(26,86,219,0.10)";
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.45)";
              e.currentTarget.style.color = "var(--text)";
              e.currentTarget.style.boxShadow = "0 0 0 4px rgba(26,86,219,0.08)";
            }
          : undefined
      }
      onMouseLeave={
        interactive
          ? (e) => {
              e.currentTarget.style.background = "var(--panel)";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--textDim)";
              e.currentTarget.style.boxShadow = "none";
            }
          : undefined
      }
    >
      {children}
    </span>
  );
}

