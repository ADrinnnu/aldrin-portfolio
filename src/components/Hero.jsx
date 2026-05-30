import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo, projects } from "../data";
import pic1 from "../assets/pic1.png";
import chatFoxImg from "../assets/Fox-Logo.png";
import resortImg from "../assets/nompass.png";
import furnituneImg from "../assets/furnitune-logo.png";
import tsuLogo from "../assets/tsu logo.png";

const techLogos = [
  { src: chatFoxImg, alt: "ChatFox" },
  { src: resortImg, alt: "Resort Management" },
  { src: furnituneImg, alt: "Furnitune" },
  { src: tsuLogo, alt: "Tarlac State University" },
];

const marqueeLogos = [...techLogos, ...techLogos, ...techLogos, ...techLogos];

const roles = {
  designer: {
    accent: "UI/UX",
    headline: "DESIGNER",
    tagline: (
      <>
        <span className="text-secondary">UI/UX Designer</span>
        <span className="text-slate-400"> &amp; visual design.</span>
      </>
    ),
    description:
      "Designing clean interfaces, thoughtful user experiences, and cohesive design systems.",
  },
  developer: {
    accent: "FULL STACK",
    headline: "DEVELOPER",
    tagline: (
      <>
        <span className="text-secondary">Full Stack Developer</span>
        <span className="text-slate-400"> &amp; problem solver.</span>
      </>
    ),
    description:
      "Building end-to-end web apps — from polished frontends to reliable APIs and deployment.",
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const HeroToggle = ({ isDesigner, onToggle }) => {
  useEffect(() => {
    const timer = setInterval(onToggle, 2600);
    return () => clearInterval(timer);
  }, [onToggle]);

  return (
    <button
      type="button"
      aria-label={isDesigner ? "Switch to developer" : "Switch to designer"}
      onClick={onToggle}
      className="hidden sm:flex items-center w-[4.5rem] h-9 rounded-full bg-gradient-to-b from-primary to-primary/70 p-1 shadow-lg shadow-primary/30 shrink-0"
    >
      <motion.div
        layout
        animate={{ x: isDesigner ? 0 : 36 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-7 h-7 rounded-full bg-white shadow-md"
      />
    </button>
  );
};

const Hero = () => {
  const [isDesigner, setIsDesigner] = useState(true);
  const role = roles[isDesigner ? "designer" : "developer"];

  const handleToggle = useCallback(() => setIsDesigner((prev) => !prev), []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 min-h-screen flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12">
        {/* Left — typography block */}
        <div className="flex-1 flex flex-col justify-center lg:py-12">
          <motion.div variants={stagger} initial="hidden" animate="show">
            {/* Fixed slot — keeps hero layout stable when GRAPHICS is hidden */}
            <motion.div
              variants={fadeUp}
              className="relative w-full h-8 sm:h-9 md:h-10 mb-3 md:mb-4"
              aria-hidden={!isDesigner}
            >
              <motion.p
                animate={{ opacity: isDesigner ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="hero-graphics absolute left-0 bottom-0 text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.35em] leading-none pointer-events-none"
              >
                GRAPHICS
              </motion.p>
            </motion.div>

            {/* Accent — full width row, nothing beside it */}
            <motion.div variants={fadeUp} className="relative w-full h-14 sm:h-16 md:h-20 lg:h-24 mb-3">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={role.accent}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 bottom-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-none"
                >
                  {role.accent}
                </motion.h1>
              </AnimatePresence>
            </motion.div>

            {/* Toggle */}
            <motion.div variants={fadeUp} className="mb-4 md:mb-6">
              <HeroToggle isDesigner={isDesigner} onToggle={handleToggle} />
            </motion.div>

            <div className="relative w-full h-16 sm:h-20 md:h-24 lg:h-28 mb-5 md:mb-7">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={role.headline}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 bottom-0 text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black text-white leading-none tracking-tight"
                >
                  {role.headline}
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="relative w-full max-w-xl h-14 sm:h-16 md:h-[4.5rem] mb-8 md:mb-10">
              <AnimatePresence mode="wait">
                <motion.p
                  key={isDesigner ? "tag-designer" : "tag-developer"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="absolute left-0 top-0 text-lg sm:text-xl md:text-2xl font-medium"
                >
                  {role.tagline}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.div variants={fadeUp} className="flex items-start gap-3 max-w-lg mb-6">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="mt-1.5 w-2.5 h-2.5 rounded-sm bg-primary shrink-0"
              />
              <div className="relative min-h-[4rem] sm:min-h-[3.5rem] flex-1">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={role.description}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-0 top-0 text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg"
                  >
                    {role.description}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Infinite logo marquee */}
            <motion.div variants={fadeUp} className="logo-marquee relative w-full max-w-xl">
              <div className="logo-marquee-track flex items-center gap-10 sm:gap-14 w-max">
                {marqueeLogos.map((logo, i) => (
                  <img
                    key={`${logo.alt}-${i}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-6 sm:h-7 w-auto object-contain brightness-200 opacity-50 hover:opacity-100 transition-opacity duration-300"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — projects badge */}
        <div className="relative flex-1 min-h-0 lg:min-h-[200px]">
          {/* Spinning projects badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 right-0 lg:top-8 lg:right-4 xl:right-12"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32">
              <div className="absolute inset-0 bg-primary/25 blur-2xl rounded-full scale-125 animate-pulse-glow" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/60"
              />
              <div className="absolute inset-2 rounded-full bg-darker/70 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center px-2">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-primary leading-tight">
                    {projects.length}+ Projects
                  </p>
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="my-1 text-secondary text-lg"
                  >
                    ★
                  </motion.div>
                  <p className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                    Since 2022
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
