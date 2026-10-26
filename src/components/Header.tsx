import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Home, Trophy, Calendar, Table, BarChart3, Users, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const isRtl = lang === 'fa';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: t.navHome, icon: Home },
    { id: 'results', label: t.navResults, icon: Trophy },
    { id: 'fixtures', label: t.navFixtures, icon: Calendar },
    { id: 'standings', label: t.navStandings, icon: Table },
    { id: 'stats', label: t.navStats, icon: BarChart3 },
    { id: 'teams', label: t.navTeams, icon: Users },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#070D1E]/95 backdrop-blur-md border-b border-blue-900/50 py-3 shadow-xl'
          : 'bg-[#070D1E]/85 backdrop-blur-sm border-b border-blue-950/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-11">
          {/* Zone 1: Brand Wordmark */}
          <div
            onClick={() => handleLinkClick('home')}
            className="cursor-pointer whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
          >
            <BrandLogo size="sm" />
          </div>

          {/* Zone 2: Main Navigation Links for Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-slate-300">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive ? 'text-white' : 'hover:text-white text-slate-400'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="headerActiveTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0A1432] hover:bg-blue-600/20 border border-blue-800/60 hover:border-blue-400 text-xs font-bold text-slate-200 hover:text-white transition-all cursor-pointer whitespace-nowrap shrink-0"
              title="تغییر زبان / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'en' ? 'فارسی' : 'EN'}</span>
            </button>

            {/* Animated Morphing 3-Lines (Hamburger to X) Button for Mobile */}
            <div className="flex lg:hidden items-center">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`relative w-10 h-10 rounded-xl transition-all cursor-pointer flex items-center justify-center border focus:outline-none ${
                  mobileMenuOpen
                    ? 'bg-blue-600/25 border-blue-400/80 text-blue-300'
                    : 'bg-[#0A1432] border-blue-900/70 hover:border-blue-500/70 text-slate-300 hover:text-white'
                }`}
                aria-label={mobileMenuOpen ? 'بستن منو' : 'باز کردن منو'}
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-5 h-4 relative flex flex-col justify-between items-center">
                  <motion.span
                    animate={
                      mobileMenuOpen
                        ? { rotate: 45, y: 7, backgroundColor: '#fbbf24' }
                        : { rotate: 0, y: 0, backgroundColor: '#cbd5e1' }
                    }
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className="w-5 h-0.5 rounded-full origin-center block"
                  />
                  <motion.span
                    animate={
                      mobileMenuOpen
                        ? { opacity: 0, scaleX: 0, x: isRtl ? 8 : -8 }
                        : { opacity: 1, scaleX: 1, x: 0, backgroundColor: '#cbd5e1' }
                    }
                    transition={{ duration: 0.18 }}
                    className="w-5 h-0.5 rounded-full origin-center block"
                  />
                  <motion.span
                    animate={
                      mobileMenuOpen
                        ? { rotate: -45, y: -7, backgroundColor: '#fbbf24' }
                        : { rotate: 0, y: 0, backgroundColor: '#cbd5e1' }
                    }
                    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                    className="w-5 h-0.5 rounded-full origin-center block"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[57px] bg-[#070D1E]/80 backdrop-blur-sm z-30 lg:hidden"
            />

            <motion.div
              key="menu-drawer"
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ type: 'spring', stiffness: 340, damping: 28 }}
              className="relative z-40 lg:hidden bg-[#070D1E]/98 border-b border-blue-900/80 px-4 sm:px-6 py-4 shadow-2xl backdrop-blur-2xl overflow-hidden"
            >
              <div className="space-y-1.5 py-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: isRtl ? 12 : -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.18 }}
                      onClick={() => handleLinkClick(item.id)}
                      className={`w-full text-start py-2.5 px-3.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-blue-600/20 text-white border border-blue-500/50'
                          : 'text-slate-300 hover:text-white hover:bg-blue-950/50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      {isRtl ? (
                        <ChevronLeft className="w-4 h-4 text-slate-500" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
