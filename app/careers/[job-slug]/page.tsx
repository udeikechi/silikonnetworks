import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Placeholder job data - replace with CMS or database
const jobs: Record<string, any> = {
  "senior-software-engineer": {
    title: "Senior Software Engineer",
    team: "Technology",
    location: "Umuahia, Abia State, Nigeria",
    type: "Full-time",
    description: "Build scalable web and mobile applications using React, Next.js, and Node.js. Lead technical decisions and mentor junior developers.",
    requirements: [
      "5+ years of software development experience",
      "Strong proficiency in React, Next.js, and Node.js",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Experience leading technical projects",
      "Strong communication and mentorship skills",
    ],
  },
  "energy-technician": {
    title: "Energy Technician",
    team: "Energy",
    location: "Umuahia, Abia State, Nigeria",
    type: "Full-time",
    description: "Install and maintain solar PV systems, conduct site surveys, and ensure compliance with safety standards.",
    requirements: [
      "3+ years of experience in solar installation",
      "Certification in electrical work",
      "Knowledge of solar PV systems and battery storage",
      "Strong attention to safety protocols",
      "Ability to work in field conditions",
    ],
  },
  "product-manager": {
    title: "Product Manager",
    team: "Technology",
    location: "Umuahia, Abia State, Nigeria",
    type: "Full-time",
    description: "Define product roadmap, work with cross-functional teams, and drive product strategy for mobility and software products.",
    requirements: [
      "3+ years of product management experience",
      "Experience with agile development methodologies",
      "Strong analytical and communication skills",
      "Experience in mobility or software products preferred",
      "Bachelor's degree in related field",
    ],
  },
};

type Props = {
  params: Promise<{ "job-slug": string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { "job-slug": slug } = await params;
  const job = jobs[slug];

  if (!job) {
    return { title: "Job Not Found" };
  }

  return {
    title: `${job.title} | Careers`,
    description: job.description,
  };
}

export default async function JobPage({ params }: Props) {
  const { "job-slug": slug } = await params;
  const job = jobs[slug];

  if (!job) {
    notFound();
  }

  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero">
        <div className="sn-container">
          <Link href="/careers" className="sn-link-back">
            ← Back to Careers
          </Link>
          <h1>{job.title}</h1>
          <p className="sn-lead">
            {job.team} • {job.location} • {job.type}
          </p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Description</h2>
          <p>{job.description}</p>
        </div>
      </section>

      <section className="sn-section sn-section--light">
        <div className="sn-container">
          <h2>Requirements</h2>
          <ul className="sn-feature-list">
            {job.requirements.map((req: string, idx: number) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sn-section sn-section--cta">
        <div className="sn-container">
          <h2>Ready to apply?</h2>
          <p>Send your resume and cover letter to careers@silikonnetworks.com</p>
          <Link href="/contact" className="sn-btn sn-btn--primary">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

