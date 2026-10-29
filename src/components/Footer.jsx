import React from 'react';
import { Mail, ExternalLink, Cloud, ShieldCheck, Shield } from 'lucide-react';
import { GithubIcon, YoutubeIcon } from './Icons';

export default function Footer({ onOpenConsole }) {
  return (
    <footer className="border-t border-white/10 bg-charcoal-950 py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Column 1: Identity & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-charcoal-800 border border-cyber-emerald/40 flex items-center justify-center text-cyber-emerald">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-bold text-white font-mono text-base">
                MHDOMAR<span className="text-cyber-emerald">.DEV</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Mohamed Makhlouf. Senior Computer Science student at Universiti Teknologi Malaysia (UTM) undergoing Industrial Training at Al-Ameen Medical Complex IT Dept, Riyadh. Dedicated to Cloud DevSecOps, AI Security, shift-left gating, and peer mentorship.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenConsole}
                className="text-xs font-mono text-cyber-emerald hover:text-white transition-colors underline underline-offset-4 flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Launch Interactive Security Sandbox</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">Sections</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyber-emerald transition-colors text-xs font-mono">
                  About & Journey
                </a>
              </li>
              <li>
                <a href="#superpowers" className="hover:text-cyber-emerald transition-colors text-xs font-mono">
                  Tech Superpowers & Telemetry
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyber-emerald transition-colors text-xs font-mono">
                  Projects & AWS Implementations
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mhdomer/aegis-2b"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyber-emerald transition-colors flex items-center gap-1 text-xs font-mono"
                >
                  <span>Aegis-2B Guardrail Repo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Communication & Inquiries */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">Connect & Inquiries</h4>
            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500">Work Email: </span>
                <a href="mailto:muhamedomar.g@gmail.com" className="text-slate-300 hover:text-cyber-emerald">
                  muhamedomar.g@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-500">UTM Academic: </span>
                <a href="mailto:omarmohamed.m@graduate.utm.my" className="text-slate-300 hover:text-cyber-emerald">
                  omarmohamed.m@graduate.utm.my
                </a>
              </div>
              <div>
                <span className="text-slate-500">LinkedIn: </span>
                <a
                  href="https://linkedin.com/in/mhd3omar"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-cyber-emerald"
                >
                  linkedin.com/in/mhd3omar
                </a>
              </div>
              <div>
                <span className="text-slate-500">YouTube: </span>
                <a
                  href="https://www.youtube.com/@omardocuments"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-cyber-emerald"
                >
                  Omar Documents (@omardocuments)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Rubric Badge */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Mohamed Makhlouf (Mhdomar)</span>
            <span>•</span>
            <span className="text-cyber-emerald">AWS Student Builder Challenge</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Mhdomer/tech-superpower-portfolio"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors flex items-center gap-1"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <span className="text-slate-400">Hosted on AWS Amplify</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
