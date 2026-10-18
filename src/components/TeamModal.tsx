import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const t = translations[lang];
  const isRtl = lang === 'fa';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (team) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [team, onClose]);

  const isGroupA = team?.group === 'A';
  const teamName = team ? (isRtl ? team.nameFa : team.name) : '';

  return (
    <AnimatePresence>
      {team && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            key="modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="relative w-full max-w-lg bg-[#0A1432] border border-blue-900/80 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-left overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {/* Ambient Corner Glow */}
            <div
              className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-30 ${
                isGroupA ? 'bg-yellow-400' : 'bg-blue-600'
              }`}
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-blue-900/40 transition-colors cursor-pointer ${
                isRtl ? 'left-5' : 'right-5'
              }`}
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with Flag and Team Title */}
            <div className="flex items-center gap-5 mb-6 pb-6 border-b border-blue-950">
              <Flag country={team.flagCountry} size="xl" className="shadow-xl" />
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-0.5 rounded-md ${
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
            <div className="grid grid-cols-2 gap-3.5 mb-6 text-xs">
              <div className="p-3.5 bg-[#060D20] rounded-2xl border border-blue-950">
                <span className="text-slate-400 block mb-1">{t.compLabel}</span>
                <span className="text-white font-bold block text-sm">TMPROCLUB Nations League</span>
              </div>

              <div className="p-3.5 bg-[#060D20] rounded-2xl border border-blue-950">
                <span className="text-slate-400 block mb-1">{t.drawIndexLabel}</span>
                <span className="text-white font-bold font-mono block text-sm">
                  {t.seed} #{team.drawIndex}
                </span>
              </div>

              <div className="p-3.5 bg-[#060D20] rounded-2xl border border-blue-950">
                <span className="text-slate-400 block mb-1">{t.tournStatusLabel}</span>
                <span className="text-emerald-400 font-semibold block text-sm">{t.statusInProgress}</span>
              </div>

              <div className="p-3.5 bg-[#060D20] rounded-2xl border border-blue-950">
                <span className="text-slate-400 block mb-1">{t.scheduleStateLabel}</span>
                <span className="text-slate-200 font-semibold block text-sm">{t.timeTba}</span>
              </div>
            </div>

            {/* Notice */}
            <div className="p-4 bg-blue-950/40 rounded-2xl border border-blue-900/50 text-xs text-slate-300 leading-relaxed">
              <p className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{t.squadNotice}</span>
              </p>
            </div>

            {/* Action button */}
            <div className={`mt-6 flex ${isRtl ? 'justify-start' : 'justify-end'}`}>
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-black uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                {t.closeBtn}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
