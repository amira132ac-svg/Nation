import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown, Flame, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { TrophyArt } from './TrophyArt';
import { Language, translations } from '../data/translations';

interface HeroSectionProps {
  lang: Language;
  onNavigateToResults: () => void;
  onNavigateToFixtures: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onNavigateToResults,
  onNavigateToFixtures,
}) => {
  const t = translations[lang];
  const isRtl = lang === 'fa';

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-24 pb-12 md:py-28 overflow-hidden">
      {/* Stadium Floodlight Cones & Radiant Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Dynamic Opening Clash Ticker Bar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-full bg-blue-950/70 border border-blue-800/60 backdrop-blur-md shadow-lg"
        >
          <div className="flex items-center gap-1.5 text-xs font-black uppercase text-amber-400">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{isRtl ? 'نتایج زنده دور اول' : 'Round 1 Results'}</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <div className="text-xs font-bold text-slate-200 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span>{isRtl ? 'آرژانتین' : 'ARG'}</span>
              <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-mono font-bold text-[11px]" dir="ltr">
                4 - 0
              </span>
              <span>{isRtl ? 'فرانسه' : 'FRA'}</span>
            </div>
            <span className="text-slate-600">·</span>
            <div className="flex items-center gap-1.5">
              <span>{isRtl ? 'ایتالیا' : 'ITA'}</span>
              <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-mono font-bold text-[11px]" dir="ltr">
                1 - 0
              </span>
              <span>{isRtl ? 'اسپانیا' : 'ESP'}</span>
            </div>
            <span className="text-slate-600">·</span>
            <div className="flex items-center gap-1.5">
              <span>{isRtl ? 'هلند' : 'NED'}</span>
              <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-mono font-bold text-[11px]" dir="ltr">
                2 - 1
              </span>
              <span>{isRtl ? 'کلمبیا' : 'COL'}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-5"
          >
            {/* Status indicator: IN PROGRESS */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-slate-300 bg-[#0A1432]/90 px-3.5 py-1.5 rounded-lg border border-blue-900/60 shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse" />
              <span className="text-emerald-300 font-extrabold">{t.statusInProgress}</span>
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

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onNavigateToResults}
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-extrabold uppercase tracking-wider rounded-xl shadow-[0_8px_25px_rgba(37,99,235,0.45)] transition-all flex items-center gap-2 cursor-pointer group hover:scale-[1.02]"
              >
                <span>{t.navResults}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
              </button>

              <button
                onClick={onNavigateToFixtures}
                className="px-6 py-3.5 bg-[#0A1432] hover:bg-blue-900/50 text-slate-100 hover:text-white border border-blue-800/80 hover:border-blue-400 text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md"
              >
                {t.navFixtures}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Nations League Trophy Centerpiece with Golden Spotlight & Gentle Float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative pt-4 pb-2"
          >
            {/* Interactive Trophy Display Card with Tailwind hover-float & spotlight glow */}
            <div className="group relative w-full max-w-md flex flex-col items-center justify-center cursor-pointer transition-transform duration-700 ease-out hover:-translate-y-3.5 hover:scale-[1.02]">
              
              {/* --- GOLDEN SPOTLIGHT GLOW EFFECTS --- */}
              {/* 1. Dramatic overhead spotlight cone beaming down onto the trophy */}
              <div 
                className="absolute -top-24 inset-x-2 h-96 pointer-events-none transition-all duration-700 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                style={{
                  background: 'radial-gradient(ellipse at 50% 0%, rgba(251, 191, 36, 0.35) 0%, rgba(245, 158, 11, 0.16) 40%, rgba(0, 82, 255, 0.05) 65%, transparent 85%)',
                  filter: 'blur(32px)',
                  transformOrigin: 'top center',
                }}
              />

              {/* 2. Soft golden halo directly behind trophy crown & spirals */}
              <div 
                className="absolute top-1/4 w-80 h-80 rounded-full pointer-events-none transition-all duration-700 opacity-75 group-hover:opacity-100 group-hover:scale-110"
                style={{
                  background: 'radial-gradient(circle, rgba(252, 211, 77, 0.3) 0%, rgba(245, 158, 11, 0.18) 38%, rgba(37, 99, 235, 0.08) 65%, transparent 80%)',
                  filter: 'blur(48px)',
                }}
              />

              {/* 3. Deep golden ambient rim light */}
              <div className="absolute inset-0 bg-amber-500/15 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />

              {/* 4. Trophy Specular Light Sparks / Twinkles on Hover */}
              <div className="absolute top-12 left-12 pointer-events-none transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110">
                <Sparkles className="w-5 h-5 text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.9)] animate-pulse" />
              </div>
              <div className="absolute top-28 right-14 pointer-events-none transition-all duration-700 delay-100 opacity-0 group-hover:opacity-100 group-hover:scale-125">
                <Sparkles className="w-4 h-4 text-yellow-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] animate-pulse" />
              </div>

              {/* 5. Realistic Trophy Art Render */}
              <div className="relative z-10 w-full flex items-center justify-center drop-shadow-[0_20px_45px_rgba(0,10,40,0.85)]">
                <TrophyArt size="hero" className="transition-transform duration-700 ease-out group-hover:rotate-[-0.5deg]" />
              </div>

              {/* 6. Pedestal Stage Spotlight & Ground Reflection Disc */}
              <div className="relative -mt-6 z-0 flex flex-col items-center justify-center w-full pointer-events-none">
                {/* Golden spotlight pool on stage floor */}
                <div 
                  className="w-64 h-12 rounded-[100%] transition-all duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-95"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.5) 0%, rgba(217, 119, 6, 0.25) 45%, rgba(15, 23, 42, 0) 75%)',
                    filter: 'blur(8px)',
                  }}
                />
                {/* Concentric high-gloss chrome stage rim */}
                <div className="w-52 h-4 -mt-5 rounded-[100%] border border-amber-400/40 bg-gradient-to-r from-transparent via-amber-300/25 to-transparent blur-[0.5px] transition-all duration-500 group-hover:border-amber-300/70" />
                {/* Ambient ground shadow beneath pedestal that diffuses on hover */}
                <div className="w-72 h-8 -mt-2 bg-black/60 rounded-[100%] blur-md transition-all duration-500 group-hover:scale-90 group-hover:opacity-40" />
              </div>

              {/* Monogram Brand Watermark in Lower Corner with Gold Rim Accent */}
              <div className="absolute -bottom-4 right-2 sm:right-4 z-20 bg-[#081028]/95 backdrop-blur-md border border-amber-400/30 group-hover:border-amber-400/60 px-4 py-2.5 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] hidden sm:flex items-center gap-3 transition-all duration-500 group-hover:shadow-[0_10px_30px_rgba(245,158,11,0.2)]">
                <BrandLogo size="sm" withMonogram />
                <div className="flex flex-col text-left border-l border-amber-500/20 pl-2.5">
                  <span className="text-[10px] font-black tracking-wider text-amber-400 uppercase">OFFICIAL CUP</span>
                  <span className="text-[9px] font-bold text-slate-400">NATIONS LEAGUE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Down arrow link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors cursor-pointer"
        onClick={onNavigateToResults}
      >
        <ArrowDown className="w-4 h-4 animate-bounce text-blue-400" />
      </motion.div>
    </section>
  );
};
