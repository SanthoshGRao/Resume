export interface Mission {
  id: string;
  question: string;
  name: string;
  challenge: string;
  approach: string;
  impact: string;
  technologies: string[];
  flowchart: string[];
  architectureSvg?: string;
}

export interface GrowthStage {
  title: string;
  subtitle: string;
  details: string;
}

export interface ToolCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const heroData = {
  headline: "Building AI systems that solve real-world problems.",
  subheading: "Hi, I'm Santhosh G Rao. Software Developer, AI Builder, and MCA candidate.",
  description: "I construct automated media pipelines, real-time computer vision applications, and semantic defense networks. Welcome to my engineering log.",
};

export const growthJourney: GrowthStage[] = [
  {
    title: "BCA Student",
    subtitle: "Amrita Vishwa Vidyapeetham // 2021 – 2024 (CGPA: 7.98)",
    details: "Acquired deep fundamentals in OOP Design, Database Systems, Web Development, and general Software Engineering paradigms.",
  },
  {
    title: "Web Development",
    subtitle: "Frontend Interfaces & Styling",
    details: "Transitioned to modern reactive applications using React, HTML5, CSS3, and mobile development in Android and game engines.",
  },
  {
    title: "Backend Engineering",
    subtitle: "Servers, Data Lakes & API Structures",
    details: "Built microservices using Node.js, Express, and managed databases like MySQL, PostgreSQL, and MongoDB with RESTful standards.",
  },
  {
    title: "Generative AI",
    subtitle: "LLMs, Vectors & Prompt Mechanics",
    details: "Researched AI integrations, building prompt engineering pipelines, capturing contextual document databases, and automating tasks.",
  },
  {
    title: "Applied AI Systems",
    subtitle: "MCA Specialization // JSS Science & Technology University // 2024 – 2026 (CGPA: 8.2)",
    details: "Focused on combining data structures, algorithms, and models to deploy end-to-end computer vision and defense networks.",
  },
  {
    title: "AI Product Development",
    subtitle: "Real-world Software & Internship Deliverables // Present",
    details: "Deploying production-ready video generators, scam classifiers, and training simulators in industrial environments.",
  },
];

export const missions: Mission[] = [
  {
    id: "MISSION 01",
    question: "Can property videos be generated automatically using AI?",
    name: "AI-Powered Real Estate Video Generation Platform",
    challenge: "Real estate agents lose hours writing scripts, coordinating voiceovers, editing listing assets, and compiling promotional videos.",
    approach: "I engineered an automated media compilation pipeline. It takes raw text inputs (listing specs), requests LLM dialog generation, feeds the output to a voice synthesizer, matches media overlaps, compiles dynamic subtitle markers, and uses FFmpeg commands to render high-definition videos.",
    impact: "Reduces marketing content production pipelines from hours to under 3 minutes, generating complete promotional video packages programmatically.",
    technologies: ["Next.js", "Python", "Generative AI", "FFmpeg", "Node.js"],
    flowchart: ["Property Data", "LLM Scripting", "Voice Generator", "Subtitle Engine", "Video Composer", "Final Video"],
    architectureSvg: `
      <svg class="w-full h-auto border border-slate-800 rounded-xl bg-slate-950 p-6 text-slate-400 font-mono text-[10px]" viewBox="0 0 540 180">
        <defs>
          <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#3b82f6"/>
          </marker>
        </defs>
        <!-- Node 1: Input -->
        <rect x="15" y="65" width="80" height="50" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <text x="55" y="90" text-anchor="middle" font-size="9" fill="#f8fafc">Listing Specs</text>
        <line x1="95" y1="90" x2="130" y2="90" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrow-blue)"/>

        <!-- Node 2: AI Processor -->
        <rect x="140" y="45" width="115" height="90" rx="6" fill="#151c2c" stroke="#242f47" stroke-width="2"/>
        <text x="197.5" y="70" text-anchor="middle" font-size="10" fill="#60a5fa" font-weight="bold">AI Engine</text>
        <text x="197.5" y="90" text-anchor="middle" font-size="8" fill="#94a3b8">GPT Scripting</text>
        <text x="197.5" y="108" text-anchor="middle" font-size="8" fill="#94a3b8">TTS Voice Synth</text>
        <line x1="255" y1="90" x2="290" y2="90" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrow-blue)"/>

        <!-- Node 3: Render Compiler -->
        <rect x="300" y="55" width="95" height="70" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <text x="347.5" y="85" text-anchor="middle" font-size="9" fill="#f8fafc">FFmpeg Engine</text>
        <text x="347.5" y="100" text-anchor="middle" font-size="8" fill="#94a3b8">Subtitle Burner</text>
        <line x1="395" y1="90" x2="430" y2="90" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrow-blue)"/>

        <!-- Node 4: Product -->
        <rect x="440" y="65" width="85" height="50" rx="6" fill="#151c2c" stroke="#3b82f6" stroke-width="2"/>
        <text x="482.5" y="94" text-anchor="middle" font-size="10" fill="#60a5fa" font-weight="bold">Output MP4</text>
      </svg>
    `
  },
  {
    id: "MISSION 02",
    question: "Can AI detect and engage scammers automatically?",
    name: "AI-Powered Deception-Driven Scam Detection Platform",
    challenge: "Automated scam campaigns target vulnerable individuals, and static filters fail against semantic, social-engineered deception vectors.",
    approach: "I built a defensive-offensive honey-pot pipeline. The system evaluates inbox message parameters and computes scam probability using NLP models. If flagged, it automatically starts a conversational proxy, generating deceptive LLM chatter that keeps the bad-actor engaged in circular discussions.",
    impact: "Achieved 92% NLP classification accuracy. Automatically exhausts scammer resources, protecting real endpoints and registering behavioral statistics.",
    technologies: ["Python", "Machine Learning", "NLP", "REST APIs", "Vector Databases"],
    flowchart: ["Message Capture", "Risk Analyzer", "Honeypot Trigger", "LLM Chat Engine", "Telemetry Logs"],
    architectureSvg: `
      <svg class="w-full h-auto border border-slate-800 rounded-xl bg-slate-950 p-6 text-slate-400 font-mono text-[10px]" viewBox="0 0 540 180">
        <defs>
          <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444"/>
          </marker>
        </defs>
        <!-- Node 1: Capture -->
        <rect x="15" y="65" width="80" height="50" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <text x="55" y="90" text-anchor="middle" font-size="9" fill="#f8fafc">Message Stream</text>
        <line x1="95" y1="90" x2="130" y2="90" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-red)"/>

        <!-- Node 2: Classifier -->
        <rect x="140" y="45" width="115" height="90" rx="6" fill="#151c2c" stroke="#242f47" stroke-width="2"/>
        <text x="197.5" y="70" text-anchor="middle" font-size="10" fill="#f8fafc" font-weight="bold">NLP Model</text>
        <text x="197.5" y="90" text-anchor="middle" font-size="8" fill="#94a3b8">TF-IDF Vectorizer</text>
        <text x="197.5" y="108" text-anchor="middle" font-size="9" fill="#ef4444" font-weight="bold">92% Accuracy</text>
        <line x1="255" y1="90" x2="290" y2="90" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-red)"/>

        <!-- Node 3: honeypot active -->
        <rect x="300" y="45" width="115" height="90" rx="6" fill="#151c2c" stroke="#ef4444" stroke-width="2"/>
        <text x="357.5" y="70" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="bold">Adversarial Bot</text>
        <text x="357.5" y="90" text-anchor="middle" font-size="8.5" fill="#f8fafc">Deception Loop</text>
        <text x="357.5" y="108" text-anchor="middle" font-size="7.5" fill="#94a3b8">Bot-Time Depletion</text>
        <line x1="415" y1="90" x2="445" y2="90" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow-red)"/>

        <!-- Node 4: Database -->
        <rect x="455" y="65" width="70" height="50" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <text x="490" y="90" text-anchor="middle" font-size="9" fill="#f8fafc">Threat DB</text>
      </svg>
    `
  },
  {
    id: "MISSION 03",
    question: "Can AI help learners become better drivers?",
    name: "AI Driver Training Simulator",
    challenge: "Traditional driver training involves high real-world safety risks, and basic video training provides no metrics on physical driver state or attentiveness.",
    approach: "I integrated a virtual Unreal Engine physics training simulator with an OpenCV computer vision pipeline. The CV layer analyzes the driver's face vectors via camera, logging head tilt, posture, and gaze direction.",
    impact: "Achieved 90%+ driver posture classification accuracy. Computes reaction feedback loops and prints scorecards for safety evaluations.",
    technologies: ["Unreal Engine", "Python", "OpenCV", "Machine Learning", "Data Analytics"],
    flowchart: ["Unreal Engine Sim", "OpenCV Video Capture", "Facial Landmark Analysis", "Attentiveness Scorer", "Live Scorecard"],
    architectureSvg: `
      <svg class="w-full h-auto border border-slate-800 rounded-xl bg-slate-950 p-6 text-slate-400 font-mono text-[10px]" viewBox="0 0 540 180">
        <defs>
          <marker id="arrow-blue2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#3b82f6"/>
          </marker>
        </defs>
        <!-- Node 1: Unreal Engine Sim -->
        <rect x="15" y="65" width="100" height="50" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <text x="65" y="90" text-anchor="middle" font-size="9" fill="#f8fafc">Unreal Engine Sim</text>
        <line x1="115" y1="90" x2="145" y2="90" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrow-blue2)"/>

        <!-- Node 2: OpenCV Gaze -->
        <rect x="155" y="45" width="115" height="90" rx="6" fill="#151c2c" stroke="#242f47" stroke-width="2"/>
        <text x="212.5" y="70" text-anchor="middle" font-size="10" fill="#60a5fa" font-weight="bold">OpenCV Gaze</text>
        <text x="212.5" y="90" text-anchor="middle" font-size="8" fill="#94a3b8">Facial Landmarks</text>
        <text x="212.5" y="108" text-anchor="middle" font-size="8" fill="#94a3b8">Attentiveness logs</text>
        <line x1="270" y1="90" x2="300" y2="90" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrow-blue2)"/>

        <!-- Node 3: Python Logic -->
        <rect x="310" y="55" width="105" height="70" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
        <text x="362.5" y="85" text-anchor="middle" font-size="9.5" fill="#f8fafc">Telemetry Engine</text>
        <text x="362.5" y="100" text-anchor="middle" font-size="8" fill="#94a3b8">Reaction Scorer</text>
        <line x1="415" y1="90" x2="445" y2="90" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrow-blue2)"/>

        <!-- Node 4: Metrics -->
        <rect x="455" y="65" width="70" height="50" rx="6" fill="#151c2c" stroke="#60a5fa" stroke-width="2"/>
        <text x="490" y="94" text-anchor="middle" font-size="9.5" fill="#60a5fa" font-weight="bold">Scorecard</text>
      </svg>
    `
  },
  {
    id: "MISSION 04",
    question: "Can AI plan complete trips?",
    name: "Intelligent Travel Planning Agent",
    challenge: "Travelers spend hours comparing budgets, destinations, mapping routes, and sorting schedules across multiple dashboards.",
    approach: "I structured an autonomous planner. The agent queries destination APIs, compares traveler filters, runs optimization constraints (maximizing tourist stops per day), and renders a responsive visual roadmap.",
    impact: "Automates multi-day itinerary layout creation. Optimizes travel times and generates responsive map-pins directly in a single request.",
    technologies: ["React", "TypeScript", "Node.js", "LLM APIs", "Google Maps API"],
    flowchart: ["Filter Inputs", "Destinations Lookup", "Optimization Engine", "Itinerary Generation", "Map Renders"],
  }
];

export const toolkits: ToolCategory[] = [
  {
    category: "Frontend UI/UX",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Java", "Python"],
  },
  {
    category: "Databases & Storage",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["Generative AI", "LLMs", "Prompt Engineering", "NLP", "OpenCV (Computer Vision)"],
  },
  {
    category: "Developer Tools",
    skills: ["Git", "GitHub", "FFmpeg", "VS Code", "Unreal Engine"],
  },
];

export const experience = {
  company: "Envision Infotech, Mysuru",
  role: "AI & Software Development Intern",
  period: "2025 – Present",
  responsibilities: [
    "Integrated custom RESTful API nodes using Node.js and Express to bridge data between frontends and analytics servers.",
    "Engineered LLM prompts, agent workflows, and vector lookup protocols, improving business automation.",
    "Worked in Agile team environments using Git workflow, participating in reviews and standups.",
  ],
  achievements: [
    "Improved developer execution metrics by an estimated 30% through generative scripts.",
    "Implemented clean, type-safe structures for web applications, maintaining code quality.",
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

export const profileData = {
  name: "Santhosh G Rao",
  title: "Software Developer",
  role: "Full Stack Engineer & Generative AI Builder",
  location: "Mysuru, Karnataka, India",
  email: "santhoshgrao13@gmail.com",
  github: "https://github.com/SanthoshGRao",
  linkedin: "https://linkedin.com/in/santhosh-g-rao",
};
