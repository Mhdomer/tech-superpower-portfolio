import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AwsChallengeArchitecture from './components/AwsChallengeArchitecture';
import About from './components/About';
import Superpowers from './components/Superpowers';
import Projects from './components/Projects';
import EngineeringCultureGallery from './components/EngineeringCultureGallery';
import Footer from './components/Footer';
import InteractiveSecurityLabModal from './components/InteractiveSecurityLabModal';
import ImageModal from './components/ImageModal';
import LinuxBootKatanaIntro from './components/LinuxBootKatanaIntro';
import FallingSakuraLeaves from './components/FallingSakuraLeaves';
import CursorSwordSlash from './components/CursorSwordSlash';

export default function App() {
  const [labOpen, setLabOpen] = useState(false);
  const [bootIntroOpen, setBootIntroOpen] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !window.location.search.includes('noboot');
  });
  const [modalImage, setModalImage] = useState({ isOpen: false, src: '', title: '' });

  const handleOpenImage = (src, title) => {
    setModalImage({ isOpen: true, src, title });
  };

  const handleCloseImage = () => {
    setModalImage({ isOpen: false, src: '', title: '' });
  };

  return (
    <div className="site-shell theme-editorial paper-noise min-h-screen relative overflow-x-hidden selection:bg-terracotta-500 selection:text-white">
      {/* Epic Linux Boot Sequence, Terminal Typing, and Katana Slice Opening */}
      <LinuxBootKatanaIntro
        isOpen={bootIntroOpen}
        onClose={() => setBootIntroOpen(false)}
      />

      {/* Falling Sakura / Terracotta Leaves (sharara.me exact 14-leaf CSS animation) */}
      <FallingSakuraLeaves />

      {/* Interactive Cursor Sword Slashes Layer */}
      <CursorSwordSlash />

      {/* Top Fixed Navbar with Theme Toggle, Lower Hanging Katana, and Visible Hint */}
      <Navbar onOpenConsole={() => setLabOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 1: Hero with Editorial Typographic Layout and Sun Aura */}
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
        <About
          onOpenConsole={() => setLabOpen(true)}
          onSelectImage={handleOpenImage}
        />

        {/* Section 4: Verified Tech Superpowers & Telemetry */}
        <Superpowers onOpenConsole={() => setLabOpen(true)} />

        {/* Section 5: Real Program Evidence & Implementation Gallery */}
        <Projects
          onSelectImage={handleOpenImage}
          onOpenConsole={() => setLabOpen(true)}
        />

        {/* Section 6: In The Trenches - DevSecOps Reality & Culture */}
        <EngineeringCultureGallery onSelectImage={handleOpenImage} />
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
