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
  title: "YouShorts.ai",
  description: "Create Faceless Videos Very Fast",
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
