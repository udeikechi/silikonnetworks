export default function Home() {
  return (
    <>
      {/* Hero - Full width, outside container */}
      <section className="sn-hero sn-hero--video" aria-labelledby="home-hero-heading">
        <div className="sn-hero-video-bg">
          <img 
            src="/silikon_hero_video.gif" 
            alt="" 
            className="sn-hero-video"
            aria-hidden="true"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={{ 
              WebkitAnimationPlayState: "running",
              animationPlayState: "running"
            }}
          />
          <div className="sn-hero-video-overlay"></div>
        </div>
        <div className="sn-hero-content">
          <p className="sn-hero-kicker">Energy • Trade • Software</p>
          <h1 id="home-hero-heading" className="sn-hero-title">
            Technology That Moves, Powers, and Connects the World.
          </h1>
          {/* <p className="sn-hero-subtitle">
            Energy. Trade. Software — built with scale, security and impact in mind.
            From commercial solar and global logistics to custom applications, we design systems
            that keep power and commerce moving.
          </p> */}

          <div className="sn-hero-actions">
            <a href="/services" className="sn-btn sn-btn--lg">
              Explore Our Services <span className="sn-btn-icon">↗</span>
            </a>
            <a href="/contact" className="sn-btn sn-btn--outline sn-btn--lg">
              Contact
            </a>
          </div>

          <div className="sn-hero-meta">
            <span>
              <strong>3 core divisions</strong> — one integrated network
            </span>
            <span>Solar &amp; UPS • Global trade • Custom software</span>
          </div>
          <div className="sn-hero-badge-row">
            <span className="sn-hero-badge">End-to-end delivery</span>
            <span className="sn-hero-badge">Security &amp; compliance</span>
            <span className="sn-hero-badge">24/7 operations</span>
          </div>
        </div>
      </section>

      {/* Rest of content in container */}
      <main className="sn-page-inner">
        {/* What we do */}
        <section id="services" className="sn-section" aria-labelledby="home-services-heading">
        <div className="sn-section-header">
          <div>
            <p className="sn-section-kicker">What we do</p>
            <h2 id="home-services-heading" className="sn-section-title">
              Three core divisions. One integrated network.
            </h2>
          </div>
          <p className="sn-section-lead">
            Three business divisions, built to work together. Choose the service that matches your
            goals — or combine them for end-to-end delivery.
          </p>
        </div>

        <div className="sn-grid-4 sn-grid-4--responsive">
          <article className="sn-card">
            <p className="sn-card-eyebrow">Energy &amp; power</p>
            <h3 className="sn-card-title">Solar &amp; uninterrupted power</h3>
            <p className="sn-card-body">
              Engineer, install and maintain solar PV, hybrid storage and backup power systems that
              keep homes and facilities running — with clear ROI.
            </p>
            <a href="/services/energy" className="sn-card-link">
              Learn more <span>→</span>
            </a>
          </article>

          <article className="sn-card">
            <p className="sn-card-eyebrow">Global trade</p>
            <h3 className="sn-card-title">Import, export &amp; logistics</h3>
            <p className="sn-card-body">
              Source, move and clear raw materials globally. We manage supplier vetting, freight,
              documentation and customs so you can focus on demand.
            </p>
            <a href="/services/trade" className="sn-card-link">
              Learn more <span>→</span>
            </a>
          </article>

          <article className="sn-card">
            <p className="sn-card-eyebrow">Technology &amp; software</p>
            <h3 className="sn-card-title">Mobile, web &amp; cloud</h3>
            <p className="sn-card-body">
              Ship robust mobile and web applications, platform APIs and dashboards — with modern
              UX, secure architecture and production-ready operations.
            </p>
            <a href="/services/software" className="sn-card-link">
              Learn more <span>→</span>
            </a>
          </article>
        </div>
      </section>

      {/* Slogan / animated strip (word loop handled by a simple span swap later if needed) */}
      <section aria-label="Silikon Networks brand statement" className="sn-slogan-strip">
        <p className="sn-slogan-main">
          We Build The Networks That Power The Future.{" "}
          <span className="sn-slogan-loop">Move. Power. Connect. Grow.</span>
        </p>
        <p className="sn-slogan-support">
          End-to-end solutions from product to operations — trusted by industry and enterprise
          clients across mobility, power, trade and digital products.
        </p>
        <div className="sn-slogan-footer">
          <div className="sn-slogan-metadata">
            <span className="sn-slogan-tag">Discovery to operations</span>
            <span className="sn-slogan-tag">Security &amp; compliance-first</span>
          </div>
          <a href="/contact" className="sn-btn sn-btn--ghost">
            Start a Project
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="sn-section" aria-labelledby="home-process-heading">
        <div className="sn-section-header">
          <div>
            <p className="sn-section-kicker">How we work</p>
            <h2 id="home-process-heading" className="sn-section-title">
              Our process
            </h2>
          </div>
          <p className="sn-section-lead">
            A repeatable delivery approach that connects strategy, engineering and on-the-ground
            operations.
          </p>
        </div>

        <div className="sn-process">
          <article className="sn-process-step">
            <p className="sn-process-step-label">01 · Discover</p>
            <p className="sn-process-step-title">Understand the context</p>
            <p className="sn-process-step-body">
              We map your users, constraints, data and regulatory requirements to design the right
              solution.
            </p>
          </article>
          <article className="sn-process-step">
            <p className="sn-process-step-label">02 · Design</p>
            <p className="sn-process-step-title">Architecture &amp; UX</p>
            <p className="sn-process-step-body">
              We design user journeys, system architecture and technical plans across software and
              physical operations.
            </p>
          </article>
          <article className="sn-process-step">
            <p className="sn-process-step-label">03 · Deliver</p>
            <p className="sn-process-step-title">Launch &amp; commissioning</p>
            <p className="sn-process-step-body">
              We implement, integrate and roll out products and infrastructure with security and
              quality controls.
            </p>
          </article>
          <article className="sn-process-step">
            <p className="sn-process-step-label">04 · Operate</p>
            <p className="sn-process-step-title">Run &amp; improve</p>
            <p className="sn-process-step-body">
              We monitor performance, maintain systems and iterate as markets, loads and teams
              evolve.
            </p>
          </article>
        </div>
        <p className="sn-process-footer">
          Want to see it in action?{" "}
          <a href="/projects">View our projects and case studies.</a>
        </p>
      </section>

      {/* Industries & use cases */}
      <section className="sn-section" aria-labelledby="home-industries-heading">
        <div className="sn-section-header">
          <div>
            <p className="sn-section-kicker">Industries</p>
            <h2 id="home-industries-heading" className="sn-section-title">
              Powering mission-critical operations.
            </h2>
          </div>
          <p className="sn-section-lead">
            We build infrastructure-grade technology for organizations that depend on
            reliability, automation, and real-time intelligence—across physical and digital ecosystems.
          </p>
        </div>

        <div className="sn-pill-row">
          <span className="sn-pill">Hospitality &amp; smart buildings</span>
          <span className="sn-pill">Logistics &amp; retail distribution</span>
          <span className="sn-pill">Real estate &amp; construction</span>
          <span className="sn-pill">Utilities, energy &amp; microgrids</span>
          <span className="sn-pill">Fleet, mobility &amp; transportation</span>
          <span className="sn-pill">Digital product engineering</span>
        </div>
      </section>


      {/* Trust logos – placeholders */}
      {/* <section className="sn-section" aria-labelledby="home-trusted-heading">
        <div className="sn-section-header">
          <div>
            <p className="sn-section-kicker">Trust</p>
            <h2 id="home-trusted-heading" className="sn-section-title">
              Trusted by
            </h2>
          </div>
          <p className="sn-section-lead">
            Add your key clients and partners here — logos for fleets, developers and energy clients
            who rely on your systems.
          </p>
        </div>
        <div className="sn-shell-light">
          <p className="sn-text-muted" style={{ fontSize: "0.9rem" }}>
            Client logos placeholder — e.g. ride-hailing operators, industrial parks, construction
            firms, logistics companies and technology partners.
          </p>
        </div>
      </section> */}

      {/* Featured projects */}
      <section className="sn-section" aria-labelledby="home-projects-heading">
        <div className="sn-section-header">
          <div>
            <p className="sn-section-kicker">Projects</p>
            <h2 id="home-projects-heading" className="sn-section-title">
              Featured projects
            </h2>
          </div>
          <p className="sn-section-lead">
            Real-world deployments that connect mobility, power, trade and software into measurable
            outcomes.
          </p>
        </div>

        <div className="sn-grid-4 sn-grid-4--responsive">
          <article className="sn-card">
            <h3 className="sn-card-title">Industrial solar + storage</h3>
            <p className="sn-card-body">
              15 kW rooftop PV with storage for an industrial park — engineered to cut outage costs
              and stabilize critical operations.
            </p>
            <div className="sn-kpi-row">
              <span className="sn-kpi-tag">69% outage cost reduction</span>
              <span className="sn-kpi-tag">On-site monitoring</span>
            </div>
            <a href="/projects/solar-installation" className="sn-card-link">
              View case study <span>→</span>
            </a>
          </article>

          <article className="sn-card">
        <h3 className="sn-card-title">Hotel Occupancy Monitoring System</h3>
        <p className="sn-card-body">
          Smart IoT-based monitoring solution using PIR sensors, energy meters, and a cloud dashboard to
          track room occupancy, reduce energy waste, and improve operational efficiency for hotels.
        </p>
        <div className="sn-kpi-row">
          <span className="sn-kpi-tag">Real-time occupancy insights</span>
          <span className="sn-kpi-tag">35% reduction in energy waste</span>
        </div>
        <a href="/projects/hotel-occupancy-monitoring" className="sn-card-link">
          View case study <span>→</span>
        </a>
      </article>

        </div>
      </section>

      {/* Coming Soon - Mobility Product */}
      <section className="sn-section sn-section--dark sn-coming-soon-section" aria-labelledby="coming-soon-heading">
        <div className="sn-container">
          <div className="sn-coming-soon-teaser">
            <div className="sn-coming-soon-badge-small">Coming Soon</div>
            <h2 id="coming-soon-heading" className="sn-coming-soon-title">
              Innovating Mobility
            </h2>
            <p className="sn-coming-soon-lead">
              Silikon Networks is quietly working on something transformative.
            </p>
            <p className="sn-coming-soon-text">
              A new digital product designed to redefine how people move across cities.
            </p>
            <div className="sn-coming-soon-features-preview">
              <ul className="sn-feature-list sn-feature-list--inline">
                <li>Intelligent routing</li>
                <li>Fast and secure matching</li>
                <li>Driver-friendly tools</li>
                <li>A clean, modern experience</li>
              </ul>
            </div>
            <div className="sn-coming-soon-footer">
              <p>We're not revealing the name yet — but trust us, mobility is about to get smarter.</p>
              <div className="sn-coming-soon-actions">
                <a href="/mobility-coming-soon" className="sn-btn sn-btn--ghost">
                 More Info
                </a>
                <a href="/contact" className="sn-btn sn-btn--ghost">
                  Get Notified
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="sn-section" aria-label="Get in touch">
        <div className="sn-shell-light">
          <div className="sn-section-header" style={{ marginBottom: 12 }}>
            <h2 className="sn-section-title" style={{ fontSize: "1.3rem" }}>
              Ready to transform your operations?
            </h2>
            <p className="sn-section-lead">
              Share your goals across energy, trade or software — we'll help you define
              the right starting point.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a href="/contact" className="sn-btn">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
