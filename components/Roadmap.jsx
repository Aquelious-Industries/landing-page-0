import { roadmap } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export default function Roadmap() {
  return (
    <section className="section dark" id="roadmap">
      <div className="container">
        <Reveal className="section-head center">
          <div className="kicker">Roadmap</div>
          <h2>Build, test, pilot, and scale.</h2>
          <p>The roadmap makes the business look execution-ready and technically grounded.</p>
        </Reveal>

        <Stagger className="timeline">
          {roadmap.map(([id, title, body]) => (
            <StaggerItem className="phase" key={id}>
              <div className="phase-number">{id}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
