export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  headline: string;
  role: string;
  experienceYears: string;
  projectsCount: number;
  location: string;
  email: string;
  emails: string[];
  phones: string[];
  resumeUrl: string;
  askAnythingUrl: string;
  bioSummary: string;
  extendedBio: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  category: "primary" | "secondary";
}

export interface HoloCard {
  id: string;
  badge: string;
  badgeTheme: "blue" | "orange" | "emerald";
  title: string;
  description: string;
  icon: string;
  linkText?: string;
  linkUrl?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  isCurrent?: boolean;
  theme: "emerald" | "blue" | "orange";
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  overview: string;
  bullets: string[];
  theme: "orange" | "blue" | "emerald";
}

export interface TechDiagnosticModule {
  id: string;
  title: string;
  category: string;
  theme: "orange" | "blue" | "green" | "yellow" | "purple" | "emerald";
  percentage: number;
  stateBadge: string;
  sysFile: string;
  logs: string[];
  icon: string;
}

export interface LanguageItem {
  name: string;
  code: string;
  level: string;
  percentage: number;
  theme: "orange" | "blue" | "emerald";
}

export interface BentoCardItem {
  id: string;
  title: string;
  description: string;
  statusTag: string;
  theme: "orange" | "blue" | "green" | "purple";
  tags: string[];
  layout: "tall" | "wide-bottom" | "full-width" | "standard";
  icon: string;
}

export interface PassionItem {
  id: string;
  telemetryCode: string;
  badgeText: string;
  title: string;
  subtitle: string;
  description: string;
  theme: "orange" | "blue" | "green" | "purple";
  stats: string[];
  icon: string;
}

export const portfolioData = {
  personal: {
    name: "Siddhartha Bose",
    firstName: "Siddhartha",
    lastName: "Bose",
    headline: "Technical Consultant & Frontend Developer",
    role: "Technical Consultant",
    experienceYears: "4+",
    projectsCount: 5,
    location: "Currently in Tashkent, Uzbekistan (from Agartala, West Tripura)",
    email: "sid.bose115@gmail.com",
    emails: ["sid.bose115@gmail.com", "bose.sid99@gmail.com"],
    phones: ["+998 507302898", "+91 8974975602", "+91 9600844112"],
    resumeUrl: "https://drive.google.com/file/d/1e9KnIgSpvbBi3IPkVTYfbNcF8_hhxCwk/view?usp=sharing",
    askAnythingUrl: "https://forms.gle/k8DpYhmSyAQhvrqcA",
    bioSummary:
      "A Technical Consultant with 4+ years of experience in the Fintech domain, working closely with clients onsite to provide technical development and production support for Oracle Banking Digital Experience (OBDX) with a strong focus on troubleshooting, issue resolution, and ensuring seamless business operations.",
    extendedBio:
      "Currently based onsite in Tashkent, Uzbekistan as a Client-Site Developer & Technical Consultant at Ziraat Bank Uzbekistan, representing Profinch Solutions Pvt. Ltd. In this role, I bridge onsite client operations with offshore engineering teams—driving frontend development, troubleshooting Oracle Banking Digital Experience (OBDX) implementations, nurturing strategic client relations, and overseeing day-to-day technical deliverables. With an engineering foundation from VIT Vellore and 4+ years in enterprise banking technologies, I specialize in translating complex financial workflows into resilient, user-friendly digital banking solutions.",
  } as PersonalInfo,

  typewriterTitles: [
    "Technical Consultant",
    "Frontend Developer",
    "Oracle OBDX Engineer",
  ],

  tickerSkills: [
    { name: "JAVASCRIPT", icon: "code", style: "solid", color: "orange" },
    { name: "ORACLE OBDX", icon: "landmark", style: "outline", color: "blue" },
    { name: "HTML5 & CSS3", icon: "layout", style: "solid", color: "orange" },
    { name: "ORACLE SQL", icon: "database", style: "outline", color: "white" },
    { name: "PL/SQL", icon: "server", style: "solid", color: "blue" },
    { name: "FINTECH SYSTEMS", icon: "shield-check", style: "outline", color: "emerald" },
    { name: "POWER BI", icon: "bar-chart", style: "solid", color: "yellow" },
    { name: "ANDROID STUDIO", icon: "smartphone", style: "outline", color: "purple" },
    { name: "VS CODE", icon: "terminal", style: "solid", color: "blue" },
    { name: "WINSCP", icon: "folder-sync", style: "outline", color: "white" },
  ],

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/siddharthabose-0b163a172/",
      icon: "linkedin",
      category: "primary",
    },
    {
      name: "GitHub",
      url: "https://github.com/SiddharthaBose",
      icon: "github",
      category: "primary",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/i_m_sid_99/",
      icon: "instagram",
      category: "secondary",
    },
    {
      name: "Telegram",
      url: "https://t.me/SiddharthaBose_05",
      icon: "send",
      category: "secondary",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100009328541368",
      icon: "facebook",
      category: "secondary",
    },
  ] as SocialLink[],

  aboutHoloCards: [
    {
      id: "card-consulting",
      badge: "WORKING PHASE",
      badgeTheme: "blue",
      title: "Technical Consultant",
      description:
        "Building mission-critical digital banking interfaces for international clients at Profinch Solutions Pvt. Ltd., customizing Oracle Banking Digital Experience (OBDX).",
      icon: "landmark",
      linkText: "View Experience",
      linkUrl: "#experience",
    },
    {
      id: "card-engineering",
      badge: "ENGINEERING ROOTS",
      badgeTheme: "orange",
      title: "Biomedical Engineering",
      description:
        "B.Tech in Biomedical Engineering from VIT Vellore (2017-2021). Hands-on foundation in medical devices, biomedical image processing, CAD modeling, and engineering systems diagnostics.",
      icon: "cpu",
    },
    {
      id: "card-analytics",
      badge: "ANALYTICS & MODERN WEB",
      badgeTheme: "emerald",
      title: "Data Analytics & Full-Stack",
      description:
        "Actively expanding into Microsoft Power BI dashboard development, advanced SQL/PL-SQL procedures, and modern full-stack JavaScript architectures.",
      icon: "activity",
    },
  ] as HoloCard[],

  educationTimeline: [
    {
      id: "edu-pgdit",
      period: "Current",
      degree: "Post Graduate Diploma in IT (PGDIT)",
      institution: "Symbiosis Institute, Pune",
      isCurrent: true,
      theme: "emerald",
      highlights: [
        "Advanced information technology principles and systems",
        "Data management and relational database structures",
        "Modern software development methodologies",
      ],
    },
    {
      id: "edu-vit",
      period: "2017 - 2021",
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Vellore Institute of Technology (VIT), Vellore",
      theme: "blue",
      highlights: [
        "Biomedical Engineering Major with focus on medical devices & diagnostic systems",
        "Biomedical image processing, signal analysis, and CAD modeling",
        "Technical problem-solving and rigorous engineering mathematics",
      ],
    },
    {
      id: "edu-12th",
      period: "2015 - 2017",
      degree: "Higher Secondary (12th Grade)",
      institution: "Hindi Higher Secondary School, Agartala",
      theme: "orange",
      highlights: [
        "Physics, Chemistry & Advanced Mathematics focus",
        "Analytical problem-solving and computational foundations",
        "Active involvement in science exhibitions and school athletics",
      ],
    },
    {
      id: "edu-10th",
      period: "Completed 2015",
      degree: "Secondary School (10th Grade)",
      institution: "Holy Cross School, Agartala",
      theme: "blue",
      highlights: [
        "Comprehensive science, mathematics, and language foundation",
        "Strong interpersonal communication and teamwork skills",
        "Active involvement in sports and creative arts",
      ],
    },
  ] as EducationItem[],

  experience: [
    {
      id: "exp-profinch",
      period: "2021 - Present",
      role: "Consultant / Frontend Developer",
      company: "Profinch Solutions Pvt. Ltd.",
      location: "Bangalore, India",
      overview:
        "Profinch Solutions Pvt. Ltd. is a high-growth Fintech firm constructing modern banking ecosystems through consulting for core banking advancement and 360-degree digital transformation.",
      bullets: [
        "Spearheading frontend development on flagship Oracle Banking Digital Experience (OBDX) implementations for international bank clients.",
        "Delivered database support and query optimization for Flexcube Direct Banking (FCDB) systems over a focused six-month period.",
        "Actively involved across 2 full-lifecycle OBDX banking implementations and 3 high-impact production support engagements (5+ total projects).",
        "Customized enterprise user journeys using Oracle UI-Toolkit, JavaScript, HTML5, and CSS3 for omnichannel banking portals.",
        "Collaborated with cross-functional solution architects, QA teams, and banking stakeholders to ensure seamless integration and stability.",
      ],
      theme: "orange",
    },
    {
      id: "exp-mahalasa",
      period: "April 2019 - June 2019",
      role: "College Intern (Summer Intern)",
      company: "Mahalasa Medical Technology",
      location: "Bangalore, India",
      overview:
        "Mahalasa is a Bangalore-based biomedical firm providing ICU and OT medical equipment and healthcare accessories.",
      bullets: [
        "Completed an intensive 6-week summer engineering internship.",
        "Studied complex neurological instruments, monitoring equipment, and precision biomedical manufacturing processes.",
        "Evaluated sensor calibration and hardware-software interaction protocols.",
      ],
      theme: "blue",
    },
    {
      id: "exp-ils",
      period: "May 2018 - July 2018",
      role: "College Intern (Hospital Engineering)",
      company: "ILS Hospitals",
      location: "Agartala, India",
      overview:
        "Premier multi-specialty tertiary care hospital with 8 modular OTs, catheterization lab, MRI, CT scan, digital X-ray, and 24/7 critical care units.",
      bullets: [
        "Completed an 8-week clinical engineering internship.",
        "Observed and documented diagnostic and therapeutic instrumentation across ICU, general wards, and radiology departments.",
        "Assisted biomedical engineering staff with equipment maintenance schedules and safety verifications.",
      ],
      theme: "emerald",
    },
  ] as ExperienceItem[],

  technicalSkills: [
    {
      id: "frontend-web",
      title: "Frontend Development (HTML, CSS, JS)",
      category: "Frontend Architecture",
      theme: "orange",
      percentage: 85,
      stateBadge: "[ STATE: COMPILED ]",
      sysFile: "frontend_core.sys",
      icon: "code",
      logs: [
        "Semantic HTML5 & Modern CSS3 responsive layouts",
        "JavaScript (ES6+) architecture & DOM state management",
        "Oracle UI-Toolkit enterprise component customization",
        "Cross-browser compatibility & client-side performance tuning",
      ],
    },
    {
      id: "obdx-fintech",
      title: "Oracle OBDX & Fintech Architecture",
      category: "Enterprise Fintech",
      theme: "blue",
      percentage: 85,
      stateBadge: "[ ARCHITECTURE: ONLINE ]",
      sysFile: "obdx_fintech_engine.sys",
      icon: "landmark",
      logs: [
        "Oracle Banking Digital Experience (OBDX) frontend customization",
        "Omnichannel retail and corporate digital banking flows",
        "Flexcube Direct Banking (FCDB) operational support",
        "International banking enterprise deployments",
      ],
    },
    {
      id: "oracle-sql",
      title: "Oracle SQL & PL/SQL Database",
      category: "Database Engineering",
      theme: "green",
      percentage: 75,
      stateBadge: "[ DB: CONNECTED ]",
      sysFile: "oracle_plsql.sys",
      icon: "database",
      logs: [
        "Relational schema comprehension & complex data queries",
        "PL/SQL block execution, script updates, and procedure testing",
        "Database support for FCDB client environments",
        "Data verification, transaction tracing, and query debugging",
      ],
    },
    {
      id: "power-bi",
      title: "Microsoft Power BI & Data Analytics",
      category: "Business Intelligence",
      theme: "yellow",
      percentage: 65,
      stateBadge: "[ BI ENGINE: ACTIVE ]",
      sysFile: "powerbi_analytics.sys",
      icon: "bar-chart",
      logs: [
        "Interactive dashboard conceptualization and visual reporting",
        "Data modeling, transformation, and DAX metric formulation",
        "Translating raw business data into actionable KPIs",
        "Active self-directed study in modern data analytics pipelines",
      ],
    },
    {
      id: "dev-tools",
      title: "Tools: VS Code, WinSCP & Android Studio",
      category: "Development Tooling",
      theme: "purple",
      percentage: 80,
      stateBadge: "[ TOOLCHAIN: SYNCED ]",
      sysFile: "developer_tools.sys",
      icon: "terminal",
      logs: [
        "VS Code environment optimization and debugging workflows",
        "WinSCP secure FTP & remote server file management",
        "Android Studio fundamentals & mobile application structure",
        "Microsoft 365 / Office productivity suite (95% mastery)",
      ],
    },
    {
      id: "softskills",
      title: "Communication, Consulting & Teamwork",
      category: "Professional Competencies",
      theme: "emerald",
      percentage: 100,
      stateBadge: "[ LINK STATE: OPTIMAL ]",
      sysFile: "consulting_comms.sys",
      icon: "users",
      logs: [
        "Client-facing technical presentations and feature walkthroughs",
        "Cross-functional collaboration with QA, architects & business teams",
        "Clear documentation for banking change requests and releases",
        "Active listening and agile sprint coordination",
      ],
    },
  ] as TechDiagnosticModule[],

  languages: [
    {
      name: "Bengali",
      code: "BN",
      level: "NATIVE",
      percentage: 100,
      theme: "orange",
    },
    {
      name: "English",
      code: "EN",
      level: "FULL PROFESSIONAL",
      percentage: 100,
      theme: "blue",
    },
    {
      name: "Hindi",
      code: "HI",
      level: "FULL PROFESSIONAL",
      percentage: 100,
      theme: "emerald",
    },
  ] as LanguageItem[],

  bentoCards: [
    {
      id: "bento-obdx",
      title: "ORACLE OBDX & FINTECH",
      description:
        "Delivering mission-critical digital banking interfaces and omnichannel retail/corporate banking portals for international banking institutions.",
      statusTag: "SPECIALIZATION",
      theme: "orange",
      tags: ["OBDX", "Fintech", "Core Banking", "Oracle UI-Toolkit"],
      layout: "tall",
      icon: "landmark",
    },
    {
      id: "bento-frontend",
      title: "FRONTEND ENGINEERING",
      description:
        "Building semantic, responsive, and performance-tuned user experiences with clean HTML5, modern CSS3, and JavaScript.",
      statusTag: "PRODUCTION READY",
      theme: "blue",
      tags: ["JavaScript (ES6+)", "HTML5 & CSS3", "Responsive UI", "REST APIs"],
      layout: "tall",
      icon: "code",
    },
    {
      id: "bento-db",
      title: "DATABASE & SQL/PL-SQL SUPPORT",
      description:
        "Six months dedicated DB operational support for FCDB platforms, executing robust queries, data verifications, and performance analysis.",
      statusTag: "CORE CAPABILITY",
      theme: "green",
      tags: ["Oracle SQL", "PL/SQL", "FCDB Support", "Schema Analysis"],
      layout: "wide-bottom",
      icon: "database",
    },
    {
      id: "bento-bi",
      title: "DATA ANALYTICS & POWER BI",
      description:
        "Self-learning and applying modern business intelligence patterns, designing dynamic Power BI reports, DAX modeling, and visual KPI dashboards.",
      statusTag: "ACTIVE EXPANSION",
      theme: "purple",
      tags: ["Power BI", "DAX", "Data Modeling", "Business Intelligence"],
      layout: "full-width",
      icon: "bar-chart",
    },
  ] as BentoCardItem[],

  sportsPassions: [
    {
      id: "guitar",
      telemetryCode: "MODULE_04.1 // GUITAR.HARMONICS",
      badgeText: "HARMONY & FLOW",
      title: "GUITAR — Rhythm & Melody",
      subtitle: "Creative Harmonic Precision",
      description:
        "Playing guitar fosters deep patience, finger dexterity, rhythm coordination, and mental clarity—translating directly into disciplined software design.",
      theme: "orange",
      stats: ["Rhythm Precision", "Harmonic Flow", "Creative Focus"],
      icon: "music",
    },
    {
      id: "football",
      telemetryCode: "MODULE_04.2 // FOOTBALL.STRATEGY",
      badgeText: "STRATEGY & AGILITY",
      title: "FOOTBALL — Tactical Synergy",
      subtitle: "Pitch Awareness & Teamwork",
      description:
        "Playing football builds endurance, fast spatial anticipation, high-pressure communication, and collaborative team victory on the pitch.",
      theme: "blue",
      stats: ["Spatial Strategy", "Team Synergy", "Reflex Speed"],
      icon: "shield",
    },
    {
      id: "badminton",
      telemetryCode: "MODULE_04.3 // BADMINTON.SPEED",
      badgeText: "REFLEXES & POWER",
      title: "BADMINTON — Split-Second Precision",
      subtitle: "Lightning Court Coverage",
      description:
        "Honing explosive agility, hand-eye coordination, rapid shot anticipation, and calm composure during high-speed rallies.",
      theme: "green",
      stats: ["Split-Second Reflexes", "Court Agility", "Pace Control"],
      icon: "zap",
    },
    {
      id: "sketching",
      telemetryCode: "MODULE_04.4 // ART.STORYTELLING",
      badgeText: "IMAGINATION & DETAIL",
      title: "SKETCHING & ANIME — Visual Storytelling",
      subtitle: "Aesthetic Composition",
      description:
        "Drawing and sketching sharpen an eye for spatial balance, contrast, and fine detail, while anime storytelling inspires bold visual aesthetics.",
      theme: "purple",
      stats: ["Detail Precision", "Visual Storytelling", "Compositional Flow"],
      icon: "palette",
    },
  ] as PassionItem[],
};
