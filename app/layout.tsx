import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 👇 These imports must match your folder structure exactly
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Load the Google Font (Inter is clean & techy)
const inter = Inter({ subsets: ["latin"] });

// 🏷️ SEO & BROWSER TAB INFO
export const metadata: Metadata = {
  title: "Rahul N R | Ruttssu Core",
  description: "The personal operating system and portfolio of Rahul N R. Specializing in Scalable Cloud Architecture and UI Design.",
  keywords: ["Next.js", "Supabase", "Portfolio", "System Architect", "Rahul N R"],
  openGraph: {
    title: "Rahul N R - Ruttssu OS",
    description: "Rapid Unified Technology Transfer & Secure System Unit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#0a0a0a] text-white selection:bg-blue-500 selection:text-white`}>
        
        {/* 1. THE SYSTEM HUD (Navbar) */}
        <Navbar />

        {/* 2. THE MAIN CONTENT AREA 
            - 'flex-grow' pushes the footer down if content is short.
            - 'pt-16' adds padding so the fixed Navbar doesn't hide your content.
        */}
        <main className="flex-grow flex flex-col pt-16">
          {children}
        </main>

        {/* 3. THE BRAND FOOTER */}
        <Footer />
        
      </body>
    </html>
  );
}