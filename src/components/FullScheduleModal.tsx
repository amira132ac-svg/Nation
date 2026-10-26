import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { REMAINING_FIXTURES, NationalTeam, MatchFixture } from '../data/tournamentData';
import { Language, translations } from '../data/translations';
import { MatchCard } from './MatchCard';

interface FullScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectTeam?: (team: NationalTeam) => void;
}

export const FullScheduleModal: React.FC<FullScheduleModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectTeam,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [groupFilter, setGroupFilter] = useState<'ALL' | 'A' | 'B'>('ALL');
  const t = translations[lang];
  const isRtl = lang === 'fa';

  if (!isOpen) return null;

  const groupACount = REMAINING_FIXTURES.filter((f) => f.group === 'A').length;
  const groupBCount = REMAINING_FIXTURES.filter((f) => f.group === 'B').length;

  // Filter fixtures based on group tab and search query
  const filteredFixtures = REMAINING_FIXTURES.filter((fixture: MatchFixture) => {
    const matchesGroup = groupFilter === 'ALL' || fixture.group === groupFilter;
    if (!matchesGroup) return false;

    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase().trim();
    const homeName = fixture.homeTeam.name.toLowerCase();
    const homeNameFa = fixture.homeTeam.nameFa.toLowerCase();
    const awayName = fixture.awayTeam.name.toLowerCase();
    const awayNameFa = fixture.awayTeam.nameFa.toLowerCase();

    return (
      homeName.includes(q) ||
      homeNameFa.includes(q) ||
      awayName.includes(q) ||
      awayNameFa.includes(q)
    );
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A1432] border border-blue-800/80 rounded-3xl shadow-[0_20px_60px_rgba(0,10,40,0.8)] flex flex-col overflow-hidden z-10"
        >
          {/* Top Header */}
          <div className="p-4 sm:p-6 border-b border-blue-900/60 bg-[#070D1E]/95 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
                  {isRtl ? 'برنامه مسابقات باقی‌مانده مرحله گروهی' : 'Remaining Tournament Fixtures'}
                </h3>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{t.timeTba}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-300">
                    {REMAINING_FIXTURES.length} {isRtl ? 'مسابقه باقیمانده' : 'Remaining Matches'}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-blue-900/50 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search and Filters Bar */}
          <div className="p-4 sm:px-6 bg-[#081026] border-b border-blue-900/40 flex flex-col sm:flex-row items-center gap-3 shrink-0">
            {/* Search Input */}
            <div className="relative w-full sm:flex-1">
              <Search
                className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 ${
                  isRtl ? 'right-3.5' : 'left-3.5'
                }`}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isRtl ? 'جستجوی نام کشور یا تیم ملی...' : 'Search by national team name...'}
                className={`w-full bg-[#050B1B] border border-blue-900/60 rounded-xl py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors ${
                  isRtl ? 'pr-10 pl-3.5 text-right' : 'pl-10 pr-3.5 text-left'
                }`}
              />
            </div>

            {/* Filter Tabs */}
            <div className="inline-flex p-1 bg-[#050B1B] border border-blue-900/60 rounded-xl shrink-0 w-full sm:w-auto justify-center">
              <button
                onClick={() => setGroupFilter('ALL')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  groupFilter === 'ALL'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.allMatchdays} ({REMAINING_FIXTURES.length})
              </button>
              <button
                onClick={() => setGroupFilter('A')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  groupFilter === 'A'
                    ? 'bg-yellow-400 text-slate-950 font-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.groupA} ({groupACount})
              </button>
              <button
                onClick={() => setGroupFilter('B')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  groupFilter === 'B'
                    ? 'bg-[#0052FF] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.groupB} ({groupBCount})
              </button>
            </div>
          </div>

          {/* Fixtures List Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 divide-y-0">
            {filteredFixtures.length === 0 ? (
              <div className="text-center py-14 text-slate-400 text-xs flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-1" />
                <span className="text-sm font-bold text-white">
                  {isRtl
                    ? 'تمامی ۳۰ مسابقه مرحله گروهی در هر دو گروه A و B برگزار و تکمیل شده است.'
                    : 'All 30 group stage matches in Group A and Group B have been completed.'}
                </span>
              </div>
            ) : (
              filteredFixtures.map((fixture) => (
                <MatchCard
                  key={fixture.id}
                  fixture={fixture}
                  lang={lang}
                  onSelectTeam={(team) => {
                    onClose();
                    if (onSelectTeam) onSelectTeam(team);
                  }}
                />
              ))
            )}
          </div>

          {/* Bottom Footer */}
          <div className="p-4 bg-[#070D1E] border-t border-blue-900/60 flex items-center justify-between text-xs text-slate-400 shrink-0">
            <span>
              {isRtl
                ? `${filteredFixtures.length} بازی نمایش داده شده است`
                : `Showing ${filteredFixtures.length} matches`}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white font-bold rounded-xl border border-blue-800 transition-colors cursor-pointer text-xs"
            >
              {isRtl ? 'بستن پنجره' : 'Close'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
