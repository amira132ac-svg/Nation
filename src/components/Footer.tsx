import React from 'react';
import { Globe, Send, ArrowUpRight } from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';
import { OFFICIAL_ASSETS, OFFICIAL_LINKS, PageId } from '../data/tmproData';

export const Footer: React.FC = () => {
  const { lang, setLang, navigateTo, activePage } = usePlatform();

  const links: { id: PageId; labelEn: string; labelFa: string }[] = [
    { id: 'home', labelEn: 'Home', labelFa: 'صفحه اصلی' },
    { id: 'immortal', labelEn: 'Immortal League', labelFa: 'لیگ ایمورتال' },
    { id: 'superleague', labelEn: 'Superleague', labelFa: 'سوپرلیگ' },
    { id: 'ranking', labelEn: 'FC27 Ranking', labelFa: 'رنکینگ FC27' },
    { id: 'ballondor', labelEn: 'TM Globe', labelFa: 'تی‌ام گلوب' },
    { id: 'news', labelEn: 'News', labelFa: 'اخبار' },
  ];

  return (
    <footer
      className={`border-t transition-colors ${
        activePage === 'immortal'
          ? 'bg-[#030108] border-[#7B2CFF]/25'
          : activePage === 'ballondor'
          ? 'bg-[#050507] border-[#D4AF37]/20'
          : 'bg-[#030712] border-white/10'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Col 1: Brand Identity (No Filler Text) */}
          <div className="lg:col-span-5 space-y-3 text-start">
            <div className="flex items-center gap-3.5">
              <img
                src={OFFICIAL_ASSETS.tmLogo}
                alt="TMPROCLUBS Official Logo"
                className="w-11 h-11 rounded-lg object-cover border border-[#245BFF]/40"
              />
              <div>
                <div
                  dir="ltr"
                  className="font-display font-black text-xl tracking-tight text-white"
                >
                  TMPROCLUBS
                </div>
                <div
                  dir="ltr"
                  className="text-[10px] font-mono-numbers uppercase tracking-[0.22em] text-[#60A5FA]"
                >
                  THE HOME OF FC PRO CLUBS
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Ecosystem Navigation */}
          <div className="lg:col-span-4 space-y-3.5 text-start">
            <div
              dir="ltr"
              className="text-[11px] font-mono-numbers font-bold uppercase tracking-[0.22em] text-slate-300"
            >
              {lang === 'fa' ? 'بخش‌ها' : 'NAVIGATION'}
            </div>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {links.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`text-xs sm:text-sm text-start transition-colors cursor-pointer ${
                    activePage === item.id
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang === 'fa' ? item.labelFa : item.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Official Telegram Channels */}
          <div className="lg:col-span-3 space-y-3.5 text-start">
            <div
              dir="ltr"
              className="text-[11px] font-mono-numbers font-bold uppercase tracking-[0.22em] text-slate-300"
            >
              {lang === 'fa' ? 'تلگرام رسمی' : 'OFFICIAL TELEGRAM'}
            </div>
            <div className="space-y-2">
              <a
                href={OFFICIAL_LINKS.mainChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-xs font-mono-numbers font-semibold text-slate-200 hover:text-white flex items-center justify-between transition-all"
              >
                <span dir="ltr">t.me/TM_PROCLUBS</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#60A5FA]" />
              </a>
              <a
                href={OFFICIAL_LINKS.immortalChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-xs font-mono-numbers font-semibold text-[#C4A5FF] flex items-center justify-between transition-all"
              >
                <span dir="ltr">t.me/TM_IMMORTAL</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A855F7]" />
              </a>
              <a
                href={OFFICIAL_LINKS.registrationTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#245BFF]/15 hover:bg-[#245BFF]/25 border border-[#245BFF]/35 text-xs font-mono-numbers font-semibold text-white flex items-center justify-between transition-all"
              >
                <span dir="ltr">Register: @Perez_Himself</span>
                <Send className="w-3.5 h-3.5 text-[#60A5FA]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Dedicated Language Switcher Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div dir="ltr" className="font-mono-numbers text-[11px] tracking-wider text-slate-400">
            © {new Date().getFullYear()} TMPROCLUBS
          </div>

          {/* Dedicated Footer Language Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono-numbers uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span dir="ltr">Language:</span>
            </span>
            <div
              dir="ltr"
              className="inline-flex items-center p-1 rounded-lg bg-white/[0.04] border border-white/10"
            >
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-md text-xs font-mono-numbers font-bold transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#245BFF] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                English (EN)
              </button>
              <button
                onClick={() => setLang('fa')}
                className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                  lang === 'fa'
                    ? 'bg-[#245BFF] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                فارسی (FA)
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
