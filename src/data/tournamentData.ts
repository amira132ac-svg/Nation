export interface NationalTeam {
  id: string;
  name: string;
  nameFa: string;
  code: string;
  group: 'A' | 'B';
  drawIndex: number;
  flagCountry: string;
}

export interface MatchFixture {
  id: string;
  group: 'A' | 'B';
  homeTeam: NationalTeam;
  awayTeam: NationalTeam;
  kickoffDate: string | null;
  kickoffTime: string | null;
  venue: string | null;
  isConfirmed: boolean;
  isBlockbuster?: boolean;
}

export interface MatchResult {
  id: string;
  matchNumber?: number;
  group: 'A' | 'B';
  homeTeam: NationalTeam;
  awayTeam: NationalTeam;
  homeScore: number;
  awayScore: number;
  isFinished: boolean;
  isTechnical?: boolean;
  winnerId: string | null; // null indicates draw
  goalSummaryFa: string;
  goalSummaryEn: string;
}

export interface GroupData {
  id: 'A' | 'B';
  name: string;
  nameFa: string;
  accentColor: string;
  headerBg: string;
  badgeAccent: string;
  teams: NationalTeam[];
}

export interface StandingRow {
  positionIndex: number;
  team: NationalTeam;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  isQualified?: boolean;
}

export const TOURNAMENT_NAME = "TMPROCLUB NATIONS LEAGUE";
export const TOURNAMENT_SUBTITLE = "International Football. One Competition.";
export const TOURNAMENT_ORGANIZER = "TMPROCLUB";
export const TOURNAMENT_STATUS = "GRAND FINAL: ITALY VS BRAZIL";
export const TOTAL_TEAMS = 12;

export interface KnockoutSubMatch {
  matchNumber: number;
  homeScore: number;
  awayScore: number;
  homePenalties?: number;
  awayPenalties?: number;
  isTechnical?: boolean;
  technicalWinner?: 'home' | 'away';
  noteFa?: string;
  noteEn?: string;
}

export interface KnockoutSeries {
  id: string;
  round: 'quarter' | 'semi' | 'final';
  roundTitleFa: string;
  roundTitleEn: string;
  formatFa: string;
  formatEn: string;
  team1: NationalTeam;
  team2: NationalTeam;
  team1SeriesScore: number;
  team2SeriesScore: number;
  winnerTeamId: string | null;
  isCompleted: boolean;
  matches: KnockoutSubMatch[];
  summaryFa: string;
  summaryEn: string;
}

export const GROUP_A_TEAMS: NationalTeam[] = [
  { id: 'arg', name: 'Argentina', nameFa: 'آرژانتین', code: 'ARG', group: 'A', drawIndex: 1, flagCountry: 'argentina' },
  { id: 'fra', name: 'France', nameFa: 'فرانسه', code: 'FRA', group: 'A', drawIndex: 2, flagCountry: 'france' },
  { id: 'ned', name: 'Netherlands', nameFa: 'هلند', code: 'NED', group: 'A', drawIndex: 3, flagCountry: 'netherlands' },
  { id: 'usa', name: 'USA', nameFa: 'آمریکا', code: 'USA', group: 'A', drawIndex: 4, flagCountry: 'usa' },
  { id: 'col', name: 'Colombia', nameFa: 'کلمبیا', code: 'COL', group: 'A', drawIndex: 5, flagCountry: 'colombia' },
  { id: 'cpv', name: 'Cape Verde', nameFa: 'کیپ ورد', code: 'CPV', group: 'A', drawIndex: 6, flagCountry: 'cape verde' },
];

export const GROUP_B_TEAMS: NationalTeam[] = [
  { id: 'esp', name: 'Spain', nameFa: 'اسپانیا', code: 'ESP', group: 'B', drawIndex: 1, flagCountry: 'spain' },
  { id: 'bra', name: 'Brazil', nameFa: 'برزیل', code: 'BRA', group: 'B', drawIndex: 2, flagCountry: 'brazil' },
  { id: 'isr', name: 'Israel', nameFa: 'اسرائیل', code: 'ISR', group: 'B', drawIndex: 3, flagCountry: 'israel' },
  { id: 'por', name: 'Portugal', nameFa: 'پرتغال', code: 'POR', group: 'B', drawIndex: 4, flagCountry: 'portugal' },
  { id: 'ita', name: 'Italy', nameFa: 'ایتالیا', code: 'ITA', group: 'B', drawIndex: 5, flagCountry: 'italy' },
  { id: 'nor', name: 'Norway', nameFa: 'نروژ', code: 'NOR', group: 'B', drawIndex: 6, flagCountry: 'norway' },
];

export const ALL_TEAMS: NationalTeam[] = [...GROUP_A_TEAMS, ...GROUP_B_TEAMS];

const TEAM_MAP: Record<string, NationalTeam> = ALL_TEAMS.reduce((acc, t) => {
  acc[t.id] = t;
  acc[t.name.toLowerCase()] = t;
  acc[t.nameFa] = t;
  return acc;
}, {} as Record<string, NationalTeam>);

const getTeam = (key: string): NationalTeam => {
  const t = TEAM_MAP[key.toLowerCase()];
  if (!t) throw new Error(`Team not found: ${key}`);
  return t;
};

// ==========================================
// 1. OFFICIAL COMPLETED MATCH RESULTS (30 Matches — Both Groups Completed)
// ==========================================
export const PLAYED_RESULTS: MatchResult[] = [
  // 🔵 GROUP A (15 Matches Played — Group Completed)
  {
    id: 'res-a1',
    matchNumber: 1,
    group: 'A',
    homeTeam: getTeam('netherlands'),
    awayTeam: getTeam('colombia'),
    homeScore: 2,
    awayScore: 1,
    isFinished: true,
    winnerId: 'ned',
    goalSummaryFa: 'هلند ۲ - ۱ کلمبیا',
    goalSummaryEn: 'Netherlands 2 - 1 Colombia',
  },
  {
    id: 'res-a2',
    matchNumber: 2,
    group: 'A',
    homeTeam: getTeam('argentina'),
    awayTeam: getTeam('france'),
    homeScore: 4,
    awayScore: 0,
    isFinished: true,
    winnerId: 'arg',
    goalSummaryFa: 'آرژانتین ۴ - ۰ فرانسه (کلین‌شیت)',
    goalSummaryEn: 'Argentina 4 - 0 France (Clean Sheet)',
  },
  {
    id: 'res-a3',
    matchNumber: 3,
    group: 'A',
    homeTeam: getTeam('netherlands'),
    awayTeam: getTeam('usa'),
    homeScore: 1,
    awayScore: 1,
    isFinished: true,
    winnerId: null,
    goalSummaryFa: 'هلند ۱ - ۱ آمریکا (تساوی)',
    goalSummaryEn: 'Netherlands 1 - 1 USA (Draw)',
  },
  {
    id: 'res-a4',
    matchNumber: 4,
    group: 'A',
    homeTeam: getTeam('colombia'),
    awayTeam: getTeam('cape verde'),
    homeScore: 2,
    awayScore: 0,
    isFinished: true,
    winnerId: 'col',
    goalSummaryFa: 'کلمبیا ۲ - ۰ کیپ ورد (کلین‌شیت)',
    goalSummaryEn: 'Colombia 2 - 0 Cape Verde (Clean Sheet)',
  },
  {
    id: 'res-a5',
    matchNumber: 5,
    group: 'A',
    homeTeam: getTeam('cape verde'),
    awayTeam: getTeam('usa'),
    homeScore: 0,
    awayScore: 0,
    isFinished: true,
    winnerId: null,
    goalSummaryFa: 'کیپ ورد ۰ - ۰ آمریکا (تساوی بدون گل)',
    goalSummaryEn: 'Cape Verde 0 - 0 USA (Goalless Draw)',
  },
  {
    id: 'res-a6',
    matchNumber: 6,
    group: 'A',
    homeTeam: getTeam('netherlands'),
    awayTeam: getTeam('argentina'),
    homeScore: 8,
    awayScore: 0,
    isFinished: true,
    winnerId: 'ned',
    goalSummaryFa: 'هلند ۸ - ۰ آرژانتین (برد قاطع)',
    goalSummaryEn: 'Netherlands 8 - 0 Argentina (Decisive Win)',
  },
  {
    id: 'res-a7',
    matchNumber: 7,
    group: 'A',
    homeTeam: getTeam('argentina'),
    awayTeam: getTeam('usa'),
    homeScore: 1,
    awayScore: 2,
    isFinished: true,
    winnerId: 'usa',
    goalSummaryFa: 'آرژانتین ۱ - ۲ آمریکا',
    goalSummaryEn: 'Argentina 1 - 2 USA',
  },
  {
    id: 'res-a8',
    matchNumber: 8,
    group: 'A',
    homeTeam: getTeam('argentina'),
    awayTeam: getTeam('colombia'),
    homeScore: 3,
    awayScore: 0,
    isFinished: true,
    isTechnical: true,
    winnerId: 'arg',
    goalSummaryFa: 'آرژانتین ۳ - ۰ کلمبیا (نتیجه فنی)',
    goalSummaryEn: 'Argentina 3 - 0 Colombia (Technical Result)',
  },
  {
    id: 'res-a9',
    matchNumber: 9,
    group: 'A',
    homeTeam: getTeam('netherlands'),
    awayTeam: getTeam('cape verde'),
    homeScore: 3,
    awayScore: 0,
    isFinished: true,
    winnerId: 'ned',
    goalSummaryFa: 'هلند ۳ - ۰ کیپ ورد (کلین‌شیت)',
    goalSummaryEn: 'Netherlands 3 - 0 Cape Verde (Clean Sheet)',
  },
  {
    id: 'res-a10',
    matchNumber: 10,
    group: 'A',
    homeTeam: getTeam('usa'),
    awayTeam: getTeam('colombia'),
    homeScore: 3,
    awayScore: 0,
    isFinished: true,
    winnerId: 'usa',
    goalSummaryFa: 'آمریکا ۳ - ۰ کلمبیا (کلین‌شیت)',
    goalSummaryEn: 'USA 3 - 0 Colombia (Clean Sheet)',
  },
  {
    id: 'res-a11',
    matchNumber: 11,
    group: 'A',
    homeTeam: getTeam('usa'),
    awayTeam: getTeam('france'),
    homeScore: 2,
    awayScore: 1,
    isFinished: true,
    winnerId: 'usa',
    goalSummaryFa: 'آمریکا ۲ - ۱ فرانسه',
    goalSummaryEn: 'USA 2 - 1 France',
  },
  {
    id: 'res-a12',
    matchNumber: 12,
    group: 'A',
    homeTeam: getTeam('netherlands'),
    awayTeam: getTeam('france'),
    homeScore: 2,
    awayScore: 2,
    isFinished: true,
    winnerId: null,
    goalSummaryFa: 'هلند ۲ - ۲ فرانسه (تساوی)',
    goalSummaryEn: 'Netherlands 2 - 2 France (Draw)',
  },
  {
    id: 'res-a13',
    matchNumber: 13,
    group: 'A',
    homeTeam: getTeam('argentina'),
    awayTeam: getTeam('cape verde'),
    homeScore: 2,
    awayScore: 1,
    isFinished: true,
    winnerId: 'arg',
    goalSummaryFa: 'آرژانتین ۲ - ۱ کیپ ورد',
    goalSummaryEn: 'Argentina 2 - 1 Cape Verde',
  },
  {
    id: 'res-a14',
    matchNumber: 14,
    group: 'A',
    homeTeam: getTeam('france'),
    awayTeam: getTeam('colombia'),
    homeScore: 2,
    awayScore: 2,
    isFinished: true,
    winnerId: null,
    goalSummaryFa: 'فرانسه ۲ - ۲ کلمبیا (تساوی)',
    goalSummaryEn: 'France 2 - 2 Colombia (Draw)',
  },
  {
    id: 'res-a15',
    matchNumber: 15,
    group: 'A',
    homeTeam: getTeam('cape verde'),
    awayTeam: getTeam('france'),
    homeScore: 1,
    awayScore: 1,
    isFinished: true,
    winnerId: null,
    goalSummaryFa: 'کیپ ورد ۱ - ۱ فرانسه (تساوی)',
    goalSummaryEn: 'Cape Verde 1 - 1 France (Draw)',
  },

  // 🔵 GROUP B (15 Matches Played — Group Completed)
  {
    id: 'res-b1',
    matchNumber: 1,
    group: 'B',
    homeTeam: getTeam('israel'),
    awayTeam: getTeam('portugal'),
    homeScore: 1,
    awayScore: 0,
    isFinished: true,
    winnerId: 'isr',
    goalSummaryFa: 'اسرائیل ۱ - ۰ پرتغال (کلین‌شیت)',
    goalSummaryEn: 'Israel 1 - 0 Portugal (Clean Sheet)',
  },
  {
    id: 'res-b2',
    matchNumber: 2,
    group: 'B',
    homeTeam: getTeam('italy'),
    awayTeam: getTeam('brazil'),
    homeScore: 0,
    awayScore: 0,
    isFinished: true,
    winnerId: null,
    goalSummaryFa: 'ایتالیا ۰ - ۰ برزیل (تساوی بدون گل)',
    goalSummaryEn: 'Italy 0 - 0 Brazil (Goalless Draw)',
  },
  {
    id: 'res-b3',
    matchNumber: 3,
    group: 'B',
    homeTeam: getTeam('spain'),
    awayTeam: getTeam('norway'),
    homeScore: 1,
    awayScore: 1,
    isFinished: true,
    winnerId: null,
    goalSummaryFa: 'اسپانیا ۱ - ۱ نروژ (تساوی)',
    goalSummaryEn: 'Spain 1 - 1 Norway (Draw)',
  },
  {
    id: 'res-b4',
    matchNumber: 4,
    group: 'B',
    homeTeam: getTeam('italy'),
    awayTeam: getTeam('spain'),
    homeScore: 1,
    awayScore: 0,
    isFinished: true,
    winnerId: 'ita',
    goalSummaryFa: 'ایتالیا ۱ - ۰ اسپانیا (کلین‌شیت)',
    goalSummaryEn: 'Italy 1 - 0 Spain (Clean Sheet)',
  },
  {
    id: 'res-b5',
    matchNumber: 5,
    group: 'B',
    homeTeam: getTeam('israel'),
    awayTeam: getTeam('brazil'),
    homeScore: 2,
    awayScore: 0,
    isFinished: true,
    winnerId: 'isr',
    goalSummaryFa: 'اسرائیل ۲ - ۰ برزیل (کلین‌شیت)',
    goalSummaryEn: 'Israel 2 - 0 Brazil (Clean Sheet)',
  },
  {
    id: 'res-b6',
    matchNumber: 6,
    group: 'B',
    homeTeam: getTeam('israel'),
    awayTeam: getTeam('italy'),
    homeScore: 2,
    awayScore: 1,
    isFinished: true,
    winnerId: 'isr',
    goalSummaryFa: 'اسرائیل ۲ - ۱ ایتالیا',
    goalSummaryEn: 'Israel 2 - 1 Italy',
  },
  {
    id: 'res-b7',
    matchNumber: 7,
    group: 'B',
    homeTeam: getTeam('spain'),
    awayTeam: getTeam('portugal'),
    homeScore: 3,
    awayScore: 0,
    isFinished: true,
    isTechnical: true,
    winnerId: 'esp',
    goalSummaryFa: 'اسپانیا ۳ - ۰ پرتغال (نتیجه فنی)',
    goalSummaryEn: 'Spain 3 - 0 Portugal (Technical Result)',
  },
  {
    id: 'res-b8',
    matchNumber: 8,
    group: 'B',
    homeTeam: getTeam('israel'),
    awayTeam: getTeam('spain'),
    homeScore: 4,
    awayScore: 1,
    isFinished: true,
    winnerId: 'isr',
    goalSummaryFa: 'اسرائیل ۴ - ۱ اسپانیا',
    goalSummaryEn: 'Israel 4 - 1 Spain',
  },
  {
    id: 'res-b9',
    matchNumber: 9,
    group: 'B',
    homeTeam: getTeam('portugal'),
    awayTeam: getTeam('norway'),
    homeScore: 2,
    awayScore: 0,
    isFinished: true,
    winnerId: 'por',
    goalSummaryFa: 'پرتغال ۲ - ۰ نروژ (کلین‌شیت)',
    goalSummaryEn: 'Portugal 2 - 0 Norway (Clean Sheet)',
  },
  {
    id: 'res-b10',
    matchNumber: 10,
    group: 'B',
    homeTeam: getTeam('italy'),
    awayTeam: getTeam('norway'),
    homeScore: 3,
    awayScore: 0,
    isFinished: true,
    isTechnical: true,
    winnerId: 'ita',
    goalSummaryFa: 'ایتالیا ۳ - ۰ نروژ (نتیجه فنی)',
    goalSummaryEn: 'Italy 3 - 0 Norway (Technical Result)',
  },
  {
    id: 'res-b11',
    matchNumber: 11,
    group: 'B',
    homeTeam: getTeam('brazil'),
    awayTeam: getTeam('norway'),
    homeScore: 7,
    awayScore: 0,
    isFinished: true,
    winnerId: 'bra',
    goalSummaryFa: 'برزیل ۷ - ۰ نروژ (برد پرگل)',
    goalSummaryEn: 'Brazil 7 - 0 Norway (Decisive Win)',
  },
  {
    id: 'res-b12',
    matchNumber: 12,
    group: 'B',
    homeTeam: getTeam('brazil'),
    awayTeam: getTeam('portugal'),
    homeScore: 3,
    awayScore: 0,
    isFinished: true,
    isTechnical: true,
    winnerId: 'bra',
    goalSummaryFa: 'برزیل ۳ - ۰ پرتغال (نتیجه فنی)',
    goalSummaryEn: 'Brazil 3 - 0 Portugal (Technical Result)',
  },
  {
    id: 'res-b13',
    matchNumber: 13,
    group: 'B',
    homeTeam: getTeam('italy'),
    awayTeam: getTeam('portugal'),
    homeScore: 3,
    awayScore: 0,
    isFinished: true,
    winnerId: 'ita',
    goalSummaryFa: 'ایتالیا ۳ - ۰ پرتغال (کلین‌شیت)',
    goalSummaryEn: 'Italy 3 - 0 Portugal (Clean Sheet)',
  },
  {
    id: 'res-b14',
    matchNumber: 14,
    group: 'B',
    homeTeam: getTeam('brazil'),
    awayTeam: getTeam('spain'),
    homeScore: 1,
    awayScore: 1,
    isFinished: true,
    winnerId: null,
    goalSummaryFa: 'برزیل ۱ - ۱ اسپانیا (تساوی)',
    goalSummaryEn: 'Brazil 1 - 1 Spain (Draw)',
  },
  {
    id: 'res-b15',
    matchNumber: 15,
    group: 'B',
    homeTeam: getTeam('israel'),
    awayTeam: getTeam('norway'),
    homeScore: 6,
    awayScore: 0,
    isFinished: true,
    winnerId: 'isr',
    goalSummaryFa: 'اسرائیل ۶ - ۰ نروژ (برد قاطع)',
    goalSummaryEn: 'Israel 6 - 0 Norway (Decisive Win)',
  },
];

// ==========================================
// 2. REMAINING UPCOMING FIXTURES (0 Remaining — All 30 Group Matches Completed)
// ==========================================
export const REMAINING_FIXTURES: MatchFixture[] = [];

// Compatibility export
export const CONFIRMED_FIXTURES: MatchFixture[] = REMAINING_FIXTURES;

export const GROUPS: GroupData[] = [
  {
    id: 'A',
    name: 'GROUP A',
    nameFa: 'گروه A',
    accentColor: '#FFD700',
    headerBg: 'bg-[#FFCC00]',
    badgeAccent: 'text-slate-950',
    teams: GROUP_A_TEAMS,
  },
  {
    id: 'B',
    name: 'GROUP B',
    nameFa: 'گروه B',
    accentColor: '#0052FF',
    headerBg: 'bg-[#0052FF]',
    badgeAccent: 'text-white',
    teams: GROUP_B_TEAMS,
  },
];

// ==========================================
// 3. OFFICIAL CALCULATED STANDINGS (COMPLETED)
// ==========================================
// GROUP A (COMPLETED):
// 1. Netherlands: P: 5 | Pts: 11 | GD: +11 (W:3, D:2, L:0, GF:16, GA:5)
// 2. USA:         P: 5 | Pts: 11 | GD: +5  (W:3, D:2, L:0, GF:8,  GA:3)
// 3. Argentina:   P: 5 | Pts: 9  | GD: -1  (W:3, D:0, L:2, GF:10, GA:11)
// 4. Colombia:    P: 5 | Pts: 4  | GD: -5  (W:1, D:1, L:3, GF:5,  GA:10)
// 5. France:      P: 5 | Pts: 3  | GD: -5  (W:0, D:3, L:2, GF:6,  GA:11)
// 6. Cape Verde:  P: 5 | Pts: 2  | GD: -6  (W:0, D:2, L:3, GF:2,  GA:8)
export const OFFICIAL_STANDINGS_GROUP_A: StandingRow[] = [
  {
    positionIndex: 1,
    team: getTeam('netherlands'),
    played: 5,
    won: 3,
    drawn: 2,
    lost: 0,
    goalsFor: 16,
    goalsAgainst: 5,
    goalDifference: 11,
    points: 11,
    isQualified: true,
  },
  {
    positionIndex: 2,
    team: getTeam('usa'),
    played: 5,
    won: 3,
    drawn: 2,
    lost: 0,
    goalsFor: 8,
    goalsAgainst: 3,
    goalDifference: 5,
    points: 11,
    isQualified: true,
  },
  {
    positionIndex: 3,
    team: getTeam('argentina'),
    played: 5,
    won: 3,
    drawn: 0,
    lost: 2,
    goalsFor: 10,
    goalsAgainst: 11,
    goalDifference: -1,
    points: 9,
    isQualified: true,
  },
  {
    positionIndex: 4,
    team: getTeam('colombia'),
    played: 5,
    won: 1,
    drawn: 1,
    lost: 3,
    goalsFor: 5,
    goalsAgainst: 10,
    goalDifference: -5,
    points: 4,
    isQualified: true,
  },
  {
    positionIndex: 5,
    team: getTeam('france'),
    played: 5,
    won: 0,
    drawn: 3,
    lost: 2,
    goalsFor: 6,
    goalsAgainst: 11,
    goalDifference: -5,
    points: 3,
    isQualified: false,
  },
  {
    positionIndex: 6,
    team: getTeam('cape verde'),
    played: 5,
    won: 0,
    drawn: 2,
    lost: 3,
    goalsFor: 2,
    goalsAgainst: 8,
    goalDifference: -6,
    points: 2,
    isQualified: false,
  },
];

// GROUP B (COMPLETED):
// 1. Israel:   P: 5 | Pts: 15 | GD: +13 (W:5, D:0, L:0, GF:15, GA:2)
// 2. Italy:    P: 5 | Pts: 10 | GD: +6  (W:3, D:1, L:1, GF:8,  GA:2)
// 3. Brazil:   P: 5 | Pts: 8  | GD: +8  (W:2, D:2, L:1, GF:11, GA:3)
// 4. Spain:    P: 5 | Pts: 5  | GD: -1  (W:1, D:2, L:2, GF:6,  GA:7)
// 5. Portugal: P: 5 | Pts: 3  | GD: -8  (W:1, D:0, L:4, GF:2,  GA:10)
// 6. Norway:   P: 5 | Pts: 1  | GD: -18 (W:0, D:1, L:4, GF:1,  GA:19)
export const OFFICIAL_STANDINGS_GROUP_B: StandingRow[] = [
  {
    positionIndex: 1,
    team: getTeam('israel'),
    played: 5,
    won: 5,
    drawn: 0,
    lost: 0,
    goalsFor: 15,
    goalsAgainst: 2,
    goalDifference: 13,
    points: 15,
    isQualified: true,
  },
  {
    positionIndex: 2,
    team: getTeam('italy'),
    played: 5,
    won: 3,
    drawn: 1,
    lost: 1,
    goalsFor: 8,
    goalsAgainst: 2,
    goalDifference: 6,
    points: 10,
    isQualified: true,
  },
  {
    positionIndex: 3,
    team: getTeam('brazil'),
    played: 5,
    won: 2,
    drawn: 2,
    lost: 1,
    goalsFor: 11,
    goalsAgainst: 3,
    goalDifference: 8,
    points: 8,
    isQualified: true,
  },
  {
    positionIndex: 4,
    team: getTeam('spain'),
    played: 5,
    won: 1,
    drawn: 2,
    lost: 2,
    goalsFor: 6,
    goalsAgainst: 7,
    goalDifference: -1,
    points: 5,
    isQualified: true,
  },
  {
    positionIndex: 5,
    team: getTeam('portugal'),
    played: 5,
    won: 1,
    drawn: 0,
    lost: 4,
    goalsFor: 2,
    goalsAgainst: 10,
    goalDifference: -8,
    points: 3,
    isQualified: false,
  },
  {
    positionIndex: 6,
    team: getTeam('norway'),
    played: 5,
    won: 0,
    drawn: 1,
    lost: 4,
    goalsFor: 1,
    goalsAgainst: 19,
    goalDifference: -18,
    points: 1,
    isQualified: false,
  },
];

// Compatibility exports
export const INITIAL_STANDINGS_GROUP_A = OFFICIAL_STANDINGS_GROUP_A;
export const INITIAL_STANDINGS_GROUP_B = OFFICIAL_STANDINGS_GROUP_B;

// ==========================================
// 4. TOURNAMENT PLAYER STATS & METRICS
// ==========================================
export interface PlayerStatItem {
  id: string;
  rank: number;
  name: string;
  nameFa: string;
  team: NationalTeam;
  value: number;
  matchesPlayed: number;
  position: string;
  positionFa: string;
}

export const TOURNAMENT_OVERVIEW_STATS = {
  totalGoals: 90,
  matchesPlayed: 30,
  goalsPerMatch: '3.00',
  cleanSheets: 18,
};

export const TOURNAMENT_TOP_SCORERS: PlayerStatItem[] = [];

export const TOURNAMENT_TOP_ASSISTS: PlayerStatItem[] = [];

// ==========================================
// 5. OFFICIAL KNOCKOUT STAGE (BEST OF 3) & GRAND FINAL
// ==========================================

export const QUARTER_FINALS: KnockoutSeries[] = [
  {
    id: 'qf-1',
    round: 'quarter',
    roundTitleFa: 'یک‌چهارم نهایی - بازی اول',
    roundTitleEn: 'Quarter-Final 1',
    formatFa: 'بهترین از ۳ بازی (Best of 3)',
    formatEn: 'Best of 3',
    team1: getTeam('italy'),
    team2: getTeam('argentina'),
    team1SeriesScore: 2,
    team2SeriesScore: 0,
    winnerTeamId: 'ita',
    isCompleted: true,
    summaryFa: 'ایتالیا با برد ۲-۰ در سری صعود کرد',
    summaryEn: 'ITALY QUALIFIED – 2-0',
    matches: [
      {
        matchNumber: 1,
        homeScore: 2,
        awayScore: 0,
        noteFa: 'بازی ۱: ایتالیا ۲ – ۰ آرژانتین',
        noteEn: 'Match 1: Italy 2–0 Argentina',
      },
      {
        matchNumber: 2,
        homeScore: 5,
        awayScore: 1,
        noteFa: 'بازی ۲: ایتالیا ۵ – ۱ آرژانتین',
        noteEn: 'Match 2: Italy 5–1 Argentina',
      },
    ],
  },
  {
    id: 'qf-2',
    round: 'quarter',
    roundTitleFa: 'یک‌چهارم نهایی - بازی دوم',
    roundTitleEn: 'Quarter-Final 2',
    formatFa: 'بهترین از ۳ بازی (Best of 3)',
    formatEn: 'Best of 3',
    team1: getTeam('netherlands'),
    team2: getTeam('spain'),
    team1SeriesScore: 2,
    team2SeriesScore: 0,
    winnerTeamId: 'ned',
    isCompleted: true,
    summaryFa: 'هلند با برد ۲-۰ در سری صعود کرد',
    summaryEn: 'NETHERLANDS QUALIFIED – 2-0',
    matches: [
      {
        matchNumber: 1,
        homeScore: 3,
        awayScore: 1,
        noteFa: 'بازی ۱: هلند ۳ – ۱ اسپانیا',
        noteEn: 'Match 1: Netherlands 3–1 Spain',
      },
      {
        matchNumber: 2,
        homeScore: 8,
        awayScore: 0,
        noteFa: 'بازی ۲: هلند ۸ – ۰ اسپانیا',
        noteEn: 'Match 2: Netherlands 8–0 Spain',
      },
    ],
  },
  {
    id: 'qf-3',
    round: 'quarter',
    roundTitleFa: 'یک‌چهارم نهایی - بازی سوم',
    roundTitleEn: 'Quarter-Final 3',
    formatFa: 'بهترین از ۳ بازی (Best of 3)',
    formatEn: 'Best of 3',
    team1: getTeam('brazil'),
    team2: getTeam('usa'),
    team1SeriesScore: 2,
    team2SeriesScore: 0,
    winnerTeamId: 'bra',
    isCompleted: true,
    summaryFa: 'برزیل با برد ۲-۰ در سری صعود کرد',
    summaryEn: 'BRAZIL QUALIFIED – 2-0',
    matches: [
      {
        matchNumber: 1,
        homeScore: 1,
        awayScore: 0,
        noteFa: 'بازی ۱: برزیل ۱ – ۰ آمریکا',
        noteEn: 'Match 1: Brazil 1–0 USA',
      },
      {
        matchNumber: 2,
        homeScore: 1,
        awayScore: 1,
        homePenalties: 5,
        awayPenalties: 3,
        noteFa: 'بازی ۲: برزیل ۱ – ۱ آمریکا (پنالتی ۵–۳ به سود برزیل)',
        noteEn: 'Match 2: Brazil 1–1 USA (5–3 PEN)',
      },
    ],
  },
  {
    id: 'qf-4',
    round: 'quarter',
    roundTitleFa: 'یک‌چهارم نهایی - بازی چهارم',
    roundTitleEn: 'Quarter-Final 4',
    formatFa: 'بهترین از ۳ بازی (Best of 3)',
    formatEn: 'Best of 3',
    team1: getTeam('israel'),
    team2: getTeam('colombia'),
    team1SeriesScore: 1,
    team2SeriesScore: 0,
    winnerTeamId: 'isr',
    isCompleted: true,
    summaryFa: 'اسرائیل با برد ۱-۰ فنی صعود کرد',
    summaryEn: 'ISRAEL QUALIFIED – 1-0',
    matches: [
      {
        matchNumber: 1,
        homeScore: 3,
        awayScore: 0,
        isTechnical: true,
        technicalWinner: 'home',
        noteFa: 'کلمبیا: باخت فنی (۳–۰) · اسرائیل: برد فنی',
        noteEn: 'Colombia: Technical Defeat (3–0) · Israel: Technical Victory',
      },
    ],
  },
];

export const SEMI_FINALS: KnockoutSeries[] = [
  {
    id: 'sf-1',
    round: 'semi',
    roundTitleFa: 'نیمه‌نهایی - بازی اول',
    roundTitleEn: 'Semi-Final 1',
    formatFa: 'بهترین از ۳ بازی (Best of 3)',
    formatEn: 'Best of 3',
    team1: getTeam('italy'),
    team2: getTeam('netherlands'),
    team1SeriesScore: 2,
    team2SeriesScore: 1,
    winnerTeamId: 'ita',
    isCompleted: true,
    summaryFa: 'ایتالیا با برتری ۲-۱ در سری به فینال رسید',
    summaryEn: 'ITALY QUALIFIED – 2-1',
    matches: [
      {
        matchNumber: 1,
        homeScore: 3,
        awayScore: 0,
        isTechnical: true,
        technicalWinner: 'home',
        noteFa: 'بازی ۱: ایتالیا ۳ – ۰ هلند (فنی)',
        noteEn: 'Match 1: Italy 3–0 Netherlands (Technical)',
      },
      {
        matchNumber: 2,
        homeScore: 1,
        awayScore: 2,
        noteFa: 'بازی ۲: ایتالیا ۱ – ۲ هلند',
        noteEn: 'Match 2: Italy 1–2 Netherlands',
      },
      {
        matchNumber: 3,
        homeScore: 0,
        awayScore: 0,
        homePenalties: 4,
        awayPenalties: 2,
        noteFa: 'بازی ۳: ایتالیا ۰ – ۰ هلند (پنالتی ۴–۲ به سود ایتالیا)',
        noteEn: 'Match 3: Italy 0–0 Netherlands (4–2 PEN)',
      },
    ],
  },
  {
    id: 'sf-2',
    round: 'semi',
    roundTitleFa: 'نیمه‌نهایی - بازی دوم',
    roundTitleEn: 'Semi-Final 2',
    formatFa: 'بهترین از ۳ بازی (Best of 3)',
    formatEn: 'Best of 3',
    team1: getTeam('brazil'),
    team2: getTeam('israel'),
    team1SeriesScore: 2,
    team2SeriesScore: 1,
    winnerTeamId: 'bra',
    isCompleted: true,
    summaryFa: 'برزیل با برتری ۲-۱ در سری به فینال رسید',
    summaryEn: 'BRAZIL QUALIFIED – 2-1',
    matches: [
      {
        matchNumber: 1,
        homeScore: 1,
        awayScore: 2,
        noteFa: 'بازی ۱: برزیل ۱ – ۲ اسرائیل',
        noteEn: 'Match 1: Brazil 1–2 Israel',
      },
      {
        matchNumber: 2,
        homeScore: 1,
        awayScore: 0,
        noteFa: 'بازی ۲: برزیل ۱ – ۰ اسرائیل',
        noteEn: 'Match 2: Brazil 1–0 Israel',
      },
      {
        matchNumber: 3,
        homeScore: 1,
        awayScore: 0,
        noteFa: 'بازی ۳: برزیل ۱ – ۰ اسرائیل',
        noteEn: 'Match 3: Brazil 1–0 Israel',
      },
    ],
  },
];

export const GRAND_FINAL_MATCH = {
  id: 'final-grand',
  titleFa: 'فینال بزرگ لیگ ملت‌های TM PROCLUB',
  titleEn: 'TM PROCLUB NATIONS LEAGUE GRAND FINAL',
  team1: getTeam('italy'),
  team2: getTeam('brazil'),
  statusFa: 'فینالیست‌ها مشخص شدند · مسیر جام تکمیل شد',
  statusEn: 'FINALISTS CONFIRMED · The road to the trophy is complete',
  descriptionFa: 'ایتالیا 🇮🇹 در برابر برزیل 🇧🇷 برای کسب عنوان قهرمانی رقابت خواهند کرد.',
  descriptionEn: 'Italy 🇮🇹 vs Brazil 🇧🇷 will battle for the ultimate championship crown.',
};

