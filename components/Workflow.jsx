import { workflowSteps } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export default function Workflow() {
  return (
    <section className="section soft" id="workflow">
      <div className="container">
        <Reveal className="section-head">
          <div className="kicker">Field workflow</div>
          <h2>AquaNode turns pond conditions into operational decisions, step by step.</h2>
          <p>
            The website unfolds the product story one layer at a time: field problem, sensor node,
            intelligence engine, farmer action, and automation roadmap.
          </p>
        </Reveal>

        <div className="sticky-story">
          <Reveal className="sticky-visual">
            <div className="pond-map" />
            <div className="ring" />
            <div className="ring r2" />
            <div className="ring r3" />
            <div className="node" />
            <div className="telemetry-line" />
            <div className="sticky-dashboard">
              <small>Live pond status</small>
              <div className="live-row"><strong>Safe</strong><span className="safe">Low risk</span></div>
              <div className="status-copy">DO 5.9 mg/L · pH 7.4 · Temp 28.7°C</div>
            </div>
            <div className="visual-caption">
              <strong>AquaNode in field</strong>
              Sensor node captures pond signals, sends telemetry, and triggers guidance before losses occur.
            </div>
          </Reveal>

          <Stagger className="story-steps">
            {workflowSteps.map((step) => (
              <StaggerItem className="story-step" key={step.id}>
                <small>{step.id}</small>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
