import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GeometricBackground } from './components/GeometricBackground';
import { HeroSection } from './components/HeroSection';
import { ResultsSection } from './components/ResultsSection';
import { FixturesSection } from './components/FixturesSection';
import { StandingsSection } from './components/StandingsSection';
import { StatsSection } from './components/StatsSection';
import { TeamsSection } from './components/TeamsSection';
import { Footer } from './components/Footer';
import { TeamModal } from './components/TeamModal';
import { NationalTeam } from './data/tournamentData';
import { Language } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('fa'); // Persian default per user request
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedTeam, setSelectedTeam] = useState<NationalTeam | null>(null);

  // Sync document direction and language attribute
  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'fa' : 'en'));
  };

  // Smooth navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 65;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['teams', 'stats', 'standings', 'fixtures', 'results'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      
      if (window.scrollY < 260) {
        setActiveSection('home');
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`relative min-h-screen bg-[#070D1E] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white ${
      lang === 'fa' ? 'font-sans' : ''
    }`}>
      {/* Background Graphic System Inspired by Reference Graphics */}
      <GeometricBackground />

      {/* Top Bar Header with Language Toggle & Status */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Main Content Area: Focused, clean, and energetic */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Section */}
        <HeroSection
          lang={lang}
          onNavigateToResults={() => handleNavigate('results')}
          onNavigateToFixtures={() => handleNavigate('fixtures')}
        />

        {/* 2. Official Match Results (Played Matches) */}
        <ResultsSection
          lang={lang}
          onSelectTeam={(team) => setSelectedTeam(team)}
        />

        {/* 3. Official Remaining Fixtures (Time TBA) */}
        <FixturesSection
          lang={lang}
          onSelectTeam={(team) => setSelectedTeam(team)}
        />

        {/* 4. Standings Section */}
        <StandingsSection
          lang={lang}
          onSelectTeam={(team) => setSelectedTeam(team)}
        />

        {/* 5. Tournament Stats (Top Scorers & Assists) */}
        <StatsSection
          lang={lang}
        />

        {/* 6. Participating National Teams Directory */}
        <TeamsSection
          lang={lang}
          onSelectTeam={(team) => setSelectedTeam(team)}
        />
      </main>

      {/* 8. Streamlined Footer with Developed By amirr0023 & Language Switcher */}
      <Footer
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Team Details Modal */}
      <TeamModal
        team={selectedTeam}
        lang={lang}
        onClose={() => setSelectedTeam(null)}
      />
    </div>
  );
}
