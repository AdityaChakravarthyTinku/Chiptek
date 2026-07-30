// Data-driven service catalog. Both the homepage service cards and the
// single reusable ServiceDetailPage read from this file — there is
// intentionally no per-service page component.

export const services = [
  {
    slug: "software-engineering",
    icon: "Code2",
    eyebrow: "CUSTOM SOFTWARE ENGINEERING",
    title: "Custom Software Engineering",
    summary:
      "Design and development of dependable web applications, business platforms, APIs, integrations, and internal software.",
    description:
      "Chiptek designs and builds custom software around a defined business requirement rather than a generic template. That includes web applications, internal tools, APIs, and the integrations that connect them to the systems an organization already relies on. The focus stays on architecture that is easy to reason about, code that a future team can maintain, and delivery that keeps pace with real priorities.",
    capabilities: [
      "Application architecture",
      "Frontend development",
      "Backend and API development",
      "System modernization",
      "Integration engineering"
    ],
    typicalEngagements: [
      "Building an internal operations platform",
      "Modernizing a legacy business application",
      "Integrating a model into an existing application"
    ],
    outcomes: [
      "A maintainable codebase future engineers can extend",
      "Cleaner integration between existing systems",
      "A clear architecture that matches real usage patterns"
    ],
    roles: ["Software Development Engineer", "Full-Stack Developer", "Programmer or Business Systems Analyst"],
    related: ["python-automation", "data-engineering"],
    metaTitle: "Custom Software Engineering | Chiptek",
    metaDescription:
      "Chiptek designs and develops dependable web applications, business platforms, APIs, and integrations built around defined requirements."
  },
  {
    slug: "data-engineering",
    icon: "Database",
    eyebrow: "DATA ENGINEERING",
    title: "Data Engineering",
    summary:
      "Data pipelines, processing workflows, integrations, and platform foundations built for reliable analytical and operational use.",
    description:
      "Reliable analytics and machine learning depend on a solid data foundation. Chiptek builds the pipelines, integration layers, and warehousing structures that move data between systems accurately, consistently, and with attention to data quality, so that downstream analysis and applications can be trusted.",
    capabilities: ["Data pipelines", "ETL and ELT workflows", "Data integration", "Data quality", "Warehousing foundations"],
    typicalEngagements: [
      "Creating a governed data-processing workflow",
      "Consolidating data from multiple operational systems",
      "Rebuilding a fragile or manual reporting pipeline"
    ],
    outcomes: [
      "Consistent, trustworthy data available where it's needed",
      "Reduced manual effort in moving and reconciling data",
      "A foundation that supports future analytics and ML work"
    ],
    roles: ["Data Engineer", "Programmer or Business Systems Analyst"],
    related: ["data-science-analytics", "ai-ml-engineering"],
    metaTitle: "Data Engineering | Chiptek",
    metaDescription:
      "Chiptek builds data pipelines, integrations, and platform foundations designed for reliable analytical and operational use."
  },
  {
    slug: "data-science-analytics",
    icon: "LineChart",
    eyebrow: "DATA SCIENCE AND ANALYTICS",
    title: "Data Science and Analytics",
    summary:
      "Statistical analysis, analytical workflows, forecasting, and reporting systems that support informed decisions.",
    description:
      "Chiptek applies statistical and analytical methods to help organizations understand their data and act on it with confidence. This spans exploratory analysis, forecasting, and the reporting workflows that turn raw data into something a decision-maker can actually use.",
    capabilities: ["Exploratory analysis", "Statistical modeling", "Forecasting", "Decision-support analytics", "Reporting workflows"],
    typicalEngagements: [
      "Developing a forecasting or analysis system",
      "Building a recurring decision-support report",
      "Investigating a specific operational or business question"
    ],
    outcomes: [
      "Clearer visibility into trends driving a business question",
      "Forecasts grounded in the organization's own data",
      "Reporting that decision-makers can rely on"
    ],
    roles: ["Data Scientist", "Data Engineer"],
    related: ["data-engineering", "ai-ml-engineering"],
    metaTitle: "Data Science and Analytics | Chiptek",
    metaDescription:
      "Chiptek delivers statistical analysis, forecasting, and reporting systems that support informed, data-grounded decisions."
  },
  {
    slug: "ai-ml-engineering",
    icon: "Cpu",
    eyebrow: "AI AND MACHINE LEARNING ENGINEERING",
    title: "AI and Machine Learning Engineering",
    summary:
      "Practical machine learning and AI-enabled functionality designed around clearly defined workflows and use cases.",
    description:
      "Chiptek develops machine learning and AI-enabled functionality where it offers measurable value for a specific workflow, not as a default addition to every project. That includes developing and evaluating models, integrating them into existing software, and keeping people in control of sensitive or consequential decisions the workflow touches.",
    capabilities: ["Machine learning development", "Model evaluation", "Model integration", "AI-enabled applications", "Production ML workflows"],
    typicalEngagements: [
      "Integrating a model into an existing application",
      "Automating structured document or data processing",
      "Evaluating whether a machine learning approach fits a defined workflow"
    ],
    outcomes: [
      "AI functionality scoped to a workflow where it adds real value",
      "Model behavior that is evaluated before it reaches production",
      "Human oversight retained for sensitive decisions"
    ],
    roles: ["Machine Learning Engineer", "AI/ML Engineer"],
    related: ["python-automation", "data-science-analytics"],
    metaTitle: "AI and Machine Learning Engineering | Chiptek",
    metaDescription:
      "Chiptek develops practical machine learning and AI-enabled functionality designed around clearly defined workflows and use cases."
  },
  {
    slug: "python-automation",
    icon: "Workflow",
    eyebrow: "PYTHON AND INTELLIGENT AUTOMATION",
    title: "Python and Intelligent Automation",
    summary:
      "Python applications, integrations, and workflow automation that reduce repetitive effort and connect existing systems.",
    description:
      "Chiptek builds Python applications and automation that remove repetitive manual work and connect systems that would otherwise require people to bridge the gap by hand. This includes internal productivity tools, API integrations, and data automation scoped to a specific operational workflow.",
    capabilities: ["Python applications", "Process automation", "API integration", "Data automation", "Internal productivity tools"],
    typicalEngagements: [
      "Automating structured document or data processing",
      "Modernizing a legacy business application",
      "Connecting two systems that currently require manual data entry"
    ],
    outcomes: [
      "Less manual, repetitive operational work",
      "Systems that stay in sync without manual intervention",
      "Internal tools scoped to how the team actually works"
    ],
    roles: ["Python Developer", "Software Development Engineer"],
    related: ["software-engineering", "ai-ml-engineering"],
    metaTitle: "Python and Intelligent Automation | Chiptek",
    metaDescription:
      "Chiptek builds Python applications, integrations, and workflow automation that reduce repetitive effort and connect existing systems."
  },
  {
    slug: "technology-talent",
    icon: "Users",
    eyebrow: "TECHNOLOGY TALENT SOLUTIONS",
    title: "Technology Talent Solutions",
    summary:
      "Flexible access to focused software, data, and AI professionals for project delivery and team extension.",
    description:
      "Chiptek provides flexible access to focused technical professionals so organizations can staff a specific project or extend an existing team without a lengthy hiring cycle. Specialists are aligned to the role and workflow a project actually needs.",
    capabilities: ["Contract specialists", "Project-based teams", "Technical role alignment", "Specialist screening", "Delivery support"],
    typicalEngagements: [
      "Extending an internal team for a defined project",
      "Staffing a specific technical role for a fixed engagement",
      "Bringing in specialist capacity during a system modernization"
    ],
    outcomes: [
      "Faster access to a specific technical skill set",
      "Delivery capacity aligned to project scope",
      "Specialists who integrate with an existing team's workflow"
    ],
    roles: [
      "Software Development Engineer",
      "Full-Stack Developer",
      "Python Developer",
      "Data Engineer",
      "Data Scientist",
      "Machine Learning Engineer",
      "AI/ML Engineer",
      "Programmer or Business Systems Analyst"
    ],
    related: ["software-engineering", "ai-ml-engineering"],
    metaTitle: "Technology Talent Solutions | Chiptek",
    metaDescription:
      "Chiptek provides flexible access to focused software, data, and AI professionals for project delivery and team extension."
  }
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
