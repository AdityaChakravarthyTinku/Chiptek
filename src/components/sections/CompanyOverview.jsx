import { Target, Wrench, ShieldCheck, Users2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../ui/Reveal.jsx";

const principles = [
  {
    icon: Target,
    title: "Business-aligned engineering",
    description: "Technical decisions are grounded in the operational problem a system is meant to solve."
  },
  {
    icon: Wrench,
    title: "Maintainable system design",
    description: "Architecture and documentation are built so a future team can understand and extend the work."
  },
  {
    icon: ShieldCheck,
    title: "Responsible use of data and AI",
    description: "Data and AI capabilities are applied where they add real value, with oversight retained."
  },
  {
    icon: Users2,
    title: "Clear technical collaboration",
    description: "Requirements, scope, and progress stay visible and understandable throughout an engagement."
  }
];

export default function CompanyOverview() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-content grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="ABOUT CHIPTEK"
            title="Engineering clarity into complex technology requirements."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-body">
            <p>
              Chiptek helps organizations translate technical requirements into reliable digital systems. Our
              focused capabilities span modern software development, data engineering, analytics, machine
              learning, and AI-enabled automation.
            </p>
            <p>
              We approach each engagement through practical architecture, maintainable implementation, and clear
              collaboration. The objective is not to introduce technology for its own sake, but to build systems
              that support real operational and business needs.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-border-soft bg-surface-cool p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-teal shadow-card">
                  <principle.icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-ink-text">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-body">{principle.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
