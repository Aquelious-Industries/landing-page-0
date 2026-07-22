import { createMetadata } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";
import "./about.css";
import Header from "@/components/Header";
export const metadata = createMetadata({
  title: "About Aquelious Industries",
  description:
    "Learn about Aquelious Industries, our mission, technology, and vision for building AI-powered water intelligence solutions.",
  path: "/about",
  keywords: [
    "About Aquelious Industries",
    "AI Water Intelligence",
    "Aquaculture Technology",
    "Industrial Water Monitoring",
  ],
});

const technologies = [
  {
    title: "AquaGrid",
    description:
      "An AI-powered water intelligence platform delivering real-time telemetry, analytics, and operational insights.",
  },
  {
    title: "AquaNode",
    description:
      "An intelligent edge device continuously monitoring critical water parameters in the field.",
  },
  {
    title: "Predictive Intelligence",
    description:
      "Machine learning models that detect anomalies before they become operational problems.",
  },
  {
    title: "Connected Infrastructure",
    description:
      "Scalable IoT architecture designed for future-ready water ecosystems.",
  },
];

const principles = [
  {
    title: "Engineering First",
    description:
      "Every solution is built on strong engineering fundamentals and real-world validation.",
  },
  {
    title: "Reliability",
    description:
      "Accurate data and dependable infrastructure are at the core of everything we build.",
  },
  {
    title: "Sustainability",
    description:
      "Technology should improve productivity while protecting natural resources.",
  },
  {
    title: "Innovation",
    description:
      "Continuous research and development drive every generation of our platform.",
  },
];

export default function AboutPage() {
  return (
    <><Header /><main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <Reveal className="center">
            <div className="kicker">ABOUT AQUELIOUS</div>

            <h1>
              Building intelligence
              <br />
              beneath the depth.
            </h1>

            <p>
              Aquelious Industries is an Indian deep-tech company developing
              AI-powered water intelligence solutions that help organizations
              monitor, understand, and manage water ecosystems through connected
              sensing and intelligent analytics.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="container">
          <Reveal>
            <h2>Who We Are</h2>

            <p>
              We believe water is one of the world's most valuable resources,
              yet much of it remains unmanaged because critical data is difficult
              to collect and interpret.
            </p>

            <p>
              Aquelious Industries combines IoT, artificial intelligence,
              telemetry, and predictive analytics to transform raw environmental
              data into operational intelligence for aquaculture, fisheries, and
              industrial water systems.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="section dark-section">
        <div className="container">
          <Reveal className="center">
            <div className="kicker">MISSION</div>

            <h2>
              Making intelligent water
              <br />
              monitoring accessible.
            </h2>

            <p>
              Our mission is to empower industries with reliable sensing,
              intelligent software, and actionable insights that improve
              productivity while supporting sustainable water management.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What We Build */}
      <section className="section">
        <div className="container">
          <Reveal className="center">
            <div className="kicker">WHAT WE BUILD</div>

            <h2>Technology Designed for Real-World Operations</h2>
          </Reveal>

          <div className="about-grid">
            {technologies.map((item) => (
              <div key={item.title} className="about-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section dark-section">
        <div className="container">
          <Reveal className="center">
            <div className="kicker">OUR PRINCIPLES</div>

            <h2>The Values That Shape Every Decision</h2>
          </Reveal>

          <div className="about-grid">
            {principles.map((item) => (
              <div key={item.title} className="about-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section">
        <div className="container">
          <Reveal className="center">
            <div className="kicker">VISION</div>

            <h2>
              Building the digital infrastructure
              <br />
              for future water ecosystems.
            </h2>

            <p>
              We envision a future where every critical water ecosystem can be
              monitored intelligently, managed proactively, and protected
              through connected technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section className="section dark-section">
        <div className="container">
          <Reveal className="center">
            <div className="kicker">FOUNDING TEAM</div>

            <h2>The People Behind Aquelious</h2>
          </Reveal>

          <div className="about-grid">
            <div className="about-card">
              <h3>Pratyush Kumar Mishra</h3>
              <p>Co-Founder</p>
            </div>

            <div className="about-card">
              <h3>Swapnil Panigrahi</h3>
              <p>Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container center">
          <Reveal>
            <h2>Let's Build the Future of Water Intelligence</h2>

            <p>
              Partner with Aquelious Industries to create smarter, more
              connected water ecosystems.
            </p>

            <a href="/contact" className="primary-btn">
              Contact Us
            </a>
          </Reveal>
        </div>
      </section>
    </main></>
  );
}