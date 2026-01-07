import Link from "next/link";
import { FaGithub, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] overflow-hidden">
      
      {/* BACKGROUND GRID EFFECT (The "Architect" Vibe) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>

      <div className="z-10 text-center max-w-3xl px-6">
        
        {/* THE "SYSTEM ONLINE" BADGE */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          SYSTEM ONLINE
        </div>

        {/* THE HEADLINE */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Rahul <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">N R</span>
        </h1>

        {/* THE PITCH */}
        <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
          Full Stack Engineer. System Architect. Designer.<br />
          Bridging the gap between <span className="text-white font-medium">complex backend logic</span> and <span className="text-white font-medium">intuitive design</span>.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/connect"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:scale-105"
          >
            <span className="mr-2">Connect</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="https://github.com" // Update this with your real GitHub URL later
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md border border-gray-800 bg-black px-8 font-medium text-gray-300 transition-all duration-300 hover:border-gray-600 hover:text-white"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
      
    </div>
  );
}