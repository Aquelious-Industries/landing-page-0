
"use client";

import { useRef } from "react";
import { LayoutGroup, useInView } from "framer-motion";

import OurStory from "./OurStory";
import HowWeAutomate from "./HowWeAutomate";

export default function StoryAutomationFlow() {
  const automationRef = useRef(null);

  const hasReachedAutomation = useInView(automationRef, {
    amount: 0.2,
    once: true,
  });

  return (
    <LayoutGroup id="aquelious-farm-transition">
      <OurStory
        farmTransitioned={hasReachedAutomation}
      />

      <HowWeAutomate
        farmTransitioned={hasReachedAutomation}
        sectionRef={automationRef}
      />
    </LayoutGroup>
  );
}
