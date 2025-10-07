import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/app/components/ThemeProvider";
import Navigation from "@/app/components/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dahalsrijan.com.np/"),
  title: {
    default: "Srijan Dahal",
    template: "%s | Srijan Dahal",
  },
  description:
    "Software Engineer based in Australia. Building for the web with TypeScript, Node.js, and Java — blending design, engineering, and AI curiosity.",
  openGraph: {
    title: "Srijan Dahal",
    description:
      "Software Engineer based in Australia. Sharing ideas on web engineering, systems, and the journey of building better tech.",
    url: "https://www.dahalsrijan.com.np/",
    siteName: "Srijan Dahal",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://www.dahalsrijan.com.np/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Srijan Dahal – Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srijan Dahal",
    description:
      "Software Engineer from Australia. Exploring simplicity in web engineering, AI, and systems design.",
    creator: "@srijandahal",
    images: ["https://www.dahalsrijan.com.np/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="width-full bg-contrast text-primary antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
