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
const TITLE = "Agent X Labs — Bespoke AI agents for business";
const DESCRIPTION =
  "We design and build custom AI agents that run the parts of your business you don't have time for — answering calls, reviving dead leads, winning reviews, and creating content.";

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
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${spaceGrotesk.variable} ${geist.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
