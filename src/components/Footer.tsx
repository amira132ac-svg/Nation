import React from 'react';
import { Globe, Code2 } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { Language, translations } from '../data/translations';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  lang: Language;
  onToggleLang: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang, onToggleLang }) => {
  const currentYear = new Date().getFullYear();
  const t = translations[lang];

  return (
    <footer className="relative bg-[#040813] border-t border-blue-950/80 pt-12 pb-10 overflow-hidden text-slate-400">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-950/80">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <BrandLogo size="sm" withMonogram />
          </div>

          {/* Direct Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-300">
            <button
              onClick={() => onNavigate('fixtures')}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t.navFixtures}
            </button>
            <button
              onClick={() => onNavigate('groups')}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t.navGroups}
            </button>
            <button
              onClick={() => onNavigate('standings')}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t.navStandings}
            </button>
            <button
              onClick={() => onNavigate('teams')}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              {t.navTeams}
            </button>
          </nav>
        </div>

        {/* Bottom Bar: Developed By amirr0023 + Language Switcher + Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          {/* Left: Copyright */}
          <div>
            <span>© {currentYear} TMPROCLUB.</span>
          </div>

          {/* Center: Developer Signature */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-800/50 text-slate-300 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold tracking-wide">
              Developed By <span className="text-white font-extrabold hover:text-blue-400 transition-colors">amirr0023</span>
            </span>
          </div>

          {/* Right: Language Switcher Button in Footer */}
          <div>
            <button
              onClick={onToggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A1432] hover:bg-blue-600/20 border border-blue-800/60 hover:border-blue-400 text-xs font-bold text-slate-200 hover:text-white transition-all cursor-pointer shadow-sm"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang === 'en' ? 'تغییر به زبان فارسی' : 'Switch to English'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
