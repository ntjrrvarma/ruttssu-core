"use client";

import { useState } from "react";
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
    desc: "LOG: Personal Operating System v1.0. Engineered with a custom Bento Grid architecture to serve as a central command hub for all developer activities.",
    links: { demo: "https://ruttssu-core.vercel.app", repo: "https://github.com/ntjrrvarma/ruttssu-core" } 
  },
  {
    id: "05", // NEW MODULE ADDED
    title: "TASK_MATRIX_V2",
    category: "WEB_APP",
    status: "INTERNAL", 
    tech: ["Supabase", "React State", "PostgreSQL"],
    desc: "LOG: A sci-fi inspired Kanban board for managing mission objectives. Features real-time state synchronization via Supabase and dynamic filtering logic.",
    links: { demo: "/projects/task-matrix", repo: "https://github.com/ntjrrvarma/ruttssu-core" } 
  },
  {
    id: "04",
    title: "BIFROST_ENGINE",
    category: "BACKEND",
    status: "INTERNAL", 
    tech: ["Supabase", "Node.js", "Edge Functions"],
    desc: "LOG: High-performance URL redirection service. Handles request routing with <50ms latency using Edge Middleware and Supabase lookups.",
    links: { demo: "/projects/bifrost", repo: "https://github.com/ntjrrvarma/ruttssu-core" } 
  },
  {
    id: "03",
    title: "Empire V1 - Vault",
    category: "WEB_APP",
    status: "DEPLOYED",
    tech: ["Typescript", "Javascript", "CSS"],
    desc: "LOG: Secure personal password management application designed to store and retrieve credentials efficiently. Explores foundational CRUD operations and encryption.",
    links: { demo: "https://empire-v1-rsv.vercel.app/", repo: "https://github.com/ntjrrvarma/empire-v1" }
  },
  {
    id: "02",
    title: "Dolphin Chat Interface",
    category: "BACKEND",
    status: "INTERNAL",
    tech: ["Python", "Ollama", "LLM"],
    desc: "LOG: High-performance Chat bot designed using the Dolphin Mistral Model to run locally on any system. Focuses on offline AI capabilities.",
    links: { demo: "#", repo: "https://github.com/ntjrrvarma/Dolphin-talks" }
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("ALL");

  // Filter Logic
  const filteredProjects = filter === "ALL" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.includes(filter) || p.category === filter);

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

        {/* TABS (Now Functional) */}
        <div className="flex gap-1 mt-6 md:mt-0 font-mono text-xs overflow-x-auto no-scrollbar">
          {["ALL", "SYSTEM", "WEB_APP", "BACKEND"].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-4 py-2 border transition-all whitespace-nowrap
                ${filter === cat 
                  ? "bg-brand-cyan border-brand-cyan text-brand-void font-bold" 
                  : "border-brand-steel text-brand-muted hover:text-white hover:border-brand-cyan bg-brand-void"}
              `}
            >
              [{cat.replace("_", " ")}]
            </button>
          ))}
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
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
              <a 
                href={project.links.repo} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-brand-steel py-2 text-xs font-mono text-brand-muted hover:text-white hover:bg-brand-steel/20 transition-colors"
              >
                <FaGithub /> SOURCE_CODE
              </a>
              
              {/* Only show Launch button if link exists and isn't # */}
              {project.links.demo && project.links.demo !== "#" ? (
                <a 
                  href={project.links.demo} 
                  target={project.links.demo.startsWith("http") ? "_blank" : "_self"} // Open internal links in same tab, external in new
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-steel/20 border border-brand-steel py-2 text-xs font-mono text-brand-cyan hover:bg-brand-cyan hover:text-brand-void transition-colors font-bold"
                >
                  <FaExternalLinkAlt /> LAUNCH_UNIT
                </a>
              ) : (
                <button disabled className="flex items-center justify-center gap-2 border border-brand-steel/30 py-2 text-xs font-mono text-brand-muted/50 cursor-not-allowed">
                  [ OFFLINE ]
                </button>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}