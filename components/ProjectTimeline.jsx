
"use client";

import "./Timeline.css";

const milestones = [
  {
    date: "SEP 2025",
    title: "Research Begins",
    description: "Exploring water intelligence and aquaculture challenges.",
    image: "/images/logo.png",
  },
  {
    date: "JAN 2026",
    title: "First Prototype",
    description: "First working prototype and hackathon victory.",
    image: "/images/logo.png",
  },
  {
    date: "FEB — MAR 2026",
    title: "Research & Refinement",
    description: "Revisiting assumptions and refining our technology.",
    image: "/images/logo.png",
  },
  {
    date: "2026",
    title: "IDE Recognition",
    description: "Best Impactful Idea at IDE Bootcamp.",
    image: "/images/logo.png",
  },
  {
    date: "MAY 2026",
    title: "Company Incorporation",
    description: "Aquelious Industries Private Limited incorporated.",
    image: "/images/logo.png",
  },
  {
    date: "JUN 2026",
    title: "Version 1",
    description: "Prototype evolution and real-world validation.",
    image: "/images/logo.png",
  },
  {
    date: "PRESENT",
    title: "Boeing Build 5.0 Finalist",
    description: "Building intelligent and connected aquaculture farms.",
    image: "/images/logo.png",
  },
  {
    date: "NEXT",
    title: "More to Come",
    description: "The journey continues.",
    image: "/images/logo.png",
  },
];

export default function ProjectTimeline() {
  return (
    <section className="journey-timeline">
      <div className="journey-track">

        {milestones.map((item, index) => (
          <article
            key={item.date}
            className={`journey-milestone ${
              index % 2 === 0 ? "milestone-top" : "milestone-bottom"
            } ${index === 7 ? "milestone-future" : ""}`}
          >
            <div className="milestone-card">

              {index !== 7 && (
                <div className="milestone-image">
                  {item.image ? (
                    <img src={item.image} alt={item.title} />
                  ) : (
                    <span className="image-placeholder">
                      0{index + 1}
                    </span>
                  )}
                </div>
              )}

              <div className="milestone-info">
                <span className="milestone-date">
                  {item.date}
                </span>

                <h3>{item.title}</h3>
              </div>
            </div>

            <span className="milestone-node" />
          </article>
        ))}

        <span className="journey-arrow" />
      </div>
    </section>
  );
}
