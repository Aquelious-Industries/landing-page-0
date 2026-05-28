"use client";

import { Reveal } from "@/components/Reveal";

const flowSteps = [
  {
    number: "01",
    title: "Continuous Telemetry",
    description:
      "AquaNode continuously collects and standardizes critical pond parameters in real time.",
    items: ["Dissolved Oxygen", "pH", "Temperature", "Other Parameters"],
  },
  {
    number: "02",
    title: "Intelligence Engine",
    description:
      "Advanced algorithms analyze patterns, detect anomalies, and assess pond health.",
    items: ["Pattern Analysis", "Anomaly Detection", "Health Assessment"],
  },
  {
    number: "03",
    title: "Operational Insights",
    description:
      "Complex telemetry is transformed into clear operational intelligence.",
    items: ["Low Risk", "Medium Risk", "High Risk"],
  },
  {
    number: "04",
    title: "Actionable Decisions",
    description:
      "Timely alerts and guidance help farmers act before problems escalate.",
    items: ["Instant Alerts", "Recommendations", "Decision Support"],
  },
];

const highlights = [
  {
    title: "Reliable & Robust",
    desc: "Built for real pond conditions with high uptime and stability.",
  },
  {
    title: "Scalable by Design",
    desc: "From a single pond to multi-farm deployments.",
  },
  {
    title: "Secure & Private",
    desc: "Telemetry remains protected and under your control.",
  },
  {
    title: "Future Ready",
    desc: "Designed for automation and intelligent infrastructure.",
  },
];

export default function AquaNodeSection() {
  return (
    <section className="aquanode-section" id="aquanode">
      <div className="container">
        <Reveal className="section-head center">
          <div className="kicker">AQUANODE</div>

          <h2>
            The intelligence layer for
            <br />
            aquaculture operations.
          </h2>

          <p>
            AquaNode transforms raw pond telemetry into operational
            intelligence, helping farmers make faster and safer decisions.
          </p>
        </Reveal>

        <div className="aquanode-flow">
          {flowSteps.map((step, index) => (
            <div key={step.title} className="flow-card">
              <span className="step-number">{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              <div className="flow-items">
                {step.items.map((item) => (
                  <div key={item} className="flow-item">
                    {item}
                  </div>
                ))}
              </div>

              {index < flowSteps.length - 1 && (
                <div className="flow-arrow">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="aquanode-highlights">
          {highlights.map((item) => (
            <div key={item.title} className="highlight-card">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <Reveal className="aquanode-footer center">
          <h4 className="highlight" style={{ fontSize: "1.5rem" }} >
            AquaNode doesn&apos;t just show data.
            <br />
            It helps protect every harvest.
          </h4>
        </Reveal>
      </div>
    </section>
  );
}