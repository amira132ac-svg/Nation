import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowUpDown,
  Trophy,
  Award,
  SlidersHorizontal,
} from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';

type RankFilter = 'all' | 'top3' | 'top5';
type SortField = 'rank' | 'name';

export const FC27RankingView: React.FC = () => {
  const { lang, clubs, openClubProfile } = usePlatform();
  const [searchQuery, setSearchQuery] = useState('');
  const [rankFilter, setRankFilter] = useState<RankFilter>('all');
  const [sortBy, setSortBy] = useState<SortField>('rank');
  const [sortAsc, setSortAsc] = useState(true);

  const rankedTeams = useMemo(() => {
    return [...clubs]
      .sort((a, b) => Number(a.slotNumber) - Number(b.slotNumber))
      .map((club, index) => ({
        rank: index + 1,
        rankLabel: String(index + 1).padStart(2, '0'),
        club,
      }));
  }, [clubs]);

  const filteredAndSorted = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = rankedTeams.filter((item) => {
      const matchesFilter =
        rankFilter === 'all' ||
        (rankFilter === 'top3' && item.rank <= 3) ||
        (rankFilter === 'top5' && item.rank <= 5);
      const matchesSearch =
        !q ||
        item.club.name.toLowerCase().includes(q) ||
        item.rankLabel.includes(q);
      return matchesFilter && matchesSearch;
    });

    return [...list].sort((a, b) => {
      const cmp =
        sortBy === 'name'
          ? a.club.name.localeCompare(b.club.name)
          : a.rank - b.rank;
      return sortAsc ? cmp : -cmp;
    });
  }, [rankedTeams, searchQuery, rankFilter, sortBy, sortAsc]);

  const handleSortClick = (field: SortField) => {
    if (sortBy === field) {
      setSortAsc((prev) => !prev);
    } else {
      setSortBy(field);
      setSortAsc(true);
    }
  };

  const getRankBadgeStyle = (rank: number) => {
    if (rank === 1) {
      return 'bg-gradient-to-br from-[#FDE047] via-[#D4AF37] to-[#AA7C11] text-[#050B1B] border-[#FDE047] shadow-[0_0_25px_rgba(212,175,55,0.45)]';
    }
    if (rank === 2) {
      return 'bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 text-[#050B1B] border-slate-200 shadow-[0_0_20px_rgba(226,232,240,0.3)]';
    }
    if (rank === 3) {
      return 'bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 text-white border-amber-400 shadow-[0_0_20px_rgba(217,119,6,0.3)]';
    }
    return 'bg-[#245BFF]/20 text-white border-[#245BFF]/50';
  };

  return (
    <div className="min-h-screen bg-[#050B1B] text-[#F5F7FF]">
      {/* =====================================================================
          07.A — FC27 TEAM RANKING HEADER (PREVIOUS EVENTS OVERALL STANDING)
          ===================================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 py-14 lg:py-20">
        <div className="absolute inset-0 tm-royal-glow pointer-events-none" />
        <div className="absolute inset-0 tm-grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 text-start">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono-numbers uppercase tracking-[0.22em] text-[#93C5FD]">
                <span dir="ltr">TMPROCLUBS · FC 27</span>
                <span className="text-slate-600">·</span>
                <span
                  dir="ltr"
                  className="inline-flex items-center gap-1.5 font-bold text-[#60A5FA]"
                >
                  <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
                  OFFICIAL TEAM RANKING
                </span>
              </div>

              <div>
                <h1
                  dir="ltr"
                  className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white"
                >
                  FC27{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#245BFF]">
                    RANKING
                  </span>
                </h1>
                <p className="font-display font-bold text-base sm:text-xl tracking-wide text-[#93C5FD] mt-2">
                  {lang === 'fa'
                    ? 'رنکینگ کلی تیم‌ها در FC27 بر اساس عملکرد در ایونت‌های قبلی'
                    : 'OVERALL FC27 TEAM RANKING BASED ON PREVIOUS EVENTS'}
                </p>
              </div>
            </div>

            <div
              dir="ltr"
              className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-[#081229] border border-white/15 text-xs font-mono-numbers text-[#93C5FD]"
            >
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white font-bold">
                {lang === 'fa'
                  ? 'برترین تیم‌های FC27 تا به امروز'
                  : 'CUMULATIVE EVENT PERFORMANCE'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          07.B — TOP 3 PODIUM & RANKED TEAMS LIST (TEAM NAMES ONLY — NO LOGOS)
          ===================================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Top 3 Podium Cards — Team Names Only, Zero Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rankedTeams.slice(0, 3).map((item) => {
            const isFirst = item.rank === 1;
            const isSecond = item.rank === 2;
            return (
              <div
                key={item.club.id}
                onClick={() => openClubProfile(item.club)}
                className={`relative rounded-2xl p-6 sm:p-7 border transition-all cursor-pointer group overflow-hidden ${
                  isFirst
                    ? 'bg-gradient-to-b from-[#131F42] to-[#081229] border-[#D4AF37]/60 shadow-[0_15px_50px_rgba(212,175,55,0.16)]'
                    : isSecond
                    ? 'bg-[#081229] border-slate-300/35 hover:border-slate-300/60'
                    : 'bg-[#081229] border-amber-500/35 hover:border-amber-500/60'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    dir="ltr"
                    className={`inline-flex items-center justify-center px-3.5 py-1.5 rounded-xl border font-mono-numbers font-black text-sm ${getRankBadgeStyle(
                      item.rank
                    )}`}
                  >
                    RANK #{item.rankLabel}
                  </span>

                  <span
                    dir="ltr"
                    className="text-[11px] font-mono-numbers uppercase tracking-widest text-slate-400"
                  >
                    {isFirst
                      ? lang === 'fa'
                        ? 'رتبه اول FC27'
                        : '#1 OVERALL'
                      : isSecond
                      ? lang === 'fa'
                        ? 'رتبه دوم FC27'
                        : '#2 OVERALL'
                      : lang === 'fa'
                      ? 'رتبه سوم FC27'
                      : '#3 OVERALL'}
                  </span>
                </div>

                {/* Team Name Only — No Logo */}
                <div
                  dir="ltr"
                  className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-[#60A5FA] transition-colors tracking-tight"
                >
                  {item.club.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter & Search Toolbar */}
        <div className="rounded-2xl bg-[#081229] border border-white/10 p-4 sm:p-5 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="inline-flex items-center p-1 rounded-xl bg-[#050B1B] border border-white/10 self-start">
              {[
                {
                  id: 'all' as RankFilter,
                  labelEn: `All Teams (${rankedTeams.length})`,
                  labelFa: `همه تیم‌ها (${rankedTeams.length})`,
                },
                {
                  id: 'top3' as RankFilter,
                  labelEn: 'Top 3',
                  labelFa: '۳ تیم برتر',
                },
                {
                  id: 'top5' as RankFilter,
                  labelEn: 'Top 5',
                  labelFa: '۵ تیم برتر',
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setRankFilter(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    rankFilter === tab.id
                      ? 'bg-[#245BFF] text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang === 'fa' ? tab.labelFa : tab.labelEn}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 left-3.5 rtl:left-auto rtl:right-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'fa'
                    ? 'جستجوی نام تیم...'
                    : 'Search team name...'
                }
                className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 rounded-xl bg-[#050B1B] border border-white/15 focus:border-[#245BFF] text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Sort Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono-numbers uppercase text-slate-400 flex items-center gap-1.5 px-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#60A5FA]" />
                {lang === 'fa' ? 'مرتب‌سازی:' : 'SORT BY:'}
              </span>
              {[
                {
                  id: 'rank' as SortField,
                  labelEn: 'Official Rank',
                  labelFa: 'رتبه در رنکینگ',
                },
                {
                  id: 'name' as SortField,
                  labelEn: 'Team Name',
                  labelFa: 'نام تیم',
                },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => handleSortClick(btn.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-numbers font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    sortBy === btn.id
                      ? 'bg-[#245BFF]/20 text-white border border-[#245BFF]/60'
                      : 'bg-[#050B1B] text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  <span>{lang === 'fa' ? btn.labelFa : btn.labelEn}</span>
                  <ArrowUpDown className="w-3 h-3 opacity-70" />
                </button>
              ))}
            </div>

            <div dir="ltr" className="text-xs font-mono-numbers text-slate-400">
              {String(filteredAndSorted.length).padStart(2, '0')} /{' '}
              {String(rankedTeams.length).padStart(2, '0')} TEAMS
            </div>
          </div>
        </div>

        {/* Official FC27 Team Ranking List — Team Names Only (No Logos) */}
        <div
          key={`${rankFilter}-${sortBy}-${sortAsc}`}
          className="rounded-3xl bg-[#081229] border border-white/15 overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.65)] animate-panel-enter"
        >
          <div className="divide-y divide-white/10">
            {/* Table Header */}
            <div className="bg-[#0B1838] px-6 py-4 flex items-center justify-between text-xs font-mono-numbers uppercase tracking-wider text-[#93C5FD]">
              <div className="flex items-center gap-6">
                <span className="w-14 text-start">
                  {lang === 'fa' ? 'رتبه' : 'RANK'}
                </span>
                <span>{lang === 'fa' ? 'نام تیم' : 'TEAM NAME'}</span>
              </div>
              <span>
                {lang === 'fa' ? 'جایگاه در ایونت‌های قبلی' : 'FC27 STANDING'}
              </span>
            </div>

            {/* Ranked Rows — Strictly Rank + Team Name Only */}
            {filteredAndSorted.map((item) => (
              <div
                key={item.club.id}
                onClick={() => openClubProfile(item.club)}
                className="px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#245BFF]/10 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-14">
                    <span
                      dir="ltr"
                      className={`inline-flex items-center justify-center w-11 h-11 rounded-xl border font-mono-numbers font-black text-base ${getRankBadgeStyle(
                        item.rank
                      )}`}
                    >
                      {item.rankLabel}
                    </span>
                  </div>

                  {/* Strictly Team Name Only (No ClubCrest / Logo) */}
                  <div
                    dir="ltr"
                    className="font-display font-black text-lg sm:text-2xl text-white group-hover:text-[#60A5FA] transition-colors tracking-tight"
                  >
                    {item.club.name}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    dir="ltr"
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-numbers font-bold border ${
                      item.rank === 1
                        ? 'bg-[#D4AF37]/15 text-[#FDE047] border-[#D4AF37]/40'
                        : item.rank <= 3
                        ? 'bg-[#245BFF]/20 text-[#93C5FD] border-[#245BFF]/40'
                        : 'bg-white/[0.04] text-slate-300 border-white/10'
                    }`}
                  >
                    {lang === 'fa'
                      ? `رتبه ${item.rank} مجموع ایونت‌ها`
                      : `RANK #${item.rankLabel} OVERALL`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
