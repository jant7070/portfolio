export function SkillTag({ children }) {
  return (
    <span
      className="inline-flex items-center rounded-[6px] px-[12px] py-[8px] font-mono text-[12.5px] transition-all"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--border)",
        color: "var(--textDim)",
        transition: "all 220ms ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(26,86,219,0.10)";
        e.currentTarget.style.borderColor = "rgba(59,130,246,0.45)";
        e.currentTarget.style.color = "var(--text)";
        e.currentTarget.style.boxShadow = "0 0 0 4px rgba(26,86,219,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--panel)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.color = "var(--textDim)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {children}
    </span>
  );
}

