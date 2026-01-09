"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/utils/supabaseClient"; // Make sure you have this utility file!
import { FaArrowLeft, FaBolt, FaSave, FaExternalLinkAlt, FaTrash } from "react-icons/fa";

type LinkItem = {
  id: string;
  slug: string;
  destination: string;
  clicks: number;
  created_at: string;
};

export default function Bifrost() {
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [newSlug, setNewSlug] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchLinks();
  }, []);

  async function fetchLinks() {
    const { data, error } = await supabase
      .from("links")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) console.error("Error fetching links:", error);
    else setLinks(data || []);
    setLoading(false);
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setStatus("SAVING...");

    if (!newSlug || !newUrl) return;

    const { error } = await supabase
      .from("links")
      .insert([{ slug: newSlug, destination: newUrl }]);

    if (error) {
      setStatus("ERROR: " + error.message);
    } else {
      setStatus("LINK_DEPLOYED");
      setNewSlug("");
      setNewUrl("");
      fetchLinks();
      setTimeout(() => setStatus(""), 2000);
    }
  }

  async function handleDelete(slug: string) {
    if (!confirm("CONFIRM DELETION of protocol: " + slug + "?")) return;
    const { error } = await supabase.from("links").delete().eq("slug", slug);
    if (!error) fetchLinks();
  }

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 pb-12 max-w-5xl mx-auto flex flex-col font-mono text-sm">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-steel pb-6">
        <div>
          <Link href="/projects" className="text-brand-muted hover:text-brand-cyan mb-4 inline-flex items-center gap-2 transition-colors">
            <FaArrowLeft /> [ RETURN_TO_MODULES ]
          </Link>
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-white uppercase tracking-tight">
            BIFROST <span className="text-brand-cyan">ENGINE</span>
          </h1>
          <p className="text-xs text-brand-muted mt-2">
            {'>'} DIR: /ROOT/MODULES/BIFROST // URL_REDIRECTION_UNIT
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* INPUT PANEL */}
        <div className="md:col-span-1 bg-brand-panel border border-brand-steel p-6 h-fit">
          <h3 className="text-brand-cyan font-bold mb-6 flex items-center gap-2 uppercase">
            <FaBolt /> Deploy New Path
          </h3>
          
          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <label className="block text-xs text-brand-muted mb-1">TARGET_SLUG</label>
              <div className="flex items-center bg-brand-void border border-brand-steel px-3 py-2">
                <span className="text-brand-muted select-none">/go/</span>
                <input 
                  type="text" 
                  value={newSlug}
                  onChange={(e) => setNewSlug(e.target.value)}
                  placeholder="linkedin"
                  className="bg-transparent border-none outline-none text-white w-full ml-1"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-brand-muted mb-1">DESTINATION_URL</label>
              <input 
                type="url" 
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="https://..."
                className="w-full bg-brand-void border border-brand-steel px-3 py-2 text-white outline-none focus:border-brand-cyan transition-colors"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-cyan text-brand-void font-bold py-3 mt-4 hover:bg-white transition-colors flex justify-center items-center gap-2"
            >
              <FaSave /> [ INITIALIZE_LINK ]
            </button>

            {status && (
              <div className={`text-center text-xs mt-2 ${status.includes("ERROR") ? "text-red-500" : "text-green-500"}`}>
                {status}
              </div>
            )}
          </form>
        </div>

        {/* LIST PANEL */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-brand-muted font-bold mb-2 uppercase text-xs">
             Active_Bridges ({links.length})
          </h3>

          {loading ? (
             <div className="text-brand-muted animate-pulse">[ SCANNING_DATABASE... ]</div>
          ) : (
            links.map((link) => (
              <div key={link.id} className="group bg-brand-panel border border-brand-steel p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-brand-cyan transition-colors">
                
                <div className="overflow-hidden">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-brand-cyan font-bold text-lg">/go/{link.slug}</span>
                    <a href={`/go/${link.slug}`} target="_blank" className="text-brand-muted hover:text-white">
                      <FaExternalLinkAlt size={10} />
                    </a>
                  </div>
                  <div className="text-xs text-brand-muted truncate max-w-[300px]" title={link.destination}>
                    {link.destination}
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{link.clicks}</div>
                    <div className="text-[10px] text-brand-muted uppercase">TRAFFIC</div>
                  </div>
                  
                  <button onClick={() => handleDelete(link.slug)} className="text-brand-muted hover:text-red-500 p-2">
                    <FaTrash />
                  </button>
                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}