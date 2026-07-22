export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
}) {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://www.aquelious.com${path}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.aquelious.com${path}`,
      siteName: "Aquelious Industries",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}