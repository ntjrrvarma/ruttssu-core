import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

// 1. Bento Card Component (Visual Protocol)
const BentoCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`
    bg-brand-panel border border-brand-steel p-6 
    hover:border-brand-cyan transition-colors duration-100 ease-linear
    flex flex-col relative group overflow-hidden
    ${className}
  `}>
    {/* Corner Decor */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-muted/30 group-hover:border-brand-cyan transition-colors"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-muted/30 group-hover:border-brand-cyan transition-colors"></div>
    {children}
  </div>
);

// 2. Stat Bar Component
const StatBar = ({ label, value }: { label: string; value: number }) => (
  <div className="mb-3">
    <div className="flex justify-between text-xs font-mono text-brand-muted mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-1 w-full bg-brand-steel">
      <div 
        className="h-full bg-brand-cyan/80 shadow-[0_0_10px_#00E5FFaa]" 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen md:h-screen pt-20 pb-4 px-4 md:px-8 max-w-7xl mx-auto flex flex-col">
      
      {/* THE GRID SYSTEM (Fits screen height on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 flex-grow">

        {/* BLOCK A: IDENTITY CORE (Restored the Headline Visuals) */}
        <BentoCard className="md:col-span-3 md:row-span-2 justify-between">
          <div>
            <div className="inline-block px-2 py-1 bg-brand-steel/30 text-brand-cyan font-mono text-xs mb-4">
              // ENGINEER_PROFILE
            </div>
            
            {/* THE HEADLINE IS BACK */}
            <h1 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight text-white mb-2 leading-none">
              BUILDING THE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-600">FOUNDATION.</span>
            </h1>
            
            <h2 className="text-lg md:text-xl text-brand-muted font-sans font-medium mb-6 mt-2">
              Rahul N R <span className="text-brand-steel mx-2">//</span> Full Stack Engineer
            </h2>

            <div className="max-w-xl text-brand-muted font-mono text-xs md:text-sm leading-relaxed border-l-2 border-brand-steel pl-4">
              <p>
                Initiating R.U.T.T.S.S.U Protocol. Specialized in bridging backend logic with precision frontend UI.
              </p>
              <p className="mt-2 text-brand-text">
                <span className="text-brand-cyan">{'>'} CURRENT_OBJECTIVE:</span> Building scalable cloud systems & minimalist digital environments.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 bg-brand-cyan text-brand-void px-6 py-3 font-mono font-bold text-sm hover:bg-white transition-colors duration-200"
            >
              [ EXECUTE_BIO ] <FaArrowRight />
            </Link>
          </div>
        </BentoCard>

        {/* BLOCK B: LIVE TELEMETRY */}
        <BentoCard className="md:col-span-1 justify-center space-y-4">
          <div className="text-xs font-mono text-brand-muted space-y-2">
            <div className="flex justify-between">
              <span>LOC:</span>
              <span className="text-brand-text">13.08°N, 80.27°E</span>
            </div>
            <div className="flex justify-between">
              <span>LATENCY:</span>
              <span className="text-green-500">24ms</span>
            </div>
            <div className="flex justify-between">
              <span>UPTIME:</span>
              <span className="text-brand-gold animate-pulse">99.9%</span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-brand-steel"></div>
          <div className="text-center">
            <div className="text-4xl font-sans font-bold text-brand-text">26°C</div>
            <div className="text-xs font-mono text-brand-muted">CHENNAI_HQ</div>
          </div>
        </BentoCard>

        {/* BLOCK D: INSTALLED DRIVERS (The Real Stack) */}
        <BentoCard className="md:col-span-1 md:row-span-2 overflow-y-auto">
          <h3 className="text-sm font-sans font-bold text-brand-cyan uppercase tracking-wider mb-6 sticky top-0 bg-brand-panel pb-2">
            {'>'} INSTALLED_DRIVERS
          </h3>
          <div className="space-y-4">
            <StatBar label="NEXT_JS" value={95} />
            <StatBar label="TYPESCRIPT" value={90} />
            <StatBar label="SUPABASE" value={85} />
            <StatBar label="TAILWIND" value={98} />
            <StatBar label="NODE_JS" value={80} />
          </div>
        </BentoCard>

        {/* BLOCK C: ACTIVE MODULES (Project Logs) */}
        <BentoCard className="md:col-span-2 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-sans font-bold text-brand-gold uppercase tracking-wider">
              {'>'} ACTIVE_MODULES
            </h3>
            <Link href="/projects" className="text-xs font-mono text-brand-muted hover:text-white hover:underline">
              [SYSTEM_INDEX]
            </Link>
          </div>
          
          <div className="space-y-4 font-mono text-xs">
            
            {/* Project 1: RUTTSSU */}
            <div className="group/item border-l-2 border-brand-steel pl-3 hover:border-brand-cyan transition-colors cursor-default">
              <div className="flex justify-between items-center mb-1">
                <span className="text-brand-cyan font-bold">RUTTSSU_OS</span>
                <span className="text-green-500">[DEPLOYED]</span>
              </div>
              <p className="text-brand-muted leading-relaxed line-clamp-2">
                LOG: Personal Operating System v1.0. Engineered with Next.js 15 for sub-second page loads.
              </p>
            </div>

            {/* Project 2: Bifrost */}
            <div className="group/item border-l-2 border-brand-steel pl-3 hover:border-brand-cyan transition-colors cursor-default">
              <div className="flex justify-between items-center mb-1">
                <span className="text-brand-cyan font-bold">BIFROST_ENGINE</span>
                <span className="text-blue-400">[INTERNAL]</span>
              </div>
              <p className="text-brand-muted leading-relaxed line-clamp-2">
                LOG: Serverless URL redirection unit. Database managed via Supabase.
              </p>
            </div>

          </div>
        </BentoCard>

        {/* BLOCK E: UPLINK */}
        <BentoCard className="md:col-span-1 flex-row items-center justify-center gap-4 cursor-pointer hover:bg-brand-steel/20 group">
            <Link href="/connect" className="text-center w-full h-full flex flex-col items-center justify-center">
              <div className="text-brand-cyan text-2xl mb-2 group-hover:scale-110 transition-transform">
                <FaExternalLinkAlt />
              </div>
              <h3 className="font-mono font-bold text-sm text-white">ESTABLISH_UPLINK</h3>
            </Link>
        </BentoCard>

      </div>
    </div>
  );
}