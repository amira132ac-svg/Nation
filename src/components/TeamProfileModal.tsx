import React from 'react';
import {
  X,
  CheckCircle2,
  Shield,
  Trophy,
  ChevronRight,
} from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';

export const TeamProfileModal: React.FC = () => {
  const {
    lang,
    selectedClub,
    closeClubProfile,
    navigateTo,
  } = usePlatform();

  if (!selectedClub) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-panel-enter">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#071026] border border-white/15 shadow-[0_25px_90px_rgba(0,0,0,0.9)] text-[#F5F7FF]">
        {/* Top Banner — Team Name & Rank Only (No Logo) */}
        <div
          className="relative p-6 sm:p-8 border-b border-white/10 overflow-hidden"
          style={{
            background: `radial-gradient(circle at 20% 0%, ${selectedClub.accentColor}35 0%, #071026 75%)`,
          }}
        >
          <button
            onClick={closeClubProfile}
            className="absolute top-5 right-5 rtl:right-auto rtl:left-5 p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white transition-all cursor-pointer"
            aria-label="Close Team Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3 text-start">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-numbers">
              <span
                dir="ltr"
                className="px-2.5 py-1 rounded-lg bg-[#245BFF]/20 border border-[#245BFF]/50 text-[#93C5FD] font-black"
              >
                FC27 RANK #{selectedClub.slotNumber}
              </span>
              <span className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{lang === 'fa' ? 'تیم رسمی FC27' : 'OFFICIAL FC27 TEAM'}</span>
              </span>
            </div>

            <h2
              dir="ltr"
              className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight"
            >
              {selectedClub.name}
            </h2>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#050B1B] border border-white/10">
              <div className="text-[11px] font-mono-numbers uppercase text-slate-400">
                {lang === 'fa' ? 'رتبه در ایونت‌های قبلی FC27' : 'FC27 OVERALL EVENT RANK'}
              </div>
              <div dir="ltr" className="text-xl font-mono-numbers font-black text-[#60A5FA] mt-1">
                RANK #{selectedClub.slotNumber}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-[#050B1B] border border-white/10">
              <div className="text-[11px] font-mono-numbers uppercase text-slate-400">
                {lang === 'fa' ? 'چرخه رقابتی' : 'COMPETITIVE CYCLE'}
              </div>
              <div dir="ltr" className="text-xl font-mono-numbers font-black text-white mt-1">
                {selectedClub.seasonCycle}
              </div>
            </div>
          </div>

          {/* Active Competitions */}
          <div className="rounded-2xl bg-[#050B1B] border border-white/10 p-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-numbers font-bold uppercase tracking-wider text-[#C4A5FF]">
              <Shield className="w-4 h-4 text-[#A855F7]" />
              <span>
                {lang === 'fa' ? 'حضور در رقابت‌ها' : 'OFFICIAL COMPETITIONS'}
              </span>
            </div>
            <div className="space-y-2">
              {selectedClub.competitions.map((comp) => (
                <div
                  key={comp}
                  dir="ltr"
                  className="px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono-numbers font-bold text-white flex items-center justify-between"
                >
                  <span>{comp}</span>
                  <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={() => {
                closeClubProfile();
                navigateTo('ranking');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#245BFF] hover:bg-[#1D4ED8] text-white font-display font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <span>{lang === 'fa' ? 'مشاهده رنکینگ FC27' : 'View FC27 Ranking'}</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>

            <button
              onClick={closeClubProfile}
              className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-xs font-bold text-slate-300 cursor-pointer"
            >
              {lang === 'fa' ? 'بستن' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
