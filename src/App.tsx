import React from 'react';
import { PlatformProvider, usePlatform } from './context/PlatformContext';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { ImmortalLeagueView } from './components/ImmortalLeagueView';
import { SuperleagueView } from './components/SuperleagueView';
import { FC27RankingView } from './components/FC27RankingView';
import { BallonDorView } from './components/BallonDorView';
import { NewsView } from './components/NewsView';
import { TeamProfileModal } from './components/TeamProfileModal';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { Footer } from './components/Footer';

const AppRouter: React.FC = () => {
  const { activePage } = usePlatform();

  return (
    <div className="min-h-screen flex flex-col bg-[#050B1B] text-[#F5F7FF]">
      <Navbar />

      <main className="flex-1 overflow-x-hidden">
        <div key={activePage} className="animate-page-enter">
          {activePage === 'home' && <HomeView />}
          {activePage === 'immortal' && <ImmortalLeagueView />}
          {activePage === 'superleague' && <SuperleagueView />}
          {activePage === 'ranking' && <FC27RankingView />}
          {activePage === 'ballondor' && <BallonDorView />}
          {activePage === 'news' && <NewsView />}
        </div>
      </main>

      <Footer />

      {/* Global Interactive Modals */}
      <TeamProfileModal />
      <ArticleReaderModal />
    </div>
  );
};

export default function App() {
  return (
    <PlatformProvider>
      <AppRouter />
    </PlatformProvider>
  );
}
