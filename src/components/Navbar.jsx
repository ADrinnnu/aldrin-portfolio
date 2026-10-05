import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiUser, FiBookOpen, FiLayers, FiFolder, FiMail, FiDownload, FiBriefcase, FiAward, FiUsers,
  FiMenu, FiX, FiSun, FiMoon, FiMonitor, FiGithub, FiLinkedin, FiArrowUpRight,
} from "react-icons/fi";
import { personalInfo } from "../data";

const navLinks = [
  { id: "home", name: "About", icon: FiUser },
  { id: "experience", name: "Experience", icon: FiBriefcase },
  { id: "education", name: "Education", icon: FiBookOpen },
  { id: "certifications", name: "Certifications", icon: FiAward },
  { id: "skills", name: "Stack", icon: FiLayers },
  { id: "projects", name: "Projects", icon: FiFolder },
  { id: "activities", name: "Activities", icon: FiUsers },
  { id: "contact", name: "Contact", icon: FiMail },
];
const SECTION_IDS = navLinks.map((l) => l.id);

export const RESUME_URL = "/downloads/Aldrin%20Villanueva%20Resume.pdf";
export const socials = [
  { name: "GitHub", href: "https://github.com/ADrinnnu", icon: FiGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/aldrin-villanueva-306781317", icon: FiLinkedin },
];

/* ---------- theme ---------- */
const THEME_KEY = "theme";
const readTheme = () => {
  try {
    const v = localStorage.getItem(THEME_KEY);
    return v === "light" || v === "dark" ? v : "system";
  } catch {
    return "system";
  }
};
const applyTheme = (pref) => {
  const dark =
    pref === "dark" ||
    (pref === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
};

const useTheme = () => {
  const [theme, setTheme] = useState(readTheme);
  useEffect(() => {
    applyTheme(theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* ignore */ }
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);
  return [theme, setTheme];
};

/* ---------- active section tracking ---------- */
const useActiveSection = () => {
  const [active, setActive] = useState(SECTION_IDS[0]);
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      
      let currentActive = SECTION_IDS[0];
      const threshold = window.innerHeight * 0.35; 

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            currentActive = id;
            break;
          }
        }
      }

      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        currentActive = SECTION_IDS[SECTION_IDS.length - 1];
      }

      setActive(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setClickedSection = (id) => {
    setActive(id);
    isClickScrolling.current = true;
    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  return { active, setClickedSection };
};

const themeOptions = [
  { value: "system", icon: FiMonitor, label: "System theme" },
  { value: "light", icon: FiSun, label: "Light theme" },
  { value: "dark", icon: FiMoon, label: "Dark theme" },
];

const ThemeSwitch = ({ theme, setTheme, idPrefix }) => (
  <div role="group" aria-label="Theme" className="inline-flex items-center gap-0.5 rounded-full border border-line p-0.5">
    {themeOptions.map(({ value, icon: Icon, label }) => (
      <button
        key={value}
        id={`${idPrefix}-theme-${value}`}
        type="button"
        aria-label={label}
        title={label}
        aria-pressed={theme === value}
        onClick={() => setTheme(value)}
        className={`grid h-6 w-6 place-items-center rounded-full transition-colors ${
          theme === value ? "bg-soft text-ink" : "text-faint hover:text-ink"
        }`}
      >
        <Icon className="h-3 w-3" />
      </button>
    ))}
  </div>
);

const SecondaryLinks = ({ className = "", onNavigate }) => (
  <div className={`flex flex-col ${className}`}>
    <a
      href={RESUME_URL}
      download="Aldrin Villanueva Resume.pdf"
      onClick={onNavigate}
      className="group inline-flex w-fit items-center gap-2.5 text-muted hover:text-ink"
    >
      <FiDownload className="h-[1.05em] w-[1.05em]" /> Resume
    </a>
    {socials.map(({ name, href, icon: Icon }) => (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex w-fit items-center gap-2.5 text-muted hover:text-ink"
      >
        <Icon className="h-[1.05em] w-[1.05em]" /> {name}
        <FiArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0" />
      </a>
    ))}
  </div>
);

const Navbar = () => {
  const [theme, setTheme] = useTheme();
  const { active, setClickedSection } = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* ---------- Desktop sidebar ---------- */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col border-r border-line bg-paper/80 px-7 py-8 backdrop-blur-md lg:flex">
        <a href="#home" className="w-fit font-mono text-[15px] leading-none tracking-tight text-ink hover:opacity-60">
          Aldrin Villanueva
        </a>
        <p className="mt-2 font-mono text-[11px] leading-snug text-faint">{personalInfo.title}</p>

        <nav aria-label="Primary" className="mt-10 flex flex-col gap-3 font-mono text-[13px]">
          {navLinks.map(({ id, name, icon: Icon }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                id={`nav-${id}`}
                href={`#${id}`}
                onClick={() => setClickedSection(id)}
                aria-current={isActive ? "true" : undefined}
                className={`relative inline-flex w-fit items-center gap-2.5 ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <span
                  className={`absolute -left-4 h-1 w-1 rounded-full bg-ink transition-all duration-300 ${
                    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                />
                <Icon className="h-[1.05em] w-[1.05em]" /> {name}
              </a>
            );
          })}
        </nav>

        <div className="my-6 h-px bg-line" />
        <SecondaryLinks className="gap-3 font-mono text-[13px]" />

        <div className="mt-auto">
          <ThemeSwitch theme={theme} setTheme={setTheme} idPrefix="sidebar" />
          <p className="mt-5 text-[12px] leading-relaxed text-faint">
            Have a role or project in mind? Drop me a line:
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-1.5 inline-flex w-fit items-center gap-2 font-mono text-[11px] text-ink hover:text-muted"
          >
            <FiMail className="h-3.5 w-3.5 shrink-0" /> {personalInfo.email}
          </a>
        </div>
      </aside>

      {/* ---------- Mobile top bar ---------- */}
      <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-[44rem] items-center justify-between px-6 py-3">
          <a href="#home" className="font-mono text-[14px] tracking-tight">Aldrin Villanueva</a>
          <button
            id="mobile-menu-open"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="-mr-1 p-1 text-muted hover:text-ink"
          >
            <FiMenu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* ---------- Mobile full-screen menu ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-paper lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-3">
              <a href="#home" onClick={() => setOpen(false)} className="font-mono text-[14px] tracking-tight">
                Aldrin Villanueva
              </a>
              <button
                id="mobile-menu-close"
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="-mr-1 p-1 text-muted hover:text-ink"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-1 flex-col overflow-y-auto px-7 py-8 font-mono text-[16px]"
            >
              <nav aria-label="Mobile" className="flex flex-col gap-4">
                {navLinks.map(({ id, name, icon: Icon }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => {
                      setClickedSection(id);
                      setOpen(false);
                    }}
                    className={`inline-flex w-fit items-center gap-3 ${active === id ? "text-ink" : "text-muted"}`}
                  >
                    <Icon className="h-[1.05em] w-[1.05em]" /> {name}
                  </a>
                ))}
              </nav>
              <div className="my-6 h-px bg-line" />
              <SecondaryLinks className="gap-4" onNavigate={() => setOpen(false)} />
              <div className="my-6 h-px bg-line" />
              <ThemeSwitch theme={theme} setTheme={setTheme} idPrefix="mobile" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-5 inline-flex w-fit items-center gap-2 text-[13px] text-ink"
              >
                <FiMail className="h-4 w-4 shrink-0" /> {personalInfo.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
