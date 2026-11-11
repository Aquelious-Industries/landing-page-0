import { metrics } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <video autoPlay muted loop playsInline poster="/images/aquelious-hero-poster.jpg">
        <source src="/videos/5.mp4" type="video/mp4" />
      </video>

      <div className="container hero-content">
        <Reveal className="hero-copy">
          <h1>Building Intelligence Beneath The Surface.</h1>
          <p className="sub">
            We build operational intelligence that, Monitor. Predict. Act.
          </p>

          <div className="actions">

          </div>

          {/* <div className="metrics">
            {metrics.map((item) => (
              <div className="metric" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div> */}
        </Reveal>
      </div>

     
    </section>
  );
}
