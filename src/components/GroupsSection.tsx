import React from 'react';
import { motion } from 'motion/react';
import { GROUPS, NationalTeam } from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { Flag } from './Flag';

interface GroupsSectionProps {
  lang: Language;
  onSelectTeam?: (team: NationalTeam) => void;
}

export const GroupsSection: React.FC<GroupsSectionProps> = ({ lang, onSelectTeam }) => {
  const t = translations[lang];
  const isRtl = lang === 'fa';

  return (
    <section id="groups" className="relative py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-blue-900/40">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
            {t.groupsTitle}
          </h2>
          <span className="text-xs text-blue-400 font-mono font-bold bg-blue-950/60 border border-blue-900/50 px-3 py-1 rounded-md">
            12 TEAMS
          </span>
        </div>

        {/* Group Cards Grid: 2 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-5xl mx-auto items-stretch">
          {GROUPS.map((group) => {
            const isGroupA = group.id === 'A';
            const groupTitle = isRtl ? group.nameFa : group.name;

            return (
              <motion.div
                key={group.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="relative flex flex-col group/card"
              >
                {/* Exterior Border Frame with Chamfer Cut at Bottom Right */}
                <div
                  className={`relative p-[2px] rounded-2xl transition-all duration-300 ${
                    isGroupA
                      ? 'bg-gradient-to-br from-yellow-400 via-amber-500 to-blue-900 shadow-[0_12px_36px_rgba(245,158,11,0.22)]'
                      : 'bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-900 shadow-[0_12px_36px_rgba(37,99,235,0.28)]'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
                  }}
                >
                  {/* Inner Deep Navy Card */}
                  <div
                    className="bg-[#0A1432]/98 backdrop-blur-md rounded-2xl flex flex-col overflow-hidden"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 23px), calc(100% - 23px) 100%, 0 100%)',
                    }}
                  >
                    {/* Header Banner - Exactly matching Image 1 */}
                    <div
                      className={`relative flex items-center justify-between px-6 py-4.5 transition-colors ${
                        isGroupA
                          ? 'bg-[#FFCC00] text-slate-950'
                          : 'bg-[#0052FF] text-white'
                      }`}
                    >
                      {/* Left: Group Title */}
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-black tracking-wider uppercase">
                          {groupTitle}
                        </h3>
                        <span
                          className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded ${
                            isGroupA
                              ? 'bg-black/15 text-slate-900'
                              : 'bg-white/20 text-white'
                          }`}
                        >
                          6 TEAMS
                        </span>
                      </div>

                      {/* Right: Characteristic Diagonal Slanted Stripes from Reference Image */}
                      <div className="flex items-center gap-1.5 opacity-90">
                        <div
                          className={`w-2.5 h-6 transform -skew-x-[25deg] ${
                            isGroupA ? 'bg-slate-950' : 'bg-white'
                          }`}
                        />
                        <div
                          className={`w-2.5 h-6 transform -skew-x-[25deg] ${
                            isGroupA ? 'bg-slate-950' : 'bg-white'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Team List with Equal Row Heights & Thin Separators */}
                    <div className="divide-y divide-blue-900/50 flex-1 py-1">
                      {group.teams.map((team, index) => {
                        const teamDisplayName = isRtl ? team.nameFa : team.name;

                        return (
                          <motion.div
                            key={team.id}
                            whileHover={{ x: isRtl ? -4 : 4 }}
                            transition={{ duration: 0.15 }}
                            onClick={() => onSelectTeam && onSelectTeam(team)}
                            className="flex items-center justify-between px-6 py-3.5 hover:bg-blue-600/20 cursor-pointer transition-colors duration-150 group/row"
                          >
                            {/* Left: Flag & Team Name */}
                            <div className="flex items-center gap-4 min-w-0">
                              <span className="font-mono text-xs font-bold text-slate-400 w-4 shrink-0">
                                {index + 1}
                              </span>

                              <Flag
                                country={team.flagCountry}
                                size="md"
                                className="group-hover/row:scale-110 transition-transform shadow-md rounded-lg"
                              />

                              <span className="font-black text-white text-base tracking-wide uppercase truncate group-hover/row:text-blue-300 transition-colors">
                                {teamDisplayName}
                              </span>
                            </div>

                            {/* Right: Country Code */}
                            <span className="font-mono text-xs font-bold text-slate-400 group-hover/row:text-slate-200">
                              {team.code}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
