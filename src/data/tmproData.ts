export type Language = 'en' | 'fa';

export type PageId =
  | 'home'
  | 'superleague'
  | 'immortal'
  | 'ranking'
  | 'tmglobe'
  | 'ballondor'
  | 'news';

export interface RegisteredClub {
  id: string;
  slotNumber: string; // "01" .. "17"
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
  superleagueCosmosHero: '/assets/aistudio/IMG_1986_021060f8.jpeg',
  superleagueSchedulePoster: '/assets/aistudio/IMG_2063_2fed4ba6.jpeg',
  superleagueDivisionsPoster: '/assets/aistudio/IMG_2100_40aabfdb.jpeg',
  superleagueSupercupStadium: '/src/assets/images/superleague_supercup_stadium_1794677178323.jpg',
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
  mainChannel: 'https://t.me/TM_Proclubs',
};

/**
 * ============================================================================
 * SUPERLEAGUE INFINITY — OFFICIAL DIVISIONS (LEAGUE 1 & LEAGUE 2),
 * VERIFIED RESULTS (WEEKS 1–3), AND 7-WEEK FIXTURE SCHEDULE
 * ============================================================================
 */
export type SuperleagueDivisionId = 'league1' | 'league2';

export interface SuperleagueClub {
  id: string;
  name: string;
  shortName: string;
  division: SuperleagueDivisionId;
}

export interface SuperleagueMatchLeg {
  legNumber: 1 | 2;
  teamAScore: number;
  teamBScore: number;
  isTechnical?: boolean;
}

export interface SuperleaguePairingResult {
  id: string;
  week: number;
  division: SuperleagueDivisionId;
  teamAId: string;
  teamAName: string;
  teamBId: string;
  teamBName: string;
  legs: [SuperleagueMatchLeg, SuperleagueMatchLeg];
}

export interface SuperleagueScheduledPairing {
  id: string;
  week: number;
  division: SuperleagueDivisionId;
  teamAId: string;
  teamAName: string;
  teamBId: string;
  teamBName: string;
  completedResult?: SuperleaguePairingResult;
}

export interface SuperleagueWeekSchedule {
  week: number;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'UPCOMING';
  league1Rest: string;
  league2Rest: string;
  league1Pairings: SuperleagueScheduledPairing[];
  league2Pairings: SuperleagueScheduledPairing[];
}

export interface SuperleagueStandingRow {
  rank: number;
  club: SuperleagueClub;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ('W' | 'D' | 'L')[];
}

export const SUPERLEAGUE_LEAGUE_1_CLUBS: SuperleagueClub[] = [
  { id: 'vipers', name: 'VIPERS (WARRIORS)', shortName: 'VIPERS', division: 'league1' },
  { id: 'nooshmak', name: 'NOOSHMAK SAZI', shortName: 'NOOSHMAK', division: 'league1' },
  { id: 'avengers', name: 'AVENGERS', shortName: 'AVENGERS', division: 'league1' },
  { id: 'capitan', name: 'CAPITAN FC', shortName: 'CAPITAN', division: 'league1' },
  { id: 'hadi-kojast', name: 'HADI KOJAST', shortName: 'HADI KOJAST', division: 'league1' },
  { id: 'adab', name: 'FC ADAB', shortName: 'ADAB', division: 'league1' },
  { id: 'achmaz', name: 'ACHMAZ', shortName: 'ACHMAZ', division: 'league1' },
];

export const SUPERLEAGUE_LEAGUE_2_CLUBS: SuperleagueClub[] = [
  { id: 'aftabesazi', name: 'AFTABESAZI', shortName: 'AFTABESAZI', division: 'league2' },
  { id: 'shamooshak', name: 'SHAMOOSHAK', shortName: 'SHAMOOSHAK', division: 'league2' },
  { id: 'guardians', name: 'GUARDIANS', shortName: 'GUARDIANS', division: 'league2' },
  { id: 'messhahr', name: 'MESSHAHR', shortName: 'MESSHAHR', division: 'league2' },
  { id: 'chaeekhoran', name: 'CHAEE KHORAN', shortName: 'CHAEE KHORAN', division: 'league2' },
  { id: 'bedehkaran', name: 'BEDEHKARAN', shortName: 'BEDEHKAR', division: 'league2' },
  { id: 'wlf-og', name: 'WLF OG', shortName: 'WLF OG', division: 'league2' },
];

/**
 * Official Sorted Match Results (Week 1, Week 2, Week 3 — All 18 Ties / 36 Matches)
 * Exact scores and technical (فنی) rulings provided by TMPROCLUBS
 */
export const SUPERLEAGUE_SORTED_RESULTS: SuperleaguePairingResult[] = [
  // ======================== WEEK 1 ========================
  {
    id: 'w1-guardians-bedehkaran',
    week: 1,
    division: 'league2',
    teamAId: 'guardians',
    teamAName: 'Guardians',
    teamBId: 'bedehkaran',
    teamBName: 'Bedehkaran',
    legs: [
      { legNumber: 1, teamAScore: 6, teamBScore: 0 },
      { legNumber: 2, teamAScore: 3, teamBScore: 0, isTechnical: true },
    ],
  },
  {
    id: 'w1-adab-avengers',
    week: 1,
    division: 'league1',
    teamAId: 'adab',
    teamAName: 'FC Adab',
    teamBId: 'avengers',
    teamBName: 'Avengers',
    legs: [
      { legNumber: 1, teamAScore: 1, teamBScore: 2 },
      { legNumber: 2, teamAScore: 6, teamBScore: 1 },
    ],
  },
  {
    id: 'w1-shamooshak-wlfog',
    week: 1,
    division: 'league2',
    teamAId: 'shamooshak',
    teamAName: 'Shamooshak',
    teamBId: 'wlf-og',
    teamBName: 'WLF OG',
    legs: [
      { legNumber: 1, teamAScore: 3, teamBScore: 1 },
      { legNumber: 2, teamAScore: 5, teamBScore: 0 },
    ],
  },
  {
    id: 'w1-messhahr-chaeekhoran',
    week: 1,
    division: 'league2',
    teamAId: 'messhahr',
    teamAName: 'MesShahr',
    teamBId: 'chaeekhoran',
    teamBName: 'ChaeeKhoran',
    legs: [
      { legNumber: 1, teamAScore: 0, teamBScore: 3 },
      { legNumber: 2, teamAScore: 2, teamBScore: 1 },
    ],
  },
  {
    id: 'w1-capitan-hadikojast',
    week: 1,
    division: 'league1',
    teamAId: 'capitan',
    teamAName: 'Capitan FC',
    teamBId: 'hadi-kojast',
    teamBName: 'Hadi Kojast',
    legs: [
      { legNumber: 1, teamAScore: 2, teamBScore: 1 },
      { legNumber: 2, teamAScore: 4, teamBScore: 0 },
    ],
  },
  {
    id: 'w1-aftabesazi-wlfog',
    week: 1,
    division: 'league2',
    teamAId: 'aftabesazi',
    teamAName: 'Aftabesazi',
    teamBId: 'wlf-og',
    teamBName: 'WLF OG',
    legs: [
      { legNumber: 1, teamAScore: 6, teamBScore: 0 },
      { legNumber: 2, teamAScore: 6, teamBScore: 1 },
    ],
  },

  // ======================== WEEK 2 ========================
  {
    id: 'w2-capitan-avengers',
    week: 2,
    division: 'league1',
    teamAId: 'capitan',
    teamAName: 'Capitan FC',
    teamBId: 'avengers',
    teamBName: 'Avengers',
    legs: [
      { legNumber: 1, teamAScore: 2, teamBScore: 0 },
      { legNumber: 2, teamAScore: 2, teamBScore: 1 },
    ],
  },
  {
    id: 'w2-nooshmak-achmaz',
    week: 2,
    division: 'league1',
    teamAId: 'nooshmak',
    teamAName: 'Nooshmak',
    teamBId: 'achmaz',
    teamBName: 'Achmaz',
    legs: [
      { legNumber: 1, teamAScore: 1, teamBScore: 0 },
      { legNumber: 2, teamAScore: 0, teamBScore: 1 },
    ],
  },
  {
    id: 'w2-shamooshak-chaeekhoran',
    week: 2,
    division: 'league2',
    teamAId: 'shamooshak',
    teamAName: 'Shamooshak',
    teamBId: 'chaeekhoran',
    teamBName: 'ChaeeKhoran',
    legs: [
      { legNumber: 1, teamAScore: 2, teamBScore: 1 },
      { legNumber: 2, teamAScore: 1, teamBScore: 0 },
    ],
  },
  {
    id: 'w2-nooshmak-hadikojast',
    week: 2,
    division: 'league1',
    teamAId: 'nooshmak',
    teamAName: 'Nooshmak Sazi',
    teamBId: 'hadi-kojast',
    teamBName: 'Hadi Kojast',
    legs: [
      { legNumber: 1, teamAScore: 3, teamBScore: 0, isTechnical: true },
      { legNumber: 2, teamAScore: 3, teamBScore: 0, isTechnical: true },
    ],
  },
  {
    id: 'w2-achmaz-hadikojast',
    week: 2,
    division: 'league1',
    teamAId: 'achmaz',
    teamAName: 'Achmaz',
    teamBId: 'hadi-kojast',
    teamBName: 'Hadi Kojast',
    legs: [
      { legNumber: 1, teamAScore: 3, teamBScore: 0, isTechnical: true },
      { legNumber: 2, teamAScore: 3, teamBScore: 0, isTechnical: true },
    ],
  },
  {
    id: 'w2-guardians-messhahr',
    week: 2,
    division: 'league2',
    teamAId: 'guardians',
    teamAName: 'Guardians',
    teamBId: 'messhahr',
    teamBName: 'MesShahr',
    legs: [
      { legNumber: 1, teamAScore: 1, teamBScore: 1 },
      { legNumber: 2, teamAScore: 1, teamBScore: 1 },
    ],
  },
  {
    id: 'w2-vipers-achmaz',
    week: 2,
    division: 'league1',
    teamAId: 'vipers',
    teamAName: 'VIPERS',
    teamBId: 'achmaz',
    teamBName: 'Achmaz',
    legs: [
      { legNumber: 1, teamAScore: 3, teamBScore: 0, isTechnical: true },
      { legNumber: 2, teamAScore: 3, teamBScore: 0, isTechnical: true },
    ],
  },

  // ======================== WEEK 3 ========================
  {
    id: 'w3-aftabesazi-bedehkaran',
    week: 3,
    division: 'league2',
    teamAId: 'aftabesazi',
    teamAName: 'Aftabesazi',
    teamBId: 'bedehkaran',
    teamBName: 'Bedehkaran',
    legs: [
      { legNumber: 1, teamAScore: 3, teamBScore: 0, isTechnical: true },
      { legNumber: 2, teamAScore: 3, teamBScore: 0, isTechnical: true },
    ],
  },
  {
    id: 'w3-shamooshak-guardians',
    week: 3,
    division: 'league2',
    teamAId: 'shamooshak',
    teamAName: 'Shamooshak',
    teamBId: 'guardians',
    teamBName: 'Guardians',
    legs: [
      { legNumber: 1, teamAScore: 0, teamBScore: 0 },
      { legNumber: 2, teamAScore: 3, teamBScore: 0 },
    ],
  },
  {
    id: 'w3-avengers-nooshmak',
    week: 3,
    division: 'league1',
    teamAId: 'avengers',
    teamAName: 'Avengers',
    teamBId: 'nooshmak',
    teamBName: 'Nooshmak Sazi',
    legs: [
      { legNumber: 1, teamAScore: 6, teamBScore: 1 },
      { legNumber: 2, teamAScore: 3, teamBScore: 0, isTechnical: true },
    ],
  },
  {
    id: 'w3-warriors-adab',
    week: 3,
    division: 'league1',
    teamAId: 'vipers',
    teamAName: 'Warriors',
    teamBId: 'adab',
    teamBName: 'FC Adab',
    legs: [
      { legNumber: 1, teamAScore: 4, teamBScore: 1 },
      { legNumber: 2, teamAScore: 1, teamBScore: 1 },
    ],
  },
  {
    id: 'w3-chaeekhoran-wlfog',
    week: 3,
    division: 'league2',
    teamAId: 'chaeekhoran',
    teamAName: 'ChaeeKhoran',
    teamBId: 'wlf-og',
    teamBName: 'WLF OG',
    legs: [
      { legNumber: 1, teamAScore: 3, teamBScore: 0, isTechnical: true },
      { legNumber: 2, teamAScore: 3, teamBScore: 0 },
    ],
  },
];

/**
 * Helper to look up if a scheduled pairing has already been played
 */
function findPairingResult(team1Id: string, team2Id: string): SuperleaguePairingResult | undefined {
  return SUPERLEAGUE_SORTED_RESULTS.find(
    (r) =>
      (r.teamAId === team1Id && r.teamBId === team2Id) ||
      (r.teamAId === team2Id && r.teamBId === team1Id)
  );
}

function buildScheduledPairing(
  week: number,
  division: SuperleagueDivisionId,
  teamAId: string,
  teamAName: string,
  teamBId: string,
  teamBName: string
): SuperleagueScheduledPairing {
  return {
    id: `sched-w${week}-${division}-${teamAId}-${teamBId}`,
    week,
    division,
    teamAId,
    teamAName,
    teamBId,
    teamBName,
    completedResult: findPairingResult(teamAId, teamBId),
  };
}

/**
 * Official 7-Week Fixture Schedule (Exact match with official schedule graphic)
 */
export const SUPERLEAGUE_WEEKLY_SCHEDULE: SuperleagueWeekSchedule[] = [
  {
    week: 1,
    status: 'COMPLETED',
    league1Rest: 'VIPERS',
    league2Rest: 'AFTABESAZI',
    league1Pairings: [
      buildScheduledPairing(1, 'league1', 'nooshmak', 'NOOSHMAK', 'achmaz', 'ACHMAZ'),
      buildScheduledPairing(1, 'league1', 'avengers', 'AVENGERS', 'adab', 'ADAB'),
      buildScheduledPairing(1, 'league1', 'capitan', 'CAPITAN', 'hadi-kojast', 'HADI KOJAST'),
    ],
    league2Pairings: [
      buildScheduledPairing(1, 'league2', 'shamooshak', 'SHAMOOSHAK', 'wlf-og', 'WLF OG'),
      buildScheduledPairing(1, 'league2', 'guardians', 'GUARDIANS', 'bedehkaran', 'BEDEHKAR'),
      buildScheduledPairing(1, 'league2', 'messhahr', 'MESSHAHR', 'chaeekhoran', 'CHAEE KHORAN'),
    ],
  },
  {
    week: 2,
    status: 'COMPLETED',
    league1Rest: 'ADAB',
    league2Rest: 'BEDEHKAR',
    league1Pairings: [
      buildScheduledPairing(2, 'league1', 'vipers', 'VIPERS', 'achmaz', 'ACHMAZ'),
      buildScheduledPairing(2, 'league1', 'nooshmak', 'NOOSHMAK', 'hadi-kojast', 'HADI KOJAST'),
      buildScheduledPairing(2, 'league1', 'avengers', 'AVENGERS', 'capitan', 'CAPITAN'),
    ],
    league2Pairings: [
      buildScheduledPairing(2, 'league2', 'aftabesazi', 'AFTABESAZI', 'wlf-og', 'WLF OG'),
      buildScheduledPairing(2, 'league2', 'shamooshak', 'SHAMOOSHAK', 'chaeekhoran', 'CHAEE KHORAN'),
      buildScheduledPairing(2, 'league2', 'guardians', 'GUARDIANS', 'messhahr', 'MESSHAHR'),
    ],
  },
  {
    week: 3,
    status: 'COMPLETED',
    league1Rest: 'CAPITAN',
    league2Rest: 'MESSHAHR',
    league1Pairings: [
      buildScheduledPairing(3, 'league1', 'vipers', 'VIPERS (WARRIORS)', 'adab', 'ADAB'),
      buildScheduledPairing(3, 'league1', 'achmaz', 'ACHMAZ', 'hadi-kojast', 'HADI KOJAST'),
      buildScheduledPairing(3, 'league1', 'nooshmak', 'NOOSHMAK', 'avengers', 'AVENGERS'),
    ],
    league2Pairings: [
      buildScheduledPairing(3, 'league2', 'aftabesazi', 'AFTABESAZI', 'bedehkaran', 'BEDEHKAR'),
      buildScheduledPairing(3, 'league2', 'wlf-og', 'WLF OG', 'chaeekhoran', 'CHAEE KHORAN'),
      buildScheduledPairing(3, 'league2', 'shamooshak', 'SHAMOOSHAK', 'guardians', 'GUARDIANS'),
    ],
  },
  {
    week: 4,
    status: 'UPCOMING',
    league1Rest: 'NOOSHMAK',
    league2Rest: 'SHAMOOSHAK',
    league1Pairings: [
      buildScheduledPairing(4, 'league1', 'vipers', 'VIPERS', 'hadi-kojast', 'HADI KOJAST'),
      buildScheduledPairing(4, 'league1', 'adab', 'ADAB', 'capitan', 'CAPITAN'),
      buildScheduledPairing(4, 'league1', 'achmaz', 'ACHMAZ', 'avengers', 'AVENGERS'),
    ],
    league2Pairings: [
      buildScheduledPairing(4, 'league2', 'aftabesazi', 'AFTABESAZI', 'chaeekhoran', 'CHAEE KHORAN'),
      buildScheduledPairing(4, 'league2', 'bedehkaran', 'BEDEHKAR', 'messhahr', 'MESSHAHR'),
      buildScheduledPairing(4, 'league2', 'wlf-og', 'WLF OG', 'guardians', 'GUARDIANS'),
    ],
  },
  {
    week: 5,
    status: 'UPCOMING',
    league1Rest: 'ACHMAZ',
    league2Rest: 'WLF OG',
    league1Pairings: [
      buildScheduledPairing(5, 'league1', 'vipers', 'VIPERS', 'capitan', 'CAPITAN'),
      buildScheduledPairing(5, 'league1', 'hadi-kojast', 'HADI KOJAST', 'avengers', 'AVENGERS'),
      buildScheduledPairing(5, 'league1', 'adab', 'ADAB', 'nooshmak', 'NOOSHMAK'),
    ],
    league2Pairings: [
      buildScheduledPairing(5, 'league2', 'aftabesazi', 'AFTABESAZI', 'messhahr', 'MESSHAHR'),
      buildScheduledPairing(5, 'league2', 'chaeekhoran', 'CHAEE KHORAN', 'guardians', 'GUARDIANS'),
      buildScheduledPairing(5, 'league2', 'bedehkaran', 'BEDEHKAR', 'shamooshak', 'SHAMOOSHAK'),
    ],
  },
  {
    week: 6,
    status: 'UPCOMING',
    league1Rest: 'HADI KOJAST',
    league2Rest: 'CHAEE KHORAN',
    league1Pairings: [
      buildScheduledPairing(6, 'league1', 'vipers', 'VIPERS', 'avengers', 'AVENGERS'),
      buildScheduledPairing(6, 'league1', 'capitan', 'CAPITAN', 'nooshmak', 'NOOSHMAK'),
      buildScheduledPairing(6, 'league1', 'adab', 'ADAB', 'achmaz', 'ACHMAZ'),
    ],
    league2Pairings: [
      buildScheduledPairing(6, 'league2', 'aftabesazi', 'AFTABESAZI', 'guardians', 'GUARDIANS'),
      buildScheduledPairing(6, 'league2', 'messhahr', 'MESSHAHR', 'shamooshak', 'SHAMOOSHAK'),
      buildScheduledPairing(6, 'league2', 'bedehkaran', 'BEDEHKAR', 'wlf-og', 'WLF OG'),
    ],
  },
  {
    week: 7,
    status: 'UPCOMING',
    league1Rest: 'AVENGERS',
    league2Rest: 'GUARDIANS',
    league1Pairings: [
      buildScheduledPairing(7, 'league1', 'vipers', 'VIPERS', 'nooshmak', 'NOOSHMAK'),
      buildScheduledPairing(7, 'league1', 'capitan', 'CAPITAN', 'achmaz', 'ACHMAZ'),
      buildScheduledPairing(7, 'league1', 'hadi-kojast', 'HADI KOJAST', 'adab', 'ADAB'),
    ],
    league2Pairings: [
      buildScheduledPairing(7, 'league2', 'aftabesazi', 'AFTABESAZI', 'shamooshak', 'SHAMOOSHAK'),
      buildScheduledPairing(7, 'league2', 'messhahr', 'MESSHAHR', 'wlf-og', 'WLF OG'),
      buildScheduledPairing(7, 'league2', 'chaeekhoran', 'CHAEE KHORAN', 'bedehkaran', 'BEDEHKAR'),
    ],
  },
];

/**
 * Compute Live Standings for League 1 or League 2 from SUPERLEAGUE_SORTED_RESULTS
 */
export function calculateSuperleagueDivisionStandings(
  division: SuperleagueDivisionId
): SuperleagueStandingRow[] {
  const clubs =
    division === 'league1' ? SUPERLEAGUE_LEAGUE_1_CLUBS : SUPERLEAGUE_LEAGUE_2_CLUBS;

  const statsMap = new Map<string, SuperleagueStandingRow>();

  clubs.forEach((club, index) => {
    statsMap.set(club.id, {
      rank: index + 1,
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
    });
  });

  const divisionResults = SUPERLEAGUE_SORTED_RESULTS.filter((r) => r.division === division);

  divisionResults.forEach((pairing) => {
    const teamA = statsMap.get(pairing.teamAId);
    const teamB = statsMap.get(pairing.teamBId);

    pairing.legs.forEach((leg) => {
      const aScore = leg.teamAScore;
      const bScore = leg.teamBScore;

      if (teamA) {
        teamA.played += 1;
        teamA.goalsFor += aScore;
        teamA.goalsAgainst += bScore;
        teamA.goalDifference = teamA.goalsFor - teamA.goalsAgainst;
        if (aScore > bScore) {
          teamA.wins += 1;
          teamA.points += 3;
          teamA.form = [...teamA.form.slice(-4), 'W'];
        } else if (aScore === bScore) {
          teamA.draws += 1;
          teamA.points += 1;
          teamA.form = [...teamA.form.slice(-4), 'D'];
        } else {
          teamA.losses += 1;
          teamA.form = [...teamA.form.slice(-4), 'L'];
        }
      }

      if (teamB) {
        teamB.played += 1;
        teamB.goalsFor += bScore;
        teamB.goalsAgainst += aScore;
        teamB.goalDifference = teamB.goalsFor - teamB.goalsAgainst;
        if (bScore > aScore) {
          teamB.wins += 1;
          teamB.points += 3;
          teamB.form = [...teamB.form.slice(-4), 'W'];
        } else if (bScore === aScore) {
          teamB.draws += 1;
          teamB.points += 1;
          teamB.form = [...teamB.form.slice(-4), 'D'];
        } else {
          teamB.losses += 1;
          teamB.form = [...teamB.form.slice(-4), 'L'];
        }
      }
    });
  });

  const rows = Array.from(statsMap.values());

  // Sort by: 1. Points, 2. Goal Difference, 3. Goals For, 4. Wins, 5. Fewer Played
  rows.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
    if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
    if (b.wins !== a.wins) return b.wins - a.wins;
    if (a.played !== b.played) return a.played - b.played;
    return a.club.name.localeCompare(b.club.name);
  });

  return rows.map((row, idx) => ({
    ...row,
    rank: idx + 1,
  }));
}

/**
 * FC27 OFFICIAL TEAM RANKING (EXACT ORDER & SPELLING — 01 TO 17)
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
    licenseCode: `TM-FC27-${String(rankNum).padStart(3, '0')}`,
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
    id: 'superleague-infinity-launch',
    referenceCode: 'SUPERLEAGUE INFINITY',
    category: 'SUPERLEAGUE',
    categoryFa: 'سوپرلیگ اینفینیتی',
    statusBadgeEn: 'LIVE STANDINGS & RESULTS',
    statusBadgeFa: 'جدول و نتایج زنده',
    titleEn: 'SUPERLEAGUE INFINITY — League 1 & League 2 Standings & Match Results',
    titleFa: '🚨 جدول رده‌بندی و نتایج رسمی SUPERLEAGUE INFINITY (لیگ ۱ و لیگ ۲) ⚡️',
    summaryEn:
      'Official match results for Weeks 1–3 and live standings tables for League 1 and League 2 are now updated.',
    summaryFa:
      '🤍 نتایج رسمی بازی‌های هفته اول تا سوم و جدول رده‌بندی لیگ ۱ و لیگ ۲ سوپرلیگ اینفینیتی بروزرسانی شد.',
    bodyEn: [
      '🚨 Pro Clubs SUPERLEAGUE INFINITY is officially underway across League 1 and League 2! ⚡️',
      '🤍 League 1 Teams: VIPERS, NOOSHMAK SAZI, AVENGERS, CAPITAN FC, HADI KOJAST, FC ADAB, ACHMAZ.',
      '🤍 League 2 Teams: AFTABESAZI, SHAMOOSHAK, GUARDIANS, MESSHAHR, CHAEE KHORAN, BEDEHKARAN, WLF OG.',
      '🤍 Teams compete in two-legged (Match 1 & Match 2) fixtures across 7 official matchweeks.',
      '☠️ CHAMPIONS SUPERCUP — At the conclusion of the leagues, the league champions will meet in a special Supercup showdown to determine the ultimate champion 💞',
    ],
    bodyFa: [
      '🚨 رقابت‌های لیگ پروکلاب SUPERLEAGUE INFINITY در دو سطح لیگ ۱ و لیگ ۲ در حال برگزاری است! ⚡️',
      '🤍 تیم‌های لیگ ۱: VIPERS، NOOSHMAK SAZI، AVENGERS، CAPITAN FC، HADI KOJAST، FC ADAB و ACHMAZ.',
      '🤍 تیم‌های لیگ ۲: AFTABESAZI، SHAMOOSHAK، GUARDIANS، MESSHAHR، CHAEE KHORAN، BEDEHKARAN و WLF OG.',
      '🤍 در پایان مسابقات، تیم‌ها بر اساس نتایج و امتیازات کسب‌شده در جدول رده‌بندی قرار می‌گیرند و قهرمان‌های دو لیگ در دیدار ویژه سوپرکاپ قهرمانان به مصاف هم می‌روند 🔥',
    ],
    publishedLabelEn: 'SUPERLEAGUE INFINITY · LIVE',
    publishedLabelFa: 'سوپرلیگ اینفینیتی • بروزرسانی جدول',
    readTimeEn: '2 min',
    readTimeFa: '۲ دقیقه',
    imageAsset: '/assets/aistudio/IMG_2063_2fed4ba6.jpeg',
    registrationUrl: 'https://t.me/Perez_Himself',
    telegramChannels: [
      { label: '@TM_Proclubs', url: 'https://t.me/TM_Proclubs' },
    ],
  },
  {
    id: 'tm-globe-ceremony-announcement',
    referenceCode: 'TM GLOBE — OFFICIAL',
    category: 'OFFICIAL ANNOUNCEMENT',
    categoryFa: 'مراسم TM GLOBE',
    statusBadgeEn: '10 AWARDS',
    statusBadgeFa: '۱۰ جایزه فردی',
    titleEn: 'TM GLOBE & Ballon d’Or — Official Individual Honors',
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
      { label: '@TM_Proclubs', url: 'https://t.me/TM_Proclubs' },
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
    return rows.sort((a, b) => a.club.slotNumber.localeCompare(b.club.slotNumber));
  }

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
