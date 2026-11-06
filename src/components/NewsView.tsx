import React from 'react';
import {
  Newspaper,
  ArrowUpRight,
  ChevronRight,
  FileText,
} from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';
import { OFFICIAL_LINKS } from '../data/tmproData';

export const NewsView: React.FC = () => {
  const { lang, news, openArticle } = usePlatform();

  return (
    <div className="min-h-screen bg-[#050B1B] text-[#F5F7FF]">
      {/* =====================================================================
          09.A — NEWS HEADER (CLEAN, NO FILLER DESCRIPTIONS)
          ===================================================================== */}
      <section className="relative overflow-hidden border-b border-white/10 py-14 lg:py-20">
        <div className="absolute inset-0 tm-royal-glow pointer-events-none" />
        <div className="absolute inset-0 tm-grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 text-start">
              <div className="flex items-center gap-2 text-xs font-mono-numbers font-bold uppercase tracking-[0.22em] text-[#93C5FD]">
                <Newspaper className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span dir="ltr">TMPROCLUBS · OFFICIAL NEWS</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
                {lang === 'fa' ? 'اخبار و اطلاعیه‌ها' : 'OFFICIAL ANNOUNCEMENTS'}
              </h1>
            </div>

            {/* Official Telegram Broadcast Link */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={OFFICIAL_LINKS.mainChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#245BFF] hover:bg-[#1D4ED8] text-white font-mono-numbers font-bold text-xs flex items-center gap-2 transition-all"
              >
                <span dir="ltr">@TM_PROCLUBS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          09.B — OFFICIAL ANNOUNCEMENT CARDS
          ===================================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-8">
        {news.map((article) => (
          <div
            key={article.id}
            className="rounded-3xl bg-[#081229] border border-white/15 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {article.imageAsset && (
                <div className="lg:col-span-5 relative min-h-[280px] overflow-hidden">
                  <img
                    src={article.imageAsset}
                    alt={article.titleEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081229] via-transparent to-transparent lg:hidden" />
                </div>
              )}

              <div
                className={`${
                  article.imageAsset ? 'lg:col-span-7' : 'lg:col-span-12'
                } p-6 sm:p-10 flex flex-col justify-between space-y-6`}
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-numbers border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2 text-[#93C5FD]">
                      <span dir="ltr" className="font-bold">{article.referenceCode}</span>
                      <span className="text-slate-600">·</span>
                      <span>{lang === 'fa' ? article.categoryFa : article.category}</span>
                    </div>
                    <div className="text-slate-400">
                      <span>{lang === 'fa' ? article.publishedLabelFa : article.publishedLabelEn}</span>
                    </div>
                  </div>

                  <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                    {lang === 'fa' ? article.titleFa : article.titleEn}
                  </h2>

                  <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {(lang === 'fa' ? article.bodyFa : article.bodyEn).map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    {article.telegramChannels.map((ch) => (
                      <a
                        key={ch.url}
                        href={ch.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono-numbers font-bold text-white flex items-center gap-1.5 transition-all"
                      >
                        <span dir="ltr">{ch.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>

                  <button
                    onClick={() => openArticle(article)}
                    className="text-xs font-display font-bold uppercase tracking-wider text-[#60A5FA] hover:text-white flex items-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>
                      {lang === 'fa' ? 'مشاهده کامل' : 'Open Announcement'}
                    </span>
                    <ChevronRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
