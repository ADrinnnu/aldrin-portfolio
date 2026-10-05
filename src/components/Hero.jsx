import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { personalInfo, projects, skillGroups, coreStrengths, aiApproach } from "../data";
import { RESUME_URL, socials } from "./Navbar";
import pic1 from "../assets/pic1.png";

const toolCount = skillGroups.reduce((sum, g) => sum + g.items.length, 0);

const stats = [
  { value: `${projects.length}`, label: "Featured projects" },
  { value: `${toolCount}`, label: "Tools in stack" },
  { value: "2026", label: "BSIT graduate" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => (
  <section id="home" className="pt-10 lg:pt-24">
    <motion.div variants={container} initial="hidden" animate="show">
      <div className="grid items-center gap-8 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-10">
        {/* Portrait */}
        <motion.div variants={item} className="portrait-wrap relative mx-auto w-48 sm:mx-0 sm:w-full">
          <div aria-hidden className="dots dots-sm fade-br absolute -bottom-3 -right-3 h-full w-full opacity-50" />
          {/* pic1.png is a 1920×1080 canvas; the photo sits at roughly x:349–967, y:165–783, so crop to that square */}
          <div className="relative aspect-square overflow-hidden rounded-sm border border-line bg-soft">
            <img
              src={pic1}
              alt={`Portrait of ${personalInfo.name}`}
              className="absolute max-w-none"
              style={{ width: "310.7%", left: "-56.5%", top: "-26.7%" }}
            />
          </div>
        </motion.div>

        {/* Intro */}
        <div>
          <motion.p variants={item} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {personalInfo.location}
          </motion.p>
          <motion.h1 variants={item} className="mt-3 text-4xl font-medium tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.05]">
            {personalInfo.name}
          </motion.h1>
          <motion.p variants={item} className="mt-2 font-mono text-[13px] text-muted">
            {personalInfo.title}
          </motion.p>
          <motion.p variants={item} className="mt-5 text-[15px] leading-relaxed text-muted">
            {personalInfo.bio}
          </motion.p>
          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[12px] text-muted">
            {socials.map(({ name, href }) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="link-line inline-flex items-center gap-0.5 hover:text-ink">
                {name.toLowerCase()} <FiArrowUpRight className="h-3 w-3" />
              </a>
            ))}
            <a href={RESUME_URL} download="Aldrin Villanueva Resume.pdf" className="link-line inline-flex items-center gap-1 hover:text-ink">
              resume <FiDownload className="h-3 w-3" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.dl variants={item} className="relative mt-14 grid grid-cols-3 divide-x divide-line border-y border-line">
        {stats.map(({ value, label }) => (
          <div key={label} className="group px-4 py-5 first:pl-0 sm:px-6">
            <dt className="sr-only">{label}</dt>
            <dd className="font-mono text-2xl tracking-tight text-ink transition-transform duration-300 group-hover:-translate-y-0.5 sm:text-[1.7rem]">
              {value}
            </dd>
            <p className="mt-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">{label}</p>
          </div>
        ))}
      </motion.dl>
      <div aria-hidden className="dots dots-sm mt-3 h-6 opacity-30 [mask-image:linear-gradient(to_right,transparent,#000_30%,#000_70%,transparent)]" />

      {/* Core strengths + AI-assisted development */}
      <motion.div variants={item} className="mt-10 space-y-7">
        <div className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-6">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint sm:pt-1">Core strengths</h2>
          <ul className="grid gap-x-6 gap-y-2 text-[14px] leading-relaxed text-muted sm:grid-cols-2">
            {coreStrengths.map((s) => (
              <li key={s} className="flex gap-3">
                <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-faint" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-3 sm:grid-cols-[8rem_1fr] sm:gap-6">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint sm:pt-1">AI-assisted dev</h2>
          <div>
            <p className="text-[14px] leading-relaxed text-muted">{aiApproach}</p>
            <p className="mt-2 font-mono text-[11.5px] leading-relaxed text-faint">
              Claude · ChatGPT · GitHub Copilot · OpenAI API · RAG · prompt engineering basics
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
