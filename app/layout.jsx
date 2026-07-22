import "./globals.css";

import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebsiteSchema from "@/components/seo/WebsiteSchema";
import ProductSchema from "@/components/seo/ProductSchema";
export const metadata = {
  metadataBase: new URL("https://www.aquelious.com"),

  title: {
    default: "Aquelious Industries | AI-Powered Water Intelligence",
    template: "%s | Aquelious Industries",
  },

  description:
    "Aquelious Industries builds AI-powered IoT water intelligence solutions for aquaculture, fisheries, and industrial water monitoring. Our flagship platform, AquaNode, delivers real-time telemetry, predictive analytics, and operational insights.",

  keywords: [
    "Aquelious Industries",
    "Aquelious",
    "AquaNode",
    "AI Water Monitoring",
    "IoT Water Monitoring",
    "Water Quality Monitoring",
    "Aquaculture Technology",
    "Fish Farming",
    "Industrial Water Monitoring",
    "Environmental Monitoring",
    "Predictive Analytics",
    "Smart Aquaculture",
    "Water Intelligence",
  ],

  authors: [
    {
      name: "Aquelious Industries",
      url: "https://www.aquelious.com",
    },
  ],

  creator: "Aquelious Industries",

  publisher: "Aquelious Industries",

  applicationName: "Aquelious Industries",

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aquelious.com",
    siteName: "Aquelious Industries",

    title: "Aquelious Industries | AI-Powered Water Intelligence",

    description:
      "Building AI-powered IoT solutions for aquaculture, fisheries, and industrial water monitoring.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aquelious Industries",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Aquelious Industries",

    description:
      "Building AI-powered IoT solutions for aquaculture and industrial water monitoring.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <meta
          name="theme-color"
          content="#0A0F1C"
        />

        <meta
          name="format-detection"
          content="telephone=no"
        />

        <link
          rel="canonical"
          href="https://www.aquelious.com"
        />
      </head>

      <body suppressHydrationWarning>
        <OrganizationSchema />

        <WebsiteSchema />

        <ProductSchema />
        {children}
      </body>
    </html>
  );
}