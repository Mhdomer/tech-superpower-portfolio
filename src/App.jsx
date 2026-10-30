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
import DecorativeBranches, { SectionSakuraDivider } from './components/DecorativeBranches';
import HackathonTourGuide from './components/HackathonTourGuide';
import AtsResumeModal from './components/AtsResumeModal';
import CachyOsTerminalDrawer from './components/CachyOsTerminalDrawer';
import AlabastaSandboardEasterEgg from './components/AlabastaSandboardEasterEgg';

export default function App() {
  const [labOpen, setLabOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [bootIntroOpen, setBootIntroOpen] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !window.location.search.includes('noboot');
  });
  const [modalImage, setModalImage] = useState({ isOpen: false, src: '', title: '' });

  const handleScrollToFunFact = () => {
    const el = document.getElementById('fun-fact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToArchitecture = () => {
    const el = document.getElementById('aws-architecture');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenImage = (src, title) => {
    setModalImage({ isOpen: true, src, title });
  };

  const handleCloseImage = () => {
    setModalImage({ isOpen: false, src: '', title: '' });
  };

  return (
    <div className="site-shell theme-editorial paper-noise min-h-screen relative overflow-x-clip selection:bg-terracotta-500 selection:text-white">
      {/* Epic Linux Boot Sequence, Terminal Typing, and Katana Slice Opening */}
      <LinuxBootKatanaIntro
        isOpen={bootIntroOpen}
        onClose={() => setBootIntroOpen(false)}
      />

      {/* Decorative Japanese Ink Sakura Branches (sharara.me exact layout) */}
      <DecorativeBranches />

      {/* Falling Sakura / Terracotta Leaves (sharara.me exact 14-leaf CSS animation) */}
      <FallingSakuraLeaves />

      {/* Interactive Cursor Sword Slashes Layer */}
      <CursorSwordSlash />

      {/* Top Sticky Navbar with Theme Toggle, Lower Hanging Katana, Tour, and Visible Hint */}
      <Navbar
        onOpenConsole={() => setLabOpen(true)}
        onStartTour={() => setTourOpen(true)}
        onOpenTerminal={() => setTerminalOpen((prev) => !prev)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 1: Hero with Editorial Typographic Layout and Sun Aura */}
        <Hero
          onOpenConsole={() => setLabOpen(true)}
          onStartTour={() => setTourOpen(true)}
          onOpenTerminal={() => setTerminalOpen((prev) => !prev)}
          onSelectImage={handleOpenImage}
          onScrollToFunFact={handleScrollToFunFact}
        />

        {/* Section 2: Alabasta Sandboard Easter Egg (Authentic Fun Fact) */}
        <section
          id="fun-fact"
          className="py-12 sm:py-16 px-4 sm:px-6 relative z-10 flex flex-col items-center"
        >
          <div id="alabasta-arena" className="absolute -top-24 pointer-events-none" />
          <AlabastaSandboardEasterEgg onContinueReading={handleScrollToArchitecture} />
        </section>

        {/* Sakura Section Divider Flourish */}
        <SectionSakuraDivider />

        {/* Section 3: Dedicated AWS Student Builder Challenge Architecture */}
        <AwsChallengeArchitecture
          onSelectImage={handleOpenImage}
          onOpenConsole={() => setLabOpen(true)}
        />

        {/* Sakura Section Divider Flourish */}
        <SectionSakuraDivider />

        {/* Section 4: Grounded Student Engineer Journey & Experience */}
        <About
          onOpenConsole={() => setLabOpen(true)}
          onSelectImage={handleOpenImage}
          onOpenResume={() => setResumeModalOpen(true)}
          onScrollToFunFact={handleScrollToFunFact}
        />

        {/* Sakura Section Divider Flourish (Flipped) */}
        <SectionSakuraDivider flip />

        {/* Section 5: Verified Tech Superpowers & Telemetry */}
        <Superpowers onOpenConsole={() => setLabOpen(true)} />

        {/* Sakura Section Divider Flourish */}
        <SectionSakuraDivider />

        {/* Section 6: Real Program Evidence & Implementation Gallery */}
        <Projects
          onSelectImage={handleOpenImage}
          onOpenConsole={() => setLabOpen(true)}
        />

        {/* Sakura Section Divider Flourish (Flipped) */}
        <SectionSakuraDivider flip />

        {/* Section 7: In The Trenches: DevSecOps Reality & Culture */}
        <EngineeringCultureGallery onSelectImage={handleOpenImage} />
      </main>

      {/* Global Footer */}
      <Footer onOpenConsole={() => setLabOpen(true)} />

      {/* The Creative Feature: Interactive Cloud Security Lab */}
      <InteractiveSecurityLabModal
        isOpen={labOpen}
        onClose={() => setLabOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Interactive AWS Hackathon Guided Tour for Judges and Visitors */}
      <HackathonTourGuide
        isOpen={tourOpen}
        onClose={() => setTourOpen(false)}
        onOpenLab={() => {
          setTourOpen(false);
          setLabOpen(true);
        }}
      />

      {/* High-Resolution Screenshot Inspection Modal */}
      <ImageModal
        isOpen={modalImage.isOpen}
        imageSrc={modalImage.src}
        title={modalImage.title}
        onClose={handleCloseImage}
      />

      {/* Direct ATS Resume Inspection Modal */}
      <AtsResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Collapsible CachyOS Linux Monospace Terminal Drawer (Toggle via ~, Navbar, Hero or bottom pill) */}
      <CachyOsTerminalDrawer
        isOpen={terminalOpen}
        onToggle={() => setTerminalOpen((prev) => !prev)}
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenLab={() => setLabOpen(true)}
        onOpenFunFact={handleScrollToFunFact}
      />
    </div>
  );
}
