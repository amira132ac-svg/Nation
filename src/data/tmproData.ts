export type Language = 'en' | 'fa';

export type PageId =
  | 'home'
  | 'immortal'
  | 'superleague'
  | 'ranking'
  | 'ballondor'
  | 'news';

export interface RegisteredClub {
  id: string;
  slotNumber: string; // "01" .. "08"
  licenseCode: string; // e.g. "TM-FC27-001"
  name: string;
  monogram: string;
  accentColor: string;
  secondaryColor: string;
  logoUrl?: string;
  registrationStatus: 'CONFIRMED' | 'PENDING';
  divisionEn: string;
  divisionFa: string;
  rosterFormat: string;
  competitions: string[];
  seasonCycle: string;
  trophies: string[];
}

export interface VerifiedMatch {
  id: string;
  competitionId: 'immortal' | 'superleague';
  stageEn: string;
  stageFa: string;
  homeClubId: string;
  awayClubId: string;
  homeScore: number | null;
  awayScore: number | null;
  status: 'UPCOMING' | 'COMPLETED';
  dateLabelEn: string;
  dateLabelFa: string;
}

export interface ComputedClubStanding {
  rank: number | null;
  club: RegisteredClub;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ('W' | 'D' | 'L')[];
  isPending: boolean;
}

export interface NewsArticle {
  id: string;
  referenceCode: string;
  category: 'IMMORTAL LEAGUE' | 'OFFICIAL ANNOUNCEMENT' | 'SUPERLEAGUE' | 'FC27 RANKING';
  categoryFa: string;
  statusBadgeEn: string;
  statusBadgeFa: string;
  titleEn: string;
  titleFa: string;
  summaryEn: string;
  summaryFa: string;
  bodyEn: string[];
  bodyFa: string[];
  publishedLabelEn: string;
  publishedLabelFa: string;
  readTimeEn: string;
  readTimeFa: string;
  imageAsset?: string;
  registrationUrl?: string;
  telegramChannels: { label: string; url: string }[];
}

export interface BallonDorNominee {
  id: string;
  playerName: string;
  clubName: string;
  categoryId: string;
  position: string;
}

export interface BallonDorCategory {
  id: string;
  titleEn: string;
  titleFa: string;
  subtitleEn: string;
  subtitleFa: string;
  code: string;
  group: 'OVERALL' | 'POSITIONAL' | 'LEADERSHIP';
  groupLabelEn: string;
  groupLabelFa: string;
  posterImage?: string;
  nominees: string[];
}

export interface CompetitionConfig {
  immortalStatus: 'UPCOMING' | 'REGISTRATION OPEN' | 'LIVE' | 'COMPLETED';
  superleagueStatus: 'COMING SOON' | 'UPCOMING' | 'REGISTRATION OPEN' | 'LIVE' | 'COMPLETED';
  ballonDorStatus: 'UPCOMING' | 'NOMINEES REVEALED' | 'VOTING OPEN' | 'COMPLETED';
}

export const OFFICIAL_ASSETS = {
  tmLogo: '/assets/aistudio/IMG_0663_e356cbff.jpeg',
  immortalWolfHero: '/assets/aistudio/IMG_1918_793610b7.jpeg',
  tmGlobeBallonDor: '/assets/aistudio/IMG_1932_c140c38a.jpeg',
  tmGlobeMidfielder: '/assets/aistudio/IMG_1931_1747e461.jpeg',
  tmGlobeDefender: '/assets/aistudio/IMG_1930_40b902e1.jpeg',
  tmGlobeYashin: '/assets/aistudio/IMG_1929_e171af42.jpeg',
  tmGlobeManager: '/assets/aistudio/IMG_1928_c4bfee7e.jpeg',
  tmGlobeCopa: '/assets/aistudio/IMG_1927_b7ceed9c.jpeg',
  tmGlobeGerdMuller: '/assets/aistudio/IMG_1926_a71b8105.jpeg',
};

export const OFFICIAL_LINKS = {
  registrationTelegram: 'https://t.me/Perez_Himself',
  immortalChannel: 'https://t.me/TM_IMMORTAL',
  mainChannel: 'https://t.me/TM_PROCLUBS',
};

/**
 * FC27 OFFICIAL TEAM RANKING (EXACT ORDER & SPELLING — 01 TO 17)
 * 01 — ALGOORG
 * 02 — SOROUSH FC
 * 03 — INVADERZ
 * 04 — AZADI
 * 05 — SHAMOOSHAK
 * 06 — WARRIORS
 * 07 — MADRIDTVSHOW
 * 08 — MADEINGOD
 * 09 — ACHMAZ FC
 * 10 — AFTABE
 * 11 — GUARDIANS
 * 12 — VERBOS
 * 13 — SHIFT DELETE
 * 14 — BATTERING RAM
 * 15 — GODLY
 * 16 — CASPIAN
 * 17 — ADABFC
 */
const RAW_FC27_RANKED_TEAMS: { id: string; name: string; monogram: string; accentColor: string; secondaryColor: string }[] = [
  { id: 'algoorg', name: 'ALGOORG', monogram: 'ALG', accentColor: '#D4AF37', secondaryColor: '#FEF08A' },
  { id: 'soroush-fc', name: 'SOROUSH FC', monogram: 'SFC', accentColor: '#3B82F6', secondaryColor: '#93C5FD' },
  { id: 'invaderz', name: 'INVADERZ', monogram: 'INV', accentColor: '#245BFF', secondaryColor: '#60A5FA' },
  { id: 'azadi', name: 'AZADI', monogram: 'AZD', accentColor: '#A855F7', secondaryColor: '#E9D5FF' },
  { id: 'shamooshak', name: 'SHAMOOSHAK', monogram: 'SHM', accentColor: '#F59E0B', secondaryColor: '#FDE68A' },
  { id: 'warriors', name: 'WARRIORS', monogram: 'WAR', accentColor: '#8B5CF6', secondaryColor: '#DDD6FE' },
  { id: 'madridtvshow', name: 'MADRIDTVSHOW', monogram: 'MTV', accentColor: '#EAB308', secondaryColor: '#FEF08A' },
  { id: 'madeingod', name: 'MADEINGOD', monogram: 'MIG', accentColor: '#6366F1', secondaryColor: '#C7D2FE' },
  { id: 'achmaz-fc', name: 'ACHMAZ FC', monogram: 'AFC', accentColor: '#EC4899', secondaryColor: '#FBCFE8' },
  { id: 'aftabe', name: 'AFTABE', monogram: 'AFT', accentColor: '#14B8A6', secondaryColor: '#99F6E4' },
  { id: 'guardians', name: 'GUARDIANS', monogram: 'GRD', accentColor: '#0EA5E9', secondaryColor: '#BAE6FD' },
  { id: 'verbos', name: 'VERBOS', monogram: 'VRB', accentColor: '#10B981', secondaryColor: '#A7F3D0' },
  { id: 'shift-delete', name: 'SHIFT DELETE', monogram: 'SHD', accentColor: '#F43F5E', secondaryColor: '#FECDD3' },
  { id: 'battering-ram', name: 'BATTERING RAM', monogram: 'BTR', accentColor: '#F97316', secondaryColor: '#FED7AA' },
  { id: 'godly', name: 'GODLY', monogram: 'GDL', accentColor: '#8B5CF6', secondaryColor: '#DDD6FE' },
  { id: 'caspian', name: 'CASPIAN', monogram: 'CSP', accentColor: '#06B6D4', secondaryColor: '#A5F3FC' },
  { id: 'adabfc', name: 'ADABFC', monogram: 'ADB', accentColor: '#3B82F6', secondaryColor: '#BFDBFE' },
];

export const INITIAL_REGISTERED_CLUBS: RegisteredClub[] = RAW_FC27_RANKED_TEAMS.map((team, idx) => {
  const rankNum = idx + 1;
  const slotNumber = String(rankNum).padStart(2, '0');
  return {
    id: team.id,
    slotNumber,
    licenseCode: `TM-FC27-${ String(rankNum).padStart(3, '0') }`,
    name: team.name,
    monogram: team.monogram,
    accentColor: team.accentColor,
    secondaryColor: team.secondaryColor,
    registrationStatus: 'CONFIRMED',
    divisionEn: rankNum <= 5 ? 'Top 5 Tier' : rankNum <= 10 ? 'Top 10 Tier' : 'Official Ranked',
    divisionFa: rankNum <= 5 ? '۵ تیم برتر' : rankNum <= 10 ? '۱۰ تیم برتر' : 'رنکینگ رسمی',
    rosterFormat: 'FC 27',
    competitions: ['FC27 TEAM RANKING'],
    seasonCycle: 'FC 27',
    trophies: [],
  };
});

export const INITIAL_NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'tm-globe-ceremony-announcement',
    referenceCode: 'TM GLOBE — OFFICIAL',
    category: 'OFFICIAL ANNOUNCEMENT',
    categoryFa: 'مراسم TM GLOBE',
    statusBadgeEn: '10 AWARDS',
    statusBadgeFa: '۱۰ جایزه فردی',
    titleEn: 'TM GLOBE — Official Individual Awards & Nominees',
    titleFa: 'مراسم TM GLOBE — تقدیر از برترین بازیکنان و مربیان سال',
    summaryEn:
      'Honoring the top players and managers of the past year across 10 official individual categories based on tournament performance.',
    summaryFa:
      'این مراسم با هدف تقدیر از برترین بازیکنان و مربیان سال گذشته در ۱۰ بخش مختلف فردی برگزار می‌شود.',
    bodyEn: [
      'TM GLOBE honors the best players and managers of the past year across 10 official award categories: Ballon d’Or, Copa Trophy, Golden Boot, Puskas Award, Yashin Award, Best Playmaker, Manager OTY, Best Defender, Gerd Muller, and Best Midfielder.',
      'Nominees and rankings are evaluated based on official tournaments organized by TMPROCLUBS since the beginning of the year.',
      'Managers and top community figures submit their official rankings to ensure a comprehensive and fair individual evaluation.',
    ],
    bodyFa: [
      '⚪️ این مراسم با هدف تقدیر از برترین بازیکنان و مربیان سال گذشته برگزار خواهد شد و جوایز فردی در ۱۰ بخش مختلف اهدا می‌شوند.',
      'ملاک نامزدها و نفرات برتر، تورنمنت‌های برگزار شده توسط مجموعه از اول سال خواهد بود.',
      '🥇 TM GLOBE — MORE THAN A GAME',
    ],
    publishedLabelEn: 'TM GLOBE · OFFICIAL',
    publishedLabelFa: 'TM GLOBE • اطلاعیه رسمی',
    readTimeEn: '1 min',
    readTimeFa: '۱ دقیقه',
    imageAsset: OFFICIAL_ASSETS.tmGlobeBallonDor,
    telegramChannels: [
      { label: '@TM_PROCLUBS', url: OFFICIAL_LINKS.mainChannel },
    ],
  },
];

/**
 * TM GLOBE — 10 OFFICIAL INDIVIDUAL AWARD CATEGORIES & NOMINEES
 */
export const BALLON_DOR_CATEGORIES: BallonDorCategory[] = [
  {
    id: 'ballon-dor',
    code: 'TMG-01',
    group: 'OVERALL',
    groupLabelEn: 'Supreme Individual Honor',
    groupLabelFa: 'جایزه اصلی سال',
    titleEn: 'BALLON D’OR',
    titleFa: 'توپ طلا (BALLON D’OR)',
    subtitleEn: 'PLAYER OF THE YEAR — 36 NOMINEES',
    subtitleFa: 'برترین بازیکن سال — ۳۶ نامزد رسمی',
    posterImage: OFFICIAL_ASSETS.tmGlobeBallonDor,
    nominees: [
      'Arshiya Hajipoor',
      'Milad Esbat',
      'Kachal',
      'Mmd gorji',
      'Arian MD',
      'Beny2048',
      'Foadfof',
      'ParsaXbio',
      'Siiikh',
      'Alihosseini11',
      'Amir Shakeri',
      'Mosi',
      'MatadorPunisher',
      'EasyFar',
      'Country Roham',
      'Parsa Madayeni',
      'Blackstam',
      'Mani nikou',
      'Rashford',
      'Arefsp',
      'Matiniam',
      'Miiikh',
      'Ariandan',
      'Ehsan Raeisi',
      'Babakopp',
      'AlirezaSrj',
      'JustLearnBro',
      'Mobinmhz',
      'HosseinArya',
      'Farzadfk',
      'AliRev',
      'Lebron23',
      'ArmanX95',
      'Sa1rosh',
      'B1SCIT',
      'Moryariyafar',
    ],
  },
  {
    id: 'copa-trophy',
    code: 'TMG-02',
    group: 'OVERALL',
    groupLabelEn: 'Young Player of the Year',
    groupLabelFa: 'پدیده و استعداد برتر سال',
    titleEn: 'COPA TROPHY',
    titleFa: 'جایزه کوپا (COPA TROPHY)',
    subtitleEn: 'YOUNG PLAYER OF THE YEAR · BEST TALENT',
    subtitleFa: 'بهترین بازیکن جوان و استعداد برتر سال',
    posterImage: OFFICIAL_ASSETS.tmGlobeCopa,
    nominees: [
      'SoheilSoh',
      'Hosi',
      'Arshiamo',
      'Atosh',
      'ArmanGG',
      'TahaRez',
      'ParsaXbio',
      'Bisc1t',
      'Ramtin007',
      'ParsaPL',
    ],
  },
  {
    id: 'gerd-muller',
    code: 'TMG-03',
    group: 'POSITIONAL',
    groupLabelEn: 'Attacking Honor',
    groupLabelFa: 'بهترین مهاجم و گلزن',
    titleEn: 'GERD MULLER',
    titleFa: 'جایزه گرد مولر (GERD MULLER)',
    subtitleEn: 'THE GOAL MACHINE AWARD',
    subtitleFa: 'ماشین گلزنی سال',
    posterImage: OFFICIAL_ASSETS.tmGlobeGerdMuller,
    nominees: [
      'ParsaMadayeni',
      'Shakeri',
      'XmamadX',
      'Mmdgorji',
      'Ehsanraeasi',
      'Arianmd',
      'Armanx95',
      'Ariandan',
      'Sa1rosh',
      'Erfanezkat',
    ],
  },
  {
    id: 'best-midfielder',
    code: 'TMG-04',
    group: 'POSITIONAL',
    groupLabelEn: 'Midfield Honor',
    groupLabelFa: 'بهترین هافبک سال',
    titleEn: 'BEST MIDFIELDER',
    titleFa: 'بهترین هافبک (MIDFIELD MAESTRO)',
    subtitleEn: 'MIDFIELD MAESTRO AWARD',
    subtitleFa: 'رهبر میانه میدان',
    posterImage: OFFICIAL_ASSETS.tmGlobeMidfielder,
    nominees: [
      'Mobinmhz',
      'Lebron23',
      'Mosi',
      'ManiNikou',
      'MoryAriyafar',
      'Matianam',
      'MiladEsbat',
      'Reverse',
      'Countryroham',
      'HamidS',
    ],
  },
  {
    id: 'best-defender',
    code: 'TMG-05',
    group: 'POSITIONAL',
    groupLabelEn: 'Defensive Honor',
    groupLabelFa: 'بهترین مدافع سال',
    titleEn: 'BEST DEFENDER',
    titleFa: 'بهترین مدافع (BEST DEFENDER)',
    subtitleEn: 'RECOGNIZING STRENGTH, DISCIPLINE & IMPACT',
    subtitleFa: 'قدرت، نظم و تاثیرگذاری دفاعی',
    posterImage: OFFICIAL_ASSETS.tmGlobeDefender,
    nominees: [
      'Matador Punisher',
      'Kachal',
      'BlackStam',
      'Nakhoda Arshia',
      'Arian2839',
      'Mahantoti',
      'Reza Predator',
      'Sikh',
      'SinaSoh',
      'Mehdad',
    ],
  },
  {
    id: 'yashin-award',
    code: 'TMG-06',
    group: 'POSITIONAL',
    groupLabelEn: 'Goalkeeping Honor',
    groupLabelFa: 'بهترین دروازه‌بان سال',
    titleEn: 'YASHIN AWARD',
    titleFa: 'جایزه یاشین (YASHIN AWARD)',
    subtitleEn: 'GUARDIAN OF THE GOAL',
    subtitleFa: 'برترین دروازه‌بان سال',
    posterImage: OFFICIAL_ASSETS.tmGlobeYashin,
    nominees: [
      'Foad',
      'FAR',
      'Poco',
      'ArvinBZF',
      'Soheilsoh',
      'Alichiila',
      'AriaPRG',
      'ItzAbol',
      'Defender1001',
      'Babakopp',
    ],
  },
  {
    id: 'manager-oty',
    code: 'TMG-07',
    group: 'LEADERSHIP',
    groupLabelEn: 'Managerial Honor',
    groupLabelFa: 'بهترین منیجر سال',
    titleEn: 'MANAGER OTY',
    titleFa: 'بهترین منیجر سال (MANAGER OTY)',
    subtitleEn: 'THE ARCHITECT OF VICTORY',
    subtitleFa: 'معمار پیروزی — برترین مربی و منیجر سال',
    posterImage: OFFICIAL_ASSETS.tmGlobeManager,
    nominees: [
      'Ariandan (INV)',
      'Babakopp (MES)',
      'Miladesbat (PSW)',
      'Madayeni (DAY)',
      'Revers (MTV)',
      'Mani nikou (ALN)',
      'Farzad (TTN)',
      'ReXaZ (MNC)',
    ],
  },
  {
    id: 'golden-boot',
    code: 'TMG-08',
    group: 'POSITIONAL',
    groupLabelEn: 'Top Scorer Honor',
    groupLabelFa: 'کفش طلا',
    titleEn: 'GOLDEN BOOT',
    titleFa: 'کفش طلا (GOLDEN BOOT)',
    subtitleEn: 'OFFICIAL TM GLOBE CATEGORY',
    subtitleFa: 'اعلام نامزدها در چنل اصلی',
    nominees: [],
  },
  {
    id: 'puskas-award',
    code: 'TMG-09',
    group: 'OVERALL',
    groupLabelEn: 'Goal of the Year',
    groupLabelFa: 'بهترین گل سال',
    titleEn: 'PUSKAS AWARD',
    titleFa: 'جایزه پوشکاش (PUSKAS AWARD)',
    subtitleEn: 'OFFICIAL TM GLOBE CATEGORY',
    subtitleFa: 'اعلام نامزدها در چنل اصلی',
    nominees: [],
  },
  {
    id: 'best-playmaker',
    code: 'TMG-10',
    group: 'POSITIONAL',
    groupLabelEn: 'Playmaking Honor',
    groupLabelFa: 'بهترین بازی‌ساز سال',
    titleEn: 'BEST PLAYMAKER',
    titleFa: 'بهترین بازی‌ساز (BEST PLAYMAKER)',
    subtitleEn: 'OFFICIAL TM GLOBE CATEGORY',
    subtitleFa: 'اعلام نامزدها در چنل اصلی',
    nominees: [],
  },
];

/**
 * Official Ranking Calculation Engine
 * Win = 3 points | Draw = 1 point | Loss = 0 points | GD = GF - GA
 * Priority: 1. Points, 2. Goal Difference, 3. Goals For, 4. Wins
 */
export function calculateClubStandings(
  clubs: RegisteredClub[],
  matches: VerifiedMatch[],
  competitionFilter?: 'immortal' | 'superleague'
): ComputedClubStanding[] {
  const completedMatches = matches.filter(
    (m) =>
      m.status === 'COMPLETED' &&
      m.homeScore !== null &&
      m.awayScore !== null &&
      (!competitionFilter || m.competitionId === competitionFilter)
  );

  const hasAnyCompletedMatch = completedMatches.length > 0;

  const statsMap = new Map<string, ComputedClubStanding>();

  clubs.forEach((club) => {
    statsMap.set(club.id, {
      rank: null,
      club,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      form: [],
      isPending: !hasAnyCompletedMatch,
    });
  });

  completedMatches.forEach((match) => {
    const home = statsMap.get(match.homeClubId);
    const away = statsMap.get(match.awayClubId);
    const hs = match.homeScore ?? 0;
    const as = match.awayScore ?? 0;

    if (home) {
      home.played += 1;
      home.goalsFor += hs;
      home.goalsAgainst += as;
      home.goalDifference = home.goalsFor - home.goalsAgainst;
      if (hs > as) {
        home.wins += 1;
        home.points += 3;
        home.form = [...home.form.slice(-4), 'W'];
      } else if (hs === as) {
        home.draws += 1;
        home.points += 1;
        home.form = [...home.form.slice(-4), 'D'];
      } else {
        home.losses += 1;
        home.form = [...home.form.slice(-4), 'L'];
      }
    }

    if (away) {
      away.played += 1;
      away.goalsFor += as;
      away.goalsAgainst += hs;
      away.goalDifference = away.goalsFor - away.goalsAgainst;
      if (as > hs) {
        away.wins += 1;
        away.points += 3;
        away.form = [...away.form.slice(-4), 'W'];
      } else if (as === hs) {
        away.draws += 1;
        away.points += 1;
        away.form = [...away.form.slice(-4), 'D'];
      } else {
        away.losses += 1;
        away.form = [...away.form.slice(-4), 'L'];
      }
    }
  });

  const rows = Array.from(statsMap.values());

  if (!hasAnyCompletedMatch) {
    // Preserve official registration order 01 -> 08 when pending
    return rows.sort((a, b) => a.club.slotNumber.localeCompare(b.club.slotNumber));
  }

  // Sort by: 1. Points, 2. Goal Difference, 3. Goals For, 4. Wins, 5. Slot Number
  rows.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
    if (b.wins !== a.wins) return b.wins - a.wins;
    return a.club.slotNumber.localeCompare(b.club.slotNumber);
  });

  return rows.map((row, idx) => ({
    ...row,
    rank: idx + 1,
    isPending: false,
  }));
}
