import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { Language, translations } from '../data/translations';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  lang: Language;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  lang,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.navHome },
    { id: 'fixtures', label: t.navFixtures },
    { id: 'groups', label: t.navGroups },
    { id: 'standings', label: t.navStandings },
    { id: 'results', label: t.navResults },
    { id: 'teams', label: t.navTeams },
    { id: 'about', label: t.navAbout },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070D1E]/95 backdrop-blur-md border-b border-blue-900/50 py-3 shadow-xl'
          : 'bg-[#070D1E]/80 backdrop-blur-sm border-b border-blue-950/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-12">
          {/* Zone 1: Brand Wordmark */}
          <div
            onClick={() => handleLinkClick('home')}
            className="cursor-pointer shrink-0 transition-opacity hover:opacity-90"
          >
            <BrandLogo size="sm" />
          </div>

          {/* Zone 2: Main Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-bold text-slate-300">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-white' : 'hover:text-white text-slate-400'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Toggle + Tournament Status */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Selector Button */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1432] hover:bg-blue-600/20 border border-blue-800/60 hover:border-blue-400 text-xs font-bold text-slate-200 hover:text-white transition-all cursor-pointer shadow-sm"
              title="تغییر زبان / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'en' ? 'فارسی' : 'English'}</span>
            </button>

            {/* Status indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A1432] border border-blue-900/60 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 animate-pulse" />
              <span className="tracking-wider uppercase whitespace-nowrap text-[11px]">
                {t.statusNotStarted}
              </span>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-blue-900/40 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D1E]/98 border-b border-blue-900/80 px-6 py-6 space-y-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-blue-950 mb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{t.statusNotStarted}</span>
            </div>
            {/* Language toggle inside mobile menu */}
            <button
              onClick={onToggleLang}
              className="text-xs font-bold text-blue-400 flex items-center gap-1 px-2.5 py-1 rounded bg-blue-950/60 border border-blue-900"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === 'en' ? 'فارسی' : 'English'}</span>
            </button>
          </div>

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-base font-bold transition-colors flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-blue-600/20 text-white border border-blue-500/40'
                    : 'text-slate-300 hover:text-white hover:bg-blue-950/40'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
