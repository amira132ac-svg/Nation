import React from 'react';
import { ChevronRight, ArrowDown, Flame, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { TrophyArt } from './TrophyArt';
import { Language, translations } from '../data/translations';

interface HeroSectionProps {
  lang: Language;
  onNavigateToGroups: () => void;
  onNavigateToFixtures: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onNavigateToGroups,
  onNavigateToFixtures,
}) => {
  const t = translations[lang];
  const isRtl = lang === 'fa';

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 md:py-32 overflow-hidden">
      {/* Stadium Floodlight Cones & Radiant Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Dynamic Opening Clash Ticker Bar */}
        <div className="mb-6 inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-full bg-blue-950/60 border border-blue-800/50 backdrop-blur-md shadow-lg animate-float-gentle">
          <div className="flex items-center gap-1.5 text-xs font-black uppercase text-amber-400">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{isRtl ? 'دیدارهای داغ هفته اول' : 'Round 1 Blockbusters'}</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
            <span>{isRtl ? 'آرژانتین ⚡ فرانسه' : 'ARGENTINA ⚡ FRANCE'}</span>
            <span className="text-slate-500">·</span>
            <span>{isRtl ? 'برزیل ⚡ ایتالیا' : 'BRAZIL ⚡ ITALY'}</span>
            <span className="text-slate-500">·</span>
            <span>{isRtl ? 'اسپانیا ⚡ نروژ' : 'SPAIN ⚡ NORWAY'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-slate-300 bg-[#0A1432]/80 px-3.5 py-1.5 rounded-md border border-blue-900/50">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
              <span>{t.statusNotStarted}</span>
              <span className="text-slate-600">·</span>
              <span className="text-blue-400">{t.statusDrawComplete}</span>
            </div>

            {/* TMPROCLUB Identity */}
            <BrandLogo size="md" withMonogram className="mb-1" />

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] text-balance">
              TMPROCLUB <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-200 to-amber-300 drop-shadow-[0_4px_12px_rgba(0,82,255,0.4)]">
                NATIONS LEAGUE
              </span>
            </h1>

            {/* Short Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-200 max-w-xl leading-snug">
              {t.tournamentSubtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
              {isRtl
                ? 'دوازده تیم ملی نامدار در دو گروه A و B بر سر تصاحب جام باشکوه لیگ ملت‌ها به مصاف هم می‌روند. هفته اول با تقابل‌های تاریخی و سرنوشت‌ساز آغاز خواهد شد.'
                : 'Twelve national teams divided into Group A and Group B competing for the prestigious international championship trophy. Round 1 features historic world-class clashes.'}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onNavigateToFixtures}
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-extrabold uppercase tracking-wider rounded-xl shadow-[0_8px_25px_rgba(37,99,235,0.45)] transition-all flex items-center gap-2 cursor-pointer group hover:scale-[1.02]"
              >
                <span>{t.navFixtures}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
              </button>

              <button
                onClick={onNavigateToGroups}
                className="px-6 py-3.5 bg-[#0A1432] hover:bg-blue-900/50 text-slate-100 hover:text-white border border-blue-800/80 hover:border-blue-400 text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
              >
                {t.viewGroups}
              </button>
            </div>

            {/* Key Fact Strip below hero buttons */}
            <div className="pt-6 border-t border-blue-950/80 w-full flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-semibold text-slate-400">
              <div className="flex items-center gap-3">
                <span className="text-white text-2xl font-black font-mono block text-blue-400">12</span>
                <span className="uppercase tracking-wider font-bold text-slate-300 leading-tight">
                  {t.statTeamsDesc}
                </span>
              </div>
              <div className="h-7 w-px bg-blue-950 hidden sm:block" />
              <div className="flex items-center gap-3">
                <span className="text-white text-2xl font-black font-mono block text-amber-400">2</span>
                <span className="uppercase tracking-wider font-bold text-slate-300 leading-tight">
                  {t.statGroupsDesc}
                </span>
              </div>
              <div className="h-7 w-px bg-blue-950 hidden sm:block" />
              <div className="flex items-center gap-3">
                <span className="text-white text-2xl font-black font-mono block text-emerald-400">1</span>
                <span className="uppercase tracking-wider font-bold text-slate-300 leading-tight">
                  {t.statTrophyDesc}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Quality Nations League Trophy Centerpiece */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-md flex items-center justify-center">
              <TrophyArt size="hero" />

              {/* Monogram Brand Watermark in Lower Corner */}
              <div className="absolute -bottom-4 right-2 sm:right-4 bg-[#0A1432]/95 backdrop-blur-md border border-blue-900/80 px-4 py-3 rounded-xl shadow-2xl hidden sm:flex items-center gap-3">
                <BrandLogo size="sm" withMonogram />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down arrow link */}
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors cursor-pointer"
        onClick={onNavigateToGroups}
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold">{t.explore}</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </div>
    </section>
  );
};
