import { Reveal } from "./Reveal.jsx";
import { SectionHeader } from "./SectionHeader.jsx";
import { ProjectCard } from "./ProjectCard.jsx";

export function Projects() {
  const projects = [
    {
      id: "P01",
      icon: "🏦",
      title: "Fintech Loan Lifecycle Platform",
      description:
        "Full-stack lending platform handling application intake → risk review → disbursement → repayment tracking. Multi-role JWT/RBAC system serving 500+ applicants and 15+ internal staff.",
      stack: ["React", "FastAPI", "PostgreSQL", "Loandisk API", "VPS"],
      badge: "private",
      href: null,
      accent: "var(--accentHi)",
    },
    {
      id: "P02",
      icon: "🤖",
      title: "Claude AI ↔ Loandisk MCP Server",
      description:
        "Custom MCP server connecting Claude AI directly to a loan management system. Staff query and manage loan portfolios through natural language.",
      stack: ["Python", "MCP Protocol", "Anthropic API"],
      badge: "private",
      href: null,
      accent: "var(--cyan)",
    },
    {
      id: "P03",
      icon: "📄",
      title: "AI Document Processing Pipeline",
      description:
        "n8n agent pipeline that extracts structured KYC data from uploaded documents and writes directly to the database — eliminating manual data entry.",
      stack: ["n8n", "AI Agent", "PostgreSQL"],
      badge: "private",
      href: null,
      accent: "var(--accentHi)",
    },
    {
      id: "P04",
      icon: "💳",
      title: "Real-Time Bank Payment Verification",
      description:
        "BNC API integration: borrowers self-report payments, API validates in real time, Loandisk updates automatically. Eliminated manual bank reconciliation.",
      stack: ["Python", "FastAPI", "BNC API"],
      badge: "private",
      href: null,
      accent: "var(--accentHi)",
    },
    {
      id: "P05",
      icon: "📲",
      title: "WhatsApp AI Chatbot + Delinquency Monitor",
      description:
        "Conversational AI chatbot for borrower support + automated portfolio segmentation by overdue bucket triggering collection messages.",
      stack: ["n8n", "WATI API", "Python"],
      badge: "private",
      href: null,
      accent: "var(--cyan)",
    },
    {
      id: "P06",
      icon: "🌐",
      title: "Capital Invicto — Marketing Website",
      description:
        "Public-facing marketing site for the lending product. Live and serving prospective borrowers.",
      stack: ["Framer"],
      badge: "live",
      href: "http://capitalinvicto.com/",
      accent: "var(--success)",
      visitLabel: "visit capitalinvicto.com",
    },
  ];

  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal delay={0}>
          <SectionHeader
            kicker="03 / Selected Work"
            title="Systems running in production."
            subtitle="A regulated fintech, six interconnected systems, one engineer. Most are private; the public-facing site is linked."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

