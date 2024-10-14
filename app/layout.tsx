import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from "@/providers/theme-provider";
const dmSans = DM_Sans({ subsets: ["latin"] });
import Navbar from "@/components/ui/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react';
export const metadata: Metadata = {
  title: "YouShorts AI",
  description: "Create Faceless Videos Very Fast with our Ai Saas turn your text prompts into YouTube shorts, Generate Scripts and Turn it to video Reels Shorts",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased bg-[#ffffff]")}>
        <Navbar />
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="AW-722690554" />
    </html>
  );
}