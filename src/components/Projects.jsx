import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { projects } from "../data";
import ProjectSkeleton from "./ProjectSkeleton";
import ProjectModal from "./ProjectModal"; // Import your new Modal

const Projects = () => {
  // State to track which project is clicked
  const [selectedProject, setSelectedProject] = useState(null);

  const { data: projectList, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => new Promise((resolve) => {
      setTimeout(() => resolve(projects), 800); // Shortened the fake delay a bit
    }), 
  });

  return (
    <section id="projects" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-['Poppins'] mb-4 text-white">My Projects</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">A deep dive into the problems I've solved.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {isLoading ? (
          <>
            <ProjectSkeleton />
            <ProjectSkeleton />
            <ProjectSkeleton />
          </>
        ) : (
          projectList?.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm shadow-xl flex flex-col hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-full aspect-square p-6 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center border-b border-white/5">
   <img 
     src={project.image} 
     alt={project.title} 
     className="w-full h-full object-contain drop-shadow-xl" 
   />
</div>
              
              {/* Added flex-grow so the buttons always align at the bottom */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 font-['Poppins']">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">{project.description}</p>
                
                {/* The "Read Case Study" Button pushes to the bottom of the card */}
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto flex items-center gap-2 text-sm font-bold text-[#00d0ff] hover:text-white transition-colors group w-fit"
                >
                  Read Case Study
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>

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