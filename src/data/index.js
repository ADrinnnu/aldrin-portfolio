import tsuLogo from "../assets/tsu logo.png";
import stVincentLogo from "../assets/St. Vincent.png";
import chatFoxImg from "../assets/Fox-Logo.png"; 
import resortImg from "../assets/nompass.png";
import furnituneImg from "../assets/furnitune-logo.png";
import wahLogo from "../assets/wah-logo.png";
import vulphoxLogo from "../assets/vulphox-logo.jpg";

// Updated imports for better reliability
import { FaAws, FaNetworkWired, FaUserPlus, FaFileAlt, FaTools, FaMagic, FaBug, FaBook, FaTachometerAlt } from "react-icons/fa";
import { TbBrandCSharp, TbApi } from "react-icons/tb"; // Reliable C# Icon
import { FiLayers, FiShield, FiLock, FiServer, FiCode } from "react-icons/fi";
import {
  SiReact, SiVite, SiTailwindcss, SiReactquery, SiHtml5, SiCss, SiJavascript,
  SiNodedotjs, SiExpress, SiDotnet, SiPython,
  SiMysql, SiPostgresql, SiMongodb, SiFirebase,
  SiJsonwebtokens, SiSocketdotio, SiPuppeteer, SiGit, SiGithub, SiVercel,
  SiClaude, SiOpenai, SiGithubcopilot, SiCisco,
} from "react-icons/si";

export const personalInfo = {
  name: "Aldrin R. Villanueva",
  title: "Full Stack Developer & UI/UX Designer",
  bio: "Recent Bachelor of Science in Information Technology graduate specializing in Web and Mobile Applications, with hands-on experience in full-stack web development, frontend and backend development, APIs, databases, AI-powered applications, troubleshooting, and AI-assisted development.",
  location: "Paniqui, Tarlac",
  phone: "(+63) 941 458 566",
  email: "aldrinvillanueva139@gmail.com",
  portfolio: "https://aldrinportfolio.vercel.app"
};

export const coreStrengths = [
  "Full-stack web development",
  "Frontend development",
  "Backend development",
  "REST API development and integration",
  "Database-driven applications",
  "Authentication and authorization",
  "Real-time applications",
  "AI-powered applications",
  "AI-assisted software development",
  "Debugging and troubleshooting",
  "Responsive web development",
];

export const aiApproach =
  "I use AI tools to accelerate development, debugging, research, documentation, and iteration while reviewing and validating generated output.";

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    org: "Wireless Access for Health",
    dates: "Feb 2026 – May 2026",
    summary: "Contributed to the development of a full-stack Human Resources Information System (HRIS) and Payroll platform from the ground up.",
    highlights: [
      "Supported secure document management by integrating Node.js with AWS S3.",
      "Strengthened system security by implementing Role-Based Access Control (RBAC) and JWT-based session management.",
      "Built dynamic and responsive frontend interfaces using React 19.",
      "Enhanced user experience by implementing real-time leave and offboarding approval notifications using Socket.io.",
      "Streamlined administrative workflows by automating payroll reporting and attendance summaries with Puppeteer for server-side PDF generation.",
      "Ensured system reliability by assisting with troubleshooting, testing, and routine maintenance.",
    ],
    tech: ["React 19", "TypeScript", "JavaScript", "Node.js", "Express.js", "MySQL", "REST APIs", "AWS S3", "RBAC", "JWT", "Socket.io", "Puppeteer", "Git/GitHub"],
    logo: wahLogo,
  },
];

export const activities = [
  {
    id: 1,
    role: "Committee Member",
    org: "TSU Vulphox Esports",
    location: "Tarlac City, Tarlac",
    dates: "Jan 2023 – Jan 2025",
    highlights: [
      "Managed and organized esports tournaments during annual University Intramurals.",
      "Coordinated schedules for multiple teams.",
      "Provided on-site technical support for gaming setups and troubleshot hardware connectivity issues.",
      "Helped maintain stable network performance during live matches.",
      "Collaborated with university staff to resolve technical issues and support event logistics.",
    ],
    logo: vulphoxLogo,
  },
];

export const education = [
  {
    id: 1,
    school: "Tarlac State University",
    degree: "Bachelor of Science in Information Technology",
    specialization: "Specialization in Web and Mobile Applications · Graduated July 2026",
    coursework: ["Web Systems and Technologies", "Operating Systems", "Data Structures & Algorithms", "Computer Networking", "Database Management"],
    year: "S.Y. 2022–2026",
    logo: tsuLogo
  },
  { id: 2, school: "St. Vincent School Foundation Inc.", degree: "Senior High School", year: "S.Y. 2020–2022", logo: stVincentLogo },
  { id: 3, school: "St. Vincent School Foundation Inc.", degree: "Junior High School", year: "S.Y. 2016–2020", logo: stVincentLogo },
  { id: 4, school: "St. Vincent School Foundation Inc.", degree: "Elementary", year: "S.Y. 2010–2016", logo: stVincentLogo }
];

export const certifications = [
  {
    id: 1,
    name: "Cisco Certified Network Associate (CCNAv7)",
    provider: "Cisco Networking Academy",
    icon: SiCisco,
    date: "2024",
    details: [
      "Introduction to Networks — January 2024",
      "Switching, Routing, and Wireless Essentials — June 2024",
    ],
  },
  {
    id: 2,
    name: "Career Essentials in System Administration",
    provider: "Microsoft & LinkedIn",
    icon: FiServer,
    date: "Jul 2024",
    details: [
      "Demonstrated proficiency in network security, user management, and server administration fundamentals.",
    ],
  },
];

// Skill groups rendered by the Stack section. `desc` is optional.
export const skillGroups = [
  {
    label: "Frontend",
    items: [
      { name: "React.js (v18/19)", icon: SiReact, color: "#61DAFB", desc: "Core library for building the user interface." },
      { name: "Vite", icon: SiVite, color: "#646CFF", desc: "Modern build tool for fast development." },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", desc: "Utility-first CSS for responsive design." },
      { name: "TanStack Query", icon: SiReactquery, color: "#FF4154", desc: "Managing server state, caching, and synchronization." },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933", desc: "JavaScript runtime for the server-side." },
      { name: "Express.js", icon: SiExpress, desc: "Web framework for building RESTful APIs." },
      { name: ".NET / C#", icon: TbBrandCSharp, color: "#512BD4" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "REST APIs", icon: TbApi, color: "#0096D6" },
    ],
  },
  {
    label: "Database & Cloud",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firestore", icon: SiFirebase, color: "#FFCA28" },
      { name: "AWS S3", icon: FaAws, color: "#232F3E" },
    ],
  },
  {
    label: "Architecture & Security",
    items: [
      { name: "Clean Architecture", icon: FiLayers },
      { name: "Role-Based Access Control (RBAC)", icon: FiShield },
      { name: "JSON Web Tokens (JWT)", icon: SiJsonwebtokens },
      { name: "bcrypt", icon: FiLock },
    ],
  },
  {
    label: "Real-Time & Tools",
    items: [
      { name: "Socket.io", icon: SiSocketdotio },
      { name: "SignalR", icon: SiDotnet, color: "#512BD4" },
      { name: "Puppeteer", icon: SiPuppeteer, color: "#40B5A4" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    label: "AI & Productivity",
    items: [
      { name: "Claude", icon: SiClaude, color: "#D97757" },
      { name: "ChatGPT", icon: SiOpenai, color: "#10A37F" },
      { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "Prompt engineering basics", icon: FaMagic },
      { name: "AI-assisted debugging", icon: FaBug },
      { name: "AI-assisted documentation", icon: FaBook },
      { name: "AI-assisted code optimization", icon: FaTachometerAlt },
    ],
  },
  {
    label: "IT Operations",
    items: [
      { name: "Hardware troubleshooting", icon: FaTools },
      { name: "Cisco network configuration", icon: SiCisco, color: "#1BA0D7" },
      { name: "User onboarding", icon: FaUserPlus },
      { name: "System documentation", icon: FaFileAlt },
    ],
  },
];

export const projects = [
  { 
    id: 1, 
    title: "ChatFox: University AI Assistant", 
    role: "AI / Full Stack Developer",
    tech: ["React Native", "Python", "MongoDB", "OpenAI API"],
    description: "Cross-platform AI chatbot for Tarlac State University that answers student inquiries using RAG.", 
    image: chatFoxImg,
    problem: "Students needed a quick way to get answers about Tarlac State University guidelines and schedules.",
    solution: "Developed a cross-platform AI-powered chatbot that integrates a custom database with a Large Language Model (LLM), using a Retrieval-Augmented Generation (RAG) architecture to provide institution-specific answers.",
    features: [
      "LLM integration through the OpenAI API.",
      "RAG architecture grounding answers in a custom university database.",
      "Lets students retrieve information about university guidelines and schedules.",
      "Cross-platform app built with React Native."
    ]
  },
  { 
    id: 2, 
    title: "Resort Management System", 
    role: "Full Stack Developer",
    tech: ["VB.NET", "MySQL"],
    description: "Desktop application to manage resort bookings and customers.", 
    image: resortImg,
    problem: "The resort was using a manual, paper-based tracking system for bookings, leading to overlapping reservations and lost customer data.",
    solution: "Engineered a robust desktop application using VB.NET and a structured MySQL database to automate bookings, secure customer data, and streamline administrative workflows.",
    features: [
      "Real-time booking validation to prevent scheduling conflicts.",
      "Relational MySQL database design for efficient data retrieval.",
      "Secure login system with role-based access control."
    ]
  },
  { 
    id: 3, 
    title: "Furniture E-Commerce Platform", 
    role: "Full Stack Developer",
    tech: ["React.js", "Python", "Firestore"],
    description: "Full-stack furniture store with catalog, filtering, purchasing workflows, and personalized AI recommendations.", 
    image: furnituneImg,
    status: "Client project — completed and handed over",
    problem: "The client needed an online store to present its furniture catalog, handle purchases, and help shoppers find suitable products.",
    solution: "Developed a full-stack e-commerce platform with a product catalog, CRUD management, purchasing workflows, and a personalized AI recommendation feature based on user preferences.",
    features: [
      "Product catalog with filtering and product detail views.",
      "CRUD functionality for managing products.",
      "Purchasing workflows.",
      "Personalized AI recommendations based on user preferences."
    ],
    link: "https://furnitune.vercel.app/",
    linkLabel: "frontend demo",
    linkNote: "The backend was handed over to the client and is no longer publicly active, so the live link is a frontend demonstration."
  }
];