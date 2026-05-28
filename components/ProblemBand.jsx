import { problemItems } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export default function ProblemBand() {
  return (
    <section className="problem-band" id="problem">
      <div className="container">
        <Reveal className="band-card">
          <div>
            <div className="kicker">Problem reality</div>
            <h2>Farmers are making high-risk pond decisions without continuous visibility.</h2>
          </div>
          <Stagger className="band-list">
            {problemItems.map(([title, body]) => (
              <StaggerItem className="band-item" key={title}>
                <strong>{title}</strong>
                <span>{body}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
