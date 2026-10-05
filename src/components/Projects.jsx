import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data";
import ProjectSkeleton from "./ProjectSkeleton";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const Projects = () => {
  // State to track which project is clicked
  const [selectedProject, setSelectedProject] = useState(null);

  const { data: projectList, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(projects), 800); // Shortened the fake delay a bit
      }),
  });

  return (
    <section id="projects">
      <SectionHeading index="05" title="projects" aside="case studies" />

      <ul className="divide-y divide-line">
        {isLoading
          ? [0, 1, 2].map((i) => <ProjectSkeleton key={i} />)
          : projectList?.map((project, index) => (
              <Reveal as="li" key={project.id} delay={index * 0.06}>
                <div className="group flex items-center gap-5 py-5">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Open ${project.title} case study`}
                    className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-lg border border-line bg-soft p-2.5 transition-colors group-hover:border-faint sm:h-20 sm:w-20"
                  >
                    <img
                      src={project.image}
                      alt=""
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </button>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] text-faint">{String(index + 1).padStart(2, "0")}</span>
                      <h3 className="text-[16px] font-medium text-ink">{project.title}</h3>
                    </div>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{project.description}</p>
                    {(project.role || project.tech) && (
                      <p className="mt-1.5 font-mono text-[11.5px] leading-relaxed text-faint">
                        {[project.role, project.tech?.join(" · ")].filter(Boolean).join(" — ")}
                      </p>
                    )}
                    {project.status && (
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">{project.status}</p>
                    )}

                    <div className="mt-3 flex items-center gap-5 font-mono text-[11.5px]">
                      <button
                        id={`case-study-${project.id}`}
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="link-line inline-flex items-center gap-1 text-ink"
                      >
                        read case study
                        <FiArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </button>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-line inline-flex items-center gap-0.5 text-muted hover:text-ink"
                        >
                          {project.linkLabel || "live site"} <FiArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
      </ul>

      {/* Render the Modal (it stays hidden until selectedProject has data) */}
      <ProjectModal
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;