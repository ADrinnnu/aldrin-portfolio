import { motion } from "framer-motion";
import { personalInfo } from "../data";

const Contact = () => {
  return (
    // min-h-[85vh] and flex-col justify-center forces this section to take up the whole screen!
    <section id="contact" className="min-h-[85vh] py-24 flex flex-col justify-center">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold font-['Poppins'] mb-4 text-white">Contact Me</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Please fill out the form below to initiate discussing potential job opportunities.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
        {/* Left Card: Reach Out Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 p-8 rounded-xl shadow-xl h-fit"
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-['Poppins']">Reach out</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Email me directly at <a href={`mailto:${personalInfo.email}`} className="text-secondary hover:underline">{personalInfo.email}</a> or use the form to send a message.
          </p>
          <div className="space-y-4 text-slate-300 font-medium">
            <p className="flex items-center gap-3">
              <span className="text-xl">📍</span> {personalInfo.location}
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl">📞</span> {personalInfo.phone}
            </p>
          </div>
        </motion.div>

        {/* Right Card: The Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 p-8 rounded-xl shadow-xl"
        >
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="sr-only">Your name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your name" 
                required 
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-slate-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                required 
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-slate-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="Short message" 
                required 
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-slate-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-gradient-to-r from-primary to-secondary text-darker font-bold py-4 px-6 rounded-lg hover:opacity-90 hover:-translate-y-1 transition-all mt-2 shadow-lg shadow-primary/20"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;