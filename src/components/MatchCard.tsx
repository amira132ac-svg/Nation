import React from 'react';
import { MatchFixture, NationalTeam } from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { Flag } from './Flag';
import { Clock, Flame } from 'lucide-react';

interface MatchCardProps {
  fixture: MatchFixture;
  lang: Language;
  onSelectTeam?: (team: NationalTeam) => void;
}

export const MatchCard: React.FC<MatchCardProps> = ({ fixture, lang, onSelectTeam }) => {
  const t = translations[lang];
  const isRtl = lang === 'fa';

  const homeName = isRtl ? fixture.homeTeam.nameFa : fixture.homeTeam.name;
  const awayName = isRtl ? fixture.awayTeam.nameFa : fixture.awayTeam.name;

  return (
    <div className="relative group bg-[#0A1432]/95 hover:bg-[#0D1C44] border border-blue-900/50 hover:border-blue-500/60 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(0,82,255,0.2)] overflow-hidden">
      {/* Blockbuster Match Glow */}
      {fixture.isBlockbuster && (
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400" />
      )}

      {/* Top Meta Header: Round & Status */}
      <div className="flex items-center justify-between text-xs pb-3 mb-3 border-b border-blue-950/80">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-400">
            {isRtl ? fixture.roundNameFa : fixture.roundName}
          </span>
          {fixture.isBlockbuster && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 rounded-full">
              <Flame className="w-3 h-3 text-amber-400" />
              <span>{t.blockbusterClash}</span>
            </span>
          )}
        </div>

        {/* Kickoff Status: TBA */}
        <div className="flex items-center gap-1.5 text-amber-400 font-medium">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-[11px] font-mono">{t.timeTba}</span>
        </div>
      </div>

      {/* Main Face-Off Banner Matching IMG_1730 */}
      <div className="grid grid-cols-12 items-center gap-2 sm:gap-4 py-2">
        {/* Home Team */}
        <div
          onClick={() => onSelectTeam && onSelectTeam(fixture.homeTeam)}
          className={`col-span-5 flex items-center gap-3 cursor-pointer group/team ${
            isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'
          }`}
        >
          <div className="relative shrink-0">
            <Flag
              country={fixture.homeTeam.flagCountry}
              size="lg"
              className="rounded-lg shadow-md border-2 border-white/20 group-hover/team:scale-110 transition-transform"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-extrabold text-white text-sm sm:text-base md:text-lg uppercase tracking-tight truncate group-hover/team:text-blue-300 transition-colors">
              {homeName}
            </h4>
            <span className="text-[11px] font-mono font-semibold text-slate-400 block">
              {fixture.homeTeam.code}
            </span>
          </div>
        </div>

        {/* Center: Iconic Yellow Brush "VS" Badge */}
        <div className="col-span-2 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Brush background simulation with SVG */}
            <div className="w-11 h-7 sm:w-14 sm:h-9 bg-[#FFCC00] rounded-sm transform -rotate-3 flex items-center justify-center shadow-[0_0_15px_rgba(255,204,0,0.5)]">
              <span className="font-black text-slate-950 text-xs sm:text-sm tracking-wider uppercase italic select-none">
                VS
              </span>
            </div>
          </div>
        </div>

        {/* Away Team */}
        <div
          onClick={() => onSelectTeam && onSelectTeam(fixture.awayTeam)}
          className={`col-span-5 flex items-center gap-3 cursor-pointer group/team ${
            isRtl ? 'flex-row text-left' : 'flex-row-reverse text-right'
          }`}
        >
          <div className="relative shrink-0">
            <Flag
              country={fixture.awayTeam.flagCountry}
              size="lg"
              className="rounded-lg shadow-md border-2 border-white/20 group-hover/team:scale-110 transition-transform"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-extrabold text-white text-sm sm:text-base md:text-lg uppercase tracking-tight truncate group-hover/team:text-blue-300 transition-colors">
              {awayName}
            </h4>
            <span className="text-[11px] font-mono font-semibold text-slate-400 block">
              {fixture.awayTeam.code}
            </span>
          </div>
        </div>
      </div>

      {/* Match Bottom Strip */}
      <div className="mt-3 pt-2.5 border-t border-blue-950/60 flex items-center justify-between text-[11px] text-slate-400">
        <span className="text-slate-500 font-mono">
          Group {fixture.group} Match
        </span>
        <span className="text-blue-400 font-medium">
          {t.stadiumTba}
        </span>
      </div>
    </div>
  );
};
