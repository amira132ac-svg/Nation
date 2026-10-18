import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronDown, ChevronUp, Layers, ExternalLink } from 'lucide-react';
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
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const t = translations[lang];
  const isRtl = lang === 'fa';

  const groupAFixtures = REMAINING_FIXTURES.filter((f) => f.group === 'A');
  const groupBFixtures = REMAINING_FIXTURES.filter((f) => f.group === 'B');

  const showGroupA = selectedGroup === 'ALL' || selectedGroup === 'A';
  const showGroupB = selectedGroup === 'ALL' || selectedGroup === 'B';

  const INITIAL_VISIBLE_COUNT = 4;

  const visibleGroupAFixtures = isExpanded
    ? groupAFixtures
    : groupAFixtures.slice(0, INITIAL_VISIBLE_COUNT);

  const visibleGroupBFixtures = isExpanded
    ? groupBFixtures
    : groupBFixtures.slice(0, INITIAL_VISIBLE_COUNT);

  const remainingCountA = groupAFixtures.length - visibleGroupAFixtures.length;
  const remainingCountB = groupBFixtures.length - visibleGroupBFixtures.length;
  const totalRemainingHidden = (showGroupA ? remainingCountA : 0) + (showGroupB ? remainingCountB : 0);

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
            <div className="flex items-center gap-2 mt-1.5 text-xs text-amber-400 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>{t.timeTba}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">
                {isRtl ? '۲۲ بازی باقیمانده' : '22 Remaining Fixtures'}
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

            {/* Open Full Schedule Modal Button ("میرن توش") */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-950/80 hover:bg-blue-900/90 border border-blue-800/80 hover:border-blue-500 text-xs font-bold text-blue-300 hover:text-white transition-all shadow-md cursor-pointer"
              title={isRtl ? 'مشاهده تمام بازی‌ها در پنجره کامل' : 'Open Full Schedule'}
            >
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              <span>{isRtl ? 'مشاهده در پنجره کامل' : 'Full View'}</span>
            </button>
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
                      {isExpanded
                        ? `${groupAFixtures.length} ${isRtl ? 'بازی' : 'Matches'}`
                        : `${visibleGroupAFixtures.length} ${isRtl ? 'از ۱۱ بازی' : 'of 11 Matches'}`}
                    </span>
                  </div>

                  {!isExpanded && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-xs font-bold text-yellow-400 hover:text-yellow-300 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>{isRtl ? `+${remainingCountA} بازی دیگر` : `+${remainingCountA} more`}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {visibleGroupAFixtures.map((fixture) => (
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
                    <div className="px-3.5 py-0.5 bg-[#0052FF] text-white font-black text-xs uppercase tracking-wider rounded shadow-[0_0_12px_rgba(0,82,255,0.4)]">
                      {t.groupB}
                    </div>
                    <span className="text-xs text-slate-400 font-mono font-semibold">
                      {isExpanded
                        ? `${groupBFixtures.length} ${isRtl ? 'بازی' : 'Matches'}`
                        : `${visibleGroupBFixtures.length} ${isRtl ? 'از ۱۱ بازی' : 'of 11 Matches'}`}
                    </span>
                  </div>

                  {!isExpanded && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>{isRtl ? `+${remainingCountB} بازی دیگر` : `+${remainingCountB} more`}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {visibleGroupBFixtures.map((fixture) => (
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

        {/* Expand / Collapse & Modal Actions Banner */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Toggle Expand / Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-full sm:w-auto px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
              isExpanded
                ? 'bg-blue-950/90 hover:bg-blue-900 border border-blue-800 text-slate-200'
                : 'bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:scale-[1.01]'
            }`}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 text-blue-400" />
                <span>{t.showLess}</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 text-white animate-bounce" />
                <span>
                  {isRtl
                    ? `مشاهده سایر بازی‌های باقی‌مانده (${totalRemainingHidden} مسابقه دیگر)`
                    : `View Remaining Fixtures (${totalRemainingHidden} more)`}
                </span>
              </>
            )}
          </button>

          {/* Dedicated Modal button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-5 py-3 rounded-2xl font-bold text-xs bg-[#0A1432] hover:bg-blue-900/60 border border-blue-900/80 hover:border-blue-400 text-blue-300 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Layers className="w-4 h-4 text-blue-400" />
            <span>{isRtl ? 'ورود به جدول و لیست کامل بازی‌ها' : 'Open Complete Schedule Modal'}</span>
          </button>
        </div>
      </div>

      {/* Full Schedule Modal ("میرن توش") */}
      <FullScheduleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        onSelectTeam={onSelectTeam}
      />
    </motion.section>
  );
};
