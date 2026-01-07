"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  // Simple time hook for the HUD
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-brand-void/90 backdrop-blur-sm border-b border-brand-steel flex items-center justify-between px-6">
      
      {/* 1. IDENTITY */}
      <Link href="/" className="group flex items-center gap-2">
        <div className="font-sans font-bold text-xl tracking-wider text-white group-hover:text-brand-cyan transition-colors duration-100">
          R.U.T.T.S.S.U. <span className="text-brand-gold text-xs align-top">[v1.0]</span>
        </div>
      </Link>

      {/* 2. SYSTEM STATUS (Hidden on mobile) */}
      <div className="hidden md:flex items-center gap-3 border border-brand-steel px-4 py-1 bg-brand-panel">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-blink shadow-[0_0_8px_#22c55e]"></div>
        <span className="font-mono text-xs text-brand-cyan tracking-widest">SYSTEM: ONLINE</span>
        <span className="font-mono text-xs text-brand-muted border-l border-brand-steel pl-3 ml-1">{time}</span>
      </div>

      {/* 3. COMMAND MENU TRIGGER */}
      <button className="flex items-center gap-2 font-mono text-xs text-brand-muted hover:text-brand-cyan transition-colors duration-100 group">
        <span className="hidden sm:inline">[ COMMAND_MENU ]</span>
        <span className="sm:hidden">[ :: ]</span>
      </button>

    </nav>
  );
}