import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Selected projects across mobility, energy, trade and software — detailed outcomes and technical approaches.",
};

export default function ProjectsPage() {
  // Placeholder projects - replace with real data
  const projects = [
    {
      id: "hotel-occupancy-monitoring",
      title: "Hotel Occupancy Monitoring System",
      division: "Smart Infrastructure",
      summary: "Real-time hotel occupancy and energy monitoring system reducing energy waste by up to 35%",
      kpi: "35% reduction in energy waste",
      link: "/projects/hotel-occupancy-monitoring",
    },    
    {
      id: "solar-installation",
      title: "15 kW Rooftop Solar + Storage",
      division: "Energy",
      summary: "Industrial park solar installation with battery storage, reducing outage costs by 60%",
      kpi: "60% reduction in outage costs",
      link: "/projects/solar-installation",
    },
    {
      id: "trade-steel",
      title: "Construction Steel Importation",
      division: "Trade",
      summary: "Sourced and imported construction-grade steel, saving client 25% on landed costs",
      kpi: "25% cost savings",
      link: "/projects/trade-steel",
    },
  ];

  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero">
        <div className="sn-container">
          <h1>Projects & Case Studies</h1>
          <p className="sn-lead">
            Real-world projects that demonstrate our multi-disciplinary capabilities.
          </p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <div className="sn-projects-grid">
            {projects.map((project) => (
              <article key={project.id} className="sn-case-card">
                <div className="sn-case-card-image">
                  <div className="sn-case-card-placeholder">
                    {project.division[0]}
                  </div>
                </div>
                <div className="sn-case-card-content">
                  <span className="sn-case-card-division">{project.division}</span>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <div className="sn-case-card-kpi">
                    <strong>Result:</strong> {project.kpi}
                  </div>
                  <Link href={project.link} className="sn-btn sn-btn--link">
                    View Full Case Study →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="sn-empty-state">
              <h2>No projects yet</h2>
              <p>We're working on uploading our case studies. Contact us to request project details.</p>
              <Link href="/contact" className="sn-btn sn-btn--primary">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

