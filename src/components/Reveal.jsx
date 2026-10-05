import { motion } from "framer-motion";

// Fades + lifts children into view once when scrolled to.
const Reveal = ({ as = "div", delay = 0, className = "", children, ...rest }) => {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
