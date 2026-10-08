import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EMERGE FOR GOOD | Innovation Challenge 2026",
    template: "%s | EMERGE FOR GOOD",
  },
  description: "Got an idea that could fix something real? Bring it. Seven domains, Rs 1,75,000 in prizes, and a live finale at Pondicherry University. A state-level science expo for young innovators.",
  keywords: [
    "Emerge for Good",
    "Innovation Challenge 2026",
    "Science Expo Pondicherry",
    "Student Innovators",
    "Pondicherry University",
    "Smart City",
    "Renewable Energy",
    "Waste Management",
    "Robotics",
    "Space Science",
    "ISRO Trip Sriharikota",
    "School Students Competition",
    "Science Competition India",
    "Puducherry Science Expo"
  ],
  authors: [{ name: "Emerge For Good" }],
  creator: "Emerge For Good",
  publisher: "Emerge For Good",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "EMERGE FOR GOOD",
    title: "EMERGE FOR GOOD | Innovation Challenge 2026",
    description: "A platform for school students to showcase ideas, solve real-world problems and create a better tomorrow. Join the innovation challenge at Pondicherry University.",
    images: [
      {
        url: "/school_students.jpg",
        width: 1200,
        height: 630,
        alt: "Emerge For Good Innovation Challenge - School Students",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMERGE FOR GOOD | Innovation Challenge 2026",
    description: "Got an idea that could fix something real? Bring it. Seven domains, Rs 1,75,000 in prizes, and a live finale at Pondicherry University.",
    images: ["/school_students.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
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
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-brand-warm-white text-brand-dark-navy font-sans">
        {children}
      </body>
    </html>
  );
}
