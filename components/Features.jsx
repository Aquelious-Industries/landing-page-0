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
        <style jsx>{`
          @media (max-width: 768px) {
            .aquanode-section {
              padding: 4rem 1rem;
            }

            .section-head h2 {
              font-size: 2rem !important;
              line-height: 1.2;
            }

            .section-head p {
              font-size: 0.95rem;
              padding: 0 0.5rem;
            }

            .aquanode-flow {
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
            }

            .flow-card {
              width: 100%;
              padding: 1.25rem;
            }

            .step-number {
              font-size: 1.8rem;
            }

            .flow-card h3 {
              font-size: 1.2rem;
            }

            .flow-card p {
              font-size: 0.9rem;
            }

            .flow-items {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
            }

            .flow-item {
              font-size: 0.8rem;
              padding: 0.4rem 0.75rem;
            }

            .flow-arrow {
              display: none;
            }

            .aquanode-highlights {
              display: grid;
              grid-template-columns: 1fr;
              gap: 1rem;
              margin-top: 2rem;
            }

            .highlight-card {
              padding: 1.25rem;
            }

            .highlight-card h4 {
              font-size: 1rem;
            }

            .highlight-card p {
              font-size: 0.9rem;
            }

            .aquanode-footer h4 {
              font-size: 1.2rem !important;
              line-height: 1.4;
              padding: 0 1rem;
            }
          }

          @media (max-width: 480px) {
            .section-head h2 {
              font-size: 1.7rem !important;
            }

            .section-head p {
              font-size: 0.85rem;
            }

            .flow-card {
              padding: 1rem;
            }

            .step-number {
              font-size: 1.5rem;
            }

            .flow-card h3 {
              font-size: 1.05rem;
            }

            .flow-item {
              width: 100%;
              text-align: center;
            }

            .aquanode-footer h4 {
              font-size: 1rem !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}