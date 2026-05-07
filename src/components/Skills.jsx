import { motion } from "framer-motion";
import { frontendSkills, backendSkills, databaseSkills } from "../data";

const Skills = () => {
  const SkillCard = ({ title, skills, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm shadow-xl hover:-translate-y-1 transition-transform duration-300"
    >
      <h3 className="text-2xl font-bold text-white mb-6 font-['Poppins'] border-b border-white/10 pb-4 inline-block pr-8">
        {title}
      </h3>
      <div className="space-y-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon; // We extract the icon component here
          return (
            <div key={index} className="group">
              <h4 className="flex items-center gap-3 text-primary font-bold font-mono text-sm mb-2 group-hover:text-secondary transition-colors">
                {/* Render the Icon */}
                <Icon className="text-xl" /> 
                {skill.name}
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed pl-8 border-l-2 border-transparent group-hover:border-white/10 transition-colors">
                {skill.desc}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold font-['Poppins'] mb-4 text-white">Tech Stack</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The technologies and tools I use to build scalable, full-stack applications.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <SkillCard title="Frontend" skills={frontendSkills} delay={0.1} />
        <SkillCard title="Backend" skills={backendSkills} delay={0.2} />
        <SkillCard title="Database & Auto" skills={databaseSkills} delay={0.3} />
      </div>
    </section>
  );
};

export default Skills;