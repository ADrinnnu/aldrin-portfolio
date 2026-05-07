import { motion } from "framer-motion";
import { skills } from "../data";

const About = () => {
  return (
    <section id="about" className="py-20 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-4 inline-block pr-8">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-slate-400 text-lg leading-relaxed">
          <div>
            <p className="mb-4">
              Hello! I'm Aldrin, a passionate developer who enjoys building things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes—turns out hacking together HTML & CSS taught me a lot about the web!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working on a variety of full-stack projects. My main focus these days is building accessible, inclusive products and digital experiences using modern JavaScript frameworks.
            </p>
          </div>
          
          <div>
            <p className="mb-4 text-white font-semibold">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-slate-300">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-primary">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;