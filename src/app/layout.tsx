import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Geist } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-spacemono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://agentxlabs.com";
const TITLE = "Agent X Labs - Bespoke AI agents for business";
const DESCRIPTION =
  "We design and build custom AI agents that run the parts of your business you don't have time for - answering calls, reviving dead leads, winning reviews, and creating content.";
const OG_IMAGE = "/agents/hero.jpg";

export const metadata: Metadata = {
  title: { default: TITLE, template: "%s · Agent X Labs" },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: "Agent X Labs",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Agent X Labs",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_GB",
    images: [{ url: OG_IMAGE, width: 1920, height: 1080, alt: "Agent X Labs - bespoke AI agents for business" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Agent X Labs",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo_axl.png`,
  description: DESCRIPTION,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${spaceGrotesk.variable} ${geist.variable} ${spaceMono.variable}`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
      </body>
    </html>
  );
}
