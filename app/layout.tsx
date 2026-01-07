import type { Metadata } from "next";
import { Rajdhani, JetBrains_Mono } from "next/font/google"; // Import Rajdhani
import "./globals.css";

// 1. THE DISPLAY FONT (HUD Headers)
const rajdhani = Rajdhani({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani"
});

// 2. THE DATA FONT (Code/Specs)
const mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "R.U.T.T.S.S.U. | System Active",
  description: "Rahul’s Unified Technical Testbed & Sandbox System Unit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${mono.variable} font-sans min-h-screen bg-brand-void text-brand-text antialiased selection:bg-brand-cyan selection:text-brand-void`}>
        {children}
      </body>
    </html>
  );
}