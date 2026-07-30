import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../ui/Reveal.jsx";

const techGroups = [
  { group: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Backend", items: ["Python", "FastAPI", "Django", "Node.js", "REST APIs"] },
  { group: "Data", items: ["SQL", "PostgreSQL", "Data pipelines", "ETL and ELT", "Analytical workflows"] },
  { group: "AI and Machine Learning", items: ["Python ML ecosystems", "Model APIs", "Evaluation workflows", "ML pipelines", "Production integration"] },
  { group: "Delivery", items: ["Containers", "CI/CD", "Cloud deployment", "Monitoring", "System integration"] }
];

export default function TechnologyCapabilities() {
  return (
    <section className="section-padding bg-pale-gradient">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="TOOLS AND STACK"
            title="Technology selected around the solution."
            description="Chiptek selects tools according to requirements, maintainability, integration needs, security constraints, and the client's existing environment."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {techGroups.map((group, index) => (
            <Reveal key={group.group} delay={index * 0.04}>
              <div className="h-full rounded-2xl border border-border-soft bg-white/80 p-5">
                <h3 className="text-sm font-bold text-ink-text">{group.group}</h3>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs leading-relaxed text-slate-body">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-body/80">
          Presented as editable capability examples, not vendor certifications or official partnerships.
        </p>
      </div>
    </section>
  );
}
