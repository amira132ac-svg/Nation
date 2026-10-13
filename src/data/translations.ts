export type Language = 'en' | 'fa';

export interface Translations {
  tournamentTitle: string;
  tournamentSubtitle: string;
  organizer: string;
  statusNotStarted: string;
  statusDrawComplete: string;
  viewGroups: string;
  browseTeams: string;
  explore: string;
  
  // Navigation
  navHome: string;
  navGroups: string;
  navFixtures: string;
  navResults: string;
  navStandings: string;
  navTeams: string;
  navAbout: string;
  
  // Stats strip
  statTeams: string;
  statTeamsDesc: string;
  statGroups: string;
  statGroupsDesc: string;
  statTrophy: string;
  statTrophyDesc: string;

  // Overview
  overviewBadge: string;
  overviewTitle: string;
  overviewSubtitle: string;
  card1Title: string;
  card1Desc: string;
  card1Foot: string;
  card2Title: string;
  card2Desc: string;
  card2Foot: string;
  card3Title: string;
  card3Desc: string;
  card3Foot: string;
  card4Title: string;
  card4Desc: string;
  card4Foot: string;
  lifecycleTitle: string;
  lifecycleStage: string;
  stage1: string;
  stage1Sub: string;
  stage2: string;
  stage2Sub: string;
  stage3: string;
  stage3Sub: string;
  stage4: string;
  stage4Sub: string;

  // Groups
  groupsBadge: string;
  groupsTitle: string;
  groupsSubtitle: string;
  groupA: string;
  groupB: string;
  sixTeams: string;
  drawOrderOfficial: string;
  roundRobinFormat: string;
  groupsNote: string;

  // Fixtures
  fixturesBadge: string;
  fixturesTitle: string;
  fixturesSubtitle: string;
  allMatchdays: string;
  groupAFixtures: string;
  groupBFixtures: string;
  matchday1: string;
  timeTba: string;
  timeTbaNotice: string;
  stadiumTba: string;
  versus: string;
  matchStatusScheduled: string;
  blockbusterClash: string;

  // Results
  resultsBadge: string;
  resultsTitle: string;
  resultsSubtitle: string;
  noResultsTitle: string;
  noResultsDesc: string;
  resCol1: string;
  resCol1Sub: string;
  resCol2: string;
  resCol2Sub: string;
  resCol3: string;
  resCol3Sub: string;

  // Standings
  standingsBadge: string;
  standingsTitle: string;
  standingsBanner: string;
  standingsBannerSub: string;
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
  unrankedNote: string;
  tableLegend: string;

  // Teams
  teamsBadge: string;
  teamsTitle: string;
  teamsSubtitle: string;
  allNations: string;
  groupANations: string;
  groupBNations: string;
  seed: string;

  // Team Modal
  compLabel: string;
  drawIndexLabel: string;
  tournStatusLabel: string;
  scheduleStateLabel: string;
  preTournament: string;
  awaitingKickoff: string;
  squadNotice: string;
  closeBtn: string;

  // About
  aboutBadge: string;
  aboutTitle: string;
  aboutDesc: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Desc: string;
  pillar4Title: string;
  pillar4Desc: string;

  // Footer
  footerDesc: string;
  footerStatus: string;
  footerNavTitle: string;
  footerOverviewTitle: string;
  rightsReserved: string;
  developedBy: string;
  languageSelect: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    tournamentTitle: "TMPROCLUB NATIONS LEAGUE",
    tournamentSubtitle: "International Football. One Competition.",
    organizer: "TMPROCLUB",
    statusNotStarted: "TOURNAMENT NOT STARTED",
    statusDrawComplete: "Official Draw Complete",
    viewGroups: "View Official Groups",
    browseTeams: "Browse 12 Nations",
    explore: "Explore",

    navHome: "Home",
    navGroups: "Groups",
    navFixtures: "Fixtures",
    navResults: "Results",
    navStandings: "Standings",
    navTeams: "Teams",
    navAbout: "About",

    statTeams: "12",
    statTeamsDesc: "National Teams",
    statGroups: "2",
    statGroupsDesc: "Groups of Six",
    statTrophy: "1",
    statTrophyDesc: "Championship Trophy",

    overviewBadge: "Competition Structure",
    overviewTitle: "Tournament Overview",
    overviewSubtitle: "Official format and regulatory framework of the TMPROCLUB Nations League.",
    card1Title: "2 Groups of 6",
    card1Desc: "Twelve qualified national teams allocated evenly into Group A and Group B through the official draw.",
    card1Foot: "6 Teams per Group",
    card2Title: "Round-Robin Format",
    card2Desc: "Each nation will contest five matchdays within their pool, awarding 3 points for a win and 1 point for a draw.",
    card2Foot: "5 Matchdays Each",
    card3Title: "The Trophy",
    card3Desc: "The bespoke Nations League helical spiral trophy, awarded to the tournament champion at the conclusion of play.",
    card3Foot: "Championship Prize",
    card4Title: "Official Integrity",
    card4Desc: "All records, match dates, and tables are locked until verified official tournament announcements occur.",
    card4Foot: "Verified Data Policy",
    lifecycleTitle: "Tournament Lifecycle Tracker",
    lifecycleStage: "Current Stage: Pre-Tournament",
    stage1: "Official Draw",
    stage1Sub: "Groups Confirmed",
    stage2: "Match Schedule",
    stage2Sub: "Pairings Announced",
    stage3: "Group Stage",
    stage3Sub: "Kickoff Pending",
    stage4: "Championship",
    stage4Sub: "Trophy Decider",

    groupsBadge: "Official Draw",
    groupsTitle: "Tournament Groups",
    groupsSubtitle: "12 participating nations drawn into two balanced groups of six. Official tournament group composition.",
    groupA: "GROUP A",
    groupB: "GROUP B",
    sixTeams: "6 TEAMS",
    drawOrderOfficial: "Draw Order: Official",
    roundRobinFormat: "Round Robin Format",
    groupsNote: "Teams will compete in a round-robin stage within their assigned group. Click any national team to view verified group details.",

    fixturesBadge: "Official Match Schedule",
    fixturesTitle: "Official Fixtures",
    fixturesSubtitle: "Official round 1 fixtures confirmed from tournament headquarters. Kickoff dates and times will be announced.",
    allMatchdays: "All Matches",
    groupAFixtures: "Group A Fixtures",
    groupBFixtures: "Group B Fixtures",
    matchday1: "Round 1 / Matchday 1",
    timeTba: "Date & Time TBA",
    timeTbaNotice: "Official match dates, stadiums, and kickoff times will be announced by TMPROCLUB headquarters soon.",
    stadiumTba: "Venue TBA",
    versus: "VS",
    matchStatusScheduled: "Scheduled",
    blockbusterClash: "Featured Clash",

    resultsBadge: "Match Center",
    resultsTitle: "Official Results",
    resultsSubtitle: "Verified scorelines, final match statistics, and group table impact.",
    noResultsTitle: "NO MATCH RESULTS YET",
    noResultsDesc: "Official results will appear here after the first matches are completed.",
    resCol1: "Full-Time Scores",
    resCol1Sub: "Direct official validation",
    resCol2: "Table Recalculation",
    resCol2Sub: "Instant points & GD update",
    resCol3: "Match Reports",
    resCol3Sub: "Official tournament summaries",

    standingsBadge: "Tournament Table",
    standingsTitle: "Official Standings",
    standingsBanner: "OFFICIAL STANDINGS WILL BE UPDATED AFTER MATCHES BEGIN",
    standingsBannerSub: "No matches have been played yet. All statistics remain unestablished (—). Teams are shown in their official draw order.",
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
    unrankedNote: "Row numbers represent initial draw order",
    tableLegend: "P: Played · W: Won · D: Drawn · L: Lost · GD: Goal Diff · Pts: Points",

    teamsBadge: "Participating Nations",
    teamsTitle: "National Teams Directory",
    teamsSubtitle: "The 12 competing nations of the TMPROCLUB Nations League organized by official group allotment.",
    allNations: "All 12 Nations",
    groupANations: "Group A (6)",
    groupBNations: "Group B (6)",
    seed: "Seed",

    compLabel: "Competition",
    drawIndexLabel: "Draw Order Index",
    tournStatusLabel: "Tournament Status",
    scheduleStateLabel: "Schedule State",
    preTournament: "Pre-Tournament",
    awaitingKickoff: "Pairing Set · Kickoff TBA",
    squadNotice: "Official squad rosters, technical staff appointments, and matchday squads will be published upon official tournament registration deadlines.",
    closeBtn: "Close Details",

    aboutBadge: "About Competition",
    aboutTitle: "Independent International Football Excellence",
    aboutDesc: "TMPROCLUB Nations League is an international football competition bringing together 12 national teams across two groups. This website serves as the official destination for tournament information, participating teams, fixtures, results, and standings.",
    pillar1Title: "12 National Teams",
    pillar1Desc: "Featuring elite global squads drawn into two competitive pools of six nations vying for international supremacy.",
    pillar2Title: "Single Official Authority",
    pillar2Desc: "Organized and sanctioned under the independent governance of TMPROCLUB as the sole official competition authority.",
    pillar3Title: "Pure Competitive Integrity",
    pillar3Desc: "A verified round-robin group structure guaranteeing direct on-pitch determination with unranked pre-tournament neutrality.",
    pillar4Title: "Live Data Verification",
    pillar4Desc: "Centralized tournament record keeping where official fixtures, scores, and standings publish synchronously upon confirmation.",

    footerDesc: "TMPROCLUB Nations League is the premier international football competition bringing together 12 elite national teams in an official round-robin format.",
    footerStatus: "Official Tournament Destination · Pre-Tournament Phase",
    footerNavTitle: "Tournament Navigation",
    footerOverviewTitle: "Competition Overview",
    rightsReserved: "All rights reserved.",
    developedBy: "Developed By amirr0023",
    languageSelect: "Language",
  },
  fa: {
    tournamentTitle: "لیگ ملت‌های TMPROCLUB",
    tournamentSubtitle: "فوتبال بین‌المللی. یک جام، یک رقابت بزرگ.",
    organizer: "TMPROCLUB",
    statusNotStarted: "تورنمنت هنوز آغاز نشده است",
    statusDrawComplete: "قرعه‌کشی رسمی انجام شد",
    viewGroups: "مشاهده گروه‌های رسمی",
    browseTeams: "۱۲ تیم ملی حاضر",
    explore: "کاوش در مسابقات",

    navHome: "خانه",
    navGroups: "گروه‌ها",
    navFixtures: "بازی‌ها",
    navResults: "نتایج",
    navStandings: "جدول رده‌بندی",
    navTeams: "تیم‌ها",
    navAbout: "درباره مسابقات",

    statTeams: "۱۲",
    statTeamsDesc: "تیم ملی برتر",
    statGroups: "۲",
    statGroupsDesc: "گروه ۶ تیمی",
    statTrophy: "۱",
    statTrophyDesc: "جام زرین قهرمانی",

    overviewBadge: "ساختار مسابقات",
    overviewTitle: "نمای کلی تورنمنت",
    overviewSubtitle: "فرمت رسمی و چارچوب ساختاری مسابقات لیگ ملت‌های TMPROCLUB.",
    card1Title: "۲ گروه ۶ تیمی",
    card1Desc: "دوازده تیم ملی واجد شرایط که بر اساس قرعه‌کشی رسمی در دو گروه A و B قرار گرفته‌اند.",
    card1Foot: "۶ تیم در هر گروه",
    card2Title: "فرمت دوره‌ای (رفت)",
    card2Desc: "هر تیم ۵ مسابقه هیجان‌انگیز در مرحله گروهی برگزار می‌کند؛ ۳ امتیاز برای برد و ۱ امتیاز برای مساوی.",
    card2Foot: "۵ هفته رقابت فشرده",
    card3Title: "جام قهرمانی",
    card3Desc: "جام مارپیچ باشکوه سیلور و کبالت که در پایان به قهرمان پرافتخار این دوره اهدا خواهد شد.",
    card3Foot: "نشان افتخار تورنمنت",
    card4Title: "اعتبار و دقت رسمی",
    card4Desc: "تمامی اطلاعات، برنامه بازی‌ها و جداول مستقیماً بر اساس تأییدیه رسمی ستاد تورنمنت ثبت می‌شوند.",
    card4Foot: "سیاست صحت داده‌ها",
    lifecycleTitle: "وضعیت مراحل مسابقات",
    lifecycleStage: "مرحله فعلی: پیش از آغاز بازی‌ها",
    stage1: "قرعه‌کشی رسمی",
    stage1Sub: "گروه‌ها مشخص شدند",
    stage2: "برنامه بازی‌ها",
    stage2Sub: "تقابل‌ها اعلام شد",
    stage3: "مرحله گروهی",
    stage3Sub: "در انتظار سوت آغاز",
    stage4: "فینال و قهرمانی",
    stage4Sub: "تعیین قهرمان جام",

    groupsBadge: "قرعه‌کشی رسمی",
    groupsTitle: "گروه‌بندی رسمی مسابقات",
    groupsSubtitle: "۱۲ کشور قدرتمند جهان در دو گروه متعادل ۶ تیمی به رقابت خواهند پرداخت.",
    groupA: "گروه A",
    groupB: "گروه B",
    sixTeams: "۶ تیم",
    drawOrderOfficial: "ترتیب قرعه: رسمی",
    roundRobinFormat: "فرمت مسابقات دوره‌ای",
    groupsNote: "تیم‌ها در یک گروه دوره‌ای به مصاف هم می‌روند. برای مشاهده مشخصات هر تیم، روی آن کلیک کنید.",

    fixturesBadge: "برنامه رسمی مسابقات",
    fixturesTitle: "برنامه بازی‌های دور اول",
    fixturesSubtitle: "تقابل‌های رسمی هفته اول بر اساس اعلام ستاد برگزاری. زمان و ساعت دقیق بازی‌ها به‌زودی اعلام می‌شود.",
    allMatchdays: "همه بازی‌ها",
    groupAFixtures: "بازی‌های گروه A",
    groupBFixtures: "بازی‌های گروه B",
    matchday1: "هفته ۱ / دور اول",
    timeTba: "تاریخ و ساعت: به‌زودی",
    timeTbaNotice: "تقابل‌ها قطعی شده است؛ تاریخ، ساعت و ورزشگاه بازی‌ها به‌زودی توسط ستاد TMPROCLUB اعلام خواهد شد.",
    stadiumTba: "ورزشگاه: نامشخص",
    versus: "VS",
    matchStatusScheduled: "برنامه‌ریزی شد",
    blockbusterClash: "بازی حساس هفته",

    resultsBadge: "مرکز نتایج",
    resultsTitle: "نتایج زنده و رسمی",
    resultsSubtitle: "نتایج قطعی بازی‌ها، آمار پایانی و تأثیر مستقیم بر جدول رده‌بندی.",
    noResultsTitle: "هنوز نتیجه‌ای ثبت نشده است",
    noResultsDesc: "نتایج رسمی بلافاصله پس از اتمام نخستین بازی‌های تورنمنت در اینجا درج خواهد شد.",
    resCol1: "نتیجه وقت قانونی",
    resCol1Sub: "تأییدیه داوری و ستاد",
    resCol2: "محاسبه آنی جدول",
    resCol2Sub: "به‌روزرسانی خودکار امتیاز و تفاضل",
    resCol3: "گزارش بازی‌ها",
    resCol3Sub: "خلاصه دیدارهای حساس",

    standingsBadge: "جدول مسابقات",
    standingsTitle: "جدول رسمی رده‌بندی",
    standingsBanner: "جدول رسمی پس از آغاز بازی‌ها به‌روزرسانی خواهد شد",
    standingsBannerSub: "تا کنون مسابقه‌ای برگزار نشده است. تمامی آمارها خالی (—) بوده و تیم‌ها به ترتیب شماره قرعه چیده شده‌اند.",
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
    unrankedNote: "شماره‌ها نشان‌دهنده ردیف قرعه‌کشی اولیه هستند",
    tableLegend: "بازی: تعداد بازی · برد: پیروزی · مساوی: تساوی · باخت: شکست · تفاضل: تفاضل گل · امتیاز: مجموع امتیازات",

    teamsBadge: "تیم‌های حاضر",
    teamsTitle: "راهنمای تیم‌های ملی",
    teamsSubtitle: "۱۲ کشور شرکت‌کننده در لیگ ملت‌های TMPROCLUB به تفکیک گروه رسمی.",
    allNations: "همه ۱۲ کشور",
    groupANations: "گروه A (۶ تیم)",
    groupBNations: "گروه B (۶ تیم)",
    seed: "سید",

    compLabel: "مسابقات",
    drawIndexLabel: "شماره سید قرعه",
    tournStatusLabel: "وضعیت تورنمنت",
    scheduleStateLabel: "وضعیت بازی",
    preTournament: "پیش از مسابقات",
    awaitingKickoff: "حریف مشخص شد · ساعت به‌زودی",
    squadNotice: "لیست رسمی بازیکنان و کادر فنی همزمان با اعلام زمان‌بندی رسمی بازی‌ها ثبت و منتشر خواهد شد.",
    closeBtn: "بستن مشخصات",

    aboutBadge: "درباره تورنمنت",
    aboutTitle: "اوج رقابت‌های فوتبال ملی و مستقل",
    aboutDesc: "لیگ ملت‌های TMPROCLUB یک تورنمنت معتبر و مستقل بین‌المللی با حضور ۱۲ تیم ملی در دو گروه است. این پورتال مرجع رسمی اطلاعات تورنمنت، گروه‌ها، برنامه دیدارها، نتایج و جدول مسابقات می‌باشد.",
    pillar1Title: "۱۲ تیم ملی شاخص",
    pillar1Desc: "حضور برترین تیم‌های ملی جهان در دو گروه هیجان‌انگیز برای تصاحب جام قهرمانی.",
    pillar2Title: "مدیریت مستقل و یکپارچه",
    pillar2Desc: "سازماندهی شده تحت نظارت رسمی و متمرکز مجموعه ورزشی و رسانه‌ای TMPROCLUB.",
    pillar3Title: "عدالت رقابتی کامل",
    pillar3Desc: "فرمت دوره‌ای شفاف و ثبت مسابقات بر اساس نتایج زمین بازی بدون دخالت رتبه‌بندی‌های پیش‌فرض.",
    pillar4Title: "اعتبارسنجی زنده داده‌ها",
    pillar4Desc: "سیستم مرکزی ثبت داده که هر نتیجه را بلافاصله در جداول و آمار اعمال خواهد کرد.",

    footerDesc: "لیگ ملت‌های TMPROCLUB؛ معتبرترین صحنه تقابل ۱۲ تیم ملی در یک تورنمنت اختصاصی و تماشایی.",
    footerStatus: "مرجع رسمی مسابقات · فاز پیش از افتتاحیه",
    footerNavTitle: "بخش‌های سایت",
    footerOverviewTitle: "نمای مسابقات",
    rightsReserved: "تمامی حقوق محفوظ است.",
    developedBy: "Developed By amirr0023",
    languageSelect: "زبان / Language",
  },
};
