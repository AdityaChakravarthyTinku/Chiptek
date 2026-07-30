import SectionHeading from "../ui/SectionHeading.jsx";
import ServiceCard from "../ui/ServiceCard.jsx";
import Reveal from "../ui/Reveal.jsx";
import { services } from "../../content/services.js";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="CORE CAPABILITIES"
            title="Focused technology services built around real delivery needs."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
