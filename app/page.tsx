import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

// Reusable "Bento Card" (Visual Protocol)
const BentoCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`
    bg-brand-panel border border-brand-steel p-6 
    hover:border-brand-cyan transition-colors duration-100 ease-linear
    flex flex-col relative group
    ${className}
  `}>
    {/* Corner Decor - The "Tech" feel */}
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

        {/* BLOCK A: IDENTITY CORE (The Engineer) */}
        <BentoCard className="md:col-span-3 md:row-span-2 justify-between">
          <div>
            <div className="inline-block px-2 py-1 bg-brand-steel/30 text-brand-cyan font-mono text-xs mb-4">
              // ENGINEER_PROFILE
            </div>
            <h1 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tight text-white mb-2">
              BUILDING THE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-600">FOUNDATION.</span>
            </h1>
            <h2 className="text-lg md:text-xl text-brand-muted font-sans font-medium mb-6">
              Rahul N R // Full Stack Engineer
            </h2>
            <p className="max-w-xl text-brand-muted font-mono text-sm leading-relaxed">
              Initiating Protocol. Currently focused on building scalable web applications, 
              mastering serverless architecture, and crafting intuitive user experiences.
              <br/><br/>
              <span className="text-brand-gold">{'>'} SYSTEM_STATUS:</span> Learning & Evolving.
            </p>
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
              <span>CURRENT_TASK:</span>
              <span className="text-brand-gold animate-pulse">DEV_OPS</span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-brand-steel"></div>
          <div className="text-center">
            <div className="text-4xl font-sans font-bold text-brand-text">26°C</div>
            <div className="text-xs font-mono text-brand-muted">CHENNAI_HQ</div>
          </div>
        </BentoCard>

        {/* BLOCK D: INSTALLED DRIVERS (The Real Stack) */}
        <BentoCard className="md:col-span-1 md:row-span-2">
          <h3 className="text-sm font-sans font-bold text-brand-cyan uppercase tracking-wider mb-6">
            {'>'} INSTALLED_DRIVERS
          </h3>
          <div className="space-y-4">
            <StatBar label="NEXT_JS_15" value={95} />
            <StatBar label="TYPESCRIPT" value={90} />
            <StatBar label="SUPABASE" value={85} />
            <StatBar label="TAILWIND" value={98} />
            <StatBar label="NODE_JS" value={80} />
          </div>
        </BentoCard>

        {/* BLOCK C: ACTIVE MODULES (Real Projects) */}
        <BentoCard className="md:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-sans font-bold text-brand-gold uppercase tracking-wider">
              {'>'} ACTIVE_MODULES
            </h3>
            <Link href="/projects" className="text-xs font-mono text-brand-muted hover:text-white hover:underline">
              [VIEW_ALL]
            </Link>
          </div>
          <div className="space-y-3 font-mono text-sm">
            
            {/* Project 1: This Portfolio */}
            <div className="flex justify-between items-center group/item cursor-pointer">
              <span className="text-brand-text group-hover/item:text-brand-cyan transition-colors">
                [01] RUTTSSU_OS <span className="text-brand-muted text-xs">// PORTFOLIO</span>
              </span>
              <span className="text-xs text-green-500">[LIVE]</span>
            </div>
            <div className="w-full h-[1px] bg-brand-steel/50"></div>

            {/* Project 2: The Redirect Engine we built */}
            <div className="flex justify-between items-center group/item cursor-pointer">
              <span className="text-brand-text group-hover/item:text-brand-cyan transition-colors">
                [02] BIFROST_ENGINE <span className="text-brand-muted text-xs">// LINK_SHORTENER</span>
              </span>
              <span className="text-xs text-blue-400">[INTERNAL]</span>
            </div>
            <div className="w-full h-[1px] bg-brand-steel/50"></div>

            {/* Project 3: A Placeholder for your next idea */}
            <div className="flex justify-between items-center group/item cursor-pointer">
              <span className="text-brand-text group-hover/item:text-brand-cyan transition-colors">
                [03] CONTENT_GALLERY <span className="text-brand-muted text-xs">// CMS</span>
              </span>
              <span className="text-xs text-yellow-500">[DEV]</span>
            </div>

          </div>
        </BentoCard>

        {/* BLOCK E: THE UPLINK (Contact) */}
        <BentoCard className="md:col-span-1 flex-row items-center justify-center gap-4 cursor-pointer hover:bg-brand-steel/20 group">
            <Link href="/connect" className="text-center w-full h-full flex flex-col items-center justify-center">
              <div className="text-brand-cyan text-2xl mb-2 group-hover:scale-110 transition-transform">
                <FaExternalLinkAlt />
              </div>
              <h3 className="font-mono font-bold text-sm text-white">ESTABLISH_UPLINK</h3>
              <p className="text-[10px] text-brand-muted mt-1">INITIATE CONTACT SEQUENCE</p>
            </Link>
        </BentoCard>

      </div>
    </div>
  );
}