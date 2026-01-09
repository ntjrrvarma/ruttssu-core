import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

// MOCK DATA: We will eventually fetch this from Supabase
const PROJECTS = [
  {
    id: "01",
    title: "RUTTSSU_OS",
    category: "SYSTEM",
    status: "DEPLOYED",
    tech: ["Next.js 15", "Tailwind", "TypeScript"],
    desc: "LOG: Personal Operating System v1.0. Engineered with a custom Bento Grid architecture and zero-latency routing. Acts as the central command hub for all digital assets.",
    links: { demo: "#", repo: "#" }
  },
  {
    id: "02",
    title: "BIFROST_ENGINE",
    category: "BACKEND",
    status: "INTERNAL",
    tech: ["Supabase", "Node.js", "PostgreSQL"],
    desc: "LOG: High-performance URL redirection service. Handles request routing with <50ms latency. Built to manage internal link shortening and analytics tracking.",
    links: { demo: "#", repo: "#" }
  },
  {
    id: "03",
    title: "TASK_MATRIX_V2",
    category: "WEB_APP",
    status: "MAINTENANCE",
    tech: ["React", "Redux", "Firebase"],
    desc: "LOG: Collaborative project management dashboard. Features real-time state synchronization and role-based access control (RBAC).",
    links: { demo: "#", repo: "#" }
  },
  {
    id: "04",
    title: "NEURAL_GALLERY",
    category: "DESIGN",
    status: "CONCEPT",
    tech: ["Three.js", "WebGL", "GSAP"],
    desc: "LOG: Experimental 3D asset viewer. Utilizing WebGL for hardware-accelerated rendering of architectural models in the browser.",
    links: { demo: "#", repo: "#" }
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 pb-12 max-w-7xl mx-auto">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-steel pb-6">
        <div>
          <Link href="/" className="text-xs font-mono text-brand-muted hover:text-brand-cyan mb-4 inline-flex items-center gap-2 transition-colors">
            <FaArrowLeft /> [ RETURN_TO_DASHBOARD ]
          </Link>
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-white uppercase tracking-tight">
            SYSTEM <span className="text-brand-cyan">INDEX</span>
          </h1>
          <p className="font-mono text-xs text-brand-muted mt-2">
            {'>'} DIR: /ROOT/MODULES // LISTING ALL DEPLOYED UNITS
          </p>
        </div>

        {/* 2. FILTER TABS (Visual Only for now) */}
        <div className="flex gap-1 mt-6 md:mt-0 font-mono text-xs overflow-x-auto">
          {["ALL", "SYSTEMS", "WEB", "DESIGN"].map((filter, i) => (
            <button 
              key={filter}
              className={`
                px-4 py-2 border border-brand-steel transition-all
                ${i === 0 ? "bg-brand-cyan text-brand-void font-bold" : "text-brand-muted hover:text-white hover:border-brand-cyan"}
              `}
            >
              [{filter}]
            </button>
          ))}
        </div>
      </div>

      {/* 3. PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group bg-brand-panel border border-brand-steel p-6 hover:border-brand-cyan transition-colors duration-200 flex flex-col h-full"
          >
            {/* Header: ID & Status */}
            <div className="flex justify-between items-start mb-6 font-mono text-xs">
              <span className="text-brand-cyan">ID: PRJ-{project.id}</span>
              <span className={`px-2 py-1 border ${
                project.status === "DEPLOYED" ? "border-green-500/50 text-green-500" :
                project.status === "INTERNAL" ? "border-blue-500/50 text-blue-500" :
                "border-brand-muted text-brand-muted"
              }`}>
                [{project.status}]
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-sans font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
              {project.title}
            </h3>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-mono bg-brand-steel/30 text-brand-muted px-2 py-1">
                  {t}
                </span>
              ))}
            </div>

            {/* Description (The Log) */}
            <p className="font-mono text-xs text-brand-muted leading-relaxed mb-8 flex-grow border-l-2 border-brand-steel pl-3">
              {project.desc}
            </p>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <a href={project.links.repo} className="flex items-center justify-center gap-2 border border-brand-steel py-2 text-xs font-mono text-brand-muted hover:text-white hover:bg-brand-steel/20 transition-colors">
                <FaGithub /> SOURCE_CODE
              </a>
              <a href={project.links.demo} className="flex items-center justify-center gap-2 bg-brand-steel/20 border border-brand-steel py-2 text-xs font-mono text-brand-cyan hover:bg-brand-cyan hover:text-brand-void transition-colors font-bold">
                <FaExternalLinkAlt /> LAUNCH_UNIT
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}