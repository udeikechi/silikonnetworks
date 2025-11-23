import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Silikon Networks",
  description:
    "Learn about Silikon Networks — our mission, leadership, values and how we integrate technology with operations to deliver measurable outcomes.",
};

export default function AboutPage() {
  // Placeholder leadership - replace with real bios
  const leadership = [
    {
      name: "Dr. Anyadiegwu Chukwunweike F.",
      role: "Chief Executive Officer",
      bio: "Leading Silikon Networks' strategic vision and operations across all divisions.",
      photo: "https://i1.rgstatic.net/ii/profile.image/11431281172835492-1688663381985_Q128/Chukwunweike-Anyadiegwu.jpg",
    },
    {
      name: "Engr. Ude Ikechi A.",
      role: "Chief Technology Officer",
      bio: "Overseeing technology strategy, software development, and technical operations.",
      photo: "https://i1.rgstatic.net/ii/profile.image/663099363307520-1535106616996_Q128/Ikechi-Ude.jpg",
    },
    {
      name: "Engr. Ezumah Chukwu E.",
      role: "Head of Energy Division",
      bio: "Expert in solar systems, power solutions, and energy infrastructure.",
      photo: null,
    },
  ];

  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero">
        <div className="sn-container">
          <h1>About Silikon Networks</h1>
          <p className="sn-lead">
            Silikon Networks is a technology-first company delivering mobility, energy, trade and software solutions. We blend engineering, operations and product design to solve complex problems.
          </p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Mission</h2>
          <p className="sn-lead">
            To build intelligent networks that move people, power communities, and enable commerce.
          </p>
        </div>
      </section>

      <section className="sn-section sn-section--light">
        <div className="sn-container">
          <h2>Vision</h2>
          <p className="sn-lead">
            A resilient and connected world powered by trusted, scalable networks.
          </p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Core Values</h2>
          <ul className="sn-values-list">
            <li>Integrity</li>
            <li>Reliability</li>
            <li>Innovation</li>
            <li>Customer-centricity</li>
            <li>Safety</li>
          </ul>
        </div>
      </section>

      <section className="sn-section sn-section--light">
        <div className="sn-container">
          <h2>Leadership</h2>
          <div className="sn-leadership-grid">
            {leadership.map((leader, idx) => (
              <div key={idx} className="sn-leader-card">
                <div className="sn-leader-photo">
                  {leader.photo ? (
                    <img src={leader.photo} alt={leader.name} />
                  ) : (
                    <div className="sn-leader-placeholder">
                      {leader.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                </div>
                <h3>{leader.name}</h3>
                <p className="sn-leader-role">{leader.role}</p>
                <p>{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <h2>Offices & Footprint</h2>
          <p>Abuja, Lagos, Umuahia, Owerri, Enugu, Onitsha, Aba, Port Harcourt, Benin, Asaba, Ibadan, Ilorin, Kaduna, Kano, Katsina, Maiduguri, Minna, Jos, Lokoja, Makurdi, Ogbomoso, Oshogbo, Oyo, Portharcourt, Sokoto, Yola, Zaria, Zungeru</p>
        </div>
      </section>

      {/* <section className="sn-section sn-section--light">
        <div className="sn-container">
          <h2>Timeline / Milestones</h2>
          <ul className="sn-feature-list">
            <li>Founding date: [Year]</li>
            <li>Major launches: [To be filled]</li>
          </ul>
        </div>
      </section> */}

      <section className="sn-section sn-section--cta">
        <div className="sn-container">
          <h2>Partner with us</h2>
          <Link href="/contact" className="sn-btn sn-btn--primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

