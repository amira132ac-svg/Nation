import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ChevronRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import { QUARTER_FINALS, SEMI_FINALS, GRAND_FINAL_MATCH, KnockoutSeries, NationalTeam } from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { Flag } from './Flag';

interface KnockoutBracketSectionProps {
  lang: Language;
  onSelectTeam?: (team: NationalTeam) => void;
  onNavigateToPoll?: () => void;
}

export const KnockoutBracketSection: React.FC<KnockoutBracketSectionProps> = ({
  lang,
  onSelectTeam,
  onNavigateToPoll,
}) => {
  const t = translations[lang];
  const isRtl = lang === 'fa';
  const [activeTab, setActiveTab] = useState<'ALL' | 'QF' | 'SF' | 'FINAL'>('ALL');

  const renderSeriesCard = (series: KnockoutSeries) => {
    const isTeam1Winner = series.winnerTeamId === series.team1.id;
    const isTeam2Winner = series.winnerTeamId === series.team2.id;
    const team1Name = isRtl ? series.team1.nameFa : series.team1.name;
    const team2Name = isRtl ? series.team2.nameFa : series.team2.name;

    return (
      <div
        key={series.id}
        className="bg-[#0A1432]/95 border border-blue-900/60 hover:border-blue-500/60 rounded-2xl p-4 sm:p-5 transition-all shadow-lg flex flex-col justify-between"
      >
        {/* Header Metadata */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-950/80 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-400">
              {isRtl ? series.roundTitleFa : series.roundTitleEn}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400 font-mono text-[11px]">
              {isRtl ? series.formatFa : series.formatEn}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isRtl ? 'پایان سری' : 'Finished'}</span>
          </div>
        </div>

        {/* Series Score Summary */}
        <div className="space-y-2">
          {/* Team 1 Row */}
          <div
            onClick={() => onSelectTeam && onSelectTeam(series.team1)}
            className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors ${
              isTeam1Winner
                ? 'bg-emerald-500/15 border border-emerald-500/40'
                : 'bg-blue-950/40 border border-blue-900/40'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Flag country={series.team1.flagCountry} size="md" className="shrink-0 rounded shadow" />
              <div className="flex items-center gap-2 min-w-0">
                <span className={`text-sm font-black truncate ${isTeam1Winner ? 'text-white' : 'text-slate-300'}`}>
                  {team1Name}
                </span>
                {isTeam1Winner && (
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 text-[10px] font-black shrink-0">
                    {t.qualifiedBadge}
                  </span>
                )}
              </div>
            </div>

            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-black font-mono text-sm shrink-0 ${
                isTeam1Winner ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-blue-950 text-slate-400'
              }`}
            >
              {series.team1SeriesScore}
            </div>
          </div>

          {/* Team 2 Row */}
          <div
            onClick={() => onSelectTeam && onSelectTeam(series.team2)}
            className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors ${
              isTeam2Winner
                ? 'bg-emerald-500/15 border border-emerald-500/40'
                : 'bg-blue-950/40 border border-blue-900/40'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Flag country={series.team2.flagCountry} size="md" className="shrink-0 rounded shadow" />
              <div className="flex items-center gap-2 min-w-0">
                <span className={`text-sm font-black truncate ${isTeam2Winner ? 'text-white' : 'text-slate-300'}`}>
                  {team2Name}
                </span>
                {isTeam2Winner && (
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 text-[10px] font-black shrink-0">
                    {t.qualifiedBadge}
                  </span>
                )}
              </div>
            </div>

            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center font-black font-mono text-sm shrink-0 ${
                isTeam2Winner ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-blue-950 text-slate-400'
              }`}
            >
              {series.team2SeriesScore}
            </div>
          </div>
        </div>

        {/* Detailed Individual Matches Breakdown in Series */}
        <div className="mt-3.5 pt-3 border-t border-blue-950/80 space-y-1.5">
          <div className="text-[11px] font-mono text-slate-400 mb-1 flex items-center justify-between">
            <span>{isRtl ? 'ریز نتایج مسابقات سری:' : 'Series Match Log:'}</span>
            <span className="text-emerald-400 font-bold">
              {isRtl ? series.summaryFa : series.summaryEn}
            </span>
          </div>

          {series.matches.map((sub, idx) => (
            <div
              key={idx}
              className="text-xs bg-blue-950/70 px-2.5 py-1.5 rounded-lg border border-blue-900/40 flex items-center justify-between text-slate-300"
            >
              <span className="font-medium text-slate-200">
                {isRtl ? sub.noteFa : sub.noteEn}
              </span>
              {sub.isTechnical && (
                <span className="text-[10px] text-amber-400 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded">
                  {isRtl ? 'نتیجه فنی' : 'Technical'}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <motion.section
      id="knockout"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-12 md:py-20 border-b border-blue-950/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-blue-900/40">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black text-amber-400 tracking-wider uppercase mb-1">
              <Trophy className="w-3.5 h-3.5" />
              <span>{t.knockoutBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              {t.knockoutTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {isRtl
                ? 'نتایج کامل مراحل یک‌چهارم نهایی و نیمه‌نهایی به‌همراه فینالیست‌های مشخص‌شده جام'
                : 'Official Best of 3 knockout results and confirmed Grand Final showdown.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <div className="inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl">
              {[
                { id: 'ALL', label: isRtl ? 'همه مراحل' : 'All Rounds' },
                { id: 'QF', label: isRtl ? 'یک‌چهارم' : 'Quarter-Finals' },
                { id: 'SF', label: isRtl ? 'نیمه‌نهایی' : 'Semi-Finals' },
                { id: 'FINAL', label: isRtl ? 'فینال' : 'Grand Final' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 🏆 GRAND FINAL SPOTLIGHT SHOWCASE */}
        {(activeTab === 'ALL' || activeTab === 'FINAL') && (
          <div className="mb-12">
            <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/40 via-amber-950/30 to-blue-900/40 border-2 border-amber-400/50 p-6 sm:p-8 overflow-hidden shadow-[0_12px_40px_rgba(245,158,11,0.2)]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-center md:text-start">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-lg">
                    <Trophy className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs font-black text-amber-400 uppercase tracking-widest">
                      {isRtl ? 'فینال بزرگ مسابقات' : 'TM PROCLUB GRAND FINAL'}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                      🇮🇹 {isRtl ? 'ایتالیا' : 'Italy'} <span className="text-amber-400">VS</span> 🇧🇷 {isRtl ? 'برزیل' : 'Brazil'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      {isRtl ? GRAND_FINAL_MATCH.statusFa : GRAND_FINAL_MATCH.statusEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={onNavigateToPoll}
                    className="px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-sm rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>{isRtl ? 'مشاهده بازی فینال بزرگ' : 'View Grand Final Match'}</span>
                    <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SEMI-FINALS (Best of 3) */}
        {(activeTab === 'ALL' || activeTab === 'SF') && (
          <div className="mb-12">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-blue-900/60">
              <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>{t.semiFinalsTitle}</span>
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                {isRtl ? '۲ مسابقه · هر دو سری کامل شد' : '2 Series · Both Completed'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {SEMI_FINALS.map((series) => renderSeriesCard(series))}
            </div>
          </div>
        )}

        {/* QUARTER-FINALS (Best of 3) */}
        {(activeTab === 'ALL' || activeTab === 'QF') && (
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-blue-900/60">
              <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <span>{t.quarterFinalsTitle}</span>
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                {isRtl ? '۴ مسابقه · هر ۴ سری کامل شد' : '4 Series · All Completed'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {QUARTER_FINALS.map((series) => renderSeriesCard(series))}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};
