import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";
import FormField from "../ui/FormField.jsx";
import LocalTime from "../ui/LocalTime.jsx";
import Reveal from "../ui/Reveal.jsx";
import { company, getVisibleLocation } from "../../content/company.js";
import { services } from "../../content/services.js";

const serviceOptions = [...services.map((s) => s.title), "General Enquiry"];

const contactMethods = ["Email", "Phone", "No preference"];

function slugToTitle(slug) {
  const match = services.find((s) => s.slug === slug);
  return match ? match.title : "";
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselected = useMemo(() => slugToTitle(searchParams.get("service") || ""), [searchParams]);

  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: preselected || serviceOptions[serviceOptions.length - 1],
    summary: "",
    contactMethod: "No preference",
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const location = getVisibleLocation();
  const endpointConfigured = Boolean(company.contactFormEndpoint);

  function updateField(key, value) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function validate() {
    const nextErrors = {};
    if (!fields.name.trim()) nextErrors.name = "Enter your full name.";
    if (!fields.email.trim()) {
      nextErrors.email = "Enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!fields.company.trim()) nextErrors.company = "Enter your company name.";
    if (!fields.summary.trim()) nextErrors.summary = "Share a brief summary of the requirement.";
    if (!fields.consent) nextErrors.consent = "Please confirm consent to be contacted.";
    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "submitting") return; // prevent duplicate submission

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!endpointConfigured) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(company.contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields)
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (_err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding bg-surface-cool">
      <div className="container-content grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading eyebrow="GET IN TOUCH" title="Let's discuss the requirement." />
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-body">
            Share what you are building, modernizing, automating, or trying to understand. Chiptek will use the
            information to determine whether its capabilities are relevant to the requirement.
          </p>

          <div className="mt-8 space-y-4">
            <p className="text-sm text-ink-text">
              <span className="font-semibold">Primary Contact:</span> {company.primaryContact.fullName}
              {company.primaryContact.role && ` — ${company.primaryContact.role}`}
            </p>
            <a href={company.phone.href} className="flex items-center gap-2 text-sm text-ink-text hover:text-teal">
              <Phone size={16} className="text-teal" aria-hidden="true" /> {company.phone.display}
            </a>
            {company.email.display && (
              <a href={company.email.href} className="flex items-center gap-2 text-sm text-ink-text hover:text-teal">
                <Mail size={16} className="text-teal" aria-hidden="true" /> {company.email.display}
              </a>
            )}
            {location && (
              <p className="flex items-center gap-2 text-sm text-ink-text">
                <MapPin size={16} className="text-teal" aria-hidden="true" /> {location}
              </p>
            )}
            <LocalTime timeZone={company.timeZone} />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border-soft bg-white p-6 shadow-card sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField
                id="name"
                label="Full name"
                required
                value={fields.name}
                onChange={(e) => updateField("name", e.target.value)}
                error={errors.name}
              />
              <FormField
                id="email"
                label="Work email"
                type="email"
                required
                value={fields.email}
                onChange={(e) => updateField("email", e.target.value)}
                error={errors.email}
              />
              <FormField
                id="phone"
                label="Phone number"
                type="tel"
                value={fields.phone}
                onChange={(e) => updateField("phone", e.target.value)}
              />
              <FormField
                id="company"
                label="Company"
                required
                value={fields.company}
                onChange={(e) => updateField("company", e.target.value)}
                error={errors.company}
              />
              <FormField
                id="service"
                label="Service of interest"
                as="select"
                value={fields.service}
                onChange={(e) => updateField("service", e.target.value)}
              >
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </FormField>
              <FormField
                id="contactMethod"
                label="Preferred contact method"
                as="select"
                value={fields.contactMethod}
                onChange={(e) => updateField("contactMethod", e.target.value)}
              >
                {contactMethods.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </FormField>
            </div>

            <div className="mt-5">
              <FormField
                id="summary"
                label="Project or requirement summary"
                as="textarea"
                rows={4}
                required
                value={fields.summary}
                onChange={(e) => updateField("summary", e.target.value)}
                error={errors.summary}
              />
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm text-slate-body">
              <input
                type="checkbox"
                checked={fields.consent}
                onChange={(e) => updateField("consent", e.target.checked)}
                aria-invalid={Boolean(errors.consent)}
                aria-describedby={errors.consent ? "consent-error" : undefined}
                className="mt-0.5 h-5 w-5 shrink-0 rounded border-border-soft"
              />
              I consent to Chiptek contacting me about this requirement.
            </label>
            {errors.consent && (
              <p id="consent-error" role="alert" className="mt-1 text-xs font-medium text-red-600">
                {errors.consent}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 min-h-[44px] w-full rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-teal/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Sending..." : "Submit"}
            </button>

            <div aria-live="polite" className="mt-4">
              {status === "success" && (
                <p className="text-sm font-medium text-teal">
                  Thank you — your message has been sent. Chiptek will follow up soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                  Something went wrong sending this form. Please try again, or call {company.phone.display}.
                </p>
              )}
              {status === "unconfigured" && (
                <p className="text-sm leading-relaxed text-slate-body">
                  Online submission isn't configured yet. Please call{" "}
                  <a href={company.phone.href} className="font-semibold text-teal">
                    {company.phone.display}
                  </a>
                  {company.email.display && (
                    <>
                      {" "}
                      or email{" "}
                      <a href={company.email.href} className="font-semibold text-teal">
                        {company.email.display}
                      </a>
                    </>
                  )}
                  {" "}directly.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
