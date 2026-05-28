export const metrics = [
  { value: "25/25", label: "Water instability validated" },
  { value: "20/25", label: "Cost barrier observed" },
  { value: "24/7", label: "Monitoring direction" },
];

export const problemItems = [
  ["Manual", "Water checks happen irregularly and late."],
  ["Costly", "Existing monitoring tools are not affordable for many farmers."],
  ["Delayed", "Expert guidance is not available exactly when risk appears."],
  ["Reactive", "Farmers act after symptoms become visible."],
];

export const workflowSteps = [
  {
    id: "01",
    title: "Sense water instability at pond level.",
    body:
      "AquaNode captures core pond signals continuously, reducing dependency on manual observation and delayed sample testing.",
  },
  {
    id: "02",
    title: "Transmit telemetry into the intelligence layer.",
    body:
      "Raw field readings become structured operational data that can be tracked, compared, and used for risk detection.",
  },
  {
    id: "03",
    title: "Alert the farmer with clear action guidance.",
    body:
      "The platform does not only show numbers. It tells farmers what condition needs attention and why action is required.",
  },
  {
    id: "04",
    title: "Prepare for aerator and feeder automation.",
    body:
      "As the product matures, AquaNode becomes an execution layer that can trigger or recommend aerator and feeder actions.",
  },
];

export const features = [
  {
    size: "large",
    icon: "≈",
    title: "Realtime water telemetry",
    body:
      "Continuous tracking of pond signals such as dissolved oxygen, pH, temperature, and risk indicators.",
    points: ["Live pond status", "Historical trend visibility", "Multi-pond monitoring direction"],
  },
  {
    size: "medium",
    icon: "!",
    title: "Predictive risk alerts",
    body:
      "Early warning logic that helps farmers act before fish stress or mortality becomes visible.",
    points: ["Low / medium / high risk state", "Action urgency", "Mobile alerting"],
  },
  {
    size: "medium",
    icon: "⚙",
    title: "Automation-ready control",
    body:
      "Built toward aerator and feeder integration so the platform can move from monitoring to execution.",
    points: ["Aerator recommendation", "Feeding window support", "Future remote execution"],
  },
  {
    size: "wide",
    icon: "▣",
    title: "Farmer-first decision support",
    body:
      "Instead of making farmers interpret complex charts, AquaNode converts data into simple operational guidance.",
    points: ["Plain language alerts", "Dosage/action workflow direction", "Expert escalation support"],
  },
  {
    size: "small",
    icon: "⌁",
    title: "Expert consultation bridge",
    body:
      "Structured telemetry helps experts diagnose problems faster with real pond context.",
    points: ["Telemetry history", "Incident record", "Farm context"],
  },
];

export const ecosystem = [
  ["01 · Pond", "Sensor node deployed", "AquaNode starts reading water behaviour continuously."],
  ["02 · Signal", "Telemetry stream", "Pond readings become a reliable operational data stream."],
  ["03 · Intelligence", "Risk prediction", "Water instability becomes actionable risk alerts."],
  ["04 · Farmer", "Mobile guidance", "The farmer receives simple guidance, not raw data."],
  ["05 · Automation", "Action endpoints", "Aerator and feeder control become the future execution layer."],
];

export const validationBars = [
  ["Water instability problem", "25/25", 100],
  ["Lack of trusted guidance", "16/25", 64],
  ["Lack nearby analysis support", "19/25", 76],
  ["Cannot afford current solutions", "20/25", 80],
  ["Annual losses above 30%", ">30%", 70],
];

export const roadmap = [
  ["01", "Build", "Finalize sensor node, telemetry pipeline, data model, dashboard interface, and farmer alert logic."],
  ["02", "Test", "Run controlled testing in water environments and validate sensor stability and alert accuracy."],
  ["03", "Pilot", "Deploy with selected farmers, aggregators, or institutional partners to collect real operational feedback."],
  ["04", "Scale", "Expand toward multi-pond intelligence, automation integrations, and region-wise aquaculture operations."],
];
