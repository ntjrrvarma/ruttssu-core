import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";

// BENTO CARD
const BentoCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`
    bg-brand-panel border border-brand-steel p-6 h-full
    hover:border-brand-cyan transition-colors duration-100 ease-linear
    flex flex-col relative group overflow-hidden
    ${className}
  `}>
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-muted/30 group-hover:border-brand-cyan transition-colors"></div>
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-muted/30 group-hover:border-brand-cyan transition-colors"></div>
    {children}
  </div>
);

// STAT BAR
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
    <div className="pt-[64px] px-4 md:px-6 pb-4 max-w-7xl mx-auto flex flex-col min-h-screen md:h-screen overflow-hidden">
      
      {/* THE GRID SYSTEM */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 flex-grow h-full pt-4">

        {/* BLOCK A: IDENTITY CORE (Now features YOUR NAME) */}
        <BentoCard className="md:col-span-3 md:row-span-2 justify-between relative">
          {/* Background Decor */}
          <div className="absolute top-4 right-4 text-xs font-mono text-brand-muted/50 hidden md:block">
            ID: R_NR_001 // VERIFIED
          </div>

          <div>
            <div className="inline-block px-2 py-1 bg-brand-steel/30 text-brand-cyan font-mono text-xs mb-4">
              // SYSTEM_ARCHITECT
            </div>
            
            {/* THE NEW MASSIVE HEADLINE */}
            <h1 className="text-6xl md:text-8xl font-sans font-bold uppercase tracking-tighter text-white mb-0 leading-none">
              RAHUL <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-600">N R</span>
            </h1>
            
            <div className="flex items-center gap-3 mt-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-cyan"></div>
              <h2 className="text-lg md:text-xl text-brand-muted font-mono tracking-widest">
                SENIOR_ENGINEER // FULL_STACK
              </h2>
            </div>

            <div className="max-w-xl text-brand-muted font-mono text-xs md:text-sm leading-relaxed border-l-2 border-brand-steel pl-4">
              <p>
                Initiating R.U.T.T.S.S.U Protocol. Specialized in bridging backend logic with precision frontend UI.
              </p>
              <p className="mt-2 text-brand-text">
                <span className="text-brand-cyan">{'>'} CURRENT_STATUS:</span> Building scalable cloud systems & minimalist digital environments.
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

        {/* BLOCK B: TELEMETRY */}
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

        {/* BLOCK D: DRIVERS (Scrollable) */}
        <BentoCard className="md:col-span-1 md:row-span-2 overflow-y-auto custom-scrollbar">
          <h3 className="text-sm font-sans font-bold text-brand-cyan uppercase tracking-wider mb-6 sticky top-0 bg-brand-panel pb-2 z-10">
            {'>'} INSTALLED_DRIVERS
          </h3>
          <div className="space-y-4">
            <StatBar label="NEXT_JS" value={95} />
            <StatBar label="TYPESCRIPT" value={90} />
            <StatBar label="PYTHON" value={85} />
            <StatBar label="SUPABASE" value={85} />
            <StatBar label="TAILWIND" value={98} />
            <StatBar label="AWS/GCP" value={75} />
          </div>
        </BentoCard>

        {/* BLOCK C: DEPLOYMENT LOG (New Interaction) */}
        <BentoCard className="md:col-span-2 relative group cursor-pointer overflow-hidden">
           {/* The entire card is a link now */}
           <Link href="/projects" className="absolute inset-0 z-20"></Link>

          <div className="flex items-center justify-between mb-4 sticky top-0 bg-brand-panel pb-2 z-10">
            <h3 className="text-sm font-sans font-bold text-brand-gold uppercase tracking-wider flex items-center gap-2">
              <FaFolderOpen /> {'>'} DEPLOYMENT_LOG
            </h3>
            <span className="text-xs font-mono text-brand-cyan group-hover:underline">
              [ ENTER_DIRECTORY ]
            </span>
          </div>
          
          <div className="space-y-4 font-mono text-xs">
            {/* Project 1 */}
            <div className="flex justify-between items-center border-l-2 border-brand-steel pl-3 group-hover:border-brand-cyan transition-colors">
              <div>
                <span className="text-brand-text font-bold block mb-1">RUTTSSU_OS</span>
                <span className="text-brand-muted">Personal Operating System v1.0</span>
              </div>
              <span className="text-green-500 bg-green-500/10 px-2 py-1 rounded-[2px] text-[10px]">
                DEPLOYED
              </span>
            </div>

            {/* Project 2 */}
            <div className="flex justify-between items-center border-l-2 border-brand-steel pl-3 group-hover:border-brand-cyan transition-colors">
              <div>
                <span className="text-brand-text font-bold block mb-1">Dolphin Chat Interface</span>
                <span className="text-brand-muted">Local AI powered Chatbot</span>
              </div>
              <span className="text-blue-400 bg-blue-400/10 px-2 py-1 rounded-[2px] text-[10px]">
                INTERNAL
              </span>
            </div>

             {/* Project 3 */}
             <div className="flex justify-between items-center border-l-2 border-brand-steel pl-3 group-hover:border-brand-cyan transition-colors">
              <div>
                <span className="text-brand-text font-bold block mb-1">Empire V1 - Personal Password Vault</span>
                <span className="text-brand-muted">Empire V1 is a secure, personal password management application designed to store and retrieve credentials efficiently. It serves as a foundational project to explore CRUD operations, Database Management, and Frontend-Backend Integration.</span>
              </div>
              <span className="text-brand-muted border border-brand-muted px-2 py-1 rounded-[2px] text-[10px]">
                DEPLOYED
              </span>
            </div>
          </div>

          {/* Hover Overlay Hint */}
          <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <FaArrowRight className="text-brand-cyan text-xl" />
          </div>
        </BentoCard>

        {/* BLOCK E: UPLINK */}
        <BentoCard className="md:col-span-1 flex-row items-center justify-center gap-4 cursor-pointer hover:bg-brand-steel/20 group">
            <Link href="/connect" className="text-center w-full h-full flex flex-col items-center justify-center relative z-20">
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