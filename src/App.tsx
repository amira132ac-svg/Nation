import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GeometricBackground } from './components/GeometricBackground';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { GroupsSection } from './components/GroupsSection';
import { FixturesSection } from './components/FixturesSection';
import { ResultsSection } from './components/ResultsSection';
import { StandingsSection } from './components/StandingsSection';
import { TeamsSection } from './components/TeamsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { TeamModal } from './components/TeamModal';
import { NationalTeam } from './data/tournamentData';
import { Language } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('fa'); // Persian default as requested
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
      const headerOffset = 70;
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
    const sectionIds = ['about', 'teams', 'standings', 'results', 'fixtures', 'groups', 'overview'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      
      if (window.scrollY < 300) {
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

      {/* Top Bar Header with 3-zone contract & Language Toggle */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Section */}
        <HeroSection
          lang={lang}
          onNavigateToGroups={() => handleNavigate('groups')}
          onNavigateToFixtures={() => handleNavigate('fixtures')}
        />

        {/* 2. Tournament Overview */}
        <OverviewSection
          lang={lang}
          onNavigateToGroups={() => handleNavigate('groups')}
          onNavigateToFixtures={() => handleNavigate('fixtures')}
        />

        {/* 3. Official Groups Preview & Composition */}
        <GroupsSection
          lang={lang}
          onSelectTeam={(team) => setSelectedTeam(team)}
        />

        {/* 4. Upcoming Fixtures Section (Matches from IMG_1730 with times TBA) */}
        <FixturesSection
          lang={lang}
          onSelectTeam={(team) => setSelectedTeam(team)}
        />

        {/* 5. Match Results Section */}
        <ResultsSection
          lang={lang}
        />

        {/* 6. Standings Section */}
        <StandingsSection
          lang={lang}
          onSelectTeam={(team) => setSelectedTeam(team)}
        />

        {/* 7. Participating National Teams Directory */}
        <TeamsSection
          lang={lang}
          onSelectTeam={(team) => setSelectedTeam(team)}
        />

        {/* 8. Tournament Information / About */}
        <AboutSection
          lang={lang}
        />
      </main>

      {/* 9. Professional Footer with Developed By amirr0023 & Language Switcher */}
      <Footer
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={toggleLanguage}
      />

      {/* Team Details Modal with Verified Data Only */}
      <TeamModal
        team={selectedTeam}
        lang={lang}
        onClose={() => setSelectedTeam(null)}
      />
    </div>
  );
}
