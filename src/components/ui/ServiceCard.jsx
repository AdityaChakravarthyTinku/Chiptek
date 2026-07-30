import { Link } from "react-router-dom";
import { Code2, Database, LineChart, Cpu, Workflow, Users, ArrowRight } from "lucide-react";

const iconMap = { Code2, Database, LineChart, Cpu, Workflow, Users };

// Renders one service summary card. Icons resolve from the icon name stored
// in content/services.js so the icon set stays data-driven, not hard-coded
// per card.
export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Code2;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border-soft bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-soft text-teal">
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-ink-text">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-body">{service.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {service.capabilities.slice(0, 3).map((capability) => (
          <li
            key={capability}
            className="rounded-full border border-border-soft bg-surface-cool px-3 py-1 text-xs font-medium text-ink-text"
          >
            {capability}
          </li>
        ))}
      </ul>
      <Link
        to={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal focus-visible:outline-none"
      >
        View Service
        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
