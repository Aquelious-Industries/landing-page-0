 "use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("Sending...");

    const form = event.currentTarget;
    const data = {
      name: form.name.value,
      role: form.role.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json.error || "Failed to send");
      setStatus("Inquiry saved successfully.");
      form.reset();
    } catch (error) {
      setStatus(error.message || "Something went wrong.");
    }
  }

  return (
    <section className="cta" id="contact">
      <div className="container">
        <Reveal className="cta-card">
          <div>
            <div className="kicker">Pilot with Aquelious</div>
            <h2>Ready to make aquaculture operations predictive?</h2>
            <p>
              Use this section for incubators, farmers, institutions, experts, and pilot partners.
              The form is connected to the Next.js API route and MongoDB through Mongoose.
            </p>
            <div className="actions">
              <a className="btn primary" href="mailto:aqueliousi@gmail.com">Contact Aquelious →</a>
              <a className="btn secondary" href="#top">Replay website ↑</a>
            </div>
          </div>

          <form className="contact-panel" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Your name" required />

            <label htmlFor="role">Role</label>
            <select id="role" name="role">
              <option>Farmer / Aggregator</option>
              <option>Investor / Incubator</option>
              <option>Institution / Expert</option>
              <option>General inquiry</option>
            </select>

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell us about your pilot, farm, or collaboration requirement." required />

            <button className="btn primary" type="submit">Send inquiry →</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
