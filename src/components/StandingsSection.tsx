import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw } from 'lucide-react';
import {
  OFFICIAL_STANDINGS_GROUP_A,
  OFFICIAL_STANDINGS_GROUP_B,
  NationalTeam,
  StandingRow,
} from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { Flag } from './Flag';
import { StandingsTableSkeleton } from './ShimmerSkeleton';

interface StandingsSectionProps {
  lang: Language;
  onSelectTeam?: (team: NationalTeam) => void;
}

export const StandingsSection: React.FC<StandingsSectionProps> = ({ lang, onSelectTeam }) => {
  const [activeGroupTab, setActiveGroupTab] = useState<'ALL' | 'A' | 'B'>('ALL');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const t = translations[lang];
  const isRtl = lang === 'fa';

  // Initial render shimmer skeleton simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 650);
  };

  const filterTabs = [
    { id: 'ALL', label: t.bothGroups },
    { id: 'A', label: t.groupA },
    { id: 'B', label: t.groupB },
  ] as const;

  const renderTable = (groupId: 'A' | 'B', groupTitle: string, rows: StandingRow[]) => {
    const isGroupA = groupId === 'A';

    return (
      <div className="bg-[#0A1432]/95 border border-blue-900/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
        {/* Table Group Header */}
        <div className={`px-6 py-4 flex items-center justify-between border-b ${
          isGroupA ? 'border-yellow-500/30 bg-yellow-500/10' : 'border-blue-500/30 bg-blue-500/10'
        }`}>
          <div className="flex items-center gap-3">
            <span
              className={`w-3.5 h-3.5 rounded-sm shadow-sm ${
                isGroupA ? 'bg-[#FFCC00]' : 'bg-[#0052FF]'
              }`}
            />
            <h3 className="font-black text-white text-base sm:text-lg tracking-wide uppercase">
              {groupTitle}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-blue-950/70 px-3 py-1 rounded-md border border-blue-800/50">
            <span>
              {isGroupA
                ? isRtl
                  ? '۱۳ از ۱۵ مسابقه برگزار شده'
                  : '13 / 15 Matches Played'
                : isRtl
                ? 'تکمیل شده • ۱۵ از ۱۵ مسابقه'
                : 'Completed • 15 / 15 Matches'}
            </span>
          </div>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="border-b border-blue-950/80 bg-[#060D20]/90 text-xs font-bold text-slate-400 tracking-wider uppercase">
                <th scope="col" className="py-3.5 px-4 w-14 text-center">
                  {t.pos}
                </th>
                <th scope="col" className="py-3.5 px-4 min-w-[190px]">
                  {t.team}
                </th>
                <th scope="col" className="py-3.5 px-3 text-center w-12">{t.played}</th>
                <th scope="col" className="py-3.5 px-3 text-center w-12">{t.won}</th>
                <th scope="col" className="py-3.5 px-3 text-center w-12">{t.drawn}</th>
                <th scope="col" className="py-3.5 px-3 text-center w-12">{t.lost}</th>
                <th scope="col" className="py-3.5 px-3 text-center w-12">{t.gf}</th>
                <th scope="col" className="py-3.5 px-3 text-center w-12">{t.ga}</th>
                <th scope="col" className="py-3.5 px-3 text-center w-12">{t.gd}</th>
                <th scope="col" className="py-3.5 px-4 text-center w-16 font-black text-white">{t.pts}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-950/60 font-mono">
              {rows.map((row, index) => {
                const teamName = isRtl ? row.team.nameFa : row.team.name;
                const isLeader = index === 0;

                return (
                  <motion.tr
                    key={row.team.id}
                    onClick={() => onSelectTeam && onSelectTeam(row.team)}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.05 + index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="hover:bg-blue-600/20 cursor-pointer transition-colors duration-150 group"
                  >
                    {/* Position Badge */}
                    <td className="py-3.5 px-4 text-center">
                      <div
                        className={`w-6 h-6 mx-auto rounded-md flex items-center justify-center text-xs font-black shadow-sm ${
                          isLeader
                            ? isGroupA
                              ? 'bg-yellow-400 text-slate-950 shadow-[0_0_8px_rgba(250,204,21,0.45)]'
                              : 'bg-blue-600 text-white shadow-[0_0_8px_rgba(37,99,235,0.45)]'
                            : 'text-slate-300 bg-blue-950/70 border border-blue-900/50'
                        }`}
                      >
                        {row.positionIndex}
                      </div>
                    </td>

                    {/* Team Name & Flag */}
                    <td className="py-3.5 px-4 font-sans font-medium text-white flex items-center gap-3">
                      <Flag country={row.team.flagCountry} size="sm" className="shrink-0" />
                      <span className="font-black text-sm group-hover:text-blue-300 transition-colors">
                        {teamName}
                      </span>
                      <span className="text-xs text-slate-400 font-mono ml-auto mr-2 font-bold">
                        {row.team.code}
                      </span>
                    </td>

                    {/* Matches Played */}
                    <td className="py-3.5 px-3 text-center text-slate-200 font-semibold">{row.played}</td>
                    {/* Won */}
                    <td className="py-3.5 px-3 text-center text-slate-300 font-semibold">{row.won}</td>
                    {/* Drawn */}
                    <td className="py-3.5 px-3 text-center text-slate-300 font-semibold">{row.drawn}</td>
                    {/* Lost */}
                    <td className="py-3.5 px-3 text-center text-slate-300 font-semibold">{row.lost}</td>
                    {/* Goals For */}
                    <td className="py-3.5 px-3 text-center text-slate-300 font-semibold">{row.goalsFor}</td>
                    {/* Goals Against */}
                    <td className="py-3.5 px-3 text-center text-slate-300 font-semibold">{row.goalsAgainst}</td>
                    {/* Goal Difference */}
                    <td className="py-3.5 px-3 text-center font-bold">
                      <span className={
                        row.goalDifference > 0
                          ? 'text-emerald-400'
                          : row.goalDifference < 0
                          ? 'text-rose-400'
                          : 'text-slate-400'
                      }>
                        {row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}
                      </span>
                    </td>
                    {/* Points */}
                    <td className="py-3.5 px-4 text-center">
                      <span className={`text-base font-black ${
                        isLeader ? 'text-amber-400 font-extrabold' : 'text-slate-200'
                      }`}>
                        {row.points}
                      </span>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <motion.section
      id="standings"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-12 md:py-20 bg-[#060D20]/40"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-blue-900/40">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              {t.standingsTitle}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {isRtl
                ? 'جدول رسمی و به‌روزرسانی شده مرحله گروهی TM PROCLUBS NATIONS LEAGUE'
                : 'Official updated group stage standings — TM PROCLUBS NATIONS LEAGUE'}
            </p>
          </div>

          {/* View Toggle & Shimmer Refresh Trigger */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handleRefresh}
              disabled={isLoading}
              title={t.refreshData}
              aria-label={t.refreshData}
              className="p-2 rounded-xl bg-[#0A1432] border border-blue-900/60 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-950/60 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-blue-400' : ''}`} />
            </button>

            <div className="relative inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl shadow-lg">
              {filterTabs.map((tab) => {
                const isActive = activeGroupTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveGroupTab(tab.id)}
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
                        layoutId="standingsFilterPill"
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
        </div>

        {/* Standings Tables with Shimmer Skeleton & AnimatePresence */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="standings-skeleton-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {(activeGroupTab === 'ALL' || activeGroupTab === 'A') && (
                  <StandingsTableSkeleton isGroupA={true} groupTitle={t.groupA} />
                )}
                {(activeGroupTab === 'ALL' || activeGroupTab === 'B') && (
                  <StandingsTableSkeleton isGroupA={false} groupTitle={t.groupB} />
                )}
              </motion.div>
            ) : (
              <motion.div
                key={`standings-loaded-view-${activeGroupTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {(activeGroupTab === 'ALL' || activeGroupTab === 'A') && (
                  <motion.div
                    key="table-a"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {renderTable('A', `${t.groupA}`, OFFICIAL_STANDINGS_GROUP_A)}
                  </motion.div>
                )}

                {(activeGroupTab === 'ALL' || activeGroupTab === 'B') && (
                  <motion.div
                    key="table-b"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {renderTable('B', `${t.groupB}`, OFFICIAL_STANDINGS_GROUP_B)}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};
