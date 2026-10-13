import React from 'react';
import { X, Shield } from 'lucide-react';
import { NationalTeam } from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { Flag } from './Flag';

interface TeamModalProps {
  team: NationalTeam | null;
  lang: Language;
  onClose: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({ team, lang, onClose }) => {
  if (!team) return null;

  const t = translations[lang];
  const isRtl = lang === 'fa';
  const isGroupA = team.group === 'A';
  const teamName = isRtl ? team.nameFa : team.name;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0A1432] border border-blue-900/80 rounded-2xl p-6 sm:p-8 shadow-2xl text-left overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Glow */}
        <div
          className={`absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl pointer-events-none opacity-25 ${
            isGroupA ? 'bg-yellow-400' : 'bg-blue-600'
          }`}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-blue-900/40 transition-colors ${
            isRtl ? 'left-5' : 'right-5'
          }`}
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Flag and Team Title */}
        <div className="flex items-center gap-5 mb-6 pb-6 border-b border-blue-950">
          <Flag country={team.flagCountry} size="xl" className="shadow-lg rounded" />
          <div>
            <div className="flex items-center gap-2">
              <span
                className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded ${
                  isGroupA
                    ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30'
                    : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                }`}
              >
                {t.groupA.replace('A', team.group)}
              </span>
              <span className="text-xs text-slate-400 font-mono font-bold">
                {team.code}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-1">
              {teamName}
            </h3>
          </div>
        </div>

        {/* Verified Data Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
          <div className="p-3.5 bg-[#060D20] rounded-xl border border-blue-950">
            <span className="text-slate-400 block mb-1">{t.compLabel}</span>
            <span className="text-white font-bold block text-sm">TMPROCLUB Nations League</span>
          </div>

          <div className="p-3.5 bg-[#060D20] rounded-xl border border-blue-950">
            <span className="text-slate-400 block mb-1">{t.drawIndexLabel}</span>
            <span className="text-white font-bold font-mono block text-sm">
              {t.seed} #{team.drawIndex}
            </span>
          </div>

          <div className="p-3.5 bg-[#060D20] rounded-xl border border-blue-950">
            <span className="text-slate-400 block mb-1">{t.tournStatusLabel}</span>
            <span className="text-amber-400 font-semibold block text-sm">{t.preTournament}</span>
          </div>

          <div className="p-3.5 bg-[#060D20] rounded-xl border border-blue-950">
            <span className="text-slate-400 block mb-1">{t.scheduleStateLabel}</span>
            <span className="text-slate-200 font-semibold block text-sm">{t.awaitingKickoff}</span>
          </div>
        </div>

        {/* Notice */}
        <div className="p-4 bg-blue-950/40 rounded-xl border border-blue-900/50 text-xs text-slate-300 leading-relaxed">
          <p className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>{t.squadNotice}</span>
          </p>
        </div>

        {/* Action button */}
        <div className={`mt-6 flex ${isRtl ? 'justify-start' : 'justify-end'}`}>
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-colors cursor-pointer"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};
