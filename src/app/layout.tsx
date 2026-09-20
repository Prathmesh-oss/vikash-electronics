import type { Metadata, Viewport } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { BUSINESS_DATA } from "@/data/business";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const viewport: Viewport = {
  themeColor: "#111827",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vikashelectronics.com"),
  title: {
    default: `${BUSINESS_DATA.name} | DJ & Electronic Equipment Repairing in Surat`,
    template: `%s | ${BUSINESS_DATA.name}`,
  },
  description: `${BUSINESS_DATA.name} specializes in professional repair and servicing for Speakers, Power Amplifiers, Sharpy Moving Head Lights, DJ Lights, Mixers, Home Theatres, and TVs in Udhna, Surat, Gujarat. Call: ${BUSINESS_DATA.formattedPhone}`,
  keywords: [
    "DJ Equipment Repairing Surat",
    "Speaker Repairing Surat",
    "Power Amplifier Repair Surat",
    "Sharpy Light Repair Surat",
    "Moving Head Light Repair",
    "Sound Mixer Repairing Udhna",
    "Home Theatre Repairing Surat",
    "Vikash Electronics Udhna Surat",
    "DJ Sound System Repair Gujarat",
  ],
  authors: [{ name: BUSINESS_DATA.name }],
  creator: BUSINESS_DATA.name,
  publisher: BUSINESS_DATA.name,
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vikashelectronics.com",
    siteName: BUSINESS_DATA.name,
    title: `${BUSINESS_DATA.name} | DJ & Electronic Equipment Repairing in Surat`,
    description: `Professional repair solutions for DJ sound systems, amplifiers, stage lighting, moving head lights, and electronic gear in Surat. Direct Helpline: ${BUSINESS_DATA.formattedPhone}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_DATA.name} | DJ & Electronic Equipment Repairing`,
    description: `Professional repair for DJ speakers, amplifiers, Sharpy lights & sound mixers in Surat. Call ${BUSINESS_DATA.formattedPhone}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org LocalBusiness structured data for rich snippet indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: BUSINESS_DATA.name,
    description: BUSINESS_DATA.description,
    telephone: `+91${BUSINESS_DATA.phone}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 199, Sarve No. 1-2, Sanjay Nagar, Udhna Yard, Udhna",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.1702",
      longitude: "72.8311",
    },
    url: "https://vikashelectronics.com",
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "21:00",
      },
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${caveat.variable} font-sans bg-bg-primary text-brand-gray antialiased min-h-screen selection:bg-brand-blue selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
