import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", _honey: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Honeypot check: If the hidden honeypot field is filled, it's a bot!
    if (formData._honey) {
      setStatus("success");
      setStatusMessage("Message sent successfully!");
      return;
    }

    // 2. Client-side Rate-Limiting (60-second cooldown)
    const lastSubmitTime = localStorage.getItem("last_contact_submit");
    const now = Date.now();
    const cooldownMs = 60 * 1000; // 60 seconds

    if (lastSubmitTime && now - parseInt(lastSubmitTime, 10) < cooldownMs) {
      const remainingSeconds = Math.ceil((cooldownMs - (now - parseInt(lastSubmitTime, 10))) / 1000);
      setStatus("error");
      setStatusMessage(`Please wait ${remainingSeconds} seconds before sending another message.`);
      return;
    }

    setStatus("submitting");
    setStatusMessage("Sending your message...");

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);
      data.append("_subject", `Portfolio Message from ${formData.name}`);
      data.append("_captcha", "false");

      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        localStorage.setItem("last_contact_submit", Date.now().toString());
        setStatus("success");
        setStatusMessage("Message sent successfully! I will get back to you soon.");
        setFormData({ name: "", email: "", message: "", _honey: "" });
      } else {
        setStatus("error");
        setStatusMessage(result.message || "Failed to send message. Please try again or email directly.");
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("error");
      setStatusMessage("Failed to send message. Please try again or email directly.");
    }
  };

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
            Email me directly at <a href={`mailto:${personalInfo.email}`} className="text-[#00d0ff] hover:underline">{personalInfo.email}</a> or use the form to send a message.
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Honeypot field (hidden from human visitors to trap spambots) */}
            <input
              type="text"
              name="_honey"
              value={formData._honey}
              onChange={handleChange}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="sr-only">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#00d0ff] focus:ring-1 focus:ring-[#00d0ff] transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#00d0ff] focus:ring-1 focus:ring-[#00d0ff] transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Short message"
                required
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#00d0ff] focus:ring-1 focus:ring-[#00d0ff] transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-gradient-to-r from-[#00d0ff] to-[#4c6ef5] text-slate-950 font-bold py-4 px-6 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all mt-2 shadow-lg shadow-[#00d0ff]/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
            </button>

            {statusMessage && (
              <p className={`text-sm text-center font-medium mt-2 ${status === "success" ? "text-emerald-400" : status === "error" ? "text-rose-400" : "text-slate-400"
                }`}>
                {statusMessage}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;