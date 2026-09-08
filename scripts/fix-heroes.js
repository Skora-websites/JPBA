/**
 * Batch-fix all inline hero sections across subpages.
 *
 * Problem: every inline hero has a DARK green overlay (rgba(10,47,29,0.92))
 * but DARK green text (text-[#0A2F1D]) -> text invisible.
 * Also: duplicate stacked <img> tags and bg-noise layers.
 *
 * Fix (matching PageHeader.tsx):
 *  1. Remove duplicate stacked images + noise layers.
 *  2. Replace dark overlay gradients with light cream fades:
 *     - to right: strong cream on text side, clear image on right
 *     - to top: cream fade at the bottom into page background
 */
const fs = require("fs");
const path = require("path");

const DARK_RIGHT =
  'style={{background: "linear-gradient(to right, rgba(10,47,29,0.92) 0%, rgba(10,47,29,0.85) 35%, rgba(10,47,29,0.5) 60%, rgba(10,47,29,0.15) 80%, transparent 100%)"}}';
const DARK_TOP =
  'style={{background: "linear-gradient(to top, rgba(10,47,29,0.6) 0%, transparent 40%)"}}';

const CREAM_RIGHT =
  'style={{background: "linear-gradient(to right, rgba(253,248,239,0.96) 0%, rgba(253,248,239,0.92) 38%, rgba(253,248,239,0.55) 62%, rgba(253,248,239,0.18) 82%, rgba(253,248,239,0.05) 100%)"}}';
const CREAM_TOP =
  'style={{background: "linear-gradient(to top, rgba(253,248,239,1) 0%, rgba(253,248,239,0) 30%)"}}';

// Remove the duplicate side image + noise layer block (whitespace-tolerant)
const DUP_BLOCK_RE =
  /<div className="absolute inset-0 bg-noise pointer-events-none opacity-30" \/><img src="\/boccia1?\.png" alt="[^"]*" className="absolute right-0 top-0 h-full w-1\/2 object-cover opacity-15" \/>/g;

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (f === "page.tsx") out.push(p);
  }
  return out;
}

const pages = walk("app").filter((p) => !p.includes("JPBA"));
let fixed = 0;
const touched = [];

for (const p of pages) {
  let c = fs.readFileSync(p, "utf8");
  if (!c.includes("rgba(10,47,29,0.92)")) continue; // only inline heroes with the broken overlay

  const orig = c;

  // 1. Remove duplicate image + noise block
  c = c.replace(DUP_BLOCK_RE, "");

  // 2. Swap dark overlays for cream fades
  c = c.split(DARK_RIGHT).join(CREAM_RIGHT);
  c = c.split(DARK_TOP).join(CREAM_TOP);

  // 3. Fallback: regex-based swap in case attribute spacing differs
  if (c.includes("rgba(10,47,29,0.92)")) {
    c = c.replace(
      /linear-gradient\(to right, rgba\(10,47,29,0\.92\) 0%, rgba\(10,47,29,0\.85\) 35%, rgba\(10,47,29,0\.5\) 60%, rgba\(10,47,29,0\.15\) 80%, transparent 100%\)/g,
      "linear-gradient(to right, rgba(253,248,239,0.96) 0%, rgba(253,248,239,0.92) 38%, rgba(253,248,239,0.55) 62%, rgba(253,248,239,0.18) 82%, rgba(253,248,239,0.05) 100%)"
    );
  }
  if (c.includes("rgba(10,47,29,0.6)")) {
    c = c.replace(
      /linear-gradient\(to top, rgba\(10,47,29,0\.6\) 0%, transparent 40%\)/g,
      "linear-gradient(to top, rgba(253,248,239,1) 0%, rgba(253,248,239,0) 30%)"
    );
  }

  if (c !== orig) {
    fs.writeFileSync(p, c);
    fixed++;
    touched.push(p.split(path.sep).slice(1).join("/"));
  }
}

console.log("Fixed " + fixed + " files:");
touched.forEach((t) => console.log("  - " + t));

// Verify no dark overlay remains in any hero
let remaining = 0;
for (const p of pages) {
  const c = fs.readFileSync(p, "utf8");
  if (c.includes("rgba(10,47,29,0.92)")) {
    remaining++;
    console.log("STILL BROKEN: " + p);
  }
}
console.log(remaining === 0 ? "VERIFIED: no dark hero overlays remain" : remaining + " files still broken");
