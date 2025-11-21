import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobility Services",
  description:
    "Custom ride-hailing platforms, fleet management and corporate transport solutions — secure, scalable, and optimized for market realities.",
};

export default function MobilityServicesPage() {
  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero">
        <div className="sn-container">
          <h1>Mobility that moves people and business</h1>
          <p className="sn-lead">
            From rider apps to fleet telematics — we design mobility systems built to scale.
          </p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Key Features</h2>
          <div className="sn-feature-grid">
            <div className="sn-feature-item">
              <h3>Ride-Hailing Platform</h3>
              <p>Rider & driver apps with onboarding flows, KYC, surge pricing, multi-wallet, and in-app payments.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Fleet Management & Telematics</h3>
              <p>Real-time tracking, maintenance scheduling, fuel & cost analytics.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Corporate Transport Solutions</h3>
              <p>Shuttle services, employee pickup/drop scheduling, SLA reporting.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Safety & Compliance</h3>
              <p>Driver background checks, in-app SOS, incident logging & reporting.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Integration & APIs</h3>
              <p>Dispatch API, payments, analytics, integrations with third-party systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sn-section sn-section--light">
        <div className="sn-container">
          <h2>Outcomes & Benefits</h2>
          <ul className="sn-feature-list">
            <li>Reduce downtime & idle miles</li>
            <li>Improve driver retention & rider NPS</li>
            <li>Scalable architecture for growing cities or enterprises</li>
          </ul>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Case Study</h2>
          <div className="sn-case-teaser">
            <p>
              National rollout of ride-hailing platform for [Client] — [result: x% reduction in wait time]
            </p>
            <Link href="/projects" className="sn-btn sn-btn--outline">
              View Full Case Study →
            </Link>
          </div>
        </div>
      </section>

      <section className="sn-section sn-section--cta">
        <div className="sn-container">
          <h2>Ready to transform your mobility operations?</h2>
          <Link href="/contact" className="sn-btn sn-btn--primary">
            Request a Mobility Audit
          </Link>
        </div>
      </section>
    </div>
  );
}

