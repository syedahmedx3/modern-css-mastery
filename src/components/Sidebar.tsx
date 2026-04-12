import { Layout, Menu, X } from "lucide-react";
import type { CSSModule } from "@/types";
import { modules } from "@/data/modules";
import { useState } from "react";

interface SidebarProps {
  activeId: string;
  onSelect: (mod: CSSModule) => void;
}

export function Sidebar({ activeId, onSelect }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 inset-e-6 z-50 p-4 bg-blue-600 text-white rounded-full shadow-2xl lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <nav
        className={`
        fixed inset-y-0 inset-s-0 z-40 w-72 bg-white border-e border-slate-200 p-8 
        transition-transform duration-300 lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        ${/* RTL support: */ "rtl:-translate-x-full rtl:lg:translate-x-0"}
      `}
      >
        <div className="flex items-center gap-2 mb-12 text-blue-600">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Layout size={24} strokeWidth={2} />
          </div>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">
            CSS Mastery
          </h1>
        </div>

        <div className="space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 px-4">
            Architecture
          </p>
          <ul className="space-y-1">
            {modules.map((mod) => (
              <li
                key={mod.id}
                onClick={() => {
                  onSelect(mod);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2 cursor-pointer py-3 px-4 rounded-xl transition-all ${
                  activeId === mod.id
                    ? "bg-slate-900 text-white shadow-lg"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <mod.icon size={24} />
                <span className="text-sm font-semibold">{mod.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
