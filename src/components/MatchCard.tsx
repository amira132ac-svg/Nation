import React from 'react';
import { motion } from 'framer-motion';
import { MatchFixture, NationalTeam } from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { Flag } from './Flag';
import { Clock, Sparkles } from 'lucide-react';

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
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="relative group bg-[#0A1432]/95 hover:bg-[#0E1E4A] border border-blue-900/50 hover:border-blue-400/80 rounded-2xl p-4 sm:p-5 transition-colors shadow-lg hover:shadow-[0_12px_32px_rgba(0,82,255,0.25)] overflow-hidden"
    >
      {/* Blockbuster Match Golden Top Accent */}
      {fixture.isBlockbuster && (
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 shadow-[0_0_12px_rgba(255,204,0,0.8)]" />
      )}

      {/* Top Meta Header: Round & Status */}
      <div className="flex items-center justify-between text-xs pb-3 mb-3 border-b border-blue-950/80">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-slate-400">
            {isRtl ? `دیدار گروه ${fixture.group}` : `Group ${fixture.group}`}
          </span>
          {fixture.isBlockbuster && (
            <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-500/20 border border-amber-500/40 px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.25)]">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{t.blockbusterClash}</span>
            </span>
          )}
        </div>

        {/* Kickoff Status: TBA */}
        <div className="flex items-center gap-1.5 text-amber-400 font-semibold bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-[11px] font-mono">{t.timeTba}</span>
        </div>
      </div>

      {/* Main Face-Off Banner Matching IMG_1730 */}
      <div className="grid grid-cols-12 items-center gap-2 sm:gap-4 py-2">
        {/* Home Team */}
        <div
          onClick={() => onSelectTeam && onSelectTeam(fixture.homeTeam)}
          className={`col-span-5 flex items-center gap-3 sm:gap-4 cursor-pointer group/team ${
            isRtl ? 'flex-row-reverse text-right' : 'flex-row text-left'
          }`}
        >
          <div className="relative shrink-0">
            <Flag
              country={fixture.homeTeam.flagCountry}
              size="lg"
              className="group-hover/team:scale-108 transition-transform"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-black text-white text-sm sm:text-base md:text-lg uppercase tracking-tight truncate group-hover/team:text-blue-300 transition-colors">
              {homeName}
            </h4>
            <span className="text-[11px] font-mono font-bold text-slate-400 block mt-0.5">
              {fixture.homeTeam.code}
            </span>
          </div>
        </div>

        {/* Center: Iconic Yellow Brush "VS" Badge Matching IMG_1730 */}
        <div className="col-span-2 flex flex-col items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 0 }}
            className="w-12 h-7 sm:w-16 sm:h-9 bg-[#FFCC00] rounded-sm transform -rotate-3 flex items-center justify-center shadow-[0_0_18px_rgba(255,204,0,0.55)] cursor-default select-none border border-yellow-300/40"
          >
            <span className="font-black text-slate-950 text-xs sm:text-sm tracking-wider uppercase italic">
              VS
            </span>
          </motion.div>
        </div>

        {/* Away Team */}
        <div
          onClick={() => onSelectTeam && onSelectTeam(fixture.awayTeam)}
          className={`col-span-5 flex items-center gap-3 sm:gap-4 cursor-pointer group/team ${
            isRtl ? 'flex-row text-left' : 'flex-row-reverse text-right'
          }`}
        >
          <div className="relative shrink-0">
            <Flag
              country={fixture.awayTeam.flagCountry}
              size="lg"
              className="group-hover/team:scale-108 transition-transform"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-black text-white text-sm sm:text-base md:text-lg uppercase tracking-tight truncate group-hover/team:text-blue-300 transition-colors">
              {awayName}
            </h4>
            <span className="text-[11px] font-mono font-bold text-slate-400 block mt-0.5">
              {fixture.awayTeam.code}
            </span>
          </div>
        </div>
      </div>

      {/* Match Bottom Strip */}
      <div className="mt-3 pt-2.5 border-t border-blue-950/70 flex items-center justify-between text-[11px] text-slate-400">
        <span className="text-slate-400 font-mono font-medium">
          {isRtl ? `دیدار گروه ${fixture.group}` : `Group ${fixture.group} Match`}
        </span>
        <span className="text-blue-400 font-bold hover:text-blue-300 transition-colors">
          {t.stadiumTba}
        </span>
      </div>
    </motion.div>
  );
};
