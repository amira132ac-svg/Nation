import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock } from 'lucide-react';
import { CONFIRMED_FIXTURES, NationalTeam } from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { MatchCard } from './MatchCard';

interface FixturesSectionProps {
  lang: Language;
  onSelectTeam?: (team: NationalTeam) => void;
}

export const FixturesSection: React.FC<FixturesSectionProps> = ({ lang, onSelectTeam }) => {
  const [selectedGroup, setSelectedGroup] = useState<'ALL' | 'A' | 'B'>('ALL');
  const t = translations[lang];
  const isRtl = lang === 'fa';

  const groupAFixtures = CONFIRMED_FIXTURES.filter((f) => f.group === 'A');
  const groupBFixtures = CONFIRMED_FIXTURES.filter((f) => f.group === 'B');

  const showGroupA = selectedGroup === 'ALL' || selectedGroup === 'A';
  const showGroupB = selectedGroup === 'ALL' || selectedGroup === 'B';

  const filterTabs = [
    { id: 'ALL', label: t.allMatchdays },
    { id: 'A', label: t.groupA },
    { id: 'B', label: t.groupB },
  ] as const;

  return (
    <section id="fixtures" className="relative py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-blue-900/40">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              {isRtl ? 'برنامه بازی‌ها (دور اول)' : 'Round 1 Fixtures'}
            </h2>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-amber-400 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>{isRtl ? 'تاریخ و ساعت: به‌زودی اعلام می‌شود' : 'Dates & Kickoff Times: TBA'}</span>
            </div>
          </div>

          {/* Smooth Motion Filter Controls with Sliding Indicator */}
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
                      layoutId="fixtureFilterPill"
                      className={`absolute inset-0 rounded-lg shadow-md -z-10 ${
                        tab.id === 'A'
                          ? 'bg-yellow-400'
                          : 'bg-blue-600'
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

        {/* Official Match Grids with AnimatePresence */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {/* Group A Matches */}
            {showGroupA && (
              <motion.div
                key="group-a-fixtures"
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
                      3 Matches
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {groupAFixtures.map((fixture) => (
                    <MatchCard
                      key={fixture.id}
                      fixture={fixture}
                      lang={lang}
                      onSelectTeam={onSelectTeam}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Group B Matches */}
            {showGroupB && (
              <motion.div
                key="group-b-fixtures"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5"
              >
                <div className="flex items-center justify-between pb-2 border-b border-blue-500/30">
                  <div className="flex items-center gap-2.5">
                    <div className="px-3.5 py-0.5 bg-[#FFCC00] text-slate-950 font-black text-xs uppercase tracking-wider rounded shadow-[0_0_12px_rgba(255,204,0,0.4)]">
                      {t.groupB}
                    </div>
                    <span className="text-xs text-slate-400 font-mono font-semibold">
                      3 Matches
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {groupBFixtures.map((fixture) => (
                    <MatchCard
                      key={fixture.id}
                      fixture={fixture}
                      lang={lang}
                      onSelectTeam={onSelectTeam}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
