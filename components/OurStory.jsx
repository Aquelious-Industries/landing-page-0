"use client";
import "./OurStory.css";
import { motion } from "framer-motion";


export default function OurStory({farmTransitioned}) {
  return (
    <section className="our-story" id="story">

      {/* Water wave visual */}
      <div className="story-wave">
        <img
          src="/images/water-wave.png"
          alt=""
        />
      </div>

      <div className="story-container">

        {/* Introduction */}
        <div className="story-intro">
          {/* <div className="story-eyebrow">
            <span>ABOUT US</span>
            <span className="story-line" />
          </div> */}

          <h2>Our Story</h2>

          <p>
            We are student-led research-based deeptech
            startup building operational intelligence for
            aquaculture. Our story is a journey of pond
            sensing, telemetry, intelligence, farmer app,
            and automation endpoints.
          </p>
        </div>

        {/* Story visual and statement */}
        <div className="story-content">

          <div className="story-image">
            <img
              src="/images/aquaculture-pond.png"
              alt="Aquaculture ponds"
            />
            <div className="story-image">
              {!farmTransitioned && (
                <motion.img
                  layoutId="aquelious-farm-image"
                  src="/images/aquaculture-pond.png"
                  alt="Aerial view of an aquaculture farm"
                  transition={{
                    layout: {
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                />
              )}
            </div>
          </div>

          <div className="story-divider" />

          <div className="story-message">
            <h3>
              A more<br />
              intelligent relationship<br />
              <span>with water.</span>
            </h3>

            <div className="message-line" />

            <p>
              From observation to engineering, we are
              building systems that make water conditions
              visible, understandable, and actionable.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
