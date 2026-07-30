import { Helmet } from "react-helmet-async";
import { company } from "../content/company.js";

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | Chiptek</title>
        <meta name="description" content="Terms governing use of the Chiptek website." />
      </Helmet>
      <section className="section-padding bg-white pt-28">
        <div className="container-content max-w-prose">
          <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold text-ink-text">Terms of Use</h1>
          <p className="mt-4 text-sm text-slate-body">Last updated: review and set this date before publishing.</p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-body">
            <div>
              <h2 className="text-base font-bold text-ink-text">Use of this website</h2>
              <p className="mt-2">
                This website describes Chiptek's software, data, and AI-enabled service capabilities. Content is
                provided for general informational purposes and does not constitute a binding proposal or
                guarantee of results for any specific engagement.
              </p>
            </div>
            <div>
              <h2 className="text-base font-bold text-ink-text">Intellectual property</h2>
              <p className="mt-2">
                The content, design, and brand mark on this website belong to Chiptek unless otherwise noted, and
                may not be reproduced without permission.
              </p>
            </div>
            <div>
              <h2 className="text-base font-bold text-ink-text">Contact</h2>
              <p className="mt-2">
                Questions about these terms can be directed to {company.primaryContact.fullName}, Primary
                Contact, at{" "}
                <a href={company.phone.href} className="font-semibold text-teal">
                  {company.phone.display}
                </a>
                {company.email.display && (
                  <>
                    {" "}or{" "}
                    <a href={company.email.href} className="font-semibold text-teal">
                      {company.email.display}
                    </a>
                  </>
                )}
                .
              </p>
            </div>
            <p className="text-xs text-slate-body/70">
              This page is a starting template and does not constitute legal advice. Have these terms reviewed by
              a qualified professional before publishing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
