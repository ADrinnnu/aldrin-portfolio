import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowUpRight } from "react-icons/fi";

const Block = ({ index, title, children }) => (
  <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
    <h4 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint sm:pt-1">
      <span className="text-ink">{index}</span> {title}
    </h4>
    {children}
  </div>
);

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Close on Escape + lock background scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    // AnimatePresence is required for exit animations in Framer Motion
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Closes modal if you click the background
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-paper/75 p-4 backdrop-blur-md sm:p-6"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()} // Prevents clicks inside the modal from closing it
            className="relative my-8 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-line bg-paper shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]"
          >
            {/* Close Button */}
            <button
              id="project-modal-close"
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full border border-line bg-paper text-muted transition-colors hover:text-ink"
            >
              <FiX className="h-4 w-4" />
            </button>

            {/* Header image on dot field */}
            <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-line bg-soft p-8 sm:h-56">
              <div aria-hidden className="dots dots-sm absolute inset-0 opacity-25 [mask-image:radial-gradient(circle_at_center,#000_20%,transparent_70%)]" />
              <img src={project.image} alt={project.title} className="relative max-h-full object-contain" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h3 id="project-modal-title" className="text-2xl font-medium tracking-tight text-ink">
                {project.title}
              </h3>
              <p className="mt-1.5 text-[14px] text-muted">{project.description}</p>

              <div className="mt-8 space-y-7 border-t border-line pt-7">
                {project.role && (
                  <Block index="—" title="Role">
                    <p className="text-[14px] leading-relaxed text-muted">{project.role}</p>
                  </Block>
                )}
                {project.tech && (
                  <Block index="—" title="Tech">
                    <p className="font-mono text-[12.5px] leading-relaxed text-muted">{project.tech.join(" · ")}</p>
                  </Block>
                )}
                {project.status && (
                  <Block index="—" title="Status">
                    <p className="text-[14px] leading-relaxed text-muted">{project.status}</p>
                  </Block>
                )}
                <Block index="01" title="Problem">
                  <p className="text-[14px] leading-relaxed text-muted">{project.problem}</p>
                </Block>
                <Block index="02" title="Solution">
                  <p className="text-[14px] leading-relaxed text-muted">{project.solution}</p>
                </Block>
                <Block index="03" title="Features">
                  <ul className="space-y-2 text-[14px] leading-relaxed text-muted">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-faint" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Block>
              </div>

              {/* Visit Live Project */}
              {project.link && (
                <div className="mt-8 border-t border-line pt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 font-mono text-[12.5px] text-paper transition-opacity hover:opacity-85"
                  >
                    {project.linkLabel ? `Visit ${project.linkLabel}` : "Visit live project"}
                    <FiArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  {project.linkNote && (
                    <p className="mt-3 text-[12.5px] leading-relaxed text-faint">{project.linkNote}</p>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;