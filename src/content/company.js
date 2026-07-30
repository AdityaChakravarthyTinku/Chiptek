// Centralized company information.
// Every component that needs a company detail should import from this file
// rather than hard-coding it, so there is exactly one place to update before
// launch. Lines marked REVIEW BEFORE LAUNCH must be checked/replaced.

const email = import.meta.env.VITE_COMPANY_EMAIL || "";
const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL || "";
const siteUrl = import.meta.env.VITE_SITE_URL || "";
const addressVisibility = import.meta.env.VITE_ADDRESS_VISIBILITY || "city-only"; // "full" | "city-only" | "hidden"
const showMapLink = import.meta.env.VITE_SHOW_MAP_LINK === "true"; // default false
const contactFormEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "";

export const company = {
  name: "Chiptek",
  legalName: "", // REVIEW BEFORE LAUNCH: add the registered legal entity name if it differs from "Chiptek"
  tagline: "Practical intelligence. Reliable engineering.",
  descriptor: "SOFTWARE · DATA · AI",

  primaryContact: {
    firstName: "Vinesh",
    lastName: "Kakarla",
    fullName: "Vinesh Kakarla",
    // REVIEW BEFORE LAUNCH: no title has been supplied. Do not invent one
    // (founder/CEO/director/etc). Leave blank until a real role is provided.
    role: ""
  },

  phone: {
    display: "+1 (530) 608-2736",
    href: "tel:+15306082736"
  },

  email: {
    // REVIEW BEFORE LAUNCH: no real email address has been supplied yet.
    // Leave blank rather than fabricating one — the UI hides email affordances
    // when this is empty.
    display: email,
    href: email ? `mailto:${email}` : ""
  },

  address: {
    street: "4725 Alexandria Ave",
    city: "Cumming",
    region: "GA",
    postalCode: "30040",
    country: "United States",
    fullDisplay: "4725 Alexandria Ave, Cumming, GA 30040, United States",
    cityDisplay: "Cumming, Georgia, United States"
  },

  // "full" shows the complete street address, "city-only" shows city/state/country
  // only, "hidden" shows no location at all. Never expose the full street
  // address in markup, structured data, metadata, or map links unless this is "full".
  addressVisibility,

  // Do not add a map embed or map link unless this is explicitly true.
  showMapLink,

  // REVIEW BEFORE LAUNCH: add once available.
  linkedInUrl,

  // REVIEW BEFORE LAUNCH: set the final production domain (no trailing slash).
  siteUrl,

  // REVIEW BEFORE LAUNCH: point this at a real form-handling endpoint.
  // When empty, the contact form explains that online submission isn't
  // configured yet instead of faking a success state.
  contactFormEndpoint,

  timeZone: "America/New_York"
};

// Helper used anywhere the visible location string is needed, respecting
// the configured visibility level.
export function getVisibleLocation() {
  if (company.addressVisibility === "full") return company.address.fullDisplay;
  if (company.addressVisibility === "city-only") return company.address.cityDisplay;
  return null; // "hidden"
}

export function getStructuredDataAddress() {
  // Only ever included in JSON-LD when visibility is explicitly "full".
  if (company.addressVisibility !== "full") return null;
  return {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: "US"
  };
}
