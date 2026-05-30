import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 px-4 sm:px-6 lg:px-10 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <motion.a
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
          }}
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2.5 text-white text-xl font-bold font-['Poppins'] z-10"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-darker font-black text-sm">
            A
          </div>
          Aldrin
        </motion.a>

        {/* Desktop pill nav — centered */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-0.5 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all font-medium text-sm whitespace-nowrap"
              >
                {link.name}
                <sup className="text-[10px] text-primary ml-1 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </sup>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Resume + Connect */}
        <div className="hidden md:flex items-center gap-3 z-10">
        <motion.a
  href="/downloads/Aldrin%20Villanueva%20Resume.pdf"
  download="Aldrin Villanueva Resume.pdf"
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.1 }}
  whileHover={{ scale: 1.04, y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="px-5 py-2.5 border border-white/20 text-white rounded-full hover:bg-white/10 hover:border-white/30 font-bold text-sm transition-colors"
>
  Aldrin R. Villanueva Resume
</motion.a>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-darker rounded-full hover:shadow-lg hover:shadow-white/10 font-bold text-sm group"
          >
            Connect
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={false}
              whileHover={{ x: 2, y: -2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7M17 7H8M17 7V16" />
            </motion.svg>
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white z-10"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-3 mx-4 bg-darker/95 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-5 space-y-3 shadow-2xl">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between text-slate-300 hover:text-white transition-all font-medium py-1"
            >
              {link.name}
              <span className="text-xs text-primary font-bold">{String(index + 1).padStart(2, "0")}</span>
            </a>
          ))}
          <a
href="/downloads/Aldrin%20Villanueva%20Resume.pdf"            download
            onClick={() => setIsOpen(false)}
            className="block text-center px-5 py-2.5 border border-white/20 text-white rounded-full font-bold text-sm"
          >
            Resume
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center px-5 py-2.5 bg-white text-darker rounded-full font-bold text-sm"
          >
            Connect
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
