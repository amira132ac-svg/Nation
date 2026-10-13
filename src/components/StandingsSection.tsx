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
        <div className={`px-6 py-4 flex items-center justify-between border-b ${
          isGroupA ? 'border-yellow-500/30 bg-yellow-500/10' : 'border-blue-500/30 bg-blue-500/10'
        }`}>
          <div className="flex items-center gap-3">
            <span
              className={`w-3.5 h-3.5 rounded-sm ${
                isGroupA ? 'bg-[#FFCC00]' : 'bg-[#0052FF]'
              }`}
            />
            <h3 className="font-extrabold text-white text-lg tracking-wide uppercase">
              {groupTitle}
            </h3>
          </div>
          <span className="text-xs text-slate-300 font-mono font-medium">
            {isRtl ? '۶ تیم · جدول بدون رده‌بندی' : '6 Teams · Unranked'}
          </span>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="border-b border-blue-950/80 bg-[#060D20]/80 text-xs font-bold text-slate-400 tracking-wider uppercase">
                <th scope="col" className="py-3.5 px-4 w-12 text-center" title="Draw Position Index">
                  {t.pos}
                </th>
                <th scope="col" className="py-3.5 px-4 min-w-[200px]">
                  {t.team}
                </th>
                <th scope="col" className="py-3.5 px-3 text-center w-12" title="Played">
                  {t.played}
                </th>
                <th scope="col" className="py-3.5 px-3 text-center w-12" title="Won">
                  {t.won}
                </th>
                <th scope="col" className="py-3.5 px-3 text-center w-12" title="Drawn">
                  {t.drawn}
                </th>
                <th scope="col" className="py-3.5 px-3 text-center w-12" title="Lost">
                  {t.lost}
                </th>
                <th scope="col" className="py-3.5 px-3 text-center w-12" title="Goals For">
                  {t.gf}
                </th>
                <th scope="col" className="py-3.5 px-3 text-center w-12" title="Goals Against">
                  {t.ga}
                </th>
                <th scope="col" className="py-3.5 px-3 text-center w-12" title="Goal Difference">
                  {t.gd}
                </th>
                <th scope="col" className="py-3.5 px-4 text-center w-16 font-black text-slate-200" title="Points">
                  {t.pts}
                </th>
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
                    {/* Position / Index */}
                    <td className="py-3.5 px-4 text-center text-xs font-bold text-slate-500 group-hover:text-slate-300">
                      {row.positionIndex}
                    </td>

                    {/* Team Flag + Name */}
                    <td className="py-3.5 px-4 font-sans font-medium text-white flex items-center gap-3">
                      <Flag country={row.team.flagCountry} size="sm" className="rounded shadow" />
                      <span className="font-extrabold text-sm group-hover:text-blue-300 transition-colors">
                        {teamName}
                      </span>
                      <span className="text-xs text-slate-500 font-mono ml-auto mr-2 font-bold">
                        {row.team.code}
                      </span>
                    </td>

                    {/* P */}
                    <td className="py-3.5 px-3 text-center text-slate-500 font-semibold">
                      {row.played !== null ? row.played : '—'}
                    </td>

                    {/* W */}
                    <td className="py-3.5 px-3 text-center text-slate-500 font-semibold">
                      {row.won !== null ? row.won : '—'}
                    </td>

                    {/* D */}
                    <td className="py-3.5 px-3 text-center text-slate-500 font-semibold">
                      {row.drawn !== null ? row.drawn : '—'}
                    </td>

                    {/* L */}
                    <td className="py-3.5 px-3 text-center text-slate-500 font-semibold">
                      {row.lost !== null ? row.lost : '—'}
                    </td>

                    {/* GF */}
                    <td className="py-3.5 px-3 text-center text-slate-500 font-semibold">
                      {row.goalsFor !== null ? row.goalsFor : '—'}
                    </td>

                    {/* GA */}
                    <td className="py-3.5 px-3 text-center text-slate-500 font-semibold">
                      {row.goalsAgainst !== null ? row.goalsAgainst : '—'}
                    </td>

                    {/* GD */}
                    <td className="py-3.5 px-3 text-center text-slate-500 font-semibold">
                      {row.goalDifference !== null ? row.goalDifference : '—'}
                    </td>

                    {/* Pts */}
                    <td className="py-3.5 px-4 text-center font-black text-slate-400">
                      {row.points !== null ? row.points : '—'}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Legend footer */}
        <div className="px-6 py-3 bg-[#060D20]/90 border-t border-blue-950 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-3">
          <span>{t.unrankedNote}</span>
          <span className="font-mono text-slate-500">{t.tableLegend}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="standings" className="relative py-16 md:py-24 bg-[#060D20]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-400 font-bold mb-2">
            {t.standingsBadge}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            {t.standingsTitle}
          </h2>
        </div>

        {/* Required Mandatory Notice Banner */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-blue-950/50 border border-blue-800/60 rounded-xl p-4 sm:p-5 text-center shadow-lg">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black tracking-wider uppercase text-blue-300">
              <svg className="w-4 h-4 text-blue-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>{t.standingsBanner}</span>
            </div>
            <p className="mt-1.5 text-xs text-slate-300 max-w-xl mx-auto">
              {t.standingsBannerSub}
            </p>
          </div>
        </div>

        {/* View Toggle (All vs Group A vs Group B) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl shadow-lg">
            <button
              onClick={() => setActiveGroupTab('ALL')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeGroupTab === 'ALL'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.bothGroups}
            </button>
            <button
              onClick={() => setActiveGroupTab('A')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                activeGroupTab === 'A'
                  ? 'bg-yellow-400 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.groupA}
            </button>
            <button
              onClick={() => setActiveGroupTab('B')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
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
        <div className="space-y-10">
          {(activeGroupTab === 'ALL' || activeGroupTab === 'A') && (
            <div>
              {renderTable('A', `${t.groupA} ${t.standingsTitle}`, INITIAL_STANDINGS_GROUP_A)}
            </div>
          )}

          {(activeGroupTab === 'ALL' || activeGroupTab === 'B') && (
            <div>
              {renderTable('B', `${t.groupB} ${t.standingsTitle}`, INITIAL_STANDINGS_GROUP_B)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
