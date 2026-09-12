import sharp from "sharp";
import fs from "fs";
import path from "path";

const SRC = "public/jpba images";
const OUT = "public/images";
const PEOPLE_IN = "scripts/people-in";
const PEOPLE_OUT = path.join(OUT, "people");
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(PEOPLE_OUT, { recursive: true });

const slug = (f) => f.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

let totalBefore = 0, totalAfter = 0;
const files = fs.readdirSync(SRC).filter(f => /\.(jpe?g|png)$/i.test(f));
const map = {};

for (const f of files) {
  const srcPath = path.join(SRC, f);
  const before = fs.statSync(srcPath).size;
  totalBefore += before;
  const outName = slug(f) + ".webp";
  const outPath = path.join(OUT, outName);
  const m = await sharp(srcPath, { failOn: "none" }).metadata();
  const isPortrait = m.height > m.width;
  await sharp(srcPath, { failOn: "none" })
    .rotate()
    .resize(isPortrait ? 1000 : 1600, isPortrait ? 1400 : 1000, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78, effort: 4 })
    .toFile(outPath);
  const after = fs.statSync(outPath).size;
  totalAfter += after;
  map[f] = "/images/" + outName;
}

// Person photos provided via WhatsApp (mapped by user's descriptions)
const PEOPLE = [
  { file: "paste-1789233635869-19948.png", out: "suman-kumar-prajapati.webp" },                 // Jharkhand banner — BC4 International
  { file: "WhatsApp Image 2026-09-09 at 10.00.45 AM.jpeg", out: "anam-hyder.webp" },             // glasses — BC2 National
  { file: "paste-1789234107499-19948.png", out: "president-portrait.webp" },                     // Capt J K Sharma uniform portrait
  { file: "WhatsApp Image 2026-09-09 at 9.36.57 PM.jpeg", out: "sonu-kumar-sharma.webp" },      // beige suit — Treasurer
  { file: "WhatsApp Image 2026-09-10 at 3.33.47 AM.jpeg", out: "dr-suman-kumar-sharma.webp" },   // maroon cap — Secretary General
  { file: "WhatsApp Image 2026-09-09 at 9.35.56 PM.jpeg", out: "raj-kumar-singh.webp" },         // tie — Coach
];
for (const p of PEOPLE) {
  const candidates = [
    path.join("C:/Users/ashis/AppData/Local/Packages/5319275A.WhatsAppDesktop_cv1g1gvanyjgm/LocalState/sessions/591E683DF50A63CE12BF77C40E8133645F42AE7B/transfers/2026-37", p.file),
    path.join("C:/Users/ashis/AppData/Local/Temp/freebuff-desktop-pastes", p.file),
  ];
  const src = candidates.find(c => fs.existsSync(c));
  if (!src) { console.log("MISSING person photo:", p.file); continue; }
  await sharp(src, { failOn: "none" }).rotate()
    .resize(900, 1200, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(PEOPLE_OUT, p.out));
  map[p.file] = "/images/people/" + p.out;
  console.log("person:", p.out);
}

fs.writeFileSync("scripts/image-map.json", JSON.stringify(map, null, 2));
console.log(`\nTOTAL: ${(totalBefore/1048576).toFixed(0)}MB -> ${(totalAfter/1048576).toFixed(1)}MB (${files.length} photos)`);
