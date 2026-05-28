import { metrics } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <video autoPlay muted loop playsInline poster="/images/aquelious-hero-poster.jpg">
        <source src="/videos/aquelious-realistic-field-hero.mp4" type="video/mp4" />
      </video>

      <div className="container hero-content">
        <Reveal className="hero-copy">
          <div className="eyebrow"><i /> Field-ready aquaculture intelligence</div>
          <h1>Aquaculture Infrastructure Built For Decisions.</h1>
          <p className="sub">
            We build operational intelligence that, Monitor. Predict. Act.
          </p>

          <div className="actions">
            <a className="btn primary" href="#workflow">See field workflow →</a>
            <a className="btn secondary" href="#features">See Monitoring Workflow →</a>
          </div>

          <div className="metrics">
            {metrics.map((item) => (
              <div className="metric" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="scroll-indicator">Scroll</div>
    </section>
  );
}
