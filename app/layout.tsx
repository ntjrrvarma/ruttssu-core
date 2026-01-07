import type { Metadata } from "next";
import { Rajdhani, Space_Mono } from "next/font/google"; 
import "./globals.css";

// 1. THE VOICE (Headers)
const rajdhani = Rajdhani({ 
  subsets: ["latin"], 
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani"
});

// 2. THE DATA (Body)
const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-space-mono" 
});

export const metadata: Metadata = {
  title: "R.U.T.T.S.S.U. v1.0",
  description: "Rahul’s Unified Technical Testbed & Sandbox System Unit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${spaceMono.variable} font-sans min-h-screen bg-brand-void text-brand-text antialiased overflow-x-hidden selection:bg-brand-cyan selection:text-brand-void`}>
        {children}
      </body>
    </html>
  );
}