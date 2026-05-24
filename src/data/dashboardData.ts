export interface ProjectSystem {
  id: string;
  name: string;
  status: "Operational" | "Degraded" | "Maintenance";
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  modules: string[];
  architectureSvg?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface EvolutionStage {
  stage: string;
  subtitle: string;
  details: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const profileData = {
  name: "Santhosh G Rao",
  title: "Software Developer",
  role: "Full Stack Engineer & Generative AI Builder",
  status: "ONLINE",
  location: "Mysuru, Karnataka, India",
  currentRole: "AI & Software Development Intern @ Envision Infotech",
  email: "santhoshgrao13@gmail.com",
  github: "https://github.com/SanthoshGRao",
  linkedin: "https://linkedin.com/in/santhosh-g-rao",
};

export const metricsData = {
  projectsBuilt: 12,
  yearsLearning: 5,
  technologiesUsed: 18,
  aiSystemsCreated: 4,
};

export const evolutionStages: EvolutionStage[] = [
  {
    stage: "BCA Core Foundations",
    subtitle: "Amrita Vishwa Vidyapeetham (CGPA: 7.98)",
    details: "Acquired deep fundamentals in OOP Design, Database Systems, Web Development, and general Software Engineering paradigms.",
  },
  {
    stage: "Web Development Proficiency",
    subtitle: "Frontend Interfaces & Styling",
    details: "Transitioned to modern reactive applications using React, HTML5, CSS3, and mobile development in Android and game engines.",
  },
  {
    stage: "Backend Engineering & Integration",
    subtitle: "Servers, Data Lakes & API Structures",
    details: "Built microservices using Node.js, Express, and managed databases like MySQL, PostgreSQL, and MongoDB with RESTful standards.",
  },
  {
    stage: "Generative AI Exploration",
    subtitle: "LLMs, Vectors & Prompt Mechanics",
    details: "Researched AI integrations, building prompt engineering pipelines, capturing contextual document databases, and automating tasks.",
  },
  {
    stage: "Applied AI Systems Architecture",
    subtitle: "MCA Specialization @ JSS Science & Technology University (CGPA: 8.2)",
    details: "Focused on combining data structures, algorithms, and models to deploy end-to-end computer vision and defense networks.",
  },
  {
    stage: "Production Project Deployments",
    subtitle: "Real-world Software & Internship Deliverables",
    details: "Deploying production-ready video generators, scam classifiers, and training simulators in industrial environments.",
  },
];

export const projectSystems: ProjectSystem[] = [
  {
    id: "SYS-01",
    name: "AI-Powered Real Estate Video Generation Platform",
    status: "Operational",
    problem: "Real estate agents lose hours writing scripts and editing footage to create promotional video content for properties.",
    solution: "An automated pipeline that ingests raw property specifications, generates scripts, synthesizes voice overlays, structures matching overlays, and renders complete MP4 showcases.",
    impact: "Reduces media generation workflows from hours to under 3 minutes, producing high-resolution real estate promotional listings.",
    technologies: ["Next.js", "Python", "Generative AI", "FFmpeg", "Node.js"],
    modules: ["Script Generation", "Voice Generation", "Subtitle Engine", "Media Pipeline", "Video Rendering", "Timeline Editor"],
    architectureSvg: `
      <svg class="w-full max-w-lg mx-auto border border-slate-800 rounded-lg bg-slate-950 p-4" viewBox="0 0 500 160">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#3b82f6"/>
          </marker>
        </defs>
        <!-- Node 1: Input -->
        <rect x="15" y="55" width="80" height="50" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="55" y="80" text-anchor="middle" font-size="9" fill="#f8fafc" font-family="monospace">Agent Input</text>
        <line x1="95" y1="80" x2="135" y2="80" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrow)"/>

        <!-- Node 2: AI Pipeline -->
        <rect x="145" y="30" width="100" height="100" rx="6" fill="#151c2c" stroke="#242f47" stroke-width="1.5"/>
        <text x="195" y="55" text-anchor="middle" font-size="9.5" fill="#60a5fa" font-weight="bold" font-family="monospace">AI Engine</text>
        <text x="195" y="75" text-anchor="middle" font-size="8" fill="#cbd5e1" font-family="monospace">LLM Scripting</text>
        <text x="195" y="95" text-anchor="middle" font-size="8" fill="#cbd5e1" font-family="monospace">TTS Voice Synth</text>
        <line x1="245" y1="80" x2="285" y2="80" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrow)"/>

        <!-- Node 3: FFmpeg Compiler -->
        <rect x="295" y="55" width="85" height="50" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="337.5" y="80" text-anchor="middle" font-size="9" fill="#f8fafc" font-family="monospace">FFmpeg Render</text>
        <line x1="380" y1="80" x2="420" y2="80" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrow)"/>

        <!-- Node 4: Output Video -->
        <rect x="425" y="55" width="60" height="50" rx="6" fill="#151c2c" stroke="#60a5fa" stroke-width="1.5"/>
        <text x="455" y="84" text-anchor="middle" font-size="10" fill="#60a5fa" font-weight="bold" font-family="monospace">MP4 File</text>
      </svg>
    `
  },
  {
    id: "SYS-02",
    name: "AI-Powered Deception-Driven Scam Detection Platform",
    status: "Operational",
    problem: "Scammers exploit automated messaging systems to drain financial assets, with normal firewalls failing on semantic tricks.",
    solution: "A defense platform running NLP pattern diagnostics to flag scams, coupled with an active agent that hijacks the scammer's thread using LLM deception responses.",
    impact: "Exhausts scammer operation resources (bot-hours) and dynamically registers bad-actor threat patterns for intelligence sharing.",
    technologies: ["Python", "Machine Learning", "NLP", "REST APIs", "Vector Embedding"],
    modules: ["Scam Detection", "Conversation Engine", "Behavior Analysis", "Threat Intelligence", "Automation Layer"],
    architectureSvg: `
      <svg class="w-full max-w-lg mx-auto border border-slate-800 rounded-lg bg-slate-950 p-4" viewBox="0 0 500 160">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444"/>
          </marker>
        </defs>
        <!-- Node 1: Incoming SMS/Email -->
        <rect x="15" y="55" width="80" height="50" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="55" y="75" text-anchor="middle" font-size="9.5" fill="#cbd5e1" font-family="monospace">Inbox Stream</text>
        <text x="55" y="90" text-anchor="middle" font-size="8" fill="#94a3b8" font-family="monospace">(SMS/Email)</text>
        <line x1="95" y1="80" x2="130" y2="80" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)"/>

        <!-- Node 2: Classifier -->
        <rect x="140" y="45" width="100" height="70" rx="6" fill="#151c2c" stroke="#242f47" stroke-width="1.5"/>
        <text x="190" y="68" text-anchor="middle" font-size="9" fill="#f8fafc" font-family="monospace">NLP Classifier</text>
        <text x="190" y="83" text-anchor="middle" font-size="8" fill="#8295b4" font-family="monospace">TF-IDF & Embeds</text>
        <text x="190" y="98" text-anchor="middle" font-size="9" fill="#ef4444" font-weight="bold" font-family="monospace">Flagged 92%</text>
        <line x1="240" y1="80" x2="275" y2="80" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)"/>

        <!-- Node 3: Deception Loop -->
        <rect x="285" y="45" width="110" height="70" rx="6" fill="#151c2c" stroke="#ef4444" stroke-width="1.5"/>
        <text x="340" y="68" text-anchor="middle" font-size="9.5" fill="#ef4444" font-weight="bold" font-family="monospace">Active Honeypot</text>
        <text x="340" y="85" text-anchor="middle" font-size="8.5" fill="#f8fafc" font-family="monospace">Deceptive Dialogue</text>
        <text x="340" y="98" text-anchor="middle" font-size="7.5" fill="#94a3b8" font-family="monospace">Wastes Resources</text>
        <line x1="395" y1="80" x2="430" y2="80" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)"/>

        <!-- Node 4: Logging DB -->
        <rect x="435" y="55" width="55" height="50" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="462.5" y="80" text-anchor="middle" font-size="9.5" fill="#60a5fa" font-family="monospace">Intel DB</text>
      </svg>
    `
  },
  {
    id: "SYS-03",
    name: "AI-Enhanced Driver Training Simulator",
    status: "Operational",
    problem: "Training new drivers involves safety risks, and traditional simulators fail to log specific cognitive states.",
    solution: "A Unreal Engine virtual car telemetry simulator that integrates with computer vision pipelines (OpenCV) to track eye gaze and facial expressions.",
    impact: "Enables comprehensive assessment of driver drowsiness and focus, compiling logs into performance scorecards with 90%+ diagnostic accuracy.",
    technologies: ["Unreal Engine", "Python", "OpenCV", "Machine Learning", "Real-Time Telemetry"],
    modules: ["Lane Monitoring", "Signal Detection", "Violation Detection", "Analytics Engine", "Performance Reports"],
  },
  {
    id: "SYS-04",
    name: "Intelligent Travel Planning Agent",
    status: "Operational",
    problem: "Manual travel research requires cross-referencing maps, schedules, budgets, and reviews across multiple platform dashboards.",
    solution: "An autonomous agent that accepts locations and dates, retrieves live booking/places API records, and executes optimization rules to formulate custom plans.",
    impact: "Designs a customized multi-day visual itinerary with optimal routes, times, and activities in a single prompt.",
    technologies: ["React", "TypeScript", "Node.js", "LLM Integration", "Google Maps API"],
    modules: ["Trip Planner", "Recommendation Engine", "Mapping Integration", "Itinerary Generator"],
  }
];

export const skillMatrix: SkillGroup[] = [
  {
    category: "Programming",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "AI & ML",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "NLP", "Computer Vision (OpenCV)"],
  },
  {
    category: "Tools & OS",
    skills: ["Git", "GitHub", "FFmpeg", "VS Code", "Unreal Engine"],
  },
];

export const experienceData = {
  company: "Envision Infotech, Mysuru",
  role: "AI & Software Development Intern",
  period: "2025 – Present",
  responsibilities: [
    "Developed backend components and utility scripts in Python, integrating generative features for automation pipelines.",
    "Integrated custom RESTful API nodes using Node.js and Express to bridge data between frontends and analytics servers.",
    "Engineered LLM prompts, agent flows, and vector lookup protocols, improving overall business processes.",
    "Participated in active Agile sprints, standups, and review meetings using Git workflow strategies.",
  ],
  achievements: [
    "Improved developer workflow execution by an estimated 30% through generative automation scripts.",
    "Created core components for client web projects, ensuring layout responsive metrics and type-safety standards.",
  ],
  technologies: ["Python", "Node.js", "Express.js", "REST APIs", "LLM APIs", "Git", "GitHub"],
};

export const certifications: Certification[] = [
  { name: "Google Data Analytics Professional Certificate", issuer: "Coursera", year: "2024" },
  { name: "Salesforce Development", issuer: "ExcelR", year: "2024" },
  { name: "Android Application Development", issuer: "Udemy", year: "2023" },
  { name: "2D Game Development", issuer: "Udemy", year: "2023" },
  { name: "Data Analytics and Visualization", issuer: "Swayam / NPTEL", year: "2023" },
];

export const terminalCommands: Record<string, string> = {
  help: "Available commands:\n  - contact   : Display direct email address\n  - linkedin  : Open professional LinkedIn profile link\n  - github    : Open code repository profile link\n  - location  : View current coordinates\n  - clear     : Clear terminal workspace",
  contact: "Email: santhoshgrao13@gmail.com\nPhone: +91-7795276405\nOr fill in the message prompt and click 'Submit Terminal'.",
  email: "santhoshgrao13@gmail.com",
  linkedin: "https://linkedin.com/in/santhosh-g-rao",
  github: "https://github.com/SanthoshGRao",
  location: "Mysuru, Karnataka, India (Online)",
};

export const aiAssistantKnowledge: Record<string, string> = {
  "who is santhosh?": "Santhosh G Rao is a Software Developer and AI Builder currently pursuing his MCA degree. He serves as an AI & Software Development Intern at Envision Infotech and specializes in full-stack web applications, machine learning, and automation.",
  "what projects has he built?": "Santhosh has built several advanced systems including: \n1. An AI-Powered Real Estate Video Generator.\n2. A Deception-Driven Scam Detection Honeypot.\n3. An AI-Enhanced Driver Training simulator with head tracking.\n4. An Intelligent Travel Planner.",
  "what technologies does he know?": "Santhosh works with Python, Java, JavaScript, TypeScript, SQL, React, Next.js, Node.js, Express, MySQL, PostgreSQL, MongoDB, Generative AI (LLMs, prompt engineering, NLP), OpenCV, Git, and Unreal Engine.",
  "why should we hire him?": "He combines deep computer science MCA-level theoretical foundations (CGPA: 8.2) with practical, industrial experience in full-stack software and applied AI. He is eager to collaborate, write clean type-safe code, and build functional business applications.",
  "tell me about the ai video generator.": "The Real Estate Video Generator platform automates script writing, voiceovers, subtitle generation, and video compiling using Python, LLMs, and FFmpeg, reducing asset production workflows to under 3 minutes.",
  "tell me about the scam detection system.": "The scam detection system uses NLP models to identify fraud messages (92% accuracy) and launches an active deception bot that chats with the scammer, draining their time and gathering malicious patterns.",
  "how can i contact him?": "You can reach Santhosh at santhoshgrao13@gmail.com, call +91-7795276405, or connect on LinkedIn: linkedin.com/in/santhosh-g-rao."
};
