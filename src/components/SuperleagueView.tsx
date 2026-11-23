import React, { useState, useMemo } from 'react';
import {
  Send,
  ChevronRight,
  Trophy,
  Shield,
  Calendar,
  Table2,
  Swords,
  BarChart3,
  BookOpen,
  Newspaper,
  Crown,
  Layers,
  CheckCircle2,
  Clock,
  Maximize2,
  X,
} from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';
import {
  OFFICIAL_ASSETS,
  OFFICIAL_LINKS,
  SUPERLEAGUE_LEAGUE_1_CLUBS,
  SUPERLEAGUE_LEAGUE_2_CLUBS,
  SUPERLEAGUE_SORTED_RESULTS,
  SUPERLEAGUE_WEEKLY_SCHEDULE,
  calculateSuperleagueDivisionStandings,
  SuperleagueDivisionId,
  SuperleagueStandingRow,
  SuperleaguePairingResult,
} from '../data/tmproData';

type InfinityTab =
  | 'overview'
  | 'standings'
  | 'results'
  | 'schedule'
  | 'elite'
  | 'league2'
  | 'supercup'
  | 'rules'
  | 'news';

type DivisionSubTab = 'standings' | 'results' | 'fixtures' | 'teams' | 'statistics';

/**
 * Custom Original Celestial Infinity Emblem
 */
const InfinityCelestialEmblem: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    className={className}
    aria-label="Superleague Infinity Celestial Emblem"
  >
    <defs>
      <linearGradient id="infPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F4F2FF" />
        <stop offset="35%" stopColor="#C5A6FF" />
        <stop offset="70%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#743CFF" />
      </linearGradient>
      <linearGradient id="infSilverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#BFC6E5" />
        <stop offset="100%" stopColor="#743CFF" />
      </linearGradient>
    </defs>

    <circle
      cx="80"
      cy="80"
      r="70"
      stroke="url(#infSilverGrad)"
      strokeWidth="1.2"
      strokeDasharray="5 7"
      opacity="0.65"
    />
    <ellipse
      cx="80"
      cy="80"
      rx="66"
      ry="28"
      transform="rotate(-24 80 80)"
      stroke="url(#infPurpleGrad)"
      strokeWidth="1.5"
      opacity="0.8"
    />
    <ellipse
      cx="80"
      cy="80"
      rx="66"
      ry="28"
      transform="rotate(24 80 80)"
      stroke="url(#infSilverGrad)"
      strokeWidth="1.2"
      opacity="0.55"
    />
    <path
      d="M52 64C39 64 30 71 30 80C30 89 39 96 52 96C66 96 74 80 80 80C86 80 94 64 108 64C121 64 130 71 130 80C130 89 121 96 108 96C94 96 86 80 80 80C74 80 66 64 52 64Z"
      stroke="url(#infPurpleGrad)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <polygon
      points="80,14 84,26 96,30 84,34 80,46 76,34 64,30 76,26"
      fill="url(#infSilverGrad)"
    />
    <circle cx="80" cy="80" r="4.5" fill="#F4F2FF" />
    <circle cx="24" cy="56" r="2.5" fill="#C5A6FF" />
    <circle cx="136" cy="104" r="2.5" fill="#BFC6E5" />
  </svg>
);

/**
 * Custom Original Supercup Celestial Trophy SVG
 */
const SupercupTrophyGraphic: React.FC<{ className?: string }> = ({ className = 'w-28 h-28' }) => (
  <svg viewBox="0 0 160 180" fill="none" className={className} aria-label="Champions Supercup Trophy">
    <defs>
      <linearGradient id="trophyCrownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="40%" stopColor="#BFC6E5" />
        <stop offset="75%" stopColor="#C5A6FF" />
        <stop offset="100%" stopColor="#743CFF" />
      </linearGradient>
    </defs>
    <ellipse
      cx="80"
      cy="68"
      rx="58"
      ry="20"
      stroke="url(#trophyCrownGrad)"
      strokeWidth="1.5"
      strokeDasharray="4 5"
    />
    <polygon
      points="80,12 85,26 99,31 85,36 80,50 75,36 61,31 75,26"
      fill="url(#trophyCrownGrad)"
    />
    <path
      d="M46 46C46 82 62 104 80 118C98 104 114 82 114 46L98 54C95 78 88 92 80 100C72 92 65 78 62 54L46 46Z"
      fill="url(#trophyCrownGrad)"
    />
    <path
      d="M73 118H87L92 148H68L73 118Z"
      fill="url(#trophyCrownGrad)"
      opacity="0.9"
    />
    <rect x="52" y="148" width="56" height="12" rx="6" fill="url(#trophyCrownGrad)" />
  </svg>
);

export const SuperleagueView: React.FC = () => {
  const { lang, news, openArticle } = usePlatform();
  const [activeTab, setActiveTab] = useState<InfinityTab>('overview');
  const [eliteSubTab, setEliteSubTab] = useState<DivisionSubTab>('standings');
  const [league2SubTab, setLeague2SubTab] = useState<DivisionSubTab>('standings');

  // Interactive Filters to keep Results & Upcoming Schedule clean & uncluttered
  const [selectedResultsWeek, setSelectedResultsWeek] = useState<number | 'all'>('all');
  const [selectedResultsDivision, setSelectedResultsDivision] = useState<'all' | SuperleagueDivisionId>('all');
  const [selectedScheduleWeek, setSelectedScheduleWeek] = useState<number>(4);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const league1Standings = useMemo(
    () => calculateSuperleagueDivisionStandings('league1'),
    []
  );
  const league2Standings = useMemo(
    () => calculateSuperleagueDivisionStandings('league2'),
    []
  );

  const scrollToPortal = (tab?: InfinityTab) => {
    if (tab) setActiveTab(tab);
    const el = document.getElementById('superleague-infinity-portal');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navTabs: { id: InfinityTab; labelEn: string; labelFa: string }[] = [
    { id: 'overview', labelEn: 'OVERVIEW', labelFa: 'نمای کلی و جدول' },
    { id: 'standings', labelEn: 'STANDINGS (L1 & L2)', labelFa: 'جدول لیگ ۱ و ۲' },
    { id: 'results', labelEn: 'MATCH RESULTS', labelFa: 'نتایج بازی‌ها' },
    { id: 'schedule', labelEn: 'WEEKLY SCHEDULE', labelFa: 'برنامه هفتگی (۱ تا ۷)' },
    { id: 'elite', labelEn: 'LEAGUE 1', labelFa: 'لیگ ۱ (LEAGUE 1)' },
    { id: 'league2', labelEn: 'LEAGUE 2', labelFa: 'لیگ ۲ (LEAGUE 2)' },
    { id: 'supercup', labelEn: 'SUPERCUP', labelFa: 'سوپرکاپ قهرمانان' },
    { id: 'rules', labelEn: 'RULES', labelFa: 'قوانین' },
    { id: 'news', labelEn: 'NEWS', labelFa: 'اخبار' },
  ];

  const divisionSubTabs: {
    id: DivisionSubTab;
    labelEn: string;
    labelFa: string;
    icon: React.ReactNode;
  }[] = [
    { id: 'standings', labelEn: 'Standings', labelFa: 'جدول رده‌بندی', icon: <Table2 className="w-4 h-4" /> },
    { id: 'results', labelEn: 'Results', labelFa: 'نتایج ثبت‌شده', icon: <Swords className="w-4 h-4" /> },
    { id: 'fixtures', labelEn: 'Fixtures (W1–W7)', labelFa: 'برنامه ۷ هفته', icon: <Calendar className="w-4 h-4" /> },
    { id: 'teams', labelEn: 'Teams', labelFa: 'تیم‌ها', icon: <Shield className="w-4 h-4" /> },
    { id: 'statistics', labelEn: 'Statistics', labelFa: 'آمار', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  /**
   * Reusable Broadcast Standings Table for League 1 or League 2 (Mobile & Desktop Optimized)
   */
  const renderStandingsTable = (
    division: SuperleagueDivisionId,
    rows: SuperleagueStandingRow[]
  ) => {
    const isLeague1 = division === 'league1';
    return (
      <div
        className={`rounded-3xl overflow-hidden border transition-all ${
          isLeague1
            ? 'infinity-elite-surface border-[#BFC6E5]/45 shadow-[0_20px_60px_rgba(116,60,255,0.2)]'
            : 'infinity-card-surface border-[#743CFF]/45 shadow-[0_20px_60px_rgba(0,0,0,0.65)]'
        }`}
      >
        {/* Table Header Bar */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 bg-[#050611]/70">
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center border ${
                isLeague1
                  ? 'bg-[#BFC6E5]/15 border-[#BFC6E5]/45 text-[#F4F2FF]'
                  : 'bg-[#743CFF]/25 border-[#A855F7]/50 text-[#C5A6FF]'
              }`}
            >
              {isLeague1 ? <Crown className="w-4 h-4 sm:w-5 sm:h-5" /> : <Layers className="w-4 h-4 sm:w-5 sm:h-5" />}
            </div>
            <div>
              <div
                dir="ltr"
                className="text-[10px] font-mono-numbers font-bold uppercase tracking-[0.22em] text-[#C5A6FF]"
              >
                SUPERLEAGUE INFINITY · {isLeague1 ? 'DIVISION 01' : 'DIVISION 02'}
              </div>
              <h3
                dir="ltr"
                className={`font-display font-black text-lg sm:text-2xl tracking-tight ${
                  isLeague1 ? 'silver-metallic-text' : 'text-[#F4F2FF]'
                }`}
              >
                {isLeague1
                  ? lang === 'fa'
                    ? 'جدول لیگ ۱ (LEAGUE 1)'
                    : 'LEAGUE 1 STANDINGS'
                  : lang === 'fa'
                  ? 'جدول لیگ ۲ (LEAGUE 2)'
                  : 'LEAGUE 2 STANDINGS'}
              </h3>
            </div>
          </div>

          <span
            dir="ltr"
            className="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 font-mono-numbers font-bold text-[10px] sm:text-[11px] uppercase tracking-wider flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>WEEK 3 COMPLETED</span>
          </span>
        </div>

        {/* Standings Table */}
        <div className="overflow-x-auto" dir="ltr">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-[#050611]/90 text-[10px] sm:text-[11px] font-mono-numbers font-bold uppercase tracking-wider text-[#BFC6E5]">
                <th className="py-3 pl-3.5 sm:pl-5 pr-1.5 w-10">#</th>
                <th className="py-3 px-2 sm:px-3">CLUB</th>
                <th className="py-3 px-1.5 sm:px-2.5 text-center" title="Matches Played">
                  MP
                </th>
                <th className="py-3 px-1.5 sm:px-2.5 text-center text-emerald-400" title="Wins">
                  W
                </th>
                <th className="py-3 px-1.5 sm:px-2.5 text-center text-amber-300" title="Draws">
                  D
                </th>
                <th className="py-3 px-1.5 sm:px-2.5 text-center text-rose-400" title="Losses">
                  L
                </th>
                <th className="py-3 px-2 text-center hidden sm:table-cell" title="Goals For">
                  GF
                </th>
                <th className="py-3 px-2 text-center hidden sm:table-cell" title="Goals Against">
                  GA
                </th>
                <th className="py-3 px-1.5 sm:px-2.5 text-center" title="Goal Difference">
                  GD
                </th>
                <th className="py-3 pl-1.5 pr-3.5 sm:px-3 text-center text-[#F4F2FF]" title="Points">
                  PTS
                </th>
                <th className="py-3 pl-2 pr-5 text-right hidden md:table-cell">FORM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
              {rows.map((row) => {
                const isTop1 = row.rank === 1;
                const isTop2 = row.rank === 2;
                return (
                  <tr
                    key={row.club.id}
                    className={`transition-colors ${
                      isTop1
                        ? 'bg-gradient-to-r from-[#743CFF]/25 via-[#743CFF]/10 to-transparent hover:bg-[#743CFF]/30'
                        : isTop2
                        ? 'bg-white/[0.03] hover:bg-white/[0.07]'
                        : 'hover:bg-white/[0.04]'
                    }`}
                  >
                    <td className="py-3 pl-3.5 sm:pl-5 pr-1.5 font-mono-numbers font-black">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[11px] sm:text-xs ${
                          isTop1
                            ? 'bg-gradient-to-br from-[#F4F2FF] to-[#C5A6FF] text-[#050611] shadow-[0_0_15px_rgba(197,166,255,0.5)]'
                            : isTop2
                            ? 'bg-[#743CFF]/40 text-white border border-[#C5A6FF]/50'
                            : 'bg-white/[0.06] text-[#BFC6E5]'
                        }`}
                      >
                        {String(row.rank).padStart(2, '0')}
                      </span>
                    </td>

                    <td className="py-3 px-2 sm:px-3">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="font-display font-black text-white tracking-wide text-xs sm:text-base whitespace-nowrap">
                          {row.club.name}
                        </span>
                        {isTop1 && (
                          <Crown className="w-3.5 h-3.5 text-[#C5A6FF] shrink-0" />
                        )}
                      </div>
                    </td>

                    <td className="py-3 px-1.5 sm:px-2.5 text-center font-mono-numbers font-bold text-[#BFC6E5]">
                      {row.played}
                    </td>
                    <td className="py-3 px-1.5 sm:px-2.5 text-center font-mono-numbers font-bold text-emerald-400">
                      {row.wins}
                    </td>
                    <td className="py-3 px-1.5 sm:px-2.5 text-center font-mono-numbers font-bold text-amber-300">
                      {row.draws}
                    </td>
                    <td className="py-3 px-1.5 sm:px-2.5 text-center font-mono-numbers font-bold text-rose-400">
                      {row.losses}
                    </td>
                    <td className="py-3 px-2 text-center font-mono-numbers text-[#BFC6E5] hidden sm:table-cell">
                      {row.goalsFor}
                    </td>
                    <td className="py-3 px-2 text-center font-mono-numbers text-[#BFC6E5] hidden sm:table-cell">
                      {row.goalsAgainst}
                    </td>
                    <td className="py-3 px-1.5 sm:px-2.5 text-center font-mono-numbers font-bold">
                      <span
                        className={
                          row.goalDifference > 0
                            ? 'text-emerald-400'
                            : row.goalDifference < 0
                            ? 'text-rose-400'
                            : 'text-[#BFC6E5]'
                        }
                      >
                        {row.goalDifference > 0
                          ? `+${row.goalDifference}`
                          : row.goalDifference}
                      </span>
                    </td>
                    <td className="py-3 pl-1.5 pr-3.5 sm:px-3 text-center">
                      <span className="inline-flex items-center justify-center min-w-[2rem] sm:min-w-[2.25rem] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg bg-[#743CFF]/30 border border-[#C5A6FF]/45 font-mono-numbers font-black text-white text-xs sm:text-sm">
                        {row.points}
                      </span>
                    </td>
                    <td className="py-3 pl-2 pr-5 text-right hidden md:table-cell">
                      <div className="inline-flex items-center justify-end gap-1">
                        {row.form.length === 0 ? (
                          <span className="text-[11px] font-mono-numbers text-slate-500">
                            —
                          </span>
                        ) : (
                          row.form.map((f, i) => (
                            <span
                              key={i}
                              className={`w-5 h-5 rounded-md font-mono-numbers font-black text-[10px] inline-flex items-center justify-center ${
                                f === 'W'
                                  ? 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/40'
                                  : f === 'D'
                                  ? 'bg-amber-500/25 text-amber-300 border border-amber-400/40'
                                  : 'bg-rose-500/25 text-rose-300 border border-rose-400/40'
                              }`}
                            >
                              {f}
                            </span>
                          ))
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  /**
   * Reusable Mobile-First Match Pairing Result Card (Match 1 & Match 2 + Technical Badge)
   * Designed with a centered 3-column scoreboard grid so it looks crisp on all phone screens
   */
  const renderPairingResultCard = (pairing: SuperleaguePairingResult) => {
    const isLeague1 = pairing.division === 'league1';
    return (
      <div
        key={pairing.id}
        className="rounded-2xl bg-[#050611]/95 border border-[#C5A6FF]/30 hover:border-[#C5A6FF]/65 p-4 sm:p-5 space-y-3.5 transition-all shadow-[0_12px_32px_rgba(0,0,0,0.55)]"
      >
        {/* Top Metadata Row */}
        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span
              dir="ltr"
              className={`px-2.5 py-0.5 rounded-md font-mono-numbers font-extrabold text-[10px] uppercase tracking-wider ${
                isLeague1
                  ? 'bg-[#BFC6E5]/20 text-[#F4F2FF] border border-[#BFC6E5]/40'
                  : 'bg-[#743CFF]/30 text-[#C5A6FF] border border-[#A855F7]/45'
              }`}
            >
              {isLeague1 ? 'LEAGUE 1' : 'LEAGUE 2'}
            </span>
            <span
              dir="ltr"
              className="text-xs font-mono-numbers font-bold text-[#BFC6E5]"
            >
              WEEK {pairing.week}
            </span>
          </div>

          <span
            dir="ltr"
            className="text-[10px] font-mono-numbers font-bold text-emerald-400 flex items-center gap-1"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>2 MATCHES</span>
          </span>
        </div>

        {/* Pairing Header Banner (Symmetrical 3-Column Mobile Header) */}
        <div
          dir="ltr"
          className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#743CFF]/15 via-[#080D22] to-[#743CFF]/15 border border-[#C5A6FF]/20"
        >
          <span className="font-display font-black text-sm sm:text-base text-white truncate text-left">
            {pairing.teamAName}
          </span>
          <span className="text-[10px] font-mono-numbers font-black text-[#C5A6FF] uppercase px-2 py-0.5 rounded-md bg-[#743CFF]/30 border border-[#C5A6FF]/40">
            VS
          </span>
          <span className="font-display font-black text-sm sm:text-base text-white truncate text-right">
            {pairing.teamBName}
          </span>
        </div>

        {/* Match 1 & Match 2 Mobile-First Scoreboard Cards */}
        <div className="space-y-2.5" dir="ltr">
          {pairing.legs.map((leg) => {
            const aWon = leg.teamAScore > leg.teamBScore;
            const bWon = leg.teamBScore > leg.teamAScore;
            return (
              <div
                key={leg.legNumber}
                className="p-3 rounded-xl bg-[#080D22]/95 border border-white/10 space-y-2"
              >
                {/* Leg Subheader: Match Number + Technical Status */}
                <div className="flex items-center justify-between text-[10px] font-mono-numbers">
                  <span className="font-bold uppercase tracking-widest text-[#C5A6FF]">
                    MATCH {leg.legNumber}
                  </span>
                  {leg.isTechnical ? (
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400/45 text-amber-300 font-bold">
                      {lang === 'fa' ? 'نتیجه فنی (۳-۰)' : 'TECHNICAL (فنی)'}
                    </span>
                  ) : (
                    <span className="text-[#BFC6E5]/60 uppercase">FULL TIME</span>
                  )}
                </div>

                {/* Centered 3-Column Score Row — Never Overflows on Mobile */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2.5">
                  <span
                    className={`text-xs sm:text-sm truncate text-left ${
                      aWon
                        ? 'font-display font-black text-white'
                        : 'font-display font-semibold text-[#BFC6E5]/75'
                    }`}
                  >
                    {pairing.teamAName}
                  </span>

                  <div className="min-w-[68px] text-center px-3 py-1 rounded-lg bg-gradient-to-r from-[#743CFF]/40 to-[#A855F7]/40 border border-[#C5A6FF]/55 font-mono-numbers font-black text-sm sm:text-base text-white shadow-[0_0_15px_rgba(116,60,255,0.3)]">
                    {leg.teamAScore} - {leg.teamBScore}
                  </div>

                  <span
                    className={`text-xs sm:text-sm truncate text-right ${
                      bWon
                        ? 'font-display font-black text-white'
                        : 'font-display font-semibold text-[#BFC6E5]/75'
                    }`}
                  >
                    {pairing.teamBName}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  /**
   * Reusable Sorted Match Results Section (Weeks 1, 2, 3) with clean filters
   */
  const renderSortedResultsSection = () => {
    const filteredResults = SUPERLEAGUE_SORTED_RESULTS.filter((r) => {
      const weekMatch = selectedResultsWeek === 'all' || r.week === selectedResultsWeek;
      const divMatch = selectedResultsDivision === 'all' || r.division === selectedResultsDivision;
      return weekMatch && divMatch;
    });

    const week1Count = SUPERLEAGUE_SORTED_RESULTS.filter((r) => r.week === 1).length;
    const week2Count = SUPERLEAGUE_SORTED_RESULTS.filter((r) => r.week === 2).length;
    const week3Count = SUPERLEAGUE_SORTED_RESULTS.filter((r) => r.week === 3).length;
    const totalCount = SUPERLEAGUE_SORTED_RESULTS.length;

    return (
      <div className="rounded-3xl infinity-card-surface border border-[#743CFF]/45 p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 border-b border-[#C5A6FF]/20 pb-5">
          <div className="space-y-1.5">
            <div
              dir="ltr"
              className="text-xs font-mono-numbers font-bold uppercase tracking-[0.24em] text-[#C5A6FF]"
            >
              VERIFIED MATCH RESULTS · 18 TIES (36 MATCHES)
            </div>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-[#F4F2FF] tracking-tight">
              {lang === 'fa'
                ? 'نتایج مسابقات سوپرلیگ اینفینیتی (هفته ۱ تا ۳)'
                : 'SUPERLEAGUE INFINITY — MATCH RESULTS'}
            </h3>
          </div>

          {/* Mobile-Scrollable Filters: Week Filter + League Filter */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
            {/* Week Filter */}
            <div className="flex items-center gap-1 overflow-x-auto p-1 rounded-xl bg-[#050611] border border-[#C5A6FF]/30">
              {(
                [
                  { id: 'all' as const, labelEn: `All (${totalCount})`, labelFa: `همه (${totalCount})` },
                  { id: 1 as const, labelEn: `Week 1 (${week1Count})`, labelFa: `هفته ۱ (${week1Count})` },
                  { id: 2 as const, labelEn: `Week 2 (${week2Count})`, labelFa: `هفته ۲ (${week2Count})` },
                  { id: 3 as const, labelEn: `Week 3 (${week3Count})`, labelFa: `هفته ۳ (${week3Count})` },
                ]
              ).map((w) => (
                <button
                  key={String(w.id)}
                  onClick={() => setSelectedResultsWeek(w.id)}
                  className={`flex-1 sm:flex-initial whitespace-nowrap px-3 py-2 rounded-lg text-xs font-display font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedResultsWeek === w.id
                      ? 'bg-gradient-to-r from-[#743CFF] to-[#A855F7] text-white shadow'
                      : 'text-[#BFC6E5] hover:text-white'
                  }`}
                >
                  {lang === 'fa' ? w.labelFa : w.labelEn}
                </button>
              ))}
            </div>

            {/* Division Filter */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#050611] border border-white/15">
              {(
                [
                  { id: 'all' as const, labelEn: 'All', labelFa: 'هر دو لیگ' },
                  { id: 'league1' as const, labelEn: 'League 1', labelFa: 'لیگ ۱' },
                  { id: 'league2' as const, labelEn: 'League 2', labelFa: 'لیگ ۲' },
                ]
              ).map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedResultsDivision(d.id)}
                  className={`flex-1 sm:flex-initial whitespace-nowrap px-3 py-2 rounded-lg text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedResultsDivision === d.id
                      ? 'bg-white/15 text-white'
                      : 'text-[#BFC6E5] hover:text-white'
                  }`}
                >
                  {lang === 'fa' ? d.labelFa : d.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {filteredResults.map((pairing) => renderPairingResultCard(pairing))}
        </div>
      </div>
    );
  };

  /**
   * Reusable Uncluttered Weekly Schedule Browser (Week 1 to Week 7)
   * Displays only ONE selected week at a time so upcoming fixtures never clutter the page!
   */
  const renderWeeklyScheduleBrowser = (filterDivision?: SuperleagueDivisionId) => {
    const activeWeekObj =
      SUPERLEAGUE_WEEKLY_SCHEDULE.find((w) => w.week === selectedScheduleWeek) ||
      SUPERLEAGUE_WEEKLY_SCHEDULE[0];

    const renderSchedulePairingBox = (pair: (typeof activeWeekObj.league1Pairings)[0]) => {
      const res = pair.completedResult;
      return (
        <div
          key={pair.id}
          className="p-3.5 sm:p-4 rounded-xl bg-[#080D22] border border-white/10 hover:border-[#C5A6FF]/45 transition-all space-y-3"
        >
          {/* Symmetrical 3-Column Pairing Row */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
            <span className="font-display font-black text-sm sm:text-base text-white truncate text-left">
              {pair.teamAName}
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-[#743CFF]/25 border border-[#C5A6FF]/35 font-mono-numbers font-bold text-xs text-[#C5A6FF]">
              VS
            </span>
            <span className="font-display font-black text-sm sm:text-base text-white truncate text-right">
              {pair.teamBName}
            </span>
          </div>

          {res ? (
            <div className="pt-2.5 border-t border-white/10 space-y-1.5">
              {res.legs.map((leg) => (
                <div
                  key={leg.legNumber}
                  className="px-2.5 py-1.5 rounded-lg bg-black/55 border border-white/10 grid grid-cols-[auto_1fr_auto] items-center gap-2 text-xs font-mono-numbers"
                >
                  <span className="text-[10px] font-bold text-[#C5A6FF] uppercase">
                    M{leg.legNumber}
                  </span>
                  <div className="flex items-center justify-center gap-2 truncate">
                    <span className="text-white font-bold truncate">{res.teamAName}</span>
                    <span className="px-2 py-0.5 rounded bg-[#743CFF]/35 border border-[#C5A6FF]/45 text-white font-black">
                      {leg.teamAScore} - {leg.teamBScore}
                    </span>
                    <span className="text-white font-bold truncate">{res.teamBName}</span>
                  </div>
                  {leg.isTechnical ? (
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                      فنی
                    </span>
                  ) : (
                    <span className="text-[10px] text-emerald-400 font-bold">FT</span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-numbers text-[#BFC6E5]">
              <span className="flex items-center gap-1 text-[#C5A6FF]">
                <Clock className="w-3.5 h-3.5" />
                <span>UPCOMING · 2 MATCHES</span>
              </span>
              <span>WEEK {activeWeekObj.week}</span>
            </div>
          )}
        </div>
      );
    };

    return (
      <div className="rounded-3xl infinity-card-surface border border-[#743CFF]/45 p-4 sm:p-8 lg:p-10 space-y-6 sm:space-y-8">
        {/* Header & Official Posters Lightbox Triggers */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#C5A6FF]/20 pb-6">
          <div className="space-y-1.5">
            <div
              dir="ltr"
              className="text-xs font-mono-numbers font-bold uppercase tracking-[0.24em] text-[#C5A6FF]"
            >
              OFFICIAL 7-WEEK CALENDAR · LEAGUE 1 & LEAGUE 2
            </div>
            <h3 className="font-display font-black text-2xl sm:text-4xl text-[#F4F2FF] tracking-tight">
              {lang === 'fa'
                ? 'برنامه هفتگی مسابقات (هفته ۱ تا هفته ۷)'
                : 'WEEKLY FIXTURE SCHEDULE (WEEKS 1 – 7)'}
            </h3>
            <p className="text-xs sm:text-sm text-[#BFC6E5]">
              {lang === 'fa'
                ? 'برای جلوگیری از شلوغی صفحه، هفته مورد نظر خود را از نوار زیر انتخاب کنید تا بازی‌ها و تیم استراحت (REST) همان هفته نمایش داده شود.'
                : 'Select any matchweek below to inspect League 1 and League 2 pairings and resting clubs without visual clutter.'}
            </p>
          </div>

          {/* Official Posters Quick View Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() =>
                setLightboxImage({
                  src: OFFICIAL_ASSETS.superleagueSchedulePoster,
                  title: 'SUPERLEAGUE INFINITY — FULL 7-WEEK SCHEDULE POSTER',
                })
              }
              className="px-4 py-2.5 rounded-xl bg-[#050611] hover:bg-white/[0.08] border border-[#C5A6FF]/40 text-xs font-display font-bold text-[#F4F2FF] flex items-center gap-2 cursor-pointer transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#C5A6FF]" />
              <span>{lang === 'fa' ? 'پوستر برنامه ۷ هفته' : 'Full Schedule Poster'}</span>
            </button>

            <button
              onClick={() =>
                setLightboxImage({
                  src: OFFICIAL_ASSETS.superleagueDivisionsPoster,
                  title: 'SUPERLEAGUE INFINITY — LEAGUE 1 & LEAGUE 2 TEAMS',
                })
              }
              className="px-4 py-2.5 rounded-xl bg-[#050611] hover:bg-white/[0.08] border border-[#BFC6E5]/35 text-xs font-display font-bold text-[#F4F2FF] flex items-center gap-2 cursor-pointer transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#BFC6E5]" />
              <span>{lang === 'fa' ? 'پوستر گروه‌بندی لیگ ۱ و ۲' : 'Divisions Poster'}</span>
            </button>
          </div>
        </div>

        {/* Clean 7-Week Pill Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto p-1.5 rounded-2xl bg-[#050611] border border-[#C5A6FF]/30">
          {SUPERLEAGUE_WEEKLY_SCHEDULE.map((w) => {
            const isSelected = w.week === selectedScheduleWeek;
            const isUpcoming = w.week >= 4;
            return (
              <button
                key={w.week}
                onClick={() => setSelectedScheduleWeek(w.week)}
                className={`flex-1 min-w-[105px] sm:min-w-[115px] px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl font-display font-black text-xs uppercase tracking-wider transition-all cursor-pointer flex flex-col items-center gap-1 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#743CFF] to-[#A855F7] text-white shadow-[0_6px_20px_rgba(116,60,255,0.45)]'
                    : 'text-[#BFC6E5] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span dir="ltr">WEEK {w.week}</span>
                <span
                  className={`text-[10px] font-mono-numbers px-2 py-0.5 rounded ${
                    isSelected
                      ? 'bg-black/30 text-white'
                      : isUpcoming
                      ? 'bg-[#743CFF]/20 text-[#C5A6FF]'
                      : 'bg-emerald-500/15 text-emerald-300'
                  }`}
                >
                  {w.week <= 3
                    ? lang === 'fa'
                      ? 'برگزار شده'
                      : 'PLAYED'
                    : lang === 'fa'
                    ? 'هفته پیش‌رو'
                    : 'UPCOMING'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Week Pairings Grid (League 1 & League 2 Side-by-Side) */}
        <div
          key={activeWeekObj.week}
          className={`grid grid-cols-1 ${
            filterDivision ? 'lg:grid-cols-1' : 'lg:grid-cols-2'
          } gap-5 sm:gap-6 animate-panel-enter`}
        >
          {/* LEAGUE 1 COLUMN */}
          {(!filterDivision || filterDivision === 'league1') && (
            <div className="rounded-2xl bg-[#050611]/90 border border-[#BFC6E5]/35 p-4 sm:p-6 space-y-4 sm:space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5">
                <div>
                  <div
                    dir="ltr"
                    className="text-[10px] font-mono-numbers font-bold uppercase tracking-[0.22em] text-[#BFC6E5]"
                  >
                    WEEK {activeWeekObj.week} · DIVISION 01
                  </div>
                  <h4
                    dir="ltr"
                    className="font-display font-black text-lg sm:text-xl text-white mt-0.5"
                  >
                    LEAGUE 1 FIXTURES
                  </h4>
                </div>

                <div
                  dir="ltr"
                  className="px-3 py-1 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-300 font-mono-numbers font-bold text-xs"
                >
                  REST: {activeWeekObj.league1Rest}
                </div>
              </div>

              <div className="space-y-3" dir="ltr">
                {activeWeekObj.league1Pairings.map((pair) => renderSchedulePairingBox(pair))}
              </div>
            </div>
          )}

          {/* LEAGUE 2 COLUMN */}
          {(!filterDivision || filterDivision === 'league2') && (
            <div className="rounded-2xl bg-[#050611]/90 border border-[#743CFF]/45 p-4 sm:p-6 space-y-4 sm:space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5">
                <div>
                  <div
                    dir="ltr"
                    className="text-[10px] font-mono-numbers font-bold uppercase tracking-[0.22em] text-[#C5A6FF]"
                  >
                    WEEK {activeWeekObj.week} · DIVISION 02
                  </div>
                  <h4
                    dir="ltr"
                    className="font-display font-black text-lg sm:text-xl text-white mt-0.5"
                  >
                    LEAGUE 2 FIXTURES
                  </h4>
                </div>

                <div
                  dir="ltr"
                  className="px-3 py-1 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-300 font-mono-numbers font-bold text-xs"
                >
                  REST: {activeWeekObj.league2Rest}
                </div>
              </div>

              <div className="space-y-3" dir="ltr">
                {activeWeekObj.league2Pairings.map((pair) => renderSchedulePairingBox(pair))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  /**
   * Reusable Division Portal (LEAGUE 1 & LEAGUE 2) with full real data
   */
  const renderDivisionPortal = (
    division: SuperleagueDivisionId,
    subTab: DivisionSubTab,
    setSubTab: (t: DivisionSubTab) => void
  ) => {
    const isLeague1 = division === 'league1';
    const standings = isLeague1 ? league1Standings : league2Standings;
    const clubs = isLeague1 ? SUPERLEAGUE_LEAGUE_1_CLUBS : SUPERLEAGUE_LEAGUE_2_CLUBS;
    const divisionResults = SUPERLEAGUE_SORTED_RESULTS.filter((r) => r.division === division);

    const totalMatchesPlayed = divisionResults.length * 2;
    const totalGoals = divisionResults.reduce(
      (acc, r) =>
        acc +
        r.legs[0].teamAScore +
        r.legs[0].teamBScore +
        r.legs[1].teamAScore +
        r.legs[1].teamBScore,
      0
    );
    const topScoringRow = [...standings].sort((a, b) => b.goalsFor - a.goalsFor)[0];
    const bestDefenseRow = [...standings]
      .filter((r) => r.played > 0)
      .sort((a, b) => a.goalsAgainst - b.goalsAgainst)[0];

    return (
      <div
        className={`rounded-3xl p-6 sm:p-10 lg:p-12 space-y-8 border ${
          isLeague1
            ? 'infinity-elite-surface border-[#BFC6E5]/45'
            : 'infinity-card-surface border-[#743CFF]/45'
        }`}
      >
        {/* Division Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div
              dir="ltr"
              className={`text-xs font-mono-numbers font-bold uppercase tracking-[0.24em] ${
                isLeague1 ? 'text-[#BFC6E5]' : 'text-[#A855F7]'
              }`}
            >
              {isLeague1
                ? 'SUPERLEAGUE INFINITY · DIVISION 01 (7 TEAMS)'
                : 'SUPERLEAGUE INFINITY · DIVISION 02 (7 TEAMS)'}
            </div>
            <h3
              dir="ltr"
              className={`font-display font-black text-3xl sm:text-5xl tracking-tight ${
                isLeague1 ? 'silver-metallic-text' : 'text-[#F4F2FF]'
              }`}
            >
              {isLeague1 ? 'LEAGUE 1' : 'LEAGUE 2'}
            </h3>
            <p className="text-sm text-[#BFC6E5]">
              {isLeague1
                ? lang === 'fa'
                  ? 'جدول رده‌بندی، نتایج بازی‌های رفت و برگشت و برنامه ۷ هفته لیگ ۱ سوپرلیگ اینفینیتی'
                  : 'Official League 1 standings, verified two-legged results, and 7-week match calendar.'
                : lang === 'fa'
                ? 'جدول رده‌بندی، نتایج بازی‌های رفت و برگشت و برنامه ۷ هفته لیگ ۲ سوپرلیگ اینفینیتی'
                : 'Official League 2 standings, verified two-legged results, and 7-week match calendar.'}
            </p>
          </div>

          {/* Sub-Tabs Navigation */}
          <div className="flex items-center gap-2 overflow-x-auto p-1.5 rounded-2xl bg-[#050611] border border-white/10">
            {divisionSubTabs.map((item) => {
              const active = subTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSubTab(item.id)}
                  className={`px-4 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                    active
                      ? isLeague1
                        ? 'bg-gradient-to-r from-[#BFC6E5] to-[#F4F2FF] text-[#050611]'
                        : 'bg-[#743CFF] text-white'
                      : 'text-[#BFC6E5] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {item.icon}
                  <span>{lang === 'fa' ? item.labelFa : item.labelEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Sub-Tab Content */}
        {subTab === 'standings' && renderStandingsTable(division, standings)}

        {subTab === 'results' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {divisionResults.map((pairing) => renderPairingResultCard(pairing))}
          </div>
        )}

        {subTab === 'fixtures' && renderWeeklyScheduleBrowser(division)}

        {subTab === 'teams' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" dir="ltr">
            {clubs.map((c, idx) => {
              const st = standings.find((s) => s.club.id === c.id);
              return (
                <div
                  key={c.id}
                  className="p-5 rounded-2xl bg-[#050611]/90 border border-[#C5A6FF]/30 flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-[#743CFF]/25 border border-[#C5A6FF]/40 font-mono-numbers font-black text-xs text-[#C5A6FF]">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-mono-numbers text-[#BFC6E5]">
                      {isLeague1 ? 'LEAGUE 1' : 'LEAGUE 2'}
                    </span>
                  </div>
                  <div className="font-display font-black text-xl text-white">
                    {c.name}
                  </div>
                  {st && (
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono-numbers text-[#BFC6E5]">
                      <span>RANK #{st.rank}</span>
                      <span className="text-white font-bold">{st.points} PTS</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {subTab === 'statistics' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" dir="ltr">
            <div className="p-6 rounded-2xl bg-[#050611]/90 border border-[#C5A6FF]/30 space-y-2">
              <div className="text-xs font-mono-numbers uppercase text-[#BFC6E5]">
                MATCHES PLAYED
              </div>
              <div className="font-mono-numbers font-black text-4xl text-white">
                {totalMatchesPlayed}
              </div>
              <div className="text-xs text-[#C5A6FF]">
                {divisionResults.length} Two-Legged Ties Completed
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#050611]/90 border border-[#C5A6FF]/30 space-y-2">
              <div className="text-xs font-mono-numbers uppercase text-[#BFC6E5]">
                TOTAL GOALS SCORED
              </div>
              <div className="font-mono-numbers font-black text-4xl text-emerald-400">
                {totalGoals}
              </div>
              <div className="text-xs text-[#C5A6FF]">
                {(totalGoals / Math.max(1, totalMatchesPlayed)).toFixed(1)} Goals / Match
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#050611]/90 border border-[#C5A6FF]/30 space-y-2">
              <div className="text-xs font-mono-numbers uppercase text-[#BFC6E5]">
                BEST ATTACK (GF)
              </div>
              <div className="font-display font-black text-2xl text-white truncate">
                {topScoringRow?.club.name || '—'}
              </div>
              <div className="text-xs font-mono-numbers text-emerald-400 font-bold">
                {topScoringRow?.goalsFor || 0} Goals Scored
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#050611]/90 border border-[#C5A6FF]/30 space-y-2">
              <div className="text-xs font-mono-numbers uppercase text-[#BFC6E5]">
                CURRENT LEADER
              </div>
              <div className="font-display font-black text-2xl text-white truncate">
                {standings[0]?.club.name || '—'}
              </div>
              <div className="text-xs font-mono-numbers text-[#C5A6FF] font-bold">
                {standings[0]?.points || 0} PTS (GD{' '}
                {standings[0]?.goalDifference > 0
                  ? `+${standings[0].goalDifference}`
                  : standings[0]?.goalDifference}
                )
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  /* Reusable Champions Supercup Section */
  const renderSupercupSection = () => {
    const l1Leader = league1Standings[0];
    const l2Leader = league2Standings[0];

    return (
      <div className="relative rounded-3xl overflow-hidden border border-[#C5A6FF]/45 bg-[#050611] shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
        <div className="relative min-h-[500px] flex items-center justify-center p-6 sm:p-12 lg:p-16">
          <img
            src={OFFICIAL_ASSETS.superleagueSupercupStadium}
            alt="Champions Supercup Cosmic Stadium"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050611] via-[#050611]/70 to-[#050611]/55" />

          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#743CFF]/30 blur-[130px] pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#BFC6E5]/25 blur-[130px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center">
              <SupercupTrophyGraphic className="w-24 h-24 sm:w-28 sm:h-28 animate-float-slow" />
            </div>

            <div className="space-y-3">
              <div
                dir="ltr"
                className="text-xs font-mono-numbers font-bold uppercase tracking-[0.3em] text-[#C5A6FF]"
              >
                ☠️ THE FINAL CHAMPIONSHIP SHOWDOWN
              </div>

              <h3
                dir="ltr"
                className="font-display font-black text-4xl sm:text-6xl lg:text-7xl infinity-metallic-text tracking-tight"
              >
                CHAMPIONS SUPERCUP
              </h3>

              <p
                dir="ltr"
                className="font-display font-extrabold text-lg sm:text-2xl tracking-[0.22em] uppercase text-[#F4F2FF]"
              >
                “The Champions Meet. One Crown Remains.”
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#BFC6E5] max-w-2xl mx-auto leading-relaxed">
              {lang === 'fa'
                ? 'در پایان ۷ هفته رقابت‌های لیگ ۱ و لیگ ۲، قهرمان‌های دو لیگ در یک دیدار ویژه سوپرکاپ مقابل یکدیگر قرار خواهند گرفت تا قهرمان نهایی SUPERLEAGUE INFINITY مشخص شود.'
                : 'At the conclusion of the 7-week league campaign, the champions of League 1 and League 2 meet in a special Supercup showdown to determine the ultimate champion of Superleague Infinity.'}
            </p>

            {/* Opposing Finalist Slots (Showing Current #1 Leaders) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center pt-4" dir="ltr">
              <div className="p-5 rounded-2xl bg-[#080D22]/90 border border-[#BFC6E5]/40 space-y-1">
                <div className="text-[10px] font-mono-numbers uppercase tracking-widest text-[#BFC6E5]">
                  LEAGUE 1 CHAMPION
                </div>
                <div className="font-display font-black text-lg text-[#F4F2FF]">
                  CURRENT #1: {l1Leader?.club.name}
                </div>
                <div className="text-xs font-mono-numbers text-[#C5A6FF]">
                  {l1Leader?.points} PTS · GD +{l1Leader?.goalDifference}
                </div>
              </div>

              <div className="font-display font-black text-2xl text-[#C5A6FF] tracking-widest">
                VS
              </div>

              <div className="p-5 rounded-2xl bg-[#080D22]/90 border border-[#743CFF]/50 space-y-1">
                <div className="text-[10px] font-mono-numbers uppercase tracking-widest text-[#C5A6FF]">
                  LEAGUE 2 CHAMPION
                </div>
                <div className="font-display font-black text-lg text-[#F4F2FF]">
                  CURRENT #1: {l2Leader?.club.name}
                </div>
                <div className="text-xs font-mono-numbers text-[#BFC6E5]">
                  {l2Leader?.points} PTS · GD +{l2Leader?.goalDifference}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050611] text-[#F4F2FF] selection:bg-[#743CFF] selection:text-white">
      {/* =====================================================================
          01 — SUPERLEAGUE INFINITY CINEMATIC HERO
          ===================================================================== */}
      <section className="relative min-h-[calc(88vh-5rem)] flex items-center overflow-hidden border-b border-[#743CFF]/35">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={OFFICIAL_ASSETS.superleagueCosmosHero}
            alt="SUPERLEAGUE INFINITY Cosmic Universe"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center animate-planet-drift"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050611] via-[#050611]/80 to-[#050611]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050611] via-transparent to-[#050611]/55" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 text-start">
              <div className="flex flex-wrap items-center gap-4">
                <InfinityCelestialEmblem className="w-16 h-16 sm:w-20 sm:h-20 shrink-0" />
                <div className="space-y-1.5">
                  <div
                    dir="ltr"
                    className="text-xs font-mono-numbers font-bold uppercase tracking-[0.28em] text-[#BFC6E5]"
                  >
                    POWERED BY TMPROCLUBS
                  </div>
                  <div
                    dir="ltr"
                    className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/50 text-xs font-mono-numbers font-extrabold uppercase tracking-[0.18em] text-emerald-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>SEASON LIVE · WEEKS 1–3 RESULTS UPDATED</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2" dir="ltr">
                <div className="font-display font-extrabold text-xl sm:text-3xl tracking-[0.38em] uppercase text-[#BFC6E5]">
                  SUPERLEAGUE
                </div>
                <h1 className="font-display font-black text-5xl sm:text-7xl xl:text-[6rem] tracking-[0.06em] uppercase infinity-metallic-text leading-[0.94] drop-shadow-[0_15px_45px_rgba(116,60,255,0.45)]">
                  INFINITY
                </h1>
                <p className="font-display font-extrabold text-sm sm:text-xl tracking-[0.22em] uppercase text-[#C5A6FF] pt-2">
                  “LEAGUE 1 & LEAGUE 2 — LIVE STANDINGS & FIXTURES”
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#F4F2FF]/90 leading-relaxed max-w-2xl">
                {lang === 'fa'
                  ? 'جدول رده‌بندی زنده لیگ ۱ و لیگ ۲، نتایج کامل بازی‌های هفته اول تا سوم (رفت و برگشت) و برنامه تفکیک‌شده هفته‌های پیش‌رو.'
                  : 'Official live standings for League 1 & League 2, verified two-legged match results for Weeks 1–3, and the interactive 7-week match schedule.'}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => scrollToPortal('standings')}
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#743CFF] to-[#A855F7] hover:brightness-110 text-white font-display font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_12px_40px_rgba(116,60,255,0.55)] transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <Table2 className="w-4 h-4" />
                  <span>{lang === 'fa' ? 'مشاهده جدول لیگ ۱ و ۲' : 'View L1 & L2 Standings'}</span>
                </button>

                <button
                  onClick={() => scrollToPortal('results')}
                  className="px-7 py-4 rounded-xl bg-[#080D22]/85 hover:bg-[#121938] text-[#F4F2FF] border border-[#C5A6FF]/40 font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <Swords className="w-4 h-4 text-[#C5A6FF]" />
                  <span>{lang === 'fa' ? 'نتایج بازی‌ها' : 'Match Results'}</span>
                </button>

                <button
                  onClick={() => scrollToPortal('schedule')}
                  className="px-6 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-[#F4F2FF] border border-white/15 font-display font-bold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#BFC6E5]" />
                  <span>{lang === 'fa' ? 'برنامه هفته‌های پیش‌رو' : 'Upcoming Weeks'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Live Leaders Snapshot Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl infinity-card-surface border border-[#C5A6FF]/40 p-6 space-y-5 shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[#C5A6FF]" />
                    <span
                      dir="ltr"
                      className="font-mono-numbers font-bold text-xs uppercase tracking-widest text-[#F4F2FF]"
                    >
                      CURRENT DIVISION LEADERS
                    </span>
                  </div>
                  <span
                    dir="ltr"
                    className="text-[11px] font-mono-numbers text-emerald-400 font-bold"
                  >
                    WEEK 3 UPDATE
                  </span>
                </div>

                {/* Top 3 League 1 & Top 3 League 2 Mini Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" dir="ltr">
                  <div className="p-4 rounded-2xl bg-[#050611]/90 border border-[#BFC6E5]/30 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-black text-xs uppercase tracking-wider text-[#BFC6E5]">
                        LEAGUE 1 (TOP 3)
                      </span>
                      <Crown className="w-3.5 h-3.5 text-[#BFC6E5]" />
                    </div>
                    <div className="space-y-2">
                      {league1Standings.slice(0, 3).map((r) => (
                        <div
                          key={r.club.id}
                          className="flex items-center justify-between text-xs font-mono-numbers"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className="font-black text-[#C5A6FF]">0{r.rank}</span>
                            <span className="font-display font-bold text-white truncate">
                              {r.club.shortName}
                            </span>
                          </div>
                          <span className="font-black text-white">{r.points} PTS</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#050611]/90 border border-[#743CFF]/45 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-black text-xs uppercase tracking-wider text-[#C5A6FF]">
                        LEAGUE 2 (TOP 3)
                      </span>
                      <Layers className="w-3.5 h-3.5 text-[#C5A6FF]" />
                    </div>
                    <div className="space-y-2">
                      {league2Standings.slice(0, 3).map((r) => (
                        <div
                          key={r.club.id}
                          className="flex items-center justify-between text-xs font-mono-numbers"
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className="font-black text-[#C5A6FF]">0{r.rank}</span>
                            <span className="font-display font-bold text-white truncate">
                              {r.club.shortName}
                            </span>
                          </div>
                          <span className="font-black text-white">{r.points} PTS</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Official Schedule & Divisions Graphic Preview Thumbnails */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    onClick={() =>
                      setLightboxImage({
                        src: OFFICIAL_ASSETS.superleagueSchedulePoster,
                        title: 'SUPERLEAGUE INFINITY — 7-WEEK SCHEDULE',
                      })
                    }
                    className="group relative rounded-xl overflow-hidden border border-[#C5A6FF]/35 aspect-[16/10] cursor-pointer"
                  >
                    <img
                      src={OFFICIAL_ASSETS.superleagueSchedulePoster}
                      alt="7-Week Schedule"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end justify-between p-2.5">
                      <span className="text-[10px] font-display font-bold text-white">
                        {lang === 'fa' ? 'جدول کامل ۷ هفته' : '7-Week Schedule'}
                      </span>
                      <Maximize2 className="w-3 h-3 text-[#C5A6FF]" />
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      setLightboxImage({
                        src: OFFICIAL_ASSETS.superleagueDivisionsPoster,
                        title: 'SUPERLEAGUE INFINITY — LEAGUE 1 & LEAGUE 2 TEAMS',
                      })
                    }
                    className="group relative rounded-xl overflow-hidden border border-[#BFC6E5]/35 aspect-[16/10] cursor-pointer"
                  >
                    <img
                      src={OFFICIAL_ASSETS.superleagueDivisionsPoster}
                      alt="League 1 & League 2 Teams"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end justify-between p-2.5">
                      <span className="text-[10px] font-display font-bold text-white">
                        {lang === 'fa' ? 'تیم‌های لیگ ۱ و ۲' : 'L1 & L2 Teams'}
                      </span>
                      <Maximize2 className="w-3 h-3 text-[#BFC6E5]" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02 — SUPERLEAGUE INFINITY PORTAL NAVIGATION & CONTENT
          ===================================================================== */}
      <section
        id="superleague-infinity-portal"
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12"
      >
        {/* Navigation Tab Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1.5 rounded-2xl bg-[#080D22] border border-[#743CFF]/40 shadow-[0_15px_40px_rgba(0,0,0,0.65)]">
          {navTabs.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-3 rounded-xl font-display font-extrabold text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? 'bg-gradient-to-r from-[#743CFF] to-[#A855F7] text-white shadow-[0_4px_20px_rgba(116,60,255,0.45)]'
                    : 'text-[#BFC6E5] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {lang === 'fa' ? tab.labelFa : tab.labelEn}
              </button>
            );
          })}
        </div>

        {/* =================================================================
            TAB 1: OVERVIEW (STANDINGS + RESULTS + UNCLUTTERED WEEKLY SCHEDULE)
            ================================================================= */}
        {activeTab === 'overview' && (
          <div key="overview" className="space-y-14 animate-panel-enter">
            {/* 1. Dual Standings Tables: League 1 & League 2 Side-by-Side */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <div
                    dir="ltr"
                    className="text-xs font-mono-numbers font-bold uppercase tracking-[0.24em] text-[#C5A6FF]"
                  >
                    01 · OFFICIAL LIVE STANDINGS TABLES
                  </div>
                  <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-1">
                    {lang === 'fa'
                      ? 'جدول رده‌بندی لیگ ۱ و لیگ ۲'
                      : 'LEAGUE 1 & LEAGUE 2 STANDINGS'}
                  </h2>
                </div>
                <div
                  dir="ltr"
                  className="text-xs font-mono-numbers text-[#BFC6E5]"
                >
                  WIN = 3 PTS · DRAW = 1 PT · SORTED BY PTS & GD
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {renderStandingsTable('league1', league1Standings)}
                {renderStandingsTable('league2', league2Standings)}
              </div>
            </div>

            {/* 2. Verified Match Results (Week 1, Week 2, Week 3) */}
            {renderSortedResultsSection()}

            {/* 3. Uncluttered Weekly Schedule Browser (Weeks 1–7) */}
            {renderWeeklyScheduleBrowser()}

            {/* 4. Champions Supercup Section */}
            {renderSupercupSection()}
          </div>
        )}

        {/* =================================================================
            TAB 2: STANDINGS (LEAGUE 1 & LEAGUE 2)
            ================================================================= */}
        {activeTab === 'standings' && (
          <div key="standings" className="space-y-10 animate-panel-enter">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {renderStandingsTable('league1', league1Standings)}
              {renderStandingsTable('league2', league2Standings)}
            </div>
          </div>
        )}

        {/* =================================================================
            TAB 3: MATCH RESULTS (SORTED BY WEEK 1, 2, 3)
            ================================================================= */}
        {activeTab === 'results' && (
          <div key="results" className="space-y-10 animate-panel-enter">
            {renderSortedResultsSection()}
          </div>
        )}

        {/* =================================================================
            TAB 4: WEEKLY SCHEDULE (UNCLUTTERED WEEK 1 TO 7 SELECTOR)
            ================================================================= */}
        {activeTab === 'schedule' && (
          <div key="schedule" className="space-y-10 animate-panel-enter">
            {renderWeeklyScheduleBrowser()}
          </div>
        )}

        {/* =================================================================
            TAB 5: LEAGUE 1 PORTAL
            ================================================================= */}
        {activeTab === 'elite' && (
          <div key="elite" className="animate-panel-enter">
            {renderDivisionPortal('league1', eliteSubTab, setEliteSubTab)}
          </div>
        )}

        {/* =================================================================
            TAB 6: LEAGUE 2 PORTAL
            ================================================================= */}
        {activeTab === 'league2' && (
          <div key="league2" className="animate-panel-enter">
            {renderDivisionPortal('league2', league2SubTab, setLeague2SubTab)}
          </div>
        )}

        {/* =================================================================
            TAB 7: SUPERCUP
            ================================================================= */}
        {activeTab === 'supercup' && (
          <div key="supercup" className="animate-panel-enter">
            {renderSupercupSection()}
          </div>
        )}

        {/* =================================================================
            TAB 8: RULES
            ================================================================= */}
        {activeTab === 'rules' && (
          <div
            key="rules"
            className="rounded-3xl infinity-card-surface border border-[#743CFF]/45 p-8 sm:p-10 space-y-8 animate-panel-enter"
          >
            <div className="flex items-center gap-3 border-b border-[#C5A6FF]/20 pb-5">
              <BookOpen className="w-6 h-6 text-[#C5A6FF]" />
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F4F2FF]">
                {lang === 'fa'
                  ? 'قوانین و ساختار رسمی SUPERLEAGUE INFINITY'
                  : 'SUPERLEAGUE INFINITY — OFFICIAL REGULATIONS'}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  code: '01 · TWO-LEGGED TIES (MATCH 1 & MATCH 2)',
                  titleEn: 'Home & Away Pairings Each Week',
                  titleFa: 'بازی‌های رفت و برگشت (Match 1 & Match 2)',
                  descEn:
                    'Each scheduled pairing consists of two official matches (Match 1 and Match 2). Each match awards 3 points for a win, 1 point for a draw, and 0 for a loss.',
                  descFa:
                    'هر تقابل هفتگی شامل دو مسابقه رسمی (رفت و برگشت) است که امتیاز هر بازی به صورت جداگانه (برد ۳ امتیاز، مساوی ۱ امتیاز) در جدول محاسبه می‌شود.',
                },
                {
                  code: '02 · TECHNICAL RESULTS (فنی)',
                  titleEn: '3-0 Technical Rulings',
                  titleFa: 'نتایج فنی (۳ - ۰)',
                  descEn:
                    'Matches decided by technical ruling are officially recorded as 3-0 and included in club goal difference and points.',
                  descFa:
                    'مسابقاتی که با رای فنی اعلام می‌شوند با نتیجه رسمی ۳ بر ۰ در جدول رده‌بندی و تفاضل گل تیم‌ها لحاظ می‌گردند.',
                },
                {
                  code: '03 · LEAGUE 1 & LEAGUE 2 STRUCTURE',
                  titleEn: '7 Clubs Per Division · 7 Matchweeks',
                  titleFa: '۷ تیم در هر لیگ طی ۷ هفته',
                  descEn:
                    'League 1 and League 2 each feature 7 clubs competing across 7 official weeks, with one designated resting club (REST) per week.',
                  descFa:
                    'لیگ ۱ و لیگ ۲ هر کدام شامل ۷ تیم هستند که طی ۷ هفته به رقابت می‌پردازند و در هر هفته یک تیم استراحت (REST) دارد.',
                },
                {
                  code: '04 · CHAMPIONS SUPERCUP',
                  titleEn: 'The Ultimate Crown Showdown',
                  titleFa: 'دیدار ویژه سوپرکاپ قهرمانان',
                  descEn:
                    'The champions of League 1 and League 2 meet in a special Supercup match at the end of the competition to crown the ultimate champion.',
                  descFa:
                    'در پایان مسابقات، قهرمان‌های لیگ ۱ و لیگ ۲ در یک دیدار ویژه سوپرکاپ مقابل یکدیگر قرار می‌گیرند تا قهرمان نهایی مشخص شود.',
                },
              ].map((rule) => (
                <div
                  key={rule.code}
                  className="p-6 rounded-2xl bg-[#050611]/90 border border-[#C5A6FF]/25 space-y-2"
                >
                  <div dir="ltr" className="text-xs font-mono-numbers font-bold text-[#C5A6FF]">
                    {rule.code}
                  </div>
                  <h4 className="font-display font-bold text-lg text-[#F4F2FF]">
                    {lang === 'fa' ? rule.titleFa : rule.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#BFC6E5] leading-relaxed">
                    {lang === 'fa' ? rule.descFa : rule.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =================================================================
            TAB 9: NEWS
            ================================================================= */}
        {activeTab === 'news' && (
          <div key="news" className="space-y-8 animate-panel-enter">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openArticle(item)}
                  className="rounded-2xl infinity-card-surface border border-[#C5A6FF]/30 hover:border-[#C5A6FF] p-6 space-y-3 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between text-xs font-mono-numbers text-[#C5A6FF]">
                    <span dir="ltr">{item.referenceCode}</span>
                    <span>{lang === 'fa' ? item.publishedLabelFa : item.publishedLabelEn}</span>
                  </div>
                  <h4 className="font-display font-black text-xl text-white group-hover:text-[#C5A6FF] transition-colors">
                    {lang === 'fa' ? item.titleFa : item.titleEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#BFC6E5] line-clamp-2">
                    {lang === 'fa' ? item.summaryFa : item.summaryEn}
                  </p>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#C5A6FF]">
                    <Newspaper className="w-3.5 h-3.5" />
                    <span>{lang === 'fa' ? 'مشاهده کامل اطلاعیه' : 'Read Full Release'}</span>
                    <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Official Poster Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full rounded-3xl bg-[#050611] border border-[#C5A6FF]/50 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span
                dir="ltr"
                className="font-display font-black text-sm sm:text-base text-white tracking-wider"
              >
                {lightboxImage.title}
              </span>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 max-h-[82vh] overflow-auto flex justify-center bg-black">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
