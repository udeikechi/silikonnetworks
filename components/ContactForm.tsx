"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredTime: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: Replace with actual form submission endpoint
    // This is a placeholder implementation
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    if (file) {
      formDataToSend.append("file", file);
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        preferredTime: "",
      });
      setFile(null);
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sn-contact-form">
      <div className="sn-form-row">
        <div className="sn-form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="sn-form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="sn-form-row">
        <div className="sn-form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="sn-form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="sn-form-group">
        <label htmlFor="service">Service Interested In</label>
        <select id="service" name="service" value={formData.service} onChange={handleChange}>
          <option value="">Select a service</option>
          <option value="mobility">Mobility Services</option>
          <option value="energy">Energy & Power</option>
          <option value="trade">Global Trade & Supply Chain</option>
          <option value="software">Technology & Software</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="sn-form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div className="sn-form-row">
        <div className="sn-form-group">
          <label htmlFor="preferredTime">Preferred Contact Time</label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
          >
            <option value="">Select time</option>
            <option value="morning">Morning (9am - 12pm)</option>
            <option value="afternoon">Afternoon (12pm - 5pm)</option>
            <option value="evening">Evening (5pm - 8pm)</option>
          </select>
        </div>
        <div className="sn-form-group">
          <label htmlFor="file">Attach Files (Optional)</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
          />
          {file && <p className="sn-file-name">{file.name}</p>}
        </div>
      </div>

      {status === "success" && (
        <div className="sn-form-success">
          <p>Thank you! We'll respond within 1-2 business days.</p>
        </div>
      )}

      {status === "error" && (
        <div className="sn-form-error">
          <p>Something went wrong. Please try again or contact us directly.</p>
        </div>
      )}

      <button
        type="submit"
        className="sn-btn sn-btn--primary"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

