import React from 'react';
import { Globe, Code2, Heart } from 'lucide-react';
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
    <footer className="relative bg-[#040813] border-t border-blue-950/80 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-blue-950/80">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size="md" withMonogram />
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mt-4">
              {t.footerDesc}
            </p>
            <div className="text-xs text-slate-500 font-mono">
              {t.footerStatus}
            </div>
          </div>

          {/* Tournament Sections */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footerNavTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('fixtures')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t.navFixtures}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('groups')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t.navGroups}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('standings')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t.navStandings}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('results')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t.navResults}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('teams')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t.navTeams}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {t.navAbout}
                </button>
              </li>
            </ul>
          </div>

          {/* Competition Structure */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footerOverviewTitle}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>
                <strong className="text-slate-300 font-medium">{t.groupA}:</strong>{' '}
                {lang === 'fa'
                  ? 'آرژانتین، فرانسه، هلند، ایالات متحده، کلمبیا، کیپ ورد'
                  : 'Argentina, France, Netherlands, USA, Colombia, Cape Verde'}
              </p>
              <p>
                <strong className="text-slate-300 font-medium">{t.groupB}:</strong>{' '}
                {lang === 'fa'
                  ? 'اسپانیا، برزیل، اسرائیل، پرتغال، ایتالیا، نروژ'
                  : 'Spain, Brazil, Israel, Portugal, Italy, Norway'}
              </p>
              <p className="text-[11px] text-slate-500 pt-1 font-mono">
                {lang === 'fa' ? '۱۲ تیم ملی · مرحله رفت دوره‌ای' : '12 Teams · Round-Robin Format'}
              </p>
            </div>
          </div>
        </div>

        {/* Very Bottom Bar: Developed By amirr0023 + Language Switcher + Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          {/* Left: Copyright */}
          <div className="flex items-center gap-2">
            <span>© {currentYear} TMPROCLUB.</span>
            <span>{t.rightsReserved}</span>
          </div>

          {/* Center: Prominent Developer Signature Requested by User */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-800/40 text-slate-300 shadow-sm">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold tracking-wide">
              Developed By <span className="text-white font-extrabold hover:text-blue-400 transition-colors">amirr0023</span>
            </span>
          </div>

          {/* Right: Language Switcher Button in Footer */}
          <div className="flex items-center gap-3">
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
