import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query"; //
import { education } from "../data";

const Education = () => {
  const { data: eduData } = useQuery({
    queryKey: ["education"],
    queryFn: () => Promise.resolve(education),
  });

  return (
    <section id="education" className="py-24 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-['Poppins'] mb-4 text-white">Educational Background</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Commitment to lifelong learning.</p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="absolute left-[28px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary to-transparent md:-translate-x-1/2 rounded-full"
        />

        {eduData?.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full mb-12 relative pl-20 md:pl-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="absolute left-[12px] md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-dark flex items-center justify-center z-10 shadow-lg">
              <img src={item.logo} alt={item.school} className="w-8 h-8 object-contain" />
            </div>
            <div className="w-full md:w-[45%] bg-white/5 border border-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-2">{item.school}</h3>
              <p className="text-slate-400 text-sm">{item.degree} — {item.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;