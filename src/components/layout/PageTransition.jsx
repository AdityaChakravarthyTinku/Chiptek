import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";

// Applies a short, restrained fade/rise to each routed page. Kept minimal
// intentionally — this is a page transition, not a decorative animation.
export default function PageTransition({ children }) {
  const reduced = useReducedMotion();

  if (reduced) return <div>{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
