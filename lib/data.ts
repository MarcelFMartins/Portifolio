// Todo o conteúdo do portfólio fica aqui. Edite este arquivo para atualizar o site.

export const profile = {
  name: "Marcel Martins",
  fullName: "Marcel Ferreira Martins",
  role: "Desenvolvedor Júnior",
  tagline: "Engenharia de Software · Automação com IA",
  location: "União da Vitória, PR — Brasil",
  email: "martinsmarcel544@gmail.com",
  site: "https://www.marcelmartins.site",
  socials: [
    { label: "GitHub", href: "https://github.com/MarcelFMartins" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/marcelf-martins/" },
    { label: "Instagram", href: "https://www.instagram.com/marcelf_martins/" },
  ],
};

export const manifesto =
  "Acredito que tecnologia vai além de escrever código. Ela precisa resolver problemas reais, otimizar processos e mudar a forma como pessoas e empresas trabalham.";

export type Project = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  description: string;
  highlights?: string[];
  stack: string[];
  live?: string;
  repo?: string;
  private?: boolean;
  /** Recebe selo e borda especial na vitrine. */
  spotlight?: boolean;
};

// Projetos em destaque — aparecem na seção horizontal fixa.
export const featured: Project[] = [
  {
    slug: "nodum-barber",
    title: "NodumBarber",
    kind: "SaaS · Barbearia",
    year: "2026",
    description:
      "Sistema de gestão para barbearias: agenda por barbeiro, checkout com pagamento dividido, planos de pacote, comissões, estoque, relatórios e dashboard.",
    highlights: [
      "Zero conflito de horário com transação SERIALIZABLE",
      "Planos de cortes com crédito e extrato por cliente",
      "WhatsApp manual com mensagens prontas",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Prisma", "PostgreSQL", "JWT", "Playwright"],
    repo: "https://github.com/MarcelFMartins/NodumBarber",
    spotlight: true,
  },
  {
    slug: "nodum-studio",
    title: "NodumStudio",
    kind: "SaaS · Gestão",
    year: "2026",
    description:
      "Sistema completo de gestão para estúdios de beleza: agenda por profissional, comissões, estoque com vendas, pagamentos divididos, planos de pacote e relatórios.",
    highlights: [
      "Agenda com prevenção de conflito transacional",
      "RBAC em três níveis com JWT + refresh rotativo",
      "Testes unitários, de integração e E2E",
    ],
    stack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind v4", "Jest", "Playwright"],
    repo: "https://github.com/MarcelFMartins/NodumStudio",
  },
  {
    slug: "agenda-interna",
    title: "Agenda Interna",
    kind: "Gestão de tarefas",
    year: "2026",
    description:
      "Controle de tarefas interno no espírito do Notion: painel com gráficos, tabela, kanban com arrastar e soltar, prazos e equipe.",
    highlights: ["Kanban com arrastar e soltar", "Gráficos em SVG puro, sem dependências", "Sessão httpOnly e bcrypt"],
    stack: ["Node.js", "Express", "PostgreSQL", "JavaScript", "Design System"],
    repo: "https://github.com/MarcelFMartins/AgendaInterna",
  },
  {
    slug: "nodum-cs",
    title: "Nodum CS Quiz",
    kind: "Quiz competitivo",
    year: "2026",
    description:
      "Quiz sobre Counter-Strike com modos Solo e Duo, combos e bônus de velocidade, login com Google e Steam e painel administrativo.",
    highlights: ["Login Steam OpenID + Firebase", "Painel admin com KPIs e CSV", "Funções serverless na Vercel"],
    stack: ["JavaScript", "GSAP", "Firebase", "Firestore", "Vercel"],
    repo: "https://github.com/MarcelFMartins/NodumCS",
  },
  {
    slug: "ihub",
    title: "iHub Brasil",
    kind: "Site · Vitrine 3D",
    year: "2026",
    description:
      "Vitrine para revendedora Apple com iPhone em 3D interativo, cenas guiadas pelo scroll e transições cinematográficas.",
    highlights: ["Modelo 3D com React Three Fiber", "Cenas fixas com ScrollTrigger", "Smooth scroll com Lenis"],
    stack: ["Next.js", "GSAP", "Lenis", "Three.js", "R3F"],
    live: "https://ihub-site.vercel.app",
    repo: "https://github.com/MarcelFMartins/Ihub-site",
  },
  {
    slug: "help-multas",
    title: "Help Multas Franquias",
    kind: "Landing page",
    year: "2026",
    description:
      "Landing page de captação de franqueados para uma rede com mais de 80 unidades no Brasil, com animações de scroll e foco em conversão.",
    stack: ["React", "Vite", "TypeScript", "GSAP", "Lenis", "Tailwind v4"],
    live: "https://lp-help-multas-v2.vercel.app",
    repo: "https://github.com/MarcelFMartins/lp-help-multas-v2",
  },
  {
    slug: "nodum-site",
    title: "Nodum",
    kind: "Site institucional",
    year: "2026",
    description:
      "Site da Nodum Soluções Integradas, consultoria de gestão e tecnologia para PMEs, construído sobre um design system próprio.",
    stack: ["Next.js 15", "Tailwind v4", "Framer Motion", "Design System"],
    live: "https://nodumsolucoes.com",
    repo: "https://github.com/MarcelFMartins/NodumSite",
  },
  {
    slug: "dre",
    title: "Painel DRE",
    kind: "Dashboard financeiro",
    year: "2026",
    description:
      "Painel executivo de indicadores financeiros para um grupo de empresas. Importa planilhas e PDFs contábeis, filtra por empresa e período e compara com o ano anterior.",
    highlights: ["Parsers por rótulo, não por posição", "SQLite nativo do Node", "Comparativo entre períodos"],
    stack: ["Node.js", "Express", "SQLite", "SheetJS", "Chart.js"],
    private: true,
  },
  {
    slug: "central-dados",
    title: "Central de Dados",
    kind: "Dashboard de tráfego",
    year: "2026",
    description:
      "Painel de tráfego, funil e resultados a partir dos eventos da Meta, reunindo campanhas e conversões em uma só tela.",
    stack: ["JavaScript", "HTML", "CSS", "Meta Events"],
    repo: "https://github.com/MarcelFMartins/Logs-Events-Meta",
  },
];

// Demais projetos — lista compacta.
export const archive: Project[] = [
  {
    slug: "remotion",
    title: "Help Day — vídeos programáticos",
    kind: "Vídeo com código",
    year: "2026",
    description: "Vídeos gerados com React e Remotion.",
    stack: ["React", "Remotion"],
    repo: "https://github.com/MarcelFMartins/remotion_helpday",
  },
  {
    slug: "planejamento",
    title: "Editor de Planejamento",
    kind: "Ferramenta interna",
    year: "2026",
    description: "Editor de planejamento para agência de marketing, com exportação em JSON e PDF.",
    stack: ["JavaScript", "PDF", "JSON"],
    repo: "https://github.com/MarcelFMartins/Editor-de-Planejamento",
  },
  {
    slug: "vogel",
    title: "Vogel Assessoria Contábil",
    kind: "Site institucional",
    year: "2026",
    description: "Site para escritório de contabilidade.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/MarcelFMartins/VogelAssessoria",
  },
  {
    slug: "estoque",
    title: "Estoque & Fluxo de Caixa",
    kind: "Aplicação web",
    year: "2026",
    description: "Controle de estoque e fluxo de caixa com gráficos e filtro por período.",
    stack: ["Python", "Streamlit"],
    live: "https://estoque-e8caixuridai9ybnkf6ixv.streamlit.app/",
    repo: "https://github.com/MarcelFMartins/Estoque",
  },
  {
    slug: "casamento",
    title: "Site de Casamento",
    kind: "Site de evento",
    year: "2026",
    description: "Informações e indicações para convidados.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://site-casamento-eight-alpha.vercel.app",
    repo: "https://github.com/MarcelFMartins/Site_Casamento",
  },
  {
    slug: "shark",
    title: "Shark Street",
    kind: "E-commerce (front)",
    year: "2026",
    description: "Front-end de loja de vestuário.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://marcelfmartins.github.io/Site_SharkStreet/",
    repo: "https://github.com/MarcelFMartins/Site_SharkStreet",
  },
  {
    slug: "escape",
    title: "Escape Room",
    kind: "Mini jogo",
    year: "2026",
    description: "Jogo com três níveis de dificuldade e menu inicial.",
    stack: ["JavaScript"],
    live: "https://marcelfmartins.github.io/Javascript_EscapeRoom/",
    repo: "https://github.com/MarcelFMartins/Javascript_EscapeRoom",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  place: string;
  current?: boolean;
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: "Help Multas",
    role: "Desenvolvedor Júnior",
    period: "Mar 2026 — Atual",
    place: "União da Vitória, PR",
    current: true,
    points: [
      "Desenvolvimento de soluções e sistemas para o negócio.",
      "Automação de processos com Inteligência Artificial.",
      "Landing page de franquias e vídeos programáticos com Remotion.",
    ],
  },
  {
    company: "Projetos independentes",
    role: "Desenvolvedor Full-stack",
    period: "2026 — Atual",
    place: "Remoto",
    current: true,
    points: [
      "SaaS de gestão para estúdios de beleza, do banco ao deploy.",
      "Sites institucionais e vitrines com animação e 3D.",
      "Dashboards financeiros e de tráfego para empresas.",
    ],
  },
  {
    company: "Chitko Soluções de Informática",
    role: "Estagiário",
    period: "2026",
    place: "Porto União, SC",
    points: ["Vivência prática em ambiente de TI, suporte e infraestrutura."],
  },
  {
    company: "Vogel Assessoria Contábil",
    role: "Estagiário",
    period: "2025 — 2026",
    place: "Matos Costa, SC",
    points: [
      "Rotinas administrativas, organização e suporte ao dia a dia.",
      "Desenvolvimento do site institucional do escritório.",
    ],
  },
];

export const education = [
  { title: "Bacharelado em Engenharia de Software", place: "UGV — Centro Universitário Vale do Iguaçu", period: "2026 — 2029" },
  { title: "Técnico em Tecnologia da Informação", place: "UNIUV", period: "2023 — 2024" },
  { title: "Técnico em Gestão de Cooperativas", place: "SESI SENAI", period: "2025" },
  { title: "Assistente Administrativo", place: "Formação complementar", period: "" },
];

export const skills = [
  {
    group: "Front-end",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "GSAP", "Lenis", "Framer Motion", "Three.js", "HTML & CSS"],
  },
  {
    group: "Back-end & dados",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "MySQL", "SQLite", "JWT & RBAC", "Python", "Streamlit"],
  },
  {
    group: "Automação & IA",
    items: ["Automação de processos", "Agentes de IA", "Claude Code", "Remotion", "Parsing de XLSX e PDF", "Chart.js"],
  },
  {
    group: "Entrega",
    items: ["Git & GitHub", "Vercel", "Ubuntu Server", "Nginx", "PM2", "Jest", "Playwright"],
  },
];
