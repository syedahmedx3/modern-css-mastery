import {
  Layout,
  Waves,
  Box,
  Zap,
  MousePointer2,
  Cloud,
  Brain,
  Cpu,
  Maximize,
  Workflow,
} from "lucide-react";
import type { CSSModule } from "@/types";

// ✅ Load all markdown files
const allContent = import.meta.glob("/src/content/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const modules: CSSModule[] = [
  {
    id: "css-trilogy",
    title: "CSS Trilogy",
    icon: MousePointer2,
    description: "High-Performance CSS Architecture with Modern Selectors",
    content: allContent["/src/content/css-trilogy.md"] || "",
    pillars: [
      {
        name: "Efficiency",
        icon: Zap,
        goal: "Selector Consolidation",
        problem: "Redundant, comma-heavy code",
        solution: ":is()",
      },
      {
        name: "Weightlessness",
        icon: Cloud,
        goal: "Zero Specificity",
        problem: "Specificity wars & !important",
        solution: ":where()",
      },
      {
        name: "Relationships",
        icon: Brain,
        goal: "Parent-Aware Logic",
        problem: "Heavy JS Event Listeners",
        solution: ":has()",
      },
    ],
    performanceImpact: [
      "Lower Total Blocking Time (TBT)",
      "Reduced CSS bundle size",
      "Native browser-level state management",
    ],
  },

  {
    id: "modern-responsive-design",
    title: "Modern Responsive Design",
    icon: Layout,
    description: "Constraint-Based Layout Architecture",
    content: allContent["/src/content/modern-responsive-design.md"] || "",
    pillars: [
      {
        name: "Fluidity",
        icon: Waves,
        goal: "Dynamic Scaling",
        problem: "Jumpy breakpoints",
        solution: "CSS clamp()",
      },
      {
        name: "Logic",
        icon: Box,
        goal: "Flattened DOM",
        problem: "Deeply nested wrappers",
        solution: "Grid & Subgrid",
      },
      {
        name: "Efficiency",
        icon: Zap,
        goal: "Deferred Rendering",
        problem: "Rendering off-screen content",
        solution: "content-visibility: auto",
      },
    ],
    performanceImpact: [
      "Zero Resize Calculations",
      "Elimination of Cumulative Layout Shift (CLS)",
      "Optimized rendering for data-heavy CRM portals",
    ],
  },

  {
    id: "rendering-path-optimization",
    title: "Rendering Path Optimization",
    icon: Cpu,
    description:
      "Minimizing Paint and Layout cycles by offloading heavy lifting to the browser's native Critical Rendering Path.",
    content: allContent["/src/content/rendering-path-optimization.md"] || "",
    pillars: [
      {
        name: "Composition",
        icon: Zap,
        goal: "Thread Optimization",
        problem: "Main-thread layout thrashing",
        solution: "GPU-accelerated transforms",
      },
      {
        name: "Containment",
        icon: Box,
        goal: "Isolated Rendering",
        problem: "Global style recalculations",
        solution: "content-visibility: auto",
      },
      {
        name: "Stability",
        icon: Layout,
        goal: "Predictive Sizing",
        problem: "Shifting layouts (CLS)",
        solution: "contain-intrinsic-size",
      },
    ],
    performanceImpact: [
      "Sub-second Time to Interactive (TTI)",
      "Reduced CPU overhead during scroll",
      "Optimized rendering for data-heavy portals",
    ],
  },

  {
    id: "container-intelligence",
    title: "Container Queries",
    icon: Maximize,
    description: " Component-Driven Responsive Architecture",
    content: allContent["/src/content/container-intelligence.md"] || "",
    pillars: [
      {
        name: "Modularity",
        icon: Box,
        goal: "Contextual Styling",
        problem: "Rigid @media breakpoints",
        solution: "@container queries",
      },
      {
        name: "Alignment",
        icon: Layout,
        goal: "Relational Layouts",
        problem: "Broken nested grid tracks",
        solution: "CSS Subgrid",
      },
      {
        name: "Scalability",
        icon: Waves,
        goal: "Parent-Aware Design",
        problem: "Component styling leakages",
        solution: "Container Units (cqw/cqh)",
      },
    ],
    performanceImpact: [
      "Modular, reusable component libraries",
      "Zero layout dependencies on viewport size",
      "Simplified CSS maintenance for complex CRMs",
    ],
  },

  {
    id: "native-state-management",
    title: "Native Ui State Management",
    icon: Workflow,
    description:
      "Leveraging native browser intelligence to replace JavaScript-heavy state management and complex UI event listeners.",
    content: allContent["/src/content/native-state-management.md"] || "",
    pillars: [
      {
        name: "Intelligence",
        icon: Brain,
        goal: "Parent Selection",
        problem: "Complex JS state toggles",
        solution: ":has() selector",
      },
      {
        name: "Consistency",
        icon: MousePointer2,
        goal: "Math-Driven Design",
        problem: "Hardcoded hex & magic numbers",
        solution: "oklch() & color-mix()",
      },
      {
        name: "Weightlessness",
        icon: Cloud,
        goal: "Zero Specificity",
        problem: "CSS specificity wars",
        solution: ":where() / :is() layering",
      },
    ],
    performanceImpact: [
      "Drastic reduction in JS bundle size",
      "Native browser-level state management",
      "Accessible-by-default color architecture",
    ],
  },
];
