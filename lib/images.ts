// ─── JPBA Real Photo Registry ───────────────────────────────────────────
// All real photos are optimized WebP in /public/images (built from the
// originals by scripts/optimize-images.mjs). No fake/stock images are
// used anywhere — reference photos through this registry.

const P = "/images";

export const IMG = {
  // Hero / showcase (large, high impact)
  hero1: `${P}/4012fbe0-310d-470e-86e9-3ffb95a29420.webp`,
  hero2: `${P}/795a1430.webp`,
  hero3: `${P}/795a1490.webp`,
  hero4: `${P}/dsc06432.webp`,
  hero5: `${P}/dsc06706.webp`,
  hero6: `${P}/img-7322.webp`,

  // Event / competition photography
  event1: `${P}/vip-guests.webp`,
  event2: `${P}/prize-distribution.webp`,
  event3: `${P}/795a1495.webp`,
  event4: `${P}/scoring-rules.webp`,
  event5: `${P}/795a1509.webp`,
  event6: `${P}/795a1513.webp`,
  event7: `${P}/795a1517.webp`,
  event8: `${P}/795a1527.webp`,
  event9: `${P}/795a1529.webp`,
  event10: `${P}/winner.webp`,
  event11: `${P}/795a1430.webp`,
  event12: `${P}/national-boccia-championship.webp`,
  event13: `${P}/official.webp`,
  event14: `${P}/medals.webp`,
  event15: `${P}/our-members.webp`,

  // Awards / ceremonies
  award1: `${P}/795a8240.webp`,
  award2: `${P}/795a8453.webp`,
  award3: `${P}/medals.webp`,
  award4: `${P}/prize-distribution.webp`,

  // Athletes / portraits
  athlete1: `${P}/795a1797.webp`,
  athlete2: `${P}/795a1838.webp`,
  athlete3: `${P}/bc1.webp`,
  athlete4: `${P}/bc2.webp`,
  athlete5: `${P}/bc3.webp`,
  athlete6: `${P}/game.webp`,

  // Venues / training
  venue1: `${P}/court.webp`,
  venue2: `${P}/dsc09824.webp`,
  training1: `${P}/fullsizerender-9.webp`,
  training2: `${P}/fullsizerender-10.webp`,
  training3: `${P}/fullsizerender-17.webp`,
  training4: `${P}/fullsizerender-18.webp`,
  training5: `${P}/fullsizerender-21.webp`,
  training6: `${P}/fullsizerender-28.webp`,

  // Community / candid
  community1: `${P}/img-6975.webp`,
  community2: `${P}/img-7046.webp`,
  community3: `${P}/img-7064.webp`,
  community4: `${P}/img-7067.webp`,
  community5: `${P}/img-7069.webp`,
  community6: `${P}/img-7109.webp`,
  community7: `${P}/img-7113.webp`,
  community8: `${P}/img-7116.webp`,
  community9: `${P}/img-7128.webp`,
  community10: `${P}/img-7136.webp`,
  community11: `${P}/img-7139.webp`,
  community12: `${P}/img-7141.webp`,
  community13: `${P}/img-7142.webp`,
  community14: `${P}/img-7147.webp`,
  community15: `${P}/img-7162.webp`,
  community16: `${P}/img-7173.webp`,
  community17: `${P}/img-7224.webp`,
  community18: `${P}/img-7244.webp`,
  community19: `${P}/img-7251.webp`,
  community20: `${P}/img-7256.webp`,
  community21: `${P}/img-7262.webp`,
  community22: `${P}/img-7273.webp`,
  community23: `${P}/img-7285.webp`,
  community24: `${P}/img-7322.webp`,
  community25: `${P}/ground.webp`,
  community26: `${P}/ground1.webp`,
  spotlight1: `${P}/president.webp`,
  meeting: `${P}/meeting.webp`,
  membersMeet: `${P}/members-meet.webp`,
  nationalChampionship: `${P}/national-boccia-championship.webp`,
  nationalGame: `${P}/national-game.webp`,
} as const;

// ─── Real people (photos provided by JPBA) ──────────────────────────────
export const PEOPLE = {
  // Players
  sumanPrajapati: "/images/people/suman-kumar-prajapati.webp", // BC-4 International
  anamHyder: "/images/people/anam-hyder.webp",                 // BC-2 National

  // Office bearers
  president: "/images/people/president-portrait.webp",         // Capt Jitendra Kumar Sharma
  secretaryGeneral: "/images/people/dr-suman-kumar-sharma.webp",
  treasurer: "/images/people/sonu-kumar-sharma.webp",

  // Coach
  coach: "/images/people/raj-kumar-singh.webp",

  // Event photos of office bearers
  presidentAtEvent: `${P}/president.webp`,
} as const;

// ─── Gallery collections ────────────────────────────────────────────────
export interface GalleryPhoto {
  src: string;
  title: string;
  category: "Competitions" | "Training" | "Awards" | "Community";
}

export const GALLERY: GalleryPhoto[] = [
  // Competitions
  { src: IMG.hero1, title: "National Championship — Court Action", category: "Competitions" },
  { src: IMG.hero2, title: "Championship Opening", category: "Competitions" },
  { src: IMG.hero3, title: "End-Game Precision", category: "Competitions" },
  { src: IMG.hero4, title: "Ramp Competition", category: "Competitions" },
  { src: IMG.hero5, title: "BC3 Match Play", category: "Competitions" },
  { src: IMG.hero6, title: "Athlete Focus", category: "Competitions" },
  { src: IMG.event3, title: "State Championship — Day 1", category: "Competitions" },
  { src: IMG.event4, title: "Measure & Score", category: "Competitions" },
  { src: IMG.event5, title: "Closest Ball Call", category: "Competitions" },
  { src: IMG.event6, title: "Team Relay Round", category: "Competitions" },
  { src: IMG.event7, title: "Pairs Championship", category: "Competitions" },
  { src: IMG.event8, title: "Individual Finals", category: "Competitions" },
  { src: IMG.event9, title: "Podium Moments", category: "Competitions" },
  { src: IMG.event10, title: "The Winning Moment", category: "Competitions" },
  { src: IMG.event11, title: "Championship Crowd", category: "Competitions" },
  { src: IMG.event12, title: "National BOCCIA Championship", category: "Competitions" },
  { src: IMG.event13, title: "Officials on Court", category: "Competitions" },
  { src: IMG.event14, title: "Trophy & Medals", category: "Competitions" },
  { src: IMG.nationalGame, title: "National Game Action", category: "Competitions" },

  // Training
  { src: IMG.training1, title: "Balls & Equipment Setup", category: "Training" },
  { src: IMG.training2, title: "Coaching Drills", category: "Training" },
  { src: IMG.training3, title: "Training Camp", category: "Training" },
  { src: IMG.training4, title: "Ramp Practice Session", category: "Training" },
  { src: IMG.training5, title: "Development Pathway Camp", category: "Training" },
  { src: IMG.training6, title: "Skill Clinic", category: "Training" },
  { src: IMG.venue1, title: "Official Court — Venue View", category: "Training" },
  { src: IMG.venue2, title: "Venue & Setup", category: "Training" },
  { src: IMG.community3, title: "Camp Training Ground", category: "Training" },
  { src: IMG.community4, title: "Practice Session", category: "Training" },
  { src: IMG.athlete6, title: "Game Day", category: "Training" },

  // Awards
  { src: IMG.award1, title: "District Awareness Camp", category: "Awards" },
  { src: IMG.award2, title: "State Championship Awards", category: "Awards" },
  { src: IMG.award3, title: "Medal Ceremony", category: "Awards" },
  { src: IMG.award4, title: "Prize Distribution", category: "Awards" },
  { src: IMG.event1, title: "Guest Ceremony", category: "Awards" },
  { src: IMG.event2, title: "Honouring the Champions", category: "Awards" },
  { src: IMG.award1, title: "Winners' Circle", category: "Awards" },

  // Community
  { src: IMG.community1, title: "Athlete Counselling", category: "Community" },
  { src: IMG.community2, title: "Families at the Camp", category: "Community" },
  { src: IMG.community5, title: "Volunteers in Action", category: "Community" },
  { src: IMG.community6, title: "Grassroots Awareness", category: "Community" },
  { src: IMG.community7, title: "School Outreach", category: "Community" },
  { src: IMG.community8, title: "District Camp Visit", category: "Community" },
  { src: IMG.community9, title: "Community Cheer", category: "Community" },
  { src: IMG.community10, title: "Meet & Greet", category: "Community" },
  { src: IMG.community11, title: "Parents & Coaches", category: "Community" },
  { src: IMG.community12, title: "Classification Day", category: "Community" },
  { src: IMG.community13, title: "Together on Court", category: "Community" },
  { src: IMG.community14, title: "Support Crew", category: "Community" },
  { src: IMG.community15, title: "Sports Day", category: "Community" },
  { src: IMG.community16, title: "Smiles & Medals", category: "Community" },
  { src: IMG.community17, title: "Team JPBA", category: "Community" },
  { src: IMG.community18, title: "Camp Group Photo", category: "Community" },
  { src: IMG.community19, title: "Inclusion in Action", category: "Community" },
  { src: IMG.community20, title: "Game Day Friends", category: "Community" },
  { src: IMG.community21, title: "Cheering Section", category: "Community" },
  { src: IMG.community22, title: "Volunteer Team", category: "Community" },
  { src: IMG.community23, title: "Awareness Drive", category: "Community" },
  { src: IMG.community24, title: "Community Celebration", category: "Community" },
  { src: IMG.community25, title: "The Grounds", category: "Community" },
  { src: IMG.community26, title: "Training Grounds", category: "Community" },
  { src: PEOPLE.sumanPrajapati, title: "Suman Kumar Prajapati — BC4 International", category: "Community" },
  { src: PEOPLE.anamHyder, title: "Anam Hyder — BC2 National", category: "Community" },
  { src: IMG.membersMeet, title: "Members' Meet", category: "Community" },
  { src: IMG.spotlight1, title: "JPBA Spotlight", category: "Community" },
];

export const GALLERY_CATEGORIES = ["All", "Competitions", "Training", "Awards", "Community"] as const;
