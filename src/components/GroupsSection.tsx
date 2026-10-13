import React from 'react';
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
    <section id="groups" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-bold mb-2">
            {t.groupsBadge}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            {t.groupsTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {t.groupsSubtitle}
          </p>
        </div>

        {/* Group Cards Grid: 2 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {GROUPS.map((group) => {
            const isGroupA = group.id === 'A';
            const groupTitle = isRtl ? group.nameFa : group.name;

            return (
              <div
                key={group.id}
                className="relative flex flex-col group/card transition-all duration-300 hover:scale-[1.01]"
              >
                {/* Exterior Border Frame with Chamfer Cut at Bottom Right */}
                <div
                  className={`relative p-[2px] rounded-xl transition-colors duration-300 ${
                    isGroupA
                      ? 'bg-gradient-to-br from-yellow-400 via-amber-500 to-blue-900 shadow-[0_12px_36px_rgba(245,158,11,0.2)]'
                      : 'bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-900 shadow-[0_12px_36px_rgba(37,99,235,0.25)]'
                  }`}
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
                  }}
                >
                  {/* Inner Deep Navy Card */}
                  <div
                    className="bg-[#0A1432]/98 backdrop-blur-md rounded-xl flex flex-col overflow-hidden"
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
                          {t.sixTeams}
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
                    <div className="divide-y divide-blue-900/50 flex-1 py-2">
                      {group.teams.map((team, index) => {
                        const teamDisplayName = isRtl ? team.nameFa : team.name;

                        return (
                          <div
                            key={team.id}
                            onClick={() => onSelectTeam && onSelectTeam(team)}
                            className="flex items-center justify-between px-6 py-4 hover:bg-blue-600/15 cursor-pointer transition-colors duration-150 group/row"
                          >
                            {/* Left: Flag & Team Name */}
                            <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                              {/* Draw index number */}
                              <span className="font-mono text-xs sm:text-sm text-slate-400 w-4 font-bold shrink-0">
                                {index + 1}
                              </span>

                              {/* Authentic Vector Flag */}
                              <Flag
                                country={team.flagCountry}
                                size="md"
                                className="group-hover/row:scale-110 transition-transform shadow-md rounded"
                              />

                              {/* Official Team Name */}
                              <span className="font-extrabold text-white text-base sm:text-lg tracking-wide uppercase truncate group-hover/row:text-blue-300 transition-colors">
                                {teamDisplayName}
                              </span>
                            </div>

                            {/* Right: Country Code */}
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="font-mono text-xs font-bold text-slate-400 group-hover/row:text-slate-200">
                                {team.code}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Card Footer status info */}
                    <div className="px-6 py-3 bg-[#060D20]/90 border-t border-blue-950 flex items-center justify-between text-xs text-slate-400">
                      <span>{t.drawOrderOfficial}</span>
                      <span className="text-slate-400 font-mono text-[11px] font-medium">{t.roundRobinFormat}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Note Below Groups */}
        <div className="mt-8 text-center text-xs text-slate-400 max-w-xl mx-auto">
          <p>{t.groupsNote}</p>
        </div>
      </div>
    </section>
  );
};
