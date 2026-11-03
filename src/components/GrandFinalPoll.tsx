import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Shield, CheckCircle2, Swords } from 'lucide-react';
import { GRAND_FINAL_MATCH, NationalTeam } from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { Flag } from './Flag';

interface GrandFinalPollProps {
  lang: Language;
  onSelectTeam?: (team: NationalTeam) => void;
}

export const GrandFinalPoll: React.FC<GrandFinalPollProps> = ({ lang, onSelectTeam }) => {
  const t = translations[lang];
  const isRtl = lang === 'fa';

  const team1 = GRAND_FINAL_MATCH.team1;
  const team2 = GRAND_FINAL_MATCH.team2;

  return (
    <motion.section
      id="final-poll"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-12 md:py-20 overflow-hidden border-b border-blue-950/80"
    >
      {/* Background Stadium Spotlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-yellow-400/10 to-blue-500/15 border border-amber-400/30 text-amber-300 text-xs font-black tracking-wider uppercase mb-3.5">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>{isRtl ? 'دیدار رسمی فینال بزرگ' : 'OFFICIAL GRAND FINAL MATCH'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.votePromptTitle}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-300">
            {t.votePromptSubtitle}
          </p>
        </div>

        {/* Grand Final Match Arena Card */}
        <div className="bg-[#0A1432]/95 border-2 border-amber-400/40 rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.55)] relative overflow-hidden backdrop-blur-xl">
          {/* Top Golden Accent Stripe */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 via-amber-400 to-emerald-500" />

          {/* Match Status Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-8 border-b border-blue-900/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-start">
                <div className="text-xs font-black text-amber-400 uppercase tracking-wider">
                  {isRtl ? 'فینالیست‌ها قطعی شدند' : 'FINALISTS CONFIRMED'}
                </div>
                <div className="text-sm font-bold text-white">
                  {isRtl ? 'مسیر رسیدن به جام تکمیل شد • ایتالیا در برابر برزیل 🏆' : 'The road to the trophy is complete. Italy vs Brazil. 🏆'}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-xl bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs font-black tracking-wide">
                {t.bestOfThreeNotice}
              </span>
            </div>
          </div>

          {/* Centerpiece Matchup Banner: ITALY vs BRAZIL */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center my-2">
            {/* Team 1: ITALY */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-950/90 via-[#07112B] to-blue-900/30 border border-blue-500/40 hover:border-blue-400 rounded-2xl p-6 transition-all shadow-lg flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start">
                <div
                  onClick={() => onSelectTeam && onSelectTeam(team1)}
                  className="cursor-pointer transition-transform hover:scale-105 shrink-0"
                >
                  <Flag country={team1.flagCountry} size="lg" className="rounded-xl shadow-xl" />
                </div>
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-500/20 border border-blue-400/30 text-sky-300 text-[11px] font-black uppercase tracking-wider mb-1">
                    <Shield className="w-3 h-3" />
                    <span>{isRtl ? 'فینالیست اول' : 'Finalist 1'}</span>
                  </div>
                  <h3
                    onClick={() => onSelectTeam && onSelectTeam(team1)}
                    className="text-2xl sm:text-3xl font-black text-white cursor-pointer hover:text-amber-300 transition-colors"
                  >
                    🇮🇹 {isRtl ? team1.nameFa : team1.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 font-mono">
                    ITA • {isRtl ? 'گروه B' : 'Group B'}
                  </p>
                </div>
              </div>

              {/* Road to Final: Italy */}
              <div className="mt-6 pt-4 border-t border-blue-900/60 space-y-2.5 text-xs">
                <div className="text-[11px] font-black text-sky-400 uppercase tracking-wider mb-2">
                  {isRtl ? 'مسیر صعود به فینال:' : 'Road to the Grand Final:'}
                </div>

                <div className="bg-blue-950/70 border border-blue-900/60 rounded-xl p-3 space-y-1">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{isRtl ? 'یک‌چهارم نهایی (مقابل آرژانتین 🇦🇷)' : 'Quarter-Finals (vs Argentina 🇦🇷)'}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px]">
                      2 - 0
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {isRtl
                      ? 'بازی ۱: ایتالیا ۲-۰ آرژانتین | بازی ۲: ایتالیا ۵-۱ آرژانتین'
                      : 'Match 1: ITA 2–0 ARG | Match 2: ITA 5–1 ARG'}
                  </div>
                </div>

                <div className="bg-blue-950/70 border border-blue-900/60 rounded-xl p-3 space-y-1">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{isRtl ? 'نیمه‌نهایی (مقابل هلند 🇳🇱)' : 'Semi-Finals (vs Netherlands 🇳🇱)'}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px]">
                      2 - 1
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {isRtl
                      ? 'بازی ۱: ۳-۰ (فنی) | بازی ۲: ۱-۲ | بازی ۳: ۰-۰ (۴-۲ پنالتی)'
                      : 'M1: 3–0 (Tech) | M2: 1–2 | M3: 0–0 (4–2 PEN)'}
                  </div>
                </div>
              </div>
            </div>

            {/* Center VS Badge */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center py-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-600 text-slate-950 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.45)] border-2 border-amber-200">
                <Swords className="w-5 h-5 mb-0.5" />
                <span className="text-base font-black tracking-tighter leading-none">VS</span>
              </div>
            </div>

            {/* Team 2: BRAZIL */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-950/90 via-[#07112B] to-amber-950/25 border border-amber-500/40 hover:border-amber-400 rounded-2xl p-6 transition-all shadow-lg flex flex-col justify-between">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-start">
                <div
                  onClick={() => onSelectTeam && onSelectTeam(team2)}
                  className="cursor-pointer transition-transform hover:scale-105 shrink-0"
                >
                  <Flag country={team2.flagCountry} size="lg" className="rounded-xl shadow-xl" />
                </div>
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-400/20 border border-amber-400/30 text-amber-300 text-[11px] font-black uppercase tracking-wider mb-1">
                    <Shield className="w-3 h-3" />
                    <span>{isRtl ? 'فینالیست دوم' : 'Finalist 2'}</span>
                  </div>
                  <h3
                    onClick={() => onSelectTeam && onSelectTeam(team2)}
                    className="text-2xl sm:text-3xl font-black text-white cursor-pointer hover:text-amber-300 transition-colors"
                  >
                    🇧🇷 {isRtl ? team2.nameFa : team2.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 font-mono">
                    BRA • {isRtl ? 'گروه B' : 'Group B'}
                  </p>
                </div>
              </div>

              {/* Road to Final: Brazil */}
              <div className="mt-6 pt-4 border-t border-blue-900/60 space-y-2.5 text-xs">
                <div className="text-[11px] font-black text-amber-400 uppercase tracking-wider mb-2">
                  {isRtl ? 'مسیر صعود به فینال:' : 'Road to the Grand Final:'}
                </div>

                <div className="bg-blue-950/70 border border-blue-900/60 rounded-xl p-3 space-y-1">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{isRtl ? 'یک‌چهارم نهایی (مقابل آمریکا 🇺🇸)' : 'Quarter-Finals (vs USA 🇺🇸)'}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px]">
                      2 - 0
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {isRtl
                      ? 'بازی ۱: برزیل ۱-۰ آمریکا | بازی ۲: ۱-۱ (۵-۳ پنالتی)'
                      : 'Match 1: BRA 1–0 USA | Match 2: 1–1 (5–3 PEN)'}
                  </div>
                </div>

                <div className="bg-blue-950/70 border border-blue-900/60 rounded-xl p-3 space-y-1">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>{isRtl ? 'نیمه‌نهایی (مقابل اسرائیل 🇮🇱)' : 'Semi-Finals (vs Israel 🇮🇱)'}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px]">
                      2 - 1
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {isRtl
                      ? 'بازی ۱: ۱-۲ اسرائیل | بازی ۲: ۱-۰ برزیل | بازی ۳: ۱-۰ برزیل'
                      : 'M1: 1–2 ISR | M2: 1–0 BRA | M3: 1–0 BRA'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Official Match Footer Bar */}
          <div className="mt-8 pt-5 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
            <div className="inline-flex items-center gap-2 font-bold text-emerald-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>
                {isRtl
                  ? 'فینال بزرگ لیگ ملت‌های TM PROCLUB: ایتالیا 🇮🇹 در برابر برزیل 🇧🇷'
                  : 'TM PROCLUB Nations League Grand Final: Italy 🇮🇹 vs Brazil 🇧🇷'}
              </span>
            </div>
            <div className="text-slate-400 font-mono">
              {isRtl ? 'وضعیت: فینالیست‌ها مشخص شدند' : 'Status: Finalists Confirmed'}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
