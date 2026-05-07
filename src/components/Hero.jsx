import { motion } from "framer-motion";
import { personalInfo } from "../data"; // <--- This must be lowercase 'p' and 'I'
import profilePic from "../assets/pic1.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <p className="text-slate-400 text-lg mb-2">Hi!</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-['Poppins'] text-white">
          Hello, I'm <span className="text-primary">{personalInfo.name}</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mb-6 font-['Poppins']">
          {personalInfo.title}
        </h2>
        <p className="text-slate-400 max-w-2xl leading-relaxed mb-8">
          {personalInfo.bio}
        </p>
        
        <div className="flex flex-col gap-3 text-slate-400 mb-10">
          <p className="flex items-center gap-2">📍 {personalInfo.location}</p>
          <p className="flex items-center gap-2">📞 {personalInfo.phone}</p>
          <p className="flex items-center gap-2">✉️ <a href={`mailto:${personalInfo.email}`} className="text-secondary hover:underline">{personalInfo.email}</a></p>
        </div>

        <div className="flex gap-4">
          <a href="#contact" className="bg-gradient-to-r from-primary to-secondary text-darker px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
            Contact Me
          </a>
          <a href="/Aldrin_Villanueva_Resume.pdf" download className="border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-all">
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex justify-center"
      >
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 hex-clip p-4 backdrop-blur-sm border border-white/10">
            <img src={profilePic} alt="Aldrin" className="w-full h-full object-cover hex-clip" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;