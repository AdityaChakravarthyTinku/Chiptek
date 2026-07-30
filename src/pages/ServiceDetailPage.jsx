import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Code2, Database, LineChart, Cpu, Workflow, Users, ChevronRight, ArrowRight } from "lucide-react";
import Button from "../components/ui/Button.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { getServiceBySlug, services } from "../content/services.js";
import { company } from "../content/company.js";
import NotFoundPage from "./NotFoundPage.jsx";

const iconMap = { Code2, Database, LineChart, Cpu, Workflow, Users };

export default function ServiceDetailPage({ slug }) {
  const service = getServiceBySlug(slug);
  const navigate = useNavigate();

  if (!service) return <NotFoundPage />;

  const Icon = iconMap[service.icon] || Code2;
  const related = services.filter((s) => service.related.includes(s.slug));
  const canonical = company.siteUrl ? `${company.siteUrl}/services/${service.slug}` : undefined;

  function goToContactWithService() {
    navigate(`/?service=${service.slug}#contact`);
  }

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:type" content="website" />
        {canonical && <meta property="og:url" content={canonical} />}
      </Helmet>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-border-soft bg-surface-cool pt-24">
        <div className="container-content flex items-center gap-2 py-4 text-sm text-slate-body">
          <Link to="/" className="hover:text-teal">
            Home
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link to="/#services" className="hover:text-teal">
            Services
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span aria-current="page" className="font-medium text-ink-text">
            {service.title}
          </span>
        </div>
      </nav>

      {/* Service hero */}
      <section className="bg-hero-gradient py-16 text-white sm:py-20">
        <div className="container-content">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-teal">
            <Icon size={24} aria-hidden="true" />
          </span>
          <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-teal">{service.eyebrow}</p>
          <h1 className="mt-3 max-w-2xl text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight">{service.title}</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75">{service.summary}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-prose">
          <Reveal>
            <h2 className="text-xl font-bold text-ink-text">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-body">{service.description}</p>
          </Reveal>
        </div>
      </section>

      {/* Key capabilities */}
      <section className="section-padding bg-surface-cool">
        <div className="container-content">
          <Reveal>
            <h2 className="text-xl font-bold text-ink-text">Key capabilities</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((capability, index) => (
              <Reveal key={capability} delay={index * 0.04}>
                <div className="rounded-xl border border-border-soft bg-white p-5 text-sm font-medium text-ink-text">
                  {capability}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Typical engagements */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <Reveal>
            <h2 className="text-xl font-bold text-ink-text">Typical engagement examples</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-body">
              Illustrative examples of the kind of work this capability covers — not completed Chiptek client projects.
            </p>
          </Reveal>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.typicalEngagements.map((item) => (
              <li key={item} className="rounded-xl border border-border-soft bg-surface-cool p-4 text-sm text-slate-body">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Delivery approach + outcomes */}
      <section className="section-padding bg-surface-cool">
        <div className="container-content grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-xl font-bold text-ink-text">Delivery approach</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-body">
              Engagements follow Chiptek's standard discover-define-design-build-validate-deploy approach, scoped
              to this capability's typical requirements and constraints.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-xl font-bold text-ink-text">Relevant business outcomes</h2>
            <ul className="mt-3 space-y-2">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="text-sm leading-relaxed text-slate-body">
                  • {outcome}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Relevant roles */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <Reveal>
            <h2 className="text-xl font-bold text-ink-text">Relevant roles</h2>
          </Reveal>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.roles.map((role) => (
              <span key={role} className="rounded-full border border-border-soft bg-teal-soft px-4 py-2 text-sm font-medium text-ink-text">
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="section-padding bg-surface-cool">
          <div className="container-content">
            <Reveal>
              <h2 className="text-xl font-bold text-ink-text">Related services</h2>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {related.map((item) => {
                const RelatedIcon = iconMap[item.icon] || Code2;
                return (
                  <Link
                    key={item.slug}
                    to={`/services/${item.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-border-soft bg-white p-5 transition-colors hover:border-teal/40"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-soft text-teal">
                        <RelatedIcon size={18} aria-hidden="true" />
                      </span>
                      <span className="text-sm font-semibold text-ink-text">{item.title}</span>
                    </span>
                    <ArrowRight size={16} className="text-slate-body transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="bg-hero-gradient py-16 text-center text-white sm:py-20">
        <div className="container-content">
          <h2 className="mx-auto max-w-xl text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight">
            Have a requirement related to {service.title.toLowerCase()}?
          </h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={goToContactWithService}>Discuss This Service</Button>
            <Button href="/#services" variant="ghost" withArrow={false}>
              Review All Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
