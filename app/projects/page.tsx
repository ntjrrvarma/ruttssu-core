import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

// MOCK DATA: This is your "Archive"
const PROJECTS = [
  {
    id: "01",
    title: "RUTTSSU_OS",
    category: "SYSTEM",
    status: "DEPLOYED",
    tech: ["Next.js 15", "Tailwind", "TypeScript"],
    desc: "LOG: Personal Operating System v1.0. Engineered with a custom Bento Grid architecture...",
    // UPDATE THE REPO LINK BELOW:
    links: { demo: "https://ruttssu-core.vercel.app", repo: "https://github.com/ntjrrvarma/ruttssu-core" } 
  },
  {
    id: "02",
    title: "Dolphin Chat Interface",
    category: "BACKEND",
    status: "INTERNAL",
    tech: ["Python","Ollama"],
    desc: "LOG: High-performance Chat bot designed using the Dolphin Mistral Model to run locally on any system.",
    links: {  repo: "https://github.com/ntjrrvarma/Dolphin-talks" }
  },
  {
    id: "03",
    title: "Empire V1 - Personal Password Vault",
    category: "WEB_APP",
    status: "DEPLOYED",
    tech: ["Typescript", "Javascript", "CSS"],
    desc: "LOG: Empire V1 is a secure, personal password management application designed to store and retrieve credentials efficiently. It serves as a foundational project to explore CRUD operations, Database Management, and Frontend-Backend Integration.",
    links: { demo: "https://empire-v1-rsv.vercel.app/", repo: "https://github.com/ntjrrvarma/empire-v1" }
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 pb-12 max-w-7xl mx-auto flex flex-col">
      
      {/* HEADER SECTION */}
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

        {/* TABS (Visual Only) */}
        <div className="flex gap-1 mt-6 md:mt-0 font-mono text-xs overflow-x-auto no-scrollbar">
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

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group bg-brand-panel border border-brand-steel p-6 hover:border-brand-cyan transition-colors duration-200 flex flex-col h-full relative overflow-hidden"
          >
            {/* Tech Decor */}
            <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
               <FaExternalLinkAlt className="text-brand-cyan text-xl" />
            </div>

            {/* Header */}
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

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-mono bg-brand-steel/30 text-brand-muted px-2 py-1">
                  {t}
                </span>
              ))}
            </div>

            {/* Log Description */}
            <p className="font-mono text-xs text-brand-muted leading-relaxed mb-8 flex-grow border-l-2 border-brand-steel pl-3">
              {project.desc}
            </p>

            {/* Actions */}
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