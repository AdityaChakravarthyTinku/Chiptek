// Static, editable configuration for the "Start with the requirement"
// interactive navigator. No AI/chatbot logic — a visitor picks a business
// need and this file supplies the mapped services, roles, and starting point.

export const solutionPaths = [
  {
    id: "build-product",
    label: "Build a software product",
    services: ["Custom Software Engineering", "Full-Stack Developer", "Software Development Engineer", "Programmer Analyst"],
    startingPoint:
      "Start by clarifying the core user workflow and the architecture that supports it, then scope an initial build.",
    serviceSlug: "software-engineering"
  },
  {
    id: "modernize-system",
    label: "Modernize an existing system",
    services: ["Custom Software Engineering", "Python and Intelligent Automation", "Data Engineering"],
    startingPoint:
      "Start with an assessment of the current system's constraints and data flows before planning a modernization path.",
    serviceSlug: "software-engineering"
  },
  {
    id: "improve-data",
    label: "Improve data foundations",
    services: ["Data Engineering", "Data Science and Analytics", "Data Engineer", "Data Scientist"],
    startingPoint:
      "Start by mapping current data sources and quality gaps, then prioritize the pipelines that matter most.",
    serviceSlug: "data-engineering"
  },
  {
    id: "apply-ai",
    label: "Apply AI to a defined workflow",
    services: ["AI and Machine Learning Engineering", "Python and Intelligent Automation", "AI/ML Engineer", "Machine Learning Engineer"],
    startingPoint:
      "Start by defining the specific workflow and the outcome AI should support, then evaluate whether it's a good fit.",
    serviceSlug: "ai-ml-engineering"
  },
  {
    id: "extend-team",
    label: "Extend a technical team",
    services: ["Technology Talent Solutions", "Relevant role categories based on selection"],
    startingPoint:
      "Start by defining the role and scope needed, then align a specialist to the project's delivery timeline.",
    serviceSlug: "technology-talent"
  }
];

// This tool offers static, pre-configured suggestions only. It does not
// generate an automated business assessment and its output should not be
// treated as professional consulting advice.
export const solutionNavigatorDisclaimer =
  "These are pre-configured starting points, not an automated assessment — use them as a conversation starter with Chiptek.";
