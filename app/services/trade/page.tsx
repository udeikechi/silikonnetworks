import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global Trade & Supply Chain",
  description:
    "Importation and exportation of raw materials, freight forwarding, customs clearance, and supply chain coordination — reliable global sourcing.",
};

export default function TradeServicesPage() {
  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero">
        <div className="sn-container">
          <h1>Seamless global trade, simplified.</h1>
          <p className="sn-lead">
            From supplier sourcing to customs clearance — we move raw materials worldwide with compliance and cost-efficiency.
          </p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Core Services</h2>
          <div className="sn-feature-grid">
            <div className="sn-feature-item">
              <h3>Importation of Raw Materials</h3>
              <p>Supplier vetting, procurement, quality control, sample validation.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Export Services</h3>
              <p>Market research, buyer matching, export compliance.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Freight Forwarding & Logistics</h3>
              <p>Sea, air, road — full documentation handling, incoterms expertise.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Customs Clearance & Brokerage</h3>
              <p>HS classification, duty optimization, local regulatory compliance.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Warehousing & Distribution</h3>
              <p>Inventory management, order fulfilment, consolidation (if applicable).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sn-section sn-section--light">
        <div className="sn-container">
          <h2>Value Proposition</h2>
          <ul className="sn-feature-list">
            <li>End-to-end documentation handled</li>
            <li>Global partner network and carriers</li>
            <li>Transparent pricing and tracking</li>
          </ul>
        </div>
      </section>

      {/* <section className="sn-section">
        <div className="sn-container">
          <h2>Case Study</h2>
          <div className="sn-case-teaser">
            <p>
              Sourced & imported construction-grade steel for [Client] — saved [X%] on landed cost.
            </p>
            <Link href="/projects" className="sn-btn sn-btn--outline">
              View Full Case Study →
            </Link>
          </div>
        </div>
      </section> */}

      <section className="sn-section sn-section--cta">
        <div className="sn-container">
          <h2>Ready to streamline your trade operations?</h2>
          <Link href="/contact" className="sn-btn sn-btn--primary">
            Get a Trade Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

