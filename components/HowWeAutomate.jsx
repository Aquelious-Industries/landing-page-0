
"use client";

import { Reveal } from "@/components/Reveal";
import "./HowWeAutomate.css";
import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    icon: "telemetry",
    title: "Telemetry & Data Tracking",
    description:
      "Continuous collection, transmission and tracking of water-quality data.",
  },
  {
    number: "02",
    icon: "mapping",
    title: "Farm Mapping & Digital Twin",
    description:
      "Mapping farm infrastructure and building a 3D spatial representation of the farm.",
  },
  {
    number: "03",
    icon: "lab",
    title: "Water, Soil & Crop Assessment",
    description:
      "In-house laboratory analysis and reports to complement field and sensor insights.",
  },
  {
    number: "04",
    icon: "automation",
    title: "Tailored Automation Curation",
    description:
      "Designing farm-specific automation workflows based on operational needs and insights.",
  },
  {
    number: "05",
    icon: "pilot",
    title: "Piloting",
    description:
      "Testing the integrated system in real farm environments and refining its performance.",
  },
  {
    number: "06",
    icon: "deployment",
    title: "Final Deployment",
    description:
      "Deploying the configured solution for ongoing monitoring and operational management.",
  },
];

function StageIcon({ type }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    telemetry: (
      <>
        <path d="M4 9a12 12 0 0 1 16 0" />
        <path d="M7 12a8 8 0 0 1 10 0" />
        <path d="M10 15a4 4 0 0 1 4 0" />
        <circle cx="12" cy="19" r="1" />
      </>
    ),
    mapping: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 8 9 5 9-5" />
        <path d="M12 13v9" />
        <path d="m3 8 0 9 9 5 9-5V8" />
      </>
    ),
    lab: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3" />
        <path d="M8 15h8" />
      </>
    ),
    automation: (
      <>
        <path d="M4 7h16M4 17h16M4 12h16" />
        <circle cx="9" cy="7" r="2" fill="currentColor" />
        <circle cx="15" cy="12" r="2" fill="currentColor" />
        <circle cx="11" cy="17" r="2" fill="currentColor" />
      </>
    ),
    pilot: (
      <>
        <path d="M12 21V11" />
        <path d="M12 15c-6 0-8-4-8-9 5 0 8 3 8 9Z" />
        <path d="M12 12c0-5 3-8 8-8 0 5-3 8-8 8Z" />
      </>
    ),
    deployment: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...common}>
      {icons[type]}
    </svg>
  );
}

/* Custom isometric aquaculture farm illustration */
function FarmIllustration() {
  return (
    <svg
      className="farm-art"
      viewBox="0 0 680 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of an aquaculture farm with monitored ponds"
    >
      <defs>
        <linearGradient id="pondFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DDF5FC" />
          <stop offset="100%" stopColor="#80C7E7" />
        </linearGradient>
        <linearGradient id="waterLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6CBDE0" />
          <stop offset="100%" stopColor="#1683B9" />
        </linearGradient>
      </defs>

      {/* Subtle ground plane */}
      <path
        d="M40 205 340 45 650 205 340 370Z"
        fill="#E7F5FA"
        stroke="#B8DDEC"
        strokeWidth="1.5"
      />

      {/* Farm outer boundary */}
      <path
        d="M90 203 340 72 600 209 340 348Z"
        stroke="#85BFD9"
        strokeWidth="2"
        strokeDasharray="5 6"
      />

      {/* Pond 1 */}
      <path
        d="M116 198 247 130 319 168 188 238Z"
        fill="url(#pondFill)"
        stroke="#5CAAD0"
        strokeWidth="2"
      />
      <path
        d="M135 197 246 140 299 169 188 228Z"
        stroke="#A5D9EE"
        strokeWidth="1"
      />
      <path d="m175 190 38-20m-12 30 38-20" stroke="#FFFFFF" opacity=".65" />

      {/* Pond 2 */}
      <path
        d="m264 126 83-44 118 62-83 45Z"
        fill="url(#pondFill)"
        stroke="#5CAAD0"
        strokeWidth="2"
      />
      <path d="m294 126 80 42m-50-58 80 42" stroke="#FFFFFF" opacity=".55" />

      {/* Pond 3 */}
      <path
        d="m203 245 131-69 95 50-131 70Z"
        fill="url(#pondFill)"
        stroke="#5CAAD0"
        strokeWidth="2"
      />
      <path d="m241 242 90-47m-55 64 90-47" stroke="#FFFFFF" opacity=".6" />

      {/* Pond 4 */}
      <path
        d="m347 174 118-62 95 50-118 63Z"
        fill="url(#pondFill)"
        stroke="#5CAAD0"
        strokeWidth="2"
      />
      <path d="m380 174 80-42m-45 57 80-42" stroke="#FFFFFF" opacity=".6" />

      {/* Earthen farm paths */}
      <path d="m188 238 8 4 131-70-8-4Z" fill="#B8D9E5" />
      <path d="m329 172 8 4 118-62-8-4Z" fill="#B8D9E5" />
      <path d="m330 296 8 4 131-70-8-4Z" fill="#B8D9E5" />

      {/* Sensor station */}
      <path d="m487 218 24-13v-44l-24 13v44Z" fill="#D5EAF3" stroke="#438EBA" />
      <path d="m511 205 17 9v-44l-17-9v44Z" fill="#8ABBD2" stroke="#438EBA" />
      <path d="m487 174 24-13 17 9-24 13Z" fill="#F4FBFE" stroke="#438EBA" />
      <path d="M499 181v17m6-20v17" stroke="#247DAA" strokeWidth="2" />

      {/* Wireless signal */}
      <path d="M498 148a19 19 0 0 1 22 0" stroke="#2388BA" strokeWidth="2" />
      <path d="M502 139a12 12 0 0 1 14 0" stroke="#2388BA" strokeWidth="2" />
      <circle cx="509" cy="132" r="2" fill="#2388BA" />

      {/* Sensor nodes */}
      <circle cx="245" cy="185" r="5" fill="#087EB4" />
      <circle cx="245" cy="185" r="10" stroke="#087EB4" opacity=".25" />
      <circle cx="383" cy="147" r="5" fill="#087EB4" />
      <circle cx="383" cy="147" r="10" stroke="#087EB4" opacity=".25" />
      <circle cx="380" cy="246" r="5" fill="#087EB4" />
      <circle cx="380" cy="246" r="10" stroke="#087EB4" opacity=".25" />

      {/* Data connections */}
      <path
        d="M245 185 383 147 509 170M380 246 509 190"
        stroke="#1683B9"
        strokeWidth="1.4"
        strokeDasharray="4 5"
        opacity=".8"
      />

      {/* Aerator */}
      <path d="m135 205 18-9 18 10-18 10-18-11Z" fill="#E7F8FC" stroke="#368EB8" />
      <path d="M153 205v-13m-8 13v-9m16 9v-9" stroke="#368EB8" strokeWidth="2" />
      <path d="M126 188q27-17 54 0" stroke="#72C4E4" strokeWidth="1.5" opacity=".8" />

      {/* Small solar panel */}
      <path d="m556 135 31-16 21 11-31 16Z" fill="#176C9B" stroke="#8BC8E1" />
      <path d="m571 127 21 11m-11-16 21 11" stroke="#B7E4F4" strokeWidth="1" />
      <path d="M587 146v22" stroke="#528EAD" strokeWidth="2" />

      {/* Water flow */}
      <path
        d="M90 270q30-12 60 0t60 0"
        stroke="#78C8E6"
        strokeWidth="2"
        opacity=".7"
      />
      <path
        d="M475 280q30-12 60 0t60 0"
        stroke="#78C8E6"
        strokeWidth="2"
        opacity=".7"
      />
    </svg>
  );
}

export default function HowWeAutomate({
  farmTransitioned,
  sectionRef,
}) {
  return (
    <section className="automate-section" id="research" ref={sectionRef}>
      <div className="automate-container">

        {/* Section introduction */}
        <Reveal className="automate-intro">
          <div className="automate-eyebrow">
            <span>HOW WE AUTOMATE</span>
            <span className="automate-eyebrow-line" />
          </div>
          <div className="automate-hero">
            <div className="automate-heading">
              <h2>
                From field insights to
                <span> an automated farm.</span>
              </h2>

              <p>
                A structured, research-led approach that turns
                environmental insights into a tailored,
                automated system for every farm.
              </p>
            </div>

            
<div className="automate-illustration">

  {/* Digital farm illustration stays underneath */}
  <FarmIllustration />

  {/* Photograph travels into the illustration */}
  {farmTransitioned && (
    <motion.div
      layoutId="aquelious-farm-image"
      className="farm-transition-image"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        layout: {
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        },
        opacity: {
          delay: 1,
          duration: 0.65,
          ease: "easeOut",
        },
      }}
    >
      <img
        src="/images/aquaculture-pond.png"
        alt=""
      />
    </motion.div>
  )}

</div>

          </div>
        </Reveal>

        {/* Six operational stages */}
        <div className="automate-stages">
          {stages.map((stage, index) => (
            <Reveal
              key={stage.number}
              className="automate-stage"
              delay={index * 0.08}
            >
              <div className="stage-icon">
                <StageIcon type={stage.icon} />
              </div>

              <span className="stage-number">{stage.number}</span>

              <h3>{stage.title}</h3>

              <p>{stage.description}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
