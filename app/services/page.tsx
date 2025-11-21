import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our Energy, Trade, and Technology services — scalable solutions for businesses and communities.",
};

export default function ServicesPage() {
  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero">
        <div className="sn-container">
          <h1>Our Services</h1>
          <p className="sn-lead">
            We build integrated products and operations across three core divisions. Each division is staffed with domain experts and engineers to deliver results.
          </p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <div className="sn-services-grid">
            <div className="sn-service-card">
              <h2>Energy & Power</h2>
              <p>
                Commercial and residential solar installations, hybrid backup systems and monitoring. Engineered for reliability and ROI, from design to commissioning.
              </p>
              <Link href="/services/energy" className="sn-btn sn-btn--link">
                Learn more →
              </Link>
            </div>

            <div className="sn-service-card">
              <h2>Global Trade & Supply Chain</h2>
              <p>
                Importation and exportation of raw materials, freight forwarding, customs clearance, and supply chain coordination. Reliable global sourcing with compliance.
              </p>
              <Link href="/services/trade" className="sn-btn sn-btn--link">
                Learn more →
              </Link>
            </div>

            <div className="sn-service-card">
              <h2>Technology & Software</h2>
              <p>
                Custom mobile and web applications, cloud engineering, product design and enterprise integrations. From MVP to production with strong UX and secure architecture.
              </p>
              <Link href="/services/software" className="sn-btn sn-btn--link">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="sn-section sn-section--dark">
        <div className="sn-container">
          <h2>Why choose Silikon Networks?</h2>
          <ul className="sn-feature-list">
            <li>Integrated stack across energy, trade and software</li>
            <li>Security & compliance built into every solution</li>
            <li>End-to-end delivery from concept to operations</li>
            <li>24/7 operations support and monitoring</li>
          </ul>
        </div>
      </section> */}
    </div>
  );
}

