"use client";

import { FormEvent, useState, useRef, useEffect } from "react";

type QuoteModalProps = {
  open: boolean;
  onClose: () => void;
};

export function QuoteModal({ open, onClose }: QuoteModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Reset form and messages when modal opens/closes
  useEffect(() => {
    if (open) {
      setSuccessMessage(null);
      setErrorMessage(null);
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const body: Record<string, string> = {};
    formData.forEach((value, key) => (body[key] = String(value)));

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      let result;
      try {
        result = await response.json();
      } catch (parseError) {
        // If response is not JSON but status is ok, treat as success
        if (response.ok) {
          // Reset form before setting success message
          if (formRef.current) {
            formRef.current.reset();
          }
          setSuccessMessage("Quote request form submitted successfully!");
          setErrorMessage(null);
          setTimeout(() => {
            setSuccessMessage(null);
            onClose();
          }, 2500);
          setSubmitting(false);
          return;
        }
        throw new Error("Failed to parse server response.");
      }

      // Check for success
      if (response.ok && result.success) {
        // Reset form before setting success message
        if (formRef.current) {
          formRef.current.reset();
        }
        setSuccessMessage("Quote request form submitted successfully!");
        setErrorMessage(null); // Ensure error is cleared

        // Auto-close modal after 2.5 seconds
        setTimeout(() => {
          setSuccessMessage(null);
          onClose();
        }, 2500);
      } else {
        // Explicitly set error and clear success
        setErrorMessage(result.error || "Failed to submit form. Please try again.");
        setSuccessMessage(null);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage(
        "Error submitting form. Please check your connection and try again."
      );
      setSuccessMessage(null); // Ensure success is cleared on error
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="sn-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div className="sn-modal">
        <header className="sn-modal-header">
          <h2 id="quote-modal-title">Request a quote</h2>
          <button type="button" className="sn-modal-close" onClick={onClose}>
            ×
          </button>
        </header>

        {!successMessage && (
          <>
            <p className="sn-modal-lead">
              Tell us briefly about your mobility, energy, trade or software project.
              We'll follow up with timelines and next steps.
            </p>

            {/* Error Notification */}
            {errorMessage && (
              <div className="sn-notification sn-notification--error">
                {errorMessage}
              </div>
            )}

            <form ref={formRef} className="sn-modal-form" onSubmit={handleSubmit}>
          <div className="sn-field">
            <label htmlFor="q-name">Name</label>
            <input id="q-name" name="name" required />
          </div>
          <div className="sn-field">
            <label htmlFor="q-company">Company</label>
            <input id="q-company" name="company" />
          </div>
          <div className="sn-field">
            <label htmlFor="q-email">Email</label>
            <input id="q-email" name="email" type="email" required />
          </div>
          <div className="sn-field">
            <label htmlFor="q-service">Service interested in</label>
            <select id="q-service" name="service">
              <option value="">Select an option</option>
              <option>Mobility</option>
              <option>Energy &amp; Power</option>
              <option>Global Trade</option>
              <option>Software Development</option>
            </select>
          </div>
          <div className="sn-field">
            <label htmlFor="q-message">Project summary</label>
            <textarea
              id="q-message"
              name="message"
              rows={4}
              placeholder="Share goals, timelines, locations, and any constraints."
            />
          </div>

          <div className="sn-modal-actions">
            <button
              type="button"
              className="sn-btn sn-btn--ghost"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="sn-btn sn-btn--outline"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Submit request"}
            </button>
          </div>
            </form>
          </>
        )}

        {/* Success Notification - shown instead of form */}
        {successMessage && (
          <div className="sn-notification sn-notification--success">
            {successMessage}
          </div>
        )}
      </div>

      <style jsx>{`
        .sn-notification {
          margin: 0 0 1rem 0;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          font-weight: 500;
          text-align: center;
          transition: all 0.3s ease;
        }
        .sn-notification--success {
          background-color: #e6f9f0;
          color: #2b7a4b;
          border: 1px solid #2b7a4b;
        }
        .sn-notification--error {
          background-color: #ffe6e6;
          color: #b82b2b;
          border: 1px solid #b82b2b;
        }
      `}</style>
    </div>
  );
}
