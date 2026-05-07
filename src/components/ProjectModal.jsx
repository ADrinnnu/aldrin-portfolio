import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, isOpen, onClose }) => {
  return (
    // AnimatePresence is required for exit animations in Framer Motion
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Closes modal if you click the background
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#041019]/80 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()} // Prevents clicks inside the modal from closing it
            className="bg-[#07151d] border border-white/10 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative my-8"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-white/10 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            {/* Modal Header Image */}
            <div className="w-full h-48 sm:h-64 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center p-6 border-b border-white/5 relative overflow-hidden">
               {/* A subtle glowing background effect */}
               <div className="absolute inset-0 bg-[#4c6ef5]/10 blur-3xl rounded-full translate-y-1/2"></div>
               <img src={project.image} alt={project.title} className="max-h-full object-contain drop-shadow-2xl relative z-10" />
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-2 font-['Poppins']">{project.title}</h3>
              <p className="text-[#00d0ff] font-medium mb-8">{project.description}</p>

              <div className="space-y-8">
                {/* The Problem */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-[#4c6ef5]">01.</span> The Problem
                  </h4>
                  <p className="text-slate-400 leading-relaxed pl-7 border-l border-white/10">{project.problem}</p>
                </div>

                {/* The Solution */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-[#4c6ef5]">02.</span> The Solution
                  </h4>
                  <p className="text-slate-400 leading-relaxed pl-7 border-l border-white/10">{project.solution}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-[#4c6ef5]">03.</span> Key Features
                  </h4>
                  <ul className="text-slate-400 leading-relaxed pl-7 border-l border-white/10 space-y-2 list-disc list-inside">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="pl-2">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;