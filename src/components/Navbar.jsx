import React, { useState } from 'react';
import { ShieldCheck, Menu, X, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Navbar({ onOpenConsole }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-charcoal-900/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left: Social Icons & Identity (Ziad Sharara layout) */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Mhdomer"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-charcoal-800 border border-white/10 hover:border-terracotta-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>
            <a
              href="https://linkedin.com/in/mhd3omar"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-lg bg-charcoal-800 border border-white/10 hover:border-terracotta-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors text-xs font-bold font-mono"
              title="LinkedIn"
            >
              in
            </a>
            <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block"></div>
            <a href="#" className="text-xs font-mono font-bold tracking-wider text-slate-300 hover:text-white transition-colors hidden sm:inline-block">
              MHDOMAR<span className="text-terracotta-500">.DEV</span>
            </a>
          </div>

          {/* Center: Clean Monospace Nav Links */}
          <div className="hidden md:flex items-center space-x-8 text-xs font-mono font-medium tracking-wider uppercase text-slate-400">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#culture" className="hover:text-terracotta-400 transition-colors">
              Culture & Memes
            </a>
          </div>

          {/* Right: The Visible Hint Creative Feature Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsole}
              className="px-4 py-2 rounded-full bg-cream-100 hover:bg-white text-charcoal-900 font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md flex items-center gap-2 group"
            >
              <ShieldCheck className="w-4 h-4 text-terracotta-500 group-hover:scale-110 transition-transform" />
              <span>Security Lab</span>
              <span className="text-[10px] bg-terracotta-500 text-white px-1.5 py-0.5 rounded-full font-sans lowercase">
                hint!
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenConsole}
              className="px-3 py-1.5 rounded-full bg-cream-100 text-charcoal-900 text-xs font-mono font-bold flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Lab (Hint!)</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-4 space-y-2 bg-charcoal-850 border-t border-white/5 text-xs font-mono uppercase tracking-wider">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            Work & Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            Tech Superpowers
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            Experience & Credentials
          </a>
          <a
            href="#culture"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-terracotta-400 hover:text-white"
          >
            Dev Culture & Memes
          </a>
        </div>
      )}
    </nav>
  );
}
