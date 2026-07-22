export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "Aquelious Industries",

    url: "https://www.aquelious.com",

    description:
      "AI-powered Water Intelligence Platform",

    publisher: {
      "@type": "Organization",
      name: "Aquelious Industries",
    },

    inLanguage: "en-US",
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