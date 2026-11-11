import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Company */}
          <div className="footer-brand">
            <a href="#top" className="brand">
              <Image
                src="/logo-dark.png"
                alt="Aquelious Industries"
                width={400}
                height={150}
                priority
              />
            </a>
            <p>
              Building intelligent infrastructure for aquaculture through
              realtime telemetry, operational intelligence, and future
              autonomous systems.
            </p>
          </div>
          {/* Platform */}
          {/* <div className="footer-column">
            <h4>Platform</h4>
            <a href="#aquanode">AquaNode</a>
            <a href="#technology">Technology</a>
            <a href="#research">Research</a>
            <a href="#roadmap">Roadmap</a>
          </div> */}

          {/* Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <a href="https://www.instagram.com/aquelious_industries/">Instagram</a>
            <a href="https://www.facebook.com/people/Aquelious-Industries-Pvt-Ltd/61596327206759/">Facebook</a>
            <a href="https://www.linkedin.com/company/aquelious/">Linkedin</a>
          </div>

          {/* Vision */}
          <div className="footer-column">
            <h4>Focus Areas</h4>
            <span>Realtime Monitoring</span>
            <span>Predictive Alerting</span>
            <span>Operational Intelligence</span>
            <span>Future Autonomy</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Aquelious Industries Pvt Ltd. All rights reserved.
          </p>

          <p>
            Built in India for the future of aquaculture.
          </p>
        </div>
      </div>
    </footer>
  );
}