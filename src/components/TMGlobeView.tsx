import React, { useState } from 'react';
import {
  Trophy,
  Award,
  Crown,
  Star,
  Medal,
  ArrowUpRight,
  ChevronRight,
  Send,
} from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';
import { OFFICIAL_ASSETS, OFFICIAL_LINKS } from '../data/tmproData';

type GlobeArchiveTab =
  | 'all'
  | 'champions'
  | 'tournaments'
  | 'special'
  | 'historic'
  | 'featured';

/**
 * Custom Royal & Silver Trophy Emblem SVG for TM GLOBE
 */
const RoyalGlobeTrophyGraphic: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg viewBox="0 0 160 160" fill="none" className={className} aria-label="TM Globe Royal Trophy">
    <defs>
      <linearGradient id="globeSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="45%" stopColor="#BFC6E5" />
        <stop offset="100%" stopColor="#60A5FA" />
      </linearGradient>
      <linearGradient id="globeRoyalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" />
        <stop offset="50%" stopColor="#245BFF" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>
    {/* Outer Meridian Ring */}
    <circle
      cx="80"
      cy="72"
      r="48"
      stroke="url(#globeSilverGrad)"
      strokeWidth="1.5"
      strokeDasharray="4 6"
    />
    {/* Globe Latitude & Longitude */}
    <ellipse cx="80" cy="72" rx="48" ry="18" stroke="url(#globeRoyalGrad)" strokeWidth="1.4" />
    <ellipse cx="80" cy="72" rx="22" ry="48" stroke="url(#globeSilverGrad)" strokeWidth="1.4" />
    {/* Central Star Crest */}
    <polygon
      points="80,46 86,64 104,70 86,76 80,94 74,76 56,70 74,64"
      fill="url(#globeSilverGrad)"
    />
    {/* Pedestal Base */}
    <path d="M64 122H96L104 140H56L64 122Z" fill="url(#globeSilverGrad)" opacity="0.85" />
    <rect x="48" y="140" width="64" height="10" rx="5" fill="url(#globeRoyalGrad)" />
  </svg>
);

export const TMGlobeView: React.FC = () => {
  const { lang, navigateTo } = usePlatform();
  const [activeCategory, setActiveCategory] = useState<GlobeArchiveTab>('all');

  const hallPillars = [
    {
      id: 'champions' as GlobeArchiveTab,
      code: 'ARCHIVE 01',
      titleEn: 'Competition Champions',
      titleFa: 'قهرمانان رقابت‌ها (Competition Champions)',
      descEn: 'Official title holders of flagship TMPROCLUBS leagues and seasons.',
      descFa: 'فهرست رسمی تیم‌های قهرمان در لیگ‌ها و فصل‌های اصلی TMPROCLUBS.',
      icon: <Crown className="w-6 h-6 text-[#BFC6E5]" />,
    },
    {
      id: 'tournaments' as GlobeArchiveTab,
      code: 'ARCHIVE 02',
      titleEn: 'Tournament Winners',
      titleFa: 'برندگان تورنمنت‌ها (Tournament Winners)',
      descEn: 'Knockout cup victors, Supercup winners, and special event champions.',
      descFa: 'قهرمانان جام‌های حذفی، سوپرکاپ قهرمانان و رویدادهای ویژه.',
      icon: <Trophy className="w-6 h-6 text-[#60A5FA]" />,
    },
    {
      id: 'special' as GlobeArchiveTab,
      code: 'ARCHIVE 03',
      titleEn: 'Special Awards',
      titleFa: 'جوایز ویژه فردی (Special Awards)',
      descEn: 'Individual honors celebrating exceptional player and managerial excellence.',
      descFa: 'تقدیر از برترین عملکردهای فردی بازیکنان و مربیان در طول فصل.',
      icon: <Award className="w-6 h-6 text-[#BFC6E5]" />,
    },
    {
      id: 'historic' as GlobeArchiveTab,
      code: 'ARCHIVE 04',
      titleEn: 'Historic Achievements',
      titleFa: 'دستاوردهای تاریخی (Historic Achievements)',
      descEn: 'Unbeaten runs, record-breaking campaigns, and milestone moments.',
      descFa: 'رکوردهای ماندگار، قهرمانی‌های بدون شکست و لحظات تاریخی اکوسیستم.',
      icon: <Medal className="w-6 h-6 text-[#60A5FA]" />,
    },
    {
      id: 'featured' as GlobeArchiveTab,
      code: 'ARCHIVE 05',
      titleEn: 'Featured Winners',
      titleFa: 'برندگان منتخب (Featured Winners)',
      descEn: 'Spotlighted champions and official hall-of-fame inductees.',
      descFa: 'ویترین افتخارات قهرمانان برتر و چهره‌های ماندگار مجموعه.',
      icon: <Star className="w-6 h-6 text-[#BFC6E5]" />,
    },
  ];

  const displayedPillars =
    activeCategory === 'all'
      ? hallPillars
      : hallPillars.filter((p) => p.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#04091A] text-[#F5F7FF]">
      {/* =====================================================================
          09.A — TM GLOBE ROYAL BLUE, DARK NAVY & SILVER HERO
          ===================================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 py-16 lg:py-24">
        <div className="absolute inset-0 tm-royal-glow pointer-events-none" />
        <div className="absolute inset-0 tm-grid-pattern pointer-events-none" />
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[720px] h-[360px] rounded-full bg-[#245BFF]/20 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6 text-start">
              <div className="flex flex-wrap items-center gap-3">
                <RoyalGlobeTrophyGraphic className="w-16 h-16 shrink-0" />
                <div>
                  <div
                    dir="ltr"
                    className="text-xs font-mono-numbers font-bold uppercase tracking-[0.26em] text-[#93C5FD]"
                  >
                    TMPROCLUBS HALL OF HONORS & ARCHIVE
                  </div>
                  <div
                    dir="ltr"
                    className="text-xs font-mono-numbers text-[#BFC6E5] mt-0.5"
                  >
                    OFFICIAL WINNERS & ACHIEVEMENTS
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h1
                  dir="ltr"
                  className="font-display font-black text-5xl sm:text-7xl xl:text-8xl tracking-tight silver-metallic-text leading-[0.96]"
                >
                  TM GLOBE
                </h1>
                <p
                  dir="ltr"
                  className="font-display font-extrabold text-lg sm:text-2xl tracking-[0.22em] uppercase text-[#93C5FD]"
                >
                  “WHERE CHAMPIONS ARE REMEMBERED.”
                </p>
              </div>

              <p className="text-sm sm:text-lg text-[#BFC6E5] max-w-2xl leading-relaxed">
                {lang === 'fa'
                  ? 'بررسی قهرمانان، برندگان تورنمنت‌ها و دستاوردهای برجسته در اکوسیستم رقابتی TMPROCLUBS.'
                  : '“Discover the champions, winners, and outstanding achievements across the TMPROCLUBS competitive ecosystem.”'}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={OFFICIAL_LINKS.mainChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#245BFF] to-[#1D4ED8] hover:brightness-110 text-white font-display font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_12px_35px_rgba(36,91,255,0.45)] transition-all inline-flex items-center gap-3"
                >
                  <span>{lang === 'fa' ? 'مشاهده برندگان رسمی (VIEW OFFICIAL WINNERS)' : 'VIEW OFFICIAL WINNERS'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => navigateTo('ballondor')}
                  className="px-7 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-[#D4AF37]/45 text-[#FFF3B0] font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all inline-flex items-center gap-2.5 cursor-pointer"
                >
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>{lang === 'fa' ? 'نامزدهای ۱۰ جایزه فردی (Ballon d’Or)' : 'Ballon d’Or & 10 Individual Nominees'}</span>
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>

            {/* Right Column: Official Telegram Channel Preview Card */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl broadcast-card border border-[#60A5FA]/35 p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={OFFICIAL_ASSETS.tmLogo}
                      alt="TMPROCLUBS"
                      className="w-11 h-11 rounded-xl object-cover border border-[#245BFF]/60"
                    />
                    <div>
                      <div dir="ltr" className="font-display font-black text-base text-white">
                        TMPROCLUBS
                      </div>
                      <div dir="ltr" className="font-mono-numbers text-xs text-[#60A5FA]">
                        @TM_Proclubs
                      </div>
                    </div>
                  </div>
                  <span
                    dir="ltr"
                    className="px-2.5 py-1 rounded-lg bg-[#245BFF]/20 border border-[#60A5FA]/40 text-[10px] font-mono-numbers font-bold text-[#93C5FD]"
                  >
                    TELEGRAM
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#BFC6E5] leading-relaxed">
                  {lang === 'fa'
                    ? 'تمامی اطلاعیه‌های رسمی قهرمانان، برندگان جوایز و آرشیو افتخارات TMPROCLUBS از طریق چنل رسمی تلگرام منتشر می‌شود.'
                    : 'Follow the official TMPROCLUBS Telegram channel for verified winner announcements, trophy presentations, and championship records.'}
                </p>

                <a
                  href={OFFICIAL_LINKS.mainChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-[#245BFF] hover:bg-[#1D4ED8] text-white font-display font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span dir="ltr">VIEW OFFICIAL WINNERS (@TM_Proclubs)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          09.B — 5 OFFICIAL ARCHIVE PILLARS & HISTORICAL EMPTY STATE
          ===================================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 space-y-12">
        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto p-1.5 rounded-2xl bg-[#071026] border border-white/10">
          {[
            { id: 'all' as GlobeArchiveTab, labelEn: 'All Honors (05)', labelFa: 'همه بخش‌ها (۰۵)' },
            { id: 'champions' as GlobeArchiveTab, labelEn: 'Competition Champions', labelFa: 'قهرمانان رقابت‌ها' },
            { id: 'tournaments' as GlobeArchiveTab, labelEn: 'Tournament Winners', labelFa: 'برندگان تورنمنت‌ها' },
            { id: 'special' as GlobeArchiveTab, labelEn: 'Special Awards', labelFa: 'جوایز ویژه' },
            { id: 'historic' as GlobeArchiveTab, labelEn: 'Historic Achievements', labelFa: 'دستاوردهای تاریخی' },
            { id: 'featured' as GlobeArchiveTab, labelEn: 'Featured Winners', labelFa: 'برندگان منتخب' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#245BFF] text-white shadow-[0_4px_20px_rgba(36,91,255,0.4)]'
                  : 'text-[#BFC6E5] hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {lang === 'fa' ? tab.labelFa : tab.labelEn}
            </button>
          ))}
        </div>

        {/* 5 Archive Areas */}
        <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-panel-enter">
          {displayedPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-3xl broadcast-card border border-[#60A5FA]/25 hover:border-[#60A5FA]/60 p-7 flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span dir="ltr" className="text-xs font-mono-numbers font-bold text-[#60A5FA]">
                    {pillar.code}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10">
                    {pillar.icon}
                  </div>
                </div>

                <h3 className="font-display font-black text-2xl text-white tracking-tight">
                  {lang === 'fa' ? pillar.titleFa : pillar.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-[#BFC6E5] leading-relaxed">
                  {lang === 'fa' ? pillar.descFa : pillar.descEn}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div
                  dir="ltr"
                  className="text-xs font-display font-extrabold tracking-wider uppercase text-[#93C5FD]"
                >
                  “THE NEXT CHAMPIONS WILL BE REMEMBERED HERE.”
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central Historical Archive Empty State Banner */}
        <div className="rounded-3xl broadcast-card border border-[#BFC6E5]/30 p-10 sm:p-14 text-center space-y-6">
          <div className="flex justify-center">
            <RoyalGlobeTrophyGraphic className="w-20 h-20" />
          </div>

          <div
            dir="ltr"
            className="text-xs font-mono-numbers font-bold uppercase tracking-[0.28em] text-[#93C5FD]"
          >
            OFFICIAL TMPROCLUBS CHAMPIONS ARCHIVE
          </div>

          <h2
            dir="ltr"
            className="font-display font-black text-2xl sm:text-4xl silver-metallic-text tracking-tight max-w-2xl mx-auto"
          >
            “THE NEXT CHAMPIONS WILL BE REMEMBERED HERE.”
          </h2>

          <p className="text-sm sm:text-base text-[#BFC6E5] max-w-xl mx-auto leading-relaxed">
            {lang === 'fa'
              ? 'با پایان هر تورنمنت و اعلام نتایج نهایی در چنل رسمی TMPROCLUBS، نام قهرمانان و برندگان جوایز برای همیشه در این بخش ثبت خواهد شد.'
              : 'As official competitions conclude, verified champions and award recipients will be permanently enshrined in the TM Globe archive.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={OFFICIAL_LINKS.mainChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-[#245BFF] hover:bg-[#1D4ED8] text-white font-display font-black text-xs uppercase tracking-wider inline-flex items-center gap-2.5 shadow-[0_10px_30px_rgba(36,91,255,0.4)] transition-all"
            >
              <span>{lang === 'fa' ? 'مشاهده برندگان رسمی (@TM_Proclubs)' : 'VIEW OFFICIAL WINNERS'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
