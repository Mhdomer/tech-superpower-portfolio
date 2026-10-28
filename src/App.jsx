import React, { useState } from 'react';
import SakuraCanvas from './components/SakuraCanvas';
import LinuxBootKatanaIntro from './components/LinuxBootKatanaIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Superpowers from './components/Superpowers';
import Projects from './components/Projects';
import Footer from './components/Footer';
import DevSecOpsConsoleModal from './components/DevSecOpsConsoleModal';

export default function App() {
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [sakuraActive, setSakuraActive] = useState(true);
  const [bootIntroOpen, setBootIntroOpen] = useState(true); // Realistic Linux boot + typing + katana slice reveal

  return (
    <div className="min-h-screen bg-charcoal-900 text-slate-100 font-sans selection:bg-sakura-500/30 selection:text-sakura-200 relative overflow-x-hidden">
      {/* Realistic Linux Boot Sequence, Terminal Typing, and Katana Slice Opening */}
      <LinuxBootKatanaIntro
        isOpen={bootIntroOpen}
        onClose={() => setBootIntroOpen(false)}
      />

      {/* Background Petal Animation */}
      <SakuraCanvas active={sakuraActive} />

      {/* Top Fixed Navbar with Visible Hint */}
      <Navbar
        onOpenConsole={() => setConsoleOpen(true)}
        onTriggerKatana={() => setBootIntroOpen(true)}
        sakuraActive={sakuraActive}
        setSakuraActive={setSakuraActive}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenConsole={() => setConsoleOpen(true)}
          onTriggerKatana={() => setBootIntroOpen(true)}
        />
        <About onOpenConsole={() => setConsoleOpen(true)} />
        <Superpowers onOpenConsole={() => setConsoleOpen(true)} />
        <Projects onOpenConsole={() => setConsoleOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenConsole={() => setConsoleOpen(true)}
        onTriggerKatana={() => setBootIntroOpen(true)}
      />

      {/* The Creative Feature: DevSecOps Cyber Defense Console Modal */}
      <DevSecOpsConsoleModal
        isOpen={consoleOpen}
        onClose={() => setConsoleOpen(false)}
      />
    </div>
  );
}
