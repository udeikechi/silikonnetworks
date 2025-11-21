import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Silikon Networks",
  description:
    "Get in touch with Silikon Networks — request quotes, schedule assessments or talk partnerships.",
};

export default function ContactPage() {
  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero">
        <div className="sn-container">
          <h1>Contact Us</h1>
          <p className="sn-lead">
            Tell us about your project or request. Our team will respond within 1-2 business days.
          </p>
        </div>
      </section>

      <section className="sn-section">
        <div className="sn-container">
          <div className="sn-contact-layout">
            <div className="sn-contact-form-wrapper">
              <h2>Send us a message</h2>
              <ContactForm />
            </div>

            <div className="sn-contact-info">
              <h2>Direct Contact</h2>
              <div className="sn-contact-details">
                <div className="sn-contact-item">
                  <h3>Sales</h3>
                  <p>
                    <a href="mailto:sales@silikonnetworks.com">sales@silikonnetworks.com</a>
                  </p>
                </div>

                <div className="sn-contact-item">
                  <h3>Support</h3>
                  <p>
                    <a href="mailto:support@silikonnetworks.com">support@silikonnetworks.com</a>
                  </p>
                </div>

                <div className="sn-contact-item">
                  <h3>Media & Partnerships</h3>
                  <p>
                    <a href="mailto:partnerships@silikonnetworks.com">
                      partnerships@silikonnetworks.com
                    </a>
                  </p>
                </div>

                <div className="sn-contact-item">
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+XXXXXXXXXX">+234 708 556 8440</a>
                  </p>
                </div>

                <div className="sn-contact-item">
                  <h3>Head Office</h3>
                  <p>
                    19 Item Street, Umuahia, Abia State, Nigeria
                  </p>
                </div>
              </div>

              {/* <div className="sn-contact-map">
             
                <div className="sn-map-placeholder">
                  <p>Location Map </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

