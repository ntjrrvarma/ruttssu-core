import Link from "next/link";
import { FaArrowLeft, FaTerminal, FaHistory, FaDownload, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

// MOCK DATA: UPDATE THIS WITH YOUR REAL INFO
const EXPERIENCE = [
  {
    id: "01",
    role: "SENIOR_ENGINEER",
    company: "TECH_CORP_ALPHA",
    date: "2023 - PRESENT",
    type: "FULL_TIME",
    log: "Leading the migration of legacy monoliths to microservices. Optimized database queries reducing latency by 40%. Directing a squad of 4 junior units."
  },
  {
    id: "02",
    role: "FULL_STACK_DEV",
    company: "STARTUP_BETA",
    date: "2021 - 2023",
    type: "FULL_TIME",
    log: "Engineered the core payment gateway integration using Stripe. Built reusable React component library used across 3 products."
  },
  {
    id: "03",
    role: "JUNIOR_DEV",
    company: "STUDIO_GAMMA",
    date: "2020 - 2021",
    type: "CONTRACT",
    log: "Assisted in frontend UI development using React and Tailwind. Fixed critical bugs in the authentication flow."
  }
];

const SKILLS = {
  CORE: ["Next.js 15", "React", "TypeScript", "Node.js", "Tailwind CSS"],
  BACKEND: ["Supabase", "PostgreSQL", "Prisma", "AWS (EC2/S3)", "Docker"],
  TOOLS: ["Git", "Figma", "Vercel", "Postman", "Linux"]
};

export default function About() {
  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 pb-12 max-w-7xl mx-auto flex flex-col">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-steel pb-6">
        <div>
          <Link href="/" className="text-xs font-mono text-brand-muted hover:text-brand-cyan mb-4 inline-flex items-center gap-2 transition-colors">
            <FaArrowLeft /> [ RETURN_TO_DASHBOARD ]
          </Link>
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-white uppercase tracking-tight">
            SOURCE <span className="text-brand-cyan">CODE</span>
          </h1>
          <p className="font-mono text-xs text-brand-muted mt-2">
            {'>'} DIR: /ROOT/USER_PROFILE // RAHUL_N_R
          </p>
        </div>
        
        {/* RESUME BUTTON */}
        <button className="mt-6 md:mt-0 flex items-center gap-2 bg-brand-steel/20 border border-brand-steel px-6 py-3 font-mono text-xs text-brand-cyan hover:bg-brand-cyan hover:text-brand-void transition-all uppercase font-bold group">
          <FaDownload className="group-hover:animate-bounce" /> [ EXPORT_DATA_SHEET ]
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 2. LEFT PANEL: THE SPECS (Bio & Skills) */}
        <div className="md:col-span-1 space-y-6">
          
          {/* BIO CARD */}
          <div className="bg-brand-panel border border-brand-steel p-6 relative group">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-muted/30 group-hover:border-brand-cyan transition-colors"></div>
            <h3 className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <FaTerminal className="text-brand-cyan" /> // SYSTEM_BIO
            </h3>
            <div className="font-mono text-xs text-brand-muted space-y-4 leading-relaxed">
              <p>
                <span className="text-brand-text font-bold">IDENTITY:</span> Rahul N R
              </p>
              <p>
                <span className="text-brand-text font-bold">CLASS:</span> Full Stack Engineer
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> <span className="text-brand-gold">Chennai, India (13.08°N, 80.27°E)</span>
              </p>
              <div className="w-full h-[1px] bg-brand-steel my-4"></div>
              <p>
                Passionate about building scalable systems and minimalist interfaces. 
                Currently upgrading architecture skills to bridge the gap between code and cloud infrastructure.
              </p>
            </div>
          </div>

          {/* SKILLS CARD */}
          <div className="bg-brand-panel border border-brand-steel p-6 relative group">
             <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-muted/30 group-hover:border-brand-cyan transition-colors"></div>
            <h3 className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <FaGlobe className="text-brand-cyan" /> // INSTALLED_PACKAGES
            </h3>
            
            <div className="space-y-4">
              <div>
                <div className="text-[10px] font-mono text-brand-muted mb-2 uppercase">Core_Dependencies</div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.CORE.map(s => (
                    <span key={s} className="px-2 py-1 bg-brand-steel/20 border border-brand-steel text-[10px] font-mono text-brand-text hover:border-brand-cyan transition-colors cursor-crosshair">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-[10px] font-mono text-brand-muted mb-2 uppercase">Backend_Modules</div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.BACKEND.map(s => (
                    <span key={s} className="px-2 py-1 bg-brand-steel/20 border border-brand-steel text-[10px] font-mono text-brand-text hover:border-brand-cyan transition-colors cursor-crosshair">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. RIGHT PANEL: RUNTIME HISTORY (Experience) */}
        <div className="md:col-span-2">
          <div className="bg-brand-panel border border-brand-steel p-8 h-full relative group">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-muted/30 group-hover:border-brand-cyan transition-colors"></div>
            
            <h3 className="text-sm font-sans font-bold text-brand-cyan uppercase tracking-wider mb-8 flex items-center gap-2">
              <FaHistory /> {'>'} EXEC_LOG: RUNTIME_HISTORY
            </h3>

            <div className="space-y-8 relative border-l border-brand-steel/50 ml-2 pl-8">
              {EXPERIENCE.map((job) => (
                <div key={job.id} className="relative group/item">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-brand-void border-2 border-brand-steel group-hover/item:border-brand-cyan group-hover/item:bg-brand-cyan transition-colors"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-lg font-sans font-bold text-white group-hover/item:text-brand-cyan transition-colors">
                      {job.role} <span className="text-brand-muted text-sm font-normal">@ {job.company}</span>
                    </h4>
                    <span className="font-mono text-xs text-brand-gold bg-brand-gold/10 px-2 py-1 rounded-[2px]">
                      [{job.date}]
                    </span>
                  </div>
                  
                  <div className="text-xs font-mono text-brand-muted mb-2">
                    TYPE: {job.type}
                  </div>
                  
                  <p className="text-sm font-mono text-brand-text leading-relaxed opacity-80 group-hover/item:opacity-100 transition-opacity">
                    {'>'} {job.log}
                  </p>
                </div>
              ))}
              
              {/* Education Block (Static for now) */}
              <div className="relative group/item pt-8">
                <div className="absolute -left-[37px] top-9 w-4 h-4 rounded-full bg-brand-void border-2 border-brand-steel group-hover/item:border-green-500 group-hover/item:bg-green-500 transition-colors"></div>
                <h4 className="text-lg font-sans font-bold text-white">
                  B.TECH COMPUTER SCIENCE <span className="text-brand-muted text-sm font-normal">@ UNIVERSITY_NAME</span>
                </h4>
                 <span className="font-mono text-xs text-green-500 mt-1 block">
                  [STATUS: COMPLETED]
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}