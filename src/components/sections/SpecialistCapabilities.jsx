import SectionHeading from "../ui/SectionHeading.jsx";
import CapabilityCard from "../ui/CapabilityCard.jsx";
import Reveal from "../ui/Reveal.jsx";
import { roleGroups } from "../../content/roles.js";

export default function SpecialistCapabilities() {
  return (
    <section id="expertise" className="section-padding bg-white">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="SPECIALIST CAPABILITIES"
            title="Focused professionals across software, data, and AI."
          />
        </Reveal>

        <div className="mt-12 space-y-12">
          {roleGroups.map((group) => (
            <div key={group.group}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-teal">{group.group}</h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.roles.map((role, index) => (
                  <Reveal key={role.title} delay={index * 0.04}>
                    <CapabilityCard index={index} title={role.title} description={role.description} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
