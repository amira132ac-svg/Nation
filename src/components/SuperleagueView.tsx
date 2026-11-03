import React from 'react';
import { Lock, Star, ChevronRight } from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';

export const SuperleagueView: React.FC = () => {
  const { lang, navigateTo, clubs } = usePlatform();

  return (
    <div className="relative min-h-[calc(100vh-5rem)] bg-[#040817] text-[#F5F7FF] overflow-hidden flex items-center justify-center">
      {/* =====================================================================
          BLURRED BACKGROUND ARCHITECTURE (COMPLETELY BLURRED OUT)
          ===================================================================== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 blur-xl opacity-35 pointer-events-none select-none overflow-hidden"
      >
        <div className="absolute inset-0 superleague-glow" />
        <div className="max-w-[1440px] mx-auto px-6 py-16 space-y-12">
          <div className="space-y-4">
            <div className="font-display font-black text-7xl text-white">SUPERLEAGUE</div>
            <div className="h-4 w-72 rounded bg-[#D4AF37]/40" />
          </div>

          <div className="grid grid-cols-4 gap-5">
            {clubs.map((club) => (
              <div
                key={club.id}
                className="p-6 rounded-2xl bg-[#071026] border border-white/15 space-y-3"
              >
                <div className="text-xs font-mono-numbers text-[#D4AF37]">#{club.slotNumber}</div>
                <div className="font-display font-black text-2xl text-white">{club.name}</div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-[#071026] border border-white/15 p-10 h-72" />
        </div>
      </div>

      {/* =====================================================================
          FOREGROUND FROSTED OVERLAY — "به‌زودی / COMING SOON"
          ===================================================================== */}
      <div className="relative z-10 inset-0 w-full h-full flex items-center justify-center px-4 py-20 backdrop-blur-md">
        <div className="max-w-xl w-full rounded-3xl bg-[#060D24]/90 border border-[#D4AF37]/40 p-10 sm:p-14 text-center space-y-6 shadow-[0_30px_100px_rgba(0,0,0,0.9)] animate-panel-enter">
          <div className="w-20 h-20 rounded-2xl bg-[#0C1A42] border border-[#D4AF37]/50 flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(212,175,55,0.2)]">
            <Lock className="w-9 h-9 text-[#D4AF37]" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs font-mono-numbers font-bold uppercase tracking-[0.25em] text-[#FFF3B0]">
            <Star className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span dir="ltr">TMPROCLUBS SUPERLEAGUE</span>
          </div>

          <div className="space-y-2">
            <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
              {lang === 'fa' ? 'به‌زودی' : 'COMING SOON'}
            </h1>
            <div
              dir="ltr"
              className="font-mono-numbers font-bold text-sm sm:text-base tracking-[0.3em] uppercase text-[#D4AF37]"
            >
              {lang === 'fa' ? 'COMING SOON' : 'به‌زودی'}
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => navigateTo('home')}
              className="px-7 py-3.5 rounded-xl bg-[#245BFF] hover:bg-[#1D4ED8] text-white font-display font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{lang === 'fa' ? 'بازگشت به صفحه اصلی' : 'Back to Home'}</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
