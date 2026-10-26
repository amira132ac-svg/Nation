import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PLAYED_RESULTS, NationalTeam, MatchResult } from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { Flag } from './Flag';

interface ResultsSectionProps {
  lang: Language;
  onSelectTeam?: (team: NationalTeam) => void;
}

const INITIAL_COUNT = 4; // Show 4 matches per group initially

export const ResultsSection: React.FC<ResultsSectionProps> = ({ lang, onSelectTeam }) => {
  const [selectedGroup, setSelectedGroup] = useState<'ALL' | 'A' | 'B'>('ALL');
  const [expandedA, setExpandedA] = useState<boolean>(false);
  const [expandedB, setExpandedB] = useState<boolean>(false);

  const t = translations[lang];
  const isRtl = lang === 'fa';

  const groupAResults = PLAYED_RESULTS.filter((r) => r.group === 'A');
  const groupBResults = PLAYED_RESULTS.filter((r) => r.group === 'B');

  const showGroupA = selectedGroup === 'ALL' || selectedGroup === 'A';
  const showGroupB = selectedGroup === 'ALL' || selectedGroup === 'B';

  const initialAResults = groupAResults.slice(0, INITIAL_COUNT);
  const remainingAResults = groupAResults.slice(INITIAL_COUNT);

  const initialBResults = groupBResults.slice(0, INITIAL_COUNT);
  const remainingBResults = groupBResults.slice(INITIAL_COUNT);

  const hiddenCountA = expandedA ? 0 : remainingAResults.length;
  const hiddenCountB = expandedB ? 0 : remainingBResults.length;
  const totalHiddenInActiveView =
    (showGroupA ? hiddenCountA : 0) + (showGroupB ? hiddenCountB : 0);

  const isAllActiveExpanded =
    (selectedGroup === 'ALL' && expandedA && expandedB) ||
    (selectedGroup === 'A' && expandedA) ||
    (selectedGroup === 'B' && expandedB);

  const handleToggleAll = () => {
    if (isAllActiveExpanded) {
      if (selectedGroup === 'ALL') {
        setExpandedA(false);
        setExpandedB(false);
      } else if (selectedGroup === 'A') {
        setExpandedA(false);
      } else {
        setExpandedB(false);
      }
    } else {
      if (selectedGroup === 'ALL') {
        setExpandedA(true);
        setExpandedB(true);
      } else if (selectedGroup === 'A') {
        setExpandedA(true);
      } else {
        setExpandedB(true);
      }
    }
  };


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
      <div
        key={res.id}
        className="bg-[#0A1432]/95 border border-blue-900/50 hover:border-blue-500/60 rounded-2xl p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between"
      >
        {/* Top Unboxed Metadata Row (Zero-Pill Discipline) */}
        <div className="flex items-center justify-between text-xs pb-3 mb-3 border-b border-blue-950/80 text-slate-400">
          <div className="flex items-center gap-2 min-w-0 truncate">
            {res.matchNumber && (
              <>
                <span className="font-mono tabular-nums font-bold text-slate-500">
                  #{res.matchNumber}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
              </>
            )}
            <span className={isGroupA ? 'text-amber-400 font-bold' : 'text-sky-400 font-bold'}>
              {isRtl ? `گروه ${res.group}` : `Group ${res.group}`}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            {winnerName ? (
              <span className="font-semibold text-emerald-400 truncate">
                {isRtl ? `برد ${winnerName}` : `${winnerName} Won`}
              </span>
            ) : (
              <span className="font-semibold text-slate-300">
                {isRtl ? 'تساوی' : 'Draw'}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 shrink-0 font-mono text-[11px] text-slate-400">
            {res.isTechnical && (
              <>
                <span className="text-amber-400 font-sans font-bold">
                  {isRtl ? 'فنی' : 'Tech.'}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
              </>
            )}
            <span>{t.fullTime}</span>
          </div>
        </div>

        {/* Two-Row Official Scoreboard */}
        <div className="space-y-2 py-0.5">
          {/* Home Team Row */}
          <div
            onClick={() => onSelectTeam && onSelectTeam(res.homeTeam)}
            className={`flex items-center justify-between p-2.5 rounded-xl transition-colors cursor-pointer ${
              homeWon
                ? 'bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/15'
                : 'bg-blue-950/40 border border-blue-900/30 hover:bg-blue-900/30'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Flag country={res.homeTeam.flagCountry} size="md" className="shrink-0" />
              <span
                className={`text-sm font-black truncate ${
                  homeWon ? 'text-white' : 'text-slate-300'
                }`}
              >
                {homeName}
              </span>
            </div>

            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-black font-mono tabular-nums text-base shrink-0 ${
                homeWon
                  ? 'bg-emerald-500 text-slate-950'
                  : isDraw
                  ? 'bg-blue-900/80 text-blue-100'
                  : 'bg-blue-950 text-slate-400'
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
                ? 'bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/15'
                : 'bg-blue-950/40 border border-blue-900/30 hover:bg-blue-900/30'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Flag country={res.awayTeam.flagCountry} size="md" className="shrink-0" />
              <span
                className={`text-sm font-black truncate ${
                  awayWon ? 'text-white' : 'text-slate-300'
                }`}
              >
                {awayName}
              </span>
            </div>

            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-black font-mono tabular-nums text-base shrink-0 ${
                awayWon
                  ? 'bg-emerald-500 text-slate-950'
                  : isDraw
                  ? 'bg-blue-900/80 text-blue-100'
                  : 'bg-blue-950 text-slate-400'
              }`}
            >
              {res.awayScore}
            </div>
          </div>
        </div>

        {/* Clean Summary Footer Strip */}
        <div className="mt-3 pt-2.5 border-t border-blue-950/70 flex items-center justify-between gap-2 text-xs text-slate-400">
          <span className="font-medium truncate text-slate-300">
            {isRtl ? res.goalSummaryFa : res.goalSummaryEn}
          </span>
          <span className="text-[11px] font-mono tabular-nums text-slate-500 shrink-0">
            {res.isTechnical
              ? isRtl
                ? 'نتیجه فنی ۳-۰'
                : 'Technical 3-0'
              : `${res.homeScore + res.awayScore} ${isRtl ? 'گل' : 'Goals'}`}
          </span>
        </div>
      </div>
    );
  };

  return (
    <motion.section
      id="results"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-12 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-blue-900/40">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              {t.resultsTitle}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">
                {isRtl ? 'ثبت رسمی فدراسیون TM PROCLUBS' : 'Official TM PROCLUBS Match Registry'}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">
                {PLAYED_RESULTS.length} {isRtl ? 'بازی انجام‌شده' : 'Matches Completed'}
              </span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto">
            <div className="relative inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl">
              {filterTabs.map((tab) => {
                const isActive = selectedGroup === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedGroup(tab.id)}
                    className={`relative px-4 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer select-none z-10 whitespace-nowrap shrink-0 ${
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
                        className={`absolute inset-0 rounded-lg -z-10 ${
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
        </div>

        {/* Results Grids */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {/* Group A Results (13 Matches) */}
            {showGroupA && (
              <motion.div
                key="group-a-results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="space-y-3.5"
              >
                <div className="flex items-center justify-between pb-2.5 border-b border-yellow-500/30">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-sm bg-[#FFCC00]" />
                    <h3 className="text-base font-black text-white tracking-wide">
                      {t.groupA}
                    </h3>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs text-emerald-400 font-bold">
                      {isRtl ? 'تکمیل شده' : 'Completed'}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs text-slate-400 font-mono tabular-nums">
                      {expandedA
                        ? `${groupAResults.length} ${isRtl ? 'بازی انجام شد' : 'Matches Played'}`
                        : `${initialAResults.length} ${isRtl ? `از ${groupAResults.length} بازی` : `of ${groupAResults.length} Matches`}`}
                    </span>
                  </div>

                  {remainingAResults.length > 0 && (
                    <button
                      onClick={() => setExpandedA(!expandedA)}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 px-3 py-1 rounded-lg flex items-center gap-1.5 cursor-pointer transition-all whitespace-nowrap shrink-0"
                    >
                      <span>
                        {expandedA
                          ? isRtl
                            ? 'نمایش کمتر'
                            : t.showLess
                          : isRtl
                          ? `+${remainingAResults.length} بازی دیگر`
                          : `+${remainingAResults.length} more`}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          expandedA ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Permanent 4 initial results */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {initialAResults.map((res) => renderMatchCard(res, true))}
                </div>

                {/* Smooth Accordion for remaining Group A results */}
                <AnimatePresence initial={false}>
                  {expandedA && (
                    <motion.div
                      key="group-a-more-results"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: 'auto',
                        transition: {
                          height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25, delay: 0.04 },
                        },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3.5">
                        {remainingAResults.map((res, idx) => (
                          <motion.div
                            key={res.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{
                              duration: 0.24,
                              delay: idx * 0.03,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            {renderMatchCard(res, true)}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* Group B Results (15 Matches — Completed) */}
            {showGroupB && (
              <motion.div
                key="group-b-results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="space-y-3.5"
              >
                <div className="flex items-center justify-between pb-2.5 border-b border-blue-500/30">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-sm bg-[#0052FF]" />
                    <h3 className="text-base font-black text-white tracking-wide">
                      {t.groupB}
                    </h3>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs text-emerald-400 font-bold">
                      {isRtl ? 'تکمیل شده' : 'Completed'}
                    </span>
                    <span className="text-slate-600">·</span>
                    <span className="text-xs text-slate-400 font-mono tabular-nums">
                      {expandedB
                        ? `${groupBResults.length} ${isRtl ? 'بازی انجام شد' : 'Matches Played'}`
                        : `${initialBResults.length} ${isRtl ? `از ${groupBResults.length} بازی` : `of ${groupBResults.length} Matches`}`}
                    </span>
                  </div>

                  {remainingBResults.length > 0 && (
                    <button
                      onClick={() => setExpandedB(!expandedB)}
                      className="text-xs font-bold text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 px-3 py-1 rounded-lg flex items-center gap-1.5 cursor-pointer transition-all whitespace-nowrap shrink-0"
                    >
                      <span>
                        {expandedB
                          ? isRtl
                            ? 'نمایش کمتر'
                            : t.showLess
                          : isRtl
                          ? `+${remainingBResults.length} بازی دیگر`
                          : `+${remainingBResults.length} more`}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          expandedB ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Permanent 4 initial results */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {initialBResults.map((res) => renderMatchCard(res, false))}
                </div>

                {/* Smooth Accordion for remaining Group B results */}
                <AnimatePresence initial={false}>
                  {expandedB && (
                    <motion.div
                      key="group-b-more-results"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: 'auto',
                        transition: {
                          height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.25, delay: 0.04 },
                        },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: {
                          height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3.5">
                        {remainingBResults.map((res, idx) => (
                          <motion.div
                            key={res.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{
                              duration: 0.24,
                              delay: idx * 0.03,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            {renderMatchCard(res, false)}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Global Expand / Collapse Control */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleToggleAll}
            className={`px-6 py-3 font-bold text-xs rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all whitespace-nowrap shrink-0 ${
              isAllActiveExpanded
                ? 'bg-[#0A1432]/90 hover:bg-blue-900/60 text-slate-300 hover:text-white border-blue-800'
                : 'bg-[#0A1432] hover:bg-blue-900/50 text-white border-blue-700/60 hover:border-blue-400'
            }`}
          >
            <span>
              {isAllActiveExpanded
                ? isRtl
                  ? 'بستن و نمایش خلاصه نتایج'
                  : t.collapseResults
                : isRtl
                ? `مشاهده تمام ${PLAYED_RESULTS.length} نتیجه ثبت‌شده (${totalHiddenInActiveView} بازی دیگر)`
                : `${t.showAllResults} (+${totalHiddenInActiveView})`}
            </span>
            {isAllActiveExpanded ? (
              <ChevronUp className="w-4 h-4 text-slate-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-amber-400" />
            )}
          </button>
        </div>
      </div>
    </motion.section>
  );
};
