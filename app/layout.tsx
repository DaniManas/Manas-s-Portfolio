import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manasdani.dev"),
  title: "Manas Dani — AI/ML Engineer",
  description:
    "AI/ML Engineer specializing in production GenAI systems — RAG pipelines, multi-agent orchestration, and LLM applications. MS Data Science @ Indiana University.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "GenAI",
    "RAG pipelines",
    "LangChain",
    "LangGraph",
    "multi-agent",
    "LLM",
    "FastAPI",
    "Python",
    "Indiana University",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://manasdani.dev",
    title: "Manas Dani — AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in production GenAI systems — RAG pipelines, multi-agent orchestration, and LLM applications.",
    siteName: "Manas Dani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manas Dani — AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in production GenAI systems — RAG pipelines, multi-agent orchestration, and LLM applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="antialiased font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C96442] focus:text-white focus:rounded-lg focus:font-sans focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
