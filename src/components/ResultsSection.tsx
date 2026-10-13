import React from 'react';
import { Trophy } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface ResultsSectionProps {
  lang: Language;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="results" className="relative py-16 md:py-24 bg-[#060D20]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-bold mb-2">
            {t.resultsBadge}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            {t.resultsTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {t.resultsSubtitle}
          </p>
        </div>

        {/* Polished Empty State as explicitly specified */}
        <div className="max-w-2xl mx-auto bg-[#0A1432]/95 border border-blue-900/50 rounded-2xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

          {/* Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-6 shadow-inner">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
          </div>

          {/* Required Exact Copy */}
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase mb-3">
            {t.noResultsTitle}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            {t.noResultsDesc}
          </p>

          {/* Result Engine Pipeline Info */}
          <div className="mt-8 pt-6 border-t border-blue-950 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400 text-center">
            <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-900/40">
              <span className="text-slate-200 font-bold block mb-0.5">{t.resCol1}</span>
              <span>{t.resCol1Sub}</span>
            </div>
            <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-900/40">
              <span className="text-slate-200 font-bold block mb-0.5">{t.resCol2}</span>
              <span>{t.resCol2Sub}</span>
            </div>
            <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-900/40">
              <span className="text-slate-200 font-bold block mb-0.5">{t.resCol3}</span>
              <span>{t.resCol3Sub}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
