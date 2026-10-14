import React, { useState } from 'react';
import { Clock } from 'lucide-react';
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
  const isRtl = lang === 'fa';

  const groupAFixtures = CONFIRMED_FIXTURES.filter((f) => f.group === 'A');
  const groupBFixtures = CONFIRMED_FIXTURES.filter((f) => f.group === 'B');

  const showGroupA = selectedGroup === 'ALL' || selectedGroup === 'A';
  const showGroupB = selectedGroup === 'ALL' || selectedGroup === 'B';

  return (
    <section id="fixtures" className="relative py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-blue-900/40">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              {isRtl ? 'برنامه بازی‌ها (دور اول)' : 'Round 1 Fixtures'}
            </h2>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-amber-400 font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>{isRtl ? 'تاریخ و ساعت: به‌زودی اعلام می‌شود' : 'Dates & Kickoff Times: TBA'}</span>
            </div>
          </div>

          {/* Filter controls */}
          <div className="inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl shadow-md self-start sm:self-auto">
            <button
              onClick={() => setSelectedGroup('ALL')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedGroup === 'ALL'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.allMatchdays}
            </button>
            <button
              onClick={() => setSelectedGroup('A')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedGroup === 'A'
                  ? 'bg-yellow-400 text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.groupA}
            </button>
            <button
              onClick={() => setSelectedGroup('B')}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedGroup === 'B'
                  ? 'bg-blue-600 text-white shadow-md font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.groupB}
            </button>
          </div>
        </div>

        {/* Official Match Grids matching IMG_1730 */}
        <div className="space-y-10">
          {/* Group A Matches */}
          {showGroupA && (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-yellow-500/30">
                <div className="flex items-center gap-2.5">
                  <div className="px-3 py-0.5 bg-[#FFCC00] text-slate-950 font-black text-xs uppercase tracking-wider rounded-sm shadow-sm">
                    {t.groupA}
                  </div>
                  <span className="text-xs text-slate-400 font-mono font-semibold">
                    3 Matches
                  </span>
                </div>
              </div>

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
            </div>
          )}

          {/* Group B Matches */}
          {showGroupB && (
            <div className="space-y-3.5">
              <div className="flex items-center justify-between pb-2 border-b border-blue-500/30">
                <div className="flex items-center gap-2.5">
                  <div className="px-3 py-0.5 bg-[#FFCC00] text-slate-950 font-black text-xs uppercase tracking-wider rounded-sm shadow-sm">
                    {t.groupB}
                  </div>
                  <span className="text-xs text-slate-400 font-mono font-semibold">
                    3 Matches
                  </span>
                </div>
              </div>

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
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
