import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology & Software Development",
  description:
    "Custom mobile and web applications, cloud engineering, product design and enterprise integrations — from MVP to production.",
};

export default function SoftwareServicesPage() {
  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero">
        <div className="sn-container">
          <h1>Build digital products that work in the real world.</h1>
          <p className="sn-lead">
            We design and deliver mobile & web applications with strong UX, secure architecture and operational reliability.
          </p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Offerings</h2>
          <div className="sn-feature-grid">
            <div className="sn-feature-item">
              <h3>Mobile App Development</h3>
              <p>iOS, Android, React Native — native and cross-platform solutions.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Web Application Development</h3>
              <p>React, Next.js, Node.js — scalable web platforms and APIs.</p>
            </div>
            <div className="sn-feature-item">
              <h3>UI / UX Design & Prototyping</h3>
              <p>User-centered design, wireframes, prototypes, design systems.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Cloud & API Integration</h3>
              <p>AWS, GCP, Azure — cloud infrastructure and third-party integrations.</p>
            </div>
            <div className="sn-feature-item">
              <h3>DevOps & CI/CD</h3>
              <p>Monitoring & observability, automated deployments, infrastructure as code.</p>
            </div>
            <div className="sn-feature-item">
              <h3>Product Maintenance & Support</h3>
              <p>Ongoing updates, bug fixes, performance optimization, feature enhancements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sn-section sn-section--light">
        <div className="sn-container">
          <h2>Typical Engagements</h2>
          <ul className="sn-feature-list">
            <li>MVP & Greenfield products</li>
            <li>App modernization & migration</li>
            <li>Embedded payment & mapping integrations</li>
            <li>SaaS products and enterprise portals</li>
          </ul>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Our Process</h2>
          <p>Sprint-based product delivery (Discovery → Design → Build → Operate). Security and data privacy baked into the SDLC.</p>
        </div>
      </section>

      {/* <section className="sn-section">
        <div className="sn-container">
          <h2>Portfolio</h2>
          <div className="sn-case-teaser">
            <p>
              Mobile platform for ride-hailing — 100k downloads and [X]% engagement
            </p>
            <Link href="/projects" className="sn-btn sn-btn--outline">
              View Case Study →
            </Link>
          </div>
        </div>
      </section> */}

      <section className="sn-section sn-section--cta">
        <div className="sn-container">
          <h2>Ready to build your next digital product?</h2>
          <Link href="/contact" className="sn-btn sn-btn--primary">
            Start a Software Project
          </Link>
        </div>
      </section>
    </div>
  );
}

