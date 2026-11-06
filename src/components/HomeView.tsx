import React, { useState } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Trophy,
  Shield,
  Award,
  BarChart3,
  Newspaper,
  FileText,
  Crown,
  Maximize2,
  X,
} from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';
import {
  OFFICIAL_ASSETS,
  OFFICIAL_LINKS,
  BALLON_DOR_CATEGORIES,
  BallonDorCategory,
} from '../data/tmproData';

export const HomeView: React.FC = () => {
  const {
    lang,
    navigateTo,
    clubs,
    news,
    openClubProfile,
    openArticle,
  } = usePlatform();

  // Categories that have official TM Globe posters
  const posterCategories = BALLON_DOR_CATEGORIES.filter((c) => Boolean(c.posterImage));
  const [activePosterIdx, setActivePosterIdx] = useState(0);
  const [heroMode, setHeroMode] = useState<'globe' | 'top5'>('globe');
  const [homeRankTier, setHomeRankTier] = useState<'all' | 'top5' | 'top10'>('all');
  const [lightboxPoster, setLightboxPoster] = useState<BallonDorCategory | null>(null);

  const currentPosterCat = posterCategories[activePosterIdx] || BALLON_DOR_CATEGORIES[0];

  const nextPoster = () => {
    setActivePosterIdx((prev) => (prev + 1) % posterCategories.length);
  };

  const prevPoster = () => {
    setActivePosterIdx((prev) => (prev - 1 + posterCategories.length) % posterCategories.length);
  };

  const displayedHomeClubs =
    homeRankTier === 'top5'
      ? clubs.slice(0, 5)
      : homeRankTier === 'top10'
      ? clubs.slice(0, 10)
      : clubs;

  return (
    <div className="min-h-screen bg-[#030712] text-[#F5F7FF]">
      {/* =====================================================================
          03.A — CINEMATIC STADIUM BROADCAST HERO
          ===================================================================== */}
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden border-b border-white/10">
        {/* Volumetric Stadium Floodlight Beams & Royal Atmosphere */}
        <div className="absolute inset-0 tm-royal-glow pointer-events-none" />
        <div className="absolute inset-0 tm-grid-pattern pointer-events-none" />

        {/* Animated Sweeping Stadium Light Shafts */}
        <div
          className="absolute -top-40 left-[8%] w-[520px] h-[760px] bg-gradient-to-b from-[#3B82F6]/22 via-[#245BFF]/8 to-transparent blur-[90px] pointer-events-none animate-beam-left"
          style={{ transformOrigin: 'top center' }}
        />
        <div
          className="absolute -top-40 right-[8%] w-[520px] h-[760px] bg-gradient-to-b from-[#D4AF37]/16 via-[#245BFF]/10 to-transparent blur-[95px] pointer-events-none animate-beam-right"
          style={{ transformOrigin: 'top center' }}
        />

        {/* Center Pitch Geometry */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.11] pointer-events-none"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="pitchGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#245BFF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <ellipse cx="720" cy="540" rx="480" ry="190" stroke="url(#pitchGlow)" strokeWidth="1.5" />
          <ellipse cx="720" cy="540" rx="240" ry="95" stroke="#60A5FA" strokeWidth="1" strokeDasharray="6 8" />
          <line x1="0" y1="540" x2="1440" y2="540" stroke="url(#pitchGlow)" strokeWidth="1" />
          <path d="M 140 900 L 520 220" stroke="#245BFF" strokeWidth="0.9" strokeOpacity="0.5" />
          <path d="M 1300 900 L 920 220" stroke="#245BFF" strokeWidth="0.9" strokeOpacity="0.5" />
        </svg>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:py-20 w-full my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: High-Impact Broadcast Identity & Podium Quick Strip */}
            <div className="lg:col-span-7 space-y-8 text-start">
              <div className="inline-flex items-center gap-3.5 px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                <img
                  src={OFFICIAL_ASSETS.tmLogo}
                  alt="TMPROCLUBS"
                  className="w-9 h-9 rounded-lg object-cover border border-[#245BFF]/60 shadow-[0_0_20px_rgba(36,91,255,0.45)]"
                />
                <span
                  dir="ltr"
                  className="font-mono-numbers font-bold text-xs uppercase tracking-[0.25em] text-[#93C5FD]"
                >
                  TMPROCLUBS
                </span>
                <span className="text-slate-600">·</span>
                <span
                  dir="ltr"
                  className="font-mono-numbers font-bold text-xs uppercase tracking-[0.2em] text-[#FDE047]"
                >
                  FC 27
                </span>
              </div>

              {/* Main Headline & Tagline */}
              <div className="space-y-4">
                <h1
                  dir="ltr"
                  className="font-display font-black text-5xl sm:text-7xl xl:text-[5.4rem] tracking-tight text-white leading-[0.95] drop-shadow-[0_12px_40px_rgba(36,91,255,0.3)]"
                >
                  THE HOME OF{' '}
                  <span className="royal-metallic-text block sm:inline">
                    FC PRO CLUBS
                  </span>
                </h1>

                <p
                  dir="ltr"
                  className="font-display font-extrabold text-base sm:text-2xl tracking-[0.24em] uppercase text-[#93C5FD]"
                >
                  COMPETE. PROVE. BECOME IMMORTAL.
                </p>
              </div>

              {/* Interactive Top 3 Ranked Podium Strip (Names Only — Zero Logos) */}
              <div className="pt-1 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono-numbers uppercase tracking-[0.2em] text-slate-400">
                  <span>
                    {lang === 'fa' ? '۳ تیم صدرنشین رنکینگ FC27' : 'FC27 RANKING LEADERS (TOP 3)'}
                  </span>
                  <button
                    onClick={() => navigateTo('ranking')}
                    className="text-[#60A5FA] hover:text-white font-bold flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{lang === 'fa' ? 'مشاهده ۱۷ تیم' : 'All 17 Teams'}</span>
                    <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {clubs.slice(0, 3).map((club, idx) => {
                    const rank = idx + 1;
                    return (
                      <button
                        key={club.id}
                        onClick={() => openClubProfile(club)}
                        className={`group relative rounded-2xl p-4 text-start transition-all duration-300 cursor-pointer border ${
                          rank === 1
                            ? 'bg-gradient-to-br from-[#D4AF37]/20 via-[#0B1633] to-[#060D20] border-[#D4AF37]/55 hover:border-[#FDE047] shadow-[0_10px_30px_rgba(212,175,55,0.18)]'
                            : rank === 2
                            ? 'bg-[#09142E]/90 border-slate-300/30 hover:border-slate-200/60'
                            : 'bg-[#09142E]/90 border-amber-500/30 hover:border-amber-400/60'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            dir="ltr"
                            className={`px-2 py-0.5 rounded-md font-mono-numbers font-black text-[11px] ${
                              rank === 1
                                ? 'bg-[#D4AF37] text-[#030712]'
                                : rank === 2
                                ? 'bg-slate-300 text-[#030712]'
                                : 'bg-amber-600 text-white'
                            }`}
                          >
                            #{String(rank).padStart(2, '0')}
                          </span>
                          <Crown
                            className={`w-4 h-4 ${
                              rank === 1
                                ? 'text-[#FDE047]'
                                : rank === 2
                                ? 'text-slate-300'
                                : 'text-amber-500'
                            }`}
                          />
                        </div>
                        <div
                          dir="ltr"
                          className="font-display font-black text-lg text-white group-hover:text-[#60A5FA] transition-colors truncate"
                        >
                          {club.name}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigateTo('ranking')}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#245BFF] to-[#1D4ED8] hover:brightness-110 text-white font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_12px_35px_rgba(36,91,255,0.45)] transition-all flex items-center gap-3 cursor-pointer"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>{lang === 'fa' ? 'رنکینگ تیم‌های FC27' : 'FC27 Team Ranking'}</span>
                </button>

                <button
                  onClick={() => navigateTo('ballondor')}
                  className="px-8 py-4 rounded-xl bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-[#FFF3B0] border border-[#D4AF37]/50 font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-3 cursor-pointer shadow-[0_10px_30px_rgba(212,175,55,0.18)]"
                >
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>{lang === 'fa' ? 'مراسم TM Globe' : 'TM Globe Awards'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Dual-Mode Broadcast Showcase */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl broadcast-card-gold border border-[#D4AF37]/45 p-5 sm:p-6 space-y-5 relative overflow-hidden">
                {/* Switcher Tabs inside Hero Card */}
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div className="inline-flex items-center p-1 rounded-xl bg-black/60 border border-white/10">
                    <button
                      onClick={() => setHeroMode('globe')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-display font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                        heroMode === 'globe'
                          ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050507]'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      TM GLOBE
                    </button>
                    <button
                      onClick={() => setHeroMode('top5')}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-display font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                        heroMode === 'top5'
                          ? 'bg-[#245BFF] text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      TOP 5 FC27
                    </button>
                  </div>

                  {heroMode === 'globe' && (
                    <div className="flex items-center gap-1.5" dir="ltr">
                      <button
                        onClick={prevPoster}
                        className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.14] border border-[#D4AF37]/35 text-[#FFF3B0] transition-colors cursor-pointer"
                        aria-label="Previous Award Poster"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="font-mono-numbers text-xs font-bold text-[#D4AF37] px-1.5">
                        {String(activePosterIdx + 1).padStart(2, '0')}/{String(posterCategories.length).padStart(2, '0')}
                      </span>
                      <button
                        onClick={nextPoster}
                        className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.14] border border-[#D4AF37]/35 text-[#FFF3B0] transition-colors cursor-pointer"
                        aria-label="Next Award Poster"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {heroMode === 'globe' ? (
                  <div key={currentPosterCat.id} className="space-y-4 animate-panel-enter">
                    <div
                      onClick={() => setLightboxPoster(currentPosterCat)}
                      className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/50 group cursor-pointer bg-black"
                    >
                      <img
                        src={currentPosterCat.posterImage}
                        alt={currentPosterCat.titleEn}
                        className="w-full h-64 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/30 to-transparent" />

                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-[#D4AF37]/45 text-[11px] font-mono-numbers text-[#FFF3B0] flex items-center gap-1.5">
                        <Maximize2 className="w-3 h-3 text-[#D4AF37]" />
                        <span>{lang === 'fa' ? 'بزرگ‌نمایی' : 'Expand'}</span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                        <div>
                          <div
                            dir="ltr"
                            className="text-[10px] font-mono-numbers font-bold uppercase tracking-[0.2em] text-[#F3E5AB]"
                          >
                            {currentPosterCat.code} · {currentPosterCat.nominees.length} NOMINEES
                          </div>
                          <div
                            dir="ltr"
                            className="font-display font-black text-2xl gold-metallic-text tracking-tight mt-0.5"
                          >
                            {currentPosterCat.titleEn}
                          </div>
                        </div>
                        <span className="p-2.5 rounded-xl bg-[#D4AF37] text-[#050507] shadow-lg">
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    {/* Poster Dots Selector */}
                    <div className="flex items-center justify-center gap-1.5" dir="ltr">
                      {posterCategories.map((cat, idx) => (
                        <button
                          key={cat.id}
                          onClick={() => setActivePosterIdx(idx)}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            idx === activePosterIdx
                              ? 'w-7 bg-[#D4AF37]'
                              : 'w-2 bg-white/20 hover:bg-white/40'
                          }`}
                          aria-label={cat.titleEn}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => navigateTo('ballondor')}
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] hover:brightness-110 text-[#050507] font-display font-extrabold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Award className="w-4 h-4" />
                      <span>
                        {lang === 'fa'
                          ? 'ورود به صفحه نامزدهای TM Globe'
                          : 'Explore All 10 TM Globe Awards'}
                      </span>
                    </button>
                  </div>
                ) : (
                  <div key="top5" className="space-y-3 animate-panel-enter">
                    <div className="divide-y divide-white/10 rounded-2xl bg-[#050B1B]/90 border border-white/10 overflow-hidden">
                      {clubs.slice(0, 5).map((club, index) => {
                        const rank = index + 1;
                        return (
                          <div
                            key={club.id}
                            onClick={() => openClubProfile(club)}
                            className="px-4 py-3.5 flex items-center justify-between hover:bg-[#245BFF]/15 transition-colors cursor-pointer group"
                          >
                            <div className="flex items-center gap-3.5">
                              <span
                                dir="ltr"
                                className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-mono-numbers font-black text-xs ${
                                  rank === 1
                                    ? 'bg-[#D4AF37] text-[#050B1B]'
                                    : rank === 2
                                    ? 'bg-slate-300 text-[#050B1B]'
                                    : rank === 3
                                    ? 'bg-amber-600 text-white'
                                    : 'bg-[#245BFF]/25 text-white border border-[#245BFF]/50'
                                }`}
                              >
                                {String(rank).padStart(2, '0')}
                              </span>
                              <span
                                dir="ltr"
                                className="font-display font-black text-base text-white group-hover:text-[#60A5FA] transition-colors"
                              >
                                {club.name}
                              </span>
                            </div>
                            <span
                              dir="ltr"
                              className="text-[11px] font-mono-numbers font-bold text-[#93C5FD]"
                            >
                              RANK #{String(rank).padStart(2, '0')}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => navigateTo('ranking')}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#245BFF] hover:bg-[#1D4ED8] text-white font-display font-extrabold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <BarChart3 className="w-4 h-4" />
                      <span>
                        {lang === 'fa'
                          ? 'مشاهده کامل ۱۷ تیم رنکینگ FC27'
                          : 'View Full 17-Team FC27 Ranking'}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Broadcast Highlights Strip */}
        <div className="relative z-10 bg-[#060E24]/90 border-t border-white/10 backdrop-blur-md">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <button
              onClick={() => openClubProfile(clubs[0])}
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-all text-start cursor-pointer group"
            >
              <div>
                <div className="text-[10px] font-mono-numbers uppercase tracking-widest text-[#FDE047]">
                  {lang === 'fa' ? 'رتبه اول رنکینگ FC27' : 'FC27 RANK #01 LEADER'}
                </div>
                <div dir="ltr" className="font-display font-black text-base sm:text-lg text-white group-hover:text-[#FDE047] transition-colors mt-0.5">
                  01 — {clubs[0]?.name}
                </div>
              </div>
              <Trophy className="w-5 h-5 text-[#D4AF37] shrink-0" />
            </button>

            <button
              onClick={() => navigateTo('ranking')}
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-all text-start cursor-pointer group"
            >
              <div>
                <div className="text-[10px] font-mono-numbers uppercase tracking-widest text-[#60A5FA]">
                  {lang === 'fa' ? 'رنکینگ رسمی تیم‌ها' : 'OFFICIAL FC27 STANDINGS'}
                </div>
                <div dir="ltr" className="font-display font-black text-base sm:text-lg text-white group-hover:text-[#60A5FA] transition-colors mt-0.5">
                  {clubs.length} RANKED TEAMS
                </div>
              </div>
              <BarChart3 className="w-5 h-5 text-[#60A5FA] shrink-0" />
            </button>

            <button
              onClick={() => navigateTo('ballondor')}
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-all text-start cursor-pointer group"
            >
              <div>
                <div className="text-[10px] font-mono-numbers uppercase tracking-widest text-[#F3E5AB]">
                  {lang === 'fa' ? 'جوایز فردی سال' : 'ANNUAL INDIVIDUAL HONORS'}
                </div>
                <div dir="ltr" className="font-display font-black text-base sm:text-lg gold-metallic-text mt-0.5">
                  TM GLOBE · 10 AWARDS
                </div>
              </div>
              <Award className="w-5 h-5 text-[#D4AF37] shrink-0" />
            </button>

            <button
              onClick={() => navigateTo('superleague')}
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-all text-start cursor-pointer group"
            >
              <div>
                <div className="text-[10px] font-mono-numbers uppercase tracking-widest text-slate-400">
                  SUPERLEAGUE
                </div>
                <div className="font-display font-black text-base sm:text-lg text-white group-hover:text-[#93C5FD] transition-colors mt-0.5">
                  {lang === 'fa' ? 'به‌زودی' : 'COMING SOON'}
                </div>
              </div>
              <Shield className="w-5 h-5 text-[#245BFF] shrink-0" />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03.B — INTERACTIVE TM GLOBE GALLERY & SUPERLEAGUE SHOWCASE
          ===================================================================== */}
      <section
        id="competitions-showcase"
        className="py-20 lg:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
      >
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div
              dir="ltr"
              className="text-xs font-mono-numbers font-bold uppercase tracking-[0.22em] text-[#D4AF37]"
            >
              01. OFFICIAL HONORS & COMPETITIONS
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mt-1.5">
              {lang === 'fa' ? 'مراسم TM Globe و سوپرلیگ' : 'TM GLOBE & SUPERLEAGUE'}
            </h2>
          </div>

          <button
            onClick={() => navigateTo('ballondor')}
            className="self-start sm:self-end px-5 py-2.5 rounded-xl bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/40 text-xs font-display font-bold uppercase tracking-wider text-[#FFF3B0] flex items-center gap-2 cursor-pointer transition-all"
          >
            <span>{lang === 'fa' ? 'همه نامزدهای TM Globe' : 'All TM Globe Nominees'}</span>
            <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 1. TM GLOBE — INTERACTIVE LUXURY GALA SHOWCASE (8 COLS) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-[#D4AF37]/45 broadcast-card-gold p-6 sm:p-10 flex flex-col justify-between">
            <div className="absolute inset-0 ballondor-glow pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div
                    dir="ltr"
                    className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-[0.2em] text-[#D4AF37]"
                  >
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                    <span>TM GLOBE</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-[#FFF3B0] font-bold">MORE THAN A GAME</span>
                  </div>
                  <h3
                    dir="ltr"
                    className="font-display font-black text-3xl sm:text-5xl gold-metallic-text tracking-tight mt-1"
                  >
                    TM GLOBE AWARDS
                  </h3>
                </div>

                <button
                  onClick={() => navigateTo('ballondor')}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050507] font-display font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer shadow-[0_8px_25px_rgba(212,175,55,0.25)]"
                >
                  <span>{lang === 'fa' ? 'ورود به TM Globe' : 'Enter TM Globe'}</span>
                  <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>

              {/* Interactive Category Selector Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2" dir="ltr">
                {posterCategories.map((cat, idx) => {
                  const isSelected = idx === activePosterIdx;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActivePosterIdx(idx)}
                      className={`px-3.5 py-2 rounded-xl font-display font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#D4AF37] text-[#050507] border-[#FFF3B0] shadow-[0_0_20px_rgba(212,175,55,0.35)]'
                          : 'bg-black/50 text-[#F3E5AB]/80 border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:text-white'
                      }`}
                    >
                      {cat.titleEn}
                    </button>
                  );
                })}
              </div>

              {/* Active Poster & Nominee Preview Split */}
              <div
                key={currentPosterCat.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2 animate-panel-enter"
              >
                <div className="md:col-span-7">
                  <div
                    onClick={() => setLightboxPoster(currentPosterCat)}
                    className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/45 bg-black group cursor-pointer shadow-[0_15px_45px_rgba(0,0,0,0.85)]"
                  >
                    <img
                      src={currentPosterCat.posterImage}
                      alt={currentPosterCat.titleEn}
                      className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/85 border border-[#D4AF37]/50 text-[11px] font-mono-numbers text-[#FFF3B0] flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{lang === 'fa' ? 'بزرگ‌نمایی پوستر' : 'Full Poster'}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-[#D4AF37]/25 pb-2.5">
                    <span className="text-xs font-mono-numbers font-bold text-[#F3E5AB]">
                      {lang === 'fa' ? currentPosterCat.titleFa : currentPosterCat.titleEn}
                    </span>
                    <span dir="ltr" className="text-xs font-mono-numbers font-bold text-[#D4AF37]">
                      {currentPosterCat.nominees.length} NOMINEES
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1" dir="ltr">
                    {currentPosterCat.nominees.slice(0, 12).map((nom, i) => (
                      <div
                        key={nom}
                        className="px-2.5 py-2 rounded-lg bg-black/60 border border-[#D4AF37]/20 text-xs font-display font-bold text-white truncate flex items-center gap-1.5"
                      >
                        <span className="font-mono-numbers text-[10px] text-[#D4AF37]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="truncate">{nom}</span>
                      </div>
                    ))}
                  </div>

                  {currentPosterCat.nominees.length > 12 && (
                    <button
                      onClick={() => navigateTo('ballondor')}
                      className="w-full py-2 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-xs font-mono-numbers font-bold text-[#FFF3B0] cursor-pointer transition-colors"
                    >
                      + {currentPosterCat.nominees.length - 12} MORE NOMINEES
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 2. SUPERLEAGUE — COMING SOON (4 COLS) */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden border border-[#245BFF]/45 broadcast-card p-8 sm:p-10 flex flex-col justify-between">
            <div className="absolute inset-0 superleague-glow pointer-events-none" />

            <svg
              className="absolute -right-16 -top-16 w-72 h-72 opacity-25 pointer-events-none"
              viewBox="0 0 200 200"
              fill="none"
            >
              <circle cx="100" cy="100" r="85" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="100" cy="100" r="62" stroke="#245BFF" strokeWidth="1.5" />
              <polygon
                points="100,20 118,74 175,74 129,108 146,162 100,129 54,162 71,108 25,74 82,74"
                stroke="#D4AF37"
                strokeWidth="1.2"
                fill="rgba(36,91,255,0.12)"
              />
            </svg>

            <div className="relative z-10 space-y-6">
              <div
                dir="ltr"
                className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-[0.2em] text-[#93C5FD]"
              >
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span>SUPERLEAGUE</span>
              </div>

              <div>
                <h3
                  dir="ltr"
                  className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight"
                >
                  SUPERLEAGUE
                </h3>
                <p
                  dir="ltr"
                  className="font-display font-bold text-sm sm:text-base tracking-[0.2em] text-[#D4AF37] uppercase mt-2"
                >
                  {lang === 'fa' ? 'به‌زودی' : 'COMING SOON'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#050B1B]/90 border border-white/10 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono-numbers uppercase tracking-widest text-slate-400">
                    STATUS
                  </div>
                  <div className="text-base font-display font-black text-white">
                    {lang === 'fa' ? 'به‌زودی' : 'COMING SOON'}
                  </div>
                </div>
                <Trophy className="w-7 h-7 text-[#D4AF37] shrink-0" />
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
              <button
                onClick={() => navigateTo('superleague')}
                className="w-full py-3.5 px-6 rounded-xl bg-[#245BFF] hover:bg-[#1D4ED8] text-white font-display font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_8px_25px_rgba(36,91,255,0.35)]"
              >
                <span>{lang === 'fa' ? 'ورود به سوپرلیگ' : 'Enter Superleague'}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03.C — FC27 RANKING (17 TEAMS — NAMES ONLY, ZERO LOGOS) & ANNOUNCEMENTS
          ===================================================================== */}
      <section className="py-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* FC27 Team Ranking (8 Columns) — Team Names Only */}
          <div className="lg:col-span-8 rounded-3xl broadcast-card border border-white/15 p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <div
                    dir="ltr"
                    className="text-xs font-mono-numbers font-bold uppercase tracking-[0.2em] text-[#60A5FA]"
                  >
                    02. FC27 RANKING (01–17)
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                    {lang === 'fa'
                      ? 'رنکینگ تیم‌های FC27 در ایونت‌های قبلی'
                      : 'FC27 TEAM RANKING (PREVIOUS EVENTS)'}
                  </h3>
                </div>

                {/* Quick Tier Filter on Home */}
                <div className="inline-flex items-center p-1 rounded-xl bg-[#030712] border border-white/10 self-start">
                  {[
                    { id: 'all' as const, labelEn: 'All (17)', labelFa: 'همه (۱۷)' },
                    { id: 'top5' as const, labelEn: 'Top 5', labelFa: '۵ برتر' },
                    { id: 'top10' as const, labelEn: 'Top 10', labelFa: '۱۰ برتر' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setHomeRankTier(tab.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        homeRankTier === tab.id
                          ? 'bg-[#245BFF] text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {lang === 'fa' ? tab.labelFa : tab.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {displayedHomeClubs.map((club) => {
                  const rank = Number(club.slotNumber);
                  return (
                    <div
                      key={club.id}
                      onClick={() => openClubProfile(club)}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all cursor-pointer group ${
                        rank === 1
                          ? 'bg-gradient-to-r from-[#D4AF37]/15 to-[#060E24] border-[#D4AF37]/50 hover:border-[#FDE047]'
                          : rank <= 3
                          ? 'bg-[#071330] border-[#245BFF]/40 hover:border-[#60A5FA]'
                          : 'bg-[#050B1B]/90 border-white/10 hover:border-[#245BFF]/50 hover:bg-[#091533]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span
                          dir="ltr"
                          className={`inline-flex items-center justify-center w-9 h-9 rounded-xl font-mono-numbers font-black text-xs shrink-0 ${
                            rank === 1
                              ? 'bg-[#D4AF37] text-[#030712] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                              : rank === 2
                              ? 'bg-slate-300 text-[#030712]'
                              : rank === 3
                              ? 'bg-amber-600 text-white'
                              : 'bg-[#245BFF]/20 text-white border border-[#245BFF]/40'
                          }`}
                        >
                          {club.slotNumber}
                        </span>
                        <div
                          dir="ltr"
                          className="font-display font-black text-white group-hover:text-[#60A5FA] transition-colors text-base sm:text-lg truncate"
                        >
                          {club.name}
                        </div>
                      </div>
                      <span
                        dir="ltr"
                        className="text-[11px] font-mono-numbers font-bold text-slate-400 group-hover:text-white transition-colors shrink-0"
                      >
                        #{club.slotNumber}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span dir="ltr" className="text-xs font-mono-numbers text-slate-400">
                OFFICIAL FC27 CUMULATIVE RANKING
              </span>
              <button
                onClick={() => navigateTo('ranking')}
                className="px-5 py-2.5 rounded-xl bg-[#245BFF] hover:bg-[#1D4ED8] text-white font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{lang === 'fa' ? 'صفحه اختصاصی رنکینگ' : 'Full Ranking Page'}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Official Announcements & Community Hub (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="rounded-3xl broadcast-card border border-white/15 p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-5">
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
                    {lang === 'fa' ? 'همه' : 'All'}
                  </button>
                </div>

                <div className="space-y-4">
                  {news.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => openArticle(item)}
                      className="group rounded-2xl bg-[#050B1B]/95 border border-white/10 hover:border-[#D4AF37]/50 overflow-hidden transition-all cursor-pointer"
                    >
                      {item.imageAsset && (
                        <div className="h-40 overflow-hidden relative">
                          <img
                            src={item.imageAsset}
                            alt={item.titleEn}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-transparent to-transparent" />
                        </div>
                      )}
                      <div className="p-5 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-mono-numbers text-slate-400">
                          <span dir="ltr" className="text-[#F3E5AB] font-semibold">
                            {lang === 'fa' ? item.categoryFa : item.category}
                          </span>
                          <span>
                            {lang === 'fa' ? item.publishedLabelFa : item.publishedLabelEn}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-base text-white group-hover:text-[#FDE047] transition-colors leading-snug">
                          {lang === 'fa' ? item.titleFa : item.titleEn}
                        </h4>
                        <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-[#60A5FA]">
                          <FileText className="w-3.5 h-3.5" />
                          <span>{lang === 'fa' ? 'مشاهده اطلاعیه' : 'Read Announcement'}</span>
                          <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={OFFICIAL_LINKS.mainChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 text-xs font-mono-numbers font-bold text-white flex items-center justify-between transition-all"
              >
                <span dir="ltr">TELEGRAM: @TM_PROCLUBS</span>
                <ArrowUpRight className="w-4 h-4 text-[#60A5FA]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for TM Globe Poster on Home */}
      {lightboxPoster && lightboxPoster.posterImage && (
        <div
          onClick={() => setLightboxPoster(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-panel-enter"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-[#080705] border border-[#D4AF37]/50 shadow-[0_25px_100px_rgba(0,0,0,0.95)]"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4AF37]/30 bg-[#120F09]">
              <div dir="ltr" className="font-display font-black text-lg text-[#FFF3B0]">
                TM GLOBE · {lightboxPoster.titleEn}
              </div>
              <button
                onClick={() => setLightboxPoster(null)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                aria-label="Close Poster"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-black flex items-center justify-center">
              <img
                src={lightboxPoster.posterImage}
                alt={lightboxPoster.titleEn}
                className="max-h-[80vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
