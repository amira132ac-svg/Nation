import React from 'react';
import { ShieldCheck, Trophy, Layers, Clock, Sparkles } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface OverviewSectionProps {
  lang: Language;
  onNavigateToGroups: () => void;
  onNavigateToFixtures: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  lang,
  onNavigateToGroups,
  onNavigateToFixtures,
}) => {
  const t = translations[lang];

  return (
    <section id="overview" className="relative py-16 md:py-20 border-b border-blue-950/60 bg-[#070D1E]/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-bold mb-2">
            {t.overviewBadge}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
            {t.overviewTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            {t.overviewSubtitle}
          </p>
        </div>

        {/* 4 Feature Architecture Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Item 1 */}
          <div className="bg-[#0A1432]/90 border border-blue-900/40 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/60 transition-all hover:-translate-y-1 shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 mb-4 border border-blue-800/40 shadow-inner">
                <Layers className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-wide mb-1">
                {t.card1Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.card1Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-950/80 text-[11px] font-mono font-bold text-blue-400">
              {t.card1Foot}
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-[#0A1432]/90 border border-blue-900/40 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/60 transition-all hover:-translate-y-1 shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 mb-4 border border-blue-800/40 shadow-inner">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-wide mb-1">
                {t.card2Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.card2Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-950/80 text-[11px] font-mono font-bold text-blue-400">
              {t.card2Foot}
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-[#0A1432]/90 border border-blue-900/40 rounded-xl p-6 flex flex-col justify-between hover:border-yellow-500/60 transition-all hover:-translate-y-1 shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-4 border border-yellow-500/30 shadow-inner">
                <Trophy className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-wide mb-1">
                {t.card3Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.card3Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-950/80 text-[11px] font-mono font-bold text-yellow-400">
              {t.card3Foot}
            </div>
          </div>

          {/* Item 4 */}
          <div className="bg-[#0A1432]/90 border border-blue-900/40 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/60 transition-all hover:-translate-y-1 shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 mb-4 border border-blue-800/40 shadow-inner">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-wide mb-1">
                {t.card4Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.card4Desc}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-950/80 text-[11px] font-mono font-bold text-blue-400">
              {t.card4Foot}
            </div>
          </div>
        </div>

        {/* Tournament Phase Progress Bar */}
        <div className="mt-12 bg-[#0A1432]/80 border border-blue-900/50 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-extrabold text-white uppercase tracking-wider">
              {t.lifecycleTitle}
            </span>
            <span className="text-[11px] font-mono text-amber-400 font-bold">
              {t.lifecycleStage}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            {/* Step 1: Completed */}
            <div className="p-3 bg-blue-950/80 border border-blue-600/70 rounded-xl flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">✓</span>
              <div>
                <span className="text-white font-bold block">{t.stage1}</span>
                <span className="text-[10px] text-blue-300 font-medium">{t.stage1Sub}</span>
              </div>
            </div>

            {/* Step 2: Completed / Pairings Announced */}
            <div className="p-3 bg-blue-950/80 border border-blue-600/70 rounded-xl flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">✓</span>
              <div>
                <span className="text-white font-bold block">{t.stage2}</span>
                <span className="text-[10px] text-blue-300 font-medium">{t.stage2Sub}</span>
              </div>
            </div>

            {/* Step 3: Upcoming / Kickoff */}
            <div className="p-3 bg-amber-950/40 border border-amber-600/50 rounded-xl flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-bold animate-pulse">3</span>
              <div>
                <span className="text-amber-300 font-bold block">{t.stage3}</span>
                <span className="text-[10px] text-amber-200/90 font-medium">{t.stage3Sub}</span>
              </div>
            </div>

            {/* Step 4: Final */}
            <div className="p-3 bg-[#060D20] border border-blue-950 rounded-xl flex items-center gap-3 opacity-60">
              <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-[10px] font-bold">4</span>
              <div>
                <span className="text-slate-300 font-bold block">{t.stage4}</span>
                <span className="text-[10px] text-slate-500 font-medium">{t.stage4Sub}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
