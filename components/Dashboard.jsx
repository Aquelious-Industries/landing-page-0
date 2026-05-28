import { Reveal } from "@/components/Reveal";

const tiles = [
  ["Dissolved Oxygen", "5.9", "mg/L"],
  ["pH Level", "7.4", "normal"],
  ["Temperature", "28.7°", "watch range"],
  ["Risk State", "Low", "safe operation"],
];

export default function Dashboard() {
  return (
    <section className="section soft" id="dashboard">
      <div className="container">
        <Reveal className="section-head">
          <div className="kicker">Dashboard + mobile app</div>
          <h2>One platform for farm visibility and farmer-side action.</h2>
          <p>Dashboard for telemetry and mobile interface for action guidance.</p>
        </Reveal>

        <div className="dashboard-section">
          <Reveal className="console">
            <div className="console-head"><small>AquaNode Console</small><span className="safe">Online</span></div>
            <div className="console-grid">
              {tiles.map(([label, value, unit]) => (
                <div className="console-tile" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                  <span>{unit}</span>
                  <div className="sparkline" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="phone">
            <div className="phone-screen">
              <div className="phone-content">
                <div className="phone-status"><span>AquaNode</span><span>Live</span></div>
                <div className="risk-ring"><div><strong>Low</strong><span>Pond risk</span></div></div>
                <div className="alert-card"><b>Recommended action</b><p>Maintain aeration cycle. Check feeding window in 25 minutes due to rising temperature trend.</p></div>
                <div className="alert-card"><b>Expert support</b><p>Send telemetry history to an expert if pH trend continues upward for 2 hours.</p></div>
                <div className="alert-card"><b>Automation status</b><p>Aerator integration: future-ready module planned for pilot stage.</p></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
