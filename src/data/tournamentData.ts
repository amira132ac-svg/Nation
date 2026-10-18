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
  group: 'A' | 'B';
  homeTeam: NationalTeam;
  awayTeam: NationalTeam;
  homeScore: number;
  awayScore: number;
  isFinished: boolean;
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
}

export const TOURNAMENT_NAME = "TMPROCLUB NATIONS LEAGUE";
export const TOURNAMENT_SUBTITLE = "International Football. One Competition.";
export const TOURNAMENT_ORGANIZER = "TMPROCLUB";
export const TOURNAMENT_STATUS = "TOURNAMENT IN PROGRESS";
export const TOTAL_TEAMS = 12;

export const GROUP_A_TEAMS: NationalTeam[] = [
  { id: 'arg', name: 'Argentina', nameFa: 'آرژانتین', code: 'ARG', group: 'A', drawIndex: 1, flagCountry: 'argentina' },
  { id: 'fra', name: 'France', nameFa: 'فرانسه', code: 'FRA', group: 'A', drawIndex: 2, flagCountry: 'france' },
  { id: 'ned', name: 'Netherlands', nameFa: 'هلند', code: 'NED', group: 'A', drawIndex: 3, flagCountry: 'netherlands' },
  { id: 'usa', name: 'USA', nameFa: 'ایالات متحده', code: 'USA', group: 'A', drawIndex: 4, flagCountry: 'usa' },
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
// 1. OFFICIAL COMPLETED MATCH RESULTS
// ==========================================
export const PLAYED_RESULTS: MatchResult[] = [
  // Group A
  {
    id: 'res-a1',
    group: 'A',
    homeTeam: getTeam('argentina'),
    awayTeam: getTeam('france'),
    homeScore: 4,
    awayScore: 0,
    isFinished: true,
    winnerId: 'arg',
    goalSummaryFa: 'آرژانتین ۴ گل (برد قاطع) • فرانسه بدون گل',
    goalSummaryEn: 'Argentina 4 Goals (Decisive Win) • France 0 Goals',
  },
  {
    id: 'res-a2',
    group: 'A',
    homeTeam: getTeam('netherlands'),
    awayTeam: getTeam('colombia'),
    homeScore: 2,
    awayScore: 1,
    isFinished: true,
    winnerId: 'ned',
    goalSummaryFa: 'هلند ۲ گل (برد) • کلمبیا ۱ گل',
    goalSummaryEn: 'Netherlands 2 Goals (Win) • Colombia 1 Goal',
  },
  {
    id: 'res-a3',
    group: 'A',
    homeTeam: getTeam('netherlands'),
    awayTeam: getTeam('usa'),
    homeScore: 1,
    awayScore: 1,
    isFinished: true,
    winnerId: null,
    goalSummaryFa: 'هلند ۱ گل • ایالات متحده ۱ گل (تساوی ۱ - ۱)',
    goalSummaryEn: 'Netherlands 1 Goal • USA 1 Goal (1 - 1 Draw)',
  },
  {
    id: 'res-a4',
    group: 'A',
    homeTeam: getTeam('colombia'),
    awayTeam: getTeam('cape verde'),
    homeScore: 2,
    awayScore: 0,
    isFinished: true,
    winnerId: 'col',
    goalSummaryFa: 'کلمبیا ۲ گل (برد کلین‌شیت) • کیپ ورد بدون گل',
    goalSummaryEn: 'Colombia 2 Goals (Clean Sheet Win) • Cape Verde 0 Goals',
  },

  // Group B
  {
    id: 'res-b1',
    group: 'B',
    homeTeam: getTeam('israel'),
    awayTeam: getTeam('portugal'),
    homeScore: 1,
    awayScore: 0,
    isFinished: true,
    winnerId: 'isr',
    goalSummaryFa: 'اسرائیل ۱ گل (برد) • پرتغال بدون گل',
    goalSummaryEn: 'Israel 1 Goal (Win) • Portugal 0 Goals',
  },
  {
    id: 'res-b2',
    group: 'B',
    homeTeam: getTeam('italy'),
    awayTeam: getTeam('brazil'),
    homeScore: 0,
    awayScore: 0,
    isFinished: true,
    winnerId: null,
    goalSummaryFa: 'بدون گل زده (تساوی بدون گل ۰ - ۰)',
    goalSummaryEn: 'Goalless (0 - 0 Draw)',
  },
  {
    id: 'res-b3',
    group: 'B',
    homeTeam: getTeam('spain'),
    awayTeam: getTeam('norway'),
    homeScore: 1,
    awayScore: 1,
    isFinished: true,
    winnerId: null,
    goalSummaryFa: 'اسپانیا ۱ گل • نروژ ۱ گل (تساوی ۱ - ۱)',
    goalSummaryEn: 'Spain 1 Goal • Norway 1 Goal (1 - 1 Draw)',
  },
  {
    id: 'res-b4',
    group: 'B',
    homeTeam: getTeam('italy'),
    awayTeam: getTeam('spain'),
    homeScore: 1,
    awayScore: 0,
    isFinished: true,
    winnerId: 'ita',
    goalSummaryFa: 'ایتالیا ۱ گل (برد کلین‌شیت) • اسپانیا بدون گل',
    goalSummaryEn: 'Italy 1 Goal (Clean Sheet Win) • Spain 0 Goals',
  },
];

// ==========================================
// 2. REMAINING UPCOMING FIXTURES (Time TBA)
// ==========================================
export const REMAINING_FIXTURES: MatchFixture[] = [
  // Group A (11 matches)
  {
    id: 'fix-a1',
    group: 'A',
    homeTeam: getTeam('argentina'),
    awayTeam: getTeam('netherlands'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
    isBlockbuster: true,
  },
  {
    id: 'fix-a2',
    group: 'A',
    homeTeam: getTeam('france'),
    awayTeam: getTeam('colombia'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-a3',
    group: 'A',
    homeTeam: getTeam('usa'),
    awayTeam: getTeam('cape verde'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-a4',
    group: 'A',
    homeTeam: getTeam('argentina'),
    awayTeam: getTeam('usa'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
    isBlockbuster: true,
  },
  {
    id: 'fix-a5',
    group: 'A',
    homeTeam: getTeam('france'),
    awayTeam: getTeam('cape verde'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-a6',
    group: 'A',
    homeTeam: getTeam('argentina'),
    awayTeam: getTeam('colombia'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-a7',
    group: 'A',
    homeTeam: getTeam('usa'),
    awayTeam: getTeam('france'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-a8',
    group: 'A',
    homeTeam: getTeam('netherlands'),
    awayTeam: getTeam('cape verde'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-a9',
    group: 'A',
    homeTeam: getTeam('argentina'),
    awayTeam: getTeam('cape verde'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-a10',
    group: 'A',
    homeTeam: getTeam('colombia'),
    awayTeam: getTeam('usa'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-a11',
    group: 'A',
    homeTeam: getTeam('france'),
    awayTeam: getTeam('netherlands'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
    isBlockbuster: true,
  },

  // Group B (11 matches)
  {
    id: 'fix-b1',
    group: 'B',
    homeTeam: getTeam('norway'),
    awayTeam: getTeam('portugal'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
    isBlockbuster: true,
  },
  {
    id: 'fix-b2',
    group: 'B',
    homeTeam: getTeam('brazil'),
    awayTeam: getTeam('israel'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-b3',
    group: 'B',
    homeTeam: getTeam('spain'),
    awayTeam: getTeam('portugal'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
    isBlockbuster: true,
  },
  {
    id: 'fix-b4',
    group: 'B',
    homeTeam: getTeam('italy'),
    awayTeam: getTeam('israel'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-b5',
    group: 'B',
    homeTeam: getTeam('norway'),
    awayTeam: getTeam('brazil'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
    isBlockbuster: true,
  },
  {
    id: 'fix-b6',
    group: 'B',
    homeTeam: getTeam('spain'),
    awayTeam: getTeam('israel'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-b7',
    group: 'B',
    homeTeam: getTeam('portugal'),
    awayTeam: getTeam('brazil'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
    isBlockbuster: true,
  },
  {
    id: 'fix-b8',
    group: 'B',
    homeTeam: getTeam('italy'),
    awayTeam: getTeam('norway'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-b9',
    group: 'B',
    homeTeam: getTeam('spain'),
    awayTeam: getTeam('brazil'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
    isBlockbuster: true,
  },
  {
    id: 'fix-b10',
    group: 'B',
    homeTeam: getTeam('israel'),
    awayTeam: getTeam('norway'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'fix-b11',
    group: 'B',
    homeTeam: getTeam('portugal'),
    awayTeam: getTeam('italy'),
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
    isBlockbuster: true,
  },
];

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
// 3. OFFICIAL CALCULATED STANDINGS
// ==========================================
// Group A:
// Netherlands: P 2, W 1, D 1, L 0, GF 3, GA 2, GD +1, Pts 4
// Argentina:   P 1, W 1, D 0, L 0, GF 4, GA 0, GD +4, Pts 3
// Colombia:    P 2, W 1, D 0, L 1, GF 3, GA 2, GD +1, Pts 3
// USA:         P 1, W 0, D 1, L 0, GF 1, GA 1, GD 0,  Pts 1
// Cape Verde:  P 1, W 0, D 0, L 1, GF 0, GA 2, GD -2, Pts 0
// France:      P 1, W 0, D 0, L 1, GF 0, GA 4, GD -4, Pts 0
export const OFFICIAL_STANDINGS_GROUP_A: StandingRow[] = [
  {
    positionIndex: 1,
    team: getTeam('netherlands'),
    played: 2,
    won: 1,
    drawn: 1,
    lost: 0,
    goalsFor: 3,
    goalsAgainst: 2,
    goalDifference: 1,
    points: 4,
  },
  {
    positionIndex: 2,
    team: getTeam('argentina'),
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 4,
    goalsAgainst: 0,
    goalDifference: 4,
    points: 3,
  },
  {
    positionIndex: 3,
    team: getTeam('colombia'),
    played: 2,
    won: 1,
    drawn: 0,
    lost: 1,
    goalsFor: 3,
    goalsAgainst: 2,
    goalDifference: 1,
    points: 3,
  },
  {
    positionIndex: 4,
    team: getTeam('usa'),
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0,
    points: 1,
  },
  {
    positionIndex: 5,
    team: getTeam('cape verde'),
    played: 1,
    won: 0,
    drawn: 0,
    lost: 1,
    goalsFor: 0,
    goalsAgainst: 2,
    goalDifference: -2,
    points: 0,
  },
  {
    positionIndex: 6,
    team: getTeam('france'),
    played: 1,
    won: 0,
    drawn: 0,
    lost: 1,
    goalsFor: 0,
    goalsAgainst: 4,
    goalDifference: -4,
    points: 0,
  },
];

// Group B:
// Italy:    P 2, W 1, D 1, L 0, GF 1, GA 0, GD +1, Pts 4
// Israel:   P 1, W 1, D 0, L 0, GF 1, GA 0, GD +1, Pts 3
// Norway:   P 1, W 0, D 1, L 0, GF 1, GA 1, GD 0,  Pts 1
// Brazil:   P 1, W 0, D 1, L 0, GF 0, GA 0, GD 0,  Pts 1
// Spain:    P 2, W 0, D 1, L 1, GF 1, GA 2, GD -1, Pts 1
// Portugal: P 1, W 0, D 0, L 1, GF 0, GA 1, GD -1, Pts 0
export const OFFICIAL_STANDINGS_GROUP_B: StandingRow[] = [
  {
    positionIndex: 1,
    team: getTeam('italy'),
    played: 2,
    won: 1,
    drawn: 1,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 0,
    goalDifference: 1,
    points: 4,
  },
  {
    positionIndex: 2,
    team: getTeam('israel'),
    played: 1,
    won: 1,
    drawn: 0,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 0,
    goalDifference: 1,
    points: 3,
  },
  {
    positionIndex: 3,
    team: getTeam('norway'),
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 1,
    goalsAgainst: 1,
    goalDifference: 0,
    points: 1,
  },
  {
    positionIndex: 4,
    team: getTeam('brazil'),
    played: 1,
    won: 0,
    drawn: 1,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 1,
  },
  {
    positionIndex: 5,
    team: getTeam('spain'),
    played: 2,
    won: 0,
    drawn: 1,
    lost: 1,
    goalsFor: 1,
    goalsAgainst: 2,
    goalDifference: -1,
    points: 1,
  },
  {
    positionIndex: 6,
    team: getTeam('portugal'),
    played: 1,
    won: 0,
    drawn: 0,
    lost: 1,
    goalsFor: 0,
    goalsAgainst: 1,
    goalDifference: -1,
    points: 0,
  },
];

// Compatibility exports
export const INITIAL_STANDINGS_GROUP_A = OFFICIAL_STANDINGS_GROUP_A;
export const INITIAL_STANDINGS_GROUP_B = OFFICIAL_STANDINGS_GROUP_B;
