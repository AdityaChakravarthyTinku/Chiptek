import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import Reveal from "../ui/Reveal.jsx";
import { solutionPaths, solutionNavigatorDisclaimer } from "../../content/solutionPaths.js";

export default function SolutionNavigator() {
  const [activeId, setActiveId] = useState(solutionPaths[0].id);
  const active = solutionPaths.find((path) => path.id === activeId);

  return (
    <section className="section-padding bg-surface-cool">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="A STARTING POINT"
            title="Start with the requirement."
            description="Choose the business need closest to yours to see the Chiptek capabilities typically involved."
          />
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <div role="tablist" aria-label="Business needs" className="flex flex-wrap gap-2">
            {solutionPaths.map((path) => (
              <button
                key={path.id}
                type="button"
                role="tab"
                aria-selected={activeId === path.id}
                onClick={() => setActiveId(path.id)}
                className={`min-h-[44px] rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  activeId === path.id
                    ? "border-teal bg-teal text-white"
                    : "border-border-soft bg-white text-ink-text hover:border-teal/40"
                }`}
              >
                {path.label}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="mt-8 rounded-2xl border border-border-soft bg-white p-7 shadow-card sm:p-9">
            <h3 className="text-lg font-bold text-ink-text">{active.label}</h3>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-body">Likely services and roles</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {active.services.map((service) => (
                  <li
                    key={service}
                    className="rounded-full border border-border-soft bg-teal-soft px-3 py-1 text-xs font-medium text-ink-text"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-body">Recommended starting point</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-body">{active.startingPoint}</p>
            </div>
            <Link
              to={`/services/${active.serviceSlug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal"
            >
              View related service
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-body/80">{solutionNavigatorDisclaimer}</p>
        </Reveal>
      </div>
    </section>
  );
}
