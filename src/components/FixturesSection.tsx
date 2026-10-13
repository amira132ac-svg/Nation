import React, { useState } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
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

  const groupAFixtures = CONFIRMED_FIXTURES.filter((f) => f.group === 'A');
  const groupBFixtures = CONFIRMED_FIXTURES.filter((f) => f.group === 'B');

  const showGroupA = selectedGroup === 'ALL' || selectedGroup === 'A';
  const showGroupB = selectedGroup === 'ALL' || selectedGroup === 'B';

  return (
    <section id="fixtures" className="relative py-16 md:py-24">
      {/* Stadium lighting flood */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.fixturesBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
            {t.fixturesTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {t.fixturesSubtitle}
          </p>
        </div>

        {/* Notice Alert: Pairings confirmed, times TBA */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-[#0A1432]/95 border border-amber-500/40 rounded-xl p-4 sm:p-5 text-center shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" />
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wide">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t.timeTba}</span>
            </div>
            <p className="mt-1 text-xs text-slate-300 max-w-xl mx-auto">
              {t.timeTbaNotice}
            </p>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl shadow-lg">
            <button
              onClick={() => setSelectedGroup('ALL')}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedGroup === 'ALL'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.allMatchdays}
            </button>
            <button
              onClick={() => setSelectedGroup('A')}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedGroup === 'A'
                  ? 'bg-yellow-400 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.groupAFixtures}
            </button>
            <button
              onClick={() => setSelectedGroup('B')}
              className={`px-5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedGroup === 'B'
                  ? 'bg-blue-600 text-white shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.groupBFixtures}
            </button>
          </div>
        </div>

        {/* Official Match Grids matching IMG_1730 */}
        <div className="space-y-12">
          {/* Group A Matches */}
          {showGroupA && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-yellow-500/30">
                <div className="flex items-center gap-3">
                  {/* Yellow brush stroke group badge like graphic */}
                  <div className="px-4 py-1 bg-[#FFCC00] text-slate-950 font-black text-sm uppercase tracking-wider rounded-sm shadow-[0_0_15px_rgba(255,204,0,0.3)]">
                    {t.groupA}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    Round 1 · 3 Matches
                  </span>
                </div>
                <span className="text-xs text-yellow-400 font-mono hidden sm:inline">
                  Official Matchups
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {groupAFixtures.map((fixture) => (
                  <MatchCard
                    key={fixture.id}
                    fixture={fixture}
                    lang={lang}
                    onSelectTeam={onSelectTeam}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Group B Matches */}
          {showGroupB && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-blue-500/30">
                <div className="flex items-center gap-3">
                  {/* Yellow brush stroke group badge like graphic */}
                  <div className="px-4 py-1 bg-[#FFCC00] text-slate-950 font-black text-sm uppercase tracking-wider rounded-sm shadow-[0_0_15px_rgba(255,204,0,0.3)]">
                    {t.groupB}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    Round 1 · 3 Matches
                  </span>
                </div>
                <span className="text-xs text-blue-400 font-mono hidden sm:inline">
                  Official Matchups
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {groupBFixtures.map((fixture) => (
                  <MatchCard
                    key={fixture.id}
                    fixture={fixture}
                    lang={lang}
                    onSelectTeam={onSelectTeam}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
