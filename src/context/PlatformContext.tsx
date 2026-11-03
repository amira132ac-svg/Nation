import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import {
  Language,
  PageId,
  RegisteredClub,
  VerifiedMatch,
  NewsArticle,
  BallonDorNominee,
  CompetitionConfig,
  ComputedClubStanding,
  INITIAL_REGISTERED_CLUBS,
  INITIAL_NEWS_ARTICLES,
  calculateClubStandings,
} from '../data/tmproData';

interface PlatformContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  activePage: PageId;
  navigateTo: (page: PageId) => void;
  selectedClub: RegisteredClub | null;
  openClubProfile: (clubOrId: RegisteredClub | string) => void;
  closeClubProfile: () => void;
  selectedArticle: NewsArticle | null;
  openArticle: (article: NewsArticle) => void;
  closeArticle: () => void;
  clubs: RegisteredClub[];
  matches: VerifiedMatch[];
  news: NewsArticle[];
  nominees: BallonDorNominee[];
  config: CompetitionConfig;
  fc27Standings: ComputedClubStanding[];
  immortalStandings: ComputedClubStanding[];
}

const DEFAULT_CONFIG: CompetitionConfig = {
  immortalStatus: 'REGISTRATION OPEN',
  superleagueStatus: 'COMING SOON',
  ballonDorStatus: 'NOMINEES REVEALED',
};

const PlatformContext = createContext<PlatformContextValue | null>(null);

export const PlatformProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default strictly to English ('en') as requested
  const [lang, setLang] = useState<Language>('en');
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const [clubs] = useState<RegisteredClub[]>(INITIAL_REGISTERED_CLUBS);
  const [matches] = useState<VerifiedMatch[]>([]);
  const [news] = useState<NewsArticle[]>(INITIAL_NEWS_ARTICLES);
  const [nominees] = useState<BallonDorNominee[]>([]);
  const [config] = useState<CompetitionConfig>(DEFAULT_CONFIG);

  // Sync RTL/LTR direction on document root
  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'fa' : 'en'));
  };

  const navigateTo = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedClub = useMemo(
    () => clubs.find((c) => c.id === selectedClubId) || null,
    [clubs, selectedClubId]
  );

  const openClubProfile = (clubOrId: RegisteredClub | string) => {
    if (typeof clubOrId === 'string') {
      setSelectedClubId(clubOrId);
    } else {
      setSelectedClubId(clubOrId.id);
    }
  };

  const closeClubProfile = () => setSelectedClubId(null);
  const openArticle = (article: NewsArticle) => setSelectedArticle(article);
  const closeArticle = () => setSelectedArticle(null);

  const fc27Standings = useMemo(
    () => calculateClubStandings(clubs, matches),
    [clubs, matches]
  );

  const immortalStandings = useMemo(
    () => calculateClubStandings(clubs, matches, 'immortal'),
    [clubs, matches]
  );

  return (
    <PlatformContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        activePage,
        navigateTo,
        selectedClub,
        openClubProfile,
        closeClubProfile,
        selectedArticle,
        openArticle,
        closeArticle,
        clubs,
        matches,
        news,
        nominees,
        config,
        fc27Standings,
        immortalStandings,
      }}
    >
      {children}
    </PlatformContext.Provider>
  );
};

export const usePlatform = () => {
  const ctx = useContext(PlatformContext);
  if (!ctx) {
    throw new Error('usePlatform must be used within PlatformProvider');
  }
  return ctx;
};
