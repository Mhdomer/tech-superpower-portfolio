import React, { useState } from 'react';
import SakuraCanvas from './components/SakuraCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Superpowers from './components/Superpowers';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CreativeEngineModal from './components/CreativeEngineModal';

export default function App() {
  const [engineOpen, setEngineOpen] = useState(false);
  const [sakuraActive, setSakuraActive] = useState(true);

  return (
    <div className="min-h-screen bg-charcoal-900 text-slate-100 font-sans selection:bg-sakura-500/30 selection:text-sakura-200 relative overflow-x-hidden">
      {/* Background Petal Animation */}
      <SakuraCanvas active={sakuraActive} />

      {/* Top Fixed Navbar */}
      <Navbar
        onOpenEngine={() => setEngineOpen(true)}
        sakuraActive={sakuraActive}
        setSakuraActive={setSakuraActive}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenEngine={() => setEngineOpen(true)} />
        <About />
        <Superpowers onOpenEngine={() => setEngineOpen(true)} />
        <Projects />
      </main>

      {/* Global Footer */}
      <Footer onOpenEngine={() => setEngineOpen(true)} />

      {/* The Creative Feature: V4 Superpower Engine Modal */}
      <CreativeEngineModal
        isOpen={engineOpen}
        onClose={() => setEngineOpen(false)}
      />
    </div>
  );
}
