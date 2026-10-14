import React, { useState } from 'react';
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

  return (
    <section id="teams" className="relative py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-blue-900/40">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
            {t.teamsTitle}
          </h2>

          {/* Filter controls */}
          <div className="inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl shadow-md self-start sm:self-auto">
            <button
              onClick={() => setFilterGroup('ALL')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filterGroup === 'ALL'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.allNations}
            </button>
            <button
              onClick={() => setFilterGroup('A')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filterGroup === 'A'
                  ? 'bg-yellow-400 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.groupA}
            </button>
            <button
              onClick={() => setFilterGroup('B')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filterGroup === 'B'
                  ? 'bg-blue-600 text-white font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.groupB}
            </button>
          </div>
        </div>

        {/* Group A Grid */}
        {(filterGroup === 'ALL' || filterGroup === 'A') && (
          <div className="mb-10">
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
                  <div
                    key={team.id}
                    onClick={() => onSelectTeam(team)}
                    className="bg-[#0A1432]/95 border border-blue-900/50 hover:border-yellow-400/80 rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(245,158,11,0.18)] group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <Flag
                        country={team.flagCountry}
                        size="md"
                        className="group-hover:scale-110 transition-transform shadow rounded"
                      />
                      <span className="font-extrabold text-white text-base tracking-wide uppercase truncate group-hover:text-yellow-300 transition-colors">
                        {teamName}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-black text-slate-400 px-2 py-0.5 bg-blue-950/80 rounded border border-blue-900/60">
                      {team.code}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Group B Grid */}
        {(filterGroup === 'ALL' || filterGroup === 'B') && (
          <div>
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
                  <div
                    key={team.id}
                    onClick={() => onSelectTeam(team)}
                    className="bg-[#0A1432]/95 border border-blue-900/50 hover:border-blue-500 rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,99,235,0.2)] group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <Flag
                        country={team.flagCountry}
                        size="md"
                        className="group-hover:scale-110 transition-transform shadow rounded"
                      />
                      <span className="font-extrabold text-white text-base tracking-wide uppercase truncate group-hover:text-blue-300 transition-colors">
                        {teamName}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-black text-slate-400 px-2 py-0.5 bg-blue-950/80 rounded border border-blue-900/60">
                      {team.code}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
