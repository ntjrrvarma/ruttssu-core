"use client"; // Needs interaction (hover states)

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Install react-icons if needed

export default function Navbar() {
  const pathname = usePathname();

  // Helper for active link styling
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-md border-b border-white/10 bg-black/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LEFT: BRAND IDENTITY */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:animate-pulse shadow-[0_0_10px_#3b82f6]"></div>
          <span className="font-mono font-bold tracking-widest text-lg">
            RUTTSSU<span className="text-gray-500">.CORE</span>
          </span>
        </Link>

        {/* CENTER: SYSTEM NAVIGATION */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {["Projects", "Insights", "Connect"].map((item) => {
            const path = `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={path}
                className={`relative px-2 py-1 transition-colors duration-300 ${
                  isActive(path) ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.toUpperCase()}
                {/* Active Indicator Dot */}
                {isActive(path) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* RIGHT: QUICK ACTIONS */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com" // Update with your actual GitHub later
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <Link
            href="/access"
            className="hidden sm:block px-4 py-1.5 text-xs font-mono border border-gray-700 rounded hover:bg-white hover:text-black transition-all duration-300"
          >
            LOGIN_
          </Link>
        </div>
      </div>
    </nav>
  );
}