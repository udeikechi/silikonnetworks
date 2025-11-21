import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Silikon Networks Cookie Policy — how we use cookies on our website.",
};

export default function CookiesPage() {
  return (
    <div className="sn-page-content">
      <section className="sn-section">
        <div className="sn-container">
          <h1>Cookie Policy</h1>
          <p className="sn-lead">Last updated: [Date]</p>

          <div className="sn-legal-content">
            <section>
              <h2>1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit a
                website. They are widely used to make websites work more efficiently and provide
                information to website owners.
              </p>
            </section>

            <section>
              <h2>2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to function properly
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors interact with
                  our website
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember your preferences and settings
                </li>
              </ul>
            </section>

            <section>
              <h2>3. Types of Cookies We Use</h2>
              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function and cannot be switched off
                in our systems. They are usually set in response to actions made by you.
              </p>

              <h3>Analytics Cookies</h3>
              <p>
                These cookies allow us to count visits and traffic sources so we can measure and
                improve the performance of our site. They help us understand which pages are most
                popular.
              </p>

              <h3>Functional Cookies</h3>
              <p>
                These cookies enable the website to provide enhanced functionality and
                personalization.
              </p>
            </section>

            <section>
              <h2>4. Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings preferences.
                However, limiting cookies may impact your ability to use our website.
              </p>
              <p>
                You can opt out of cookies by adjusting your browser settings. For more information,
                visit your browser's help documentation.
              </p>
            </section>

            <section>
              <h2>5. Third-Party Cookies</h2>
              <p>
                Some cookies are placed by third-party services that appear on our pages. We do not
                control these cookies. Please refer to the third party's privacy policy for
                information about their cookies.
              </p>
            </section>

            <section>
              <h2>6. Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at{" "}
                <a href="mailto:privacy@silikonnetworks.com">privacy@silikonnetworks.com</a>.
              </p>
            </section>
          </div>

          <div className="sn-cookie-consent">
            <p>
              For more information about how we handle your personal data, see our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

