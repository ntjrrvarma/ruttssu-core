import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 👇 THIS LINE MUST MATCH YOUR FOLDER EXACTLY
import Footer from "@/components/layout/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul N R | Ruttssu Core",
  description: "System Online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#0a0a0a] text-white`}>
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}