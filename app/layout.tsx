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
  metadataBase: new URL("https://yanbao-li-portfolio.liyanbao06.chatgpt.site"),
  title: "Yanbao Li (Yan) — Personal Homepage",
  description:
    "Personal homepage of Yanbao Li (Yan), an Information Systems student at Stony Brook University interested in software engineering and applied AI.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
