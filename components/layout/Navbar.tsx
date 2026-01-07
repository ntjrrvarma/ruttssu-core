"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo"; // Use the new component
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    // Fixed height, blurred background, border bottom
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-brand-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* 1. BRAND LOGO */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Logo size="md" />
        </Link>

        {/* 2. CENTER LINKS (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wide">
          {["Projects", "Insights", "Connect"].map((item) => {
            const path = `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={path}
                className={`uppercase transition-colors ${
                  isActive(path) ? "text-brand-accent" : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* 3. RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}