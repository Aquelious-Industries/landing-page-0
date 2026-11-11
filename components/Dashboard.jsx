
"use client";

import { Reveal } from "@/components/Reveal";
import "./Fieldwork.css";

const metrics = [
  {
    value: "30+",
    label: "Farms visited",
    icon: "location",
  },
  {
    value: "60+",
    label: "Ponds observed",
    icon: "layers",
  },
  {
    value: "50+",
    label: "Farmers interacted with",
    icon: "users",
  }
];

const fieldImages = [
  {
    src: "/images/fieldwork/1.png",
    alt: "Aquelious team during a farm visit",
    caption: "Field interactions",
  },
  {
    src: "/images/fieldwork/2.png",
    alt: "Aerial view of aquaculture ponds",
    caption: "Pond observations",
  },
  {
    src: "/images/fieldwork/3.png",
    alt: "Farmer interaction at an aquaculture pond",
    caption: "Farmer engagement",
  },
  {
    src: "/images/fieldwork/4.png",
    alt: "Aquaculture pond landscape",
    caption: "Aquaculture environments",
  },
  {
    src: "/images/fieldwork/5.png",
    alt: "Aquaculture farm infrastructure",
    caption: "Farm infrastructure",
  },
  {
    src: "/images/fieldwork/6.png",
    alt: "Pond surrounded by vegetation",
    caption: "Field documentation",
  },
  {
    src: "/images/fieldwork/7.png",
    alt: "Water surface at an aquaculture farm",
    caption: "Water conditions",
  },
    {
    src: "/images/fieldwork/8.png",
    alt: "Water surface at an aquaculture farm",
    caption: "Water conditions",
  },
];

function MetricIcon({ type }) {
  const paths = {
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    sprout: (
      <>
        <path d="M12 22V12" />
        <path d="M12 12C5 12 3 8 3 3c6 0 9 3 9 9Z" />
        <path d="M12 15c0-6 3-9 9-9 0 6-3 9-9 9Z" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type]}
    </svg>
  );
}

function FieldCarousel() {
  // Duplicate images to create a seamless infinite track.
  const images = [...fieldImages, ...fieldImages];

  return (
    <div
      className="field-carousel"
      aria-label="Aquelious fieldwork photographs"
    >
      <div className="field-carousel-track">
        {images.map((image, index) => (
          <div
            className="field-photo"
            key={`${image.src}-${index}`}
            aria-hidden={index >= fieldImages.length}
          >
            <img
              src={image.src}
              alt={index < fieldImages.length ? image.alt : ""}
              loading="lazy"
            />

            {index < fieldImages.length && (
              <span className="field-photo-caption">
                {image.caption}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Fieldwork() {
  return (
    <section className="fieldwork-section" id="case-studies">
      <div className="fieldwork-container">

        {/* Introduction and metrics */}
        <div className="fieldwork-top">

          <Reveal className="fieldwork-intro">

            <h2>
              Beyond the laboratory.
              <span>Into the field.</span>
            </h2>

            <p>
              We believe meaningful water intelligence begins
              with understanding the environments it is built
              for. Our field engagements bring us closer to
              aquaculture practices, farm-level challenges and
              the people behind them.
            </p>
          </Reveal>

          <Reveal className="fieldwork-metrics">
            {metrics.map((metric) => (
              <div className="field-metric" key={metric.label}>
                <div className="metric-icon">
                  <MetricIcon type={metric.icon} />
                </div>

                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </Reveal>

        </div>

        {/* Automatic photo carousel */}
        <Reveal className="fieldwork-gallery">
          <FieldCarousel />
        </Reveal>

        {/* Closing statement */}
        <Reveal className="fieldwork-bottom">
          <div className="fieldwork-quote-line" />

          <p>
            Every pond has a different story.
            Every field visit brings us
            closer to understanding it.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
