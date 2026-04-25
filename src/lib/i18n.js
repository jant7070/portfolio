export const LANGS = {
  en: "en",
  es: "es",
};

export const copy = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      work: "Work",
      contact: "Contact",
      available: "Available",
      langToggleToEs: "Switch language to Spanish",
      langToggleToEn: "Switch language to English",
    },
    hero: {
      meta: "Caracas, Venezuela · Remote, Globally",
      roleLabel: "role",
      roleWords: ["Full-Stack Developer", "AI Automation Engineer", "Fintech Systems Builder"],
      bio: "I design and ship full-stack systems that automate complex business processes — with a focus on AI integration and fintech.",
      ctaWork: "View My Work",
      ctaTouch: "Get In Touch",
      metrics: [
        { value: "500+", label: "Loan applications processed" },
        { value: "15+", label: "Internal staff served" },
        { value: "6", label: "Production systems shipped" },
        { value: "24h", label: "Response time" },
      ],
    },
    about: {
      kicker: "01 / About",
      title: "Solo technical hire, regulated fintech.",
      subtitle:
        "Architected and deployed an end-to-end lending platform from scratch for a Venezuelan microfinance company — every layer, from JWT auth to bank API integration.",
      p1:
        "I joined a regulated Venezuelan microfinance company as the only technical hire and built an end-to-end lending platform from scratch — application intake, risk review, disbursement, repayment tracking, and the AI tooling around it.",
      p2Prefix: "The platform processes ",
      p2Strong1: "500+ loan applications",
      p2Mid: " and serves ",
      p2Strong2: "15+ internal staff",
      p2Suffix:
        " across multiple roles. Self-taught, 4Geeks Academy certified. I work bilingually with native Spanish and C2 English.",
      badges: {
        spanish: "Spanish",
        english: "English",
        native: "Native",
        c2: "C2",
      },
      identity: {
        file: "~/identity.json",
        name: '"Jose A. Morillo Sierra"',
        role: '"Full-Stack · AI · Fintech"',
        base: '"Caracas, VE"',
        mode: '"Remote, global"',
        focus: '"Lending platforms, MCP, n8n"',
        status: '"Available"',
      },
    },
    skills: {
      kicker: "02 / Capabilities",
      title: "The full stack — from server to LLM.",
      subtitle: "Practical tools shipped to production. No theoretical lists; only what's running today.",
      tool: "tool",
      tools: "tools",
      groups: [
        {
          title: "AI & Automation",
          items: ["n8n", "MCP Server Development", "Claude AI / Anthropic API", "LLM Integration", "WATI WhatsApp API"],
        },
        { title: "Backend", items: ["Python", "FastAPI", "SQLAlchemy", "JWT / RBAC", "REST API Design"] },
        { title: "Frontend", items: ["React.js", "JavaScript ES6+", "Framer"] },
        { title: "Database", items: ["PostgreSQL"] },
        { title: "Integrations", items: ["Loandisk API", "BNC Payment API", "WATI API"] },
        { title: "Infrastructure", items: ["VPS Deployment", "Server Configuration", "Production Management"] },
      ],
    },
    projects: {
      kicker: "03 / Selected Work",
      title: "Systems running in production.",
      subtitle:
        "A regulated fintech, six interconnected systems, one engineer. Most are private; the public-facing site is linked.",
      badgePrivate: "Private — Production",
      badgeLive: "Live",
      visit: "visit capitalinvicto.com",
      cards: [
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
          title: "Capital Invicto — Investment Company Website",
          description: "Public-facing website for an investment company. Live and serving prospective clients.",
          stack: ["Framer"],
          badge: "live",
          href: "http://capitalinvicto.com/",
          accent: "var(--success)",
          visitLabel: "visit capitalinvicto.com",
        },
      ],
    },
    contact: {
      kicker: "04 / Contact",
      title: "Let's build something.",
      subtitle: "Available for remote work globally. I respond within 24 hours.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      builtWith: "Built with React",
      version: "v1.0",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      skills: "Habilidades",
      work: "Proyectos",
      contact: "Contacto",
      available: "Disponible",
      langToggleToEs: "Cambiar idioma a español",
      langToggleToEn: "Cambiar idioma a inglés",
    },
    hero: {
      meta: "Caracas, Venezuela · Remoto, Global",
      roleLabel: "rol",
      roleWords: ["Desarrollador Full-Stack", "Ingeniero de Automatización con IA", "Constructor de Sistemas Fintech"],
      bio: "Diseño y desarrollo sistemas full-stack que automatizan procesos de negocio complejos — con foco en integración de IA.",
      ctaWork: "Ver Proyectos",
      ctaTouch: "Contactar",
      metrics: [
        { value: "500+", label: "Solicitudes de crédito procesadas" },
        { value: "15+", label: "Personal interno atendido" },
        { value: "6", label: "Sistemas en producción" },
        { value: "24h", label: "Tiempo de respuesta" },
      ],
    },
    about: {
      kicker: "01 / Sobre mí",
      title: "Único perfil técnico, fintech regulada.",
      subtitle:
        "Diseñé y desarrollé desde cero una plataforma de créditos end-to-end para una empresa de microfinanciamientos venezolana — cada capa, desde autenticación JWT hasta integración con APIs bancarias.",
      p1:
        "Me uní a una empresa de microfinanciamientos venezolana regulada como único perfil técnico y construí desde cero una plataforma de financiamientos end-to-end — captación de solicitudes, evaluación de riesgo, desembolso, seguimiento de pagos y tooling de IA alrededor del sistema.",
      p2Prefix: "La plataforma procesa ",
      p2Strong1: "500+ solicitudes de crédito",
      p2Mid: " y sirve a ",
      p2Strong2: "15+ miembros del equipo interno",
      p2Suffix:
        " en múltiples roles. Autodidacta, certificado por 4Geeks Academy. Trabajo de forma bilingüe con español nativo e inglés C2.",
      badges: {
        spanish: "Español",
        english: "Inglés",
        native: "Nativo",
        c2: "C2",
      },
      identity: {
        file: "~/identity.json",
        name: '"Jose A. Morillo Sierra"',
        role: '"Full-Stack · IA · Fintech"',
        base: '"Caracas, VE"',
        mode: '"Remoto, global"',
        focus: '"Plataformas de crédito, MCP, n8n"',
        status: '"Disponible"',
      },
    },
    skills: {
      kicker: "02 / Capacidades",
      title: "El stack completo — del servidor al LLM.",
      subtitle: "Herramientas prácticas en producción. Sin listas teóricas; solo lo que corre hoy.",
      tool: "herramienta",
      tools: "herramientas",
      groups: [
        {
          title: "IA y Automatización",
          items: ["n8n", "Desarrollo de Servidores MCP", "Claude AI / Anthropic API", "Integración de LLM", "WATI WhatsApp API"],
        },
        { title: "Backend", items: ["Python", "FastAPI", "SQLAlchemy", "JWT / RBAC", "Diseño de APIs REST"] },
        { title: "Frontend", items: ["React.js", "JavaScript ES6+", "Framer"] },
        { title: "Base de datos", items: ["PostgreSQL"] },
        { title: "Integraciones", items: ["Loandisk API", "BNC Payment API", "WATI API"] },
        { title: "Infraestructura", items: ["Despliegue en VPS", "Configuración de servidor", "Gestión en producción"] },
      ],
    },
    projects: {
      kicker: "03 / Trabajo",
      title: "Sistemas corriendo en producción.",
      subtitle:
        "Una fintech regulada, seis sistemas interconectados, un ingeniero. La mayoría son privados; el sitio público está enlazado.",
      badgePrivate: "Privado — Producción",
      badgeLive: "En vivo",
      visit: "visitar capitalinvicto.com",
      cards: [
        {
          id: "P01",
          icon: "🏦",
          title: "Plataforma Fintech del Ciclo de Vida del Crédito",
          description:
            "Plataforma de créditos full-stack que gestiona captación de solicitudes → evaluación de riesgo → desembolso → seguimiento de pagos. Sistema multi-rol con JWT/RBAC que atiende a 500+ solicitantes y 15+ usuarios internos.",
          stack: ["React", "FastAPI", "PostgreSQL", "Loandisk API", "VPS"],
          badge: "private",
          href: null,
          accent: "var(--accentHi)",
        },
        {
          id: "P02",
          icon: "🤖",
          title: "Servidor MCP de Claude AI ↔ Loandisk",
          description:
            "Servidor MCP personalizado que conecta Claude AI directamente con un sistema de gestión de créditos. El equipo consulta y gestiona portafolios con lenguaje natural.",
          stack: ["Python", "Protocolo MCP", "Anthropic API"],
          badge: "private",
          href: null,
          accent: "var(--cyan)",
        },
        {
          id: "P03",
          icon: "📄",
          title: "Pipeline de Procesamiento de Documentos con IA",
          description:
            "Pipeline en n8n que extrae datos KYC estructurados de documentos cargados y escribe directamente en la base de datos — eliminando la carga manual.",
          stack: ["n8n", "Agente IA", "PostgreSQL"],
          badge: "private",
          href: null,
          accent: "var(--accentHi)",
        },
        {
          id: "P04",
          icon: "💳",
          title: "Verificación de Pagos Bancarios en Tiempo Real",
          description:
            "Integración con la API de BNC: el cliente reporta pagos, la API valida en tiempo real y Loandisk se actualiza automáticamente. Eliminó la conciliación manual.",
          stack: ["Python", "FastAPI", "BNC API"],
          badge: "private",
          href: null,
          accent: "var(--accentHi)",
        },
        {
          id: "P05",
          icon: "📲",
          title: "Chatbot de IA por WhatsApp + Monitor de Morosidad",
          description:
            "Chatbot conversacional para soporte al prestatario + segmentación automática por bucket de mora que dispara mensajes de cobranza.",
          stack: ["n8n", "WATI API", "Python"],
          badge: "private",
          href: null,
          accent: "var(--cyan)",
        },
        {
          id: "P06",
          icon: "🌐",
          title: "Capital Invicto — Sitio Web de Empresa de Inversión",
          description: "Sitio web público para una empresa de inversión. En vivo y atendiendo a potenciales clientes.",
          stack: ["Framer"],
          badge: "live",
          href: "http://capitalinvicto.com/",
          accent: "var(--success)",
          visitLabel: "visitar capitalinvicto.com",
        },
      ],
    },
    contact: {
      kicker: "04 / Contacto",
      title: "Construyamos algo.",
      subtitle: "Disponible para trabajo remoto global. Respondo en 24 horas.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      builtWith: "Hecho con React",
      version: "v1.0",
    },
  },
};

export function parseHash() {
  const raw = (typeof window !== "undefined" ? window.location.hash : "") || "";
  const h = raw.replace(/^#/, "").trim();
  if (!h) return { lang: LANGS.en, section: null };

  // Supported formats:
  // - "en"
  // - "es"
  // - "en/about"
  // - "es/projects"
  const [maybeLang, maybeSection] = h.split("/");
  const lang = maybeLang === LANGS.es ? LANGS.es : LANGS.en;
  const section = maybeSection ? maybeSection.trim() : null;
  return { lang, section: section || null };
}

export function setHash(lang, section) {
  const l = lang === LANGS.es ? LANGS.es : LANGS.en;
  const s = section ? String(section).replace(/^#/, "").replace(/^\//, "") : "";
  window.location.hash = s ? `${l}/${s}` : l;
}

