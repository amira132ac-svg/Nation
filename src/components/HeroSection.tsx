import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { TrophyArt } from './TrophyArt';
import { Language, translations } from '../data/translations';
import { PLAYED_RESULTS, REMAINING_FIXTURES, TOTAL_TEAMS } from '../data/tournamentData';

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
    <section className="relative min-h-[86vh] flex flex-col justify-between pt-24 pb-10 md:pt-28 md:pb-14 overflow-hidden border-b border-blue-950/80">
      {/* Subtle Architectural Stadium Illumination */}
      <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-blue-600/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-12 w-[420px] h-[420px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Official Federation Typography & Primary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-start space-y-6"
          >
            {/* Clean Unboxed Editorial Kicker (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider text-amber-400/95">
              <span>{t.organizer}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-sky-300">{t.statusInProgress}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400 font-mono tabular-nums">2026</span>
            </div>

            {/* Dominant Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-white tracking-tight leading-[1.04] text-balance">
              TM PROCLUBS{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">
                NATIONS LEAGUE
              </span>
            </h1>

            {/* Concrete Editorial Subtitle */}
            <p className="text-base sm:text-lg md:text-xl font-medium text-slate-300 max-w-xl leading-relaxed">
              {isRtl
                ? 'پرتال رسمی نتایج، جدول رده‌بندی و برنامه مسابقات لیگ ملت‌های TM PROCLUBS با حضور ۱۲ تیم ملی در دو گروه ۶ تیمی.'
                : 'Official match results, group standings, and tournament schedule of the TM PROCLUBS Nations League featuring 12 national teams.'}
            </p>

            {/* Primary & Secondary Action Controls */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onNavigateToResults}
                className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 text-sm font-black tracking-wide rounded-xl shadow-[0_8px_28px_rgba(245,158,11,0.3)] transition-all duration-200 flex items-center gap-2.5 cursor-pointer group whitespace-nowrap shrink-0"
              >
                <span>{isRtl ? 'مشاهده نتایج بازی‌ها' : t.navResults}</span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isRtl
                      ? 'group-hover:-translate-x-1 rotate-180'
                      : 'group-hover:translate-x-1'
                  }`}
                />
              </button>

              <button
                onClick={onNavigateToFixtures}
                className="px-6 py-3.5 bg-[#0A1432]/90 hover:bg-blue-950/90 text-slate-100 hover:text-white border border-blue-800/70 hover:border-blue-400 text-sm font-bold tracking-wide rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>
                  {isRtl
                    ? `بازی‌های باقی‌مانده (${REMAINING_FIXTURES.length})`
                    : `${t.navFixtures} (${REMAINING_FIXTURES.length})`}
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Official Championship Cup Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative py-2"
          >
            <div className="group relative w-full max-w-[400px] flex flex-col items-center justify-center transition-transform duration-500 ease-out hover:-translate-y-2.5">
              {/* Overhead Golden Stadium Spotlight Cone */}
              <div
                className="absolute -top-20 inset-x-4 h-80 pointer-events-none transition-opacity duration-500 opacity-75 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 0%, rgba(251, 191, 36, 0.32) 0%, rgba(245, 158, 11, 0.14) 42%, transparent 80%)',
                  filter: 'blur(28px)',
                }}
              />

              {/* Symmetrical 3D Championship Trophy */}
              <div className="relative z-10 w-full flex items-center justify-center">
                <TrophyArt size="hero" />
              </div>

              {/* Stage Floor Reflection Pool */}
              <div className="relative -mt-5 z-0 flex flex-col items-center justify-center w-full pointer-events-none">
                <div
                  className="w-60 h-10 rounded-[100%] transition-all duration-500 opacity-75 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.42) 0%, rgba(37, 99, 235, 0.18) 50%, transparent 78%)',
                    filter: 'blur(8px)',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Tournament Summary Strip Below Hero Split */}
        <div className="mt-10 pt-6 border-t border-blue-900/40 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <div className="text-xs font-medium text-slate-400">
              {isRtl ? 'تیم‌های حاضر در جام' : 'Participating Nations'}
            </div>
            <div className="mt-1 text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">
              {TOTAL_TEAMS}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {isRtl ? 'در ۲ گروه ۶ تیمی (A و B)' : 'Across Group A & Group B'}
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-slate-400">
              {isRtl ? 'بازی‌های انجام‌شده' : 'Completed Matches'}
            </div>
            <div className="mt-1 text-2xl sm:text-3xl font-black text-emerald-400 font-mono tabular-nums">
              {PLAYED_RESULTS.length} <span className="text-sm font-normal text-slate-500">/ 30</span>
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {isRtl ? '۱۵ بازی گروه A · ۱۵ بازی گروه B' : '15 Group A · 15 Group B'}
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-slate-400">
              {isRtl ? 'وضعیت گروه A' : 'Group A Status'}
            </div>
            <div className="mt-1 text-xl sm:text-2xl font-black text-amber-400">
              {isRtl ? 'تکمیل شده' : 'Completed'}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {isRtl ? 'صدرنشین: هلند (۱۱ امتیاز)' : 'Leader: Netherlands (11 Pts)'}
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-slate-400">
              {isRtl ? 'وضعیت گروه B' : 'Group B Status'}
            </div>
            <div className="mt-1 text-xl sm:text-2xl font-black text-sky-400">
              {isRtl ? 'تکمیل شده' : 'Completed'}
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              {isRtl ? 'صدرنشین: اسرائیل (۱۵ امتیاز)' : 'Leader: Israel (15 Pts)'}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Affordance */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={onNavigateToResults}
          aria-label="Scroll to results"
          className="text-slate-500 hover:text-amber-400 transition-colors cursor-pointer p-2"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
