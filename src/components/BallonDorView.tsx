import React, { useState, useMemo } from 'react';
import { Award, Trophy, Search, Maximize2, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';
import { BALLON_DOR_CATEGORIES, OFFICIAL_LINKS, BallonDorCategory } from '../data/tmproData';

export const BallonDorView: React.FC = () => {
  const { lang } = usePlatform();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxCategory, setLightboxCategory] = useState<BallonDorCategory | null>(null);

  const officialTenList = [
    'BALLON D’OR',
    'COPA TROPHY',
    'GOLDEN BOOT',
    'PUSKAS AWARD',
    'YASHIN AWARD',
    'BEST PLAYMAKER',
    'MANAGER OTY',
    'BEST DEFENDER',
    'GERD MULLER',
    'BEST MIDFIELDER',
  ];

  const displayedCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BALLON_DOR_CATEGORIES.filter((cat) => {
      const matchesTab = selectedCategoryId === 'ALL' || cat.id === selectedCategoryId;
      if (!matchesTab) return false;
      if (!q) return true;
      return (
        cat.titleEn.toLowerCase().includes(q) ||
        cat.titleFa.toLowerCase().includes(q) ||
        cat.nominees.some((n) => n.toLowerCase().includes(q))
      );
    });
  }, [selectedCategoryId, searchQuery]);

  return (
    <div className="min-h-screen bg-[#050507] text-[#F5F7FF] selection:bg-[#D4AF37] selection:text-[#050507]">
      {/* =====================================================================
          08.A — TM GLOBE LUXURY BLACK & METALLIC GOLD HERO
          ===================================================================== */}
      <section className="relative overflow-hidden border-b border-[#D4AF37]/30 py-16 lg:py-24">
        <div className="absolute inset-0 ballondor-glow pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[360px] rounded-full bg-[#D4AF37]/15 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top Title & Official Tagline */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 text-start">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs font-mono-numbers uppercase tracking-[0.22em] text-[#FFF3B0]">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span dir="ltr">💨 | TM GLOBE</span>
              </div>

              <h1
                dir="ltr"
                className="font-display font-black text-5xl sm:text-7xl xl:text-8xl tracking-tight gold-metallic-text leading-[0.98]"
              >
                TM GLOBE
              </h1>

              <p
                dir="ltr"
                className="font-display font-extrabold text-lg sm:text-2xl tracking-[0.25em] uppercase text-[#F3E5AB]"
              >
                🥇 TM GLOBE — MORE THAN A GAME
              </p>
            </div>

            <a
              href={OFFICIAL_LINKS.mainChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start lg:self-end px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050507] font-display font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all inline-flex items-center gap-2 shadow-[0_10px_30px_rgba(212,175,55,0.25)]"
            >
              <span dir="ltr">@TM_PROCLUBS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* =================================================================
              OFFICIAL CEREMONY STATEMENT & 10 AWARD CATEGORIES BOX
              ================================================================= */}
          <div className="rounded-3xl bg-gradient-to-b from-[#120F09]/95 to-[#080705]/95 border border-[#D4AF37]/40 p-6 sm:p-10 lg:p-12 shadow-[0_25px_80px_rgba(0,0,0,0.85)] space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left / Right (RTL): Official Ceremony Rules & Details */}
              <div className="lg:col-span-7 space-y-5 text-start" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
                <div className="flex items-center gap-2 text-sm font-mono-numbers font-bold text-[#D4AF37]">
                  <Sparkles className="w-4 h-4" />
                  <span>{lang === 'fa' ? '💨| TM GLOBE — بیانیه رسمی مراسم' : '💨| TM GLOBE — OFFICIAL CEREMONY'}</span>
                </div>

                {lang === 'fa' ? (
                  <div className="space-y-4 text-sm sm:text-base text-[#F5F7FF]/90 leading-relaxed">
                    <p className="font-bold text-white text-base sm:text-lg">
                      ⚪️ این مراسم با هدف تقدیر از برترین بازیکنان و مربیان سال گذشته برگزار خواهد شد. در این مراسم، جوایز فردی در ۱۰ بخش مختلف اهدا می‌شوند.
                    </p>

                    <div className="p-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FFF3B0] font-bold">
                      +10 جایزه برای تقدیر از بهترین‌های مجموعه ما
                    </div>

                    <p>
                      ملاک نامزد ها و نفرات برتر تورنومنت های برگزار شده توسط مجموعه ما از اول سال خواهد بود و امتیازدهی فقط مربوط به دو ماه اخیر نمیباشد و طبعا تیم ها و بازیکن هایی که به تازگی به ما پیوستند توی این رتبه بندی قرار نمیگیرند.
                    </p>

                    <p>
                      در ادامه ما از منیجران ، نفرات برتر مجموعه و ... دعوت کردیم تا به افراد نامزد شده در جوایز رتبه شخصی خودشون رو ارسال کنند و طبق آنها افراد امتیازبندی می‌شوند . این مورد به این منظور هست که حق شخصی ضایع نشود و از همه جوانب و دیدگاه ها افراد مورد بررسی قرار بگیرند و همچنین عملکرد فردی ملاک مهم تری از عملکرد تیمی خواهد بود.
                    </p>

                    <p className="text-[#F3E5AB] font-semibold">
                      نامزد های برتر هر جایزه فردی ، بصورت یک لیست در چنل اصلی قرار خواهد گرفت و مشخص خواهند شد . بصورت روزانه هر روز فقط نامزد های یک جایزه مشخص می‌شوند ! و در پایان رتبه نفرات اعلام خواهد شد.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 text-sm sm:text-base text-[#F5F7FF]/90 leading-relaxed">
                    <p className="font-bold text-white text-base sm:text-lg">
                      ⚪️ TM GLOBE celebrates the finest players and managers of the past year across 10 individual award categories.
                    </p>

                    <div className="p-4 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-[#FFF3B0] font-bold">
                      +10 Individual Honors Recognizing the Best of Our Community
                    </div>

                    <p>
                      Eligibility and evaluation cover all tournaments organized by TMPROCLUBS from the beginning of the year — not solely the past two months. Newly joined teams and players are not included in this annual cycle.
                    </p>

                    <p>
                      Club managers and top figures across the community have been invited to submit their personal rankings for the nominees in each category so every player is evaluated fairly from all perspectives, with individual performance weighted above team results.
                    </p>

                    <p className="text-[#F3E5AB] font-semibold">
                      Official nominee shortlists are published daily in the main channel, followed by the final rankings announcement.
                    </p>
                  </div>
                )}

                <div
                  dir="ltr"
                  className="pt-2 font-display font-black text-sm sm:text-base tracking-[0.22em] text-[#D4AF37] uppercase"
                >
                  🥇 TM GLOBE — MORE THAN A GAME
                </div>
              </div>

              {/* 10 Official Categories Badge Grid */}
              <div className="lg:col-span-5 rounded-2xl bg-[#070604] border border-[#D4AF37]/30 p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-3">
                  <span className="text-xs font-mono-numbers font-bold uppercase tracking-widest text-[#FFF3B0]">
                    {lang === 'fa' ? '۱۰ بخش جوایز فردی' : '10 INDIVIDUAL CATEGORIES'}
                  </span>
                  <Trophy className="w-4 h-4 text-[#D4AF37]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5" dir="ltr">
                  {officialTenList.map((item, idx) => (
                    <div
                      key={item}
                      className="px-3.5 py-2.5 rounded-xl bg-[#120F09] border border-[#D4AF37]/25 flex items-center gap-2.5"
                    >
                      <span className="font-mono-numbers text-[11px] font-bold text-[#D4AF37]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display font-extrabold text-xs text-white tracking-wider">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          08.B — OFFICIAL NOMINEE POSTERS & FULL NOMINEES LISTS
          ===================================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        {/* Filter Bar & Search */}
        <div className="rounded-2xl bg-[#0D0B07] border border-[#D4AF37]/30 p-4 sm:p-5 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              <button
                onClick={() => setSelectedCategoryId('ALL')}
                className={`px-4 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategoryId === 'ALL'
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050507] shadow-[0_4px_20px_rgba(212,175,55,0.3)]'
                    : 'text-[#F3E5AB]/75 hover:text-white bg-white/[0.03]'
                }`}
              >
                {lang === 'fa' ? 'همه جوایز (۱۰)' : 'All Categories (10)'}
              </button>

              {BALLON_DOR_CATEGORIES.map((cat) => {
                const active = selectedCategoryId === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategoryId(cat.id)}
                    dir="ltr"
                    className={`px-4 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                      active
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#050507] shadow-[0_4px_20px_rgba(212,175,55,0.3)]'
                        : 'text-[#F3E5AB]/75 hover:text-white bg-white/[0.03]'
                    }`}
                  >
                    {cat.titleEn}
                  </button>
                );
              })}
            </div>

            {/* Search Nominee Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-[#D4AF37] absolute top-1/2 -translate-y-1/2 left-3.5 rtl:left-auto rtl:right-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'fa' ? 'جستجوی نام نامزد...' : 'Search nominee name...'
                }
                className="w-full pl-10 pr-4 rtl:pr-10 rtl:pl-4 py-2.5 rounded-xl bg-[#050507] border border-[#D4AF37]/35 focus:border-[#FFF3B0] text-sm text-white placeholder:text-[#F3E5AB]/40 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Categories & Official Nominees Showcase */}
        <div key={selectedCategoryId} className="space-y-10 animate-panel-enter">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-3xl bg-gradient-to-b from-[#120F09] to-[#080705] border border-[#D4AF37]/40 overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.8)]"
            >
              {/* Category Header Bar */}
              <div className="px-6 sm:px-8 py-5 border-b border-[#D4AF37]/25 flex flex-wrap items-center justify-between gap-4 bg-[#171209]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono-numbers text-[#D4AF37]">
                    <span dir="ltr" className="font-bold">{cat.code}</span>
                    <span>·</span>
                    <span>{lang === 'fa' ? cat.groupLabelFa : cat.groupLabelEn}</span>
                  </div>
                  <h2 className="font-display font-black text-2xl sm:text-3xl gold-metallic-text tracking-tight">
                    {lang === 'fa' ? cat.titleFa : cat.titleEn}
                  </h2>
                </div>

                <div
                  dir="ltr"
                  className="px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-xs font-mono-numbers font-bold text-[#FFF3B0]"
                >
                  {cat.nominees.length > 0
                    ? `${cat.nominees.length} OFFICIAL NOMINEES`
                    : 'DAILY CHANNEL REVEAL'}
                </div>
              </div>

              {cat.posterImage ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-start">
                  {/* Official TM GLOBE Poster Artwork */}
                  <div className="lg:col-span-6">
                    <div
                      onClick={() => setLightboxCategory(cat)}
                      className="group relative rounded-2xl overflow-hidden border border-[#D4AF37]/45 bg-black cursor-pointer shadow-[0_15px_50px_rgba(0,0,0,0.85)]"
                    >
                      <img
                        src={cat.posterImage}
                        alt={`${cat.titleEn} Official Nominees Poster`}
                        className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 text-[11px] font-mono-numbers text-[#FFF3B0] flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{lang === 'fa' ? 'بزرگ‌نمایی پوستر' : 'Full Poster'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Structured Nominees Grid */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-3">
                      <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#F3E5AB]">
                        {lang === 'fa' ? cat.subtitleFa : cat.subtitleEn}
                      </span>
                      <span dir="ltr" className="text-xs font-mono-numbers font-bold text-[#D4AF37]">
                        {cat.nominees.length} NOMINEES
                      </span>
                    </div>

                    <div
                      dir="ltr"
                      className={`grid gap-2.5 ${
                        cat.nominees.length > 16
                          ? 'grid-cols-2 sm:grid-cols-3'
                          : 'grid-cols-1 sm:grid-cols-2'
                      }`}
                    >
                      {cat.nominees.map((nominee, idx) => (
                        <div
                          key={nominee}
                          className="px-3.5 py-2.5 rounded-xl bg-[#0A0805] hover:bg-[#19140B] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 transition-colors flex items-center gap-2.5"
                        >
                          <span className="font-mono-numbers text-[11px] font-bold text-[#D4AF37]/80">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="font-display font-bold text-xs sm:text-sm text-white truncate">
                            {nominee}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-start">
                    <div className="text-xs font-mono-numbers uppercase tracking-widest text-[#D4AF37]">
                      {lang === 'fa' ? 'اعلام روزانه در چنل اصلی' : 'DAILY ANNOUNCEMENT IN MAIN CHANNEL'}
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white">
                      {lang === 'fa'
                        ? 'لیست نامزدهای این جایزه طبق برنامه روزانه در چنل تلگرام اعلام می‌شود.'
                        : 'Nominees for this category are revealed as part of the daily TM GLOBE schedule.'}
                    </p>
                  </div>

                  <a
                    href={OFFICIAL_LINKS.mainChannel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-[#D4AF37]/40 text-xs font-mono-numbers font-bold text-[#FFF3B0] inline-flex items-center gap-2 shrink-0"
                  >
                    <span dir="ltr">@TM_PROCLUBS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Poster Lightbox Modal */}
      {lightboxCategory && lightboxCategory.posterImage && (
        <div
          onClick={() => setLightboxCategory(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-panel-enter"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-[#080705] border border-[#D4AF37]/50 shadow-[0_25px_100px_rgba(0,0,0,0.95)]"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4AF37]/30 bg-[#120F09]">
              <div dir="ltr" className="font-display font-black text-lg text-[#FFF3B0]">
                TM GLOBE · {lightboxCategory.titleEn}
              </div>
              <button
                onClick={() => setLightboxCategory(null)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                aria-label="Close Poster"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 bg-black flex items-center justify-center">
              <img
                src={lightboxCategory.posterImage}
                alt={lightboxCategory.titleEn}
                className="max-h-[80vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
