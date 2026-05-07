import tsuLogo from "../assets/tsu logo.png";
import stVincentLogo from "../assets/St. Vincent.png";
import chatFoxImg from "../assets/Fox-Logo.png"; 
import resortImg from "../assets/nompass.png"; 
import furnituneImg from "../assets/furnitune-logo.png";

// Updated imports for better reliability
import { FaReact, FaNodeJs, FaFileUpload, FaLock, FaPython } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb"; // Reliable C# Icon
import { 
  SiTypescript, SiVite, SiTailwindcss, SiReactrouter, 
  SiReactquery, SiAxios, SiExpress, SiMysql, SiFirebase 
} from "react-icons/si";

export const personalInfo = {
  name: "Aldrin Villanueva",
  title: "Aspiring Full stack Developer",
  bio: "I’m driven by a deep passion for technology and continuous learning. I diagnose and resolve hardware, network, and software issues, and I build end-to-end web solutions—from clean frontends to reliable APIs and deployment.",
  location: "Paniqui, Tarlac",
  phone: "(+63) 948 7987 542",
  email: "aldrinvillanueva@gmail.com"
};

export const education = [
  { id: 1, school: "Tarlac State University", degree: "Bachelor of Science in Information Technology", year: "S.Y. 2022–2026", logo: tsuLogo },
  { id: 2, school: "St. Vincent School Foundation Inc.", degree: "Senior High School", year: "S.Y. 2020–2022", logo: stVincentLogo },
  { id: 3, school: "St. Vincent School Foundation Inc.", degree: "Junior High School", year: "S.Y. 2016–2020", logo: stVincentLogo },
  { id: 4, school: "St. Vincent School Foundation Inc.", degree: "Elementary", year: "S.Y. 2010–2016", logo: stVincentLogo }
];

// SECTION: FRONTEND (User Interface & Experience)
export const frontendSkills = [
  { name: "React", icon: FaReact, desc: "Core library for building the user interface." },
  { name: "TypeScript", icon: SiTypescript, desc: "Ensures type safety across the frontend." },
  // UPDATED: Now featuring TanStack Query
  { name: "TanStack Query", icon: SiReactquery, desc: "Managing server state, caching, and synchronization." },
  { name: "Vite", icon: SiVite, desc: "Modern build tool for fast development." },
  { name: "Tailwind CSS", icon: SiTailwindcss, desc: "Utility-first CSS for responsive design." },
  { name: "React Router", icon: SiReactrouter, desc: "Dynamic routing and navigation." },
  { name: "Axios", icon: SiAxios, desc: "Handling API requests and interceptions." }
];

// SECTION: BACKEND (Server Logic & Auth)
export const backendSkills = [
  { name: "Node.js", icon: FaNodeJs, desc: "JavaScript runtime for the server-side." },
  { name: "Express.js", icon: SiExpress, desc: "Web framework for building RESTful APIs." },
  { name: "C#", icon: TbBrandCSharp, desc: "Used for robust backend logic and .NET apps." },
  { name: "Multer", icon: FaFileUpload, desc: "Middleware for handling file uploads." },
  { name: "Bcrypt & JWT", icon: FaLock, desc: "Secure password hashing and token auth." }
];

// SECTION: DATABASE & AUTOMATION (Data Integrity & Scripting)
export const databaseSkills = [
  { name: "MySQL", icon: SiMysql, desc: "Relational database management and SQL queries." },
  { name: "Firebase", icon: SiFirebase, desc: "BaaS for real-time data and cloud storage." },
  { name: "Python", icon: FaPython, desc: "Automation scripts for database optimization." }
];

export const projects = [
  { 
    id: 1, 
    title: "ChatFox", 
    description: "AI Powered Chatbot using OpenAI API for Tarlac State University.", 
    image: chatFoxImg,
    problem: "Students frequently struggled to find quick, accurate information regarding university policies, schedules, and campus facilities outside of office hours.",
    solution: "Integrated the OpenAI API to develop an intelligent, context-aware chatbot capable of providing instant, 24/7 conversational assistance tailored specifically to Tarlac State University data.",
    features: [
      "Natural Language Processing for accurate intent recognition.",
      "Custom system prompts tailored to university guidelines.",
      "Fast, responsive user interface for seamless chatting."
    ]
  },
  { 
    id: 2, 
    title: "Resort Management System", 
    description: "VB.NET + MySQL app to manage resort bookings and customers.", 
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
    title: "Furnitune", 
    description: "An e-commerce website for furniture with an AI recommender.", 
    image: furnituneImg,
    problem: "Customers found it difficult to discover furniture pieces that matched their specific room aesthetics and personal tastes among hundreds of inventory items.",
    solution: "Developed a full-stack e-commerce platform featuring an AI-driven recommendation engine that suggests products based on user preferences and browsing history.",
    features: [
      "AI Recommender algorithm for personalized shopping.",
      "Customization options for specific furniture pieces.",
      "Dynamic shopping cart and secure checkout flow."
    ]
  }
];