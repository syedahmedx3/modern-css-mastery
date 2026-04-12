import { useState } from "react";
import { modules } from "@/data/modules";
import { Sidebar } from "@/components/Sidebar";
import { DocViewer } from "@/components/DocViewer";
import type { CSSModule } from "@/types";

export default function MasteryDashboard() {
  const [activeModule, setActiveModule] = useState<CSSModule>(modules[0]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col lg:flex-row">
      {/* Navigation Component */}
      <Sidebar activeId={activeModule.id} onSelect={setActiveModule} />

      {/* Main Content Component */}
      <DocViewer activeModule={activeModule} />
    </div>
  );
}
