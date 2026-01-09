import Link from "next/link";
import { FaArrowLeft, FaTerminal, FaHistory, FaDownload, FaMapMarkerAlt, FaGlobe, FaGraduationCap } from "react-icons/fa";

// REAL DATA FROM RESUME
const EXPERIENCE = [
  {
    id: "01",
    role: "CONSULTANT (SR. AUTOMATION & RELIABILITY ENGR)",
    company: "INFOSYS_LTD",
    date: "JAN 2025 - PRESENT",
    type: "FULL_TIME",
    log: "Architected a Python-based automated troubleshooting protocol, parsing complex error logs to suggest instant fixes. Reduced L1 support ticket volume by 40%. Leading a squad of 3 engineers to define support workflows."
  },
  {
    id: "02",
    role: "SR. ASSOCIATE CONSULTANT (SYS_OPS)",
    company: "INFOSYS_LTD",
    date: "APR 2023 - JAN 2025",
    type: "FULL_TIME",
    log: "Managed critical infrastructure across 50+ Unix instances. Implemented predictive monitoring scripts (Python/Bash) maintaining 100% SLA adherence. Led RCA efforts reducing recurring incidents by 30%."
  },
  {
    id: "03",
    role: "ASSOCIATE CONSULTANT (AUTOMATION)",
    company: "INFOSYS_LTD",
    date: "JAN 2022 - APR 2023",
    type: "FULL_TIME",
    log: "Engineered complex Python automation scripts for retrospective reporting, cutting manual data prep time by 90%. Executed schema validation across legacy databases to ensure data integrity."
  },
  {
    id: "04",
    role: "SENIOR SYSTEMS ENGINEER",
    company: "INFOSYS_LTD",
    date: "DEC 2018 - DEC 2021",
    type: "FULL_TIME",
    log: "Maintained mission-critical legacy mainframe systems supporting millions of users. Modernized manual reporting into an automated dashboard using Python log parsing."
  }
];

const SKILLS = {
  AUTOMATION_OPS: ["Python (Advanced)", "Shell/Bash", "Linux/Unix Admin", "GCP/AWS", "Docker/GKE"],
  WEB_STACK: ["Next.js 15", "TypeScript", "React", "Supabase", "Tailwind CSS"],
  TOOLS: ["JIRA", "ServiceNow", "Git", "Postman", "SQL"]
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
                <span className="text-brand-text font-bold">CLASS:</span> Sr. Reliability Engineer
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> <span className="text-brand-gold">Chennai, India</span>
              </p>
              <div className="w-full h-[1px] bg-brand-steel my-4"></div>
              <p>
                7+ years driving Operational Excellence. Expert in Incident Management, RCA, and Production Support. 
                Specialized in reducing MTTR by building Python-based automation tools that eliminate operational toil.
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
                <div className="text-[10px] font-mono text-brand-muted mb-2 uppercase">Automation_&_Ops</div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.AUTOMATION_OPS.map(s => (
                    <span key={s} className="px-2 py-1 bg-brand-steel/20 border border-brand-steel text-[10px] font-mono text-brand-text hover:border-brand-cyan transition-colors cursor-crosshair">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-[10px] font-mono text-brand-muted mb-2 uppercase">Full_Stack_Dev</div>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.WEB_STACK.map(s => (
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
                      {job.role}
                    </h4>
                    <span className="font-mono text-xs text-brand-gold bg-brand-gold/10 px-2 py-1 rounded-[2px]">
                      [{job.date}]
                    </span>
                  </div>
                  
                  <div className="text-xs font-mono text-brand-muted mb-2">
                    @ {job.company}
                  </div>
                  
                  <p className="text-sm font-mono text-brand-text leading-relaxed opacity-80 group-hover/item:opacity-100 transition-opacity">
                    {'>'} {job.log}
                  </p>
                </div>
              ))}
              
              {/* EDUCATION BLOCK */}
              <div className="mt-12 pt-8 border-t border-brand-steel/30">
                <h3 className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                  <FaGraduationCap className="text-brand-cyan" /> // KNOWLEDGE_BASE
                </h3>
                
                <div className="space-y-6">
                  <div className="relative group/item">
                     <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <h4 className="text-sm font-sans font-bold text-brand-text">MBA (HUMAN RESOURCES)</h4>
                        <span className="text-[10px] font-mono text-brand-muted">2025 - 2027 (PURSUING)</span>
                     </div>
                     <p className="text-xs font-mono text-brand-muted mt-1">SRM Institute of Science and Technology</p>
                  </div>
                  
                  <div className="relative group/item">
                     <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <h4 className="text-sm font-sans font-bold text-brand-text">B.TECH, COMPUTER SCIENCE</h4>
                        <span className="text-[10px] font-mono text-brand-muted">2014 - 2018</span>
                     </div>
                     <p className="text-xs font-mono text-brand-muted mt-1">Dr. M.G.R. Educational and Research Institute</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}