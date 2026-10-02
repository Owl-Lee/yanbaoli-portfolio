import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yanbaoli.me"),
  title: "Yanbao Li (Yan) — Software Engineering · Applied AI",
  description:
    "Portfolio of Yanbao Li (Yan), a Stony Brook Information Systems student building local-first desktop apps and explainable AI services.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "256x256" }],
    apple: [{ url: "/favicon.png", type: "image/png", sizes: "256x256" }],
  },
  openGraph: {
    title: "Yanbao Li — Software Engineering · Applied AI",
    description: "Stony Brook Information Systems student shipping local-first software and explainable AI projects.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Yanbao Li — Software Engineering and Applied AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanbao Li — Software Engineering · Applied AI",
    description: "Stony Brook Information Systems student shipping local-first software and explainable AI projects.",
    images: ["/og.png"],
  },
};

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Noto+Serif+SC:wght@500;700&family=Noto+Sans+SC:wght@400;500;700&display=swap";

// Marks the document as script-enabled before first paint so reveal animations never hide content without JS.
const ENABLE_JS_STYLES = "document.documentElement.classList.add('js')";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yanbao Li",
  alternateName: "Yan",
  url: "https://yanbaoli.me",
  image: "https://yanbaoli.me/yanbao-li-photo.jpg",
  jobTitle: "Information Systems Student",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Stony Brook University",
  },
  sameAs: [
    "https://github.com/Owl-Lee",
    "https://www.linkedin.com/in/yanbao-li-772a45377/",
  ],
  knowsAbout: [
    "Software Engineering",
    "Applied Artificial Intelligence",
    "Machine Learning",
    "Data and Optimization",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />
        <script dangerouslySetInnerHTML={{ __html: ENABLE_JS_STYLES }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
