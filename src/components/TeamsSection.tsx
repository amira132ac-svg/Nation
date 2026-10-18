import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GROUP_A_TEAMS, GROUP_B_TEAMS, NationalTeam } from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { Flag } from './Flag';

interface TeamsSectionProps {
  lang: Language;
  onSelectTeam: (team: NationalTeam) => void;
}

export const TeamsSection: React.FC<TeamsSectionProps> = ({ lang, onSelectTeam }) => {
  const [filterGroup, setFilterGroup] = useState<'ALL' | 'A' | 'B'>('ALL');
  const t = translations[lang];
  const isRtl = lang === 'fa';

  const filterTabs = [
    { id: 'ALL', label: t.allNations },
    { id: 'A', label: t.groupA },
    { id: 'B', label: t.groupB },
  ] as const;

  return (
    <motion.section
      id="teams"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-12 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-blue-900/40">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
            {t.teamsTitle}
          </h2>

          {/* Smooth Motion Filter Controls */}
          <div className="relative inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl shadow-lg self-start sm:self-auto">
            {filterTabs.map((tab) => {
              const isActive = filterGroup === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilterGroup(tab.id)}
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
                      layoutId="teamsFilterPill"
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

        {/* Grids with AnimatePresence */}
        <AnimatePresence mode="wait">
          {/* Group A Grid */}
          {(filterGroup === 'ALL' || filterGroup === 'A') && (
            <motion.div
              key="teams-group-a"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mb-10"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-yellow-500/25">
                <span className="w-3 h-3 rounded-sm bg-[#FFCC00]" />
                <h3 className="text-base font-black text-white tracking-wider uppercase">
                  {t.groupA}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {GROUP_A_TEAMS.map((team) => {
                  const teamName = isRtl ? team.nameFa : team.name;

                  return (
                    <motion.div
                      key={team.id}
                      whileHover={{ y: -3, scale: 1.015 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      onClick={() => onSelectTeam(team)}
                      className="bg-[#0A1432]/95 border border-blue-900/50 hover:border-yellow-400/80 rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-colors hover:shadow-[0_8px_24px_rgba(245,158,11,0.22)] group"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <Flag
                          country={team.flagCountry}
                          size="md"
                          className="group-hover:scale-108 transition-transform"
                        />
                        <span className="font-black text-white text-base tracking-wide uppercase truncate group-hover:text-yellow-300 transition-colors">
                          {teamName}
                        </span>
                      </div>

                      <span className="font-mono text-xs font-black text-slate-400 px-2 py-0.5 bg-blue-950/80 rounded-md border border-blue-900/60">
                        {team.code}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Group B Grid */}
          {(filterGroup === 'ALL' || filterGroup === 'B') && (
            <motion.div
              key="teams-group-b"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-blue-500/25">
                <span className="w-3 h-3 rounded-sm bg-[#0052FF]" />
                <h3 className="text-base font-black text-white tracking-wider uppercase">
                  {t.groupB}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {GROUP_B_TEAMS.map((team) => {
                  const teamName = isRtl ? team.nameFa : team.name;

                  return (
                    <motion.div
                      key={team.id}
                      whileHover={{ y: -3, scale: 1.015 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      onClick={() => onSelectTeam(team)}
                      className="bg-[#0A1432]/95 border border-blue-900/50 hover:border-blue-500 rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-colors hover:shadow-[0_8px_24px_rgba(37,99,235,0.25)] group"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <Flag
                          country={team.flagCountry}
                          size="md"
                          className="group-hover:scale-108 transition-transform"
                        />
                        <span className="font-black text-white text-base tracking-wide uppercase truncate group-hover:text-blue-300 transition-colors">
                          {teamName}
                        </span>
                      </div>

                      <span className="font-mono text-xs font-black text-slate-400 px-2 py-0.5 bg-blue-950/80 rounded-md border border-blue-900/60">
                        {team.code}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
