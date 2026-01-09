"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/utils/supabaseClient";
import { FaArrowLeft, FaCheck, FaPlus, FaTasks, FaTrash, FaCircle } from "react-icons/fa";

type Task = {
  id: string;
  title: string;
  status: "PENDING" | "ACTIVE" | "COMPLETED";
  priority: "LOW" | "MED" | "HIGH";
};

export default function TaskMatrix() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState<"ALL" | "PENDING" | "ACTIVE" | "COMPLETED">("ALL");

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const { data, error } = await supabase
      .from("tasks")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (!error) setTasks(data || []);
    setLoading(false);
  }

  async function addTask(e: React.FormEvent) {
    e.preventDefault();
    if (!newTask.trim()) return;

    const { error } = await supabase
      .from("tasks")
      .insert([{ title: newTask, status: "PENDING", priority: "MED" }]);

    if (!error) {
      setNewTask("");
      fetchTasks();
    }
  }

  async function updateStatus(id: string, newStatus: string) {
    const { error } = await supabase
      .from("tasks")
      .update({ status: newStatus })
      .eq("id", id);
    
    if (!error) fetchTasks();
  }

  async function deleteTask(id: string) {
    if (!confirm("Purge this objective?")) return;
    const { error } = await supabase.from("tasks").delete().eq("id", id);
    if (!error) fetchTasks();
  }

  // Filter Logic
  const filteredTasks = filter === "ALL" 
    ? tasks 
    : tasks.filter(t => t.status === filter);

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 pb-12 max-w-5xl mx-auto flex flex-col font-mono text-sm">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-steel pb-6">
        <div>
          <Link href="/projects" className="text-brand-muted hover:text-brand-cyan mb-4 inline-flex items-center gap-2 transition-colors">
            <FaArrowLeft /> [ RETURN_TO_MODULES ]
          </Link>
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-white uppercase tracking-tight">
            TASK <span className="text-brand-cyan">MATRIX</span>
          </h1>
          <p className="text-xs text-brand-muted mt-2">
            {'>'} DIR: /ROOT/MODULES/TASK_MATRIX // OBJECTIVE_TRACKER
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* CONTROL PANEL (LEFT) */}
        <div className="md:col-span-1 space-y-6">
          {/* Add Task */}
          <div className="bg-brand-panel border border-brand-steel p-6">
            <h3 className="text-brand-cyan font-bold mb-4 flex items-center gap-2 uppercase">
              <FaPlus /> New Directive
            </h3>
            <form onSubmit={addTask} className="space-y-4">
              <input 
                type="text" 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter objective..."
                className="w-full bg-brand-void border border-brand-steel px-3 py-2 text-white placeholder-brand-muted/30 outline-none focus:border-brand-cyan transition-colors"
              />
              <button 
                type="submit"
                className="w-full bg-brand-cyan text-brand-void font-bold py-3 hover:bg-white transition-colors"
              >
                [ UPLOAD_TO_MATRIX ]
              </button>
            </form>
          </div>

          {/* Filters */}
          <div className="bg-brand-panel border border-brand-steel p-6">
            <h3 className="text-brand-muted font-bold mb-4 uppercase">
              Filter_View
            </h3>
            <div className="flex flex-col gap-2">
              {["ALL", "PENDING", "ACTIVE", "COMPLETED"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`text-left px-3 py-2 border transition-all ${
                    filter === f 
                    ? "bg-brand-steel/20 border-brand-cyan text-brand-cyan" 
                    : "border-transparent text-brand-muted hover:text-white"
                  }`}
                >
                  {'>'} {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TASK LIST (RIGHT) */}
        <div className="md:col-span-2">
          {loading ? (
             <div className="text-brand-muted animate-pulse">[ DOWNLOADING_OBJECTIVES... ]</div>
          ) : (
            <div className="space-y-3">
              {filteredTasks.map((task) => (
                <div key={task.id} className={`
                  group border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all
                  ${task.status === "COMPLETED" ? "bg-brand-void border-brand-steel opacity-60" : "bg-brand-panel border-brand-steel hover:border-brand-cyan"}
                `}>
                  
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 text-[10px] px-2 py-0.5 border ${
                      task.status === "ACTIVE" ? "border-blue-500 text-blue-500" :
                      task.status === "COMPLETED" ? "border-green-500 text-green-500" :
                      "border-brand-muted text-brand-muted"
                    }`}>
                      {task.status}
                    </div>
                    <div>
                      <div className={`text-sm ${task.status === "COMPLETED" ? "text-brand-muted line-through" : "text-white"}`}>
                        {task.title}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 opacity-10 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    {task.status !== "COMPLETED" && (
                      <>
                        {task.status === "PENDING" && (
                          <button onClick={() => updateStatus(task.id, "ACTIVE")} className="p-2 text-blue-500 hover:bg-blue-500/10" title="Start Task">
                            <FaCircle size={10} />
                          </button>
                        )}
                        <button onClick={() => updateStatus(task.id, "COMPLETED")} className="p-2 text-green-500 hover:bg-green-500/10" title="Complete">
                          <FaCheck />
                        </button>
                      </>
                    )}
                    <button onClick={() => deleteTask(task.id)} className="p-2 text-brand-muted hover:text-red-500 hover:bg-red-500/10" title="Delete">
                      <FaTrash />
                    </button>
                  </div>

                </div>
              ))}
              
              {filteredTasks.length === 0 && (
                <div className="text-center text-brand-muted py-12 border border-brand-steel border-dashed">
                  [ NO_DATA_IN_SECTOR ]
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}