import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle2, ExternalLink } from 'lucide-react';
import { REMAINING_FIXTURES, NationalTeam } from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { MatchCard } from './MatchCard';
import { FullScheduleModal } from './FullScheduleModal';

interface FixturesSectionProps {
  lang: Language;
  onSelectTeam?: (team: NationalTeam) => void;
}

export const FixturesSection: React.FC<FixturesSectionProps> = ({ lang, onSelectTeam }) => {
  const [selectedGroup, setSelectedGroup] = useState<'ALL' | 'A' | 'B'>('ALL');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const t = translations[lang];
  const isRtl = lang === 'fa';

  const groupAFixtures = REMAINING_FIXTURES.filter((f) => f.group === 'A');
  const groupBFixtures = REMAINING_FIXTURES.filter((f) => f.group === 'B');

  const showGroupA = selectedGroup === 'ALL' || selectedGroup === 'A';
  const showGroupB = selectedGroup === 'ALL' || selectedGroup === 'B';

  const filterTabs = [
    { id: 'ALL', label: t.allMatchdays },
    { id: 'A', label: t.groupA },
    { id: 'B', label: t.groupB },
  ] as const;

  return (
    <motion.section
      id="fixtures"
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
              {t.fixturesTitle}
            </h2>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-emerald-400 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>
                {isRtl
                  ? 'مرحله گروهی تکمیل شد (۳۰ از ۳۰ مسابقه برگزار شده)'
                  : 'Group Stage Completed (30 of 30 Matches Played)'}
              </span>
            </div>
          </div>

          {/* Smooth Motion Filter Controls with Sliding Indicator */}
          <div className="flex flex-wrap items-center gap-3 self-start sm:self-auto">
            <div className="relative inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl shadow-lg">
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

            {/* Open Full Schedule Modal Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-950/80 hover:bg-blue-900/90 border border-blue-800/80 hover:border-blue-500 text-xs font-bold text-blue-300 hover:text-white transition-all shadow-md cursor-pointer"
              title={isRtl ? 'مشاهده وضعیت برنامه مسابقات' : 'Open Schedule Status'}
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              <span>{isRtl ? 'مشاهده در پنجره کامل' : 'Full View'}</span>
            </button>
          </div>
        </div>

        {/* Official Match Grids */}
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
                <div className="flex items-center justify-between pb-2.5 border-b border-yellow-500/30">
                  <div className="flex items-center gap-2.5">
                    <div className="px-3.5 py-0.5 bg-[#FFCC00] text-slate-950 font-black text-xs uppercase tracking-wider rounded shadow-[0_0_12px_rgba(255,204,0,0.35)]">
                      {t.groupA}
                    </div>
                    <span className="text-xs text-emerald-400 font-mono font-semibold">
                      {isRtl ? 'تکمیل شده (۱۵ از ۱۵ بازی انجام شد)' : 'Completed (15 of 15 Played)'}
                    </span>
                  </div>
                </div>

                {groupAFixtures.length === 0 ? (
                  <div className="bg-[#0A1432]/80 border border-emerald-500/25 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white">
                          {isRtl
                            ? 'تمامی ۱۵ مسابقه مرحله گروهی در گروه A به پایان رسیده است'
                            : 'All 15 Group A Stage Matches Completed'}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {isRtl
                            ? 'هیچ بازی باقی‌مانده‌ای در گروه A وجود ندارد. نتایج کامل را در بخش نتایج بالا مشاهده کنید.'
                            : 'No remaining fixtures in Group A. View all 15 final scores in the Results section above.'}
                        </p>
                      </div>
                    </div>
                    <a
                      href="#results"
                      className="px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-xs font-bold text-emerald-300 transition-colors shrink-0"
                    >
                      {isRtl ? 'مشاهده نتایج گروه A' : 'View Group A Results'}
                    </a>
                  </div>
                ) : (
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
                )}
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
                <div className="flex items-center justify-between pb-2.5 border-b border-blue-500/30">
                  <div className="flex items-center gap-2.5">
                    <div className="px-3.5 py-0.5 bg-[#0052FF] text-white font-black text-xs uppercase tracking-wider rounded shadow-[0_0_12px_rgba(0,82,255,0.35)]">
                      {t.groupB}
                    </div>
                    <span className="text-xs text-emerald-400 font-mono font-semibold">
                      {isRtl ? 'تکمیل شده (۱۵ از ۱۵ بازی انجام شد)' : 'Completed (15 of 15 Played)'}
                    </span>
                  </div>
                </div>

                {groupBFixtures.length === 0 ? (
                  <div className="bg-[#0A1432]/80 border border-emerald-500/25 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white">
                          {isRtl
                            ? 'تمامی ۱۵ مسابقه مرحله گروهی در گروه B به پایان رسیده است'
                            : 'All 15 Group B Stage Matches Completed'}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {isRtl
                            ? 'هیچ بازی باقی‌مانده‌ای در گروه B وجود ندارد. نتایج کامل را در بخش نتایج بالا مشاهده کنید.'
                            : 'No remaining fixtures in Group B. View all 15 final scores in the Results section above.'}
                        </p>
                      </div>
                    </div>
                    <a
                      href="#results"
                      className="px-4 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-xs font-bold text-emerald-300 transition-colors shrink-0"
                    >
                      {isRtl ? 'مشاهده نتایج گروه B' : 'View Group B Results'}
                    </a>
                  </div>
                ) : (
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
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Full Schedule Modal */}
      <FullScheduleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        onSelectTeam={onSelectTeam}
      />
    </motion.section>
  );
};
