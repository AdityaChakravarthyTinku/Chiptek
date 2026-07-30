import { Helmet } from "react-helmet-async";
import { company, getVisibleLocation } from "../content/company.js";

export default function PrivacyPage() {
  const location = getVisibleLocation();

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Chiptek</title>
        <meta name="description" content="How Chiptek collects, uses, and protects information submitted through this website." />
      </Helmet>
      <section className="section-padding bg-white pt-28">
        <div className="container-content max-w-prose">
          <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-ink-text">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-body">Last updated: review and set this date before publishing.</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-body">
            <div>
              <h2 className="text-base font-bold text-ink-text">Information we collect</h2>
              <p className="mt-2">
                When you submit the contact form on this website, Chiptek collects the information you provide,
                which may include your name, work email, phone number, company name, service of interest, and a
                summary of your requirement.
              </p>
            </div>
            <div>
              <h2 className="text-base font-bold text-ink-text">How information is used</h2>
              <p className="mt-2">
                Submitted information is used to evaluate and respond to your enquiry. It is not sold to third
                parties. This section should be reviewed and expanded to reflect Chiptek's actual data handling
                practices before publishing.
              </p>
            </div>
            <div>
              <h2 className="text-base font-bold text-ink-text">Contact</h2>
              <p className="mt-2">
                Questions about this policy can be directed to {company.primaryContact.fullName}, Primary Contact,
                at <a href={company.phone.href} className="font-semibold text-teal">{company.phone.display}</a>
                {company.email.display && (
                  <>
                    {" "}or{" "}
                    <a href={company.email.href} className="font-semibold text-teal">
                      {company.email.display}
                    </a>
                  </>
                )}
                .{location && ` Chiptek is based in ${location}.`}
              </p>
            </div>
            <p className="text-xs text-slate-body/70">
              This page is a starting template and does not constitute legal advice. Have this policy reviewed by
              a qualified professional before publishing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
