import { useState, useEffect } from "react";
import { ArrowUp, Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import BrandMark from "../ui/BrandMark.jsx";
import { company, getVisibleLocation } from "../../content/company.js";
import { services } from "../../content/services.js";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Contact", href: "/#contact" }
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = getVisibleLocation();

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 480);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-ink text-white">
      <div className="container-content grid gap-12 py-16 sm:py-20 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <BrandMark dark showDescriptor />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            Chiptek provides focused software engineering, data, analytics, AI, automation, and specialist
            technology delivery capabilities.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">Navigation</h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm text-white/65 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">Core Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className="text-sm text-white/65 hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li>Primary Contact: {company.primaryContact.fullName}</li>
            <li>
              <a href={company.phone.href} className="inline-flex items-center gap-2 hover:text-white">
                <Phone size={15} aria-hidden="true" /> {company.phone.display}
              </a>
            </li>
            <li>
              <a href={company.phone2.href} className="inline-flex items-center gap-2 hover:text-white">
                <Phone size={15} aria-hidden="true" /> {company.phone2.display}
              </a>
            </li>
            {company.email.display && (
              <li>
                <a href={company.email.href} className="inline-flex items-center gap-2 hover:text-white">
                  <Mail size={15} aria-hidden="true" /> {company.email.display}
                </a>
              </li>
            )}
            {company.email.display && (
              <li>
                <a href={company.contractsEmail.href} className="inline-flex items-center gap-2 hover:text-white">
                  <Mail size={15} aria-hidden="true" /> {company.contractsEmail.display}
                </a>
              </li>
            )}
            {location && (
              <li className="inline-flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden="true" /> {location}
              </li>
            )}
            {company.linkedInUrl && (
              <li>
                <a
                  href={company.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Linkedin size={15} aria-hidden="true" /> LinkedIn
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          <ArrowUp size={20} aria-hidden="true" />
        </button>
      )}
    </footer>
  );
}
