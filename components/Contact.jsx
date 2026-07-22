"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.currentTarget;

    const data = {
      name: form.name.value,
      email: form.email.value,
      company: form.company.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Failed to send message.");
      }

      setStatus("✅ Thank you! Your message has been sent successfully.");

      form.reset();
    } catch (err) {
      setStatus(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="cta" id="contact">
      <div className="container">
        <Reveal className="cta-card">
          <div>
            <div className="kicker">Get in Touch</div>

            <h2>
              Let's build the future of
              <br />
              water intelligence.
            </h2>

            <p>
              Whether you're an aquaculture business, industry partner,
              researcher, investor, or institution, we'd love to hear from you.
            </p>

            <div className="actions">
              <a
                className="btn primary"
                href="mailto:contact@aquelious.com"
              >
                contact@aquelious.com →
              </a>

              <a
                className="btn secondary"
                href="/about"
              >
                Learn More →
              </a>
            </div>
          </div>

          <form
            className="contact-panel"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              name="name"
              placeholder="John Smith"
              required
            />

            <label htmlFor="company">Company</label>

            <input
              id="company"
              name="company"
              placeholder="Company or Organization"
            />

            <label htmlFor="phone">Phone</label>

            <input
              id="phone"
              name="phone"
              placeholder="+91 9876543210"
            />

            <label htmlFor="email">Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
            />

            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us about your project, partnership, or inquiry."
              required
            />

            <button
              className="btn primary"
              disabled={loading}
              type="submit"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>

            {status && (
              <p
                className="form-status"
                style={{
                  marginTop: "18px",
                }}
              >
                {status}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}