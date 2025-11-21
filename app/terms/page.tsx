import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Silikon Networks Terms & Conditions — use policy for website & services.",
};

export default function TermsPage() {
  return (
    <div className="sn-page-content">
      <section className="sn-section">
        <div className="sn-container">
          <h1>Terms & Conditions</h1>
          <p className="sn-lead">Last updated: November 21, 2025</p>

          <div className="sn-legal-content">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website or our services, you accept and agree to be
                bound by the terms and conditions outlined below.
              </p>
            </section>

            <section>
              <h2>2. Use of Website</h2>
              <p>You agree to use this website only for lawful purposes and in a way that:</p>
              <ul>
                <li>Does not infringe the rights of others</li>
                <li>Does not restrict or inhibit anyone else's use of the website</li>
                <li>Complies with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2>3. Services</h2>
              <p>
                Silikon Networks provides mobility, energy, trade, and software services. Service
                terms, deliverables, and pricing are subject to separate agreements.
              </p>
            </section>

            <section>
              <h2>4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, is the
                property of Silikon Networks and is protected by copyright and other intellectual
                property laws.
              </p>
            </section>

            <section>
              <h2>5. Limitations of Liability</h2>
              <p>
                To the fullest extent permitted by law, Silikon Networks shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out of your
                use of this website or our services.
              </p>
            </section>

            <section>
              <h2>6. Deliverable Acceptance</h2>
              <p>
                Client acceptance of deliverables is subject to the terms specified in individual
                service agreements. Acceptance criteria and timelines will be agreed upon prior to
                project commencement.
              </p>
            </section>

            <section>
              <h2>7. Payment Terms</h2>
              <p>
                Payment terms, schedules, and methods are specified in individual service agreements
                or invoices. Late payments may incur fees as specified in the agreement.
              </p>
            </section>

            <section>
              <h2>8. Dispute Resolution</h2>
              <p>
                Any disputes arising from these terms or our services shall be resolved through
                negotiation, mediation, or arbitration as specified in individual service agreements
                or applicable law.
              </p>
            </section>

            <section>
              <h2>9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our website or services at
                our sole discretion, without prior notice, for conduct that we believe violates
                these terms or is harmful to other users or our business.
              </p>
            </section>

            <section>
              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the
                website or services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2>11. Contact</h2>
              <p>
                For questions about these terms, please contact us at{" "}
                <a href="mailto:legal@silikonnetworks.com">legal@silikonnetworks.com</a>.
              </p>
            </section>
          </div>
{/* 
          <p className="sn-legal-note">
            <strong>Note:</strong> These terms must be reviewed by a lawyer for compliance with
            local laws (GDPR, CCPA, etc.).
          </p> */}
        </div>
      </section>
    </div>
  );
}

