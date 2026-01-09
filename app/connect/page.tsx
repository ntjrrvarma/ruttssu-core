"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck, FaMapMarkerAlt, FaSatelliteDish } from "react-icons/fa";

export default function Connect() {
  const [copied, setCopied] = useState(false);
  const email = "n.r.rahulvarma@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 pb-12 max-w-7xl mx-auto flex flex-col">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-steel pb-6">
        <div>
          <Link href="/" className="text-xs font-mono text-brand-muted hover:text-brand-cyan mb-4 inline-flex items-center gap-2 transition-colors">
            <FaArrowLeft /> [ RETURN_TO_DASHBOARD ]
          </Link>
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-white uppercase tracking-tight">
            ESTABLISH <span className="text-brand-cyan">UPLINK</span>
          </h1>
          <p className="font-mono text-xs text-brand-muted mt-2">
            {'>'} DIR: /ROOT/COMMUNICATIONS // SECURE_CHANNEL
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">

        {/* 2. PRIMARY CHANNEL (EMAIL) */}
        <div className="md:col-span-2 bg-brand-panel border border-brand-steel p-8 relative group">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-muted/30 group-hover:border-brand-cyan transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-muted/30 group-hover:border-brand-cyan transition-colors"></div>
          
          <div className="flex flex-col items-center justify-center text-center space-y-6 py-8">
            <div className="w-16 h-16 rounded-full bg-brand-steel/20 flex items-center justify-center text-brand-cyan text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope />
            </div>
            
            <div>
              <h2 className="text-sm font-sans font-bold text-brand-muted uppercase tracking-widest mb-2">
                // DIRECT_FREQUENCY
              </h2>
              <div className="text-2xl md:text-4xl font-mono text-white font-bold break-all">
                {email}
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href={`mailto:${email}`}
                className="bg-brand-cyan text-brand-void px-8 py-3 font-mono font-bold text-sm hover:bg-white transition-colors"
              >
                [ SEND_TRANSMISSION ]
              </a>
              <button 
                onClick={handleCopy}
                className="border border-brand-steel px-4 py-3 text-brand-cyan hover:bg-brand-steel/20 transition-colors"
                title="Copy Frequency"
              >
                {copied ? <FaCheck /> : <FaCopy />}
              </button>
            </div>
          </div>
        </div>

        {/* 3. SIGNAL CHANNELS (SOCIALS) */}
        <div className="bg-brand-panel border border-brand-steel p-8 relative group hover:border-brand-cyan transition-colors">
          <h3 className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-8 flex items-center gap-2">
            <FaSatelliteDish className="text-brand-cyan" /> // SIGNAL_SOURCES
          </h3>
          
          <div className="space-y-4">
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/ntjrrvarma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-brand-steel bg-brand-void/50 hover:border-brand-cyan hover:bg-brand-steel/20 transition-all group/link"
            >
              <div className="flex items-center gap-4">
                <FaLinkedin className="text-2xl text-brand-muted group-hover/link:text-brand-cyan transition-colors" />
                <div>
                  <div className="text-xs font-mono text-brand-muted">LINKEDIN_CORP</div>
                  <div className="text-sm font-bold text-white">/in/ntjrrvarma</div>
                </div>
              </div>
              <div className="text-brand-cyan opacity-0 group-hover/link:opacity-100 transition-opacity">
                {'>'}
              </div>
            </a>

            {/* GitHub (Assuming placeholder or if you have one) */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 border border-brand-steel bg-brand-void/50 hover:border-brand-cyan hover:bg-brand-steel/20 transition-all group/link"
            >
              <div className="flex items-center gap-4">
                <FaGithub className="text-2xl text-brand-muted group-hover/link:text-brand-cyan transition-colors" />
                <div>
                  <div className="text-xs font-mono text-brand-muted">GITHUB_REPO</div>
                  <div className="text-sm font-bold text-white">/rahulnr</div>
                </div>
              </div>
              <div className="text-brand-cyan opacity-0 group-hover/link:opacity-100 transition-opacity">
                {'>'}
              </div>
            </a>
          </div>
        </div>

        {/* 4. BASE COORDINATES */}
        <div className="bg-brand-panel border border-brand-steel p-8 relative group hover:border-brand-cyan transition-colors">
          <h3 className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-8 flex items-center gap-2">
            <FaMapMarkerAlt className="text-brand-cyan" /> // CURRENT_LOC
          </h3>
          
          <div className="h-full flex flex-col justify-center space-y-6">
            <div className="flex justify-between items-end border-b border-brand-steel/50 pb-2">
              <span className="text-xs font-mono text-brand-muted">SECTOR</span>
              <span className="text-sm font-bold text-white">CHENNAI, INDIA</span>
            </div>
            <div className="flex justify-between items-end border-b border-brand-steel/50 pb-2">
              <span className="text-xs font-mono text-brand-muted">COORDS</span>
              <span className="text-sm font-bold text-brand-gold">13.08°N, 80.27°E</span>
            </div>
            <div className="flex justify-between items-end border-b border-brand-steel/50 pb-2">
              <span className="text-xs font-mono text-brand-muted">AVAILABILITY</span>
              <span className="text-sm font-bold text-green-500 animate-pulse">OPEN_TO_WORK</span>
            </div>
            
            <div className="mt-4 text-xs font-mono text-brand-muted leading-relaxed">
              * Transmission lines are open for collaborative inquiries and architectural consulting.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}