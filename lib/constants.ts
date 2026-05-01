export const personal = {
  name: "Bhavik Sadiwala",
  monogram: "BS",
  title: "Staff Engineer Android | AI Agents & Automation",
  email: "bhaviksadiwala@gmail.com",
  phone: "+91 90335 44558",
  location: "Bengaluru, India",
  availability: "Open to async remote (UTC+5:30)",
  linkedin: "https://linkedin.com/in/bhaviksadiwala",
  github: "https://github.com/bhaviksadiwala",
  calendly: "https://calendly.com/bhaviksadiwala",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "\u{1F44B} Open to Remote Opportunities",
  h1: "I Build Android Apps\nThat Think.",
  subtext:
    "Staff Engineer with 14 years shipping production Android apps. Now I build LLM-powered mobile features, AI agents, and automation workflows for global teams.",
  ctaPrimary: "Book a Call \u2192",
  ctaSecondary: "Download Resume",
  terminalLines: [
    { type: "command" as const, text: "> bhavik --skills" },
    { type: "output" as const, text: "\u2713 Android Engineering (14 yrs)" },
    { type: "output" as const, text: "\u2713 AI Agent Development" },
    { type: "output" as const, text: "\u2713 LLM Mobile Integration" },
    { type: "output" as const, text: "\u2713 Workflow Automation" },
    { type: "command" as const, text: "> bhavik --available" },
    { type: "output" as const, text: "\u2713 Remote \u00B7 Async \u00B7 UTC+5:30" },
  ],
};

export const impact = [
  { value: 14, suffix: "+", label: "Years Experience" },
  { value: 70, suffix: "%", label: "Faster Dev (Figma-to-Code)" },
  { value: 40, suffix: "%", label: "Team Productivity Boost" },
  { value: 500, suffix: "K+", label: "App Downloads" },
];

export const services = [
  {
    icon: "Smartphone" as const,
    title: "Android Engineering",
    body: "I architect and build production Android apps used by hundreds of thousands of users. Clean Architecture, Jetpack Compose, Kotlin Coroutines \u2014 done right.",
    tags: ["Kotlin", "Jetpack Compose", "Clean Architecture"],
  },
  {
    icon: "Brain" as const,
    title: "AI Agent Development",
    body: "I build end-to-end AI agents \u2014 PR review bots, LLM-powered mobile assistants, multilingual voice agents. Python + LLM APIs + tool orchestration.",
    tags: ["Python", "LLM APIs", "VAPI", "AI Agents"],
  },
  {
    icon: "Zap" as const,
    title: "Automation & Workflows",
    body: "I automate engineering workflows using n8n, Make, and no-code AI pipelines \u2014 cutting manual overhead and multiplying team output.",
    tags: ["n8n", "Make", "No-Code", "Workflow AI"],
  },
];

export const experience = [
  {
    company: "Procore Technologies",
    role: "Staff Engineer Android",
    period: "Aug 2024 \u2013 Present",
    current: true,
    blurb:
      "Building AI-powered features for construction tech used globally.",
    bullets: [
      "Led AI Mobile Assistant \u2014 natural language queries on Android for construction project data",
      "Built \u2018Code Guardian\u2019 \u2014 custom AI agent for automated PR reviews",
      "Multilingual voice agent via VAPI \u2014 10+ languages, real-time speech recognition",
      "Figma Code Connect \u2014 70% reduction in component implementation time",
    ],
    extra: [
      "AI tooling (Cursor, Copilot, Augment) \u2014 40% team productivity boost",
      "Architect modular Clean Architecture across feature, repository, and network layers",
      "Mentored team on Kotlin Coroutines, Flow, and Jetpack Compose",
      "AI Agent Development using Python (LLM APIs, tool use, orchestration)",
      "Automating workflows and AI pipelines using Make and n8n",
    ],
  },
  {
    company: "Vymo Technologies",
    role: "Principal Engineer Android",
    period: "Aug 2019 \u2013 Aug 2024",
    current: false,
    blurb:
      "Led all Android engineering for a 500K+ download B2B sales assistant app.",
    bullets: [
      "Owned full architecture: requirements, DB design, modular structure",
      "Led and mentored 6-person Android team",
      "Drove migration to Clean Architecture + MVVM",
    ],
    extra: [],
  },
  {
    company: "GlobalLogic India",
    role: "Associate Consultant Android",
    period: "May 2018 \u2013 Jul 2019",
    current: false,
    blurb: "",
    bullets: [],
    extra: [],
  },
  {
    company: "DEV Information Technology",
    role: "Sr. Software Developer",
    period: "Feb 2016 \u2013 May 2018",
    current: false,
    blurb: "",
    bullets: [],
    extra: [],
  },
  {
    company: "Earlier Experience",
    role: "BigBang Innovations, Webplanex, Tristate Technology",
    period: "2012 \u2013 2016",
    current: false,
    blurb: "",
    bullets: [],
    extra: [],
  },
];

export const skills = [
  {
    group: "Android",
    items: [
      "Kotlin", "Java", "Jetpack Compose", "Coroutines", "Flow",
      "MVVM", "Clean Architecture", "Hilt", "Retrofit", "Room", "Firebase",
    ],
  },
  {
    group: "AI & Agents",
    items: [
      "Python", "LLM APIs", "AI Agent Dev", "VAPI",
      "Prompt Engineering", "RAG", "Tool Use / Function Calling",
    ],
  },
  {
    group: "Automation",
    items: ["n8n", "Make / Integromat", "No-Code Pipelines", "Zapier"],
  },
  {
    group: "AI Dev Tools",
    items: ["Cursor", "GitHub Copilot", "Augment Code", "Gemini", "ChatGPT"],
  },
  {
    group: "DevOps",
    items: ["Git", "GitHub", "Jenkins", "Gradle", "Android Studio", "Firebase"],
  },
];

export const ebook = {
  badge: "FREE DOWNLOAD",
  title: "The Android + AI Stack That Gets You Hired Remotely",
  subtitle:
    "10 chapters covering LLM integration, AI agents on mobile, automation workflows, and how to position yourself for senior remote roles.",
  cta: "Download Free",
  note: "No spam. Instant PDF download.",
  successMessage: "Check your inbox! The PDF is on its way.",
};

export const contact = {
  title: "Let\u2019s Work Together",
  subtitle:
    "Open to Staff/Principal Android roles, AI agent projects, and consulting engagements.",
  options: [
    {
      icon: "Mail" as const,
      label: "Email Me",
      href: "mailto:bhaviksadiwala@gmail.com",
      value: "bhaviksadiwala@gmail.com",
    },
    {
      icon: "Calendar" as const,
      label: "Book a Call",
      href: "https://calendly.com/bhaviksadiwala",
      value: "Schedule on Calendly",
    },
    {
      icon: "Linkedin" as const,
      label: "View LinkedIn",
      href: "https://linkedin.com/in/bhaviksadiwala",
      value: "linkedin.com/in/bhaviksadiwala",
    },
  ],
  timezone:
    "\u{1F550} Based in Bengaluru (UTC+5:30) \u2014 comfortable with async or overlap hours for US/EU teams",
};

export const footer = {
  credit: "Built with Next.js & deployed on Vercel",
};
