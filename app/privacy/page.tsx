import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Silikon Networks Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="sn-page-content">
      <section className="sn-section">
        <div className="sn-container">
          <h1>Privacy Policy</h1>
          <p className="sn-lead">Last updated: November 21, 2025</p>

          <div className="sn-legal-content">
            <section>
              <h2>1. Introduction</h2>
              <p>
                Silikon Networks ("we", "our", or "us") respects your privacy and is committed to
                protecting your personal data. This privacy policy explains how we collect, use, and
                safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2>2. Data We Collect</h2>
              <p>We may collect the following types of personal data:</p>
              <ul>
                <li>Name and contact information (email, phone, address)</li>
                <li>Company information</li>
                <li>Information provided in contact forms or correspondence</li>
                <li>Website usage data through cookies and similar technologies</li>
                <li>Any other information you voluntarily provide</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Data</h2>
              <p>We use your personal data for the following purposes:</p>
              <ul>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To deliver our services and fulfill contracts</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2>4. Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience. For more information, see our{" "}
                <Link href="/cookies">Cookie Policy</Link>.
              </p>
            </section>

            <section>
              <h2>5. Third-Party Services</h2>
              <p>
                We may share your data with trusted third-party service providers who assist us in
                operating our website and providing services. These providers are bound by
                confidentiality agreements.
              </p>
            </section>

            <section>
              <h2>6. Data Retention</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes
                outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2>7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li>Right to access your personal data</li>
                <li>Right to rectify inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2>8. Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your
                personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2>9. Contact Us</h2>
              <p>
                If you have questions about this privacy policy or wish to exercise your rights,
                please contact us at{" "}
                <a href="mailto:privacy@silikonnetworks.com">privacy@silikonnetworks.com</a>.
              </p>
            </section>

            <section>
              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any
                significant changes by posting the new policy on this page.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

