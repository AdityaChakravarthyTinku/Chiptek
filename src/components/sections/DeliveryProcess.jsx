import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../ui/SectionHeading.jsx";
import ProcessStep from "../ui/ProcessStep.jsx";
import Reveal from "../ui/Reveal.jsx";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";

const steps = [
  { title: "Discover", description: "Understand the business objective, users, constraints, current systems, available data, and expected outcomes." },
  { title: "Define", description: "Convert requirements into a realistic technical scope, priorities, architecture, and delivery plan." },
  { title: "Design", description: "Create system boundaries, workflows, interfaces, data structures, and implementation specifications." },
  { title: "Build", description: "Develop iteratively using maintainable code, reviews, testing, and visible delivery progress." },
  { title: "Validate", description: "Evaluate functionality, usability, integrations, performance, data behavior, and security considerations." },
  { title: "Deploy and Improve", description: "Prepare the solution for release, document it, observe its behavior, and support controlled iteration." }
];

export default function DeliveryProcess() {
  const containerRef = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.4"]
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="approach" className="section-padding bg-surface-cool" ref={containerRef}>
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="DELIVERY APPROACH"
            title="From requirement to reliable implementation."
          />
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-5 hidden h-[2px] bg-border-soft sm:block" aria-hidden="true" />
          {!reduced && (
            <motion.div
              className="absolute left-0 top-5 hidden h-[2px] bg-gradient-to-r from-teal to-accent-blue sm:block"
              style={{ width: lineWidth }}
              aria-hidden="true"
            />
          )}

          <div className="grid gap-10 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
            {steps.map((step, index) => (
              <ProcessStep key={step.title} number={index + 1} title={step.title} description={step.description} isActive />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
