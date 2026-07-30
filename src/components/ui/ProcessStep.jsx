import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";

// One step in the Discover -> Deploy timeline. isActive drives the filled
// node state as the step enters the viewport; connectors are drawn by the
// parent DeliveryProcess component.
export default function ProcessStep({ number, title, description, isActive }) {
  const reduced = useReducedMotion();

  return (
    <div className="relative flex flex-col items-start gap-4 sm:items-center sm:text-center">
      <motion.div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors duration-300 ${
          isActive ? "border-teal bg-teal text-white" : "border-border-soft bg-white text-slate-body"
        }`}
        animate={reduced ? undefined : { scale: isActive ? 1.08 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {number}
      </motion.div>
      <div>
        <h3 className="text-base font-bold text-ink-text">{title}</h3>
        <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-slate-body">{description}</p>
      </div>
    </div>
  );
}
