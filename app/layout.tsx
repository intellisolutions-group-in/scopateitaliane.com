import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScopateItaliane | Precision Enterprise Engineering",
  description: "Precision software development, cloud infrastructure, AI integrations, and technical consulting.",
  icons: {
    icon: [
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/favicon.ico",
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
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" />
      </head>
      <body className="min-h-full flex flex-col bg-surface-container text-primary selection:bg-secondary selection:text-white">
        <div className="relative min-h-screen overflow-x-clip flex flex-col flex-grow">
          {/* Pulsing background blur blobs for global theme consistency */}
          <div className="absolute top-20 left-10 md:left-1/4 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-secondary/10 rounded-full filter blur-[100px] -z-10 pointer-events-none animate-pulse duration-[8000ms]"></div>
          <div className="absolute bottom-20 right-10 md:right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#6366F1]/8 rounded-full filter blur-[90px] -z-10 pointer-events-none animate-pulse duration-[6000ms]"></div>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </div>
      </body>
    </html>
  );
}

