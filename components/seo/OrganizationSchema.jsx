export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Aquelious Industries",

    url: "https://www.aquelious.com",

    logo: "https://www.aquelious.com/logo.png",

    image: "https://www.aquelious.com/og-image.png",

    description:
      "Aquelious Industries builds AI-powered IoT water intelligence solutions for aquaculture, fisheries, and industrial water monitoring.",

    foundingDate: "2026",

    founders: [
      {
        "@type": "Person",
        name: "Pratyush Kumar Mishra",
      },
      {
        "@type": "Person",
        name: "Swapnil Panigrahi",
      },
    ],

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@aquelious.com",
      availableLanguage: ["English"],
    },

    sameAs: [
      "https://www.linkedin.com/company/aquelious"
    ],
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