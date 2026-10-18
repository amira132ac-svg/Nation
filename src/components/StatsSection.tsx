import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Award, Users } from 'lucide-react';
import { Language, translations } from '../data/translations';

interface StatsSectionProps {
  lang: Language;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'scorers' | 'assists'>('scorers');
  const t = translations[lang];
  const isRtl = lang === 'fa';

  const tabs = [
    { id: 'scorers', label: t.topScorers, icon: Award },
    { id: 'assists', label: t.topAssists, icon: Users },
  ] as const;

  return (
    <motion.section
      id="stats"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-12 md:py-20 bg-[#060D20]/40"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-blue-900/40">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              {t.statsTitle}
            </h2>
            <div className="flex items-center gap-2 mt-1.5 text-xs text-blue-400 font-semibold">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>{isRtl ? 'آمار فردی بازیکنان لیگ ملت‌ها' : 'Individual Player Metrics'}</span>
            </div>
          </div>

          {/* Smooth Motion Tabs */}
          <div className="relative inline-flex p-1 bg-[#0A1432] border border-blue-900/60 rounded-xl shadow-lg self-start sm:self-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer select-none z-10 flex items-center gap-2 ${
                    isActive
                      ? 'text-white font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="statsFilterPill"
                      className="absolute inset-0 rounded-lg shadow-md -z-10 bg-blue-600"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Contents with AnimatePresence */}
        <div className="bg-[#0A1432]/95 border border-blue-900/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {activeTab === 'scorers' && (
              <motion.div
                key="tab-scorers"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-yellow-400 mb-5 shadow-inner">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-2">
                  {t.topScorers}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  {t.statsEmptyScorers}
                </p>

                {/* Table Schema Preview */}
                <div className="mt-8 max-w-lg mx-auto pt-6 border-t border-blue-950 flex justify-around text-xs font-mono text-slate-500">
                  <span>{t.rank}</span>
                  <span>{t.player}</span>
                  <span>{t.team}</span>
                  <span>{t.goals}</span>
                </div>
              </motion.div>
            )}

            {activeTab === 'assists' && (
              <motion.div
                key="tab-assists"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 mb-5 shadow-inner">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide mb-2">
                  {t.topAssists}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                  {t.statsEmptyAssists}
                </p>

                {/* Table Schema Preview */}
                <div className="mt-8 max-w-lg mx-auto pt-6 border-t border-blue-950 flex justify-around text-xs font-mono text-slate-500">
                  <span>{t.rank}</span>
                  <span>{t.player}</span>
                  <span>{t.team}</span>
                  <span>{t.assists}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};
