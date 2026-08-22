import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yanbaoli.me"),
  title: "Yanbao Li (Yan) — Personal Homepage",
  description:
    "Personal homepage of Yanbao Li (Yan), an Information Systems student at Stony Brook University interested in software engineering and applied AI.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Yanbao Li — Software Engineering · Applied AI",
    description: "Personal homepage of Yanbao Li (Yan), Stony Brook University.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Yanbao Li personal homepage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanbao Li — Software Engineering · Applied AI",
    description: "Personal homepage of Yanbao Li (Yan), Stony Brook University.",
    images: ["/og.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yanbao Li",
  alternateName: "Yan",
  url: "https://yanbaoli.me",
  image: "https://yanbaoli.me/yanbao-li-photo.png",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
