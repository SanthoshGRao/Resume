import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santhosh G Rao | Software Developer & AI Builder",
  description: "Portfolio of Santhosh G Rao showcasing Full Stack Development, Generative AI, AI Systems, Computer Vision, and intelligent automation projects.",
  openGraph: {
    title: "Santhosh G Rao | Software Developer & AI Builder",
    description: "Portfolio of Santhosh G Rao showcasing Full Stack Development, Generative AI, AI Systems, Computer Vision, and intelligent automation projects.",
    url: "https://santhoshgrao.github.io/Resume",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santhosh G Rao | Software Developer & AI Builder",
    description: "Portfolio of Santhosh G Rao showcasing Full Stack Development, Generative AI, AI Systems, Computer Vision, and intelligent automation projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Santhosh G Rao",
    "jobTitle": "Software Developer & AI Builder",
    "url": "https://santhoshgrao.github.io/Resume",
    "sameAs": [
      "https://linkedin.com/in/santhosh-g-rao",
      "https://github.com/SanthoshGRao"
    ],
    "knowsAbout": [
      "Software Engineering",
      "Full Stack Development",
      "Generative AI",
      "Computer Vision",
      "Natural Language Processing",
      "Unreal Engine"
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        {/* Injecting Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Direct Outfit & Fira Code fonts embedding */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#0b0f19] text-[#f8fafc]">
        {children}
      </body>
    </html>
  );
}
