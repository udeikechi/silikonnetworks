import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Innovating Mobility — Coming Soon",
  description:
    "Silikon Networks is quietly working on something transformative. A new digital product designed to redefine how people move across cities.",
};

export default function MobilityComingSoonPage() {
  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero sn-coming-soon-hero">
        <div className="sn-container sn-container--centered">
          <div className="sn-coming-soon-badge">Launching Soon</div>
          <h1>Innovating Mobility — Coming Soon</h1>
          <p className="sn-lead">
            Silikon Networks is quietly working on something transformative.
          </p>
          <p className="sn-coming-soon-subtitle">
            A new digital product designed to redefine how people move across cities.
          </p>
        </div>
      </section>

      <section className="sn-section sn-section--light">
        <div className="sn-container">
          <div className="sn-coming-soon-content">
            <div className="sn-coming-soon-visual">
              <div className="sn-phone-mockup">
                <div className="sn-phone-frame">
                  <div className="sn-phone-screen-blur">
                    <div className="sn-phone-icon">🚗</div>
                  </div>
                </div>
              </div>
              <div className="sn-map-pin-icon">📍</div>
            </div>

            <div className="sn-coming-soon-features">
              <h2>Built with:</h2>
              <ul className="sn-feature-list sn-feature-list--large">
                <li>Intelligent routing</li>
                <li>Fast and secure matching</li>
                <li>Driver-friendly tools</li>
                <li>A clean, modern experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container sn-container--centered">
          <div className="sn-coming-soon-message">
            <p className="sn-lead">
              We're not revealing the name yet — but trust us, mobility is about to get smarter.
            </p>
            <p>Stay tuned.</p>
          </div>
        </div>
      </section>

      <section className="sn-section sn-section--cta">
        <div className="sn-container sn-container--centered">
          <h2>Want to be first to know?</h2>
          <Link href="/contact" className="sn-btn sn-btn--primary">
            Get Notified
          </Link>
        </div>
      </section>
    </div>
  );
}

