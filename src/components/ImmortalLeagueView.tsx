import React, { useState } from 'react';
import {
  Send,
  Shield,
  Calendar,
  BookOpen,
  ArrowUpRight,
  ChevronRight,
  Swords,
  Table2,
} from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';
import { OFFICIAL_ASSETS, OFFICIAL_LINKS } from '../data/tmproData';

type ImmortalTab = 'overview' | 'teams' | 'fixtures' | 'standings' | 'results' | 'rules';

export const ImmortalLeagueView: React.FC = () => {
  const { lang, config } = usePlatform();

  const [activeTab, setActiveTab] = useState<ImmortalTab>('overview');

  const scrollToWorkspace = () => {
    const el = document.getElementById('immortal-workspace');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tabs: { id: ImmortalTab; labelEn: string; labelFa: string }[] = [
    { id: 'overview', labelEn: 'Overview', labelFa: 'اطلاعیه رسمی' },
    { id: 'teams', labelEn: 'Teams', labelFa: 'تیم‌ها' },
    { id: 'fixtures', labelEn: 'Fixtures', labelFa: 'برنامه بازی‌ها' },
    { id: 'standings', labelEn: 'Standings', labelFa: 'جدول' },
    { id: 'results', labelEn: 'Results', labelFa: 'نتایج' },
    { id: 'rules', labelEn: 'Rules', labelFa: 'قوانین' },
  ];

  return (
    <div className="min-h-screen bg-[#030108] text-[#F7F2FF] selection:bg-[#7B2CFF] selection:text-white">
      {/* =====================================================================
          04.A — IMMORTAL HERO (WOLF, GLOWING MOON, ENCHANTED FOREST)
          ===================================================================== */}
      <section className="relative min-h-[82vh] flex items-end lg:items-center overflow-hidden border-b border-[#7B2CFF]/35">
        {/* Background Wolf Artwork */}
        <div className="absolute inset-0">
          <img
            src={OFFICIAL_ASSETS.immortalWolfHero}
            alt="TMPROCLUBS Immortal League Official Artwork"
            className="w-full h-full object-cover object-center scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030108] via-[#080312]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030108] via-[#030108]/45 to-[#030108]/35" />
          <div className="absolute -bottom-24 left-1/3 w-[640px] h-[320px] rounded-full bg-[#7B2CFF]/25 blur-[140px] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-3xl space-y-7 text-start">
            {/* Clean Status Line */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono-numbers uppercase tracking-[0.22em] text-[#C4A5FF]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C4A5FF]" />
              </span>
              <span dir="ltr" className="font-bold text-white">{config.immortalStatus}</span>
              <span className="text-[#7B2CFF]">·</span>
              <span dir="ltr">SEASON 01</span>
              <span className="text-[#7B2CFF]">·</span>
              <span dir="ltr">FREE ENTRY</span>
            </div>

            {/* Main Headline & Tagline */}
            <div className="space-y-3">
              <h1
                dir="ltr"
                className="font-display font-black text-5xl sm:text-7xl xl:text-8xl tracking-tight text-[#F7F2FF] drop-shadow-[0_10px_35px_rgba(123,44,255,0.45)] leading-[0.98]"
              >
                IMMORTAL{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C4A5FF] via-[#A855F7] to-[#7B2CFF]">
                  LEAGUE
                </span>
              </h1>
              <p
                dir="ltr"
                className="font-display font-extrabold text-lg sm:text-2xl tracking-[0.22em] uppercase text-[#C4A5FF]"
              >
                “ONLY THE STRONG REMAIN.”
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={OFFICIAL_LINKS.registrationTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-[#7B2CFF] hover:bg-[#6D28D9] text-white font-display font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_10px_35px_rgba(123,44,255,0.5)] transition-all flex items-center gap-3"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'fa' ? 'ثبت‌نام تیم' : 'Register Your Team'}</span>
              </a>

              <button
                onClick={scrollToWorkspace}
                className="px-8 py-4 rounded-xl bg-[#080312]/85 hover:bg-[#14072B] text-[#F7F2FF] border border-[#A855F7]/45 font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-3 cursor-pointer"
              >
                <span>{lang === 'fa' ? 'اطلاعات تورنمنت' : 'Explore Tournament'}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>

            {/* Official Telegram Channels Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono-numbers">
              <a
                href={OFFICIAL_LINKS.immortalChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C4A5FF] hover:text-white font-bold transition-colors"
              >
                <span dir="ltr">t.me/TM_IMMORTAL</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[#7B2CFF]">·</span>
              <a
                href={OFFICIAL_LINKS.mainChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#F7F2FF] hover:text-[#C4A5FF] font-bold transition-colors"
              >
                <span dir="ltr">t.me/TM_PROCLUBS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04.B — OFFICIAL TOURNAMENT SPECIFICATION STRIP
          ===================================================================== */}
      <div className="bg-[#070210] border-b border-[#7B2CFF]/25">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <div className="text-[10px] font-mono-numbers uppercase tracking-widest text-[#C4A5FF]/70">
              STATUS
            </div>
            <div dir="ltr" className="font-display font-black text-sm sm:text-base text-white mt-0.5">
              UPCOMING
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono-numbers uppercase tracking-widest text-[#C4A5FF]/70">
              REGISTRATION
            </div>
            <div dir="ltr" className="font-display font-black text-sm sm:text-base text-[#C4A5FF] mt-0.5">
              OPEN (FREE ENTRY)
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono-numbers uppercase tracking-widest text-[#C4A5FF]/70">
              SEASON
            </div>
            <div dir="ltr" className="font-mono-numbers font-black text-sm sm:text-base text-white mt-0.5">
              SEASON 01
            </div>
          </div>
          <div>
            <div className="text-[10px] font-mono-numbers uppercase tracking-widest text-[#C4A5FF]/70">
              {lang === 'fa' ? 'تیم‌ها' : 'TEAMS'}
            </div>
            <div className="font-display font-black text-sm sm:text-base text-white mt-0.5">
              {lang === 'fa' ? 'هنوز مشخص نشده' : 'TBA'}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          04.C — SMOOTH INTERNAL COMPETITION TABS & WORKSPACE
          ===================================================================== */}
      <section
        id="immortal-workspace"
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12"
      >
        {/* Segmented Navigation Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 rounded-2xl bg-[#0B041A] border border-[#7B2CFF]/30">
          {tabs.map((t) => {
            const active = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-5 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  active
                    ? 'bg-[#7B2CFF] text-white shadow-[0_4px_20px_rgba(123,44,255,0.45)]'
                    : 'text-[#C4A5FF]/80 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span>{lang === 'fa' ? t.labelFa : t.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* =================================================================
            TAB 1: OVERVIEW (OFFICIAL ANNOUNCEMENT)
            ================================================================= */}
        {activeTab === 'overview' && (
          <div key="overview" className="space-y-8 animate-panel-enter">
            {/* Official Release Card */}
            <div className="rounded-3xl immortal-card-surface border border-[#A855F7]/40 p-8 sm:p-10 space-y-6 shadow-[0_20px_70px_rgba(123,44,255,0.16)]">
              <div className="flex items-center justify-between border-b border-[#7B2CFF]/25 pb-4 text-xs font-mono-numbers text-[#C4A5FF]">
                <span dir="ltr">IMMORTAL CUP — SEASON 01</span>
                <span dir="ltr">REGISTRATION OPEN</span>
              </div>

              <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                {lang === 'fa'
                  ? 'ثبت‌نام فصل اول رقابت‌های IMMORTAL CUP آغاز شد!'
                  : 'Immortal Cup Season 01 Registration Is Open'}
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-[#F7F2FF]/85 leading-relaxed max-w-3xl">
                {lang === 'fa' ? (
                  <>
                    <p>
                      رقابت‌های بزرگ Immortal Cup از روز پنجشنبه، بلافاصله بعد از پایان جام ملت‌ها رسماً استارت می‌خوره و تیم‌ها وارد یک چالش جدی و رقابتی می‌شن.
                    </p>
                    <p className="text-[#C4A5FF] font-semibold">
                      ورودی این فصل کاملاً رایگانه؛ یک فرصت عالی برای تمام تیم‌ها تا بدون هزینه وارد رقابت بشن، خودشون رو محک بزنن و برای قهرمانی بجنگن!
                    </p>
                    <p>
                      ظرفیت محدود است — برای ثبت‌نام تیمتون همین الان اقدام کنید:
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      The Immortal Cup officially kicks off this Thursday, immediately following the conclusion of the Nations League.
                    </p>
                    <p className="text-[#C4A5FF] font-semibold">
                      Entry for Season 01 is 100% free of charge — register your squad at zero cost and compete for the Season 01 title.
                    </p>
                  </>
                )}
              </div>

              <div className="pt-4 border-t border-[#7B2CFF]/25 flex flex-wrap items-center gap-3">
                <a
                  href={OFFICIAL_LINKS.registrationTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-[#7B2CFF] hover:bg-[#6D28D9] text-white font-display font-extrabold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span dir="ltr">Register: @Perez_Himself</span>
                </a>
                <a
                  href={OFFICIAL_LINKS.immortalChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#05020C] hover:bg-[#170936] border border-[#7B2CFF]/40 text-xs font-mono-numbers font-bold text-[#C4A5FF] flex items-center gap-2 transition-all"
                >
                  <span dir="ltr">@TM_IMMORTAL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={OFFICIAL_LINKS.mainChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#05020C] hover:bg-[#170936] border border-[#7B2CFF]/40 text-xs font-mono-numbers font-bold text-white flex items-center gap-2 transition-all"
                >
                  <span dir="ltr">@TM_PROCLUBS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================
            TAB 2: TEAMS (NO TEAMS CONFIRMED YET)
            ================================================================= */}
        {activeTab === 'teams' && (
          <div key="teams" className="animate-panel-enter">
            <div className="rounded-3xl immortal-card-surface border border-[#7B2CFF]/40 p-12 text-center max-w-3xl mx-auto space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-[#7B2CFF]/20 border border-[#A855F7]/50 flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-[#C4A5FF]" />
              </div>
              <div
                dir="ltr"
                className="text-xs font-mono-numbers font-bold uppercase tracking-[0.25em] text-[#C4A5FF]"
              >
                SEASON 01 · TEAMS TBA
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {lang === 'fa'
                  ? 'تیم‌های فصل اول هنوز مشخص نشده‌اند'
                  : 'No Teams Confirmed Yet'}
              </h3>
              <p className="text-sm text-[#C4A5FF]/80 max-w-md mx-auto">
                {lang === 'fa'
                  ? 'ثبت‌نام در حال انجام است و لیست تیم‌ها پس از تکمیل ثبت‌نام اعلام خواهد شد.'
                  : 'Registration is currently open. Participating teams will be announced once registration closes.'}
              </p>
              <div className="pt-2">
                <a
                  href={OFFICIAL_LINKS.registrationTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#7B2CFF] hover:bg-[#6D28D9] text-white font-display font-extrabold text-xs uppercase tracking-wider transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span dir="ltr">Register: @Perez_Himself</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================
            TAB 3: FIXTURES
            ================================================================= */}
        {activeTab === 'fixtures' && (
          <div key="fixtures" className="space-y-6 animate-panel-enter">
            <div className="rounded-3xl immortal-card-surface border border-[#7B2CFF]/40 p-12 text-center max-w-3xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#7B2CFF]/20 border border-[#A855F7]/50 flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-[#C4A5FF]" />
              </div>
              <div
                dir="ltr"
                className="text-xs font-mono-numbers font-bold uppercase tracking-[0.25em] text-[#C4A5FF]"
              >
                STATUS: UPCOMING
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {lang === 'fa'
                  ? 'برنامه بازی‌ها پس از مشخص شدن تیم‌ها اعلام می‌شود'
                  : 'Fixtures Will Be Published After Teams Are Finalized'}
              </h3>
            </div>
          </div>
        )}

        {/* =================================================================
            TAB 4: STANDINGS TABLE
            ================================================================= */}
        {activeTab === 'standings' && (
          <div key="standings" className="animate-panel-enter">
            <div className="rounded-3xl immortal-card-surface border border-[#7B2CFF]/40 p-12 text-center max-w-3xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#7B2CFF]/20 border border-[#A855F7]/50 flex items-center justify-center mx-auto">
                <Table2 className="w-8 h-8 text-[#C4A5FF]" />
              </div>
              <div
                dir="ltr"
                className="text-xs font-mono-numbers font-bold uppercase tracking-[0.25em] text-[#C4A5FF]"
              >
                SEASON 01 · STANDINGS
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {lang === 'fa'
                  ? 'جدول رده‌بندی پس از مشخص شدن تیم‌ها و شروع بازی‌ها فعال می‌شود'
                  : 'Standings Will Be Available Once Teams Are Confirmed'}
              </h3>
            </div>
          </div>
        )}

        {/* =================================================================
            TAB 5: RESULTS
            ================================================================= */}
        {activeTab === 'results' && (
          <div key="results" className="animate-panel-enter">
            <div className="rounded-3xl immortal-card-surface border border-[#7B2CFF]/40 p-12 text-center max-w-3xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#7B2CFF]/20 border border-[#A855F7]/50 flex items-center justify-center mx-auto">
                <Swords className="w-8 h-8 text-[#C4A5FF]" />
              </div>
              <div
                dir="ltr"
                className="text-xs font-mono-numbers font-bold uppercase tracking-[0.25em] text-[#C4A5FF]"
              >
                SEASON 01 · RESULTS
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {lang === 'fa'
                  ? 'هنوز مسابقه‌ای برگزار نشده است'
                  : 'No Matches Played Yet'}
              </h3>
            </div>
          </div>
        )}

        {/* =================================================================
            TAB 6: RULES
            ================================================================= */}
        {activeTab === 'rules' && (
          <div
            key="rules"
            className="rounded-3xl immortal-card-surface border border-[#7B2CFF]/40 p-8 sm:p-10 space-y-8 animate-panel-enter"
          >
            <div className="flex items-center gap-3 border-b border-[#7B2CFF]/30 pb-5">
              <BookOpen className="w-6 h-6 text-[#C4A5FF]" />
              <h3 className="font-display font-black text-2xl text-white">
                {lang === 'fa' ? 'قوانین مسابقات' : 'COMPETITION RULES'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  code: '01 · POINTS SYSTEM',
                  titleEn: 'Win = 3 · Draw = 1 · Loss = 0',
                  titleFa: 'برد ۳ امتیاز · مساوی ۱ امتیاز · باخت ۰ امتیاز',
                  descEn: 'Priority order: 1. Points · 2. Goal Difference · 3. Goals For · 4. Wins.',
                  descFa: 'اولویت رتبه‌بندی: ۱. امتیاز · ۲. تفاضل گل · ۳. گل زده · ۴. تعداد برد.',
                },
                {
                  code: '02 · REGISTRATION',
                  titleEn: 'Free Entry — Season 01',
                  titleFa: 'ورودی رایگان فصل اول',
                  descEn: 'Official registration via @Perez_Himself on Telegram.',
                  descFa: 'ثبت‌نام مستقیم از طریق آیدی @Perez_Himself در تلگرام.',
                },
              ].map((rule) => (
                <div
                  key={rule.code}
                  className="p-6 rounded-2xl bg-[#05020C]/90 border border-[#7B2CFF]/30 space-y-2"
                >
                  <div dir="ltr" className="text-[11px] font-mono-numbers font-bold text-[#C4A5FF]">
                    {rule.code}
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">
                    {lang === 'fa' ? rule.titleFa : rule.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {lang === 'fa' ? rule.descFa : rule.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
