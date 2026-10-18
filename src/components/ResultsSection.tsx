import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, ChevronUp, Trophy, Award } from 'lucide-react';
import { PLAYED_RESULTS, NationalTeam, MatchResult } from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { Flag } from './Flag';

interface ResultsSectionProps {
  lang: Language;
  onSelectTeam?: (team: NationalTeam) => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ lang, onSelectTeam }) => {
  const [selectedGroup, setSelectedGroup] = useState<'ALL' | 'A' | 'B'>('ALL');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const t = translations[lang];
  const isRtl = lang === 'fa';

  const groupAResults = PLAYED_RESULTS.filter((r) => r.group === 'A');
  const groupBResults = PLAYED_RESULTS.filter((r) => r.group === 'B');

  const showGroupA = selectedGroup === 'ALL' || selectedGroup === 'A';
  const showGroupB = selectedGroup === 'ALL' || selectedGroup === 'B';

  const INITIAL_COUNT = 2; // Show 2 matches per group initially

  const visibleGroupAResults = isExpanded ? groupAResults : groupAResults.slice(0, INITIAL_COUNT);
  const visibleGroupBResults = isExpanded ? groupBResults : groupBResults.slice(0, INITIAL_COUNT);

  const hiddenCountA = groupAResults.length - visibleGroupAResults.length;
  const hiddenCountB = groupBResults.length - visibleGroupBResults.length;
  const totalHidden = (showGroupA ? hiddenCountA : 0) + (showGroupB ? hiddenCountB : 0);

  const filterTabs = [
    { id: 'ALL', label: t.allResults },
    { id: 'A', label: t.groupA },
    { id: 'B', label: t.groupB },
  ] as const;

  const renderMatchCard = (res: MatchResult, isGroupA: boolean) => {
    const homeName = isRtl ? res.homeTeam.nameFa : res.homeTeam.name;
    const awayName = isRtl ? res.awayTeam.nameFa : res.awayTeam.name;
    const homeWon = res.homeScore > res.awayScore;
    const awayWon = res.awayScore > res.homeScore;
    const isDraw = res.homeScore === res.awayScore;

    const winnerName = homeWon ? homeName : awayWon ? awayName : null;

    return (
      <motion.div
        key={res.id}
        whileHover={{ y: -2 }}
        className="bg-[#0A1432]/95 border border-blue-900/60 hover:border-blue-600/70 rounded-2xl p-4 sm:p-5 transition-all shadow-xl flex flex-col justify-between"
      >
        {/* Top Status Bar: Group, Winner Badge, and FT indicator */}
        <div className="flex items-center justify-between text-xs pb-3 mb-3 border-b border-blue-950">
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-black font-mono tracking-wider uppercase ${
                isGroupA
                  ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30'
                  : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
              }`}
            >
              {isRtl ? `گروه ${res.group}` : `Group ${res.group}`}
            </span>

            {/* Clear Winner / Outcome Badge */}
            {winnerName ? (
              <span className="flex items-center gap-1 font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/25 text-[11px]">
                <Award className="w-3 h-3 text-emerald-400" />
                <span>
                  {isRtl ? `برد ${winnerName}` : `${winnerName} Won`}
                </span>
              </span>
            ) : (
              <span className="font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/25 text-[11px]">
                {isRtl ? 'نتیجه تساوی' : 'Draw'}
              </span>
            )}
          </div>

          <span className="font-bold text-slate-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-900 text-[11px] font-mono">
            {t.fullTime}
          </span>
        </div>

        {/* Clear Two-Row Team Scoreboard: Zero Confusion of Who Scored What */}
        <div className="space-y-2 py-1">
          {/* Home Team Row */}
          <div
            onClick={() => onSelectTeam && onSelectTeam(res.homeTeam)}
            className={`flex items-center justify-between p-2.5 rounded-xl transition-colors cursor-pointer ${
              homeWon
                ? 'bg-emerald-500/10 border border-emerald-500/35 hover:bg-emerald-500/15'
                : 'bg-blue-950/40 border border-blue-900/40 hover:bg-blue-900/30'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Flag country={res.homeTeam.flagCountry} size="md" className="shrink-0" />
              <div className="flex items-center gap-2 truncate">
                <span
                  className={`text-sm font-black uppercase truncate ${
                    homeWon ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {homeName}
                </span>
                {homeWon && (
                  <span className="px-1.5 py-0.5 text-[10px] font-extrabold rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shrink-0">
                    {t.winner}
                  </span>
                )}
              </div>
            </div>

            {/* Home Score Box */}
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-black font-mono text-base shrink-0 shadow-inner ${
                homeWon
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.35)]'
                  : isDraw
                  ? 'bg-blue-900 text-blue-100 border border-blue-700/60'
                  : 'bg-blue-950 text-slate-400 border border-blue-900'
              }`}
            >
              {res.homeScore}
            </div>
          </div>

          {/* Away Team Row */}
          <div
            onClick={() => onSelectTeam && onSelectTeam(res.awayTeam)}
            className={`flex items-center justify-between p-2.5 rounded-xl transition-colors cursor-pointer ${
              awayWon
                ? 'bg-emerald-500/10 border border-emerald-500/35 hover:bg-emerald-500/15'
                : 'bg-blue-950/40 border border-blue-900/40 hover:bg-blue-900/30'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Flag country={res.awayTeam.flagCountry} size="md" className="shrink-0" />
              <div className="flex items-center gap-2 truncate">
                <span
                  className={`text-sm font-black uppercase truncate ${
                    awayWon ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {awayName}
                </span>
                {awayWon && (
                  <span className="px-1.5 py-0.5 text-[10px] font-extrabold rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shrink-0">
                    {t.winner}
                  </span>
                )}
              </div>
            </div>

            {/* Away Score Box */}
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-black font-mono text-base shrink-0 shadow-inner ${
                awayWon
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_12px_rgba(16,185,129,0.35)]'
                  : isDraw
                  ? 'bg-blue-900 text-blue-100 border border-blue-700/60'
                  : 'bg-blue-950 text-slate-400 border border-blue-900'
              }`}
            >
              {res.awayScore}
            </div>
          </div>
        </div>

        {/* Goal Breakdown Strip: Explicit text stating who scored how many goals */}
        <div className="mt-3 pt-2.5 border-t border-blue-950/80 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-slate-300 min-w-0">
            <span className="text-sm shrink-0">⚽</span>
            <span className="font-semibold truncate text-[11px] sm:text-xs text-slate-200">
              {isRtl ? res.goalSummaryFa : res.goalSummaryEn}
            </span>
          </div>

          <span className="text-[10px] font-mono text-slate-500 shrink-0">
            {res.homeScore + res.awayScore} {isRtl ? 'گل کل' : 'Total Goals'}
          </span>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="results"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-12 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-blue-900/40">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              {t.resultsTitle}
            </h2>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isRtl ? 'نتایج رسمی ثبت‌شده مسابقات با تفکیک دقیق گل‌ها' : 'Official Registered Match Results with Goal Breakdown'}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 font-mono">
                {PLAYED_RESULTS.length} {isRtl ? 'بازی انجام‌شده' : 'Matches Completed'}
              </span>
            </div>
          </div>

          {/* Filter controls with smooth motion */}
          <div className="relative inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl shadow-lg self-start sm:self-auto">
            {filterTabs.map((tab) => {
              const isActive = selectedGroup === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedGroup(tab.id)}
                  className={`relative px-4 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer select-none z-10 ${
                    isActive
                      ? tab.id === 'A'
                        ? 'text-slate-950 font-black'
                        : 'text-white font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="resultsFilterPill"
                      className={`absolute inset-0 rounded-lg shadow-md -z-10 ${
                        tab.id === 'A' ? 'bg-yellow-400' : 'bg-blue-600'
                      }`}
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Grids */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {/* Group A Results */}
            {showGroupA && (
              <motion.div
                key="group-a-results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5"
              >
                <div className="flex items-center justify-between pb-2 border-b border-yellow-500/30">
                  <div className="flex items-center gap-2.5">
                    <div className="px-3.5 py-0.5 bg-[#FFCC00] text-slate-950 font-black text-xs uppercase tracking-wider rounded shadow-[0_0_12px_rgba(255,204,0,0.4)]">
                      {t.groupA}
                    </div>
                    <span className="text-xs text-slate-400 font-mono font-semibold">
                      {isExpanded
                        ? `${groupAResults.length} ${isRtl ? 'بازی انجام شد' : 'Matches Played'}`
                        : `${visibleGroupAResults.length} ${isRtl ? 'از ۴ بازی' : 'of 4 Matches'}`}
                    </span>
                  </div>

                  {!isExpanded && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-xs font-bold text-yellow-400 hover:text-yellow-300 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>{isRtl ? `+${hiddenCountA} بازی دیگر` : `+${hiddenCountA} more`}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {visibleGroupAResults.map((res) => renderMatchCard(res, true))}
                </div>
              </motion.div>
            )}

            {/* Group B Results */}
            {showGroupB && (
              <motion.div
                key="group-b-results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5"
              >
                <div className="flex items-center justify-between pb-2 border-b border-blue-500/30">
                  <div className="flex items-center gap-2.5">
                    <div className="px-3.5 py-0.5 bg-[#0052FF] text-white font-black text-xs uppercase tracking-wider rounded shadow-[0_0_12px_rgba(0,82,255,0.4)]">
                      {t.groupB}
                    </div>
                    <span className="text-xs text-slate-400 font-mono font-semibold">
                      {isExpanded
                        ? `${groupBResults.length} ${isRtl ? 'بازی انجام شد' : 'Matches Played'}`
                        : `${visibleGroupBResults.length} ${isRtl ? 'از ۴ بازی' : 'of 4 Matches'}`}
                    </span>
                  </div>

                  {!isExpanded && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>{isRtl ? `+${hiddenCountB} بازی دیگر` : `+${hiddenCountB} more`}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {visibleGroupBResults.map((res) => renderMatchCard(res, false))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Global Expand / Collapse Control */}
        <div className="mt-8 flex justify-center">
          {!isExpanded ? (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsExpanded(true)}
              className="px-6 py-3 bg-[#0A1432] hover:bg-blue-900/50 text-white font-bold text-sm rounded-xl border border-blue-700/60 hover:border-blue-400 shadow-lg flex items-center gap-2.5 cursor-pointer transition-all"
            >
              <span>{t.showAllResults}</span>
              {totalHidden > 0 && (
                <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-600/40 text-blue-300 border border-blue-500/40">
                  +{totalHidden}
                </span>
              )}
              <ChevronDown className="w-4 h-4 text-blue-400" />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setIsExpanded(false);
                const el = document.getElementById('results');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-[#0A1432]/80 hover:bg-blue-950 text-slate-300 hover:text-white font-bold text-sm rounded-xl border border-blue-900 hover:border-slate-700 flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>{t.collapseResults}</span>
              <ChevronUp className="w-4 h-4 text-slate-400" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.section>
  );
};
