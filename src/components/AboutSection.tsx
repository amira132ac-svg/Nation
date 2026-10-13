import React from 'react';
import { Shield, Globe, Award, CheckCircle2 } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { Language, translations } from '../data/translations';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="about" className="relative py-16 md:py-24 bg-[#060D20]/50 border-t border-blue-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand & Statement */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo size="lg" withMonogram />
            
            <div className="h-1 w-16 bg-blue-500 rounded-full" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">
              {t.aboutTitle}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.aboutDesc}
            </p>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 bg-[#0A1432]/90 border border-blue-900/40 rounded-2xl hover:border-blue-500/50 transition-all shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-blue-400 mb-4 border border-blue-800/40">
                <Globe className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-wide mb-2">
                {t.pillar1Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.pillar1Desc}
              </p>
            </div>

            <div className="p-6 bg-[#0A1432]/90 border border-blue-900/40 rounded-2xl hover:border-blue-500/50 transition-all shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-blue-400 mb-4 border border-blue-800/40">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-wide mb-2">
                {t.pillar2Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.pillar2Desc}
              </p>
            </div>

            <div className="p-6 bg-[#0A1432]/90 border border-blue-900/40 rounded-2xl hover:border-yellow-500/50 transition-all shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-4 border border-yellow-500/30">
                <Award className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-wide mb-2">
                {t.pillar3Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.pillar3Desc}
              </p>
            </div>

            <div className="p-6 bg-[#0A1432]/90 border border-blue-900/40 rounded-2xl hover:border-blue-500/50 transition-all shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-blue-400 mb-4 border border-blue-800/40">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-wide mb-2">
                {t.pillar4Title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.pillar4Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
