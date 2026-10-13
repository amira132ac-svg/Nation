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
  round: number;
  roundName: string;
  roundNameFa: string;
  homeTeam: NationalTeam;
  awayTeam: NationalTeam;
  kickoffDate: string | null;
  kickoffTime: string | null;
  venue: string | null;
  isConfirmed: boolean;
  isBlockbuster?: boolean;
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
  played: number | null;
  won: number | null;
  drawn: number | null;
  lost: number | null;
  goalsFor: number | null;
  goalsAgainst: number | null;
  goalDifference: number | null;
  points: number | null;
}

export const TOURNAMENT_NAME = "TMPROCLUB NATIONS LEAGUE";
export const TOURNAMENT_SUBTITLE = "International Football. One Competition.";
export const TOURNAMENT_ORGANIZER = "TMPROCLUB";
export const TOURNAMENT_STATUS = "TOURNAMENT NOT STARTED";
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

// Official Round 1 Fixtures from IMG_1730.jpeg!
// Matches are officially paired; kickoff times/dates are TBA as instructed by user
export const CONFIRMED_FIXTURES: MatchFixture[] = [
  // Group A (IMG_1730)
  {
    id: 'm-a1',
    group: 'A',
    round: 1,
    roundName: 'Round 1 / Matchday 1',
    roundNameFa: 'هفته اول / دور ۱',
    homeTeam: GROUP_A_TEAMS[0], // Argentina
    awayTeam: GROUP_A_TEAMS[1], // France
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
    isBlockbuster: true,
  },
  {
    id: 'm-a2',
    group: 'A',
    round: 1,
    roundName: 'Round 1 / Matchday 1',
    roundNameFa: 'هفته اول / دور ۱',
    homeTeam: GROUP_A_TEAMS[2], // Netherlands
    awayTeam: GROUP_A_TEAMS[3], // USA
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
  {
    id: 'm-a3',
    group: 'A',
    round: 1,
    roundName: 'Round 1 / Matchday 1',
    roundNameFa: 'هفته اول / دور ۱',
    homeTeam: GROUP_A_TEAMS[4], // Colombia
    awayTeam: GROUP_A_TEAMS[5], // Cape Verde
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },

  // Group B (IMG_1730)
  {
    id: 'm-b1',
    group: 'B',
    round: 1,
    roundName: 'Round 1 / Matchday 1',
    roundNameFa: 'هفته اول / دور ۱',
    homeTeam: GROUP_B_TEAMS[0], // Spain
    awayTeam: GROUP_B_TEAMS[5], // Norway
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
    isBlockbuster: true,
  },
  {
    id: 'm-b2',
    group: 'B',
    round: 1,
    roundName: 'Round 1 / Matchday 1',
    roundNameFa: 'هفته اول / دور ۱',
    homeTeam: GROUP_B_TEAMS[1], // Brazil
    awayTeam: GROUP_B_TEAMS[4], // Italy
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
    isBlockbuster: true,
  },
  {
    id: 'm-b3',
    group: 'B',
    round: 1,
    roundName: 'Round 1 / Matchday 1',
    roundNameFa: 'هفته اول / دور ۱',
    homeTeam: GROUP_B_TEAMS[2], // Israel
    awayTeam: GROUP_B_TEAMS[3], // Portugal
    kickoffDate: null,
    kickoffTime: null,
    venue: null,
    isConfirmed: true,
  },
];

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

export const INITIAL_STANDINGS_GROUP_A: StandingRow[] = GROUP_A_TEAMS.map((team, index) => ({
  positionIndex: index + 1,
  team,
  played: null,
  won: null,
  drawn: null,
  lost: null,
  goalsFor: null,
  goalsAgainst: null,
  goalDifference: null,
  points: null,
}));

export const INITIAL_STANDINGS_GROUP_B: StandingRow[] = GROUP_B_TEAMS.map((team, index) => ({
  positionIndex: index + 1,
  team,
  played: null,
  won: null,
  drawn: null,
  lost: null,
  goalsFor: null,
  goalsAgainst: null,
  goalDifference: null,
  points: null,
}));
