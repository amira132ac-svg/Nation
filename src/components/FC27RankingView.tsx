import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowUpDown,
  Trophy,
  Award,
  SlidersHorizontal,
  Crown,
  ChevronRight,
} from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';

type RankFilter = 'all' | 'top3' | 'top5' | 'top10';
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
        (rankFilter === 'top5' && item.rank <= 5) ||
        (rankFilter === 'top10' && item.rank <= 10);
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
      return 'bg-gradient-to-br from-[#FDE047] via-[#D4AF37] to-[#AA7C11] text-[#030712] border-[#FDE047] shadow-[0_0_25px_rgba(212,175,55,0.5)]';
    }
    if (rank === 2) {
      return 'bg-gradient-to-br from-slate-100 via-slate-300 to-slate-400 text-[#030712] border-slate-200 shadow-[0_0_20px_rgba(226,232,240,0.35)]';
    }
    if (rank === 3) {
      return 'bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 text-white border-amber-400 shadow-[0_0_20px_rgba(217,119,6,0.35)]';
    }
    if (rank <= 5) {
      return 'bg-[#245BFF] text-white border-[#60A5FA] shadow-[0_0_15px_rgba(36,91,255,0.4)]';
    }
    return 'bg-[#245BFF]/20 text-white border-[#245BFF]/50';
  };

  return (
    <div className="min-h-screen bg-[#030712] text-[#F5F7FF]">
      {/* =====================================================================
          07.A — FC27 TEAM RANKING HEADER (STADIUM BROADCAST ATMOSPHERE)
          ===================================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 py-16 lg:py-22">
        <div className="absolute inset-0 tm-royal-glow pointer-events-none" />
        <div className="absolute inset-0 tm-grid-pattern pointer-events-none" />
        <div
          className="absolute -top-36 left-[12%] w-[460px] h-[620px] bg-gradient-to-b from-[#3B82F6]/20 to-transparent blur-[90px] pointer-events-none animate-beam-left"
          style={{ transformOrigin: 'top center' }}
        />
        <div
          className="absolute -top-36 right-[12%] w-[460px] h-[620px] bg-gradient-to-b from-[#D4AF37]/16 to-transparent blur-[90px] pointer-events-none animate-beam-right"
          style={{ transformOrigin: 'top center' }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 text-start">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono-numbers uppercase tracking-[0.22em] text-[#93C5FD]">
                <span dir="ltr">TMPROCLUBS · FC 27</span>
                <span className="text-slate-600">·</span>
                <span
                  dir="ltr"
                  className="inline-flex items-center gap-1.5 font-bold text-[#FDE047]"
                >
                  <Trophy className="w-3.5 h-3.5 text-[#D4AF37]" />
                  OFFICIAL TEAM RANKING (01–17)
                </span>
              </div>

              <div>
                <h1
                  dir="ltr"
                  className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white"
                >
                  FC27{' '}
                  <span className="royal-metallic-text">
                    RANKING
                  </span>
                </h1>
                <p className="font-display font-bold text-base sm:text-xl tracking-wide text-[#93C5FD] mt-2">
                  {lang === 'fa'
                    ? 'رنکینگ کلی ۱۷ تیم برتر FC27 بر اساس عملکرد در ایونت‌های قبلی'
                    : 'OVERALL FC27 TEAM RANKING BASED ON PREVIOUS EVENTS'}
                </p>
              </div>
            </div>

            <div
              dir="ltr"
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl broadcast-card border border-white/15 text-xs font-mono-numbers text-[#93C5FD]"
            >
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white font-bold">
                {lang === 'fa'
                  ? '۱۷ تیم رسمی رتبه‌بندی شده'
                  : '17 OFFICIAL RANKED TEAMS'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          07.B — TOP 3 CHAMPIONS PODIUM & RANKED TEAMS LIST (NAMES ONLY — NO LOGOS)
          ===================================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Top 3 Podium Cards — Team Names Only, Zero Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {rankedTeams.slice(0, 3).map((item) => {
            const isFirst = item.rank === 1;
            const isSecond = item.rank === 2;
            return (
              <div
                key={item.club.id}
                onClick={() => openClubProfile(item.club)}
                className={`relative rounded-3xl p-7 sm:p-8 border transition-all duration-300 cursor-pointer group overflow-hidden flex flex-col justify-between ${
                  isFirst
                    ? 'broadcast-card-gold border-[#D4AF37]/65 hover:border-[#FDE047] shadow-[0_20px_60px_rgba(212,175,55,0.22)]'
                    : isSecond
                    ? 'broadcast-card border-slate-300/40 hover:border-slate-200/75'
                    : 'broadcast-card border-amber-500/40 hover:border-amber-400/75'
                }`}
              >
                <div className="flex items-center justify-between mb-8">
                  <span
                    dir="ltr"
                    className={`inline-flex items-center justify-center px-4 py-1.5 rounded-xl border font-mono-numbers font-black text-sm ${getRankBadgeStyle(
                      item.rank
                    )}`}
                  >
                    RANK #{item.rankLabel}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <Crown
                      className={`w-5 h-5 ${
                        isFirst
                          ? 'text-[#FDE047]'
                          : isSecond
                          ? 'text-slate-300'
                          : 'text-amber-500'
                      }`}
                    />
                    <span
                      dir="ltr"
                      className={`text-xs font-mono-numbers font-bold uppercase tracking-widest ${
                        isFirst
                          ? 'text-[#FDE047]'
                          : isSecond
                          ? 'text-slate-300'
                          : 'text-amber-400'
                      }`}
                    >
                      {isFirst
                        ? lang === 'fa'
                          ? 'صدرنشین FC27'
                          : '#1 LEADER'
                        : isSecond
                        ? lang === 'fa'
                          ? 'رتبه دوم FC27'
                          : '#2 OVERALL'
                        : lang === 'fa'
                        ? 'رتبه سوم FC27'
                        : '#3 OVERALL'}
                    </span>
                  </div>
                </div>

                {/* Team Name Only — No Logo */}
                <div className="space-y-2">
                  <div
                    dir="ltr"
                    className={`font-display font-black text-3xl sm:text-4xl tracking-tight transition-colors ${
                      isFirst
                        ? 'gold-metallic-text'
                        : 'text-white group-hover:text-[#60A5FA]'
                    }`}
                  >
                    {item.club.name}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-400">
                    <span>
                      {lang === 'fa' ? 'عملکرد مجموع ایونت‌ها' : 'CUMULATIVE EVENT STANDING'}
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#60A5FA] group-hover:translate-x-0.5 rtl:rotate-180 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter & Search Toolbar */}
        <div className="rounded-2xl broadcast-card border border-white/15 p-4 sm:p-5 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="inline-flex flex-wrap items-center p-1 rounded-xl bg-[#030712] border border-white/10 self-start gap-1">
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
                {
                  id: 'top10' as RankFilter,
                  labelEn: 'Top 10',
                  labelFa: '۱۰ تیم برتر',
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setRankFilter(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    rankFilter === tab.id
                      ? 'bg-[#245BFF] text-white shadow-[0_4px_15px_rgba(36,91,255,0.4)]'
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
                    ? 'جستجوی نام تیم یا رتبه...'
                    : 'Search team name or rank...'
                }
                className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 rounded-xl bg-[#030712] border border-white/15 focus:border-[#245BFF] text-sm text-white placeholder:text-slate-500 focus:outline-none"
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
                      : 'bg-[#030712] text-slate-400 hover:text-white border border-white/10'
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
          className="rounded-3xl broadcast-card border border-white/15 overflow-hidden animate-panel-enter"
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
                {lang === 'fa' ? 'جایگاه در رنکینگ' : 'FC27 STANDING'}
              </span>
            </div>

            {/* Ranked Rows — Strictly Rank + Team Name Only */}
            {filteredAndSorted.map((item) => (
              <div
                key={item.club.id}
                onClick={() => openClubProfile(item.club)}
                className={`px-6 py-4.5 flex items-center justify-between gap-4 transition-colors cursor-pointer group ${
                  item.rank === 1
                    ? 'bg-gradient-to-r from-[#D4AF37]/12 via-transparent to-transparent hover:from-[#D4AF37]/20'
                    : 'hover:bg-[#245BFF]/12'
                }`}
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
                    className={`font-display font-black text-lg sm:text-2xl tracking-tight transition-colors ${
                      item.rank === 1
                        ? 'text-[#FDE047] group-hover:text-white'
                        : 'text-white group-hover:text-[#60A5FA]'
                    }`}
                  >
                    {item.club.name}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    dir="ltr"
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-numbers font-bold border ${
                      item.rank === 1
                        ? 'bg-[#D4AF37]/15 text-[#FDE047] border-[#D4AF37]/45'
                        : item.rank <= 3
                        ? 'bg-[#245BFF]/25 text-[#93C5FD] border-[#60A5FA]/45'
                        : item.rank <= 5
                        ? 'bg-[#245BFF]/15 text-blue-200 border-[#245BFF]/35'
                        : item.rank <= 10
                        ? 'bg-white/[0.06] text-slate-200 border-white/15'
                        : 'bg-white/[0.03] text-slate-400 border-white/10'
                    }`}
                  >
                    {lang === 'fa'
                      ? `رتبه ${item.rank} FC27`
                      : `RANK #${item.rankLabel}`}
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
