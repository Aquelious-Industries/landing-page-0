"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const company = form.company.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    const subject = `Website Inquiry from ${name}`;

    const body = `
Hello Aquelious Team,

I would like to get in touch with Aquelious Industries.

Name: ${name}
Email: ${email}
Company / Organization: ${company || "Not provided"}
Phone: ${phone || "Not provided"}

Message:
${message}

---
This message was submitted through the Aquelious website.
    `.trim();

    const mailto = `mailto:contact@aquelious.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setLoading(false);
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
              type="tel"
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
              {loading ? "Opening Mail..." : "Send Message →"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}