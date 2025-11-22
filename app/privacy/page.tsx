import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Silikon Networks",
  description:
    "Silikon Networks Privacy Policy: how we collect, use, store, and protect your personal data, including OTP and phone number handling.",
};

export default function PrivacyPage() {
  return (
    <div className="sn-page-content">
      <section className="sn-section">
        <div className="sn-container">
          <h1>Privacy Policy</h1>
          <p className="sn-lead">Last updated: November 21, 2025</p>

          <div className="sn-legal-content">

            {/* 1. INTRODUCTION */}
            <section>
              <h2>1. Introduction</h2>
              <p>
                Silikon Networks (“we”, “our”, “us”) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, store, and safeguard your
                personal information when you interact with our website or services.
              </p>
            </section>

            {/* 2. DATA WE COLLECT */}
            <section>
              <h2>2. Data We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>Name and contact details (email, phone number, address)</li>
                <li>Business or company information</li>
                <li>Information submitted through forms, applications, or service requests</li>
                <li>Phone numbers used for verification, authentication, or service activation</li>
                <li>Technical, device, and usage data (cookies, analytics, IP address)</li>
                <li>Any information voluntarily provided by you</li>
              </ul>
            </section>

            {/* 3. PHONE NUMBER & OTP USAGE */}
            <section>
              <h2>3. Phone Number & OTP Usage</h2>
              <p>
                When you provide your phone number, we may use it to send One-Time Passwords
                (OTPs) or verification codes to:
              </p>
              <ul>
                <li>Confirm your identity</li>
                <li>Authenticate login or account access</li>
                <li>Secure certain features or actions within our services</li>
              </ul>

              <p>
                OTP delivery is handled through secure communication channels using licensed
                third-party providers. These providers operate under strict confidentiality
                and data protection standards.
              </p>

              <p>
                We do <strong>not</strong> share, sell, or rent phone numbers to any third party
                for advertising or marketing purposes.
              </p>
            </section>

            {/* 4. HOW WE USE DATA */}
            <section>
              <h2>4. How We Use Your Data</h2>
              <p>Your information may be used to:</p>
              <ul>
                <li>Respond to inquiries and provide customer support</li>
                <li>Deliver, manage, and improve our services</li>
                <li>Enable phone number verification and secure authentication</li>
                <li>Improve website performance and user experience</li>
                <li>Send service-related notifications or important updates</li>
                <li>Meet regulatory, compliance, or legal obligations</li>
              </ul>
            </section>

            {/* 5. COOKIES */}
            <section>
              <h2>5. Cookies</h2>
              <p>
                We use cookies to provide a better browsing experience. Learn more in our{" "}
                <Link href="/cookies">Cookie Policy</Link>.
              </p>
            </section>

            {/* 6. THIRD-PARTY SERVICES */}
            <section>
              <h2>6. Third-Party Services</h2>
              <p>
                We may engage trusted third-party partners to support our operations,
                including:
              </p>
              <ul>
                <li>Hosting and infrastructure providers</li>
                <li>Email and SMS delivery partners (including OTP delivery)</li>
                <li>Analytics, monitoring, and security services</li>
              </ul>

              <p>
                These partners access only the information necessary to perform their
                functions and are required to maintain strict confidentiality.
              </p>
            </section>

            {/* 7. DATA RETENTION */}
            <section>
              <h2>7. Data Retention</h2>
              <p>
                We retain personal data only for as long as needed to fulfill the purposes
                described in this policy. Phone numbers collected for OTP verification are
                kept only as long as required for security, regulatory, or operational
                needs and are not retained longer than necessary.
              </p>
            </section>

            {/* 8. SECURITY */}
            <section>
              <h2>8. Security</h2>
              <p>
                We implement industry-standard technical and organizational measures to
                protect your information from unauthorized access, misuse, loss, or
                disclosure.
              </p>
              <p>
                While no system is completely immune to security risks, we continuously
                review and enhance our safeguards to keep your information secure.
              </p>
            </section>

            {/* 9. YOUR RIGHTS */}
            <section>
              <h2>9. Your Rights</h2>
              <p>You may have the right to:</p>
              <ul>
                <li>Request access to the data we hold about you</li>
                <li>Request corrections to inaccurate or incomplete data</li>
                <li>Request deletion of your information, where applicable</li>
                <li>Withdraw consent for certain types of processing</li>
              </ul>
              <p>
                To exercise any of these rights, contact us via the email below.
              </p>
            </section>

            {/* 10. CONTACT */}
            <section>
              <h2>10. Contact Us</h2>
              <p>
                For privacy-related questions or requests, please contact:
                <br />
                <a href="mailto:privacy@silikonnetworks.com">
                  privacy@silikonnetworks.com
                </a>
              </p>
            </section>

            {/* 11. UPDATES */}
            <section>
              <h2>11. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy occasionally. Any changes will be posted
                on this page with an updated revision date.
              </p>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
}
