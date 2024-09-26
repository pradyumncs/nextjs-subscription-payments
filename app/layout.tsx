import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from "@/providers/theme-provider";
import BottomNav from "@/bottomsidebar/bottom-nav";
const dmSans = DM_Sans({ subsets: ["latin"] });
import Navbar from "@/components/ui/Navbar";


export const metadata: Metadata = {
  title: "YouShorts AI",
  description: "Create Faceless Videos Very Fast with our Ai Saas turn your text prompts into YouTube shorts, Generate Scripts and Turn it to video Reels Shorts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
       
   <body className={clsx(dmSans.className, "antialiased bg-[#ffffff]")}>
   <Navbar />

        {children}
      
      </body>
     
    </html>
    </>
  );
}
