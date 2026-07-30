import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";

// Wraps children in a short, restrained fade/rise-on-scroll reveal.
// Automatically disables motion for prefers-reduced-motion users.
export default function Reveal({ children, delay = 0, y = 16, className = "" }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
