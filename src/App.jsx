import React, { useState } from 'react';
import SakuraCanvas from './components/SakuraCanvas';
import LinuxBootKatanaIntro from './components/LinuxBootKatanaIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AwsChallengeArchitecture from './components/AwsChallengeArchitecture';
import About from './components/About';
import Superpowers from './components/Superpowers';
import Projects from './components/Projects';
import Footer from './components/Footer';
import DevSecOpsConsoleModal from './components/DevSecOpsConsoleModal';
import ImageModal from './components/ImageModal';

export default function App() {
  const [consoleOpen, setConsoleOpen] = useState(false);
  const [sakuraActive, setSakuraActive] = useState(true);
  const [bootIntroOpen, setBootIntroOpen] = useState(true); // Realistic Linux boot + typing + katana slice reveal
  const [modalImage, setModalImage] = useState({ isOpen: false, src: '', title: '' });

  const handleOpenImage = (src, title) => {
    setModalImage({ isOpen: true, src, title });
  };

  const handleCloseImage = () => {
    setModalImage({ isOpen: false, src: '', title: '' });
  };

  return (
    <div className="min-h-screen bg-charcoal-900 text-slate-100 font-sans selection:bg-sakura-500/30 selection:text-sakura-200 relative overflow-x-hidden">
      {/* Realistic Linux Boot Sequence, Terminal Typing, and Real Katana Slice Opening */}
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
        {/* Section 1: Hero with Real Program Evidence Deck */}
        <Hero
          onOpenConsole={() => setConsoleOpen(true)}
          onTriggerKatana={() => setBootIntroOpen(true)}
          onSelectImage={handleOpenImage}
        />

        {/* Section 2: Dedicated AWS Student Builder Challenge Architecture */}
        <AwsChallengeArchitecture
          onSelectImage={handleOpenImage}
          onOpenConsole={() => setConsoleOpen(true)}
        />

        {/* Section 3: Grounded Student Engineer Journey & Experience */}
        <About onOpenConsole={() => setConsoleOpen(true)} />

        {/* Section 4: Verified Tech Superpowers & Telemetry */}
        <Superpowers onOpenConsole={() => setConsoleOpen(true)} />

        {/* Section 5: Real Program Evidence & Implementation Gallery */}
        <Projects
          onSelectImage={handleOpenImage}
          onOpenConsole={() => setConsoleOpen(true)}
        />
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
