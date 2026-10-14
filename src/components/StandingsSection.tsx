import React, { useState } from 'react';
import {
  INITIAL_STANDINGS_GROUP_A,
  INITIAL_STANDINGS_GROUP_B,
  NationalTeam,
  StandingRow,
} from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { Flag } from './Flag';

interface StandingsSectionProps {
  lang: Language;
  onSelectTeam?: (team: NationalTeam) => void;
}

export const StandingsSection: React.FC<StandingsSectionProps> = ({ lang, onSelectTeam }) => {
  const [activeGroupTab, setActiveGroupTab] = useState<'ALL' | 'A' | 'B'>('ALL');
  const t = translations[lang];
  const isRtl = lang === 'fa';

  const renderTable = (groupId: 'A' | 'B', groupTitle: string, rows: StandingRow[]) => {
    const isGroupA = groupId === 'A';

    return (
      <div className="bg-[#0A1432]/95 border border-blue-900/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
        {/* Table Group Header */}
        <div className={`px-6 py-3.5 flex items-center justify-between border-b ${
          isGroupA ? 'border-yellow-500/30 bg-yellow-500/10' : 'border-blue-500/30 bg-blue-500/10'
        }`}>
          <div className="flex items-center gap-3">
            <span
              className={`w-3.5 h-3.5 rounded-sm ${
                isGroupA ? 'bg-[#FFCC00]' : 'bg-[#0052FF]'
              }`}
            />
            <h3 className="font-extrabold text-white text-base sm:text-lg tracking-wide uppercase">
              {groupTitle}
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">
            {isRtl ? 'به‌روزرسانی پس از بازی‌ها' : 'Updates after matches'}
          </span>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="border-b border-blue-950/80 bg-[#060D20]/80 text-xs font-bold text-slate-400 tracking-wider uppercase">
                <th scope="col" className="py-3 px-4 w-12 text-center">
                  {t.pos}
                </th>
                <th scope="col" className="py-3 px-4 min-w-[180px]">
                  {t.team}
                </th>
                <th scope="col" className="py-3 px-3 text-center w-12">{t.played}</th>
                <th scope="col" className="py-3 px-3 text-center w-12">{t.won}</th>
                <th scope="col" className="py-3 px-3 text-center w-12">{t.drawn}</th>
                <th scope="col" className="py-3 px-3 text-center w-12">{t.lost}</th>
                <th scope="col" className="py-3 px-3 text-center w-12">{t.gf}</th>
                <th scope="col" className="py-3 px-3 text-center w-12">{t.ga}</th>
                <th scope="col" className="py-3 px-3 text-center w-12">{t.gd}</th>
                <th scope="col" className="py-3 px-4 text-center w-16 font-black text-slate-200">{t.pts}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-950/60 font-mono">
              {rows.map((row) => {
                const teamName = isRtl ? row.team.nameFa : row.team.name;

                return (
                  <tr
                    key={row.team.id}
                    onClick={() => onSelectTeam && onSelectTeam(row.team)}
                    className="hover:bg-blue-600/15 cursor-pointer transition-colors duration-150 group"
                  >
                    <td className="py-3 px-4 text-center text-xs font-bold text-slate-500 group-hover:text-slate-300">
                      {row.positionIndex}
                    </td>

                    <td className="py-3 px-4 font-sans font-medium text-white flex items-center gap-3">
                      <Flag country={row.team.flagCountry} size="sm" className="rounded shadow" />
                      <span className="font-extrabold text-sm group-hover:text-blue-300 transition-colors">
                        {teamName}
                      </span>
                      <span className="text-xs text-slate-500 font-mono ml-auto mr-2 font-bold">
                        {row.team.code}
                      </span>
                    </td>

                    <td className="py-3 px-3 text-center text-slate-500 font-semibold">{row.played ?? '—'}</td>
                    <td className="py-3 px-3 text-center text-slate-500 font-semibold">{row.won ?? '—'}</td>
                    <td className="py-3 px-3 text-center text-slate-500 font-semibold">{row.drawn ?? '—'}</td>
                    <td className="py-3 px-3 text-center text-slate-500 font-semibold">{row.lost ?? '—'}</td>
                    <td className="py-3 px-3 text-center text-slate-500 font-semibold">{row.goalsFor ?? '—'}</td>
                    <td className="py-3 px-3 text-center text-slate-500 font-semibold">{row.goalsAgainst ?? '—'}</td>
                    <td className="py-3 px-3 text-center text-slate-500 font-semibold">{row.goalDifference ?? '—'}</td>
                    <td className="py-3 px-4 text-center font-black text-slate-400">{row.points ?? '—'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <section id="standings" className="relative py-12 md:py-20 bg-[#060D20]/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-blue-900/40">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              {t.standingsTitle}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {isRtl ? 'امتیازات پس از انجام بازی‌ها ثبت خواهد شد' : 'Standings update once matches kick off'}
            </p>
          </div>

          {/* View Toggle */}
          <div className="inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl shadow-md self-start sm:self-auto">
            <button
              onClick={() => setActiveGroupTab('ALL')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeGroupTab === 'ALL'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.bothGroups}
            </button>
            <button
              onClick={() => setActiveGroupTab('A')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeGroupTab === 'A'
                  ? 'bg-yellow-400 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.groupA}
            </button>
            <button
              onClick={() => setActiveGroupTab('B')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeGroupTab === 'B'
                  ? 'bg-blue-600 text-white font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.groupB}
            </button>
          </div>
        </div>

        {/* Standings Tables */}
        <div className="space-y-8">
          {(activeGroupTab === 'ALL' || activeGroupTab === 'A') && (
            <div>
              {renderTable('A', `${t.groupA}`, INITIAL_STANDINGS_GROUP_A)}
            </div>
          )}

          {(activeGroupTab === 'ALL' || activeGroupTab === 'B') && (
            <div>
              {renderTable('B', `${t.groupB}`, INITIAL_STANDINGS_GROUP_B)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
