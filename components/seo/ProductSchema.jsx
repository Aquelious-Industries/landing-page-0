export default function ProductSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Product",

    name: "AquaNode",

    brand: {
      "@type": "Brand",
      name: "Aquelious Industries",
    },

    manufacturer: {
      "@type": "Organization",
      name: "Aquelious Industries",
    },

    description:
      "AI-powered IoT ecosystem for aquaculture, fisheries, and industrial water monitoring.",

    image: "https://www.aquelious.com/og-image.png",

    category: "Water Monitoring Ecosystem",

    url: "https://www.aquelious.com/products/aquagrid",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}