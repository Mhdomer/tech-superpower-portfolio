import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AwsChallengeArchitecture from './components/AwsChallengeArchitecture';
import About from './components/About';
import Superpowers from './components/Superpowers';
import Projects from './components/Projects';
import Footer from './components/Footer';
import InteractiveSecurityLabModal from './components/InteractiveSecurityLabModal';
import ImageModal from './components/ImageModal';

export default function App() {
  const [labOpen, setLabOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ isOpen: false, src: '', title: '' });

  const handleOpenImage = (src, title) => {
    setModalImage({ isOpen: true, src, title });
  };

  const handleCloseImage = () => {
    setModalImage({ isOpen: false, src: '', title: '' });
  };

  return (
    <div className="min-h-screen bg-charcoal-900 text-slate-100 font-sans selection:bg-cyber-emerald/30 selection:text-white relative overflow-x-hidden">
      {/* Top Fixed Navbar with Visible Hint */}
      <Navbar onOpenConsole={() => setLabOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero with Real Program Evidence Deck */}
        <Hero
          onOpenConsole={() => setLabOpen(true)}
          onSelectImage={handleOpenImage}
        />

        {/* Section 2: Dedicated AWS Student Builder Challenge Architecture */}
        <AwsChallengeArchitecture
          onSelectImage={handleOpenImage}
          onOpenConsole={() => setLabOpen(true)}
        />

        {/* Section 3: Grounded Student Engineer Journey & Experience */}
        <About onOpenConsole={() => setLabOpen(true)} />

        {/* Section 4: Verified Tech Superpowers & Telemetry */}
        <Superpowers onOpenConsole={() => setLabOpen(true)} />

        {/* Section 5: Real Program Evidence & Implementation Gallery */}
        <Projects
          onSelectImage={handleOpenImage}
          onOpenConsole={() => setLabOpen(true)}
        />
      </main>

      {/* Global Footer */}
      <Footer onOpenConsole={() => setLabOpen(true)} />

      {/* The Creative Feature: Interactive Cloud Security Defense Sandbox & Linter Modal */}
      <InteractiveSecurityLabModal
        isOpen={labOpen}
        onClose={() => setLabOpen(false)}
      />

      {/* High-Resolution Screenshot Inspection Modal */}
      <ImageModal
        isOpen={modalImage.isOpen}
        imageSrc={modalImage.src}
        title={modalImage.title}
        onClose={handleCloseImage}
      />
    </div>
  );
}
