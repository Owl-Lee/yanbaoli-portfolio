import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yanbaoli.me"),
  title: "Yanbao Li (Yan) — Personal Homepage",
  description:
    "Portfolio of Yanbao Li (Yan), a Stony Brook Information Systems student shipping local-first software and explainable AI projects.",
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
    <html lang="en">
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
