import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { personalInfo } from "../data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const fieldClass =
  "w-full rounded-md border border-line bg-paper px-4 py-3 text-[14px] text-ink placeholder:text-faint transition-colors focus:border-ink focus:outline-none";

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

  const details = [
    { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { label: "Location", value: personalInfo.location },
    { label: "Phone", value: personalInfo.phone },
  ];

  return (
    <section id="contact">
      <SectionHeading index="07" title="contact" aside="say hello" />

      <div className="grid gap-10 md:grid-cols-[1fr_1.25fr]">
        {/* Left: Reach Out Info */}
        <Reveal>
          <h3 className="text-2xl font-medium tracking-tight text-ink">Reach out</h3>
          <p className="mt-3 text-[14.5px] leading-relaxed text-muted">
            Please fill out the form to initiate discussing potential job opportunities, or email me directly.
          </p>
          <dl className="mt-8 divide-y divide-line border-y border-line font-mono text-[12px]">
            {details.map(({ label, value, href }) => (
              <div key={label} className="flex items-center justify-between gap-4 py-3">
                <dt className="uppercase tracking-[0.14em] text-faint">{label}</dt>
                <dd className="min-w-0 truncate text-right text-ink">
                  {href ? <a href={href} className="link-line">{value}</a> : value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Right: The Contact Form */}
        <Reveal delay={0.08}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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

            <label htmlFor="name" className="sr-only">Your name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className={fieldClass} />

            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className={fieldClass} />

            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Short message" required className={`${fieldClass} resize-none`} />

            <button
              id="contact-submit"
              type="submit"
              disabled={status === "submitting"}
              className="group mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-ink px-6 py-3 font-mono text-[13px] text-paper transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Send message"}
              <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>

            {statusMessage && (
              <p
                role="status"
                className={`mt-1 font-mono text-[12px] ${
                  status === "success" ? "text-emerald-500" : status === "error" ? "text-rose-500" : "text-muted"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
