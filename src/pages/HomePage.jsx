import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero.jsx";
import CompanyOverview from "../components/sections/CompanyOverview.jsx";
import SolutionNavigator from "../components/sections/SolutionNavigator.jsx";
import Services from "../components/sections/Services.jsx";
import EngineeringPrinciples from "../components/sections/EngineeringPrinciples.jsx";
import DeliveryProcess from "../components/sections/DeliveryProcess.jsx";
import SpecialistCapabilities from "../components/sections/SpecialistCapabilities.jsx";
import TechnologyCapabilities from "../components/sections/TechnologyCapabilities.jsx";
import FinalCTA from "../components/sections/FinalCTA.jsx";
import Contact from "../components/sections/Contact.jsx";
import { company, getStructuredDataAddress } from "../content/company.js";

const title = "Chiptek | Software, Data and AI Solutions";
const description =
  "Chiptek provides focused software engineering, data engineering, analytics, AI, machine learning, automation, and specialist technology delivery services.";

export default function HomePage() {
  const canonical = company.siteUrl ? `${company.siteUrl}/` : undefined;
  const address = getStructuredDataAddress();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    telephone: company.phone.display,
    ...(company.siteUrl ? { url: company.siteUrl } : {}),
    ...(address ? { address } : {})
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.webp" />
        {canonical && <meta property="og:url" content={canonical} />}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Hero />
      <CompanyOverview />
      <SolutionNavigator />
      <Services />
      <EngineeringPrinciples />
      <DeliveryProcess />
      <SpecialistCapabilities />
      <TechnologyCapabilities />
      <FinalCTA />
      <Contact />
    </>
  );
}
