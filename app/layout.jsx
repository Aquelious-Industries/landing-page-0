import "./globals.css";

export const metadata = {
  title: "Aquelious Industries | Intelligence Beneath The Depth",
  
  description:
    "Aquelious builds AquaNode, a field-connected aquaculture intelligence platform for telemetry, predictive alerts, farmer guidance, and automation-ready pond operations.",
  keywords: [
    "Aquelious",
    "Aquelious Industries",
    "AquaNode",
    "aquaculture technology",
    "pond monitoring",
    "fish farming",
    "water telemetry",
    "aquaculture automation",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
