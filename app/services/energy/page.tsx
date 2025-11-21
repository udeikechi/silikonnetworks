import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Energy & Power Solutions",
  description:
    "Commercial and residential solar installations, hybrid backup systems and monitoring — engineered for reliability and ROI.",
};

export default function EnergyServicesPage() {
  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero">
        <div className="sn-container">
          <h1>Reliable power, responsibly delivered.</h1>
          <p className="sn-lead">
            End-to-end solar systems and uninterrupted power solutions for homes and enterprise.
          </p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Services & Offerings</h2>
          <div className="sn-feature-grid">
            <div className="sn-feature-item">
              <h3>Solar PV Systems</h3>
              <p>Residential & commercial design, procurement, installation, and commissioning.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Hybrid Solar + Storage Solutions</h3>
              <p>Batteries, inverters, PV + grid integration for peak shaving and resilience.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Uninterrupted Power Supply (UPS) & Backup</h3>
              <p>On-site UPS, generator integration, auto-transfer switch (ATS).</p>
            </div>
            <div className="sn-feature-item">
              <h3>Maintenance & Monitoring</h3>
              <p>Remote monitoring, preventive maintenance, warranties & service contracts.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Energy Audits & Feasibility Studies</h3>
              <p>ROI modelling, shading analysis, load profiling, payback calculations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sn-section sn-section--light">
        <div className="sn-container">
          <h2>Technical Specs</h2>
          <ul className="sn-feature-list">
            <li>Panels: Tier 1 brands (specs to be provided)</li>
            <li>Inverters: Grid-tied, hybrid options</li>
            <li>Monitoring: 24/7 telemetry, alerting, performance dashboards</li>
          </ul>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Benefits</h2>
          <ul className="sn-feature-list">
            <li>Lower energy costs & improved uptime</li>
            <li>Regulatory and tax incentives handled (by region)</li>
            <li>Scalable for corporate campuses, SMEs and remote sites</li>
          </ul>
        </div>
      </section>

      {/* <section className="sn-section">
        <div className="sn-container">
          <h2>Case Study</h2>
          <div className="sn-case-teaser">
            <p>
              500 kW rooftop + storage for industrial park — reduced outage costs by [X%].
            </p>
            <Link href="/projects" className="sn-btn sn-btn--outline">
              View Full Case Study →
            </Link>
          </div>
        </div>
      </section> */}

      <section className="sn-section sn-section--cta">
        <div className="sn-container">
          <h2>Ready to explore energy solutions?</h2>
          <Link href="/contact" className="sn-btn sn-btn--primary">
            Request a Site Survey
          </Link>
        </div>
      </section>
    </div>
  );
}

