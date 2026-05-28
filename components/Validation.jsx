 "use client";

import { motion } from "framer-motion";
import { validationBars } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export default function Validation() {
  return (
    <section className="section white" id="validation">
      <div className="container">
        <Reveal className="section-head">
          <div className="kicker">Research</div>
          <h2>The website now supports the data you already collected.</h2>
          <p>Survey validation is presented visually so the product does not feel like an assumption.</p>
        </Reveal>

        <div className="validation-grid">
          <Reveal className="survey-chart">
            <h3>Farmer problem validation signals</h3>
            {validationBars.map(([label, value, percent], index) => (
              <div className="bar" key={label}>
                <label>{label}</label>
                <div className="bar-line">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: index * 0.12 }}
                  />
                </div>
                <strong>{value}</strong>
              </div>
            ))}
          </Reveal>

          <Reveal className="validation-card">
            <h3>Field-first product positioning</h3>
            <p>Aquelious should be presented as a company building operational intelligence infrastructure for aquaculture, not only a sensor or dashboard.</p>
            <div className="quote">“Farmers need clear guidance, affordable monitoring, and early warning support before water instability turns into fish mortality.”</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
