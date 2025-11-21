import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at Silikon Networks",
  description:
    "Join Silikon Networks — engineers, product managers, energy technicians and operations personnel building large-scale systems.",
};

export default function CareersPage() {
  // Placeholder positions - replace with real data
  const openPositions = [
    {
      id: "senior-software-engineer",
      title: "Senior Software Engineer",
      team: "Technology",
      location: "Umuahia, Abia State, Nigeria",
      description: "Build scalable web and mobile applications using React, Next.js, and Node.js. Lead technical decisions and mentor junior developers.",
    },
    {
      id: "energy-technician",
      title: "Energy Technician",
      team: "Energy",
      location: "Umuahia, Abia State, Nigeria",
      description: "Install and maintain solar PV systems, conduct site surveys, and ensure compliance with safety standards.",
    },
    {
      id: "product-manager",
      title: "Product Manager",
      team: "Technology",
      location: "Umuahia, Abia State, Nigeria",
      description: "Define product roadmap, work with cross-functional teams, and drive product strategy for mobility and software products.",
    },
  ];

  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero">
        <div className="sn-container">
          <h1>Careers</h1>
          <p className="sn-lead">
            We hire people who are curious, accountable and collaborative. We offer competitive pay, flexible work options and opportunities to build impactful products.
          </p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Culture & Benefits</h2>
          <ul className="sn-feature-list">
            <li>Flexible working hours</li>
            <li>Health & welfare benefits (if applicable)</li>
            <li>Training and professional development</li>
            <li>Equity or bonus programs (if applicable)</li>
          </ul>
        </div>
      </section>

      <section className="sn-section sn-section--light">
        <div className="sn-container">
          <h2>Open Positions</h2>
          {openPositions.length > 0 ? (
            <div className="sn-jobs-list">
              {openPositions.map((job) => (
                <article key={job.id} className="sn-job-card">
                  <div className="sn-job-card-header">
                    <h3>{job.title}</h3>
                    <span className="sn-job-meta">
                      {job.team} • {job.location}
                    </span>
                  </div>
                  <p>{job.description}</p>
                  <Link href={`/careers/${job.id}`} className="sn-btn sn-btn--outline">
                    Apply Now
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="sn-empty-state">
              <p>No open positions at the moment. Check back soon or send us your resume.</p>
              <Link href="/contact" className="sn-btn sn-btn--primary">
                Submit General Application
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Internship Program</h2>
          <p>
            We offer internships for students and recent graduates. Gain real-world experience working on impactful projects.
          </p>
          <Link href="/contact" className="sn-btn sn-btn--outline">
            Apply for Internship
          </Link>
        </div>
      </section>
    </div>
  );
}

