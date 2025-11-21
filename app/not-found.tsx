import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="sn-page-content">
      <section className="sn-section sn-section--hero">
        <div className="sn-container sn-container--centered">
          <h1>Page not found</h1>
          <p className="sn-lead">
            Looks like you took a wrong turn. Try searching, or go back home.
          </p>
          <div className="sn-cta-group">
            <Link href="/" className="sn-btn sn-btn--primary">
              Go to Home
            </Link>
            <Link href="/contact" className="sn-btn sn-btn--outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

