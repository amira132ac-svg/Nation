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
    <section id="teams" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-bold mb-2">
            {t.teamsBadge}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            {t.teamsTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {t.teamsSubtitle}
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl shadow-lg">
            <button
              onClick={() => setFilterGroup('ALL')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filterGroup === 'ALL'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.allNations}
            </button>
            <button
              onClick={() => setFilterGroup('A')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filterGroup === 'A'
                  ? 'bg-yellow-400 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.groupANations}
            </button>
            <button
              onClick={() => setFilterGroup('B')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                filterGroup === 'B'
                  ? 'bg-blue-600 text-white font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.groupBNations}
            </button>
          </div>
        </div>

        {/* Group A Grid */}
        {(filterGroup === 'ALL' || filterGroup === 'A') && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-yellow-500/30">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#FFCC00]" />
              <h3 className="text-xl font-black text-white tracking-wider uppercase">
                {t.groupA}
              </h3>
              <span className="text-xs text-yellow-400 font-mono ml-auto">
                {isRtl ? 'سیدهای قرعه‌کشی ۱ تا ۶' : 'Draw Position 1–6'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GROUP_A_TEAMS.map((team) => {
                const teamName = isRtl ? team.nameFa : team.name;

                return (
                  <div
                    key={team.id}
                    onClick={() => onSelectTeam(team)}
                    className="bg-[#0A1432]/95 border border-blue-900/50 hover:border-yellow-400/80 rounded-2xl p-5 flex items-center justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(245,158,11,0.2)] group"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <Flag
                        country={team.flagCountry}
                        size="lg"
                        className="group-hover:scale-110 transition-transform shadow-md rounded"
                      />
                      <div className="min-w-0">
                        <h4 className="font-extrabold text-white text-base tracking-wide uppercase truncate group-hover:text-yellow-300 transition-colors">
                          {teamName}
                        </h4>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {t.groupA} · {t.seed} {team.drawIndex}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-xs font-black text-slate-400 px-2.5 py-1 bg-blue-950/80 rounded-lg border border-blue-900/60">
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
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-blue-500/30">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#0052FF]" />
              <h3 className="text-xl font-black text-white tracking-wider uppercase">
                {t.groupB}
              </h3>
              <span className="text-xs text-blue-400 font-mono ml-auto">
                {isRtl ? 'سیدهای قرعه‌کشی ۱ تا ۶' : 'Draw Position 1–6'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GROUP_B_TEAMS.map((team) => {
                const teamName = isRtl ? team.nameFa : team.name;

                return (
                  <div
                    key={team.id}
                    onClick={() => onSelectTeam(team)}
                    className="bg-[#0A1432]/95 border border-blue-900/50 hover:border-blue-500 rounded-2xl p-5 flex items-center justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(37,99,235,0.25)] group"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <Flag
                        country={team.flagCountry}
                        size="lg"
                        className="group-hover:scale-110 transition-transform shadow-md rounded"
                      />
                      <div className="min-w-0">
                        <h4 className="font-extrabold text-white text-base tracking-wide uppercase truncate group-hover:text-blue-300 transition-colors">
                          {teamName}
                        </h4>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {t.groupB} · {t.seed} {team.drawIndex}
                        </p>
                      </div>
                    </div>

                    <span className="font-mono text-xs font-black text-slate-400 px-2.5 py-1 bg-blue-950/80 rounded-lg border border-blue-900/60">
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
