import React from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Trophy,
  Shield,
  Award,
  Send,
  BarChart3,
  Newspaper,
  FileText,
} from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';
import {
  OFFICIAL_ASSETS,
  OFFICIAL_LINKS,
  BALLON_DOR_CATEGORIES,
} from '../data/tmproData';

export const HomeView: React.FC = () => {
  const {
    lang,
    navigateTo,
    clubs,
    news,
    openClubProfile,
    openArticle,
    config,
  } = usePlatform();

  const scrollToCompetitions = () => {
    const el = document.getElementById('competitions-showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050B1B] text-[#F5F7FF]">
      {/* =====================================================================
          03.A — CINEMATIC FULL-SCREEN HERO SECTION (DIRECT & PUNCHY, NO FILLER)
          ===================================================================== */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Stadium Lighting & Atmospheric Background */}
        <div className="absolute inset-0 tm-royal-glow pointer-events-none" />
        <div className="absolute inset-0 tm-grid-pattern opacity-35 pointer-events-none" />

        {/* Subtle Stadium Floodlight Glows */}
        <div className="absolute -top-44 left-1/4 w-[540px] h-[540px] rounded-full bg-[#245BFF]/18 blur-[150px] animate-pulse-subtle pointer-events-none" />
        <div className="absolute -top-36 right-1/4 w-[460px] h-[460px] rounded-full bg-[#60A5FA]/12 blur-[140px] animate-pulse-subtle pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/80 to-transparent pointer-events-none" />

        {/* Architectural Stadium Pitch Vector */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="720" cy="450" r="260" stroke="#245BFF" strokeWidth="1.5" />
          <circle cx="720" cy="450" r="380" stroke="#60A5FA" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="0" y1="450" x2="1440" y2="450" stroke="#245BFF" strokeWidth="1" />
          <path d="M 180 0 L 420 900" stroke="#245BFF" strokeWidth="0.75" />
          <path d="M 1260 0 L 1020 900" stroke="#245BFF" strokeWidth="0.75" />
        </svg>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Hero Typography Column — Direct Brand Headline & Actions Only */}
            <div className="lg:col-span-7 space-y-8 text-start">
              <div className="inline-flex items-center gap-3">
                <img
                  src={OFFICIAL_ASSETS.tmLogo}
                  alt="TMPROCLUBS"
                  className="w-10 h-10 rounded-lg object-cover border border-[#245BFF]/60"
                />
                <span
                  dir="ltr"
                  className="font-mono-numbers font-bold text-xs uppercase tracking-[0.25em] text-[#93C5FD]"
                >
                  TMPROCLUBS · FC 27
                </span>
              </div>

              {/* Main Headline & Tagline */}
              <div className="space-y-4">
                <h1
                  dir="ltr"
                  className="font-display font-black text-5xl sm:text-7xl xl:text-8xl tracking-tight text-white leading-[0.98]"
                >
                  THE HOME OF{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#245BFF] to-[#93C5FD]">
                    FC PRO CLUBS
                  </span>
                </h1>

                <p
                  dir="ltr"
                  className="font-display font-extrabold text-lg sm:text-2xl tracking-[0.22em] uppercase text-[#93C5FD]"
                >
                  COMPETE. PROVE. BECOME IMMORTAL.
                </p>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={scrollToCompetitions}
                  className="px-8 py-4 rounded-xl bg-[#245BFF] hover:bg-[#1D4ED8] text-white font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_10px_30px_rgba(36,91,255,0.4)] transition-all flex items-center gap-3 cursor-pointer"
                >
                  <span>{lang === 'fa' ? 'مشاهده رقابت‌ها' : 'Explore Competitions'}</span>
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </button>

                <button
                  onClick={() => navigateTo('ranking')}
                  className="px-8 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/15 hover:border-[#60A5FA]/50 font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-3 cursor-pointer"
                >
                  <BarChart3 className="w-4 h-4 text-[#60A5FA]" />
                  <span>{lang === 'fa' ? 'رنکینگ تیم‌ها' : 'View Team Rankings'}</span>
                </button>
              </div>
            </div>

            {/* Hero Right Focal Carrier: Active Championship Spotlight */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#081229]/95 border border-white/15 p-6 sm:p-7 shadow-[0_25px_70px_rgba(0,0,0,0.75)] overflow-hidden space-y-5">
                <div className="flex items-center justify-between text-xs font-mono-numbers">
                  <span dir="ltr" className="text-slate-400 uppercase tracking-wider">
                    SEASON 01
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#C4A5FF] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                    {config.immortalStatus}
                  </span>
                </div>

                <div
                  onClick={() => navigateTo('immortal')}
                  className="relative rounded-xl overflow-hidden border border-[#7B2CFF]/45 group cursor-pointer"
                >
                  <img
                    src={OFFICIAL_ASSETS.immortalWolfHero}
                    alt="Immortal League Season 01"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080312] via-[#080312]/35 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div
                        dir="ltr"
                        className="text-[10px] font-mono-numbers font-bold uppercase tracking-[0.2em] text-[#C4A5FF]"
                      >
                        FREE ENTRY · REGISTRATION OPEN
                      </div>
                      <div
                        dir="ltr"
                        className="font-display font-black text-2xl text-white tracking-tight mt-0.5"
                      >
                        IMMORTAL LEAGUE
                      </div>
                    </div>
                    <span className="p-2.5 rounded-lg bg-[#7B2CFF] text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={OFFICIAL_LINKS.registrationTelegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-4 rounded-xl bg-[#7B2CFF] hover:bg-[#6D28D9] text-white font-display font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'fa' ? 'ثبت‌نام تیم' : 'Register Team'}</span>
                  </a>
                  <button
                    onClick={() => navigateTo('immortal')}
                    className="py-3.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-xs font-display font-bold uppercase tracking-wider text-white transition-all cursor-pointer"
                  >
                    {lang === 'fa' ? 'صفحه ایمورتال' : 'Immortal League'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03.B — THREE DISTINCT COMPETITION FEATURE SECTIONS
          ===================================================================== */}
      <section
        id="competitions-showcase"
        className="py-20 lg:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
      >
        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div
              dir="ltr"
              className="text-xs font-mono-numbers font-bold uppercase tracking-[0.22em] text-[#60A5FA]"
            >
              01. OFFICIAL COMPETITIONS
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mt-1.5">
              {lang === 'fa' ? 'رقابت‌ها و جوایز رسمی' : 'COMPETITIONS & HONORS'}
            </h2>
          </div>
        </div>

        {/* 1. IMMORTAL LEAGUE — INDEPENDENT DARK PURPLE & WOLF ATMOSPHERE */}
        <div className="relative rounded-3xl overflow-hidden border border-[#7B2CFF]/45 bg-[#080312] shadow-[0_25px_80px_rgba(123,44,255,0.18)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
            {/* Visual Artwork Column */}
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-full overflow-hidden">
              <img
                src={OFFICIAL_ASSETS.immortalWolfHero}
                alt="Immortal League Official Wolf Artwork"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080312]/15 via-[#080312]/40 to-[#080312] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080312] via-[#080312]/40 to-transparent lg:hidden" />

              <div className="absolute top-6 left-6 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[#030108]/90 backdrop-blur-md border border-[#A855F7]/45">
                <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                <span
                  dir="ltr"
                  className="text-xs font-mono-numbers font-bold uppercase tracking-widest text-[#F7F2FF]"
                >
                  SEASON 01 · REGISTRATION OPEN
                </span>
              </div>
            </div>

            {/* Immortal Content Column */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-gradient-to-b from-[#120626]/90 to-[#080312]">
              <div className="space-y-6">
                <div
                  dir="ltr"
                  className="text-xs font-mono-numbers uppercase tracking-[0.2em] text-[#C4A5FF]"
                >
                  SEASON 01 <span className="mx-1.5 text-[#7B2CFF]">·</span> FREE ENTRY
                </div>

                <div>
                  <h3
                    dir="ltr"
                    className="font-display font-black text-3xl sm:text-5xl text-[#F7F2FF] tracking-tight"
                  >
                    IMMORTAL LEAGUE
                  </h3>
                  <p
                    dir="ltr"
                    className="font-display font-bold text-sm sm:text-base tracking-[0.18em] text-[#A855F7] uppercase mt-2"
                  >
                    “ONLY THE STRONG REMAIN.”
                  </p>
                </div>

                {/* Key Specifications */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#7B2CFF]/25">
                  <div>
                    <div className="text-[10px] font-mono-numbers uppercase text-[#C4A5FF]/75">
                      {lang === 'fa' ? 'وضعیت' : 'STATUS'}
                    </div>
                    <div dir="ltr" className="text-xs font-mono-numbers font-bold text-white mt-0.5">
                      REG. OPEN
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono-numbers uppercase text-[#C4A5FF]/75">
                      {lang === 'fa' ? 'تیم‌ها' : 'TEAMS'}
                    </div>
                    <div className="text-xs font-display font-bold text-white mt-0.5">
                      {lang === 'fa' ? 'هنوز مشخص نشده' : 'TBA'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigateTo('immortal')}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-[#7B2CFF] hover:bg-[#6D28D9] text-white font-display font-extrabold text-xs uppercase tracking-wider shadow-[0_8px_25px_rgba(123,44,255,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{lang === 'fa' ? 'ورود به لیگ ایمورتال' : 'Enter Immortal League'}</span>
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </button>
                <a
                  href={OFFICIAL_LINKS.registrationTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-[#C4A5FF]/30 text-[#F7F2FF] font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#C4A5FF]" />
                  <span>{lang === 'fa' ? 'ثبت‌نام' : 'Register'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2 & 3. ASYMMETRIC PRESTIGE SHOWCASE: SUPERLEAGUE (7 COLS) & TM GLOBE (5 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 2. SUPERLEAGUE — COMING SOON */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#245BFF]/40 bg-[#040817] p-8 sm:p-10 lg:p-12 flex flex-col justify-between shadow-[0_20px_70px_rgba(36,91,255,0.14)]">
            <div className="absolute inset-0 superleague-glow pointer-events-none" />

            <svg
              className="absolute -right-16 -top-16 w-80 h-80 opacity-20 pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle cx="100" cy="100" r="85" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="100" cy="100" r="62" stroke="#245BFF" strokeWidth="1.5" />
              <polygon
                points="100,20 118,74 175,74 129,108 146,162 100,129 54,162 71,108 25,74 82,74"
                stroke="#D4AF37"
                strokeWidth="1.2"
                fill="rgba(36,91,255,0.08)"
              />
            </svg>

            <div className="relative z-10 space-y-6">
              <div
                dir="ltr"
                className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-[0.2em] text-[#93C5FD]"
              >
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span>SUPERLEAGUE</span>
                <span className="text-slate-600">·</span>
                <span className="text-[#F3E5AB] font-bold">
                  {lang === 'fa' ? 'به‌زودی' : 'COMING SOON'}
                </span>
              </div>

              <div>
                <h3
                  dir="ltr"
                  className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight"
                >
                  SUPERLEAGUE
                </h3>
                <p
                  dir="ltr"
                  className="font-display font-bold text-sm sm:text-base tracking-[0.18em] text-[#D4AF37] uppercase mt-2"
                >
                  {lang === 'fa' ? 'به‌زودی' : 'COMING SOON'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#071029]/90 border border-white/10 flex items-center justify-between">
                <div className="text-xs sm:text-sm font-display font-bold text-white">
                  {lang === 'fa' ? 'به‌زودی' : 'COMING SOON'}
                </div>
                <Trophy className="w-6 h-6 text-[#D4AF37] shrink-0" />
              </div>
            </div>

            <div className="relative z-10 pt-8 flex items-center justify-between gap-4 border-t border-white/10 mt-8">
              <div dir="ltr" className="text-xs text-slate-400 font-mono-numbers">
                {lang === 'fa' ? 'به‌زودی' : 'COMING SOON'}
              </div>
              <button
                onClick={() => navigateTo('superleague')}
                className="px-6 py-3.5 rounded-xl bg-[#245BFF] hover:bg-[#1D4ED8] text-white font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{lang === 'fa' ? 'ورود به سوپرلیگ' : 'Enter Superleague'}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* 3. TM GLOBE — LUXURY BLACK & METALLIC CHAMPAGNE GOLD CEREMONY */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-[#D4AF37]/35 bg-[#050507] p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_70px_rgba(212,175,55,0.12)]">
            <div className="absolute inset-0 ballondor-glow pointer-events-none" />

            <div className="relative z-10 space-y-5">
              <div
                dir="ltr"
                className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-[0.2em] text-[#D4AF37]"
              >
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>TM GLOBE</span>
                <span className="text-slate-600">·</span>
                <span className="text-[#FFF3B0] font-bold">10 AWARDS</span>
              </div>

              <div>
                <h3
                  dir="ltr"
                  className="font-display font-black text-3xl sm:text-4xl gold-metallic-text tracking-tight"
                >
                  TM GLOBE
                </h3>
                <p
                  dir="ltr"
                  className="font-display font-bold text-xs sm:text-sm tracking-[0.2em] text-[#E5C158] uppercase mt-2"
                >
                  “MORE THAN A GAME”
                </p>
              </div>

              {/* Clean Award Categories List */}
              <div className="pt-3 space-y-2 border-t border-[#D4AF37]/20">
                {BALLON_DOR_CATEGORIES.slice(0, 5).map((cat) => (
                  <div
                    key={cat.id}
                    className="flex items-center justify-between text-xs py-1 text-slate-300"
                  >
                    <span className="font-medium text-[#F3E5AB]">
                      {lang === 'fa' ? cat.titleFa : cat.titleEn}
                    </span>
                    <span dir="ltr" className="font-mono-numbers text-[11px] text-[#D4AF37]/80">
                      {cat.nominees.length > 0 ? `${cat.nominees.length} NOMINEES` : cat.code}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-[#D4AF37]/20 flex items-center justify-between gap-4">
              <div dir="ltr" className="text-xs text-[#E5C158] font-mono-numbers">
                10 CATEGORIES
              </div>
              <button
                onClick={() => navigateTo('ballondor')}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050507] font-display font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{lang === 'fa' ? 'ورود به TM Globe' : 'Enter TM Globe'}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03.C — FC27 RANKINGS PREVIEW (NO LOGOS) & LATEST NEWS
          ===================================================================== */}
      <section className="py-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* FC27 Team Ranking Preview (7 Columns) — Team Names Only */}
          <div className="lg:col-span-7 rounded-3xl bg-[#081229] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <div
                    dir="ltr"
                    className="text-xs font-mono-numbers font-bold uppercase tracking-[0.2em] text-[#60A5FA]"
                  >
                    02. FC27 RANKING
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                    {lang === 'fa'
                      ? 'رنکینگ تیم‌های FC27 در ایونت‌های قبلی'
                      : 'FC27 TEAM RANKING (PREVIOUS EVENTS)'}
                  </h3>
                </div>
                <div dir="ltr" className="text-xs font-mono-numbers font-bold text-[#60A5FA]">
                  OFFICIAL RANKING
                </div>
              </div>

              <div className="divide-y divide-white/10">
                {clubs.map((club, index) => {
                  const rank = index + 1;
                  return (
                    <div
                      key={club.id}
                      onClick={() => openClubProfile(club)}
                      className="py-3.5 px-3 flex items-center justify-between hover:bg-white/[0.04] transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          dir="ltr"
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-mono-numbers font-black text-xs ${
                            rank === 1
                              ? 'bg-[#D4AF37] text-[#050B1B]'
                              : rank === 2
                              ? 'bg-slate-300 text-[#050B1B]'
                              : rank === 3
                              ? 'bg-amber-600 text-white'
                              : 'bg-[#245BFF]/20 text-white border border-[#245BFF]/40'
                          }`}
                        >
                          {String(rank).padStart(2, '0')}
                        </span>
                        <div
                          dir="ltr"
                          className="font-display font-black text-white group-hover:text-[#60A5FA] transition-colors text-base sm:text-lg"
                        >
                          {club.name}
                        </div>
                      </div>
                      <span
                        dir="ltr"
                        className="text-xs font-mono-numbers font-bold text-slate-400"
                      >
                        RANK #{String(rank).padStart(2, '0')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-end gap-4">
              <button
                onClick={() => navigateTo('ranking')}
                className="px-5 py-2.5 rounded-xl bg-[#245BFF] hover:bg-[#1D4ED8] text-white font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{lang === 'fa' ? 'مشاهده کامل رنکینگ' : 'Full FC27 Ranking'}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Official Announcements (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="rounded-3xl bg-[#081229] border border-white/10 p-6 sm:p-8 space-y-5 flex-1">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <Newspaper className="w-5 h-5 text-[#60A5FA]" />
                  <h3 className="font-display font-black text-xl text-white">
                    {lang === 'fa' ? 'اخبار و اطلاعیه‌ها' : 'ANNOUNCEMENTS'}
                  </h3>
                </div>
                <button
                  onClick={() => navigateTo('news')}
                  className="text-xs font-mono-numbers font-bold uppercase tracking-wider text-[#60A5FA] hover:text-white cursor-pointer"
                >
                  {lang === 'fa' ? 'همه اخبار' : 'View All'}
                </button>
              </div>

              <div className="space-y-4">
                {news.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => openArticle(item)}
                    className="group rounded-2xl bg-[#050B1B]/90 border border-white/10 hover:border-[#245BFF]/50 p-5 space-y-2 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono-numbers text-slate-400">
                      <span dir="ltr" className="text-[#93C5FD] font-semibold">
                        {lang === 'fa' ? item.categoryFa : item.category}
                      </span>
                      <span>
                        {lang === 'fa' ? item.publishedLabelFa : item.publishedLabelEn}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base text-white group-hover:text-[#60A5FA] transition-colors leading-snug">
                      {lang === 'fa' ? item.titleFa : item.titleEn}
                    </h4>
                    <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-[#60A5FA]">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{lang === 'fa' ? 'مشاهده اطلاعیه' : 'Open Announcement'}</span>
                      <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
