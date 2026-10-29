import React, { useState } from 'react';
import { ShieldCheck, Menu, X, Shield, ExternalLink, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Navbar({ onOpenConsole }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 cyber-panel border-b border-white/10 bg-charcoal-900/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Identity */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-charcoal-800 border border-cyber-emerald/40 p-1 flex items-center justify-center text-cyber-emerald group-hover:border-cyber-emerald transition-colors">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold tracking-tight text-white font-mono text-sm sm:text-base">
                MHDOMAR<span className="text-cyber-emerald">.DEV</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[11px] font-mono px-2 py-0.5 rounded bg-charcoal-800 text-cyber-cyan border border-white/5">
                CLOUD DEVSECOPS & AI DEFENSE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-7 text-sm font-medium">
            <a
              href="#aws-architecture"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 font-mono text-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse"></span>
              <span>AWS Architecture</span>
            </a>
            <a
              href="#about"
              className="text-slate-300 hover:text-white transition-colors text-xs font-mono"
            >
              About & Credentials
            </a>
            <a
              href="#superpowers"
              className="text-slate-300 hover:text-white transition-colors text-xs font-mono"
            >
              Tech Superpowers
            </a>
            <a
              href="#projects"
              className="text-slate-300 hover:text-white transition-colors text-xs font-mono"
            >
              Production Programs
            </a>
            <a
              href="#culture"
              className="text-slate-300 hover:text-cyber-emerald transition-colors text-xs font-mono"
            >
              Dev Culture
            </a>
          </div>

          {/* Action Area: The Visible Hint (AWS Hackathon Gate) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/Mhdomer"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 fill-current" />
            </a>

            {/* THE VISIBLE HINT (Strictly Required for 30% Hackathon Rubric Gate) */}
            <button
              onClick={onOpenConsole}
              className="relative group px-3.5 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 border border-cyber-emerald/60 hover:border-cyber-emerald text-cyber-emerald hover:text-white transition-all shadow-sm flex items-center gap-2 font-mono text-xs overflow-hidden"
            >
              <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-ping"></span>
              <ShieldCheck className="w-3.5 h-3.5 text-cyber-emerald group-hover:scale-110 transition-transform" />
              <span className="font-bold">Security Lab & Policy Linter</span>
              <span className="text-[10px] bg-cyber-emerald/20 text-cyber-emerald px-1.5 py-0.5 rounded font-sans font-semibold border border-cyber-emerald/40">
                Hint!
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenConsole}
              className="px-2.5 py-1 rounded bg-charcoal-800 border border-cyber-emerald/50 text-cyber-emerald text-xs font-mono flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
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
        <div className="sm:hidden px-4 pt-2 pb-4 space-y-2 cyber-panel border-t border-white/10 text-xs font-mono bg-charcoal-900">
          <a
            href="#aws-architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-cyber-cyan hover:text-white"
          >
            AWS Challenge Architecture
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            About & Experience
          </a>
          <a
            href="#superpowers"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            Tech Superpowers
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-white"
          >
            Production Programs
          </a>
          <a
            href="#culture"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-cyber-emerald hover:text-white"
          >
            Dev Culture & Memes
          </a>
        </div>
      )}
    </nav>
  );
}
