export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--border)" }} className="py-8">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-3 font-mono text-[12px] md:flex-row md:items-center md:justify-between" style={{ color: "var(--textFaint)" }}>
          <div>Jose Antonio Morillo Sierra · Built with React</div>
          <div>© {year} · v1.0</div>
        </div>
      </div>
    </footer>
  );
}

