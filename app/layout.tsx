import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-NK2JGX3FQH";

export const metadata: Metadata = {
  title: "momo-kibidango - 3-Model Speculative Decoding for OpenClaw",
  description: "2x faster LLM inference on Apple Silicon with zero quality loss. Production-ready implementation of Google Research's pyramid speculative decoding.",
  keywords: "LLM, speculative decoding, OpenClaw, Apple Silicon, inference optimization, machine learning",
  authors: [{ name: "ReillyDesignStudio" }],
  openGraph: {
    title: "momo-kibidango - 3-Model Speculative Decoding",
    description: "2x faster LLM inference on Apple Silicon with zero quality loss",
    url: "https://momo-kibidango.dev",
    siteName: "momo-kibidango",
    images: [
      {
        url: "https://momo-kibidango.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "momo-kibidango - 3-Model Speculative Decoding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "momo-kibidango - 3-Model Speculative Decoding",
    description: "2x faster LLM inference on Apple Silicon with zero quality loss",
    images: ["https://momo-kibidango.dev/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}