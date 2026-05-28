import { ecosystem } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export default function Ecosystem() {
  return (
    <section className="section dark">
      <div className="container">
        <Reveal className="section-head">
          <div className="kicker">Creative transition</div>
          <h2>Horizontal ecosystem journey.</h2>
          <p>A moving product journey: pond sensing, telemetry, intelligence, farmer app, and automation endpoints.</p>
        </Reveal>

        <Reveal className="horizon">
          <div className="horizon-track">
            {ecosystem.map(([kicker, title, body]) => (
              <article className="horizon-card" key={title}>
                <small>{kicker}</small>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
