
"use client";

import { Reveal } from "@/components/Reveal";
import "./Ecosystem.css";

const incubations = [
  {
    name: "AIC-CVRCEF",
    logo: "/images/collabs/incubation/aic.png",
  },
  {
    name: "XCITE — XLRI",
    logo: "/images/collabs/incubation/xcite.png",
  },
];

const experts = [
  { name: "", logo: "/images/collabs/experts/cifa.jpeg" },
  { name: "", logo: "/images/collabs/experts/ciba.jpeg" },
  { name: "", logo: "/images/collabs/experts/cift.png" },
  { name: "", logo: "/images/collabs/experts/kvk.jpeg" },
];

function LogoGroup({ title, items }) {
  return (
    <div className="partner-group">
      <h3>{title}</h3>

      <div className="partner-logos">
        {items.map((item, index) => (
          <div
            className="partner-logo"
            key={`${title}-${index}`}
          >
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.name}
              />
            ) : (
              <span className="logo-placeholder">
                {/* Empty space reserved for future logos */}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Ecosystem() {
  return (
    <section className="ecosystem-section" id="ecosystem">
      <div className="ecosystem-container">

        <Reveal className="ecosystem-header">
          <h2>
            Our Partnerships &<br />
            Collaborations
          </h2>
        </Reveal>

        <div className="ecosystem-content">

          <Reveal>
            <LogoGroup
              title="Incubations"
              items={incubations}
            />
          </Reveal>

          <Reveal>
            <LogoGroup
              title="Experts From"
              items={experts}
            />
          </Reveal>

        </div>

      </div>
    </section>
  );
}
