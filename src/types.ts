// src\types.ts
import type { LucideIcon } from "lucide-react";

export interface Pillar {
  name: string;
  icon: LucideIcon;
  goal: string;
  problem: string;
  solution: string;
}

export interface CSSModule {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  content: string;
  pillars: Pillar[];
  performanceImpact: string[];
}
