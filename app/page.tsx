import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Reusable "Bento Card"
const BentoCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`
    bg-brand-panel border border-brand-steel p-6 
    hover:border-brand-cyan transition-colors duration-100 ease-linear
    flex flex-col relative group
    ${className}
  `}>
    {/* Corner Decor */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-muted/30 group-hover:border-brand-cyan transition-colors"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-muted/30 group-hover:border-brand-cyan transition-colors"></div>
    {children}
  </div>
);

// Progress Bar Component
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
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* THE GRID SYSTEM */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-full">

        {/* BLOCK A: ENGINEER PROFILE (Bio) */}
        <BentoCard className="md:col-span-3 md:row-span-2 justify-between">
          <div>
            <div className="inline-block px-2 py-1 bg-brand-steel/30 text-brand-cyan font-mono text-xs mb-4">
              // ENGINEER_PROFILE
            </div>
            
            {/* THE USER LOG */}
            <div className="font-mono text-sm space-y-2 mb-8 border-l-2 border-brand-steel pl-4">
              <div>
                <span className="text-brand-muted">USER:</span> <span className="text-white font-bold tracking-wider">RAHUL N R</span>
              </div>
              <div>
                <span className="text-brand-muted">{'>'} CLASS:</span> <span className="text-brand-cyan">FULL_STACK_ENGINEER</span>
              </div>
              <div>
                <span className="text-brand-muted">{'>'} LOC:</span> <span className="text-brand-gold">CHENNAI_SECTOR</span>
              </div>
            </div>

            {/* SYSTEM BIO */}
            <div className="bg-brand-void/50 p-4 border border-brand-steel/50 rounded-sm">
              <h3 className="text-xs font-bold text-brand-muted mb-2 uppercase tracking-widest">System Bio:</h3>
              <p className="max-w-xl text-brand-text font-mono text-sm leading-relaxed">
                Initiating R.U.T.T.S.S.U Protocol... <br/>
                Specialized in bridging backend logic with precision frontend UI. 
                <br/><br/>
                <span className="text-brand-cyan">CURRENT OBJECTIVE:</span> Building scalable cloud systems and minimalist digital environments.
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex gap-4">
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 bg-brand-cyan text-brand-void px-6 py-3 font-mono font-bold text-sm hover:bg-white transition-colors duration-200"
            >
              [ EXECUTE_BIO ] <FaArrowRight />
            </Link>
          </div>
        </BentoCard>

        {/* BLOCK B: LIVE TELEMETRY (Real World Data) */}
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

        {/* BLOCK D: INSTALLED DRIVERS (Skills) */}
        <BentoCard className="md:col-span-1 md:row-span-2">
          <h3 className="text-sm font-sans font-bold text-brand-cyan uppercase tracking-wider mb-6">
            {'>'} INSTALLED_DRIVERS
          </h3>
          <div className="space-y-4">
            <StatBar label="NEXT_JS" value={95} />
            <StatBar label="TYPESCRIPT" value={90} />
            <StatBar label="SUPABASE" value={85} />
            <StatBar label="NODE_JS" value={80} />
            <StatBar label="SYS_ARCH" value={60} />
          </div>
        </BentoCard>

        {/* BLOCK C: ACTIVE MODULES (Projects in Log Format) */}
        <BentoCard className="md:col-span-2 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-sans font-bold text-brand-gold uppercase tracking-wider">
              {'>'} ACTIVE_MODULES
            </h3>
            <Link href="/projects" className="text-xs font-mono text-brand-muted hover:text-white hover:underline">
              [SYSTEM_INDEX]
            </Link>
          </div>
          
          <div className="space-y-6 font-mono text-xs">
            
            {/* Project 1 */}
            <div className="group/item border-l-2 border-brand-steel pl-3 hover:border-brand-cyan transition-colors">
              <div className="flex justify-between items-center mb-1">
                <span className="text-brand-cyan font-bold text-sm">MODULE: RUTTSSU_OS</span>
                <span className="text-green-500 bg-green-500/10 px-2 py-0.5 rounded-[2px]">[DEPLOYED]</span>
              </div>
              <div className="text-brand-muted mb-2">ID: PRJ-01 | LATENCY: 24ms</div>
              <p className="text-brand-text leading-relaxed opacity-80 group-hover/item:opacity-100">
                LOG: Personal Operating System v1.0. Engineered with Next.js 15 for sub-second page loads. Features a custom Bento Grid interface.
              </p>
            </div>

            {/* Project 2 */}
            <div className="group/item border-l-2 border-brand-steel pl-3 hover:border-brand-cyan transition-colors">
              <div className="flex justify-between items-center mb-1">
                <span className="text-brand-cyan font-bold text-sm">MODULE: BIFROST_ENGINE</span>
                <span className="text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-[2px]">[INTERNAL]</span>
              </div>
              <div className="text-brand-muted mb-2">ID: PRJ-02 | LATENCY: 12ms</div>
              <p className="text-brand-text leading-relaxed opacity-80 group-hover/item:opacity-100">
                LOG: Serverless URL redirection unit. Database managed via Supabase. Optimized for low-latency routing requests.
              </p>
            </div>

          </div>
        </BentoCard>

        {/* BLOCK E: ESTABLISH UPLINK (Contact) */}
        <BentoCard className="md:col-span-1 flex-row items-center justify-center gap-4 cursor-pointer hover:bg-brand-steel/20 group">
            <Link href="/connect" className="text-center w-full h-full flex flex-col items-center justify-center">
              <div className="text-brand-cyan text-2xl mb-2 group-hover:scale-110 transition-transform">
                <FaExternalLinkAlt />
              </div>
              <h3 className="font-mono font-bold text-sm text-white">ESTABLISH_UPLINK</h3>
              <p className="text-[10px] text-brand-muted mt-1">INITIATE HANDSHAKE</p>
            </Link>
        </BentoCard>

      </div>
    </div>
  );
}