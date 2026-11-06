import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowUpRight, Award } from 'lucide-react';
import { usePlatform } from '../context/PlatformContext';
import { OFFICIAL_ASSETS, OFFICIAL_LINKS, PageId } from '../data/tmproData';

export const Navbar: React.FC = () => {
  const { lang, activePage, navigateTo } = usePlatform();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems: { id: PageId; labelEn: string; labelFa: string; badge?: string }[] = [
    { id: 'home', labelEn: 'Home', labelFa: 'صفحه اصلی' },
    { id: 'ranking', labelEn: 'FC27 Ranking', labelFa: 'رنکینگ FC27', badge: '17' },
    { id: 'ballondor', labelEn: 'TM Globe', labelFa: 'تی‌ام گلوب', badge: '10' },
    { id: 'superleague', labelEn: 'Superleague', labelFa: 'سوپرلیگ', badge: lang === 'fa' ? 'به‌زودی' : 'SOON' },
    { id: 'news', labelEn: 'News', labelFa: 'اخبار و اطلاعیه‌ها' },
  ];

  const getHeaderSurface = () => {
    if (activePage === 'ballondor') {
      return scrolled
        ? 'bg-[#050507]/95 border-b border-[#D4AF37]/30 shadow-[0_12px_40px_rgba(0,0,0,0.9)]'
        : 'bg-[#050507]/80 border-b border-white/[0.08]';
    }
    return scrolled
      ? 'bg-[#050B1B]/95 border-b border-[#245BFF]/25 shadow-[0_12px_40px_rgba(3,7,18,0.9)]'
      : 'bg-[#050B1B]/80 border-b border-white/[0.08]';
  };

  const handleNavClick = (id: PageId) => {
    navigateTo(id);
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${getHeaderSurface()}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Left: Official TMPROCLUBS Brand Lockup */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 group focus:outline-none shrink-0 cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/15 group-hover:border-[#60A5FA] transition-colors">
            <img
              src={OFFICIAL_ASSETS.tmLogo}
              alt="TMPROCLUBS Official Crest"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-start">
            <span
              dir="ltr"
              className="block font-display font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-[#93C5FD] transition-colors leading-none"
            >
              TMPROCLUBS
            </span>
            <span
              dir="ltr"
              className="block font-mono-numbers text-[10px] uppercase tracking-[0.22em] text-slate-400 mt-1 leading-none"
            >
              FC PRO CLUBS FEDERATION
            </span>
          </div>
        </button>

        {/* Center: Clean Typography Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 h-full">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            let textColor = isActive ? 'text-white' : 'text-slate-400 hover:text-white';
            let barColor = 'bg-[#245BFF]';

            if (item.id === 'ballondor') {
              textColor = isActive ? 'text-[#FFF3B0]' : 'text-slate-400 hover:text-[#F3E5AB]';
              barColor = 'bg-[#D4AF37]';
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative h-full flex items-center text-xs font-display font-bold tracking-[0.14em] uppercase transition-colors duration-200 cursor-pointer ${textColor}`}
              >
                <span>{lang === 'fa' ? item.labelFa : item.labelEn}</span>
                <span
                  className={`absolute bottom-0 inset-x-0 h-[2px] transition-all duration-300 ${
                    isActive ? `${barColor} opacity-100 scale-x-100` : 'opacity-0 scale-x-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right: TM Globe Quick Pill, Telegram & Animated 3-Line Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('ballondor')}
            className="hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-[#D4AF37]/30 transition-all group cursor-pointer"
          >
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span dir="ltr" className="text-[11px] font-mono-numbers font-semibold tracking-wider text-slate-200">
              TM GLOBE <span className="text-slate-500 mx-1">·</span>{' '}
              <span className="text-[#F3E5AB] font-bold">NOMINEES</span>
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 rtl:rotate-180 transition-all" />
          </button>

          <a
            href={OFFICIAL_LINKS.mainChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#245BFF] hover:bg-[#1D4ED8] text-white text-xs font-display font-bold uppercase tracking-wider transition-all"
          >
            <span dir="ltr">@TM_PROCLUBS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Animated 3-Line Hamburger Menu Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`relative w-10 h-10 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer ${
              mobileOpen
                ? 'bg-[#245BFF]/20 border-[#245BFF] shadow-[0_0_20px_rgba(36,91,255,0.4)]'
                : 'bg-white/[0.04] hover:bg-white/[0.09] border-white/15'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 origin-center ${
                mobileOpen ? 'translate-y-[8px] rotate-45 bg-[#60A5FA]' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 origin-center ${
                mobileOpen ? '-translate-y-[8px] -rotate-45 bg-[#60A5FA]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Animated Navigation Drawer with Staggered Item Entrance */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#050B1B]/98 backdrop-blur-2xl px-4 sm:px-6 lg:px-8 pt-5 pb-7 shadow-[0_25px_70px_rgba(0,0,0,0.85)] animate-drawer-enter">
          <div className="max-w-[1440px] mx-auto space-y-4">
            <button
              onClick={() => handleNavClick('ballondor')}
              style={{ animationDelay: '20ms' }}
              className="animate-menu-item w-full flex items-center justify-between px-4 py-3.5 rounded-xl bg-[#0D0A04] hover:bg-[#171206] border border-[#D4AF37]/45 text-start transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span dir="ltr" className="text-xs font-mono-numbers font-bold text-[#F3E5AB]">
                  TM GLOBE · 10 OFFICIAL AWARDS & NOMINEES
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-[#D4AF37] rtl:rotate-180" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {navItems.map((item, idx) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    style={{ animationDelay: `${(idx + 1) * 45}ms` }}
                    className={`animate-menu-item flex items-center justify-between px-4 py-3.5 rounded-xl text-xs font-display font-bold tracking-wider uppercase text-start transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#245BFF]/20 text-white border border-[#245BFF]/60 shadow-[0_6px_20px_rgba(36,91,255,0.2)]'
                        : 'text-slate-300 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span>{lang === 'fa' ? item.labelFa : item.labelEn}</span>
                      {item.badge && (
                        <span
                          dir="ltr"
                          className="px-2 py-0.5 rounded bg-white/[0.07] border border-white/10 text-[10px] font-mono-numbers text-[#93C5FD]"
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-60 rtl:rotate-180" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
