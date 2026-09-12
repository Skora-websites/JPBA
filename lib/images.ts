// ─── JPBA Real Photo Registry ───────────────────────────────────────────
// All real photos live in /public/jpba images. No fake/stock images are
// used anywhere on the site — reference photos through this registry so
// file names live in exactly one place.

const P = "/jpba images";

export const IMG = {
  // Hero / showcase (large, high impact)
  hero1: `${P}/4012fbe0-310d-470e-86e9-3ffb95a29420.jpeg`,
  hero2: `${P}/795A1291.JPG`,
  hero3: `${P}/795A1309.JPG`,
  hero4: `${P}/DSC06432.JPG`,
  hero5: `${P}/DSC06706.JPG`,
  hero6: `${P}/795A0833.JPG`,

  // Event / competition photography
  event1: `${P}/795A0345.JPG`,
  event2: `${P}/795A0362(1).JPG`,
  event3: `${P}/795A1426.JPG`,
  event4: `${P}/795A1430.JPG`,
  event5: `${P}/795A1436.JPG`,
  event6: `${P}/795A1450.JPG`,
  event7: `${P}/795A1490.JPG`,
  event8: `${P}/795A1495.JPG`,
  event9: `${P}/795A1509.JPG`,
  event10: `${P}/795A1513.JPG`,
  event11: `${P}/795A1515.JPG`,
  event12: `${P}/795A1517.JPG`,
  event13: `${P}/795A1527.JPG`,
  event14: `${P}/795A1529.JPG`,
  event15: `${P}/795A1656.JPG`,

  // Awards / ceremonies
  award1: `${P}/795A8240.JPG`,
  award2: `${P}/795A8453.JPG`,
  award3: `${P}/795A8597.JPG`,
  award4: `${P}/795A8607.JPG`,

  // Athletes / portraits
  athlete1: `${P}/795A1797.JPG`,
  athlete2: `${P}/795A1838.JPG`,
  athlete3: `${P}/795A1962.JPG`,
  athlete4: `${P}/795A2314.JPG`,
  athlete5: `${P}/795A2335.JPG`,
  athlete6: `${P}/795A2337.JPG`,

  // Venues / training
  venue1: `${P}/DSC08788.JPG`,
  venue2: `${P}/DSC09824.JPG`,
  training1: `${P}/FullSizeRender 9.jpeg`,
  training2: `${P}/FullSizeRender 10.jpeg`,
  training3: `${P}/FullSizeRender 17.jpeg`,
  training4: `${P}/FullSizeRender 18.jpeg`,
  training5: `${P}/FullSizeRender 21.jpeg`,
  training6: `${P}/FullSizeRender 28.jpeg`,

  // Community / candid
  community1: `${P}/IMG_6975.jpeg`,
  community2: `${P}/IMG_7046.jpeg`,
  community3: `${P}/IMG_7064.jpeg`,
  community4: `${P}/IMG_7067.jpeg`,
  community5: `${P}/IMG_7069.jpeg`,
  community6: `${P}/IMG_7109.jpeg`,
  community7: `${P}/IMG_7113.jpeg`,
  community8: `${P}/IMG_7116.jpeg`,
  community9: `${P}/IMG_7128.jpeg`,
  community10: `${P}/IMG_7136.jpeg`,
  community11: `${P}/IMG_7139.jpeg`,
  community12: `${P}/IMG_7141.jpeg`,
  community13: `${P}/IMG_7142.jpeg`,
  community14: `${P}/IMG_7147.jpeg`,
  community15: `${P}/IMG_7162.jpeg`,
  community16: `${P}/IMG_7173.jpeg`,
  community17: `${P}/IMG_7224.jpeg`,
  community18: `${P}/IMG_7244.jpeg`,
  community19: `${P}/IMG_7251.jpeg`,
  community20: `${P}/IMG_7256.jpeg`,
  community21: `${P}/IMG_7262.jpeg`,
  community22: `${P}/IMG_7270.jpeg`,
  community23: `${P}/IMG_7273.jpeg`,
  community24: `${P}/IMG_7274.jpeg`,
  community25: `${P}/IMG_7285.jpeg`,
  community26: `${P}/IMG_7322.jpeg`,
  spotlight1: `${P}/8c8158cb-ccf3-4de6-b4e1-ceeff86d5bd0.jpeg`,
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
  { src: IMG.event4, title: "Referee Briefing", category: "Competitions" },
  { src: IMG.event5, title: "Measure & Score", category: "Competitions" },
  { src: IMG.event6, title: "Closest Ball Call", category: "Competitions" },
  { src: IMG.event7, title: "Team Relay Round", category: "Competitions" },
  { src: IMG.event8, title: "Pairs Championship", category: "Competitions" },
  { src: IMG.event9, title: "Individual Finals", category: "Competitions" },
  { src: IMG.event10, title: "Podium Moments", category: "Competitions" },
  { src: IMG.event11, title: "Championship Crowd", category: "Competitions" },
  { src: IMG.event12, title: "International Delegation Visit", category: "Competitions" },
  { src: IMG.event13, title: "Officials on Court", category: "Competitions" },
  { src: IMG.event14, title: "Trophy Presentation", category: "Competitions" },
  { src: IMG.event15, title: "Closing Ceremony", category: "Competitions" },

  // Training
  { src: IMG.training1, title: "Balls & Equipment Setup", category: "Training" },
  { src: IMG.training2, title: "Coaching Drills", category: "Training" },
  { src: IMG.training3, title: "Solan Training Camp", category: "Training" },
  { src: IMG.training4, title: "Ramp Practice Session", category: "Training" },
  { src: IMG.training5, title: "Development Pathway Camp", category: "Training" },
  { src: IMG.training6, title: "Skill Clinic", category: "Training" },
  { src: IMG.venue1, title: "Official Court — Venue View", category: "Training" },
  { src: IMG.venue2, title: "Venue & Setup", category: "Training" },
  { src: IMG.community3, title: "Camp Training Ground", category: "Training" },
  { src: IMG.community4, title: "Practice Session", category: "Training" },

  // Awards
  { src: IMG.award1, title: "District Awareness Camp", category: "Awards" },
  { src: IMG.award2, title: "State Championship Awards", category: "Awards" },
  { src: IMG.award3, title: "Medal Ceremony", category: "Awards" },
  { src: IMG.award4, title: "Award Night 2026", category: "Awards" },
  { src: IMG.event1, title: "Guest Ceremony", category: "Awards" },
  { src: IMG.event2, title: "Honouring the Champions", category: "Awards" },

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
  { src: IMG.community25, title: "Camp Wrap-up", category: "Community" },
  { src: IMG.community26, title: "JPBA Family", category: "Community" },
  { src: IMG.athlete1, title: "Pooja Gupta — BC4", category: "Community" },
  { src: IMG.athlete2, title: "Sachin Chamaria — BC3", category: "Community" },
  { src: IMG.athlete3, title: "Jatin Kumar Kushwaha — BC4", category: "Community" },
  { src: IMG.athlete4, title: "Ajeya Raj — BC3", category: "Community" },
  { src: IMG.athlete5, title: "Anjali Thakur — BC2", category: "Community" },
  { src: IMG.athlete6, title: "Vijay Kumar — BC1", category: "Community" },
  { src: IMG.spotlight1, title: "JPBA Spotlight", category: "Community" },
];

export const GALLERY_CATEGORIES = ["All", "Competitions", "Training", "Awards", "Community"] as const;
