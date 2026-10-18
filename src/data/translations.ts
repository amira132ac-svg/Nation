export type Language = 'en' | 'fa';

export interface Translations {
  tournamentTitle: string;
  tournamentSubtitle: string;
  organizer: string;
  statusNotStarted: string;
  statusInProgress: string;
  statusDrawComplete: string;
  viewGroups: string;
  browseTeams: string;
  explore: string;
  
  // Navigation
  navHome: string;
  navResults: string;
  navFixtures: string;
  navStandings: string;
  navStats: string;
  navGroups: string;
  navTeams: string;
  navAbout: string;
  
  // Groups
  groupsBadge: string;
  groupsTitle: string;
  groupA: string;
  groupB: string;
  sixTeams: string;
  drawOrderOfficial: string;
  roundRobinFormat: string;

  // Fixtures
  fixturesBadge: string;
  fixturesTitle: string;
  allMatchdays: string;
  groupAFixtures: string;
  groupBFixtures: string;
  timeTba: string;
  stadiumTba: string;
  versus: string;
  blockbusterClash: string;

  // Results
  resultsBadge: string;
  resultsTitle: string;
  allResults: string;
  groupAResults: string;
  groupBResults: string;
  fullTime: string;

  // Stats
  statsBadge: string;
  statsTitle: string;
  topScorers: string;
  topAssists: string;
  statsEmptyScorers: string;
  statsEmptyAssists: string;
  rank: string;
  player: string;
  goals: string;
  assists: string;
  totalGoals: string;
  matchesPlayedLabel: string;
  goalsPerMatch: string;
  cleanSheets: string;
  refreshData: string;
  syncingData: string;

  // Standings
  standingsBadge: string;
  standingsTitle: string;
  bothGroups: string;
  pos: string;
  team: string;
  played: string;
  won: string;
  drawn: string;
  lost: string;
  gf: string;
  ga: string;
  gd: string;
  pts: string;

  // Teams
  teamsBadge: string;
  teamsTitle: string;
  allNations: string;
  groupANations: string;
  groupBNations: string;
  seed: string;

  // Team Modal
  compLabel: string;
  drawIndexLabel: string;
  tournStatusLabel: string;
  scheduleStateLabel: string;
  tournamentActive: string;
  squadNotice: string;
  closeBtn: string;

  // Fixtures & Results Expand/Collapse
  showAllFixtures: string;
  showLess: string;
  moreMatchesCount: string;
  openFullSchedule: string;
  showAllResults: string;
  collapseResults: string;

  // Match Results Detail & Goal Scoring Clarity
  winner: string;
  draw: string;
  goalWord: string;
  goalsWord: string;
  noGoals: string;
  goalSummary: string;
  wonBy: string;

  // Footer
  rightsReserved: string;
  developedBy: string;
  languageSelect: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    tournamentTitle: "TMPROCLUB NATIONS LEAGUE",
    tournamentSubtitle: "International Football. One Competition.",
    organizer: "TMPROCLUB",
    statusNotStarted: "TOURNAMENT IN PROGRESS",
    statusInProgress: "TOURNAMENT IN PROGRESS",
    statusDrawComplete: "Round 1 Completed",
    viewGroups: "View Groups",
    browseTeams: "12 Nations",
    explore: "Explore",

    navHome: "Home",
    navResults: "Results",
    navFixtures: "Fixtures",
    navStandings: "Standings",
    navStats: "Stats",
    navGroups: "Groups",
    navTeams: "Teams",
    navAbout: "About",

    groupsBadge: "Tournament Pools",
    groupsTitle: "Tournament Groups",
    groupA: "GROUP A",
    groupB: "GROUP B",
    sixTeams: "6 TEAMS",
    drawOrderOfficial: "Official Draw Pools",
    roundRobinFormat: "Round Robin Format",

    fixturesBadge: "Remaining Fixtures",
    fixturesTitle: "Remaining Matches",
    allMatchdays: "All Matches",
    groupAFixtures: "Group A",
    groupBFixtures: "Group B",
    timeTba: "Date & Time TBA",
    stadiumTba: "Venue TBA",
    versus: "VS",
    blockbusterClash: "Featured Clash",

    resultsBadge: "Completed Matches",
    resultsTitle: "Match Results",
    allResults: "All Results",
    groupAResults: "Group A Results",
    groupBResults: "Group B Results",
    fullTime: "FT",

    statsBadge: "Tournament Metrics",
    statsTitle: "Stats",
    topScorers: "Top Scorers",
    topAssists: "Top Assists",
    statsEmptyScorers: "Official top scorers data will appear once match referee reports are registered.",
    statsEmptyAssists: "Official assists data will appear once match referee reports are registered.",
    rank: "Rank",
    player: "Player",
    goals: "Goals",
    assists: "Assists",
    totalGoals: "Total Goals",
    matchesPlayedLabel: "Matches Played",
    goalsPerMatch: "Goals / Match",
    cleanSheets: "Clean Sheets",
    refreshData: "Refresh Data",
    syncingData: "Updating...",

    standingsBadge: "Tournament Table",
    standingsTitle: "Official Standings",
    bothGroups: "Both Groups",
    pos: "Pos.",
    team: "Team",
    played: "P",
    won: "W",
    drawn: "D",
    lost: "L",
    gf: "GF",
    ga: "GA",
    gd: "GD",
    pts: "Pts",

    teamsBadge: "Participating Nations",
    teamsTitle: "National Teams",
    allNations: "All 12 Nations",
    groupANations: "Group A",
    groupBNations: "Group B",
    seed: "Seed",

    compLabel: "Competition",
    drawIndexLabel: "Draw Order Index",
    tournStatusLabel: "Tournament Status",
    scheduleStateLabel: "Schedule State",
    tournamentActive: "In Progress",
    squadNotice: "Official matchday squad rosters and player cards are confirmed by TMPROCLUB committee.",
    closeBtn: "Close Details",

    showAllFixtures: "View All Remaining Matches",
    showLess: "Show Less",
    moreMatchesCount: "more matches",
    openFullSchedule: "Open Full Schedule Drawer",
    showAllResults: "View All Match Results",
    collapseResults: "Show Less",

    winner: "Winner",
    draw: "Draw",
    goalWord: "Goal",
    goalsWord: "Goals",
    noGoals: "No Goals",
    goalSummary: "Goals Breakdown",
    wonBy: "Won by",

    rightsReserved: "All rights reserved.",
    developedBy: "Developed By amirr0023",
    languageSelect: "Language",
  },
  fa: {
    tournamentTitle: "لیگ ملت‌های TMPROCLUB",
    tournamentSubtitle: "فوتبال بین‌المللی. یک رقابت بزرگ.",
    organizer: "TMPROCLUB",
    statusNotStarted: "مسابقات در جریان است",
    statusInProgress: "مسابقات در جریان است",
    statusDrawComplete: "دور اول برگزار شد",
    viewGroups: "مشاهده گروه‌ها",
    browseTeams: "۱۲ تیم ملی",
    explore: "کاوش",

    navHome: "خانه",
    navResults: "نتایج",
    navFixtures: "بازی‌های باقیمانده",
    navStandings: "جدول",
    navStats: "آمار",
    navGroups: "گروه‌ها",
    navTeams: "تیم‌ها",
    navAbout: "درباره",

    groupsBadge: "گروه‌های رسمی",
    groupsTitle: "گروه‌بندی مسابقات",
    groupA: "گروه A",
    groupB: "گروه B",
    sixTeams: "۶ تیم",
    drawOrderOfficial: "ترتیب گروه‌بندی رسمی",
    roundRobinFormat: "فرمت مسابقات دوره‌ای",

    fixturesBadge: "بازی‌های پیش‌رو",
    fixturesTitle: "بازی‌های باقیمانده",
    allMatchdays: "همه بازی‌ها",
    groupAFixtures: "گروه A",
    groupBFixtures: "گروه B",
    timeTba: "زمان و روز: نامشخص",
    stadiumTba: "ورزشگاه: نامشخص",
    versus: "VS",
    blockbusterClash: "بازی حساس",

    resultsBadge: "دیدارهای انجام‌شده",
    resultsTitle: "نتایج بازی‌ها",
    allResults: "همه نتایج",
    groupAResults: "نتایج گروه A",
    groupBResults: "نتایج گروه B",
    fullTime: "پایان",

    statsBadge: "آمار و ارقام",
    statsTitle: "آمار مسابقات",
    topScorers: "برترین گلزنان",
    topAssists: "برترین پاسورها",
    statsEmptyScorers: "آمار گلزنان مسابقات به‌زودی پس از ثبت رسمی گزارش داوران درج خواهد شد.",
    statsEmptyAssists: "آمار پاس‌های گل مسابقات به‌زودی پس از ثبت رسمی گزارش داوران درج خواهد شد.",
    rank: "رتبه",
    player: "بازیکن",
    goals: "گل‌ها",
    assists: "پاس گل",
    totalGoals: "مجموع گل‌ها",
    matchesPlayedLabel: "بازی‌های انجام شده",
    goalsPerMatch: "میانگین گل هر بازی",
    cleanSheets: "کلین‌شیت‌ها",
    refreshData: "به‌روزرسانی داده‌ها",
    syncingData: "در حال دریافت...",

    standingsBadge: "جدول مسابقات",
    standingsTitle: "جدول رده‌بندی",
    bothGroups: "هر دو گروه",
    pos: "رتبه",
    team: "تیم",
    played: "بازی",
    won: "برد",
    drawn: "مساوی",
    lost: "باخت",
    gf: "زده",
    ga: "خورده",
    gd: "تفاضل",
    pts: "امتیاز",

    teamsBadge: "تیم‌های حاضر",
    teamsTitle: "تیم‌های ملی",
    allNations: "همه ۱۲ کشور",
    groupANations: "گروه A",
    groupBNations: "گروه B",
    seed: "سید",

    compLabel: "مسابقات",
    drawIndexLabel: "شماره سید قرعه",
    tournStatusLabel: "وضعیت تورنمنت",
    scheduleStateLabel: "وضعیت",
    tournamentActive: "در حال برگزاری",
    squadNotice: "لیست رسمی بازیکنان و کادر فنی همزمان با اعلام زمان‌بندی رسمی بازی‌ها ثبت و منتشر خواهد شد.",
    closeBtn: "بستن مشخصات",

    showAllFixtures: "مشاهده سایر بازی‌های باقی‌مانده",
    showLess: "بستن و خلاصه کردن لیست",
    moreMatchesCount: "بازی باقیمانده دیگر",
    openFullSchedule: "مشاهده تمام مسابقات در پنجره اختصاصی",
    showAllResults: "مشاهده همه نتایج ثبت‌شده",
    collapseResults: "بستن و کاهش نتایج",

    winner: "برنده",
    draw: "تساوی",
    goalWord: "گل",
    goalsWord: "گل",
    noGoals: "بدون گل",
    goalSummary: "تفکیک گل‌ها و برنده",
    wonBy: "برد",

    rightsReserved: "تمامی حقوق محفوظ است.",
    developedBy: "Developed By amirr0023",
    languageSelect: "زبان / Language",
  },
};
