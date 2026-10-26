import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Award, Users, RefreshCw, Clock } from 'lucide-react';
import {
  TOURNAMENT_TOP_SCORERS,
  TOURNAMENT_TOP_ASSISTS,
  PlayerStatItem,
} from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { Flag } from './Flag';
import { StatsSectionSkeleton } from './ShimmerSkeleton';

interface StatsSectionProps {
  lang: Language;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'scorers' | 'assists'>('scorers');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const t = translations[lang];
  const isRtl = lang === 'fa';

  // Initial render shimmer skeleton simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 650);
  };

  const tabs = [
    { id: 'scorers', label: t.topScorers, icon: Award },
    { id: 'assists', label: t.topAssists, icon: Users },
  ] as const;

  const currentList: PlayerStatItem[] =
    activeTab === 'scorers' ? TOURNAMENT_TOP_SCORERS : TOURNAMENT_TOP_ASSISTS;

  const maxValue = Math.max(...currentList.map((p) => p.value), 1);

  return (
    <motion.section
      id="stats"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-12 md:py-20 bg-[#060D20]/40"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-blue-900/40">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              {t.statsTitle}
            </h2>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-blue-400 font-semibold">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>{isRtl ? 'آمار رسمی بازیکنان و تورنمنت لیگ ملت‌ها' : 'Official Player & Tournament Metrics'}</span>
            </div>
          </div>

          {/* Controls: Refresh Trigger & Motion Tabs */}
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
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer select-none z-10 flex items-center gap-2 ${
                      isActive ? 'text-white font-black' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="statsFilterPill"
                        className="absolute inset-0 rounded-lg shadow-md -z-10 bg-blue-600"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Shimmer Skeleton or Loaded Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="stats-skeleton-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <StatsSectionSkeleton />
            </motion.div>
          ) : (
            <motion.div
              key="stats-loaded-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Leaderboard Container */}
              <div className="bg-[#0A1432]/95 border border-blue-900/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm p-5 sm:p-8">
                {/* Header of Leaderboard */}
                <div className="flex items-center justify-between pb-4 border-b border-blue-900/40 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      {activeTab === 'scorers' ? (
                        <Award className="w-4 h-4 text-yellow-400" />
                      ) : (
                        <Users className="w-4 h-4 text-blue-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-black text-white text-base sm:text-lg">
                        {activeTab === 'scorers' ? t.topScorers : t.topAssists}
                      </h3>
                      <span className="text-xs text-slate-400">
                        {isRtl ? 'لیگ ملت‌های TMPROCLUB' : 'TMPROCLUB Nations League'}
                      </span>
                    </div>
                  </div>

                  {currentList.length > 0 && (
                    <span className="text-xs font-mono text-blue-400 bg-blue-950/80 px-3 py-1 rounded-md border border-blue-800/40 font-bold">
                      {activeTab === 'scorers' ? t.goals : t.assists}
                    </span>
                  )}
                </div>

                {/* Player Rankings List or Clean Empty State */}
                {currentList.length === 0 ? (
                  <div className="py-12 sm:py-16 text-center flex flex-col items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-blue-950/70 border border-blue-900/60 flex items-center justify-center text-blue-400 mb-4 shadow-inner">
                      <Clock className="w-7 h-7 text-blue-400/80" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                      {activeTab === 'scorers'
                        ? (isRtl ? 'آمار برترین گلزنان هنوز ثبت نشده است' : 'No top scorers recorded yet')
                        : (isRtl ? 'آمار برترین پاسورها هنوز ثبت نشده است' : 'No top assists recorded yet')}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
                      {activeTab === 'scorers' ? t.statsEmptyScorers : t.statsEmptyAssists}
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-blue-950/60">
                    {currentList.map((player, index) => {
                      const playerName = isRtl ? player.nameFa : player.name;
                      const teamName = isRtl ? player.team.nameFa : player.team.name;
                      const positionLabel = isRtl ? player.positionFa : player.position;
                      const percent = Math.round((player.value / maxValue) * 100);

                      const rankStyle =
                        index === 0
                          ? 'bg-yellow-400 text-slate-950 font-black shadow-[0_0_10px_rgba(250,204,21,0.4)]'
                          : index === 1
                          ? 'bg-slate-300 text-slate-950 font-black shadow-[0_0_8px_rgba(203,213,225,0.4)]'
                          : index === 2
                          ? 'bg-amber-700 text-white font-black shadow-[0_0_8px_rgba(180,83,9,0.4)]'
                          : 'bg-blue-950/70 text-slate-400 font-mono font-bold border border-blue-900/40';

                      return (
                        <motion.div
                          key={player.id}
                          initial={{ opacity: 0, x: isRtl ? 15 : -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: index * 0.05 }}
                          className="py-3.5 flex items-center justify-between gap-3 sm:gap-4 hover:bg-blue-900/20 px-2 rounded-xl transition-colors group"
                        >
                          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 ${rankStyle}`}>
                              {player.rank}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-black text-white text-sm sm:text-base truncate group-hover:text-blue-300 transition-colors">
                                  {playerName}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                                <Flag country={player.team.flagCountry} size="sm" className="shrink-0" />
                                <span className="font-semibold text-slate-300">{teamName}</span>
                                <span className="text-slate-500">•</span>
                                <span className="text-slate-400 text-[11px]">{positionLabel}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
                            <div className="hidden sm:block w-28 md:w-44 bg-blue-950/80 h-2 rounded-full overflow-hidden border border-blue-900/40">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-amber-400 transition-all duration-700"
                                style={{ width: `${percent}%` }}
                              />
                            </div>

                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/80 border border-blue-800/50 group-hover:border-blue-500/50 transition-colors">
                              <span className="text-base sm:text-lg font-black text-amber-400 font-mono">
                                {player.value}
                              </span>
                              <span className="text-[11px] text-slate-400 font-semibold">
                                {activeTab === 'scorers' ? t.goalWord : t.assists}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
