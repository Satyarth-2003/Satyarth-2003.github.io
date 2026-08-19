import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "@/components/providers";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { profile } from "@/content/site";
import "./globals.css";

// geist for display + mono, hanken for body warmth
const display = Geist({
  variable: "--font-display-src",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const mono = Geist_Mono({
  variable: "--font-mono-src",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const body = Hanken_Grotesk({
  variable: "--font-body-src",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const siteUrl = "https://satyarth-2003.github.io";
const description =
  "Satyarth Prakash Srivastava is an AI Engineer with production experience building LLM-powered automation systems, GenAI pipelines, and agentic workflows at scale.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Satyarth Prakash Srivastava · AI Engineer",
    template: "%s · Satyarth Prakash Srivastava",
  },
  description,
  keywords: [
    "Satyarth Prakash Srivastava",
    "Satyarth Srivastava",
    "AI Engineer",
    "Generative AI",
    "GenAI",
    "LangChain",
    "LangGraph",
    "RAG",
    "Agentic Workflows",
    "Multimodal AI",
    "Computer Vision",
    "Python",
    "PyTorch",
    "FastAPI",
    "Adda247",
    "Chandigarh University",
  ],
  authors: [{ name: "Satyarth Prakash Srivastava", url: siteUrl }],
  creator: "Satyarth Prakash Srivastava",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "en_US",
    title: "Satyarth Prakash Srivastava · AI Engineer",
    description:
      "AI Engineer building production LLM-powered automation systems, GenAI pipelines, and agentic workflows at scale.",
    siteName: "Satyarth Prakash Srivastava",
    images: [
      {
        url: "/satyarth-og-image.png?v=2",
        width: 2560,
        height: 1280,
        alt: "Satyarth Prakash Srivastava · AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyarth Prakash Srivastava · AI Engineer",
    description:
      "AI Engineer building production LLM-powered automation systems, GenAI pipelines, and agentic workflows at scale.",
    images: ["/satyarth-og-image.png?v=2"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d0f",
  colorScheme: "dark",
};

// structured data for personal brand & SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Satyarth Prakash Srivastava",
      alternateName: ["Satyarth Srivastava", "Satyarth P. Srivastava"],
      url: siteUrl,
      jobTitle: "AI Engineer",
      email: profile.email,
      description,
      worksFor: {
        "@type": "Organization",
        name: "Adda Education",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Chandigarh University",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      image: `${siteUrl}/assets/portrait.jpg`,
      sameAs: [profile.socials.github, profile.socials.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Satyarth Prakash Srivastava Portfolio",
      author: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      style={{ backgroundColor: "#0b0d0f" }}
      className={`${display.variable} ${mono.variable} ${body.variable}`}
    >
      <body className="min-h-dvh font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
