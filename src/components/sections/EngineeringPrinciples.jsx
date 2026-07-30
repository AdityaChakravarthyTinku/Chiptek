import { Target, Wrench, Sparkles, Users, Database, ShieldCheck } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import CapabilityCard from "../ui/CapabilityCard.jsx";
import Reveal from "../ui/Reveal.jsx";

const principles = [
  {
    icon: Target,
    title: "Start with the requirement",
    description: "Clarify the operational problem, users, constraints, and expected outcome before selecting technology."
  },
  {
    icon: Wrench,
    title: "Build for maintainability",
    description: "Prefer understandable architecture, documented decisions, and systems that future teams can support."
  },
  {
    icon: Sparkles,
    title: "Use AI selectively",
    description: "Apply AI where it offers measurable utility rather than treating it as a default solution."
  },
  {
    icon: Users,
    title: "Keep people in control",
    description: "Design review, exception handling, and human oversight into sensitive or consequential workflows."
  },
  {
    icon: Database,
    title: "Treat data as a foundation",
    description: "Consider quality, access, lineage, privacy, and integration before relying on analytical or ML outputs."
  },
  {
    icon: ShieldCheck,
    title: "Secure by design",
    description: "Consider access controls, data exposure, dependency risk, validation, and operational security throughout delivery."
  }
];

export default function EngineeringPrinciples() {
  return (
    <section className="section-padding bg-ink text-white">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="HOW WE DECIDE"
            title="Technology decisions grounded in delivery."
            light
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.04}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-teal">
                  <principle.icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-white">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{principle.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
