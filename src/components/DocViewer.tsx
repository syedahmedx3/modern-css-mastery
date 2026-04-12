import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { CSSModule } from "@/types";
import { Star } from "lucide-react";

interface DocViewerProps {
  activeModule: CSSModule;
}

export function DocViewer({ activeModule }: DocViewerProps) {
  return (
    <main className="flex-1 lg:ms-72 min-h-screen">
      <div className="w-full mx-auto px-6 md:px-8 lg:px-16 py-12 lg:py-10">
        {/* Breadcrumb */}
        <div className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.3em] mb-6 text-start">
          Technical Architecture / {activeModule.id.replace("-", " ")}
        </div>

        {/* Enhanced Header */}
        <header className="mb-6 border-b-2 border-slate-200 pb-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.1]">
            {activeModule.title}
          </h2>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <p className="text-md text-slate-500 leading-relaxed flex-1 font-medium italic">
              {activeModule.description}
            </p>
            <div className="hidden md:block w-px h-12 bg-slate-200 self-center border border-slate-200" />
            <div className="flex gap-4 items-end">
              <div className="flex gap-1 items-baseline">
                <span className="text-2xl font-black text-slate-900 leading-none">
                  100
                </span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                  Perf
                </span>
              </div>
              <div className="flex gap-1 items-baseline">
                <span className="text-2xl font-black text-slate-900 leading-none">
                  A+
                </span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                  Grade
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Reading Area */}
        <article
          className="prose prose-slate prose-lg md:prose-xl max-w-none 
          text-start
          prose-headings:tracking-tight prose-headings:font-black prose-headings:text-slate-900
          prose-h2:border-s-4 prose-h2:border-blue-600 prose-h2:ps-6 prose-h2:py-1
          prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md 
          prose-code:before:content-none prose-code:after:content-none
          prose-blockquote:border-s-4 prose-blockquote:border-slate-200 prose-blockquote:ps-8 prose-blockquote:italic
          prose-pre:bg-slate-900 prose-pre:rounded-2xl prose-pre:shadow-2xl
          prose-img:rounded-3xl prose-img:shadow-2xl"
        >
          <Markdown remarkPlugins={[remarkGfm]}>
            {activeModule.content}
          </Markdown>
        </article>

        {/* Dedicated CTA Section - Now outside the footer for full width */}
        <section className="mt-32 p-10 rounded-3xl bg-linear-to-br from-slate-50 to-white border border-slate-100 text-center shadow-sm">
          <h4 className="text-2xl font-black text-slate-900 mb-3">
            Build Better Together
          </h4>
          <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
            If these architectural principles helped your workflow, consider
            supporting the repository with a star.
          </p>
          <a
            href="https://github.com/syedahmedx3/modern-css-mastery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-slate-200"
          >
            <Star size={18} fill="currentColor" />
            Star this Repository
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-20 pb-12 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm font-medium">
          <p>© 2026 Syed Ahmed Mohi Uddin Hasan — Saudi Arabia</p>
          <div className="flex gap-8">
            <a
              href="https://github.com/syedahmedx3/modern-css-mastery"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub Source
            </a>
            <a
              href="https://linkedin.com/in/syedahmedhasanx3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
