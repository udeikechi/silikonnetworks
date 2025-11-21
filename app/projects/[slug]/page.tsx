import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Placeholder case study data - replace with CMS or database
const caseStudies: Record<string, any> = {
  "solar-installation": {
    title: "15 kW Rooftop Solar + Storage",
    division: "Energy",
    client: "Jovit Supermarket and Shopping Mall, Ikenegbu, Owerri, Imo State",
    overview: "Industrial park solar installation with battery storage system.",
    challenge: "Frequent power outages impacting operations and costs.",
    solution: "Hybrid solar PV system with battery storage and grid integration for uninterrupted power.",
    timeline: "4 months",
    outcomes: [
      "60% reduction in outage costs",
      "500 kW peak generation capacity",
      "24/7 monitoring and maintenance",
      "ROI achieved in 4.5 years",
    ],
    kpis: "60% reduction in outage costs",
  },

  "trade-steel": {
    title: "Construction Steel Importation",
    division: "Trade",
    client: "[Client Name]",
    overview: "Large-scale importation of construction-grade steel for infrastructure project.",
    challenge: "High landed costs, complex customs clearance, and delivery timeline constraints.",
    solution: "End-to-end trade management with supplier vetting, optimized logistics, and customs brokerage.",
    timeline: "3 months",
    outcomes: [
      "25% reduction in landed costs",
      "On-time delivery for all shipments",
      "Full compliance with local regulations",
      "Transparent tracking throughout supply chain",
    ],
    kpis: "25% cost savings",
  },

  "hotel-occupancy-monitoring": {
    title: "Hotel Occupancy Monitoring System",
    division: "Smart Infrastructure",
    client: "[Hotel Name]",
    overview: "Deployment of a real-time hotel occupancy and energy monitoring system across guest rooms using PIR sensors, Zigbee hubs, and cloud dashboards.",
    challenge: "High energy usage, lack of real-time room visibility, and operational inefficiencies in housekeeping and facility management.",
    solution: "Installation of PIR sensors, Zigbee hubs, energy monitoring modules, automated data syncing, alerts, and mobile/desktop dashboards for real-time room status tracking.",
    timeline: "8 weeks",
    outcomes: [
      "Up to 35% reduction in energy waste",
      "Real-time insight into room occupancy status",
      "Improved housekeeping efficiency",
      "Faster operational decision-making through live dashboards",
      "Scalable system supporting hundreds of IoT devices"
    ],
    kpis: "35% energy reduction, operational efficiency improvements",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: study.title,
    description: `${study.title} — ${study.overview}`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero">
        <div className="sn-container">
          <Link href="/projects" className="sn-link-back">
            ← Back to Projects
          </Link>
          <span className="sn-case-badge">{study.division}</span>
          <h1>{study.title}</h1>
          <p className="sn-lead">Client: {study.client}</p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Overview</h2>
          <p>{study.overview}</p>
        </div>
      </section>

      <section className="sn-section sn-section--light">
        <div className="sn-container">
          <h2>Challenge</h2>
          <p>{study.challenge}</p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Solution</h2>
          <p>{study.solution}</p>
        </div>
      </section>

      <section className="sn-section sn-section--light">
        <div className="sn-container">
          <h2>Implementation Timeline</h2>
          <p>{study.timeline}</p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Outcomes & KPIs</h2>
          <ul className="sn-feature-list">
            {study.outcomes.map((outcome: string, idx: number) => (
              <li key={idx}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sn-section sn-section--cta">
        <div className="sn-container">
          <h2>Ready to start your project?</h2>
          <Link href="/contact" className="sn-btn sn-btn--primary">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

